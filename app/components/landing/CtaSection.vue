<template>
	<section class="py-20 lg:py-32">
		<UiContainer>
			<div class="from-primary/10 via-background to-background relative overflow-hidden rounded-2xl border bg-linear-to-br p-12 lg:p-20">
				<div class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px]"></div>

				<div class="relative mx-auto max-w-3xl text-center">
					<h2 class="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Ready to Supercharge Your Development Workflow?</h2>
					<p class="text-muted-foreground mb-8 text-lg">Join thousands of developers who trust DevSnip to manage their code snippets. Start building your personal code library today.</p>

					<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<UiButton effect="ringHover" size="lg" to="/signup">
							<Icon name="lucide:zap" class="mr-2 size-5" />
							Create Free Account
						</UiButton>
						<UiButton effect="ringHover" size="lg" variant="outline" to="/#features">
							<Icon name="lucide:info" class="mr-2 size-5" />
							Learn More
						</UiButton>
					</div>

					<div class="text-muted-foreground mt-8 flex items-center justify-center gap-8 text-sm">
						<div class="flex items-center gap-2">
							<Icon name="lucide:check-circle" class="size-4 text-green-500" />
							<span>Free Forever</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="lucide:check-circle" class="size-4 text-green-500" />
							<span>No Credit Card</span>
						</div>
						<div class="flex items-center gap-2">
							<Icon name="lucide:check-circle" class="size-4 text-green-500" />
							<span>Open Source</span>
						</div>
					</div>
				</div>
			</div>
		</UiContainer>
	</section>
</template>
