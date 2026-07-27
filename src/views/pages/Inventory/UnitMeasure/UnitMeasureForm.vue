<template>
  <nx-modal-form ref="modalFormRef" id="unitmeasure-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <!-- Nombre -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. Kilogramo" maxlength="255" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Código -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Código</label>
          <Field name="code" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.code }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. KG" maxlength="50" />
          <ErrorMessage name="code" class="text-danger text-[11px] mt-1 block" />
        </div>
        
        <!-- Estado -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Estado</label>
          <Field name="status" as="nx-combobox" :options="lstStatusOptions" placeholder="Seleccionar Estado" class="w-full text-sm border-border-color focus:border-primary" />
        </div>

        <!-- Descripción -->
        <div class="col-span-2">
          <label class="text-sm text-gray-900 mb-1 block">Descripción</label>
          <Field name="description" as="textarea" rows="3" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Descripción adicional de la unidad..." maxlength="255"></Field>
        </div>

      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import UnitMeasureService from '@/services/inventory/UnitMeasureService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio'),
  code: yup.string().nullable().default(''),
  description: yup.string().nullable().default(''),
  status: yup.string().nullable().default('Active')
});

export default {
  name: 'UnitMeasureForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Unidad de Medida',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstStatusOptions: [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' }
      ]
    };
  },
  methods: {
    handleOpen(numId = null) {
      this.recordId = numId;
      if (numId) {
        this.strTitle = 'Editar Unidad de Medida';
        this.handleInitForm(numId);
      } else {
        this.strTitle = 'Nueva Unidad de Medida';
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objValidationSchema.getDefault());
        }
      }
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
      }
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleCancel() {
      this.handleClose();
    },
    handleInitForm(numId) {
      this.bSpinner = true;
      UnitMeasureService.getById(numId)
      .then((response) => {
        const data = response.data || response;
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching unit measure:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleSubmit(values) {
      if (this.recordId) {
        this.handleUpdate(values);
      } else {
        this.handleCreate(values);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      UnitMeasureService.create(objForm)
      .then((response) => {
        handleSuccess('Éxito', 'Unidad de medida creada correctamente');
        this.$emit('success');
        this.handleClose();
      })
      .catch((error) => {
        handleError('Error de Validación', error.response?.data?.message || 'Error al crear');
        console.error('Error creating unit measure:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      UnitMeasureService.update(this.recordId, objForm)
      .then((response) => {
        handleSuccess('Actualizado', 'Unidad de medida actualizada correctamente');
        this.handleClose();
        this.$emit('success');
      })
      .catch((error) => {
        handleError('Error de Validación', error.response?.data?.message || 'Error al actualizar');
        console.error('Error updating unit measure:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    }
  }
};
</script>
