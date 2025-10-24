<template>
	<section id="faq" class="py-20 lg:py-32">
		<UiContainer class="relative">
			<div class="bg-muted mx-auto rounded-2xl py-16 text-center">
				<h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h2>
				<p class="text-muted-foreground text-lg">Everything you need to know about DevSnip.</p>
			</div>

			<div class="bg-muted mx-auto mt-16 rounded-2xl p-6 lg:p-10">
				<UiAccordion :items="faqs" type="single" collapsible class="w-full">
					<template #trigger="{ item }">
						<UiAccordionTrigger class="text-[15px] leading-6 hover:no-underline">
							<div class="flex items-center gap-3">
								<Icon :name="item.icon!" class="shrink-0 opacity-60" />
								{{ item.title }}
							</div>
						</UiAccordionTrigger>
					</template>
					<template #content="{ item }">
						<UiAccordionContent class="text-muted-foreground ps-7">
							{{ item.content }}
						</UiAccordionContent>
					</template>
				</UiAccordion>
			</div>
		</UiContainer>
	</section>
</template>

<script setup lang="ts">
	const faqs = [
		{
			id: "1",
			icon: "lucide:help-circle",
			value: "1",
			title: "Is DevSnip really free?",
			content: "Yes! DevSnip is completely free to use with unlimited snippets. We believe every developer should have access to great tools without breaking the bank.",
		},
		{
			id: "2",
			icon: "lucide:shield-check",
			value: "2",
			title: "How secure is my code?",
			content: "Your snippets are stored securely with industry-standard encryption. Private snippets are only visible to you, and you have full control over what you share publicly.",
		},
		{
			id: "3",
			icon: "lucide:code-2",
			value: "3",
			title: "What languages are supported?",
			content: "We support 50+ programming languages including JavaScript, Python, TypeScript, Go, Rust, Java, C++, and many more. If your language isn't supported, let us know!",
		},
		{
			id: "4",
			icon: "lucide:download",
			value: "4",
			title: "Can I import existing snippets?",
			content: "Yes! We're working on import tools for popular snippet managers. You can also manually add snippets by copying and pasting your code.",
		},
		{
			id: "5",
			icon: "lucide:smartphone",
			value: "5",
			title: "Is there a mobile app?",
			content: "DevSnip is fully responsive and works great in mobile browsers.",
		},
		{
			id: "6",
			icon: "lucide:users",
			value: "6",
			title: "Can I share snippets with my team?",
			content: "Absolutely! You can make snippets public to share with anyone, or keep them private. Team collaboration features are coming soon.",
		},
	];
</script>
