<template>
    <!-- Topbar Start -->
    <header class="navbar-header flex items-center max-lg:w-full">
        <div class="topbar-menu relative flex items-center justify-between w-full gap-2">
            <div class="flex items-center gap-3 shrink-0 z-10">

                <!-- Sidebar Mobile Button -->
                <a id="mobile_btn" class="mobile-btn lg:hidden" href="#sidebar" aria-label="menu" @click.prevent="toggleMobileBtn">
                    <i class="icon icon-menu"></i>
                </a>

                <button class="sidenav-toggle-btn topbar-link shrink-0 size-9 text-[20px] items-center justify-center rounded-full" id="toggle_btn2" @click="toggleSidebar">
                    <i class="ph-duotone ph-arrow-left"></i>
                </button>

            </div>

            <!-- Logo centrado en móvil / tablet (sin enlace) -->
            <span class="logo">
                <span class="logo-lg inline-flex items-center gap-2">
                    <img src="@/assets/img/logo-small.svg" alt="Logo">
                    <span class="logo-text text-base font-semibold text-title leading-none">NexusCloud</span>
                </span>
            </span>

            <div class="flex items-center gap-2 lg:w-full shrink-0 z-10">

                <!-- Company Dropdown -->
                <div class="header-item hs-dropdown [--placement:bottom-left] [--auto-close:inside] hidden lg:flex relative company-dropdown me-auto">
                </div>

                <!-- Light/Dark Mode Button -->
                <div class="header-item">
                    <button class="topbar-link items-center justify-center light-dark-mode" type="button"  @click="toggleDarkMode">
                        <i class="ph-duotone" :class="[isDarkMode ? 'ph-sun' : 'ph-moon']"></i>
                    </button>
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
                                <p class="font-semibold text-title mb-1">{{ strUserName }}</p>
                                <p class="text-[13px] mb-0">{{ strUserEmail }}</p>
                            </div>
                        </div>
                        <div class="py-3 space-y-1">
                            <router-link :to="all_routes.profile" class="flex items-center px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white">
                                <i class="icon icon-cog text-base me-2"></i>Configuración
                            </router-link>
                        </div>
                        <div class="pt-3 space-y-1">
                            <a href="#" class="flex items-center px-2 py-[6px] rounded-md text-gray-900 hover:bg-light focus:outline-hidden focus:bg-white" @click.prevent="handleLockScreen">
                                <i class="icon icon-user-cog text-base me-2"></i>Bloquear
                            </a>
                            <a href="#" class="flex items-center px-2 py-[6px] rounded-md text-danger hover:bg-light focus:outline-hidden focus:bg-white" @click.prevent="handleLogout">
                                <i class="icon icon-log-out text-base me-2"></i>Cerrar sesión
                            </a>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    </header>
    <!-- Topbar End -->

    <!-- Search Start -->
    <div id="search_modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
        <div class="min-h-screen flex items-center justify-center px-4"> 
            <div class="max-w-[630px] w-full mx-auto">
                <div class="flex flex-col bg-white border p-6 border-border-color rounded-lg pointer-events-auto m-5">
                    <div class="flex justify-between items-center mb-5">
                        <p class="text-lg font-bold text-title">Search</p>
                        <button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 text-base hover:bg-danger hover:border-danger hover:text-white dark:hover:text-dark focus:outline-hidden focus:bg-danger cursor-pointer" aria-label="Close" data-hs-overlay="#search_modal">
                            <i class="icon-x"></i>
                        </button>
                    </div> 
                    <div class="relative mb-5">
                        <input type="text" class="w-full ps-3 pe-12 py-1 h-8 bg-white border border-border-color text-title rounded-md focus:border-(--topbar-input-border) placeholder:(-topbar-input-placeholder) focus:ring-0 shadow" placeholder="Search Keywords" autocomplete="off">		
                        <button type="button" class="cursor-pointer w-8 p-1 text-xs gap-1  flex items-center justify-center absolute end-1 top-1/2 -translate-y-1/2">
                            <i id="shortcutIcon" class="icon-search"></i>
                        </button>							
                    </div>
                    <div class="mb-5">
                        <p class="text-title font-semibold mb-2">I’m Looking For</p>
                        <div class="flex items-center flex-wrap gap-3">
                            <router-link :to="all_routes.employees" class="py-1 px-2 bg-light-transparent border border-border-color rounded-md text-xs font-medium text-title hover:bg-primary hover:border-primary hover:text-white">Employees</router-link>
                            <router-link :to="all_routes.deals" class="py-1 px-2 bg-light-transparent border border-border-color rounded-md text-xs font-medium text-title hover:bg-primary hover:border-primary hover:text-white">Deals</router-link>
                            <router-link :to="all_routes.pos" class="py-1 px-2 bg-light-transparent border border-border-color rounded-md text-xs font-medium text-title hover:bg-primary hover:border-primary hover:text-white">POS</router-link>
                            <router-link :to="all_routes.expenses" class="py-1 px-2 bg-light-transparent border border-border-color rounded-md text-xs font-medium text-title hover:bg-primary hover:border-primary hover:text-white">Finance</router-link>
                            <router-link :to="all_routes.cashSales" class="py-1 px-2 bg-light-transparent border border-border-color rounded-md text-xs font-medium text-title hover:bg-primary hover:border-primary hover:text-white">Cash Sales</router-link>
                        </div>
                    </div>
                    <p class="text-title font-semibold mb-2">Quick Actions</p>
                    <div class="space-y-1 mb-5">
                        <router-link :to="all_routes.generalSettings" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title group"><i class="icon icon-cog text-base text-default group-hover:text-title"></i>Settings</router-link>
                        <router-link :to="all_routes.addProduct" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title group"><i class="icon icon-circle-plus text-base text-default group-hover:text-title"></i>Create Products</router-link>
                        <router-link :to="all_routes.deals" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title group"><i class="icon icon-circle-plus text-base text-default group-hover:text-title"></i>Create Deals</router-link>
                        <router-link :to="all_routes.expenses" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title group"><i class="icon icon-circle-plus text-base text-default group-hover:text-title"></i>Create Expense</router-link>
                    </div>
                    <p class="text-title font-semibold mb-2">Search</p>
                    <div class="space-y-1">
                        <a href="#" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title"><i class="icon icon-clock-10 text-base text-default"></i>Anderson</a>
                        <a href="#" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title"><i class="icon icon-clock-10 text-base text-default"></i>Oneplus 11G</a>
                        <a href="#" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title"><i class="icon icon-clock-10 text-base text-default"></i>Oneplus 11G</a>
                        <a href="#" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title"><i class="icon icon-clock-10 text-base text-default"></i>#INV45879</a>
                        <a href="#" class="flex items-center gap-2 rounded-md text-title py-[5px] px-[10px] hover:bg-light hover:text-title"><i class="icon icon-clock-10 text-base text-default"></i>Knowledge Base</a>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <!-- Search End -->
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { all_routes } from '@/router/all_routes';
import AuthService from '@/services/auth/AuthService';
import { getUser, objSessionUser } from '@/services/auth/authSession';

