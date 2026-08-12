<template>
  <nx-modal-form ref="modalFormRef" id="branch-modal" :title="strTitle" size="lg" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        
        <!-- Datos Principales -->
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Datos Principales</h4>
        </div>

        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Organización <span class="text-danger">*</span></label>
          <Field name="org_id" as="select" :class="{ 'border-danger focus:border-danger': errors.org_id }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
            <option value="" disabled>Seleccione una organización</option>
            <option v-for="org in lstOrgs" :key="org.id" :value="org.id">{{ org.name }}</option>
          </Field>
          <ErrorMessage name="org_id" class="text-danger text-[11px] mt-1 block" />
        </div>

        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Código de Sucursal <span class="text-danger">*</span></label>
          <Field name="code" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.code }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 uppercase" maxlength="50" />
          <ErrorMessage name="code" class="text-danger text-[11px] mt-1 block" />
        </div>

        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre de la Sucursal <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>

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

        <!-- Separador de Dirección -->
        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Dirección</h4>
        </div>
        <nx-address-fields name-prefix="address" />

        <div class="col-span-2 mt-2">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>
        </div>

        <!-- Estado -->
        <div class="col-span-2">
          <label class="flex items-center gap-2 cursor-pointer mt-1">
            <Field name="status" type="checkbox" value="Active" unchecked-value="Inactive" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Sucursal Activa</span>
          </label>
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import BranchService from '@/services/system/BranchService';
import OrgService from '@/services/system/OrgService';
import { handleGetOrLoad } from '@/services/catalog/catalogCache';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  org_id: yup.number().required('La organización es obligatoria').typeError('La organización es obligatoria').default(''),
  name: yup.string().required('El nombre es obligatorio'),
  code: yup.string().required('El código es obligatorio'),
  phone: yup.string().nullable().default(''),
  email: yup.string().email('Correo inválido').nullable().default(''),
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
  name: 'BranchForm',
  components: {
    Field,
    ErrorMessage
  },
  data() {
    return {
      recordId: null,
      bSpinner: false,
      objInitialData: validationSchema.getDefault(),
      lstOrgs: [],
      objValidationSchema: validationSchema
    };
  },
  computed: {
    strTitle() {
      return this.recordId ? 'Editar Sucursal' : 'Nueva Sucursal';
    }
  },
  methods: {
    handleGetOrgs() {
      return handleGetOrLoad('orgs', () =>
        OrgService.getAll().then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return Array.isArray(lstData) ? lstData : [];
        })
      )
        .then((lstOrgs) => {
          this.lstOrgs = lstOrgs;
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar las organizaciones', objError));
    },
    handleOpen(id = null) {
      this.recordId = id;
      this.handleGetOrgs().then(() => {
        if (this.recordId) {
          this.handleLoadData();
          return;
        }
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objValidationSchema.getDefault());
          this.$refs.modalFormRef.handleOpen();
        }
      });
    },
    handleClose() {
      this.$refs.modalFormRef.handleClose();
    },
    handleLoadData() {
      this.bSpinner = true;
      BranchService.getById(this.recordId)
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
      BranchService.create(objForm)
      .then(() => {
        handleSuccess('Éxito', 'Sucursal creada correctamente');
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
      BranchService.update(this.recordId, objForm)
      .then(() => {
        handleSuccess('Actualizado', 'Sucursal actualizada correctamente');
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
