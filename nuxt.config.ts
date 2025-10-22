// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: false },

	css: ["~/assets/css/tailwind.css"],
	vite: {
		plugins: [tailwindcss() as any],
	},

	modules: ["@nuxtjs/color-mode", "motion-v/nuxt", "@vueuse/nuxt", "@nuxt/icon", "@nuxt/fonts", "@vee-validate/nuxt", "vue-sonner/nuxt"],

	imports: {
		imports: [
			{
				from: "tailwind-variants",
				name: "tv",
			},
			{
				from: "tailwind-variants",
				name: "VariantProps",
				type: true,
			},
			{
				from: "vue-sonner",
				name: "toast",
				as: "useSonner",
			},
		],
	},

	colorMode: {
		storageKey: "devsnip-color-mode",
		classSuffix: "",
	},

	icon: {
		clientBundle: {
			scan: true,
			sizeLimitKb: 0,
		},

		mode: "svg",
		class: "shrink-0",
		fetchTimeout: 2000,
		serverBundle: "local",
	},
});
