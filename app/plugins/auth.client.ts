import { useSession } from "~/lib/auth-client";

export default defineNuxtPlugin(() => {
	// Initialize session on app start
	// This fetches the session once and better-auth caches it
	const session = useSession();

	return {
		provide: {
			session,
		},
	};
});
