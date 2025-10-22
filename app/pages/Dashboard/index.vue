<template>
	<div>
		<div v-if="session">
			<h2>Welcome, {{ session.user.name }}</h2>
			<img :src="session.user.image as string" alt="User Avatar" class="user-avatar" />
			<p>Email: {{ session.user.email }}</p>
			<UiButton @click="logout">Logout</UiButton>
		</div>
		<div v-else-if="session === undefined">
			<p>Loading...</p>
		</div>
		<div v-else>
			<p>Not authenticated</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { signOut, useSession } from "~/lib/auth-client";

	const { data: session } = await useSession(useFetch);

	const logout = async () => {
		await signOut();
		navigateTo("/login");
	};
</script>

<style scoped>
	.user-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
</style>
