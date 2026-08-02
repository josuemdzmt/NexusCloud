<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <div class="flex items-center gap-2">
          <router-link :to="`${all_routes.purchaseOrders}/list`" class="text-gray-900 hover:text-primary flex items-center text-sm">
            <i class="ph ph-arrow-left"></i>
          </router-link>
          <h1 class="text-gray-900 text-base font-bold mb-0">{{ strTitle }}</h1>
        </div>
        <div v-if="recordId" class="flex items-center gap-2">
          <router-link :to="`${all_routes.purchaseOrders}/${recordId}/details`" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer rounded-md shadow-sm inline-flex items-center">
            <i class="ph ph-eye mr-1"></i> Vista Previa
          </router-link>
        </div>
      </div>

      <Form :key="strFormKey" :validation-schema="objValidationSchema" :initial-values="objInitialData" @submit="handleSubmit" v-slot="{ errors, isSubmitting, values }">
        <div class="bg-white border border-border-color rounded-md p-5 shadow-sm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 pb-6 border-b border-border-color">
            <div>
              <h2 class="text-lg font-bold text-gray-900 mb-5">Proveedor</h2>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Proveedor <span class="text-danger">*</span></label>
                <Field name="accountId" as="nx-combobox" :options="lstVendorOptions" placeholder="Seleccionar Proveedor..." :class="{ 'border-danger focus:border-danger': errors.accountId }" class="w-full text-sm border-border-color focus:border-primary" />
                <ErrorMessage name="accountId" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Moneda <span class="text-danger">*</span></label>
                <Field name="currencyId" as="nx-combobox" :options="lstCurrencyOptions" placeholder="Seleccionar Moneda..." :class="{ 'border-danger focus:border-danger': errors.currencyId }" class="w-full text-sm border-border-color focus:border-primary" />
                <ErrorMessage name="currencyId" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div class="mb-0">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Tipo doc. proveedor</label>
                <Field name="supplierDocumentType" as="nx-combobox" :options="lstDocumentTypeOptions" placeholder="Opcional..." class="w-full text-sm border-border-color focus:border-primary" />
              </div>
            </div>
            <div>
              <h2 class="text-lg font-bold text-gray-900 mb-5">Detalles de la Orden</h2>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">ID Orden de Compra</label>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600 dark:bg-gray-100" :value="recordId ? `PO-${recordId}` : 'Nueva Orden'" readonly>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Núm. documento proveedor</label>
                <Field name="supplierDocumentNumber" as="input" type="text" placeholder="Ej. FAC-001" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Fecha <span class="text-danger">*</span></label>
                <Field name="effectiveDate" v-slot="{ field, value }">
                  <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" @update:value="field.onChange" />
                </Field>
                <ErrorMessage name="effectiveDate" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div class="mb-4 grid grid-cols-2 gap-3">
                <div>
                  <label class="text-sm font-semibold text-gray-900 mb-2 block">Desc. (%)</label>
                  <Field name="discountPercent" v-slot="{ field }">
                    <input v-bind="field" type="number" min="0" max="100" step="0.01" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" @input="(e) => { field.onInput(e); handleRecalcTotals(e.target.value, values.discountAmount); }">
                  </Field>
                </div>
                <div>
                  <label class="text-sm font-semibold text-gray-900 mb-2 block">Desc. monto</label>
                  <Field name="discountAmount" v-slot="{ field }">
                    <input v-bind="field" type="number" min="0" step="0.01" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" @input="(e) => { field.onInput(e); handleRecalcTotals(values.discountPercent, e.target.value); }">
                  </Field>
                </div>
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Estado <span class="text-danger">*</span></label>
                <nx-combobox
                  v-model="strStatus"
                  :options="lstStatusOptions"
                  placeholder="Seleccionar Estado..."
                  :disabled="!bCanChangeStatus"
                  class="w-full text-sm border-border-color focus:border-primary">
                </nx-combobox>
              </div>
            </div>
          </div>

          <PurchaseOrderItems
            v-model="lstItems"
            :lst-products="lstProducts"
            :lst-product-options="lstProductOptions"
            :b-can-add="lstProductOptions.length > 0"
            @change="handleRecalcTotals">
          </PurchaseOrderItems>

          <div class="grid xl:grid-cols-12 grid-cols-1 gap-8">
            <div class="xl:col-span-7 xxl:col-span-8">
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Notas</label>
                <Field name="notes" as="textarea" rows="4" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Términos y Condiciones</label>
                <Field name="termsAndConditions" as="textarea" rows="4" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
            </div>
            <div class="space-y-4 xl:col-span-5 xxl:col-span-4">
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold text-gray-900 w-1/1">Subtotal</span>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" :value="fltCalculatedSubtotal.toFixed(2)" readonly>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold text-gray-900 w-1/1">Descuento</span>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" :value="fltCalculatedDiscount.toFixed(2)" readonly>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold text-gray-900 w-1/1">Total ($)</span>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600" :value="fltCalculatedTotal.toFixed(2)" readonly>
              </div>
            </div>
          </div>

          <div class="flex justify-end items-center gap-2 mt-5 pt-5 border-t border-border-color">
            <button type="button" class="btn-sm bg-light border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-dark hover:border-dark hover:text-white cursor-pointer" :disabled="bSpinner || isSubmitting" @click="handleCancel">
              Cancelar
            </button>
            <button type="submit" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" :disabled="bSpinner || isSubmitting">
              <span v-if="bSpinner || isSubmitting" class="animate-spin inline-block size-4 border-[2px] border-current border-t-transparent text-white rounded-full" role="status"></span>
              Guardar Orden
            </button>
          </div>
        </div>
      </Form>
    </div>
  </main>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { all_routes } from '@/router/all_routes';
