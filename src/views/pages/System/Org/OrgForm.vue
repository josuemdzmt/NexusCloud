<template>
  <nx-modal-form ref="modalFormRef" id="org-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        
        <!-- Datos Principales -->
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Datos Principales</h4>
        </div>

        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre Comercial <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>

        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Razón Social</label>
          <Field name="legal_name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.legal_name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
          <ErrorMessage name="legal_name" class="text-danger text-[11px] mt-1 block" />
        </div>

        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">RFC / Tax ID</label>
          <Field name="tax_id" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.tax_id }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 uppercase" maxlength="50" />
          <ErrorMessage name="tax_id" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1"></div>

        <!-- Contacto -->
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Contacto</h4>
        </div>
        
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Teléfono</label>
          <Field name="phone" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="50" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Correo Electrónico</label>
          <Field name="email" as="input" type="email" :class="{ 'border-danger focus:border-danger': errors.email }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
          <ErrorMessage name="email" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Sitio Web</label>
          <Field name="website" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.website }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="https://" maxlength="255" />
          <ErrorMessage name="website" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Logo URL</label>
          <Field name="logo_url" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.logo_url }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="https://" maxlength="255" />
          <ErrorMessage name="logo_url" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Separador de Dirección -->
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Dirección</h4>
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
          <Field name="address.zip_code" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="20" />
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

        <!-- Estado -->
        <div class="col-span-2">
          <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="status" type="checkbox" value="Active" unchecked-value="Inactive" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Organización Activa</span>
          </label>
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import OrgService from '@/services/system/OrgService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  tenant_id: yup.number().default(1),
  name: yup.string().required('El nombre comercial es obligatorio'),
  legal_name: yup.string().nullable().default(''),
  tax_id: yup.string().nullable().default(''),
  phone: yup.string().nullable().default(''),
  email: yup.string().email('Correo inválido').nullable().default(''),
  website: yup.string().url('URL inválida').nullable().default(''),
  logo_url: yup.string().url('URL inválida').nullable().default(''),
  status: yup.string().default('Active'),
  address: yup.object({
    street: yup.string().nullable().default(''),
    ext_num: yup.string().nullable().default(''),
    int_num: yup.string().nullable().default(''),
    neighborhood: yup.string().nullable().default(''),
    zip_code: yup.string().nullable().default(''),
    city: yup.string().nullable().default(''),
    state: yup.string().nullable().default(''),
    country: yup.string().nullable().default('')
  }).default(() => ({}))
});

export default {
  name: 'OrgForm',
  components: {
    Field,
    ErrorMessage
  },
  data() {
    return {
      recordId: null,
      bSpinner: false,
      objInitialData: validationSchema.getDefault(),
      objValidationSchema: validationSchema
    };
  },
  computed: {
    strTitle() {
      return this.recordId ? 'Editar Organización' : 'Nueva Organización';
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
      OrgService.getById(this.recordId)
      .then((response) => {
        const objData = response.data || response;
        if (!objData.address) {
          objData.address = {
            street: '', ext_num: '', int_num: '', neighborhood: '', zip_code: '', city: '', state: '', country: ''
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
      OrgService.create(objForm)
      .then(() => {
        handleSuccess('Éxito', 'Organización creada correctamente');
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
      OrgService.update(this.recordId, objForm)
      .then(() => {
        handleSuccess('Actualizado', 'Organización actualizada correctamente');
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
    }
  }
};
</script>
