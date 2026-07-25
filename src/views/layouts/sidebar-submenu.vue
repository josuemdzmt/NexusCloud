<template>
    <li :class="liClasses">
        <template v-if="!children.length">
            <a v-if="isExternal" :href="item.route" target="_blank" rel="noopener">
                <i v-if="item.Icon" :class="item.Icon"></i><span>{{ item.menuValue }}</span>
            </a>
            <a v-else-if="isPlaceholder" href="#" @click.prevent>
                <i v-if="item.Icon" :class="item.Icon"></i><span>{{ item.menuValue }}</span>
            </a>
            <router-link v-else :to="item.route">
                <i v-if="item.Icon" :class="item.Icon"></i><span>{{ item.menuValue }}</span>
            </router-link>
        </template>
        <template v-else>
            <a href="#" :class="{ active: isActiveAncestor, subdrop: item.showSubRoute }" @click.prevent="onToggle">
                <i v-if="item.Icon" :class="item.Icon"></i><span>{{ item.menuValue }}</span>
                <span :class="arrowClasses"></span>
            </a>
            <ul v-if="item.showSubRoute">
                <sidebar-submenu
                    v-for="(child, index) in children"
                    :key="child.menuValue + index"
                    :item="child"
                    :depth="depth + 1"
                    :siblings="children"
                />
            </ul>
        </template>
    </li>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { getChildren, containsActiveRoute, toggle } from './sidebar-menu-helpers';

export default {
    name: 'SidebarSubmenu',
    props: {
        item: { type: Object, required: true },
        depth: { type: Number, default: 1 },
        siblings: { type: Array, required: true },
    },
    setup(props) {
        const route = useRoute();

        const children = computed(() => getChildren(props.item));
        const isExternal = computed(() => typeof props.item.route === 'string' && props.item.route.startsWith('http'));
        const isPlaceholder = computed(() => !props.item.route || props.item.route === '#');
        const isActiveAncestor = computed(() => containsActiveRoute(props.item, route.path));

        const liClasses = computed(() => {
            if (!children.value.length) return null;
            return ['submenu', { 'submenu-two': props.depth === 2, 'submenu-three': props.depth >= 3 }];
        });

        const arrowClasses = computed(() => [
            'menu-arrow',
            { 'inside-submenu': props.depth >= 2, 'inside-submenu-two': props.depth >= 3 },
        ]);

        const onToggle = () => toggle(props.item, props.siblings);

        return {
            children,
            isExternal,
            isPlaceholder,
            isActiveAncestor,
            liClasses,
            arrowClasses,
            onToggle,
        };
    },
}
</script>
