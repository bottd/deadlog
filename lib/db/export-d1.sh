#!/usr/bin/env bash
set -euo pipefail

db="$1"
out="$2"

mapfile -t tables < <(sqlite3 "$db" "
	WITH RECURSIVE
	link(child, parent) AS (
		SELECT m.name, fk.\"table\"
		FROM sqlite_master m, pragma_foreign_key_list(m.name) fk
		WHERE m.type = 'table'
	),
	depth(name, level) AS (
		SELECT name, 0 FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'
		UNION ALL
		SELECT link.child, depth.level + 1 FROM depth JOIN link ON link.parent = depth.name
		WHERE depth.level < 16
	)
	SELECT name FROM depth GROUP BY name ORDER BY MAX(level), name;
")

{
	for ((i = ${#tables[@]} - 1; i >= 0; i--)); do
		echo "DROP TABLE IF EXISTS ${tables[i]};"
	done
	for table in "${tables[@]}"; do
		sqlite3 "$db" ".dump $table"
	done | grep -v -E '^(BEGIN|COMMIT|ROLLBACK|SAVEPOINT|PRAGMA foreign_keys)'
	sqlite3 "$db" "SELECT sql || ';' FROM sqlite_master WHERE type = 'index' AND sql IS NOT NULL ORDER BY name;"
} > "$out"
