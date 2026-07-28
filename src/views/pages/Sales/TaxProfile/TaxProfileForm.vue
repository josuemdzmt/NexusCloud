<template>
  <nx-modal-form ref="modalFormRef" id="tax-profile-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        
        <!-- Razón Social -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Razón Social <span class="text-danger">*</span></label>
          <Field name="legal_name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.legal_name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
          <ErrorMessage name="legal_name" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- RFC / Tax ID -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">RFC / Tax ID <span class="text-danger">*</span></label>
          <Field name="tax_id" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.tax_id }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 uppercase" maxlength="50" />
          <ErrorMessage name="tax_id" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Régimen Fiscal -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Régimen Fiscal</label>
          <Field name="tax_regime" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.tax_regime }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. 601" maxlength="10" />
          <ErrorMessage name="tax_regime" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Separador de Dirección -->
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Dirección Fiscal</h4>
        </div>

        <!-- Calle -->
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Calle</label>
          <Field name="address.street" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>

        <!-- Números -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Núm. Exterior</label>
          <Field name="address.ext_num" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Núm. Interior</label>
          <Field name="address.int_num" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>

        <!-- Colonia y Código Postal -->
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Colonia</label>
          <Field name="address.neighborhood" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Código Postal</label>
          <Field name="zip_code" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.zip_code }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="20" />
          <ErrorMessage name="zip_code" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Ciudad, Estado, País -->
        <div class="col-span-2 sm:col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Ciudad / Municipio</label>
          <Field name="address.city" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-1 sm:col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Estado</label>
          <Field name="address.state" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">País</label>
          <Field name="address.country" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. México" />
        </div>

        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>
        </div>

        <!-- Predeterminado -->
        <div class="col-span-2">
          <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="is_default" type="checkbox" :value="true" :unchecked-value="false" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Perfil Predeterminado</span>
          </label>
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import TaxProfileService from '@/services/sales/TaxProfileService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  legal_name: yup.string().required('La razón social es obligatoria'),
  tax_id: yup.string().required('El RFC / Tax ID es obligatorio'),
  tax_regime: yup.string().nullable().default(''),
  zip_code: yup.string().nullable().default(''),
  is_default: yup.boolean().default(false),
  address: yup.object({
    street: yup.string().nullable().default(''),
    ext_num: yup.string().nullable().default(''),
    int_num: yup.string().nullable().default(''),
    neighborhood: yup.string().nullable().default(''),
    city: yup.string().nullable().default(''),
    state: yup.string().nullable().default(''),
    country: yup.string().nullable().default('')
  }).default(() => ({}))
});

export default {
  name: 'TaxProfileForm',
  components: {
    Field,
    ErrorMessage
  },
  data() {
    return {
      recordId: null,
      bSpinner: false,
      objInitialData: {
        legal_name: '',
        tax_id: '',
        tax_regime: '',
        zip_code: '',
        is_default: false,
        address: {
          street: '',
          ext_num: '',
          int_num: '',
          neighborhood: '',
          city: '',
          state: '',
          country: ''
        }
      },
      objValidationSchema: validationSchema
    };
  },
  computed: {
    strTitle() {
      return this.recordId ? 'Editar Perfil Fiscal' : 'Nuevo Perfil Fiscal';
    }
  },
  methods: {
    handleOpen(id = null) {
      this.recordId = id;
      if (this.recordId) {
        this.handleLoadData();
      } else {
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objValidationSchema.getDefault());
        }
        this.$refs.modalFormRef.handleOpen();
      }
    },
    handleClose() {
      this.$refs.modalFormRef.handleClose();
    },
    handleLoadData() {
      this.bSpinner = true;
      TaxProfileService.getById(this.recordId)
      .then((response) => {
        const objData = response.data || response;
        // Ensure address object exists
        if (!objData.address) {
          objData.address = {
            street: '',
            ext_num: '',
            int_num: '',
            neighborhood: '',
            city: '',
            state: '',
            country: ''
          };
        }
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(objData);
        }
        this.$refs.modalFormRef.handleOpen();
      })
      .catch((error) => {
        handleError('Error', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleSubmit(objForm) {
      if (this.recordId) {
        this.handleUpdate(objForm);
      } else {
        this.handleCreate(objForm);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      TaxProfileService.create(objForm)
      .then(() => {
        handleSuccess('Éxito', 'Perfil fiscal creado correctamente');
        this.$emit('success');
        this.handleClose();
      })
      .catch((error) => {
        handleError('Error de Validación', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      TaxProfileService.update(this.recordId, objForm)
      .then(() => {
        handleSuccess('Actualizado', 'Perfil fiscal actualizado correctamente');
        this.handleClose();
        this.$emit('success');
      })
      .catch((error) => {
        handleError('Error de Validación', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCancel() {
      // Cerrado nativamente por data-hs-overlay
    }
  }
};
</script>
