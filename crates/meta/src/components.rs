use deadlog_model::make_summary;
use serde_json::{Value, json};

use crate::node::{Style, div, img, merge, px, style, text};
use crate::text::{Face, estimate_width, fit_display};
use crate::theme::{
    BORDER, CONTENT, FAMILY_BODY, FAMILY_DISPLAY, FAMILY_MONO, FONT_BODY, FONT_DISPLAY, FONT_LABEL,
    INSET, LEADING_BODY, PADDING, PLATE_HEIGHT, PLATE_WIDTH, RADIUS_CONTROL, RADIUS_THUMB,
    TRACKING_ANNOTATION, TRACKING_DISPLAY, TRACKING_LABEL, alpha, colors, cut_corners, wire_grid,
};

const PLATE_CORNER: i64 = 24;

fn fill() -> Style {
    style(json!({
        "position": "absolute",
        "top": "0px",
        "left": "0px",
        "width": px(PLATE_WIDTH),
        "height": px(PLATE_HEIGHT),
    }))
}

pub struct CardArt {
    pub src: String,
    pub clear: i64,
}

const VEIL_EASE: i64 = 227;

fn veil(clear: i64) -> String {
    let edge = BORDER + PADDING + clear;
    let at = |px: i64| format!("{:.2}%", px as f64 / PLATE_WIDTH as f64 * 100.0);
    [
        "linear-gradient(to right".to_string(),
        format!("{} 0%", colors::INK_RAISED),
        format!("{} {}", colors::INK_RAISED, at(edge)),
        format!("{} {}", alpha(colors::INK_RAISED, 0.88), at((edge + VEIL_EASE).min(PLATE_WIDTH))),
        format!("{} 100%)", alpha(colors::INK_RAISED, 0.6)),
    ]
    .join(", ")
}

const TICK_THICKNESS: i64 = 3;
const TICK_ARM: i64 = 34;
const TICK_INSET: i64 = 18;

fn corner_tick(top_left: bool, color: &str) -> Value {
    let anchor = if top_left {
        json!({ "top": px(TICK_INSET), "left": px(TICK_INSET) })
    } else {
        json!({ "bottom": px(TICK_INSET), "right": px(TICK_INSET) })
    };
    let bar = merge(
        style(json!({ "display": "flex", "position": "absolute", "backgroundColor": color })),
        anchor,
    );
    let arm = |width: i64, height: i64| {
        div(merge(bar.clone(), json!({ "width": px(width), "height": px(height) })), [])
    };
    div(
        style(json!({ "display": "flex" })),
        [Some(arm(TICK_ARM, TICK_THICKNESS)), Some(arm(TICK_THICKNESS, TICK_ARM))],
    )
}

fn wordmark() -> Value {
    let display = |color: &str| {
        style(json!({
            "display": "flex",
            "fontFamily": FAMILY_DISPLAY,
            "fontSize": "38px",
            "letterSpacing": TRACKING_DISPLAY,
            "color": color,
            "lineHeight": 1,
        }))
    };
    div(
        style(json!({ "display": "flex", "alignItems": "baseline", "gap": "10px" })),
        [
            Some(text(display(colors::PARCHMENT), "dead")),
            Some(text(merge(display(colors::AMBER), json!({ "marginLeft": "-10px" })), "log")),
            Some(text(
                style(json!({
                    "display": "flex",
                    "fontFamily": FAMILY_MONO,
                    "fontSize": "24px",
                    "letterSpacing": TRACKING_LABEL,
                    "color": colors::SEA,
                    "lineHeight": 1,
                })),
                ".IO",
            )),
        ],
    )
}

pub fn card(trailing: Option<&str>, art: Option<CardArt>, children: Value) -> Value {
    let art = art.map(|art| {
        div(
            style(json!({ "display": "flex" })),
            [
                Some(img(&art.src, merge(fill(), json!({ "objectFit": "cover" })))),
                Some(div(merge(fill(), json!({ "backgroundImage": veil(art.clear) })), [])),
            ],
        )
    });
    let trailing = trailing.filter(|trailing| !trailing.is_empty()).map(|trailing| {
        text(
            style(json!({
                "display": "flex",
                "fontFamily": FAMILY_MONO,
                "fontSize": FONT_LABEL,
                "letterSpacing": TRACKING_LABEL,
                "color": colors::SEA_DEEP,
            })),
            trailing,
        )
    });
    let rail = div(
        style(json!({
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "space-between",
            "width": "100%",
        })),
        [Some(wordmark()), trailing],
    );
    let column = div(
        style(json!({
            "display": "flex",
            "flexDirection": "column",
            "flex": 1,
            "width": "100%",
            "justifyContent": "center",
            "overflow": "hidden",
        })),
        [Some(children)],
    );
    let plate = div(
        style(json!({
            "display": "flex",
            "flexDirection": "column",
            "position": "relative",
            "width": "100%",
            "height": "100%",
            "backgroundColor": colors::INK_RAISED,
            "border": format!("{BORDER}px solid {}", colors::RULE),
            "clipPath": cut_corners(PLATE_CORNER),
            "padding": px(PADDING),
        })),
        [
            art,
            Some(corner_tick(true, colors::AMBER)),
            Some(corner_tick(false, colors::SEA)),
            Some(rail),
            Some(column),
        ],
    );
    div(
        style(json!({
            "width": "100%",
            "height": "100%",
            "display": "flex",
            "backgroundColor": colors::INK,
            "backgroundImage": wire_grid(),
            "padding": px(INSET),
            "fontFamily": FAMILY_BODY,
        })),
        [Some(plate)],
    )
}

