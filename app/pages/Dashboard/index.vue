<template>
	<p>You are logged in to the dashboard</p>
	<UiButton @click="handleLogout">Logout</UiButton>
</template>
<script lang="ts" setup>
	const handleLogout = async () => {
		console.log("logged out");
	};
</script>
