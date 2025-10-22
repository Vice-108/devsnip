import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import * as Authschema from "../db/schemas/auth-schema";
import { db } from "../utils/drizzle";

const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
		schema: Authschema,
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
});
export default auth;
