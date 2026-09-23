//! The one seam between the scraper and the network, so tests can replay recorded
//! responses instead of reaching Valve's forum, Steam or the Deadlock API.

use std::time::Duration;

use anyhow::{Context, Result};

#[derive(Debug, Clone, PartialEq)]
pub struct Response {
    pub status: u16,
    pub status_text: String,
    pub body: String,
}

impl Response {
    pub fn ok(&self) -> bool {
        (200..300).contains(&self.status)
    }
}

pub trait Http: Sync {
    fn get(&self, url: &str, headers: &[(&str, &str)], timeout: Option<Duration>) -> Result<Response>;
}

pub struct ReqwestHttp {
    client: reqwest::blocking::Client,
}

impl ReqwestHttp {
    pub fn new() -> Result<Self> {
        let client = reqwest::blocking::Client::builder().timeout(None).build()?;
        Ok(Self { client })
    }
}

impl Http for ReqwestHttp {
    fn get(&self, url: &str, headers: &[(&str, &str)], timeout: Option<Duration>) -> Result<Response> {
        let mut request = self.client.get(url);
        for (name, value) in headers {
            request = request.header(*name, *value);
        }
        if let Some(timeout) = timeout {
            request = request.timeout(timeout);
        }
        let response = request.send().with_context(|| format!("GET {url}"))?;
        let status = response.status();
        Ok(Response {
            status: status.as_u16(),
            status_text: status.canonical_reason().unwrap_or_default().to_string(),
            body: response.text().with_context(|| format!("reading {url}"))?,
        })
    }
}
