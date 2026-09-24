mod common;

use common::temp_dir;
use deadlog_db::write::snapshot::{EntitySnapshot, read_snapshot};
use deadlog_db::write::{BuildOptions, build_database};

fn note(published: &str) -> String {
    [
        "``attr:",
        "title \"Test patch\"",
        "thread_id \"1\"",
        &format!("published \"{published}\""),
        "author \"Yoshi\"",
        "content_text \"Balance change\"",
        "``",
        "# General Changes",
        "- Balance change",
    ]
    .join("\n")
}

#[test]
fn a_failed_build_leaves_the_published_database_alone() {
    let dir = temp_dir("build");
    let (notes, output) = (dir.join("notes"), dir.join("output"));
    std::fs::create_dir_all(&notes).unwrap();
    let heroes: Vec<serde_json::Value> = (0..60)
        .map(|index| serde_json::json!({ "id": index + 1, "name": format!("Prototype {index}"), "class_name": format!("hero_{index}"),
            "images": { "icon_image_small": "https://images.example/hero.webp" }, "player_selectable": false }))
        .collect();
    let snapshot: EntitySnapshot =
        read_snapshot(&serde_json::json!({ "heroes": heroes, "items": [] }).to_string()).unwrap();
    let options = |built_at: &str| BuildOptions {
        output_dir: output.clone(),
        changelogs_dir: notes.clone(),
        snapshot: &snapshot,
        big_days: &[],
        built_at: built_at.into(),
    };

    std::fs::write(notes.join("patch.mg"), note("2026-09-01T20:00:00.000Z")).unwrap();
    let result = build_database(&options("2026-09-01T00:00:00.000Z")).unwrap();
    assert_eq!(result.patch_count, 1);
    let published = std::fs::read(&result.path).unwrap();
    let count = |path: &std::path::Path| -> i64 {
        rusqlite::Connection::open(path)
            .unwrap()
            .query_row("SELECT COUNT(*) FROM heroes", [], |row| row.get(0))
            .unwrap()
    };
    assert_eq!(count(&result.path), 60);

    std::fs::write(notes.join("patch.mg"), note("invalid-date")).unwrap();
    assert!(build_database(&options("2026-09-02T00:00:00.000Z")).is_err());
    assert_eq!(std::fs::read(&result.path).unwrap(), published);
    assert_eq!(count(&output.join("deadlog.db.building")), 0);
}
