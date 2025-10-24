<template>
	<div class="bg-background relative min-h-screen w-full">
		<div
			class="absolute inset-0 opacity-30"
			:style="{
				backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 25px),
              linear-gradient(90deg, var(--border) 1px, transparent 25px)
            `,
				'background-size': '60px 60px',
			}"
		/>
		<div class="relative z-10">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts"></script>
