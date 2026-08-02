<template>
  <nx-modal-form ref="modalFormRef" id="product-item-modal" :title="strTitle" size="md" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Producto <span class="text-danger">*</span></label>
          <Field name="productId" as="nx-combobox" :options="lstProductOptions" placeholder="Seleccionar" :disabled="bProductLocked || !!numRecordId" :class="{ 'border-danger focus:border-danger': errors.productId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="productId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Almacén <span class="text-danger">*</span></label>
          <Field name="locationId" as="nx-combobox" :options="lstLocationOptions" placeholder="Seleccionar" :disabled="bLocationLocked || !!numRecordId" :class="{ 'border-danger focus:border-danger': errors.locationId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="locationId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div v-if="!numRecordId">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Cantidad <span class="text-danger">*</span></label>
          <Field name="quantityOnHand" as="input" type="number" step="1" :class="{ 'border-danger focus:border-danger': errors.quantityOnHand }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="quantityOnHand" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div v-else>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Cantidad</label>
          <input type="number" :value="numQuantityOnHand" readonly class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Stock mínimo</label>
          <Field name="minimumStockLevel" as="input" type="number" step="1" :class="{ 'border-danger focus:border-danger': errors.minimumStockLevel }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="minimumStockLevel" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Stock máximo</label>
          <Field name="maximumStockLevel" as="input" type="number" step="1" :class="{ 'border-danger focus:border-danger': errors.maximumStockLevel }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="maximumStockLevel" class="text-danger text-[11px] mt-1 block" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import ProductItemService from '@/services/inventory/ProductItemService';
import ProductService from '@/services/inventory/ProductService';
import LocationService from '@/services/inventory/LocationService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const createSchema = yup.object({
  productId: yup.number().nullable().required('El producto es obligatorio'),
  locationId: yup.number().nullable().required('El almacén es obligatorio'),
  quantityOnHand: yup.number().required('La cantidad es obligatoria').min(0, 'No puede ser negativa'),
  minimumStockLevel: yup.number().nullable().default(null).min(0, 'No puede ser negativo'),
  maximumStockLevel: yup.number().nullable().default(null).min(0, 'No puede ser negativo')
});

const updateSchema = yup.object({
  productId: yup.number().nullable(),
  locationId: yup.number().nullable(),
  minimumStockLevel: yup.number().nullable().default(null).min(0, 'No puede ser negativo'),
  maximumStockLevel: yup.number().nullable().default(null).min(0, 'No puede ser negativo')
});

export default {
  name: 'ProductItemForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,
      bLocationLocked: false,
      bProductLocked: false,

      // 2. Números
      numRecordId: null,
      numQuantityOnHand: 0,

      // 3. Cadenas
      strTitle: 'Agregar Inventario',

      // 4. Objetos
      objValidationSchema: createSchema,
      objInitialData: createSchema.getDefault(),

      // 5. Listas
      lstProductOptions: [],
      lstLocationOptions: []
    };
  },
  mounted() {
    this.handleGetProducts();
    this.handleGetLocations();
  },
  methods: {
    handleGetProducts() {
      ProductService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstProductOptions = (Array.isArray(lstData) ? lstData : []).map((objProduct) => ({
            label: objProduct.name,
            value: objProduct.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los productos', objError));
    },
    handleGetLocations() {
      LocationService.getAll({ per_page: 500, 'filter[is_inventory_location]': 1 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          const lstInventoriable = lstRaw.filter((objLocation) => {
            if (objLocation.is_inventory_location === undefined && objLocation.isInventoryLocation === undefined) {
              return true;
            }
            return Boolean(objLocation.is_inventory_location ?? objLocation.isInventoryLocation);
          });
          this.lstLocationOptions = lstInventoriable.map((objLocation) => ({
            label: objLocation.name,
            value: objLocation.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los almacenes', objError));
    },
    handleOpen(recordId = null, objContext = null) {
      this.numRecordId = recordId;
      this.strTitle = recordId ? 'Editar Inventario' : 'Agregar Inventario';
      this.objValidationSchema = recordId ? updateSchema : createSchema;
      this.bLocationLocked = !recordId && !!objContext?.locationId;
      this.bProductLocked = !recordId && !!objContext?.productId;

      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
      }

      if (recordId) {
        this.handleInitForm(recordId);
        return;
      }

      this.numQuantityOnHand = 0;
      this.objInitialData = {
        ...createSchema.getDefault(),
        locationId: objContext?.locationId ? Number(objContext.locationId) : null,
        productId: objContext?.productId ? Number(objContext.productId) : null
      };
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues(this.objInitialData);
      }
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleInitForm(recordId) {
      this.bSpinner = true;
      ProductItemService.getById(recordId, { include: 'product,location' })
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          this.numQuantityOnHand = objData.quantityOnHand ?? objData.quantity_on_hand ?? 0;
          this.objInitialData = {
            productId: objData.productId ?? objData.product_id ?? null,
            locationId: objData.locationId ?? objData.location_id ?? null,
            minimumStockLevel: objData.minimumStockLevel ?? objData.minimum_stock_level ?? null,
            maximumStockLevel: objData.maximumStockLevel ?? objData.maximum_stock_level ?? null
          };
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          }
        })
        .catch((objError) => handleError('Ocurrió un problema al cargar el registro', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleSubmit(objValues) {
      if (this.numRecordId) {
        this.handleUpdate(objValues);
      } else {
        this.handleCreate(objValues);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      const objPayload = {
        productId: Number(objForm.productId),
        locationId: Number(objForm.locationId),
        quantityOnHand: Number(objForm.quantityOnHand) || 0,
        minimumStockLevel: objForm.minimumStockLevel === null || objForm.minimumStockLevel === '' ? null : Number(objForm.minimumStockLevel),
        maximumStockLevel: objForm.maximumStockLevel === null || objForm.maximumStockLevel === '' ? null : Number(objForm.maximumStockLevel)
      };
      ProductItemService.create(objPayload)
        .then(() => {
          handleSuccess('Éxito', 'Inventario agregado correctamente');
          this.$emit('success');
          this.handleClose();
        })
        .catch((objError) => handleError('Error de Validación', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      const objPayload = {
        minimumStockLevel: objForm.minimumStockLevel === null || objForm.minimumStockLevel === '' ? null : Number(objForm.minimumStockLevel),
        maximumStockLevel: objForm.maximumStockLevel === null || objForm.maximumStockLevel === '' ? null : Number(objForm.maximumStockLevel)
      };
      ProductItemService.update(this.numRecordId, objPayload)
        .then(() => {
          handleSuccess('Actualizado', 'Inventario actualizado correctamente');
          this.$emit('success');
          this.handleClose();
        })
        .catch((objError) => handleError('Error de Validación', objError))
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
