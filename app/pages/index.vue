<template>
	<LandingPattern>
		<LandingNavigationHeader />
		<LandingHeroSection />
		<LandingFeaturesSection />
		<LandingHowItWorksSection />
		<LandingCtaSection />
		<LandingFaqSection />
		<LandingFooterSection />
	</LandingPattern>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "default",
	});

	useSeoMeta({
		title: "DevSnip - Your Personal Code Snippet Manager",
		description: "Store, organize, and share your code snippets effortlessly. DevSnip helps developers manage reusable code with syntax highlighting, categories, and instant search.",
		ogTitle: "DevSnip - Your Personal Code Snippet Manager",
		ogDescription: "Store, organize, and share your code snippets effortlessly. Built for developers who value efficiency.",
		ogImage: "https://placehold.co/1200x630/png?text=DevSnip",
		ogUrl: "https://devsnip.com",
		twitterCard: "summary_large_image",
		twitterTitle: "DevSnip - Your Personal Code Snippet Manager",
		twitterDescription: "Store, organize, and share your code snippets effortlessly.",
		twitterImage: "https://placehold.co/1200x630/png?text=DevSnip",
	});
</script>
