<template>
	<section id="how-it-works">
		<UiContainer>
			<div class="bg-muted border-muted/50 mx-auto rounded-2xl border px-10 py-20 shadow-lg sm:px-16 lg:px-24">
				<div class="mx-auto max-w-2xl text-center">
					<h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Start Organizing in 3 Simple Steps</h2>
					<p class="text-muted-foreground text-lg">Get up and running with DevSnip in less than a minute.</p>
				</div>

				<div class="mt-16 grid gap-8 md:grid-cols-3">
					<div v-for="(step, index) in steps" :key="step.title" class="relative text-center">
						<div class="bg-primary text-primary-foreground mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold">
							{{ index + 1 }}
						</div>
						<h3 class="mb-3 text-xl font-semibold">{{ step.title }}</h3>
						<p class="text-muted-foreground">{{ step.description }}</p>

						<!-- Connecting Line (hidden on mobile) -->
						<div v-if="index < steps.length" class="from-primary absolute top-8 right-0 hidden h-0.5 w-full bg-linear-to-r to-transparent md:block"></div>
					</div>
				</div>
			</div>
		</UiContainer>
	</section>
</template>

<script setup lang="ts">
	const steps = [
		{
			title: "Create Account",
			description: "Sign up with email or GitHub OAuth in seconds. No credit card required, completely free.",
		},
		{
			title: "Add Snippets",
			description: "Paste your code, select the language, add tags and categories. It's that simple.",
		},
		{
			title: "Access Anywhere",
			description: "Search, copy, and reuse your snippets from any device. Boost your productivity instantly.",
		},
	];
</script>
