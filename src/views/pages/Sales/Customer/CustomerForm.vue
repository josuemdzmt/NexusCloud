<template>
  <nx-modal-form ref="modalFormRef" id="customer-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <!-- Tipo de Persona -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Tipo de Persona <span class="text-danger">*</span></label>
          <div class="flex items-center gap-4 mt-2">
            <label class="inline-flex items-center">
              <Field v-model="bIsPerson" type="radio" name="is_person" :value="true" class="form-radio text-primary" />
              <span class="ml-2 text-sm">Física (Individuo)</span>
            </label>
            <label class="inline-flex items-center">
              <Field v-model="bIsPerson" type="radio" name="is_person" :value="false" class="form-radio text-primary" />
              <span class="ml-2 text-sm">Moral (Empresa)</span>
            </label>
          </div>
          <ErrorMessage name="is_person" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Campos para Persona Física -->
        <template v-if="bIsPerson">
          <div class="col-span-1">
            <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombres <span class="text-danger">*</span></label>
            <Field name="first_name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.first_name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="100" />
            <ErrorMessage name="first_name" class="text-danger text-[11px] mt-1 block" />
          </div>
          <div class="col-span-1">
            <label class="text-sm font-semibold text-gray-900 mb-1 block">Apellido Paterno <span class="text-danger">*</span></label>
            <Field name="last_name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.last_name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="100" />
            <ErrorMessage name="last_name" class="text-danger text-[11px] mt-1 block" />
          </div>
          <div class="col-span-1">
            <label class="text-sm font-semibold text-gray-900 mb-1 block">Apellido Materno</label>
            <Field name="second_last_name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.second_last_name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="100" />
            <ErrorMessage name="second_last_name" class="text-danger text-[11px] mt-1 block" />
          </div>
        </template>

        <!-- Campos para Persona Moral -->
        <template v-else>
          <div class="col-span-2">
            <label class="text-sm font-semibold text-gray-900 mb-1 block">Razón Social <span class="text-danger">*</span></label>
            <Field name="legal_name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.legal_name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
            <ErrorMessage name="legal_name" class="text-danger text-[11px] mt-1 block" />
          </div>
        </template>

        <!-- RFC / Tax ID -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">RFC / Tax ID</label>
          <Field name="tax_id" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.tax_id }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 uppercase" maxlength="50" />
          <ErrorMessage name="tax_id" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Crédito -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Límite de Crédito</label>
          <Field name="credit_limit" as="input" type="number" step="0.01" :class="{ 'border-danger focus:border-danger': errors.credit_limit }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="credit_limit" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Días de Crédito</label>
          <Field name="credit_days" as="input" type="number" :class="{ 'border-danger focus:border-danger': errors.credit_days }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="credit_days" class="text-danger text-[11px] mt-1 block" />
        </div>

      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import CustomerService from '@/services/sales/CustomerService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  is_person: yup.boolean().default(false).required('Obligatorio'),
  legal_name: yup.string().nullable().default('').when('is_person', {
    is: false,
    then: () => yup.string().required('La razón social es obligatoria'),
    otherwise: () => yup.string().nullable()
  }),
  first_name: yup.string().nullable().default('').when('is_person', {
    is: true,
    then: () => yup.string().required('El nombre es obligatorio'),
    otherwise: () => yup.string().nullable()
  }),
  last_name: yup.string().nullable().default('').when('is_person', {
    is: true,
    then: () => yup.string().required('El apellido paterno es obligatorio'),
    otherwise: () => yup.string().nullable()
  }),
  second_last_name: yup.string().nullable().default(''),
  tax_id: yup.string().nullable().default(''),
  credit_limit: yup.number().nullable().default(0),
  credit_days: yup.number().nullable().default(0)
});

export default {
  name: 'CustomerForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Cliente',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      bIsPerson: false
    };
  },
  methods: {
    handleOpen(numId = null) {
      this.recordId = numId;
      if (numId) {
        this.strTitle = 'Editar Cliente';
        this.handleInitForm(numId);
      } else {
        this.strTitle = 'Nuevo Cliente';
        this.bIsPerson = false;
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
      CustomerService.getById(numId)
      .then((response) => {
        const data = response.data || response;
        this.bIsPerson = data.is_person === true || data.is_person === 1;
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching customer:', error);
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
      CustomerService.create(objForm)
      .then((response) => {
        handleSuccess('Éxito', 'Cliente creado correctamente');
        this.$emit('success');
        this.handleClose();
      })
      .catch((error) => {
        handleError('Error de Validación', error.response?.data?.message || 'Error al crear el cliente');
        console.error('Error creating customer:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      CustomerService.update(this.recordId, objForm)
      .then((response) => {
        handleSuccess('Actualizado', 'Cliente actualizado correctamente');
        this.handleClose();
        this.$emit('success');
      })
      .catch((error) => {
        handleError('Error de Validación', error.response?.data?.message || 'Error al actualizar el cliente');
        console.error('Error updating customer:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    }
  }
};
</script>
