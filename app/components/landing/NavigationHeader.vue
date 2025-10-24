<template>
	<header id="nav" class="sticky top-0 z-20 border-b backdrop-blur">
		<UiContainer class="flex h-16 items-center justify-between lg:h-20">
			<!-- Logo & Branding -->
			<div class="flex items-center gap-10">
				<NuxtLink to="/#nav" class="flex items-center gap-3">
					<img src="https://placehold.co/32x32/png?text=DS" fit="contain" alt="DevSnips Logo" title="DevSnips" class="h-6 rounded object-contain lg:h-8" />
					<span class="font-semibold lg:text-lg">DevSnips</span>
				</NuxtLink>

				<!-- Desktop Navigation -->
				<nav class="hidden items-center justify-start gap-5 lg:flex">
					<UiButton effect="hoverUnderline" v-for="link in navLinks" :key="link.href" :to="link.href" variant="link" size="sm">
						<span class="text-foreground hover:text-accent-foreground text-base font-semibold">{{ link.name }}</span>
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
										<UiButton effect="hoverUnderline" v-for="link in navLinks" :key="link.href" :to="link.href" variant="link" class="justify-start">
											<span class="text-base">{{ link.name }}</span>
										</UiButton>
										<UiGradientDivider class="my-5" />
										<div class="flex flex-col gap-3">
											<div class="flex items-center gap-3">
												<UiButton effect="ringHover" to="/login" variant="outline" class="flex-1">Log in</UiButton>
												<UiButton effect="ringHover" to="/signup" class="flex-1">Sign up</UiButton>
											</div>
											<ColorModeButton class="w-full" />
										</div>
									</div>
								</UiScrollArea>
							</template>
						</UiSheetContent>
					</UiSheetTrigger>
				</UiSheet>
			</div>

			<!-- Auth Buttons (Desktop) -->
			<div class="hidden items-center gap-3 lg:flex">
				<UiButton effect="ringHover" to="/login" variant="outline">Log in</UiButton>
				<UiButton effect="ringHover" to="/signup">Sign up</UiButton>
				<ColorModeButton />
			</div>
		</UiContainer>
	</header>
</template>

<script setup>
	// Fix the hash links format - remove leading slash
	const navLinks = [
		{ name: "Home", href: "/#hero" },
		{ name: "Features", href: "/#features" },
		{ name: "How It Works", href: "/#how-it-works" },
		{ name: "FAQ", href: "/#faq" },
	];
</script>
