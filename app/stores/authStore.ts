import { useSession } from "~/lib/auth-client";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
	const session = useSession();
	const user = computed(() => session.value?.data?.user || null);
	const isLoggedIn = computed(() => !!user.value);
	return { session, user, isLoggedIn };
});
