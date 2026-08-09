<template>
  <nx-modal-form ref="modalFormRef" id="auth-change-password-modal" :title="strTitle" size="md" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <p class="text-sm text-default mb-3">Al guardar se cerrará tu sesión y deberás iniciar sesión de nuevo.</p>
      <div class="grid grid-cols-1 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Contraseña actual <span class="text-danger">*</span></label>
          <Field name="current_password" as="input" type="password" autocomplete="current-password" :class="{ 'border-danger focus:border-danger': errors.current_password }" 
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="************" />
          <ErrorMessage name="current_password" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nueva contraseña <span class="text-danger">*</span></label>
          <Field name="password" as="input" type="password" autocomplete="new-password" :class="{ 'border-danger focus:border-danger': errors.password }" 
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="************" />
          <ErrorMessage name="password" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Confirmar contraseña <span class="text-danger">*</span></label>
          <Field name="password_confirmation" as="input" type="password" autocomplete="new-password" :class="{ 'border-danger focus:border-danger': errors.password_confirmation }" 
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="************" />
          <ErrorMessage name="password_confirmation" class="text-danger text-[11px] mt-1 block" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import AuthService from '@/services/auth/AuthService';
import { all_routes } from '@/router/all_routes';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  current_password: yup.string().default('').required('La contraseña actual es obligatoria'),
  password: yup.string().default('').required('La nueva contraseña es obligatoria').min(8, 'Mínimo 8 caracteres'),
  password_confirmation: yup
    .string()
    .default('')
    .required('Confirma la contraseña')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
});

export default {
  name: 'AuthChangePasswordForm',
  components: {
    Field,
    ErrorMessage
  },
  data() {
    return {
      strTitle: 'Cambiar contraseña',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault()
    };
  },
  methods: {
    handleOpen() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues(this.objValidationSchema.getDefault());
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
    handleSubmit(objValues) {
      AuthService.updatePassword({
        current_password: objValues.current_password,
        password: objValues.password,
        password_confirmation: objValues.password_confirmation
      })
        .then(async () => {
          handleSuccess('Éxito', 'Contraseña actualizada. Inicia sesión de nuevo.');
          this.handleClose();
          await AuthService.logout();
          this.$router.push(all_routes.login);
        })
        .catch((objError) => {
          handleError('No se pudo actualizar la contraseña', objError);
        });
    }
  }
};
</script>
