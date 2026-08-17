<template>
    <ul role="menu" aria-label="Main navigation menu">
        <template v-for="group in menuGroups" :key="group.tittle">
            <li class="menu-title" aria-disabled="true"><span>{{ group.tittle }}</span></li>
            <sidebar-submenu
                v-for="(item, index) in group.menu"
                :key="item.menuValue + index"
                :item="item"
                :depth="1"
                :siblings="group.menu"
            />
        </template>
    </ul>
</template>

<script>
import { reactive, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import sidebarMenuData from '@/assets/json/sidebar-menu.json';
import SidebarSubmenu from './sidebar-submenu.vue';
import { expandActivePath, filterMenuByPermission } from './sidebar-menu-helpers';
import { handleHasPermission, objSessionUser } from '@/services/auth/authSession';

export default {
    components: {
        SidebarSubmenu,
    },
    setup() {
        const route = useRoute();
        const menuGroups = reactive([]);

        const handleRebuildMenu = () => {
            const lstFiltered = filterMenuByPermission(
                JSON.parse(JSON.stringify(sidebarMenuData)),
                handleHasPermission
            );
            menuGroups.splice(0, menuGroups.length, ...lstFiltered);
            expandActivePath(menuGroups, route.path);
        };

        onMounted(handleRebuildMenu);
        watch(() => route.path, handleRebuildMenu);
        watch(objSessionUser, handleRebuildMenu, { deep: true });

        return {
            menuGroups,
        };
    },
}
</script>
