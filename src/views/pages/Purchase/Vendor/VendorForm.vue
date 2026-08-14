<template>
  <nx-modal-form ref="modalFormRef" id="vendor-modal" :title="strTitle" size="3xl" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <!-- Tipo de Persona -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Tipo de Persona <span class="text-danger">*</span></label>
          <div class="flex items-center gap-4 mt-2">
            <label class="inline-flex items-center" :class="{ 'opacity-50 cursor-not-allowed': !!recordId }">
              <Field v-model="bIsPerson" type="radio" name="is_person" :value="true" class="form-radio text-primary" :disabled="!!recordId" />
              <span class="ml-2 text-sm">Física (Individuo)</span>
            </label>
            <label class="inline-flex items-center" :class="{ 'opacity-50 cursor-not-allowed': !!recordId }">
              <Field v-model="bIsPerson" type="radio" name="is_person" :value="false" class="form-radio text-primary" :disabled="!!recordId" />
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
        <div class="col-span-1"></div>

        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Contacto</h4>
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Teléfono</label>
          <Field name="phone" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.phone }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="50" />
          <ErrorMessage name="phone" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Móvil</label>
          <Field name="mobile" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.mobile }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="50" />
          <ErrorMessage name="mobile" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Correo Electrónico</label>
          <Field name="email" as="input" type="email" :class="{ 'border-danger focus:border-danger': errors.email }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="150" />
          <ErrorMessage name="email" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Sitio Web</label>
          <Field name="website" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.website }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="https://" maxlength="255" />
          <ErrorMessage name="website" class="text-danger text-[11px] mt-1 block" />
        </div>

        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Dirección de facturación / fiscal</h4>
        </div>
        <nx-address-fields name-prefix="billing_address" searchable />

        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Finanzas</h4>
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
        
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>
        </div>
        <!-- Estado -->
        <div class="col-span-2">
          <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="status" as="input" type="checkbox" :value="'Active'" :unchecked-value="'Inactive'" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Proveedor Activo</span>
          </label>
          <ErrorMessage name="status" class="text-danger text-[11px] mt-1 block" />
        </div>

      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import VendorService from '@/services/purchasing/VendorService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { yupAddressSchema, handleEnsureAddress, handleAddressPayload } from '@/utils/addressUtils';

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
  phone: yup.string().nullable().default(''),
  mobile: yup.string().nullable().default(''),
  email: yup.string().nullable().default('').transform((strValue) => (strValue === '' ? null : strValue)).email('Correo inválido'),
  website: yup.string().nullable().default(''),
  billing_address: yupAddressSchema,
  credit_limit: yup.number().nullable().default(0),
  credit_days: yup.number().nullable().default(0),
  status: yup.string().nullable().default('Active')
});

export default {
  name: 'VendorForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Proveedor',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      bIsPerson: false
    };
  },
  methods: {
    handleOpen(numId = null) {
      this.recordId = numId;
      if (numId) {
        this.strTitle = 'Editar Proveedor';
        this.handleInitForm(numId);
      } else {
        this.strTitle = 'Nuevo Proveedor';
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
      VendorService.getById(numId)
      .then((response) => {
        const data = response.data || response;
        this.bIsPerson = data.is_person === true || data.is_person === 1;
        data.billing_address = handleEnsureAddress(data.billing_address || data.billingAddress);
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching vendor:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleSubmit(values) {
      const objPayload = {
        ...values,
        billing_address: handleAddressPayload(values.billing_address)
      };
      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      VendorService.create(objForm)
      .then((response) => {
        handleSuccess('Éxito', 'Proveedor creado correctamente');
        this.$emit('success');
        this.handleClose();
      })
      .catch((error) => {
        handleError('Error de Validación', error);
        console.error('Error creating vendor:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      VendorService.update(this.recordId, objForm)
      .then((response) => {
        handleSuccess('Actualizado', 'Proveedor actualizado correctamente');
        this.handleClose();
        this.$emit('success');
      })
      .catch((error) => {
        handleError('Error de Validación', error);
        console.error('Error updating vendor:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    }
  }
};
</script>
