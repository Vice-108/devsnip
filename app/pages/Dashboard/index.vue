<template>
	<div>
		<div>
			<pre>{{ session.data }}</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useSession } from "~/lib/auth-client";

	definePageMeta({
		layout: "app",
	});
	const session = useSession();
</script>
