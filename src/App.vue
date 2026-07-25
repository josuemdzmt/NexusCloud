<template>
  <template v-if="!$route.meta.hideLayout">
    <div class="main-wrapper">
      <template v-if="$route.path !== '/pos/pos'">
        <layouts-header></layouts-header>
        <layouts-sidebar></layouts-sidebar>
      </template>
      <div class="page-wrapper">

        <router-view />

        <common-footer></common-footer>
      </div>
    </div>
  </template>
  <template v-else>
    <template v-if="$route.path === '/pos/pos'">
      <pos-header></pos-header>
    </template>
    <router-view />
  </template>
</template>

<script>
import { watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import "preline";

export default {
  watch: {
    '$route.meta.layout': {
      immediate: true,
      handler(layout) {
        document.documentElement.setAttribute('data-layout', layout === 'rtl' ? '' : (layout || ''));
        document.documentElement.setAttribute('dir', layout === 'rtl' ? 'rtl' : 'ltr');
        document.body.classList.toggle('mini-sidebar', layout === 'mini');
        document.body.classList.toggle('layout-rtl', layout === 'rtl');
      },
    },
  },
  setup() {
    const route = useRoute();

    watch(
      () => route.meta.hideLayout,
      (hideLayout) => {
        if (hideLayout) {
          document.documentElement.setAttribute("data-theme", "light");
        } else {
          const darkMode = localStorage.getItem("dark");
          document.documentElement.setAttribute("data-theme", darkMode === "enabled" ? "dark" : "light");
        }
      },
      { immediate: true }
    );

    watch(
      () => route.fullPath,
      async () => {
        await nextTick();

        if (window.HSStaticMethods) {
          window.HSStaticMethods.autoInit();
        }
      }
    );

    return {};
  }
};
</script>