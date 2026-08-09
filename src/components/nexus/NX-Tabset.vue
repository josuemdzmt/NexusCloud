<template>
  <div class="nx-tabset" :class="strVariantClass">
    <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist" :aria-orientation="strOrientation">
      <button v-for="objTab in lstTabs" :key="objTab.value" type="button" :id="`${objTab.value}-tab`" role="tab"
        :aria-selected="objTab.value === strActiveValue" :aria-controls="`${objTab.value}-pane`" :tabindex="objTab.value === strActiveValue ? 0 : -1"
        class="px-4 py-3 text-sm whitespace-nowrap border-b-2 -mb-px focus:outline-hidden cursor-pointer"
        :class="objTab.value === strActiveValue ? 'font-semibold text-gray-900 border-primary' : 'text-default border-transparent hover:text-gray-900'"
        @click="handleSelectTab(objTab.value)">
        {{ objTab.label }}
      </button>
    </nav>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * NXTabset — contenedor de tabs (API tipo lightning-tabset).
 * Lazy: el panel de cada nx-tab se monta la primera vez que se activa.
 */
export default {
  name: 'NXTabset',
  props: {
    modelValue: { type: [String, Number], default: null },
    variant: { type: String, default: 'default' }
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      lstTabs: [],
      strInternalActive: null,
      objTabsetState: {
        activeValue: null
      }
    };
  },
  computed: {
    strActiveValue() {
      if (this.modelValue != null && this.modelValue !== '') {
        return String(this.modelValue);
      }
      return this.strInternalActive;
    },
    strVariantClass() {
      return `nx-tabset--${this.variant || 'default'}`;
    },
    strOrientation() {
      return this.variant === 'vertical' ? 'vertical' : 'horizontal';
    }
  },
  provide() {
    return {
      nxTabset: {
        objState: this.objTabsetState,
        handleRegisterTab: this.handleRegisterTab,
        handleUnregisterTab: this.handleUnregisterTab
      }
    };
  },
  watch: {
    strActiveValue: {
      immediate: true,
      handler(strValue) {
        this.objTabsetState.activeValue = strValue;
      }
    },
    modelValue: {
      immediate: true,
      handler(strValue) {
        if (strValue != null && strValue !== '') {
          this.strInternalActive = String(strValue);
        }
      }
    }
  },
  methods: {
    handleRegisterTab(objTab) {
      const iIndex = this.lstTabs.findIndex((objItem) => objItem.value === objTab.value);
      if (iIndex >= 0) {
        this.lstTabs.splice(iIndex, 1, objTab);
      } else {
        this.lstTabs.push(objTab);
      }

      if (this.strActiveValue == null && this.lstTabs.length === 1) {
        this.handleSelectTab(objTab.value);
      } else if (this.strActiveValue === objTab.value) {
        this.$nextTick(() => {
          objTab.handleActivate?.();
        });
      }
    },
    handleUnregisterTab(strValue) {
      this.lstTabs = this.lstTabs.filter((objTab) => objTab.value !== strValue);
      if (this.strActiveValue === strValue && this.lstTabs.length) {
        this.handleSelectTab(this.lstTabs[0].value);
      }
    },
    handleSelectTab(strValue) {
      if (strValue == null) return;
      const strNormalized = String(strValue);
      this.strInternalActive = strNormalized;
      this.objTabsetState.activeValue = strNormalized;
      this.$emit('update:modelValue', strNormalized);
      this.$emit('change', strNormalized);

      const objTab = this.lstTabs.find((objItem) => objItem.value === strNormalized);
      this.$nextTick(() => {
        objTab?.handleActivate?.();
      });
    }
  }
};
</script>
