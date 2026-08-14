<template>
  <span class="inline-flex items-center justify-center rounded-full border border-border-color bg-dark text-white font-semibold shrink-0 select-none tracking-wide"
    :class="[strBoxClass, strTextClass]" role="img" :aria-label="strLabel" :title="strLabel">{{ strInitials }}</span>
</template>

<script>
import { handleGetInitials } from './utils/avatarUtils.js';

const SIZE_MAP = {
  sm: { box: 'size-8', text: 'text-xs' },
  md: { box: 'size-10', text: 'text-sm' },
  lg: { box: 'size-16', text: 'text-xl' }
};

export default {
  name: 'NXAvatar',
  props: {
    name: { type: String, default: '' },
    size: { type: String, default: 'sm',
      validator(strValue) {
        return Object.prototype.hasOwnProperty.call(SIZE_MAP, strValue);
      }
    }
  },
  computed: {
    strInitials() {
      return handleGetInitials(this.name);
    },
    strLabel() {
      const strName = String(this.name || '').trim();
      return strName || 'Usuario';
    },
    strBoxClass() {
      return (SIZE_MAP[this.size] || SIZE_MAP.sm).box;
    },
    strTextClass() {
      return (SIZE_MAP[this.size] || SIZE_MAP.sm).text;
    }
  }
};
</script>
