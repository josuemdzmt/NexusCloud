<template>
  <nx-modal-form ref="modalFormRef" id="profile-permission-modal" :title="strTitle" size="xl" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ values, setValues }">
      <div v-for="(objSection, numIdx) in lstSections" :key="objSection.label" :class="numIdx < lstSections.length - 1 ? 'mb-4' : ''">
        <h2 class="text-base font-bold text-title mb-3">{{ objSection.label }}</h2>
        <div class="overflow-x-auto border border-border-color border-b-0">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-sm text-default border-b border-border-color">
                <th class="text-left py-2 px-2 font-semibold text-gray-900">Módulos</th>
                <th v-for="objAction in lstActionColumns" :key="objAction.name" class="text-left py-2 px-2 font-semibold text-gray-900">{{ objAction.label }}</th>
                <th class="text-left py-2 px-2 font-semibold text-gray-900">Todos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="objObject in objSection.objects" :key="objObject.name" class="border-b border-border-color">
                <td class="py-2.5 px-2 text-sm text-default">{{ objObject.label }}</td>
                <td v-for="objAction in lstActionColumns" :key="objObject.name + '.' + objAction.name" class="py-2.5 px-2">
                  <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0"
                    :disabled="!bCanSave || !objObject.actions.includes(objAction.name)" :checked="handleIsChecked(values.permissions, objObject.name, objAction.name)"
                    @change="handleToggle(values, setValues, objObject.name, objAction.name, $event)" />
                </td>
                <td class="py-2.5 px-2">
                  <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0"
                    :disabled="!bCanSave" :checked="handleIsAllowAll(values.permissions, objObject)" @change="handleToggleAllowAll(values, setValues, objObject, $event)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p v-if="bLocked" class="text-[11px] text-default mt-1 mb-0">System Administrator siempre tiene todos los permisos y no se puede modificar.</p>
    </template>
    <template #footer="{ isSubmitting }">
      <nx-modal-footer>
        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" @click="handleCancel">{{ bCanSave ? 'Cancelar' : 'Cerrar' }}</button>
        <button v-if="bCanSave" type="submit" :disabled="isSubmitting" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer disabled:opacity-50">
          <span v-if="isSubmitting" class="animate-spin inline-block size-4 border-[2px] border-current border-t-transparent text-white rounded-full mr-2" role="status"></span>
          Guardar
        </button>
      </nx-modal-footer>
    </template>
  </nx-modal-form>
</template>

<script>
import * as yup from 'yup';
import ProfileService from '@/services/system/ProfileService';
import AuthService from '@/services/auth/AuthService';
import { getUser, handleHasPermission, objSessionUser } from '@/services/auth/authSession';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { handleGroupPermissionSections, handlePermissionActionColumns } from './ProfileConstants';

const validationSchema = yup.object({
  name: yup.string().default(''),
  permissions: yup.array().of(yup.string()).default([])
});

export default {
  name: 'ProfilePermissionForm',
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      bLocked: false,
      recordId: null,
      strTitle: 'Permisos',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstObjects: [],
      lstActions: []
    };
  },
  computed: {
    lstActionColumns() {
      return handlePermissionActionColumns(this.lstActions);
    },
    lstSections() {
      return handleGroupPermissionSections(this.lstObjects);
    },
    bCanSave() {
      void objSessionUser.value;
      return !this.bLocked && handleHasPermission('profile.update');
    }
  },
  methods: {
    handlePermissionName(strObject, strAction) {
      return `${strObject}.${strAction}`;
    },
    handleIsChecked(lstPermissions, strObject, strAction) {
      const lstNames = Array.isArray(lstPermissions) ? lstPermissions : [];
      return lstNames.includes(this.handlePermissionName(strObject, strAction));
    },
    handleIsAllowAll(lstPermissions, objObject) {
      const lstActions = Array.isArray(objObject.actions) ? objObject.actions : [];
      if (!lstActions.length) return false;
      return lstActions.every((strAction) => this.handleIsChecked(lstPermissions, objObject.name, strAction));
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
    handleToggleAllowAll(objValues, fnSetValues, objObject, objEvent) {
      if (this.bLocked || typeof fnSetValues !== 'function') return;
      const lstActions = Array.isArray(objObject.actions) ? objObject.actions : [];
      let lstNames = [...(objValues.permissions || [])];
      lstActions.forEach((strAction) => {
        const strName = this.handlePermissionName(objObject.name, strAction);
        const numIdx = lstNames.indexOf(strName);
        if (objEvent.target.checked) {
          if (numIdx < 0) lstNames.push(strName);
        } else if (numIdx >= 0) {
          lstNames.splice(numIdx, 1);
        }
      });
      fnSetValues({ ...objValues, permissions: lstNames });
    },
    handleOpen(recordId) {
      if (!recordId) return;
      this.recordId = recordId;
      this.bLocked = false;
      this.strTitle = 'Permisos';
      this.handleLoadCatalog().then(() => {
        this.handleInitForm(recordId);
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
          this.strTitle = objData.name ? `Permisos · ${objData.name}` : 'Permisos';
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
      if (!this.bCanSave) {
        this.handleClose();
        return;
      }
      this.bSpinner = true;
      ProfileService.update(this.recordId, {
        name: objValues.name,
        permissions: Array.isArray(objValues.permissions) ? objValues.permissions : []
      })
        .then(() => {
          handleSuccess('Actualizado', 'Permisos actualizados correctamente');
          if (Number(getUser()?.profile?.id) === Number(this.recordId)) {
            AuthService.handleRefreshSessionUser().catch(() => {});
          }
          this.handleClose();
          this.$emit('success');
        })
        .catch((objError) => {
          handleError('Error de Validación', objError.response?.data?.message || objError.message || 'Error al actualizar los permisos');
        })
        .finally(() => {
          this.bSpinner = false;
        });
    }
  }
};
</script>
