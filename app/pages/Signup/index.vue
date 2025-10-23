<template>
	<div class="flex h-screen items-center justify-center">
		<div class="w-full md:w-1/2">
			<div class="mx-auto w-full max-w-[330px] px-5">
				<h1 class="text-2xl font-bold tracking-tight lg:text-3xl">{{ title }}</h1>
				<p class="text-muted-foreground mt-1">{{ description }}</p>

				<form class="mt-10" @submit.prevent="submit">
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
	import { signIn, signUp } from "~/lib/auth-client";
	import * as z from "zod";

	const title = "Sign Up";
	const description = "Create an account to get started.";

	useSeoMeta({ title, description });
	definePageMeta({
		layout: "default",
	});

	const Schema = z.object({
		name: z.string().min(3).max(50).nonempty().describe("Name"),
		email: z.email().nonempty().describe("Email"),
		password: z.string().min(8).nonempty().describe("Password"),
	});

	const { handleSubmit, isSubmitting } = useForm<z.infer<typeof Schema>>({
		validationSchema: toTypedSchema(Schema),
	});
	const submit = handleSubmit(async (values) => {
		try {
			await signUp.email({
				email: values.email,
				password: values.password,
				name: values.name,
				fetchOptions: {
					onSuccess: (context) => {
						useSonner.success("Account created successfully!");
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

	const signInWithGithub = async () => {
		await signIn.social({
			provider: "github",
			callbackURL: "/dashboard",
			fetchOptions: {
				onError: (context) => {
					console.log(context?.error?.message || "Please check your email and password");
				},
			},
		});
		console.log("github");
	};
</script>
