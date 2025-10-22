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
				<UiNavigationMenu as="nav" class="hidden items-center justify-start gap-8 lg:flex">
					<UiNavigationMenuList class="gap-2">
						<UiNavigationMenuItem>
							<UiNavigationMenuLink as-child>
								<UiButton to="/" variant="ghost" size="sm">Home</UiButton>
							</UiNavigationMenuLink>
						</UiNavigationMenuItem>

						<!-- Dynamic dropdown links -->
						<template v-for="(data, link, i) in links" :key="i">
							<UiNavigationMenuItem>
								<UiNavigationMenuTrigger class="h-9 px-3 text-sm capitalize" :title="link" />
								<UiNavigationMenuContent>
									<div class="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<div v-for="(item, cat, index) in data" :key="`${cat}-${index}`">
											<p class="text-primary mb-5 text-sm font-semibold capitalize">{{ cat }}</p>
											<ul class="flex w-full flex-col gap-2">
												<li v-for="(child, k) in item" :key="k">
													<UiNavigationMenuLink class="data-active:bg-muted/80" as-child>
														<NuxtLink
															:to="child.href"
															class="hover:bg-muted/80 focus-visible:ring-ring/50 flex flex-row gap-4 rounded-md p-3 transition focus-visible:ring-2 focus-visible:outline-none"
														>
															<Icon :name="child.icon" class="text-primary mt-px h-5 w-5 shrink-0" />
															<div class="flex flex-col gap-1.5 leading-none">
																<p class="text-sm font-semibold">{{ child.name }}</p>
																<p class="text-muted-foreground text-sm" v-html="child.description" />
															</div>
														</NuxtLink>
													</UiNavigationMenuLink>
												</li>
											</ul>
										</div>
									</div>
								</UiNavigationMenuContent>
							</UiNavigationMenuItem>
						</template>
					</UiNavigationMenuList>
				</UiNavigationMenu>
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
										<UiButton variant="ghost" class="justify-start text-base" to="/">Home</UiButton>

										<template v-for="(data, link, i) in links" :key="i">
											<UiCollapsible>
												<UiCollapsibleTrigger as-child>
													<UiButton variant="ghost" class="w-full justify-start text-base capitalize *:data-[state=open]:-rotate-180">
														{{ link }}
														<Icon name="lucide:chevron-down" class="ml-auto size-4 transition" />
													</UiButton>
												</UiCollapsibleTrigger>
												<UiCollapsibleContent class="data-[state=closed]:animate-none data-[state=open]:p-3 data-[state=open]:pt-0">
													<div v-for="(item, cat, index) in data" :key="`${cat}-${index}`" class="mt-5">
														<p class="text-primary mb-5 text-sm font-semibold capitalize">
															{{ cat }}
														</p>
														<ul class="flex w-full flex-col gap-2">
															<li v-for="(child, k) in item" :key="k">
																<UiNavigationMenuLink as-child>
																	<NuxtLink :to="child.href" class="hover:bg-muted/80 flex flex-row gap-4 rounded-md p-3 transition">
																		<Icon :name="child.icon" class="text-primary mt-px h-5 w-5 shrink-0" />
																		<div class="flex flex-col gap-1.5 leading-none">
																			<p class="text-sm font-semibold">{{ child.name }}</p>
																		</div>
																	</NuxtLink>
																</UiNavigationMenuLink>
															</li>
														</ul>
													</div>
												</UiCollapsibleContent>
											</UiCollapsible>
										</template>

										<UiButton variant="ghost" class="justify-start text-base" to="/pricing">Pricing</UiButton>

										<UiGradientDivider class="my-5" />

										<ul class="grid grid-cols-2 gap-x-3 gap-y-5 px-4">
											<li v-for="(m, j) in miniLinks" :key="j">
												<NuxtLink class="py-2" :to="m.href">{{ m.name }}</NuxtLink>
											</li>
										</ul>

										<UiGradientDivider class="my-5" />
										<UiButton to="/signup">Sign up</UiButton>
										<UiButton variant="outline" to="/login">Log in</UiButton>
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
	const miniLinks = [
		{ name: "About", href: "/about" },
		{ name: "Blog", href: "/blog" },
		{ name: "Docs", href: "/docs" },
		{ name: "Support", href: "/support" },
		{ name: "Terms", href: "/legal/terms" },
		{ name: "Privacy", href: "/legal/privacy" },
		{ name: "GitHub", href: "https://github.com/devsnips" },
		{ name: "Contact", href: "/contact" },
	];

	const links = {
		explore: {
			snippets: [
				{
					name: "All Snippets",
					description: "Browse all public snippets shared by developers.",
					icon: "lucide:code",
					href: "/snippets",
				},
				{
					name: "Trending",
					description: "Discover the most popular snippets this week.",
					icon: "lucide:flame",
					href: "/trending",
				},
				{
					name: "Categories",
					description: "Explore snippets by language, framework, or type.",
					icon: "lucide:filter",
					href: "/categories",
				},
			],
		},
		create: {
			snippet: [
				{
					name: "New Snippet",
					description: "Create and share your code snippet instantly.",
					icon: "lucide:plus",
					href: "/snippets/new",
				},
				{
					name: "AI Snippet Generator",
					description: "Use AI to generate code snippets with context.",
					icon: "lucide:sparkles",
					href: "/ai",
				},
			],
			dashboard: [
				{
					name: "My Dashboard",
					description: "Manage your snippets, drafts, and profile settings.",
					icon: "lucide:layout-dashboard",
					href: "/dashboard",
				},
			],
		},
		resources: {
			documentation: [
				{
					name: "Docs",
					description: "Learn how to use DevSnips APIs and integrations.",
					icon: "lucide:book-open",
					href: "/docs",
				},
				{
					name: "Blog",
					description: "Read articles, tips, and updates from the team.",
					icon: "lucide:pen-square",
					href: "/blog",
				},
				{
					name: "Help Center",
					description: "Get all your questions answered in our help center.",
					icon: "lucide:life-buoy",
					href: "/support",
				},
			],
		},
	};
</script>
