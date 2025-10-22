<template>
	<div class="flex h-screen items-center justify-center">
		<div class="w-full md:w-1/2">
			<div class="mx-auto w-full max-w-[330px] px-5">
				<h1 class="text-2xl font-bold tracking-tight lg:text-3xl">{{ title }}</h1>
				<p class="text-muted-foreground mt-1">{{ description }}</p>

				<form class="mt-10" @submit="submit">
					<fieldset :disabled="isSubmitting" class="grid gap-5">
						<UiVeeInput required label="Name" name="name" placeholder="John Doe" />
						<UiVeeInput required label="Email" type="email" name="email" placeholder="john@example.com" />
						<UiVeeInput required label="Password" type="password" name="password" />
						<UiButton class="w-full" type="submit" text="Get Started" />
						<UiDivider label="OR" />
						<UiButton variant="outline" type="button" @click="signInWithGithub()" :disabled="isSubmitting">
							<Icon class="size-4" name="mdi:github" />
							<span class="ml-2">Sign up with Github</span>
						</UiButton>
					</fieldset>
				</form>
				<p class="text-muted-foreground mt-8 text-sm">
					Already have an account?
					<NuxtLink class="text-primary font-semibold underline-offset-2 hover:underline" to="/login">Log in</NuxtLink>
				</p>
			</div>
		</div>
		<div class="hidden h-screen md:block md:w-1/2 lg:w-1/2">
			<img
				src="https://images.unsplash.com/photo-1512551980832-13df02babc9e?q=60&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Login form image"
				class="size-full object-cover"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import z from "zod";

	const title = "Sign Up";
	const description = "Create an account to get started.";

	useSeoMeta({ title, description });

	const Schema = z.object({
		name: z.string().min(3).max(50).nonempty().describe("Name"),
		email: z.email().nonempty().describe("Email"),
		password: z.string().min(8).nonempty().describe("Password"),
	});

	const { handleSubmit, isSubmitting } = useForm<z.infer<typeof Schema>>({
		validationSchema: Schema,
	});

	const { signUp, signIn } = useAuth();

	const submit = handleSubmit(async (formValues: z.infer<typeof Schema>) => {
		try {
			const result = await signUp.email({
				name: formValues.name,
				email: formValues.email,
				password: formValues.password,
			});

			if (result.error) {
				useSonner.error("Sign up failed", {
					description: result.error.message || "Something went wrong.",
				});
				return;
			}

			useSonner.success("Account created!", {
				description: "You have successfully created an account.",
			});

			// Redirect to dashboard or home
			await navigateTo("/dashboard");
		} catch (err) {
			useSonner.error("Sign up failed", {
				description: (err as Error)?.message ?? "An error occurred.",
			});
		}
	});

	const signInState = ref<"idle" | "initiated" | "redirecting" | "completed" | "failed">("idle");

	const signInWithGithub = async () => {
		try {
			signInState.value = "initiated";
			console.log("[GitHubSign] state:", signInState.value);

			useSonner.info("Redirecting to Github for authentication...");
			signInState.value = "redirecting";
			console.log("[GitHubSign] state:", signInState.value);

			const result = await signIn.social({ provider: "github" });
			console.log("[GitHubSign] result:", result);

			if (result?.error) {
				signInState.value = "failed";
				console.log("[GitHubSign] state:", signInState.value, "error:", result.error);
				useSonner.error("Github sign-in failed", {
					description: result.error.message || "An error occurred.",
				});
				return;
			}

			signInState.value = "completed";
			console.log("[GitHubSign] state:", signInState.value);

			useSonner.success("Logged in", {
				description: "You have successfully logged in with Github.",
			});

			await navigateTo("/dashboard");
		} catch (err) {
			signInState.value = "failed";
			console.log("[GitHubSign] state:", signInState.value, "exception:", err);
			useSonner.error("Github sign-in failed", {
				description: (err as Error)?.message ?? "An error occurred.",
			});
		}
	};
</script>
