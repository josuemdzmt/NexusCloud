<template>
  <nx-modal-form ref="modalFormRef" id="bank-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. BBVA" maxlength="255" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Código <span class="text-danger">*</span></label>
          <Field name="code" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.code }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 uppercase" placeholder="Ej. BBVA" maxlength="50" />
          <ErrorMessage name="code" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Descripción</label>
          <Field name="description" as="textarea" rows="3" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Descripción adicional del banco..." maxlength="255"></Field>
        </div>
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>
        </div>
        <div class="col-span-1">
          <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="status" as="input" type="checkbox" :value="'Active'" :unchecked-value="'Inactive'" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Banco Activo</span>
          </label>
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import BankService from '@/services/sales/BankService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio'),
  code: yup.string().default('').required('El código es obligatorio'),
  description: yup.string().nullable().default(''),
  status: yup.string().nullable().default('Active')
});

export default {
  name: 'BankForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Banco',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault()
    };
  },
  methods: {
    handleOpen(recordId = null) {
      this.recordId = recordId;
      if (recordId) {
        this.strTitle = 'Editar Banco';
        this.handleInitForm(recordId);
      } else {
        this.strTitle = 'Nuevo Banco';
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
    handleInitForm(recordId) {
      this.bSpinner = true;
      BankService.getById(recordId)
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(objData);
          }
        })
        .catch((objError) => {
          handleError('Error', 'No se pudo cargar el banco', objError);
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
      BankService.create(objForm)
        .then(() => {
          handleSuccess('Éxito', 'Banco creado correctamente');
          this.$emit('success');
          this.handleClose();
        })
        .catch((objError) => {
          handleError('Error de Validación', objError.response?.data?.message || 'Error al crear el banco');
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      BankService.update(this.recordId, objForm)
        .then(() => {
          handleSuccess('Actualizado', 'Banco actualizado correctamente');
          this.handleClose();
          this.$emit('success');
        })
        .catch((objError) => {
          handleError('Error de Validación', objError.response?.data?.message || 'Error al actualizar el banco');
        })
        .finally(() => {
          this.bSpinner = false;
        });
    }
  }
};
</script>
