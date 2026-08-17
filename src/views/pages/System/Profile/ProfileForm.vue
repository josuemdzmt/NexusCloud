<template>
  <nx-modal-form ref="modalFormRef" id="profile-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :disabled="bLocked" :class="{ 'border-danger focus:border-danger': errors.name }"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 disabled:bg-light" maxlength="125" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
          <p v-if="bLocked" class="text-[11px] text-default mt-1 mb-0">System Administrator siempre tiene todos los permisos y no se puede modificar.</p>
        </div>
      </div>
    </template>
    <template #footer="{ isSubmitting }">
      <nx-modal-footer>
        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" @click="handleCancel">{{ bLocked ? 'Cerrar' : 'Cancelar' }}</button>
        <button v-if="!bLocked" type="submit" :disabled="isSubmitting" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer disabled:opacity-50">
          <span v-if="isSubmitting" class="animate-spin inline-block size-4 border-[2px] border-current border-t-transparent text-white rounded-full mr-2" role="status"></span>
          Guardar
        </button>
      </nx-modal-footer>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import ProfileService from '@/services/system/ProfileService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio'),
  permissions: yup.array().of(yup.string()).default([])
});

export default {
  name: 'ProfileForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      bLocked: false,
      recordId: null,
      strTitle: 'Perfil',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault()
    };
  },
  methods: {
    handleOpen(recordId = null) {
      this.recordId = recordId;
      this.bLocked = false;
      this.strTitle = recordId ? 'Editar Perfil' : 'Nuevo Perfil';
      if (recordId) {
        this.handleInitForm(recordId);
      } else if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues(this.objValidationSchema.getDefault());
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
      ProfileService.getById(recordId)
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          this.bLocked = objData.isLocked === true;
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues({
              name: objData.name || '',
              permissions: Array.isArray(objData.permissions) ? objData.permissions : []
            });
          }
        })
        .catch((objError) => {
          handleError('Error', 'No se pudo cargar el perfil', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleSubmit(objValues) {
      if (this.bLocked) {
        this.handleClose();
        return;
      }
      const objPayload = {
        name: objValues.name,
        permissions: Array.isArray(objValues.permissions) ? objValues.permissions : []
      };
      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      ProfileService.create(objForm)
        .then(() => {
          handleSuccess('Éxito', 'Perfil creado correctamente');
          this.$emit('success');
          this.handleClose();
        })
        .catch((objError) => {
          handleError('Error de Validación', objError.response?.data?.message || objError.message || 'Error al crear el perfil');
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      ProfileService.update(this.recordId, objForm)
        .then(() => {
          handleSuccess('Actualizado', 'Perfil actualizado correctamente');
          this.handleClose();
          this.$emit('success');
        })
        .catch((objError) => {
          handleError('Error de Validación', objError.response?.data?.message || objError.message || 'Error al actualizar el perfil');
        })
        .finally(() => {
          this.bSpinner = false;
        });
    }
  }
};
</script>
