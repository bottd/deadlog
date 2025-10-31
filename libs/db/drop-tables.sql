-- Drop tables in order to respect foreign key constraints
-- Child tables first, then parent tables
DROP TABLE IF EXISTS changelog_items;

DROP TABLE IF EXISTS changelog_heroes;

DROP TABLE IF EXISTS changelog_icons;

DROP TABLE IF EXISTS changelogs;

DROP TABLE IF EXISTS items;

DROP TABLE IF EXISTS heroes;

DROP TABLE IF EXISTS metadata;
