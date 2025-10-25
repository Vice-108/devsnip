<template>
	<UiSidebarGroup>
		<UiSidebarGroupLabel label="DevSnip" />
		<UiSidebarGroupContent>
			<UiSidebarMenu>
				<UiSidebarMenuItem v-for="item in items" :key="item.title">
					<UiSidebarMenuButton as-child :tooltip="item.title">
						<NuxtLink :href="item.url">
							<Icon :name="item.icon" />
							<span>{{ item.title }}</span>
						</NuxtLink>
					</UiSidebarMenuButton>
				</UiSidebarMenuItem>
			</UiSidebarMenu>
		</UiSidebarGroupContent>
	</UiSidebarGroup>
</template>
<script lang="ts" setup>
	const items = [
		{ title: "Home", url: "/dashboard", icon: "lucide:home" },
		{ title: "Account", url: "/account", icon: "lucide:user" },
	];
</script>
