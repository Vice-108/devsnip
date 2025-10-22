import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "../db/schemas";

const client = createClient({
	url: process.env.DATABASE_URL as string,
	authToken: process.env.DATABASE_AUTH_TOKEN as string,
});

export const db = drizzle(client, { schema });
