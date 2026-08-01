<template>
  <nx-modal-form ref="modalFormRef" id="location-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        
        <!-- Nombre y Tipo -->
        <div class="col-span-2 sm:col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre del Almacén <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Tipo de Ubicación <span class="text-danger">*</span></label>
          <Field name="location_type" as="nx-combobox" :options="lstLocationTypes" placeholder="Seleccionar Tipo" :class="{ 'border-danger focus:border-danger': errors.location_type }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="location_type" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Dirección -->
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Dirección</h4>
        </div>
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Calle / Avenida</label>
          <Field name="address.street" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Ciudad</label>
          <Field name="address.city" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Estado / Provincia</label>
          <Field name="address.state" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Código Postal</label>
          <Field name="address.zip" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-2 sm:col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">País</label>
          <Field name="address.country" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>

        <!-- Configuración y Estado -->
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>
        </div>
        <div class="col-span-2 sm:col-span-1 flex items-center gap-2">
          <Field name="is_mobile" type="checkbox" :value="true" :unchecked-value="false" class="rounded border-gray-300 text-primary focus:ring-primary" />
          <label class="text-sm text-gray-900">Ubicación Móvil (ej. Furgoneta)</label>
        </div>
        <div class="col-span-2 sm:col-span-1 flex items-center gap-2">
          <Field name="is_inventory_location" type="checkbox" :value="true" :unchecked-value="false" class="rounded border-gray-300 text-primary focus:ring-primary" />
          <label class="text-sm text-gray-900">Afecta Inventario</label>
        </div>
        <div class="col-span-2 sm:col-span-1 flex items-center gap-2">
          <Field name="is_primary" type="checkbox" :value="true" :unchecked-value="false" class="rounded border-gray-300 text-primary focus:ring-primary" />
          <label class="text-sm text-gray-900">Ubicación Principal</label>
        </div>
        <div class="col-span-2 sm:col-span-1 flex items-center gap-2">
          <Field name="status" type="checkbox" value="Active" unchecked-value="Inactive" class="rounded border-gray-300 text-primary focus:ring-primary" />
          <label class="text-sm text-gray-900">Ubicación Activa</label>
        </div>

      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import LocationService from '@/services/inventory/LocationService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio'),
  location_type: yup.string().default('Warehouse').required('El tipo es obligatorio'),
  is_mobile: yup.boolean().default(false),
  is_inventory_location: yup.boolean().default(true),
  is_primary: yup.boolean().default(false),
  status: yup.string().default('Active'),
  address: yup.object({
    street: yup.string().nullable().default(''),
    city: yup.string().nullable().default(''),
    state: yup.string().nullable().default(''),
    zip: yup.string().nullable().default(''),
    country: yup.string().nullable().default('')
  }).default(() => ({ street: '', city: '', state: '', zip: '', country: '' }))
});

export default {
  name: 'LocationForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Almacén',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstLocationTypes: [
        { label: 'Almacén Central (Warehouse)', value: 'Warehouse' },
        { label: 'Vehículo/Furgoneta (Van)', value: 'Van' },
        { label: 'Virtual', value: 'Virtual' },
        { label: 'Sitio de Cliente (Site)', value: 'Site' }
      ]
    };
  },
  methods: {
    handleOpen(id = null) {
      this.recordId = id;
      this.strTitle = id ? 'Editar Almacén' : 'Nuevo Almacén';
      
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
      }

      if (this.recordId) {
        this.handleInitForm(this.recordId);
      } else {
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objInitialData);
        }
      }
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleInitForm(id) {
      this.bSpinner = true;
      LocationService.getById(id)
      .then((response) => {
        const objData = response.data || response;
        if (!objData.address) {
          objData.address = { street: '', city: '', state: '', zip: '', country: '' };
        }
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(objData);
        }
      })
      .catch((error) => {
        console.error('Error fetching location:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleSubmit(objValues) {
      if (this.recordId) {
        this.handleUpdate(objValues);
      } else {
        this.handleCreate(objValues);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      LocationService.create(objForm)
      .then((response) => {
        handleSuccess('Éxito', 'Almacén creado correctamente');
        this.$emit('success');
        this.handleClose();
      })
      .catch((error) => {
        handleError('Error de Validación', error);
        console.error('Error creating location:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      LocationService.update(this.recordId, objForm)
      .then((response) => {
        handleSuccess('Actualizado', 'Almacén actualizado correctamente');
        this.handleClose();
        this.$emit('success');
      })
      .catch((error) => {
        handleError('Error de Validación', error);
        console.error('Error updating location:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCancel() {
      this.handleClose();
    }
  }
};
</script>
