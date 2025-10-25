<script setup lang="ts">
	import { signOut, useSession } from "~/lib/auth-client";
	import { getInitials } from "~/utils/utils";

	// Use the session from the plugin instead of calling useSession() again
	const session = useSession();

	const user = computed(() => session.value?.data?.user || null);
	const signOutUser = () => {
		signOut();
		navigateTo("/login");
	};
</script>

<template>
	<div class="bg-muted flex items-center justify-between space-x-3 rounded-lg border p-2">
		<img v-if="user?.image" :src="user?.image" alt="User Avatar" class="h-8 w-8 rounded-full object-cover" />
		<span v-else class="bg-secondary flex h-8 w-8 cursor-default items-center justify-center rounded-full border text-sm">
			{{ getInitials(user?.name) }}
		</span>
		<div class="flex flex-col">
			<span class="text-sm font-medium">{{ user?.name || "Guest" }}</span>
			<span class="text-muted-foreground text-[0.75rem] text-ellipsis">{{ user?.email }}</span>
		</div>
		<UiDropdownMenu>
			<UiDropdownMenuTrigger as-child>
				<Icon name="lucide:chevrons-up-down" />
			</UiDropdownMenuTrigger>
			<UiDropdownMenuContent side="top" align="start">
				<UiDropdownMenuLabel label="Settings" />
				<UiDropdownMenuItem title="Account" icon="lucide:user" @click="navigateTo('/account')" />
				<UiDropdownMenuItem title="Log Out" icon="lucide:log-out" @click="signOutUser" />
			</UiDropdownMenuContent>
		</UiDropdownMenu>
	</div>
</template>
