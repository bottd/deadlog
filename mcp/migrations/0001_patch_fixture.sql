CREATE TABLE changelogs (
	id TEXT PRIMARY KEY NOT NULL,
	title TEXT NOT NULL,
	slug TEXT NOT NULL,
	source_url TEXT NOT NULL,
	author TEXT NOT NULL,
	author_image TEXT NOT NULL,
	preview_image TEXT,
	pub_date TEXT NOT NULL,
	major_update INTEGER DEFAULT 0 NOT NULL,
	content_text TEXT
);

CREATE INDEX idx_changelogs_pub_date ON changelogs (pub_date);

CREATE UNIQUE INDEX idx_changelogs_slug ON changelogs (slug);

CREATE TABLE changelog_aliases (
	slug TEXT PRIMARY KEY NOT NULL,
	changelog_id TEXT NOT NULL REFERENCES changelogs (id)
);

CREATE TABLE metadata (key TEXT PRIMARY KEY NOT NULL, value TEXT);
