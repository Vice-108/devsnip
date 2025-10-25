<template>
	<div>
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
				<div class="flex flex-1 flex-col gap-4 p-4">
					<slot />
				</div>
			</UiSidebarInset>
		</UiSidebarProvider>
	</div>
</template>
