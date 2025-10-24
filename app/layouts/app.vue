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
			<UiNavbar sticky>
				<UiContainer class="flex h-12 items-center">
					<UiSidebarTrigger />
				</UiContainer>
			</UiNavbar>
			<NuxtPage />
		</UiSidebarInset>
	</UiSidebarProvider>
</template>
