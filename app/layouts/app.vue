<template>
	<UiSidebarProvider>
		<UiSidebar>
			<UiSidebarRail />
			<UiSidebarHeader>
				<SidebarHeader />
			</UiSidebarHeader>

			<UiSidebarSeparator />

			<UiSidebarContent>
				<SidebarContent />
			</UiSidebarContent>

			<UiSidebarSeparator />
			<UiSidebarFooter>
				<NavUser />
			</UiSidebarFooter>
		</UiSidebar>

		<UiSidebarInset>
			<UiNavbar sticky class="px-1.5 py-3">
				<UiSidebarTrigger class="ml-5" />
			</UiNavbar>
			<NuxtPage />
		</UiSidebarInset>
	</UiSidebarProvider>
</template>
