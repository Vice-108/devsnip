import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "../db/schemas";

let isLocal = process.env.APP_ENV === "development";

const client = createClient({
	url: isLocal ? "file:sqlite.db" : (process.env.DATABASE_URL as string),
	authToken: isLocal ? undefined : (process.env.DATABASE_AUTH_TOKEN as string),
});

export const db = drizzle(client, { schema });
