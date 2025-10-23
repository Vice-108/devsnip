import { useSession } from "~/lib/auth-client";

/**
 * Shared auth composable to prevent multiple session fetches
 * better-auth's useSession() should cache internally, but this ensures
 * we only call it once per app lifecycle
 */
export const useAuth = () => {
	return useSession();
};
