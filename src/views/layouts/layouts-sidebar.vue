<template>
    <!-- Sidenav Menu Start -->
    <aside class="sidebar" id="sidebar">
                
        <!-- Start Logo -->
        <div class="sidebar-logo">
            <div class="flex items-center">
                <!-- Logo Normal -->
                <router-link :to="all_routes.hrmDashboard" class="logo logo-normal">
                    <img src="@/assets/img/logo-small.svg" alt="Logo">
                    <span class="logo-text text-base font-semibold text-gray-900 leading-none">NexusCloud</span>
                </router-link>

                <!-- Logo Small (mini-sidebar) -->
                <router-link :to="all_routes.hrmDashboard" class="logo-small">
                    <img src="@/assets/img/logo-small.svg" alt="Logo">
                </router-link>

                <!-- Logo Dark -->
                <router-link :to="all_routes.hrmDashboard" class="dark-logo">
                    <img src="@/assets/img/logo-small.svg" alt="Logo">
                    <span class="logo-text text-base font-semibold text-white leading-none">NexusCloud</span>
                </router-link>
            </div>
            <button class="sidenav-toggle-btn btn border-0 p-0 active" id="toggle_btn" aria-label="toggle" @click="toggleSidebar"> 
                <i class="icon icon-panel-right-open align-middle"></i>
            </button> 

            <!-- Sidebar Menu Close -->
            <button type="button" class="sidebar-close" aria-label="close" @click="closeSidebar">
                <i class="icon icon-x align-middle"></i>
            </button>                
        </div>
        <!-- End Logo -->

        <!-- Sidenav Menu -->
        <simplebar class="sidebar-inner" data-simplebar>                
            <div id="sidebar-menu" class="sidebar-menu">

                <sidebar-menu></sidebar-menu>                 
            </div>
        </simplebar>

    </aside>
    <!-- Sidenav Menu End -->

    <div class="sidebar-overlay" :class="{ opened: isOverlayOpened }" @click="closeSidebar"></div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import { all_routes } from '@/router/all_routes';

export default {
    components: {
        simplebar,
    },
    data() {
        return {
            isOverlayOpened: false,
            isMiniSidebar: false,
            isExpandedMenu: false,
        };
    },
    mounted() {
        this.syncSidebarState();
        this.initMouseoverListener();
    },
    methods: {
        closeSidebar() {
            const wrapper = document.querySelector(".main-wrapper");
            const unwrapper = document.querySelector(".sidebar-overlay");
                if (wrapper && wrapper.classList.contains("slide-nav")) {
                    wrapper.classList.remove("slide-nav");
                    unwrapper.classList.remove("opened");
                } else {
            }

            const body = document.body;
            body.classList.remove("hidden-layout");

            if (this.$route.path === "/layout/layout-fullwidth") {
                body.classList.remove("full-width");
                this.isOverlayOpened = false;
                document.querySelector(".sidebar-overlay")?.classList.remove("opened");
            }

            this.syncSidebarState();
        },
        toggleSidebar() {
            const body = document.body;

            if (this.$route.path === "/layout/layout-hidden") {
                body.classList.remove("hidden-layout");
            } else if (this.$route.path === "/layout/layout-fullwidth") {
                body.classList.toggle("full-width");
                this.isOverlayOpened = !this.isOverlayOpened;
            } else {
                body.classList.toggle("mini-sidebar");
            }

            this.syncSidebarState();
        },
        syncSidebarState() {
            const body = document.body;
            this.isMiniSidebar = body.classList.contains("mini-sidebar");
            this.isExpandedMenu = body.classList.contains("expand-menu");
        },
        initMouseoverListener() {
            document.addEventListener("mouseover", this.handleMouseover);
        },
        handleMouseover(e) {
            const body = document.body;

            if (!body.classList.contains("mini-sidebar")) {
                body.classList.remove("expand-menu");
                this.isExpandedMenu = false;
                return;
            }

            const target = e.target.closest(".sidebar, .header-left");
            const shouldExpand = Boolean(target);

            body.classList.toggle("expand-menu", shouldExpand);
            this.isExpandedMenu = shouldExpand;
            e.preventDefault();
        },
        beforeUnmount() {
            document.removeEventListener("mouseover", this.handleMouseover);
        },
    },
    setup() {
        
        return {
            all_routes,
        };
    },
}
</script>