pub fn divider() -> Value {
    div(
        style(json!({
            "display": "flex",
            "width": "100%",
            "height": "1px",
            "backgroundImage": "linear-gradient(to right, rgba(130,187,194,0.28) 0%, rgba(235,192,109,0.22) 50%, rgba(130,187,194,0.28) 80%, transparent 100%)",
        })),
        [],
    )
}

fn lede_line() -> i64 {
    (FONT_BODY as f64 * LEADING_BODY).round() as i64
}

fn display_size(text: &str, max_width: i64, lines: i64) -> i64 {
    let steps = if lines > 1 { &FONT_DISPLAY[1..] } else { &FONT_DISPLAY[..] };
    fit_display(text, max_width, steps, lines, Face::Display)
}

pub fn display_wraps(text: &str, max_width: i64, lines: i64) -> bool {
    estimate_width(text, display_size(text, max_width, lines), Face::Display) > max_width as f64
}

pub fn display(content: &str, max_width: i64, lines: i64) -> Value {
    let size = display_size(content, max_width, lines);
    let mut style = style(json!({
        "display": "flex",
        "width": px(max_width),
        "maxHeight": px((size as f64 * 1.08 * lines as f64).round() as i64),
        "overflow": "hidden",
        "fontFamily": FAMILY_DISPLAY,
        "fontSize": px(size),
        "letterSpacing": TRACKING_DISPLAY,
        "color": colors::PARCHMENT,
        "lineHeight": 1.08,
    }));
    if lines == 1 {
        style = merge(style, json!({ "whiteSpace": "nowrap", "textOverflow": "ellipsis" }));
    }
    text(style, content)
}

pub fn lede(content: &str, max_width: i64, lines: i64) -> Option<Value> {
    let per_line = (max_width as f64 * 0.85 / estimate_width("x", FONT_BODY, Face::Body)).floor();
    let max = (per_line as i64 * lines).max(0) as usize;
    let trimmed = make_summary(Some(content), max);
    if trimmed.is_empty() || lines < 1 {
        return None;
    }
    Some(text(
        style(json!({
            "display": "flex",
            "width": px(max_width),
            "maxHeight": px(lede_line() * lines),
            "overflow": "hidden",
            "fontFamily": FAMILY_BODY,
            "fontSize": px(FONT_BODY),
            "color": colors::STONE,
            "lineHeight": LEADING_BODY,
        })),
        trimmed,
    ))
}

pub struct Segment {
    pub text: String,
    pub color: Option<&'static str>,
}

impl Segment {
    pub fn new(text: impl Into<String>, color: Option<&'static str>) -> Self {
        Self { text: text.into(), color }
    }
}

const ROW_STEPS: [i64; 4] = [30, 26, 23, 20];

pub fn annotation(segments: &[Segment], max_width: i64) -> Option<Value> {
    let shown: Vec<&Segment> = segments.iter().filter(|segment| !segment.text.is_empty()).collect();
    if shown.is_empty() {
        return None;
    }
    let measured = shown.iter().map(|segment| segment.text.as_str()).collect::<String>()
        + &"·".repeat((shown.len() - 1) * 3);
    let size = fit_display(&measured, max_width, &ROW_STEPS, 1, Face::Mono);
    let gap = (size as f64 * 0.45).round() as i64;

    let separator = || {
        text(
            style(json!({
                "display": "flex",
                "flexShrink": 0,
                "fontFamily": FAMILY_MONO,
                "fontSize": px(size),
                "color": colors::SEA_DEEP,
                "lineHeight": 1,
            })),
            "·",
        )
    };
    let children = shown.iter().enumerate().flat_map(|(index, segment)| {
        let label = text(
            style(json!({
                "display": "flex",
                "flexShrink": 0,
                "whiteSpace": "nowrap",
                "fontFamily": FAMILY_MONO,
                "fontSize": px(size),
                "letterSpacing": TRACKING_ANNOTATION,
                "color": segment.color.unwrap_or(colors::STONE),
                "lineHeight": 1,
            })),
            segment.text.clone(),
        );
        [(index > 0).then(separator), Some(label)]
    });
    Some(div(
        style(json!({
            "display": "flex",
            "alignItems": "center",
            "flexWrap": "nowrap",
            "gap": px(gap),
        })),
        children.collect::<Vec<_>>(),
    ))
}

