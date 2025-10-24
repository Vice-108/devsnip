<script setup lang="ts">
	const colorMode = useColorMode();

	const isDark = computed({
		get() {
			return colorMode.value === "dark";
		},
		set(_isDark) {
			colorMode.preference = _isDark ? "dark" : "light";
		},
	});
</script>

<template>
	<UiButton size="icon" color="neutral" variant="ghost" :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`" @click="isDark = !isDark">
		<Icon v-if="isDark" name="lucide:sun" class="size-5" />
		<Icon v-else name="lucide:moon" class="size-5" />
	</UiButton>
</template>
