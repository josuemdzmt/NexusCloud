<template>
  <div v-if="bVisited" v-show="bActive" :id="`${strTabValue}-pane`" role="tabpanel" :aria-labelledby="`${strTabValue}-tab`">
    <slot />
  </div>
</template>

<script>
/**
 * NXTab — panel de tab (API tipo lightning-tab).
 * Contenido lazy: se monta la primera vez que el tab se activa.
 */
export default {
  name: 'NXTab',
  inject: {
    nxTabset: { default: null }
  },
  props: {
    label: { type: String, required: true },
    value: { type: [String, Number], default: null }
  },
  emits: ['active'],
  data() {
    return {
      bVisited: false
    };
  },
  computed: {
    strTabValue() {
      if (this.value != null && this.value !== '') {
        return String(this.value);
      }
      return String(this.label).toLowerCase().replace(/\s+/g, '-');
    },
    bActive() {
      return this.nxTabset?.objState?.activeValue === this.strTabValue;
    }
  },
  watch: {
    bActive: {
      immediate: true,
      handler(bIsActive) {
        if (bIsActive) {
          this.handleActivate();
        }
      }
    },
    label() {
      this.handleReregister();
    },
    value() {
      this.handleReregister();
    }
  },
  mounted() {
    this.handleReregister();
  },
  beforeUnmount() {
    this.nxTabset?.handleUnregisterTab?.(this.strTabValue);
  },
  methods: {
    handleReregister() {
      if (!this.nxTabset) {
        console.warn('nx-tab must be used inside nx-tabset');
        return;
      }
      this.nxTabset.handleRegisterTab({
        value: this.strTabValue,
        label: this.label,
        handleActivate: this.handleActivate
      });
    },
    handleActivate() {
      if (!this.bVisited) {
        this.bVisited = true;
      }
      this.$emit('active', { value: this.strTabValue, target: this });
    }
  }
};
</script>
