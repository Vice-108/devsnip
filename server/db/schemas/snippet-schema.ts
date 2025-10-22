import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const snippets = sqliteTable("snippets", {
	id: text("id").primaryKey(), // store UUID as text; generate on insert from your app
	creator: text("creator").notNull(), // creator user id (UUID as text)
	title: text("title").notNull(),
	description: text("description"),
	language: text("language").notNull(),
	public: integer("public", { mode: "boolean" }).default(false).notNull(), // boolean stored as 0/1, default false
	category: text("category"),
	code: text("code").notNull(),
	createdAt: text("created_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});
