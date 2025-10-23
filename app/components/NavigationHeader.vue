<template>
	<header class="bg-background/90 z-20 border-b backdrop-blur">
		<UiContainer class="flex h-16 items-center justify-between lg:h-20">
			<!-- Logo & Branding -->
			<div class="flex items-center gap-10">
				<NuxtLink to="/" class="flex items-center gap-3">
					<img src="https://placehold.co/32x32/png?text=DS" fit="contain" alt="DevSnips Logo" title="DevSnips" class="h-6 rounded object-contain lg:h-8" />
					<span class="font-semibold lg:text-lg">DevSnips</span>
				</NuxtLink>

				<!-- Desktop Navigation -->
				<nav class="hidden items-center justify-start gap-5 lg:flex">
					<UiButton v-for="link in navLinks" :key="link.href" :to="link.href" variant="ghost" size="sm">
						{{ link.name }}
					</UiButton>
				</nav>
			</div>

			<!-- Mobile Menu -->
			<div class="lg:hidden">
				<UiSheet>
					<UiSheetTrigger as-child>
						<UiButton variant="ghost" size="icon-sm">
							<Icon name="lucide:menu" class="h-5 w-5" />
						</UiButton>
						<UiSheetContent class="w-[90%] p-0">
							<template #content>
								<UiSheetTitle class="sr-only" title="Mobile menu" />
								<UiSheetDescription class="sr-only" description="Mobile menu" />
								<UiSheetX class="z-20" />
								<UiScrollArea class="h-full p-5">
									<div class="flex flex-col gap-2">
										<UiButton v-for="link in navLinks" :key="link.href" :to="link.href" variant="ghost" class="justify-start">
											{{ link.name }}
										</UiButton>

										<UiGradientDivider class="my-5" />
										<UiButton to="/login" variant="outline">Log in</UiButton>
										<UiButton to="/signup">Sign up</UiButton>
									</div>
								</UiScrollArea>
							</template>
						</UiSheetContent>
					</UiSheetTrigger>
				</UiSheet>
			</div>

			<!-- Auth Buttons (Desktop) -->
			<div class="hidden items-center gap-3 lg:flex">
				<UiButton to="/login" variant="outline">Log in</UiButton>
				<UiButton to="/signup">Sign up</UiButton>
			</div>
		</UiContainer>
	</header>
</template>

<script setup>
	// Use the session from the plugin if needed in the future
	const { $session } = useNuxtApp();
	const session = $session;

	// Fix the hash links format - remove leading slash
	const navLinks = [
		{ name: "Home", href: "/#hero" },
		{ name: "Features", href: "/#features" },
		{ name: "How It Works", href: "/#how-it-works" },
		{ name: "FAQ", href: "/#faq" },
	];
</script>
