<template>
	<UiSidebarGroup>
		<UiSidebarGroupLabel label="DevSnip" />
		<UiSidebarGroupContent>
			<UiSidebarMenu>
				<UiSidebarMenuItem v-for="item in items" :key="item.title">
					<UiSidebarMenuButton as-child>
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
		{ title: "Home", url: "#", icon: "lucide:home" },
		{ title: "Inbox", url: "#", icon: "lucide:inbox" },
		{ title: "Calendar", url: "#", icon: "lucide:calendar" },
		{ title: "Search", url: "#", icon: "lucide:search" },
		{ title: "Settings", url: "#", icon: "lucide:settings" },
	];
</script>
