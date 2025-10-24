<template>
	<header id="nav" class="z-20 border-b backdrop-blur">
		<UiContainer class="flex h-16 items-center justify-between lg:h-20">
			<!-- Logo & Branding -->
			<div class="flex items-center gap-10">
				<NuxtLink to="/#nav" class="flex items-center gap-3">
					<img src="https://placehold.co/32x32/png?text=DS" fit="contain" alt="DevSnips Logo" title="DevSnips" class="h-6 rounded object-contain lg:h-8" />
					<span class="font-semibold lg:text-lg">DevSnips</span>
				</NuxtLink>
			</div>

			<!-- Mobile Menu -->
			<div class="lg:hidden">
				<ColorModeButton />
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
