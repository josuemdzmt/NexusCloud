<template>
  <nx-modal-form ref="modalFormRef" id="product-item-transaction-modal" :title="strTitle" size="xl" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="md:col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Producto <span class="text-danger">*</span></label>
          <Field name="productId" as="nx-combobox" :options="lstProductOptions" placeholder="Seleccionar producto" :disabled="bLocked || bProductLocked" :class="{ 'border-danger focus:border-danger': errors.productId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="productId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Almacén <span class="text-danger">*</span></label>
          <Field name="locationId" as="nx-combobox" :options="lstLocationOptions" placeholder="Seleccionar" :disabled="bLocked || bLocationLocked" :class="{ 'border-danger focus:border-danger': errors.locationId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="locationId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Motivo <span class="text-danger">*</span></label>
          <Field name="reason" as="nx-combobox" :options="lstReasonOptions" placeholder="Seleccionar" :class="{ 'border-danger focus:border-danger': errors.reason }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="reason" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Diferencia (+/−) <span class="text-danger">*</span></label>
          <Field name="quantity" as="input" type="number" step="1" :class="{ 'border-danger focus:border-danger': errors.quantity }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. +10 o -5" />
          <ErrorMessage name="quantity" class="text-danger text-[11px] mt-1 block" />
          <p class="text-[11px] text-default mt-1 mb-0">Positivo suma; negativo resta. Existencia actual: {{ numQuantityOnHand }}</p>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Fecha de ajuste <span class="text-danger">*</span></label>
          <Field name="transactionDate" v-slot="{ field, value }">
            <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" @update:value="field.onChange" />
          </Field>
          <ErrorMessage name="transactionDate" class="text-danger text-[11px] mt-1 block" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import ProductItemService from '@/services/inventory/ProductItemService';
import ProductItemTransactionService from '@/services/inventory/ProductItemTransactionService';
import ProductService from '@/services/inventory/ProductService';
import LocationService from '@/services/inventory/LocationService';
import { handleGetOrLoad, handleInvalidateCatalog } from '@/services/catalog/catalogCache';
import { TRANSACTION_TYPE, ADJUSTMENT_REASON_OPTIONS, handleResolveTransactionType } from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionConstants';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  productId: yup.number().nullable().required('El producto es obligatorio'),
  locationId: yup.number().nullable().required('El almacén es obligatorio'),
  reason: yup.string().nullable().required('El motivo es obligatorio'),
  quantity: yup
    .number()
    .transform((numValue, strOriginal) => (strOriginal === '' || strOriginal === null || strOriginal === undefined ? undefined : numValue))
    .nullable()
    .required('La diferencia es obligatoria')
    .test('not-zero', 'La diferencia no puede ser 0', (numValue) => numValue !== 0 && numValue != null),
  transactionDate: yup.string().nullable().required('La fecha de ajuste es obligatoria')
});

