<template>
    <!-- Header Start -->
	<header class="px-4 py-3 flex items-center justify-between gap-4 flex-wrap border-b border-border-color">
		<div class="flex items-center gap-3">
			<router-link :to="all_routes.hrmDashboard" class="flex items-center justify-center size-9 rounded-md border border-border-color bg-white text-default hover:bg-light focus:outline-hidden focus:bg-light">
				<i class="ph-duotone ph-arrow-left"></i>
			</router-link>
			<div class="relative w-64 search-input"> 
				<i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
				<input type="text" class="w-full px-3 pe-8 py-2 h-9 text-[12px]! border border-border-color rounded-lg bg-white focus:outline-none focus:ring-0 placeholder:text-sm" placeholder="Search"> 
			</div>
		</div>
		<div class="flex items-center gap-2">
            <!-- Light/Dark Mode Button -->
            <div class="header-item">
                <button class="topbar-link items-center justify-center bg-white border border-border-color rounded-md light-dark-mode" type="button" @click="toggleDarkMode">
                    <i class="ph-duotone" :class="[isDarkMode ? 'ph-sun' : 'ph-moon']"></i>
                </button>
            </div>
            <!-- Language Dropdown -->
            <div class="header-item hs-dropdown [--placement:bottom-right] [--auto-close:inside] hidden lg:flex">
                <button type="button" class="topbar-link items-center justify-center bg-white border border-border-color rounded-md">
                    <i class="ph-duotone ph-translate"></i>
                </button>
                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-30 p-3 bg-white border border-border-color shadow rounded-md mt-[-8px]! z-1 space-y-1" role="menu" aria-orientation="vertical">
                    <a href="#" class="flex items-center gap-2 px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                        <img src="@/assets/img/icons/us.svg" class="size-4 rounded-full" alt="flag">ENG
                    </a>
                    <a href="#" class="flex items-center gap-2 px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                        <img src="@/assets/img/icons/arab.svg" class="size-4 rounded-full" alt="flag">ARB
                    </a>
                    <a href="#" class="flex items-center gap-2 px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                        <img src="@/assets/img/icons/germany.svg" class="size-4 rounded-full" alt="flag">GER
                    </a>
                </div>
            </div>
            
            <!-- Notification Dropdown -->
            <div class="header-item hs-dropdown [--placement:bottom-right] [--auto-close:inside] hidden relative sm:flex" id="notification-dropdown">
                <button class="bg-white border border-border-color rounded-md size-8 flex items-center justify-center relative cursor-pointer">
                    <i class="ph-duotone ph-bell"></i>
                    <span class="absolute top-1 end-1 size-2 bg-danger-transparent rounded-full flex items-center justify-center">
                        <span class="size-1 bg-danger rounded-full"></span>
                    </span>
                </button>
                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-102 p-5 mt-[-8px]! bg-white border border-border-color shadow rounded-lg z-1 notification-dropdown" role="menu" aria-orientation="vertical">

                    <div class="flex items-center justify-between border-b border-border-color pb-3">
                        <p class="text-base font-bold text-title">Notifications</p>
                        <div class="flex items-center gap-3">
                            <!-- The Toggle -->
                            <div class="flex items-center gap-1">
                                <label for="read" class="relative inline-block w-7 h-4 cursor-pointer">
                                    <input type="checkbox" id="read" class="sr-only">
                                    <span id="switch-track" class="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200"></span>
                                    <span id="switch-thumb" class="absolute top-1/2 start-1 -translate-y-1/2 size-2.5 bg-white rounded-full transition-transform duration-200"></span>
                                </label>
                                <label for="read" class="cursor-pointer">Only Unread</label>
                            </div>
                            <button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 text-base hover:bg-danger hover:border-danger hover:text-white dark:hover:text-dark focus:outline-hidden focus:bg-danger cursor-pointer" aria-label="Close" id="close-notification">
                                <i class="icon-x"></i>
                            </button>
                        </div>
                    </div>
                    <div data-simplebar>
                        <div id="all-notifications">
                            <div class="py-5 space-y-3">

                                <!-- Item-->
                                <div class="notification-item relative flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer hover:bg-light">
                                    <div class="flex items-center">
                                        <div class="relative size-10 shrink-0 me-2">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" class="rounded-full border border-border-color" alt="user">
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="font-semibold text-title inline-flex items-center mb-1">Project Deadline<i class="fa-solid fa-circle ms-1 text-[8px] text-danger"></i></p>
                                            <p class="text-[13px] mb-0">Project <span class="text-primary font-medium">‘ERP Upgrade’</span> is due in 3 days.</p>
                                        </div>
                                    </div>
                                    <p class="shrink-0">30 min</p>
                                </div>

                                <!-- Item-->
                                <div class="notification-item relative flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer hover:bg-light">
                                    <div class="flex items-center">
                                        <div class="relative size-10 font-semibold shrink-0 bg-secondary-transparent text-secondary rounded-full flex items-center justify-center me-2">
                                            AD
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="font-semibold text-title inline-flex items-center mb-1">New Order Placed<i class="fa-solid fa-circle ms-1 text-[8px] text-danger"></i></p>
                                            <p class="text-[13px] mb-0">Order <span class="text-primary font-medium">#SO-2345</span> has been placed by Adrian.</p>
                                        </div>
                                    </div>
                                    <p class="shrink-0">25 min</p>
                                </div>

                                <!-- Item-->
                                <div class="notification-item relative flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer hover:bg-light">
                                    <div class="flex items-center">
                                        <div class="relative size-10 shrink-0 me-2">
                                            <img src="@/assets/img/avatar/avatar-07.jpg" class="rounded-full border border-border-color" alt="user">
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="font-semibold text-title inline-flex items-center mb-1">Quotation Sent</p>
                                            <p class="text-[13px] mb-0">Quotation <span class="text-primary font-medium">#QT-451</span> sent to Hendy Jade.</p>
                                            <div class="flex items-center gap-2 mt-2">
                                                <a href="#" class="inline-flex items-center btn-xsmall bg-dark border border-dark text-white  hover:bg-primary hover:border-primary hover:text-white">View Quotation</a>
                                                <a href="#" class="inline-flex items-center btn-xsmall bg-white border border-border-color text-gray-900  hover:bg-primary hover:border-primary hover:text-white dark:hover:text-white">Edit Quotation</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="shrink-0">30 min</p>
                                </div>                                        

                                <!-- Item-->
                                <div class="notification-item relative flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer hover:bg-light">
                                    <div class="flex items-center">
                                        <div class="relative size-10 font-semibold shrink-0 bg-warning text-white rounded-full flex items-center justify-center me-2">
                                            <i class="icon icon-pc-case"></i>
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="font-semibold text-title inline-flex items-center mb-1">Low Stock Alert</p>
                                            <p class="text-[13px] mb-0">Stock for Product A has dropped below the minimum threshold  <span class="text-primary font-medium">(15 units left).</span></p>
                                        </div>
                                    </div>
                                    <p class="shrink-0">30 min</p>
                                </div>

                                <!-- Item-->
                                <div class="notification-item relative flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer hover:bg-light">
                                    <div class="flex items-center">
                                        <div class="relative size-10 font-semibold shrink-0 bg-primary-transparent text-primary rounded-full flex items-center justify-center me-2">
                                            SJ
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="font-semibold text-title inline-flex items-center mb-1">Expense Added</p>
                                            <p class="text-[13px] mb-0">New expense entry <span class="text-primary font-medium">‘Office Supplies’</span> worth $250 has been recorded.</p>
                                        </div>
                                    </div>
                                    <p class="shrink-0">2 hrs ago</p>
                                </div>

                            </div>

                        </div>
                        <div class="hidden" id="unread-only">
                            <div class="py-5 space-y-3">

                                <!-- Item-->
                                <div class="notification-item relative flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer hover:bg-light">
                                    <div class="flex items-center">
                                        <div class="relative size-10 shrink-0 me-2">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" class="rounded-full border border-border-color" alt="user">
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="font-semibold text-title inline-flex items-center mb-1">Project Deadline<i class="fa-solid fa-circle ms-1 text-[8px] text-danger"></i></p>
                                            <p class="text-[13px] mb-0">Project <span class="text-primary font-medium">‘ERP Upgrade’</span> is due in 3 days.</p>
                                        </div>
                                    </div>
                                    <p class="shrink-0">30 min</p>
                                </div>

                                <!-- Item-->
                                <div class="notification-item relative flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer hover:bg-light">
                                    <div class="flex items-center">
                                        <div class="relative size-10 font-semibold shrink-0 bg-secondary-transparent text-secondary rounded-full flex items-center justify-center me-2">
                                            AD
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="font-semibold text-title inline-flex items-center mb-1">New Order Placed<i class="fa-solid fa-circle ms-1 text-[8px] text-danger"></i></p>
                                            <p class="text-[13px] mb-0">Order <span class="text-primary font-medium">#SO-2345</span> has been placed by Adrian.</p>
                                        </div>
                                    </div>
                                    <p class="shrink-0">25 min</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="pt-3 border-t border-border-color flex items-center justify-between">
                        <a href="#" class="text-default fw-medium">Mark all as read</a>
                        <a href="#" class="text-primary font-medium hover:text-primary-hover">
                           View all Notifications
                        </a>
                    </div>
                </div>
            </div>

            <!-- User Dropdown -->
            <div class="profile-dropdown hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative">
                <a href="#" class="hs-dropdown-toggle relative flex items-center justify-center rounded-full lg:ms-2" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <div class="size-8 rounded-full overflow-hidden border border-border-color">
                        <img src="@/assets/img/avatar/avatar-01.jpg" class="size-full object-cover" alt="user-image">
                    </div>
                </a>
                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 p-5 bg-white border border-border-color shadow rounded-md mt-2 z-1 divide-y divide-border-color" role="menu" aria-orientation="vertical">
                    <div class="flex items-center pb-3">
                        <div class="size-10 rounded-full relative me-2">
                            <img src="@/assets/img/avatar/avatar-01.jpg" class="rounded-full border border-border-color" alt="user-image">
                        </div>
                        <div>
                            <p class="font-semibold text-title mb-1">Jamie Anderson</p>
                            <p class="text-[13px] mb-0">Administrator</p>
                        </div>
                    </div>
                    <div class="py-3 space-y-1">
                        <router-link :to="all_routes.profile" class="flex items-center px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                            <i class="icon icon-user-round text-base me-2"></i>View Profile
                        </router-link>
                        <router-link :to="all_routes.editProfile" class="flex items-center px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                            <i class="icon icon-user-pen text-base me-2"></i>Edit Profile
                        </router-link>
                        <router-link :to="all_routes.generalSettings" class="flex items-center px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                            <i class="icon icon-cog text-base me-2"></i>Settings
                        </router-link>
                        <router-link :to="all_routes.tickets" class="flex items-center px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                            <i class="icon icon-align-start-horizontal text-base me-2"></i>Support Tickets
                        </router-link>
                    </div>
                    <div class="pt-3">
                        <router-link :to="all_routes.lockScreen" class="flex items-center px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                            <i class="icon icon-user-cog text-base me-2"></i>Lock Screen
                        </router-link>
                        <router-link :to="all_routes.login" class="flex items-center px-2 py-[6px] rounded-md text-danger hover:bg-light focus:outline-hidden focus:bg-white">
                            <i class="icon icon-log-out text-base me-2"></i>Log Out
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
	</header>
	<!-- Header End -->
</template>


<script>
import { ref, onMounted } from "vue";
import { all_routes } from '@/router/all_routes';

export default {
    setup() {
        const isDarkMode = ref(false);

        const setThemeAttribute = (enabled) => {
            document.documentElement.setAttribute("data-theme", enabled ? "dark" : "light");
        };

        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value;
            localStorage.setItem("dark", isDarkMode.value ? "enabled" : "disabled");
            setThemeAttribute(isDarkMode.value);
        };

        const initializeDarkMode = () => {
            const darkMode = localStorage.getItem("dark");
            isDarkMode.value = darkMode === "enabled";
            setThemeAttribute(isDarkMode.value);
        };

        onMounted(() => {
            initializeDarkMode();
        });

        return {
            isDarkMode,
            toggleDarkMode,
            all_routes
        };
    },
}
</script>