export default {
    data(){
        return {
            isFixed: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onWindowScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
    },
    methods: {
        toggleMobileBtn() {
            document?.querySelector(".main-wrapper")?.classList?.toggle("slide-nav");
            document?.querySelector(".sidebar-overlay")?.classList?.toggle("opened");
            document?.querySelector("html")?.classList?.toggle("menu-opened");
        },
        toggleSidebar() {
            const body = document.body;
            body.classList.toggle("hidden-layout");

            if (this.$route.path === "/layout/layout-fullwidth") {
                body.classList.toggle("full-width");
                document.querySelector(".sidebar-overlay")?.classList.toggle("opened");
            }
        },
        onWindowScroll() {
            this.isFixed = window.pageYOffset > 50;
        },
    },
    setup() {
        const router = useRouter();
        const isDarkMode = ref(false);

        const strUserName = computed(() => {
            const objUser = objSessionUser.value || getUser();
            return objUser?.name || 'Usuario';
        });
        const strUserEmail = computed(() => {
            const objUser = objSessionUser.value || getUser();
            return objUser?.email || '';
        });

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

        const handleLogout = async () => {
            await AuthService.logout();
            await router.push(all_routes.login);
        };

        const handleLockScreen = () => {
            AuthService.handleLockSession();
        };

        onMounted(() => {
            initializeDarkMode();
            if (!objSessionUser.value) {
                getUser();
            }
        });

        return {
            isDarkMode,
            toggleDarkMode,
            all_routes,
            strUserName,
            strUserEmail,
            handleLogout,
            handleLockScreen
        };
    },
}
</script>