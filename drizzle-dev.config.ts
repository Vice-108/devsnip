import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "turso", // "mysql" | "sqlite" | "postgresql" | "turso" | "singlestore"
	schema: "./server/db/schemas/index.ts",
	out: "./server/db/migrations",
	dbCredentials: {
		url: "file:sqlite.db",
	},
});
