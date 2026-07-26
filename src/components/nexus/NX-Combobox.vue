<template>
  <select v-bind="$attrs" :value="modelValue || value" @change="handleChange" @blur="handleBlur" class="w-full px-3 py-2 text-sm border rounded-md bg-white focus:outline-none focus:ring-0 transition-colors" :class="[!$attrs.class?.includes('border-danger') ? 'border-border-color' : '']" :disabled="disabled">
    <option value="" disabled>{{ placeholder }}</option>
    <option v-for="objOption in options" :key="objOption.value" :value="objOption.value">{{ objOption.label }}</option>
  </select>
</template>

<script>
export default {
  name: 'NX-Combobox',
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number], default: '' },
    value: { type: [String, Number], default: '' },
    options: { type: Array, default: () => [] },
    placeholder: { type: String, default: 'Select an option...' },
    disabled: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'change', 'blur', 'input'],
  methods: {
    handleChange(objEvent) {
      const strVal = objEvent.target.value;
      this.$emit('update:modelValue', strVal);
      this.$emit('change', strVal);
      this.$emit('input', strVal);
    },
    handleBlur(objEvent) {
      this.$emit('blur', objEvent);
    }
  }
};
</script>
