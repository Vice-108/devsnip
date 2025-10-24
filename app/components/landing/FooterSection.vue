<template>
	<footer class="bg-muted/30 border-t py-12">
		<UiContainer class="relative">
			<div class="grid gap-8 md:grid-cols-4">
				<!-- Brand Column -->
				<div class="md:col-span-2">
					<div class="mb-4 flex items-center gap-3">
						<img src="https://placehold.co/40x40/png?text=DS" alt="DevSnip Logo" class="h-10 w-10 rounded-lg object-contain" />
						<span class="text-xl font-bold">DevSnip</span>
					</div>
					<p class="text-muted-foreground mb-4 max-w-md text-sm">
						Your personal code snippet manager. Store, organize, and share your most-used code snippets with ease. Built for developers, by developers.
					</p>
					<div class="flex items-center gap-4">
						<a href="https://github.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">
							<Icon name="mdi-github" class="size-5" />
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">
							<Icon name="mdi-twitter" class="size-5" />
						</a>
						<a href="https://discord.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">
							<Icon name="mdi-discord" class="size-5" />
						</a>
					</div>
				</div>

				<!-- Product Column -->
				<div>
					<h3 class="mb-4 font-semibold">Product</h3>
					<ul class="text-muted-foreground space-y-3 text-sm">
						<li><NuxtLink to="/#features" class="hover:text-foreground transition-colors">Features</NuxtLink></li>
						<li><NuxtLink to="/#how-it-works" class="hover:text-foreground transition-colors">How It Works</NuxtLink></li>
						<li><NuxtLink to="/#faq" class="hover:text-foreground transition-colors">FAQ</NuxtLink></li>
						<li><NuxtLink to="/signup" class="hover:text-foreground transition-colors">Sign Up</NuxtLink></li>
					</ul>
				</div>

				<!-- Company Column -->
				<div>
					<h3 class="mb-4 font-semibold">Company</h3>
					<ul class="text-muted-foreground space-y-3 text-sm">
						<li><a href="#" class="hover:text-foreground transition-colors">About</a></li>
						<li><a href="#" class="hover:text-foreground transition-colors">Blog</a></li>
						<li><a href="#" class="hover:text-foreground transition-colors">Privacy Policy</a></li>
						<li><a href="#" class="hover:text-foreground transition-colors">Terms of Service</a></li>
					</ul>
				</div>
			</div>

			<UiDivider class="my-8" />

			<div class="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
				<p>&copy; {{ new Date().getFullYear() }} DevSnip. All rights reserved.</p>
				<p>
					Built with ❤️ using
					<a href="https://nuxt.com" target="_blank" class="hover:text-foreground underline underline-offset-2">Nuxt v4</a>
					&
					<a href="https://ui-thing.com" target="_blank" class="hover:text-foreground underline underline-offset-2">ui-thing</a>
				</p>
			</div>
		</UiContainer>
	</footer>
</template>

<script setup lang="ts"></script>
