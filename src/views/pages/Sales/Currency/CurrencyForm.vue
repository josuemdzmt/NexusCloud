<template>
  <nx-modal-form ref="modalFormRef" id="currency-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <!-- Nombre -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. Dólar Estadounidense" maxlength="100" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Código ISO -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Código ISO <span class="text-danger">*</span></label>
          <Field name="iso_code" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.iso_code }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 uppercase" placeholder="Ej. USD" maxlength="3" />
          <ErrorMessage name="iso_code" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Símbolo -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Símbolo</label>
          <Field name="symbol" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.symbol }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. $" maxlength="10" />
          <ErrorMessage name="symbol" class="text-danger text-[11px] mt-1 block" />
        </div>

        
        <div class="col-span-2 mt-2">

        
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>

        
        </div>

        
        <!-- Estado -->
        <div class="col-span-2">
                    <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="status" as="input" type="checkbox" :value="'Active'" :unchecked-value="'Inactive'" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Moneda Activa</span>
          </label>
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import CurrencyService from '@/services/sales/CurrencyService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio'),
  iso_code: yup.string().default('').required('El código ISO es obligatorio').max(3, 'Máximo 3 caracteres'),
  symbol: yup.string().nullable().default(''),
  status: yup.string().nullable().default('Active')
});

export default {
  name: 'CurrencyForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Moneda',
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
        this.strTitle = 'Editar Moneda';
        this.handleInitForm(numId);
      } else {
        this.strTitle = 'Nueva Moneda';
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
      CurrencyService.getById(numId)
      .then((response) => {
        const data = response.data || response;
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching currency:', error);
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
      CurrencyService.create(objForm)
      .then((response) => {
        handleSuccess('Éxito', 'Moneda creada correctamente');
        this.$emit('success');
        this.handleClose();
      })
      .catch((error) => {
        handleError('Error de Validación', error.response?.data?.message || 'Error al crear la moneda');
        console.error('Error creating currency:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      CurrencyService.update(this.recordId, objForm)
      .then((response) => {
        handleSuccess('Actualizado', 'Moneda actualizada correctamente');
        this.handleClose();
        this.$emit('success');
      })
      .catch((error) => {
        handleError('Error de Validación', error.response?.data?.message || 'Error al actualizar la moneda');
        console.error('Error updating currency:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    }
  }
};
</script>