export default {
  name: 'ProductItemTransactionForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,
      bLocked: false,
      bLocationLocked: false,
      bProductLocked: false,

      // 2. Números
      numProductItemId: null,
      numQuantityOnHand: 0,

      // 3. Cadenas
      strTitle: 'Ajuste de Stock',
      strTransactionType: TRANSACTION_TYPE.ADJUSTED,

      // 4. Objetos
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),

      // 5. Listas
      lstProductOptions: [],
      lstLocationOptions: [],
      lstProductItems: [],
      lstReasonOptions: ADJUSTMENT_REASON_OPTIONS
    };
  },
  methods: {
    handleGetToday() {
      const objDate = new Date();
      const strMonth = String(objDate.getMonth() + 1).padStart(2, '0');
      const strDay = String(objDate.getDate()).padStart(2, '0');
      return `${objDate.getFullYear()}-${strMonth}-${strDay}`;
    },
    handleGetProducts() {
      return handleGetOrLoad('products', () =>
        ProductService.getAll({ per_page: 500 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return (Array.isArray(lstData) ? lstData : []).map((objProduct) => ({
            label: objProduct.name,
            value: objProduct.id
          }));
        })
      )
      .then((lstOptions) => {
        this.lstProductOptions = lstOptions;
      })
      .catch((objError) => {
        handleError('Error', 'No se pudieron cargar los productos', objError);
      })
      .finally(() => {
        this.bSpinner = false;
      });
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
      .catch((objError) => {
        handleError('Error', 'No se pudieron cargar los almacenes', objError);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleGetProductItems() {
      return handleGetOrLoad('productItems', () =>
        ProductItemService.getAll({ include: 'product,location', per_page: 500 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return Array.isArray(lstData) ? lstData : [];
        })
      )
        .then((lstItems) => {
          this.lstProductItems = lstItems;
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar las existencias', objError));
    },
    /**
     * @param {Object|null} objProductItem - Fila de existencia o contexto { locationId } / { productId }.
     * @param {String} strTransactionType - Tipo de movimiento (default Adjusted)
     */
    handleOpen(objProductItem = null, strTransactionType = TRANSACTION_TYPE.ADJUSTED) {
      this.strTransactionType = strTransactionType || TRANSACTION_TYPE.ADJUSTED;
      this.strTitle = 'Ajuste de Stock';
      const strToday = this.handleGetToday();
      this.objInitialData = {
        ...validationSchema.getDefault(),
        reason: TRANSACTION_TYPE.REPLENISHED,
        transactionDate: strToday
      };

      if (objProductItem?.id) {
        this.bLocked = true;
        this.bLocationLocked = false;
        this.bProductLocked = false;
        this.numProductItemId = objProductItem.id;
        this.numQuantityOnHand = objProductItem.quantityOnHand ?? objProductItem.quantity_on_hand ?? 0;
        this.objInitialData = {
          productId: objProductItem.productId ?? objProductItem.product_id ?? objProductItem.product?.id ?? null,
          locationId: objProductItem.locationId ?? objProductItem.location_id ?? objProductItem.location?.id ?? null,
          reason: TRANSACTION_TYPE.REPLENISHED,
          quantity: null,
          transactionDate: strToday
        };
      } else {
        this.bLocked = false;
        this.bLocationLocked = objProductItem?.locationId != null || objProductItem?.location_id != null;
        this.bProductLocked = objProductItem?.productId != null || objProductItem?.product_id != null;
        this.numProductItemId = null;
        this.numQuantityOnHand = 0;
        if (this.bLocationLocked) {
          this.objInitialData.locationId = Number(objProductItem.locationId ?? objProductItem.location_id);
        }
        if (this.bProductLocked) {
          this.objInitialData.productId = Number(objProductItem.productId ?? objProductItem.product_id);
        }
      }

      Promise.all([this.handleGetProducts(), this.handleGetLocations(), this.handleGetProductItems()]).then(() => {
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          this.$refs.modalFormRef.handleOpen();
        }
      });
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleResolveProductItemId(objForm) {
      if (this.numProductItemId) return Number(this.numProductItemId);

      const objMatch = this.lstProductItems.find((objItem) => {
        const numProductId = objItem.productId ?? objItem.product_id ?? objItem.product?.id;
        const numLocationId = objItem.locationId ?? objItem.location_id ?? objItem.location?.id;
        return Number(numProductId) === Number(objForm.productId) && Number(numLocationId) === Number(objForm.locationId);
      });

      return objMatch?.id ? Number(objMatch.id) : null;
    },
    handleSubmit(objValues) {
      const numProductItemId = this.handleResolveProductItemId(objValues);
      if (!numProductItemId) {
        handleError('Validación', 'No hay existencia para ese producto y almacén. Créala primero en Inventario.');
        return;
      }

      const strReason = objValues.reason || TRANSACTION_TYPE.REPLENISHED;
      const strTransactionType = handleResolveTransactionType(strReason);

      this.bSpinner = true;
      ProductItemTransactionService.create({
        productItemId: numProductItemId,
        transactionType: strTransactionType,
        quantity: Number(objValues.quantity),
        reason: strReason,
        transactionDate: objValues.transactionDate
      })
        .then(() => {
          handleSuccess('Éxito', 'Ajuste de stock registrado correctamente');
          this.$emit('success');
          handleInvalidateCatalog('productItems');
          this.handleGetProductItems();
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
