<template>
	<section id="hero" class="relative overflow-hidden py-20 lg:py-32">
		<UiContainer class="relative">
			<div class="mx-auto max-w-4xl text-center">
				<motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }">
					<div class="bg-muted/60 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm">
						<Icon name="lucide:sparkles" class="text-primary size-4" />
						<span class="font-medium">Your Code, Organized & Accessible</span>
					</div>

					<h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						Store, Manage & Share Your
						<span class="from-primary to-primary/60 bg-linear-to-r bg-clip-text text-transparent"> Code Snippets </span>
						Effortlessly
					</h1>

					<p class="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
						DevSnip is your personal code library. Save reusable snippets, organize by language and category, and access them anywhere. Built for developers who value efficiency.
					</p>

					<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<UiButton size="lg" to="/signup" class="w-full sm:w-auto" effect="ringHover">
							<Icon name="lucide:rocket" class="mr-2 size-5" />
							Get Started Free
						</UiButton>
					</div>

					<p class="text-muted-foreground mt-4 text-sm">No credit card required • Free forever • GitHub OAuth supported</p>
				</motion.div>

				<!-- Hero Image/Preview -->
				<motion.div :initial="{ opacity: 0, y: 40 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.7, delay: 0.2 }" class="mt-16">
					<div class="relative mx-auto max-w-5xl">
						<div class="border-muted bg-muted/50 relative overflow-hidden rounded-lg border-5 p-1 shadow-2xl backdrop-blur-sm">
							<div class="bg-accent/20 aspect-video rounded-lg p-2 backdrop-blur-md"></div>
							<BorderBeam :size="150" :borderWidth="4" />
						</div>
					</div>
				</motion.div>
			</div>
		</UiContainer>
	</section>
</template>

<script setup lang="ts">
	import { motion } from "motion-v";
</script>
