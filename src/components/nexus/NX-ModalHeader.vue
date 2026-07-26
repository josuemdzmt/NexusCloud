<template>
  <div class="flex justify-between items-center p-4 border-b border-border-color">
    <slot>
      <h2 class="text-base font-bold text-title mb-0">{{ label }}</h2>
    </slot>
    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" :data-hs-overlay="'#' + strModalId">
      <i class="ph ph-x text-sm"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NXModalHeader',
  props: {
    label: { type: String, default: '' }
  },
  inject: ['strModalId']
};
</script>
