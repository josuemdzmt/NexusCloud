<template>
  <span class="text-xs text-default tabular-nums">v{{ strVersion }}</span>
</template>

<script>
export default {
  name: 'NXAppVersion',
  computed: {
    strVersion() {
      return __APP_VERSION__;
    }
  }
};
</script>
