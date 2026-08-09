<template>
  <nx-modal-form ref="modalFormRef" id="product-transfer-modal" :title="strTitle" size="md"
    :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Almacén origen <span class="text-danger">*</span></label>
          <Field name="sourceLocationId" as="nx-combobox" :options="lstLocationOptions" placeholder="Seleccionar" :disabled="bIsLocked || bSourceLocked"
            :class="{ 'border-danger focus:border-danger': errors.sourceLocationId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="sourceLocationId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Almacén destino <span class="text-danger">*</span></label>
          <Field name="destinationLocationId" as="nx-combobox" :options="lstLocationOptions" placeholder="Seleccionar" :disabled="bIsLocked"
            :class="{ 'border-danger focus:border-danger': errors.destinationLocationId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="destinationLocationId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Fecha de traspaso <span class="text-danger">*</span></label>
          <Field name="transferDate" v-slot="{ field, value }">
            <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" :disabled="bIsLocked" @update:value="field.onChange" />
          </Field>
          <ErrorMessage name="transferDate" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div v-if="recordId">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Estado</label>
          <input type="text" :value="strStatusLabel" readonly class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import ProductTransferService from '@/services/inventory/ProductTransferService';
import LocationService from '@/services/inventory/LocationService';
import { handleGetOrLoad } from '@/services/catalog/catalogCache';
import { TRANSFER_STATUS, TRANSFER_STATUS_BADGE } from '@/views/pages/Inventory/ProductTransfer/ProductTransferConstants';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  sourceLocationId: yup.number().nullable().required('El almacén origen es obligatorio'),
  destinationLocationId: yup
    .number()
    .nullable()
    .required('El almacén destino es obligatorio')
    .test('different', 'Origen y destino deben ser distintos', function (numValue) {
      return !numValue || !this.parent.sourceLocationId || Number(numValue) !== Number(this.parent.sourceLocationId);
    }),
  transferDate: yup.string().nullable().required('La fecha de traspaso es obligatoria'),
  status: yup.string().nullable().default(TRANSFER_STATUS.DRAFT)
});

export default {
  name: 'ProductTransferForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,
      bIsLocked: false,
      bSourceLocked: false,

      // 2. Números / IDs
      recordId: null,

      // 3. Cadenas
      strTitle: 'Nuevo Traspaso',
      strStatus: TRANSFER_STATUS.DRAFT,

      // 4. Objetos
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),

      // 5. Listas
      lstLocationOptions: []
    };
  },
  computed: {
    strStatusLabel() {
      return TRANSFER_STATUS_BADGE.labelMap[this.strStatus] || this.strStatus || '—';
    }
  },
  methods: {
    handleGetToday() {
      const objDate = new Date();
      const strMonth = String(objDate.getMonth() + 1).padStart(2, '0');
      const strDay = String(objDate.getDate()).padStart(2, '0');
      return `${objDate.getFullYear()}-${strMonth}-${strDay}`;
    },
    handleGetLocations() {
      return handleGetOrLoad('inventoryLocations', () =>
        LocationService.getAll({ per_page: 500, 'filter[is_inventory_location]': 1 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          const lstInventoriable = lstRaw.filter((objLocation) => {
            if (objLocation.is_inventory_location === undefined && objLocation.isInventoryLocation === undefined) {
              return true;
            }
            return Boolean(objLocation.is_inventory_location ?? objLocation.isInventoryLocation);
          });
          return lstInventoriable.map((objLocation) => ({
            label: objLocation.name,
            value: objLocation.id
          }));
        })
      )
        .then((lstOptions) => {
          this.lstLocationOptions = lstOptions;
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los almacenes', objError));
    },
    handleOpen(numId = null, objContext = null) {
      this.recordId = numId;
      this.bIsLocked = false;
      this.bSourceLocked = !numId && !!objContext?.sourceLocationId;
      this.strStatus = TRANSFER_STATUS.DRAFT;
      this.strTitle = numId ? 'Editar Traspaso' : 'Nuevo Traspaso';

      this.handleGetLocations().then(() => {
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleOpen();
        }
        if (numId) {
          this.handleInitForm(numId);
          return;
        }
        this.objInitialData = {
          ...validationSchema.getDefault(),
          transferDate: this.handleGetToday(),
          status: TRANSFER_STATUS.DRAFT,
          sourceLocationId: objContext?.sourceLocationId ? Number(objContext.sourceLocationId) : null
        };
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objInitialData);
        }
      });
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleInitForm(numId) {
      this.bSpinner = true;
      ProductTransferService.getById(numId, {
        include: 'sourceLocation,destinationLocation'
      })
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          this.strStatus = objData.status || TRANSFER_STATUS.DRAFT;
          this.bIsLocked = this.strStatus !== TRANSFER_STATUS.DRAFT && this.strStatus !== TRANSFER_STATUS.READY;

          const strTransferDate = objData.transferDate || objData.transfer_date || '';
          this.objInitialData = {
            sourceLocationId: objData.sourceLocationId ?? objData.source_location_id ?? null,
            destinationLocationId: objData.destinationLocationId ?? objData.destination_location_id ?? null,
            transferDate: strTransferDate ? String(strTransferDate).slice(0, 10) : this.handleGetToday(),
            status: this.strStatus
          };
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          }
        })
        .catch((objError) => {
          handleError('Ocurrió un problema al cargar el traspaso', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleSubmit(objValues) {
      if (this.bIsLocked) {
        handleError('No permitido', 'Solo se pueden editar traspasos en borrador o listos');
        return;
      }
      if (this.recordId) {
        this.handleUpdate(objValues);
      } else {
        this.handleCreate(objValues);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      ProductTransferService.create({
        sourceLocationId: Number(objForm.sourceLocationId),
        destinationLocationId: Number(objForm.destinationLocationId),
        transferDate: objForm.transferDate,
        status: TRANSFER_STATUS.DRAFT,
        lineItems: []
      })
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          handleSuccess('Éxito', 'Traspaso creado correctamente');
          this.$emit('success', { id: objData.id, created: true });
          this.handleClose();
        })
        .catch((objError) => handleError('Error de Validación', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      ProductTransferService.update(this.recordId, {
        sourceLocationId: Number(objForm.sourceLocationId),
        destinationLocationId: Number(objForm.destinationLocationId),
        transferDate: objForm.transferDate
      })
        .then(() => {
          handleSuccess('Actualizado', 'Traspaso actualizado correctamente');
          this.$emit('success', { id: this.recordId, created: false });
          this.handleClose();
        })
        .catch((objError) => {
          handleError('Error de Validación', objError);
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
