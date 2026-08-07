<template>
  <div>
    <button :id="id + '-trigger-btn'" :data-hs-overlay="'#' + id" data-hs-overlay-keyboard="false" class="hidden"></button>
    <nx-modal :id="id" :size="size">
      <nx-modal-header :label="title"></nx-modal-header>

      <nx-form-page ref="formPageRef" variant="custom" :validationSchema="validationSchema" :initialValues="initialValues" @submit="handleSubmit" @cancel="handleCancel">
        <template #default="{ errors, isSubmitting, setValues, values }">
          <nx-modal-body>
            <slot :errors="errors" :isSubmitting="isSubmitting" :setValues="setValues" :values="values"></slot>
          </nx-modal-body>
        </template>

        <template #footer="{ isSubmitting }">
          <slot name="footer" :isSubmitting="isSubmitting">
            <nx-modal-footer>
              <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" @click="handleCancel">Cancelar</button>
              <button type="submit" :disabled="isSubmitting" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer disabled:opacity-50">
                <span v-if="isSubmitting" class="animate-spin inline-block size-4 border-[2px] border-current border-t-transparent text-white rounded-full mr-2" role="status"></span>
                Guardar
              </button>
            </nx-modal-footer>
          </slot>
        </template>
      </nx-form-page>
    </nx-modal>
  </div>
</template>

<script>
export default {
  name: 'NXModalForm',
  props: {
    id: { type: String, required: true },
    title: { type: String, default: '' },
    size: { type: String, default: 'lg' },
    validationSchema: { type: Object, default: () => ({}) },
    initialValues: { type: Object, default: () => ({}) }
  },
  emits: ['submit', 'cancel'],
  methods: {
    handleOpen() {
      setTimeout(() => {
        const elTrigger = document.getElementById(this.id + '-trigger-btn');
        if (elTrigger) {
          elTrigger.click();
        }
      }, 50);
    },
    handleClose() {
      const elModal = document.getElementById(this.id);
      const elCloseBtn = elModal ? elModal.querySelector('[data-hs-overlay]') : null;
      if (elCloseBtn) {
        elCloseBtn.click();
      } else if (window.HSOverlay) {
        window.HSOverlay.close('#' + this.id);
      }
    },
    handleSubmit(objValues, objActions) {
      this.$emit('submit', objValues, objActions);
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleSetValues(objValues) {
      if (this.$refs.formPageRef) {
        this.$refs.formPageRef.handleSetValues(objValues);
      }
    },
    handleFormSubmit() {
      if (this.$refs.formPageRef) {
        this.$refs.formPageRef.handleFormSubmit();
      }
    }
  }
};
</script>
