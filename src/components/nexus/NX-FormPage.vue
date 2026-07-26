<template>
  <Form :validation-schema="validationSchema" :initial-values="initialValues" @submit="handleSubmit" v-slot="{ errors, isSubmitting, setValues }" ref="formRef">
    <!-- Layout Variant: record (2 Columns: Main 8/12 + Sidebar 4/12) -->
    <div v-if="variant === 'record'" class="grid grid-cols-12 gap-3">
      <div class="col-span-12 lg:col-span-8 space-y-3">
        <slot name="main" :errors="errors" :isSubmitting="isSubmitting" :setValues="setValues"></slot>
      </div>
      <div v-if="$slots.sidebar" class="col-span-12 lg:col-span-4 space-y-3">
        <slot name="sidebar" :errors="errors" :isSubmitting="isSubmitting" :setValues="setValues"></slot>
      </div>
    </div>

    <!-- Layout Variant: document (Invoice / Order Layout) -->
    <div v-else-if="variant === 'document'" class="bg-white border border-border-color rounded-md p-5 shadow-sm">
      <slot name="document" :errors="errors" :isSubmitting="isSubmitting" :setValues="setValues">
        <slot :errors="errors" :isSubmitting="isSubmitting" :setValues="setValues"></slot>
      </slot>
    </div>

    <!-- Layout Variant: custom / free -->
    <div v-else>
      <slot :errors="errors" :isSubmitting="isSubmitting" :setValues="setValues"></slot>
    </div>

    <!-- Footer Actions Slot or Default Footer -->
    <slot name="footer" :errors="errors" :isSubmitting="isSubmitting" :setValues="setValues">
      <div class="flex justify-end items-center gap-2 mt-5 pt-5 border-t border-border-color">
        <button type="button" @click="$emit('cancel')" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancelar</button>
        <button type="submit" :disabled="isSubmitting" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer disabled:opacity-50">
          <span v-if="isSubmitting" class="animate-spin inline-block size-4 border-[2px] border-current border-t-transparent text-white rounded-full mr-2" role="status"></span>
          Guardar
        </button>
      </div>
    </slot>
  </Form>
</template>

<script>
import { Form } from 'vee-validate';

export default {
  name: 'NX-FormPage',
  components: {
    Form
  },
  props: {
    variant: { type: String, default: 'record' },
    validationSchema: { type: Object, default: () => ({}) },
    initialValues: { type: Object, default: () => ({}) }
  },
  emits: ['submit', 'cancel'],
  methods: {
    handleSubmit(objValues, objActions) {
      this.$emit('submit', objValues, objActions);
    },
    handleSetValues(objValues) {
      if (this.$refs.formRef) {
        this.$refs.formRef.setValues(objValues);
      }
    },
    handleFormSubmit() {
      if (this.$refs.formRef) {
        this.$refs.formRef.submitForm();
      }
    }
  }
};
</script>
