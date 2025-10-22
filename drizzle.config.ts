import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "turso", // "mysql" | "sqlite" | "postgresql" | "turso" | "singlestore"
	schema: "./server/db/schemas/index.ts",
	out: "./server/db/migrations",
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
		authToken: process.env.DATABASE_AUTH_TOKEN as string,
	},
});
