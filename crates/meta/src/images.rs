use std::collections::HashMap;
use std::sync::{Arc, Mutex, OnceLock};
use std::time::Duration;

use anyhow::{Result, bail};
use base64::Engine;

/// Fetches a URL as a `data:` URI; an empty string means it could not be fetched.
pub type Fetch<'a> = dyn Fn(&str) -> String + Send + Sync + 'a;

pub fn http_fetcher() -> impl Fn(&str) -> String + Send + Sync {
    let agent: ureq::Agent = ureq::Agent::config_builder()
        .timeout_global(Some(Duration::from_secs(60)))
        .http_status_as_error(false)
        .build()
        .into();
    move |url| fetch_data_uri(&agent, url)
}

fn fetch_data_uri(agent: &ureq::Agent, url: &str) -> String {
    let response = match agent.get(url).call() {
        Ok(response) => response,
        Err(error) => {
            eprintln!("Error fetching image {url}: {error}");
            return String::new();
        }
    };
    let status = response.status();
    if !status.is_success() {
        eprintln!("Failed to fetch image: {url} ({})", status.as_u16());
        return String::new();
    }
    let content_type = response
        .headers()
        .get("content-type")
        .and_then(|value| value.to_str().ok())
        .filter(|value| !value.is_empty())
        .unwrap_or("image/png")
        .to_string();
    match response.into_body().with_config().limit(64 * 1024 * 1024).read_to_vec() {
        Ok(bytes) => data_uri(&content_type, &bytes),
        Err(error) => {
            eprintln!("Error fetching image {url}: {error}");
            String::new()
        }
    }
}

pub fn data_uri(content_type: &str, bytes: &[u8]) -> String {
    let base64 = base64::engine::general_purpose::STANDARD.encode(bytes);
    format!("data:{content_type};base64,{base64}")
}

pub fn convert(fetch: &Fetch, url: &str) -> Result<String> {
    if url.is_empty() || url.starts_with("data:") {
        return Ok(url.to_string());
    }
    let uri = fetch(url);
    if uri.is_empty() {
        bail!("Failed to fetch image: {url}");
    }
    Ok(uri)
}

type Slot = Arc<OnceLock<Result<Arc<str>, String>>>;

/// One fetch per URL per run, shared by every preview that shows it, with concurrent
/// requests for the same URL waiting on the first.
pub struct ImageCache<'a> {
    fetch: &'a Fetch<'a>,
    slots: Mutex<HashMap<String, Slot>>,
}

impl<'a> ImageCache<'a> {
    pub fn new(fetch: &'a Fetch<'a>) -> Self {
        Self { fetch, slots: Mutex::new(HashMap::new()) }
    }

    pub fn get(&self, url: &str) -> Result<Arc<str>> {
        if url.is_empty() {
            return Ok(Arc::from(""));
        }
        let slot = self.slots.lock().unwrap().entry(url.to_string()).or_default().clone();
        let result =
            slot.get_or_init(|| convert(self.fetch, url).map(Arc::from).map_err(|e| e.to_string()));
        match result {
            Ok(uri) => Ok(uri.clone()),
            Err(error) => {
                // Drop a failed fetch from the cache: memoizing the rejection would turn one
                // blip on a shared icon into a failure for every later preview that uses it.
                let mut slots = self.slots.lock().unwrap();
                if slots.get(url).is_some_and(|current| Arc::ptr_eq(current, &slot)) {
                    slots.remove(url);
                }
                bail!("{error}")
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use std::sync::atomic::{AtomicUsize, Ordering};

    use super::*;

    #[test]
    fn missing_optional_images_are_not_fetched() {
        let calls = AtomicUsize::new(0);
        let fetch = |_: &str| {
            calls.fetch_add(1, Ordering::SeqCst);
            "data:image/png;base64,AA==".to_string()
        };
        assert_eq!(convert(&fetch, "").unwrap(), "");
        assert_eq!(
            convert(&fetch, "data:image/png;base64,BB==").unwrap(),
            "data:image/png;base64,BB=="
        );
        assert_eq!(ImageCache::new(&fetch).get("").unwrap().as_ref(), "");
        assert_eq!(calls.load(Ordering::SeqCst), 0);
    }

    #[test]
    fn a_shared_url_is_fetched_once() {
        let calls = AtomicUsize::new(0);
        let fetch = |_: &str| {
            calls.fetch_add(1, Ordering::SeqCst);
            "data:image/png;base64,AA==".to_string()
        };
        let cache = ImageCache::new(&fetch);
        std::thread::scope(|scope| {
            for _ in 0..8 {
                scope.spawn(|| cache.get("https://images.example/shared.webp").unwrap());
            }
        });
        assert_eq!(calls.load(Ordering::SeqCst), 1);
    }

    #[test]
    fn a_failed_fetch_is_retried() {
        let calls = AtomicUsize::new(0);
        let fetch = |_: &str| {
            if calls.fetch_add(1, Ordering::SeqCst) == 0 {
                String::new()
            } else {
                "data:,x".to_string()
            }
        };
        let cache = ImageCache::new(&fetch);
        let url = "https://images.example/flaky.webp";
        assert!(cache.get(url).unwrap_err().to_string().contains(url));
        assert_eq!(cache.get(url).unwrap().as_ref(), "data:,x");
        assert_eq!(cache.get(url).unwrap().as_ref(), "data:,x");
        assert_eq!(calls.load(Ordering::SeqCst), 2);
    }
}
