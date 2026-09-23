//! Local server. By default it builds into memory, serves that build, and rebuilds
//! when the database, the changelogs or `web/` change; the browser reloads itself.
//! `--static` serves an existing `dist/` with the host's rules instead: extensionless
//! routes resolve to `.html`, `_redirects` applies, unknown paths get `404.html`.

use std::fs;
use std::path::{Path, PathBuf};
use std::sync::{Arc, RwLock};
use std::time::Duration;

use anyhow::{Context, Result};
use axum::body::Body;
use axum::extract::State;
use axum::http::{HeaderValue, Request, Response, StatusCode, header};
use axum::Router;
use notify::{RecursiveMode, Watcher};
use tower_livereload::LiveReloadLayer;

use crate::hosting::Redirect;
use crate::output::{Content, Output};
use crate::BuildOptions;

trait Source: Send + Sync {
    fn read(&self, path: &str) -> Option<Vec<u8>>;
    fn redirects(&self) -> Vec<Redirect>;
}

struct Memory(RwLock<Output>);

impl Source for Memory {
    fn read(&self, path: &str) -> Option<Vec<u8>> {
        match self.0.read().ok()?.get(path)? {
            Content::Bytes(bytes) => Some(bytes.clone()),
            Content::File(source) => fs::read(source).ok(),
        }
    }

    fn redirects(&self) -> Vec<Redirect> {
        self.read("_redirects").map(|text| crate::hosting::parse_redirects(&String::from_utf8_lossy(&text))).unwrap_or_default()
    }
}

struct Directory(PathBuf);

impl Source for Directory {
    fn read(&self, path: &str) -> Option<Vec<u8>> {
        let target = self.0.join(path);
        target.starts_with(&self.0).then(|| fs::read(target).ok()).flatten()
    }

    fn redirects(&self) -> Vec<Redirect> {
        self.read("_redirects").map(|text| crate::hosting::parse_redirects(&String::from_utf8_lossy(&text))).unwrap_or_default()
    }
}

fn content_type(path: &str) -> &'static str {
    match Path::new(path).extension().and_then(|extension| extension.to_str()).unwrap_or_default() {
        "html" => "text/html; charset=utf-8",
        "css" => "text/css; charset=utf-8",
        "js" => "text/javascript; charset=utf-8",
        "json" | "webmanifest" => "application/json",
        "xml" => "application/xml",
        "txt" | "" => "text/plain; charset=utf-8",
        "svg" => "image/svg+xml",
        "png" => "image/png",
        "webp" => "image/webp",
        "ico" => "image/x-icon",
        "woff2" => "font/woff2",
        _ => "application/octet-stream",
    }
}

fn respond(status: StatusCode, path: &str, bytes: Vec<u8>) -> Response<Body> {
    let mut response = Response::new(Body::from(bytes));
    *response.status_mut() = status;
    response.headers_mut().insert(header::CONTENT_TYPE, HeaderValue::from_static(content_type(path)));
    response
}

/// The host's `html_handling = "auto-trailing-slash"`: `/a` serves `a.html`, `/a/`
/// redirects to `/a` when `a.html` exists, and `/` serves `index.html`.
async fn handle(State(source): State<Arc<dyn Source>>, request: Request<Body>) -> Response<Body> {
    let raw = request.uri().path();
    let Ok(decoded) = percent_decode(raw) else {
        return respond(StatusCode::BAD_REQUEST, "x.txt", b"bad path".to_vec());
    };
    let query = request.uri().query().map(|query| format!("?{query}")).unwrap_or_default();

    for redirect in source.redirects() {
        if redirect.from == raw || redirect.from == decoded {
            let mut response = Response::new(Body::empty());
            *response.status_mut() = StatusCode::from_u16(redirect.status).unwrap_or(StatusCode::PERMANENT_REDIRECT);
            response.headers_mut().insert(header::LOCATION, HeaderValue::from_str(&format!("{}{query}", redirect.to)).unwrap());
            return response;
        }
    }

    let path = decoded.trim_start_matches('/');
    if path.is_empty() {
        if let Some(bytes) = source.read("index.html") {
            return respond(StatusCode::OK, "index.html", bytes);
        }
    } else if let Some(stripped) = path.strip_suffix('/') {
        if source.read(&format!("{stripped}.html")).is_some() {
            let mut response = Response::new(Body::empty());
            *response.status_mut() = StatusCode::TEMPORARY_REDIRECT;
            response.headers_mut().insert(header::LOCATION, HeaderValue::from_str(&format!("/{stripped}{query}")).unwrap());
            return response;
        }
    } else if let Some(bytes) = source.read(path) {
        return respond(StatusCode::OK, path, bytes);
    } else if let Some(bytes) = source.read(&format!("{path}.html")) {
        return respond(StatusCode::OK, "page.html", bytes);
    }
    let bytes = source.read("404.html").unwrap_or_else(|| b"Not found".to_vec());
    respond(StatusCode::NOT_FOUND, "404.html", bytes)
}

