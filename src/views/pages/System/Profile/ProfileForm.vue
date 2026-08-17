<template>
  <nx-modal-form ref="modalFormRef" id="profile-modal" :title="strTitle" size="4xl" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors, values, setValues }">
      <div class="grid grid-cols-1 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :disabled="bLocked" :class="{ 'border-danger focus:border-danger': errors.name }"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 disabled:bg-light" maxlength="125" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
          <p v-if="bLocked" class="text-[11px] text-default mt-1 mb-0">System Administrator siempre tiene todos los permisos y no se puede modificar.</p>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-2 block">Permisos de objeto</label>
          <div class="overflow-x-auto border border-border-color rounded-md">
            <table class="w-full text-sm">
              <thead class="bg-light">
                <tr>
                  <th class="text-left font-semibold text-gray-900 py-2 px-2">Objeto</th>
                  <th v-for="objAction in lstActions" :key="objAction.name" class="text-center font-semibold text-gray-900 py-2 px-2">{{ objAction.label }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="objObject in lstObjects" :key="objObject.name" class="border-t border-border-color">
                  <td class="py-1.5 px-2 text-gray-900">{{ objObject.label }}</td>
                  <td v-for="strAction in objObject.actions" :key="objObject.name + '.' + strAction" class="text-center py-1.5 px-2">
                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" :disabled="bLocked"
                      :checked="handleIsChecked(values.permissions, objObject.name, strAction)" @change="handleToggle(values, setValues, objObject.name, strAction, $event)" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
import AuthService from '@/services/auth/AuthService';
import { getUser } from '@/services/auth/authSession';
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
      objInitialData: validationSchema.getDefault(),
      lstObjects: [],
      lstActions: []
    };
  },
  methods: {
    handlePermissionName(strObject, strAction) {
      return `${strObject}.${strAction}`;
    },
    handleIsChecked(lstPermissions, strObject, strAction) {
      const lstNames = Array.isArray(lstPermissions) ? lstPermissions : [];
      return lstNames.includes(this.handlePermissionName(strObject, strAction));
    },
    handleToggle(objValues, fnSetValues, strObject, strAction, objEvent) {
      if (this.bLocked || typeof fnSetValues !== 'function') return;
      const strName = this.handlePermissionName(strObject, strAction);
      const lstNames = [...(objValues.permissions || [])];
      if (objEvent.target.checked) {
        if (!lstNames.includes(strName)) lstNames.push(strName);
      } else {
      const numIdx = lstNames.indexOf(strName);
      if (numIdx >= 0) lstNames.splice(numIdx, 1);
      }
      fnSetValues({ ...objValues, permissions: lstNames });
    },
    handleOpen(recordId = null) {
      this.recordId = recordId;
      this.bLocked = false;
      this.strTitle = recordId ? 'Editar Perfil' : 'Nuevo Perfil';
      this.handleLoadCatalog().then(() => {
        if (recordId) {
          this.handleInitForm(recordId);
        } else if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objValidationSchema.getDefault());
        }
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleOpen();
        }
      });
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleCancel() {
      this.handleClose();
    },
    handleLoadCatalog() {
      return ProfileService.getCatalog()
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          this.lstObjects = Array.isArray(objData.objects) ? objData.objects : [];
          this.lstActions = Array.isArray(objData.actions) ? objData.actions : [];
        })
        .catch((objError) => {
          handleError('Error', 'No se pudo cargar el catálogo de permisos', objError);
        });
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
          if (Number(getUser()?.profile?.id) === Number(this.recordId)) {
            AuthService.handleRefreshSessionUser().catch(() => {});
          }
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
