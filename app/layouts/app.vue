<template>
	<div>
		<UiSidebarProvider>
			<UiSidebar>
				<UiSidebarContent>
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
				</UiSidebarContent>

				<UiSidebarFooter>
					<NavUser />
				</UiSidebarFooter>
			</UiSidebar>
			<UiSidebarInset>
				<UiNavbar sticky>
					<UiContainer class="flex h-12 items-center">
						<UiSidebarTrigger />
					</UiContainer>
				</UiNavbar>
				<NuxtPage />
			</UiSidebarInset>
		</UiSidebarProvider>
	</div>
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