pub fn flag(content: &str) -> Value {
    text(
        style(json!({
            "display": "flex",
            "alignItems": "center",
            "backgroundColor": colors::AMBER_FIELD,
            "padding": "8px 16px",
            "fontFamily": FAMILY_MONO,
            "fontSize": FONT_LABEL,
            "letterSpacing": TRACKING_LABEL,
            "color": colors::AMBER,
            "lineHeight": 1,
        })),
        content,
    )
}

#[derive(Debug, Clone, Copy)]
pub enum Fit {
    Cover,
    Contain,
}

impl Fit {
    fn as_str(self) -> &'static str {
        match self {
            Self::Cover => "cover",
            Self::Contain => "contain",
        }
    }
}

pub fn thumb(src: &str, width: i64, height: i64, fit: Fit, tone: Option<&str>) -> Value {
    div(
        style(json!({
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "width": px(width),
            "height": px(height),
            "backgroundColor": colors::INK_PLATE,
            "border": format!("1px solid {}", tone.unwrap_or(colors::RULE)),
            "borderRadius": RADIUS_THUMB,
            "overflow": "hidden",
        })),
        [Some(img(
            src,
            style(json!({
                "width": px(width),
                "height": px(height),
                "objectFit": fit.as_str(),
                "borderRadius": RADIUS_THUMB,
            })),
        ))],
    )
}

#[derive(Debug, Clone, PartialEq)]
pub struct RowIcon {
    pub src: String,
    pub tone: Option<&'static str>,
}

fn entity_row(label: &str, icons: &[RowIcon], extra: usize, tone: &str) -> Option<Value> {
    if icons.is_empty() {
        return None;
    }
    let more = (extra > 0).then(|| {
        text(
            style(json!({
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center",
                "height": "64px",
                "padding": "0 16px",
                "backgroundColor": colors::INK_PLATE,
                "border": format!("1px solid {}", colors::RULE_SUBTLE),
                "borderRadius": RADIUS_CONTROL,
                "fontFamily": FAMILY_MONO,
                "fontSize": FONT_LABEL,
                "color": colors::STONE,
                "lineHeight": 1,
            })),
            format!("+{extra}"),
        )
    });
    let thumbs = icons.iter().map(|icon| Some(thumb(&icon.src, 64, 64, Fit::Cover, icon.tone)));
    Some(div(
        style(json!({ "display": "flex", "alignItems": "center", "gap": "20px" })),
        [
            Some(text(
                style(json!({
                    "display": "flex",
                    "width": "128px",
                    "fontFamily": FAMILY_MONO,
                    "fontSize": FONT_LABEL,
                    "letterSpacing": TRACKING_LABEL,
                    "color": tone,
                    "lineHeight": 1,
                })),
                label,
            )),
            Some(div(
                style(json!({ "display": "flex", "alignItems": "center", "gap": "12px" })),
                thumbs.chain([more]).collect::<Vec<_>>(),
            )),
        ],
    ))
}

pub fn patch_rows(
    hero_icons: &[RowIcon],
    item_icons: &[RowIcon],
    hero_count: usize,
    item_count: usize,
) -> Option<Value> {
    if hero_icons.is_empty() && item_icons.is_empty() {
        return None;
    }
    Some(div(
        style(json!({ "display": "flex", "flexDirection": "column", "gap": "18px" })),
        [
            Some(divider()),
            entity_row("HEROES", hero_icons, hero_count.saturating_sub(hero_icons.len()), colors::AMBER),
            entity_row("ITEMS", item_icons, item_count.saturating_sub(item_icons.len()), colors::SEA),
        ],
    ))
}

const ENTITY_GAP: i64 = 48;

pub struct EntityCard<'a> {
    pub name: &'a str,
    pub image: &'a str,
    pub thumb: (i64, i64),
    pub fit: Fit,
    pub segments: Vec<Segment>,
    pub history: &'a str,
}

pub fn entity_card(props: EntityCard) -> Value {
    let (thumb_width, thumb_height) = props.thumb;
    let column = CONTENT - thumb_width - ENTITY_GAP;
    card(
        Some("PATCH HISTORY"),
        None,
        div(
            style(json!({ "display": "flex", "alignItems": "center", "gap": px(ENTITY_GAP) })),
            [
                Some(thumb(props.image, thumb_width, thumb_height, props.fit, None)),
                Some(div(
                    style(json!({
                        "display": "flex",
                        "flexDirection": "column",
                        "gap": "26px",
                        "width": px(column),
                    })),
                    [
                        Some(display(props.name, column, 1)),
                        annotation(&props.segments, column),
                        Some(div(
                            style(json!({ "display": "flex", "flexDirection": "column", "gap": "22px" })),
                            [Some(divider()), lede(props.history, column, 2)],
                        )),
                    ],
                )),
            ],
        ),
    )
}
