<template>
	<p>You are logged in to the dashboard</p>
	<UiButton @click="handleLogout">Logout</UiButton>
</template>
<script lang="ts" setup>
	const { signOut } = useAuth();

	const handleLogout = async () => {
		try {
			await signOut();
			useSonner.success("Logged out", {
				description: "You have successfully logged out.",
			});
			await navigateTo("/login");
		} catch (err) {
			useSonner.error("Logout failed", {
				description: (err as Error)?.message ?? "An error occurred.",
			});
		}
	};
</script>
