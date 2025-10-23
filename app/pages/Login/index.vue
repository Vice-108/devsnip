<template>
	<div class="flex h-screen items-center justify-between">
		<div class="w-full md:w-1/2">
			<div class="mx-auto w-full max-w-[330px] px-5">
				<h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Log in</h1>
				<p class="text-muted-foreground mt-1">Enter your email & password to log in.</p>

				<form class="mt-10" @submit="submit">
					<fieldset :disabled="isSubmitting" class="grid gap-5">
						<div>
							<UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
						</div>
						<div>
							<UiVeeInput label="Password" type="password" name="password" />
						</div>
						<div>
							<UiButton class="w-full" type="submit" text="Log in" />
						</div>
						<UiDivider label="OR" />
						<UiButton variant="outline" type="button" @click="signInWithGithub()">
							<Icon class="size-4" name="mdi-github" />
							<span class="ml-2">Continue with Github</span>
						</UiButton>
					</fieldset>
				</form>
				<p class="mt-8 text-sm">
					<NuxtLink class="text-primary font-semibold underline-offset-2 hover:underline" to="#">Forgot password?</NuxtLink>
				</p>
				<p class="text-muted-foreground mt-4 text-sm">
					Don't have an account?
					<NuxtLink class="text-primary font-semibold underline-offset-2 hover:underline" to="signup">Create account</NuxtLink>
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
	import { signIn } from "~/lib/auth-client";
	import * as z from "zod";

	useSeoMeta({
		title: "Log in",
		description: "Enter your email & password to log in.",
	});
	definePageMeta({
		layout: "default",
	});

	const LoginSchema = z.object({
		email: z.email().transform((email) => email.trim()),
		password: z.string().min(8),
	});

	const { handleSubmit, isSubmitting } = useForm<z.infer<typeof LoginSchema>>({
		validationSchema: toTypedSchema(LoginSchema),
	});

	const submit = handleSubmit(async (values) => {
		try {
			await signIn.email({
				email: values.email,
				password: values.password,
				fetchOptions: {
					onSuccess: () => {
						useSonner.success("Logged in successfully!", {
							description: "You have successfully logged in.",
						});
						navigateTo("/dashboard");
					},
					onError: (context) => {
						useSonner.error(context?.error?.message || "Please check your email and password");
					},
				},
			});
		} catch (error) {
			console.log(error);
		}
	});

	const signInWithGithub = () => {
		signIn.social({
			provider: "github",
			callbackURL: "/dashboard",
			fetchOptions: {
				onSuccess: () => {
					useSonner.success("Logged in successfully!", {
						description: "You have successfully logged in with Github.",
					});
					navigateTo("/dashboard");
				},
				onError: (context) => {
					useSonner.error("Login failed", {
						description: context?.error?.message || "Please check your email and password",
					});
				},
			},
		});
	};
</script>
