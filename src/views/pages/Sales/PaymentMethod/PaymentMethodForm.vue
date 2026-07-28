<template>
  <nx-modal-form ref="modalFormRef" id="payment-method-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <!-- Nombre -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. Tarjeta de Crédito" maxlength="100" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Código -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Código</label>
          <Field name="code" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.code }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 uppercase" placeholder="Ej. TC" maxlength="50" />
          <ErrorMessage name="code" class="text-danger text-[11px] mt-1 block" />
        </div>
        <!-- Descripción -->
        <div class="col-span-2">
          <label class="text-sm text-gray-900 mb-1 block">Descripción</label>
          <Field name="description" as="textarea" rows="3" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Descripción adicional del método de pago..." maxlength="255"></Field>
        </div>


        
        <div class="col-span-2 mt-2">

        
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>

        
        </div>

        
        <!-- Estado -->
        <div class="col-span-1">
                    <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="status" as="input" type="checkbox" :value="'Active'" :unchecked-value="'Inactive'" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Método de Pago Activo</span>
          </label>
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio'),
  code: yup.string().nullable().default(''),
  description: yup.string().nullable().default(''),
  status: yup.string().nullable().default('Active')
});

export default {
  name: 'PaymentMethodForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Método de Pago',
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
        this.strTitle = 'Editar Método de Pago';
        this.handleInitForm(numId);
      } else {
        this.strTitle = 'Nuevo Método de Pago';
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
      PaymentMethodService.getById(numId)
      .then((response) => {
        const data = response.data || response;
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching payment method:', error);
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
      PaymentMethodService.create(objForm)
      .then((response) => {
        handleSuccess('Éxito', 'Método de pago creado correctamente');
        this.$emit('success');
        this.handleClose();
      })
      .catch((error) => {
        handleError('Error de Validación', error.response?.data?.message || 'Error al crear el método de pago');
        console.error('Error creating payment method:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      PaymentMethodService.update(this.recordId, objForm)
      .then((response) => {
        handleSuccess('Actualizado', 'Método de pago actualizado correctamente');
        this.handleClose();
        this.$emit('success');
      })
      .catch((error) => {
        handleError('Error de Validación', error.response?.data?.message || 'Error al actualizar el método de pago');
        console.error('Error updating payment method:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    }
  }
};
</script
