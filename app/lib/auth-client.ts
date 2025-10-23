import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient({
	baseURL: "http://localhost:3000",
	// Disable automatic session refresh on window focus
	// This prevents unnecessary DB calls
	// fetchOptions: {
	// 	onError(context) {
	// 		console.error("Auth error:", context.error);
	// 	},
	// },
});

export const { signIn, signOut, signUp, useSession, forgetPassword, resetPassword, deleteUser, updateUser } = authClient;
