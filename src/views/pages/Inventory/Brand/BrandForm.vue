<template>
  <nx-modal-form ref="modalFormRef" id="brand-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Código</label>
          <Field name="code" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.code }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="50" />
          <ErrorMessage name="code" class="text-danger text-[11px] mt-1 block" />
        </div>        <div class="col-span-2">
          <label class="text-sm text-gray-900 mb-1 block">Descripción</label>
          <Field name="description" as="textarea" rows="3" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"></Field>
        </div>

        <div class="col-span-2 mt-2">

          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>

        </div>

        <div>
                    <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="status" as="input" type="checkbox" :value="'Active'" :unchecked-value="'Inactive'" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Marca Activa</span>
          </label>
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import BrandService from '@/services/inventory/BrandService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio').min(3, 'Mínimo 3 caracteres'),
  code: yup.string().nullable().default(''),
  description: yup.string().nullable().default(''),
  status: yup.string().nullable().default('Active')
});

export default {
  name: 'BrandForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Marca',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstStatusOptions: [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' }
      ]
    };
  },
  methods: {
    handleOpen(id = null) {
      this.recordId = id;
      this.strTitle = id ? 'Editar Marca' : 'Nueva Marca';
      
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
      BrandService.getById(id)
      .then((response) => {
        const data = response.data || response;
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching brand:', error);
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
      BrandService.create(objForm)
      .then((response) => {
        handleSuccess('Éxito', 'Marca creada correctamente');
        this.$emit('success');
        this.handleClose();
      })
      .catch((error) => {
        handleError('Error de Validación', error);
        console.error('Error creating brand:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      BrandService.update(this.recordId, objForm)
      .then((response) => {
        handleSuccess('Actualizado', 'Marca actualizada correctamente');
        this.handleClose();
        this.$emit('success');
      })
      .catch((error) => {
        handleError('Error de Validación', error);
        console.error('Error updating brand:', error);
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
