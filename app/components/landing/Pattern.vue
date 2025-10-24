<template>
	<div class="relative min-h-screen w-full">
		<div
			class="z-00 absolute inset-0"
			:style="{
				background: `radial-gradient(ellipse 90% 25% at 50% 0%, oklch(from var(--primary) l c h / 0.8), transparent 70%), oklch(from var(--background) l c h)`,
			}"
		/>
		<div class="relative z-10">
			<slot />
		</div>
	</div>
</template>
