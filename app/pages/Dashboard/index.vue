<template>
	<div>
		<div>
			<pre>{{ session.data }}</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "app",
	});

	// Use the session from the plugin instead of calling useSession() again
	const { $session } = useNuxtApp();
	const session = $session;
</script>
