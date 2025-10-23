import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import * as Authschema from "../db/schemas/auth-schema";
import { db } from "../utils/drizzle";

const auth = betterAuth({
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 5 * 60, // in seconds, e.g., 5 minutes
		},
	},
	database: drizzleAdapter(db, {
		provider: "sqlite",
		schema: Authschema,
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
});
export default auth;
