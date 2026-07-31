<template>
  <nx-modal-form ref="modalFormRef" id="pricebook-modal" :title="strTitle" size="md" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 gap-4">
        <!-- Nombre -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre <span class="text-danger">*</span></label>
          <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. Lista Mayoristas" maxlength="150" />
          <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Descripción -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Descripción</label>
          <Field name="description" as="textarea" rows="3" :class="{ 'border-danger focus:border-danger': errors.description }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Descripción breve..." />
          <ErrorMessage name="description" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Estado -->
        <div class="mt-2">
          <label class="flex items-center gap-2 cursor-pointer">
            <Field name="isActive" type="checkbox" :value="true" :unchecked-value="false" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Lista Activa</span>
          </label>
          <ErrorMessage name="isActive" class="text-danger text-[11px] mt-1 block" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import PricebookService from '@/services/sales/PricebookService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().required('El nombre es obligatorio').max(150, 'Máximo 150 caracteres'),
  description: yup.string().nullable(),
  isActive: yup.boolean().default(true)
});

export default {
  name: 'PricebookForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['refresh'],
  data() {
    return {
      numRecordId: null,
      strTitle: 'Nueva Lista de Precios',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault()
    };
  },
  methods: {
    handleOpen(id = null) {
      this.numRecordId = id;
      this.strTitle = id ? 'Editar Lista de Precios' : 'Nueva Lista de Precios';
      
      if (id) {
        this.handleLoadData(id);
      } else {
        this.objInitialData = validationSchema.getDefault();
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          this.$refs.modalFormRef.handleOpen();
        }
      }
    },
    handleLoadData(id) {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues({});
        this.$refs.modalFormRef.handleOpen();
      }
      PricebookService.getById(id)
        .then((data) => {
          const formData = data.data || data;
          formData.isActive = Boolean(formData.isActive);
          this.objInitialData = formData;
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(formData);
          }
        })
        .catch((error) => {
          handleError('Ocurrió un problema al cargar los datos', error);
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleClose();
          }
        });
    },
    handleSubmit(values) {
      if (this.numRecordId) {
        this.handleUpdate(values);
      } else {
        this.handleCreate(values);
      }
    },
    handleCreate(objForm) {
      PricebookService.create(objForm)
        .then(() => {
          handleSuccess('Lista de precios creada exitosamente');
          this.$emit('refresh');
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleClose();
          }
        })
        .catch((error) => {
          handleError('Ocurrió un problema al crear la lista de precios', error);
        });
    },
    handleUpdate(objForm) {
      PricebookService.update(this.numRecordId, objForm)
        .then(() => {
          handleSuccess('Lista de precios actualizada exitosamente');
          this.$emit('refresh');
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleClose();
          }
        })
        .catch((error) => {
          handleError('Ocurrió un problema al actualizar la lista de precios', error);
        });
    },
    handleCancel() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    }
  }
};
</script>
