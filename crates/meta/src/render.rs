use std::path::Path;

use anyhow::{Context, Result};
use serde_json::Value;
use takumi::prelude::{Fonts, Node, OutputFormat, RenderOptions, Viewport};
use takumi_bindings_common::{build_font_resource, default_fonts};

use crate::theme::{FAMILY_BODY, FAMILY_DISPLAY, FAMILY_MONO, HEIGHT, WIDTH};

const FACES: [(&str, &str, &str); 3] = [
    // The variable Archivo names itself "Archivo SemiBold"; register it as `Archivo`.
    ("Archivo-VariableFont_wdth,wght.woff2", FAMILY_BODY, "sans-serif"),
    ("Oswald-VariableFont_wght.woff2", FAMILY_DISPLAY, "sans-serif"),
    ("JetBrainsMono-VariableFont_wght.woff2", FAMILY_MONO, "monospace"),
];

/// The fonts a render reads, registered the way `@takumi-rs/core`'s `Renderer` does:
/// its embedded last-resort face first, then ours.
pub struct Renderer {
    fonts: Fonts,
}

impl Renderer {
    pub fn new(font_dir: &Path) -> Result<Self> {
        let mut fonts = default_fonts().context("loading takumi's fallback font")?;
        for (file, name, generic) in FACES {
            let path = font_dir.join(file);
            let bytes = std::fs::read(&path).with_context(|| format!("reading {}", path.display()))?;
            build_font_resource(&bytes, Some(name.into()), None, None, None, None, Some(generic.into()))
                .and_then(|resource| resource.into_resolved())
                .and_then(|resource| fonts.register(resource))
                .with_context(|| format!("registering {name} from {file}"))?;
        }
        Ok(Self { fonts })
    }

    fn options(&self, node: Value) -> Result<RenderOptions<'_>> {
        let node: Node = serde_json::from_value(node).context("building the node tree")?;
        Ok(RenderOptions::builder().viewport(Viewport::new((WIDTH, HEIGHT))).node(node).fonts(&self.fonts).build())
    }

    pub fn render_png(&self, node: Value) -> Result<Vec<u8>> {
        let image = takumi::render(self.options(node)?)?;
        let mut png = Vec::new();
        takumi::write_image(&image, &mut png, OutputFormat::Png)?;
        Ok(png)
    }

    #[cfg(test)]
    pub fn measure(&self, node: Value) -> Result<takumi::prelude::MeasuredNode> {
        Ok(takumi::measure(self.options(node)?)?)
    }
}
