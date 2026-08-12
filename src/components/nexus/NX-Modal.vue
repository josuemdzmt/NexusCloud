<template>
  <div :id="id" tabindex="-1" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
    role="dialog" aria-modal="true">
    <div
      :class="[
        strSizeClass,
        'hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 ' +
          'opacity-0 ease-out transition-all sm:w-full m-3 sm:mx-auto'
      ]">
      <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full pointer-events-auto max-h-[calc(100dvh-1.5rem)] overflow-hidden">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NXModal',
  props: {
    id: { type: String, required: true },
    size: { type: String, default: 'lg' }
  },
  provide() {
    return {
      strModalId: this.id
    };
  },
  computed: {
    strSizeClass() {
      const objSizes = {
        xs: 'sm:max-w-xs',
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        '3xl': 'sm:max-w-3xl',
        '4xl': 'sm:max-w-4xl',
        '5xl': 'sm:max-w-5xl',
        '6xl': 'sm:max-w-6xl',
        '7xl': 'sm:max-w-7xl'
      };
      return objSizes[this.size] || 'sm:max-w-lg';
    }
  }
};
</script>