fn percent_decode(path: &str) -> Result<String, ()> {
    let bytes = path.as_bytes();
    let mut out = Vec::with_capacity(bytes.len());
    let mut index = 0;
    while index < bytes.len() {
        if bytes[index] == b'%' {
            let hex = path.get(index + 1..index + 3).ok_or(())?;
            out.push(u8::from_str_radix(hex, 16).map_err(|_| ())?);
            index += 3;
        } else {
            out.push(bytes[index]);
            index += 1;
        }
    }
    String::from_utf8(out).map_err(|_| ())
}

pub fn run(options: BuildOptions, out: PathBuf, port: u16, static_only: bool) -> Result<()> {
    let runtime = tokio::runtime::Runtime::new()?;
    runtime.block_on(async move {
        let address = format!("127.0.0.1:{port}");
        if static_only {
            let source: Arc<dyn Source> = Arc::new(Directory(fs::canonicalize(&out).with_context(|| format!("{} does not exist; run `deadlog build` first", out.display()))?));
            let app = Router::new().fallback(handle).with_state(source);
            let listener = tokio::net::TcpListener::bind(&address).await?;
            println!("Serving {} at http://{address}", out.display());
            axum::serve(listener, app).await?;
            return Ok(());
        }

        let mut options = options;
        options.minify = false;
        options.analytics = false;
        let (output, report) = crate::build(&options)?;
        println!("Built {} pages in {} ms", report.pages, report.millis);
        let memory = Arc::new(Memory(RwLock::new(output)));
        let livereload = LiveReloadLayer::new();
        let reloader = livereload.reloader();

        let (sender, mut receiver) = tokio::sync::mpsc::unbounded_channel();
        let mut watcher = notify::recommended_watcher(move |event: notify::Result<notify::Event>| {
            if event.is_ok_and(|event| event.kind.is_modify() || event.kind.is_create() || event.kind.is_remove()) {
                let _ = sender.send(());
            }
        })?;
        for path in [&options.web, &options.changelogs, &options.db] {
            watcher.watch(path, RecursiveMode::Recursive).with_context(|| format!("watching {}", path.display()))?;
        }
        let rebuild_target = memory.clone();
        let rebuild_options = options.clone();
        tokio::spawn(async move {
            let _watcher = watcher;
            while receiver.recv().await.is_some() {
                tokio::time::sleep(Duration::from_millis(150)).await;
                while receiver.try_recv().is_ok() {}
                match crate::build(&rebuild_options) {
                    Ok((output, report)) => {
                        if let Ok(mut current) = rebuild_target.0.write() {
                            *current = output;
                        }
                        println!("Rebuilt {} pages in {} ms", report.pages, report.millis);
                        reloader.reload();
                    }
                    Err(error) => eprintln!("Rebuild failed: {error:#}"),
                }
            }
        });

        let source: Arc<dyn Source> = memory;
        let app = Router::new().fallback(handle).with_state(source).layer(livereload);
        let listener = tokio::net::TcpListener::bind(&address).await?;
        println!("Serving at http://{address} (templates are compiled in: rerun after editing them)");
        axum::serve(listener, app).await?;
        Ok(())
    })
}