import VendorService from '@/services/purchasing/VendorService';
import CurrencyService from '@/services/sales/CurrencyService';
import ProductService from '@/services/inventory/ProductService';
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import PurchaseOrderItems from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderItems.vue';
import {
  ORDER_STATUS,
  SUPPLIER_DOCUMENT_TYPE_OPTIONS,
  handleCanEditOrder,
  handleGetAvailableStatusOptions,
  handleValidateStatusTransition
} from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';
import {
  handleBuildLineItem,
  handleCalculateOrderTotals,
  handleValidateOrderItems,
  handleBuildItemsPayload
} from '@/views/pages/Purchase/PurchaseOrder/purchaseOrderUtils';

const handleToNumber = (value, originalValue) => (originalValue === '' || originalValue === null ? null : Number(originalValue));

const validationSchema = yup.object({
  accountId: yup.number().nullable().transform(handleToNumber).required('El proveedor es obligatorio'),
  currencyId: yup.number().nullable().transform(handleToNumber).required('La moneda es obligatoria'),
  effectiveDate: yup.string().default('').required('La fecha es obligatoria'),
  supplierDocumentType: yup.string().nullable().default(null),
  supplierDocumentNumber: yup.string().nullable().default(''),
  discountPercent: yup.number().default(0).transform((value, originalValue) => Number(originalValue) || 0).min(0).max(100),
  discountAmount: yup.number().default(0).transform((value, originalValue) => Number(originalValue) || 0).min(0),
  notes: yup.string().nullable().default(''),
  termsAndConditions: yup.string().nullable().default('')
});

