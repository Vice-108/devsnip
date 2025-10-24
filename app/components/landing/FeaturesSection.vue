<template>
	<section id="features" class="py-20 lg:py-32">
		<UiContainer>
			<div class="bg-muted/50 mx-auto w-full rounded-2xl py-10 text-center">
				<h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need to Manage Code Snippets</h2>
				<p class="text-muted-foreground text-lg">Powerful features designed to streamline your development workflow and boost productivity.</p>
			</div>

			<!-- Bento Grid Layout -->
			<div class="mt-16 grid auto-rows-[minmax(280px,auto)] gap-4 md:grid-cols-6">
				<motion.div
					v-for="(feature, index) in features"
					:key="feature.id"
					:initial="{ opacity: 0, y: 20 }"
					:animate="{ opacity: 1, y: 0 }"
					:transition="{ duration: 0.5, delay: index * 0.1 }"
					:class="[
						'group bg-card relative overflow-hidden rounded-xl border p-6 transition-all hover:shadow-lg',
						// Row 1: 2-2-2 layout (3 cards spanning 2 cols each)
						index <= 2 && 'md:col-span-2',
						// Row 2: 3-3 layout (2 cards spanning 3 cols each)
						(index === 3 || index === 4) && 'md:col-span-3',
						// Row 3: 2-2-2 layout (2 cards spanning 3 cols each)
						(index === 5 || index === 6) && 'md:col-span-3',
					]"
				>
					<!-- Both Border Beam and Meteors on all cards -->
					<UiMeteors :number="8" class="opacity-30" />

					<div class="bg-primary/10 relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg">
						<Icon :name="feature.icon" class="text-primary size-6" />
					</div>
					<h3 class="relative z-10 mb-2 text-xl font-semibold">{{ feature.title }}</h3>
					<p class="text-muted-foreground relative z-10">{{ feature.description }}</p>
					<div class="bg-primary/5 absolute -top-6 -right-6 h-24 w-24 rounded-full transition-transform group-hover:scale-150"></div>
				</motion.div>
			</div>
		</UiContainer>
	</section>
</template>

<script setup lang="ts">
	import { motion } from "motion-v";

	const features = [
		{
			id: "1",
			icon: "lucide:code-2",
			title: "Syntax Highlighting",
			description: "Support for 50+ programming languages with beautiful syntax highlighting. Code looks great and stays readable.",
		},
		{
			id: "2",
			icon: "lucide:folder-tree",
			title: "Smart Organization",
			description: "Organize snippets by language, category, and tags. Find what you need instantly with powerful search.",
		},
		{
			id: "3",
			icon: "lucide:share-2",
			title: "Easy Sharing",
			description: "Share snippets with your team or make them public. Control visibility with granular privacy settings.",
		},
		{
			id: "4",
			icon: "lucide:zap",
			title: "Lightning Fast",
			description: "Built on modern tech stack for instant load times. Access your snippets faster than ever before.",
		},
		{
			id: "5",
			icon: "lucide:shield-check",
			title: "Secure & Private",
			description: "Your code is encrypted and stored securely. Choose what to share and keep sensitive snippets private.",
		},
		{
			id: "6",
			icon: "lucide:smartphone",
			title: "Works Everywhere",
			description: "Responsive design works on desktop, tablet, and mobile. Access your snippets from any device.",
		},
		{
			id: "7",
			icon: "lucide:github",
			title: "GitHub Integration",
			description: "Seamlessly sync your snippets with GitHub. Sign in with OAuth and keep your code in sync across platforms.",
		},
	];
</script>
