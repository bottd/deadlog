CREATE TABLE `changelog_aliases` (
	`slug` text PRIMARY KEY NOT NULL,
	`changelog_id` text NOT NULL,
	FOREIGN KEY (`changelog_id`) REFERENCES `changelogs`(`id`) ON UPDATE no action ON DELETE no action
);
CREATE TABLE `changelog_heroes` (
	`changelog_id` text NOT NULL,
	`hero_id` integer NOT NULL,
	`change_groups` text,
	`impact` text,
	`related_items` text,
	`ability_order` text,
	PRIMARY KEY(`changelog_id`, `hero_id`),
	FOREIGN KEY (`changelog_id`) REFERENCES `changelogs`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`hero_id`) REFERENCES `heroes`(`id`) ON UPDATE no action ON DELETE no action
);
CREATE INDEX `changelog_heroes_hero_id_idx` ON `changelog_heroes` (`hero_id`);
CREATE TABLE `changelog_items` (
	`changelog_id` text NOT NULL,
	`item_id` integer NOT NULL,
	`change_groups` text,
	`impact` text,
	`bought_by` text,
	PRIMARY KEY(`changelog_id`, `item_id`),
	FOREIGN KEY (`changelog_id`) REFERENCES `changelogs`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE no action
);
CREATE INDEX `changelog_items_item_id_idx` ON `changelog_items` (`item_id`);
CREATE TABLE `changelogs` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`source_url` text NOT NULL,
	`author` text NOT NULL,
	`author_image` text NOT NULL,
	`preview_image` text,
	`pub_date` text NOT NULL,
	`major_update` integer DEFAULT false NOT NULL,
	`content_text` text,
	`stats` text
);
CREATE INDEX `idx_changelogs_pub_date` ON `changelogs` (`pub_date`);
CREATE UNIQUE INDEX `idx_changelogs_slug` ON `changelogs` (`slug`);
CREATE TABLE `hero_abilities` (
	`hero_id` integer NOT NULL,
	`position` integer NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`image` text NOT NULL,
	`description` text,
	`asset_id` integer,
	`class_name` text,
	`context` text,
	PRIMARY KEY(`hero_id`, `position`),
	FOREIGN KEY (`hero_id`) REFERENCES `heroes`(`id`) ON UPDATE no action ON DELETE no action
);
CREATE UNIQUE INDEX `hero_abilities_hero_slug_idx` ON `hero_abilities` (`hero_id`,`slug`);
CREATE TABLE `heroes` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`class_name` text NOT NULL,
	`hero_type` text,
	`images` text NOT NULL,
	`is_released` integer DEFAULT true NOT NULL
);
CREATE UNIQUE INDEX `heroes_slug_unique` ON `heroes` (`slug`);
CREATE TABLE `items` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`class_name` text NOT NULL,
	`type` text NOT NULL,
	`category` text,
	`tier` integer,
	`image` text NOT NULL,
	`is_released` integer DEFAULT false NOT NULL,
	`context` text
);
CREATE UNIQUE INDEX `items_slug_unique` ON `items` (`slug`);
CREATE TABLE `metadata` (
	`key` text PRIMARY KEY NOT NULL,
	`value` text
);
CREATE TABLE `property_events` (
	`changelog_id` text NOT NULL,
	`entity_type` text NOT NULL,
	`entity_id` integer NOT NULL,
	`ability_slug` text,
	`group_index` integer NOT NULL,
	`bullet_index` integer NOT NULL,
	`property` text NOT NULL,
	`qualifier` text NOT NULL,
	`old_value` text NOT NULL,
	`new_value` text NOT NULL,
	`digest` text NOT NULL,
	`extraction_version` integer NOT NULL,
	`previous_changelog_id` text,
	`previous_old` text,
	`previous_new` text,
	PRIMARY KEY(`changelog_id`, `entity_type`, `entity_id`, `group_index`, `bullet_index`),
	FOREIGN KEY (`changelog_id`) REFERENCES `changelogs`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`previous_changelog_id`) REFERENCES `changelogs`(`id`) ON UPDATE no action ON DELETE no action
);
CREATE INDEX `idx_property_events_entity` ON `property_events` (`entity_type`,`entity_id`);