export default {
  name: 'PurchaseOrderForm',
  components: { Form, Field, ErrorMessage, PurchaseOrderItems },
  setup() {
    return { all_routes };
  },
  data() {
    return {
      bSpinner: false,
      fltCalculatedSubtotal: 0,
      fltCalculatedDiscount: 0,
      fltCalculatedTotal: 0,
      fltBalanceAmount: 0,
      strTitle: 'Nueva Orden de Compra',
      strFormKey: 'new',
      strCurrentStatus: ORDER_STATUS.DRAFT,
      strStatus: ORDER_STATUS.DRAFT,
      recordId: null,
      objValidationSchema: validationSchema,
      objInitialData: {
        ...validationSchema.getDefault(),
        effectiveDate: new Date().toISOString().substr(0, 10)
      },
      lstItems: [handleBuildLineItem(1)],
      lstVendorOptions: [],
      lstCurrencyOptions: [],
      lstProducts: [],
      lstProductOptions: [],
      lstDocumentTypeOptions: [
        { label: '— Ninguno —', value: null },
        ...SUPPLIER_DOCUMENT_TYPE_OPTIONS
      ]
    };
  },
  computed: {
    bCanChangeStatus() {
      if (!this.recordId) return true;
      return handleCanEditOrder(this.strCurrentStatus);
    },
    lstStatusOptions() {
      return handleGetAvailableStatusOptions(this.recordId ? this.strCurrentStatus : null, {
        fltBalanceAmount: this.fltBalanceAmount
      });
    }
  },
  mounted() {
    this.handleGetVendors();
    this.handleGetCurrencies();
    this.handleGetProducts();

    const id = this.$route.params.recordId;
    if (id) {
      this.recordId = id;
      this.strTitle = 'Editar Orden de Compra';
      this.handleLoadData(id);
    } else {
      this.handleApplyDefaultCurrency();
    }
  },
  methods: {
    handleApplyDefaultCurrency() {
      CurrencyService.getDefault()
        .then((objCurrency) => {
          if (!objCurrency?.id || this.recordId) return;
          this.objInitialData = {
            ...this.objInitialData,
            currencyId: Number(objCurrency.id)
          };
          this.strFormKey = `new-currency-${objCurrency.id}`;
        })
        .catch(() => {});
    },
    handleGetVendors() {
      VendorService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstVendorOptions = (Array.isArray(lstData) ? lstData : [])
            .filter((objItem) => VendorService.handleIsVendorAccount(objItem))
            .map((objVendor) => ({
              label: objVendor.legal_name || `${objVendor.first_name || ''} ${objVendor.last_name || ''}`.trim() || 'Sin Nombre',
              value: objVendor.id
            }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los proveedores', objError));
    },
    handleGetCurrencies() {
      CurrencyService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstCurrencyOptions = (Array.isArray(lstData) ? lstData : []).map((objCurrency) => ({
            label: `${objCurrency.name} (${objCurrency.code || objCurrency.iso_code || ''})`,
            value: objCurrency.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar las monedas', objError));
    },
    handleGetProducts() {
      ProductService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstProducts = Array.isArray(lstData) ? lstData : [];
          this.lstProductOptions = this.lstProducts.map((objProduct) => ({
            label: objProduct.sku ? `${objProduct.name} (${objProduct.sku})` : objProduct.name,
            value: objProduct.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los productos', objError));
    },
    handleLoadData(recordId) {
      this.bSpinner = true;
      PurchaseOrderService.getById(recordId, { include: 'items,items.product' })
        .then((objResponse) => {
          const objRawOrder = objResponse.data || objResponse;

          if (!handleCanEditOrder(objRawOrder.status)) {
            handleError('No permitido', 'Solo puedes editar órdenes en estado Borrador.');
            this.$router.push(`${all_routes.purchaseOrders}/${recordId}/details`);
            return;
          }

          this.strCurrentStatus = objRawOrder.status || ORDER_STATUS.DRAFT;
          this.strStatus = this.strCurrentStatus;
          this.fltBalanceAmount = parseFloat(objRawOrder.balanceAmount ?? objRawOrder.balance_amount) || 0;
          this.objInitialData = {
            accountId: objRawOrder.accountId ?? objRawOrder.account_id,
            currencyId: objRawOrder.currencyId ?? objRawOrder.currency_id,
            effectiveDate: objRawOrder.effectiveDate || objRawOrder.effective_date,
            supplierDocumentType: objRawOrder.supplierDocumentType || objRawOrder.supplier_document_type || null,
            supplierDocumentNumber: objRawOrder.supplierDocumentNumber || objRawOrder.supplier_document_number || '',
            discountPercent: objRawOrder.discountPercent ?? objRawOrder.discount_percent ?? 0,
            discountAmount: objRawOrder.discountAmount ?? objRawOrder.discount_amount ?? 0,
            notes: objRawOrder.notes || '',
            termsAndConditions: objRawOrder.termsAndConditions || objRawOrder.terms_and_conditions || ''
          };
          this.lstItems = (objRawOrder.items || []).map((objItem) => {
            const numProductId = objItem.productId ?? objItem.product_id ?? null;
            return {
              ...handleBuildLineItem(objItem.quantity),
              productId: numProductId,
              productName: objItem.product?.name || objItem.description || '',
              quantity: objItem.quantity,
              unitCost: objItem.unitCost ?? objItem.unit_cost,
              discountPercent: objItem.discountPercent ?? objItem.discount_percent ?? 0,
              lineTotal: objItem.lineTotal ?? objItem.line_total ?? 0
            };
          });
          if (this.lstItems.length === 0) {
            this.lstItems = [handleBuildLineItem(1)];
          }
          this.strFormKey = `edit-${recordId}`;
          this.handleRecalcTotals();
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los datos de la orden', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleRecalcTotals(fltDiscountPercent, fltDiscountAmount) {
      const objTotals = handleCalculateOrderTotals({
        lstItems: this.lstItems,
        fltDiscountPercent: fltDiscountPercent ?? this.objInitialData.discountPercent,
        fltDiscountAmount: fltDiscountAmount ?? this.objInitialData.discountAmount
      });
      this.fltCalculatedSubtotal = objTotals.fltSubtotal;
      this.fltCalculatedDiscount = objTotals.fltDiscount;
      this.fltCalculatedTotal = objTotals.fltTotal;
    },
    handleSubmit(objValues) {
      const objItemsValidation = handleValidateOrderItems(this.lstItems);
      if (!objItemsValidation.bValid) {
        handleError('Error de Validación', objItemsValidation.strMessage);
        return;
      }

      const strStatus = this.strStatus || ORDER_STATUS.DRAFT;
      if (strStatus === ORDER_STATUS.ACTIVATED && this.lstItems.length === 0) {
        handleError('Error de Validación', 'No se puede activar una orden sin líneas.');
        return;
      }

      const strFromStatus = this.recordId ? this.strCurrentStatus : null;
      const objTransition = handleValidateStatusTransition(strFromStatus, strStatus, {
        fltBalanceAmount: this.fltBalanceAmount
      });
      if (!objTransition.bValid) {
        handleError('Transición no permitida', objTransition.strMessage);
        return;
      }

      const objPayload = {
        accountId: Number(objValues.accountId),
        currencyId: Number(objValues.currencyId),
        status: strStatus,
        effectiveDate: objValues.effectiveDate,
        poNumber: null,
        supplierDocumentType: objValues.supplierDocumentType || null,
        supplierDocumentNumber: objValues.supplierDocumentNumber ? String(objValues.supplierDocumentNumber).trim() : null,
        discountPercent: Number(objValues.discountPercent) || 0,
        discountAmount: Number(objValues.discountAmount) || 0,
        notes: objValues.notes || null,
        termsAndConditions: objValues.termsAndConditions || null,
        items: handleBuildItemsPayload(this.lstItems)
      };

      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCancel() {
      this.$router.push(`${all_routes.purchaseOrders}/list`);
    },
    handleCreate(objPayload) {
      this.bSpinner = true;
      PurchaseOrderService.create(objPayload)
        .then(() => {
          handleSuccess('Orden de compra creada exitosamente');
          this.$router.push('/purchase/purchase-orders/list');
        })
        .catch((objError) => handleError('Ocurrió un problema al crear la orden de compra', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objPayload) {
      this.bSpinner = true;
      PurchaseOrderService.update(this.recordId, objPayload)
        .then(() => {
          handleSuccess('Orden de compra actualizada exitosamente');
          this.$router.push('/purchase/purchase-orders/list');
        })
        .catch((objError) => handleError('Ocurrió un problema al actualizar la orden de compra', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    }
  }
};
</script>
