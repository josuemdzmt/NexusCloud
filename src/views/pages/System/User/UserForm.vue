<template>
  <nx-modal-form ref="modalFormRef" id="user-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="firstName" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.firstName }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="100" />
          <ErrorMessage name="firstName" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Apellido paterno <span class="text-danger">*</span></label>
          <Field name="lastName" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.lastName }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="100" />
          <ErrorMessage name="lastName" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Apellido materno</label>
          <Field name="secondLastName" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="100" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Correo <span class="text-danger">*</span></label>
          <Field name="email" as="input" type="email" :class="{ 'border-danger focus:border-danger': errors.email }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
          <ErrorMessage name="email" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Contraseña <span v-if="!recordId" class="text-danger">*</span></label>
          <Field name="password" as="input" type="password" :class="{ 'border-danger focus:border-danger': errors.password }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" autocomplete="new-password" />
          <ErrorMessage name="password" class="text-danger text-[11px] mt-1 block" />
          <p v-if="recordId" class="text-[11px] text-default mt-1 mb-0">Vacío = no cambiar.</p>
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Confirmar contraseña <span v-if="!recordId" class="text-danger">*</span></label>
          <Field name="password_confirmation" as="input" type="password" :class="{ 'border-danger focus:border-danger': errors.password_confirmation }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" autocomplete="new-password" />
          <ErrorMessage name="password_confirmation" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Teléfono</label>
          <Field name="phone" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="50" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Puesto</label>
          <Field name="jobTitle" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="150" />
        </div>
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Perfil <span class="text-danger">*</span></label>
          <Field name="profileId" v-slot="{ value, handleChange, handleBlur }">
            <nx-lookup :model-value="value" type="profile" placeholder="Buscar perfil..." class="w-full" :class="{ 'border-danger': errors.profileId }"
              @update:model-value="handleChange" @blur="handleBlur" />
          </Field>
          <ErrorMessage name="profileId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-2">
          <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="isActive" type="checkbox" :value="true" :unchecked-value="false" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Usuario activo</span>
          </label>
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import UserService from '@/services/system/UserService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  firstName: yup.string().default('').required('El nombre es obligatorio'),
  lastName: yup.string().default('').required('El apellido es obligatorio'),
  secondLastName: yup.string().nullable().default(''),
  email: yup.string().default('').email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().nullable().default('').test('min', 'Mínimo 8 caracteres', (strValue) => !strValue || strValue.length >= 8),
  password_confirmation: yup.string().nullable().default('').test('match', 'Las contraseñas no coinciden', function (strValue) {
    return !this.parent.password || strValue === this.parent.password;
  }),
  phone: yup.string().nullable().default(''),
  jobTitle: yup.string().nullable().default(''),
  profileId: yup.number().nullable().required('El perfil es obligatorio'),
  isActive: yup.boolean().default(true)
});

export default {
  name: 'UserForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      strTitle: 'Usuario',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault()
    };
  },
  methods: {
    handleOpen(recordId = null) {
      this.recordId = recordId;
      this.strTitle = recordId ? 'Editar Usuario' : 'Nuevo Usuario';
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
      UserService.getById(recordId)
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues({
              ...this.objValidationSchema.getDefault(),
              firstName: objData.firstName || '',
              lastName: objData.lastName || '',
              secondLastName: objData.secondLastName || '',
              email: objData.email || '',
              phone: objData.phone || '',
              jobTitle: objData.jobTitle || '',
              profileId: objData.profileId || null,
              isActive: objData.isActive !== false,
              password: '',
              password_confirmation: ''
            });
          }
        })
        .catch((objError) => {
          handleError('Error', 'No se pudo cargar el usuario', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleSubmit(objValues) {
      if (!this.recordId && !objValues.password) {
        handleError('Error de Validación', 'La contraseña es obligatoria');
        return;
      }
      if (objValues.password && objValues.password !== objValues.password_confirmation) {
        handleError('Error de Validación', 'Las contraseñas no coinciden');
        return;
      }
      const objPayload = {
        firstName: objValues.firstName,
        lastName: objValues.lastName,
        secondLastName: objValues.secondLastName || null,
        email: objValues.email,
        phone: objValues.phone || null,
        jobTitle: objValues.jobTitle || null,
        profileId: Number(objValues.profileId),
        isActive: objValues.isActive !== false,
        password: objValues.password || undefined,
        password_confirmation: objValues.password ? objValues.password_confirmation : undefined
      };
      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      UserService.create(objForm)
        .then(() => {
          handleSuccess('Éxito', 'Usuario creado correctamente');
          this.$emit('success');
          this.handleClose();
        })
        .catch((objError) => {
          handleError('Error de Validación', objError.response?.data?.message || 'Error al crear el usuario');
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      UserService.update(this.recordId, objForm)
        .then(() => {
          handleSuccess('Actualizado', 'Usuario actualizado correctamente');
          this.handleClose();
          this.$emit('success');
        })
        .catch((objError) => {
          handleError('Error de Validación', objError.response?.data?.message || 'Error al actualizar el usuario');
        })
        .finally(() => {
          this.bSpinner = false;
        });
    }
  }
};
</script>
