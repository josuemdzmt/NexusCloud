<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <div class="flex items-center gap-2">
          <router-link :to="`${all_routes.salesOrders}/list`" class="text-gray-900 hover:text-primary flex items-center text-sm">
            <i class="ph ph-arrow-left"></i>
          </router-link>
          <h1 class="text-gray-900 text-base font-bold mb-0">{{ strTitle }}</h1>
        </div>
        <div v-if="recordId" class="flex items-center gap-2">
          <router-link :to="`${all_routes.salesOrders}/${recordId}/details`" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer rounded-md shadow-sm inline-flex items-center">
            <i class="ph ph-eye mr-1"></i> Vista Previa
          </router-link>
        </div>
      </div>

      <Form :key="strFormKey" :validation-schema="objValidationSchema" :initial-values="objInitialData" @submit="handleSubmit" v-slot="{ errors, isSubmitting, values }">
        <div class="bg-white border border-border-color rounded-md p-5 shadow-sm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 pb-6 border-b border-border-color">
            <div>
              <h2 class="text-lg font-bold text-gray-900 mb-5">Detalles del Cliente</h2>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">De <span class="text-danger">*</span></label>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600 dark:bg-gray-100" value="NexusCloud" readonly>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Cliente <span class="text-danger">*</span></label>
                <Field name="accountId" as="nx-combobox" :options="lstCustomerOptions" placeholder="Seleccionar Cliente..." :class="{ 'border-danger focus:border-danger': errors.accountId }" class="w-full text-sm border-border-color focus:border-primary" />
                <ErrorMessage name="accountId" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Lista de Precios <span class="text-danger">*</span></label>
                <Field name="pricebookId" v-slot="{ field, value }">
                  <nx-combobox
                    v-bind="field"
                    :options="lstPricebookOptions"
                    :model-value="value"
                    placeholder="Seleccionar Lista..."
                    :disabled="bPricebookLocked"
                    :class="{ 'border-danger focus:border-danger': errors.pricebookId }"
                    class="w-full text-sm border-border-color focus:border-primary"
                    @update:model-value="(val) => { field.onChange(val); handleLoadPricebookEntries(val, values.currencyId); }">
                  </nx-combobox>
                </Field>
                <ErrorMessage name="pricebookId" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div class="mb-0">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Moneda <span class="text-danger">*</span></label>
                <Field name="currencyId" v-slot="{ field, value }">
                  <nx-combobox
                    v-bind="field"
                    :options="lstCurrencyOptions"
                    :model-value="value"
                    placeholder="Seleccionar Moneda..."
                    :disabled="bPricebookLocked"
                    :class="{ 'border-danger focus:border-danger': errors.currencyId }"
                    class="w-full text-sm border-border-color focus:border-primary"
                    @update:model-value="(val) => { field.onChange(val); handleLoadPricebookEntries(values.pricebookId, val); }">
                  </nx-combobox>
                </Field>
                <ErrorMessage name="currencyId" class="text-danger text-[11px] mt-1 block" />
              </div>
            </div>
            <div>
              <h2 class="text-lg font-bold text-gray-900 mb-5">Detalles de la Orden</h2>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">ID Orden de Venta <span class="text-danger">*</span></label>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600 dark:bg-gray-100" :value="recordId ? `SO-${recordId}` : 'Auto-generado'" readonly>
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Fecha <span class="text-danger">*</span></label>
                <Field name="effectiveDate" v-slot="{ field, value }">
                  <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" @update:value="field.onChange" />
                </Field>
                <ErrorMessage name="effectiveDate" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Descuento General (%)</label>
                <Field name="discountPercent" v-slot="{ field }">
                  <input v-bind="field" type="number" min="0" max="100" step="0.01" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" @input="(e) => { field.onInput(e); handleRecalcTotals(e.target.value); }">
                </Field>
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

          <SalesOrderItems
            v-model="lstItems"
            :lst-entries="lstEntries"
            :lst-entry-options="lstEntryOptions"
            :b-can-add="!!values.pricebookId && !!values.currencyId && lstEntryOptions.length > 0"
            @change="handleRecalcTotals">
          </SalesOrderItems>

          <div class="grid xl:grid-cols-12 grid-cols-1 gap-8">
            <div class="xl:col-span-7 xxl:col-span-8">
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Notas</label>
                <Field name="notes" as="textarea" rows="4" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-2 block">Términos y Condiciones</label>
                <Field name="terms" as="textarea" rows="4" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
            </div>
            <div class="space-y-4 xl:col-span-5 xxl:col-span-4">
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold text-gray-900 w-1/1">Subtotal</span>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" :value="fltCalculatedSubtotal.toFixed(2)" readonly>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold text-gray-900 w-1/1">Impuestos ({{ numTaxRate }}%)</span>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" :value="fltCalculatedTax.toFixed(2)" readonly>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold text-gray-900 w-1/1">Descuento Global</span>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" :value="fltCalculatedDiscount > 0 ? fltCalculatedDiscount.toFixed(2) : '0.00'" readonly>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold text-gray-900 w-1/1">Cargo de Envío</span>
                <Field name="shippingCharge" v-slot="{ field }">
                  <input v-bind="field" type="number" min="0" step="0.01" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" @input="(e) => { field.onInput(e); handleRecalcTotals(undefined, e.target.value); }">
                </Field>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold text-gray-900 w-1/1">Total ($)</span>
                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600 dark:bg-gray-100" :value="fltCalculatedTotal.toFixed(2)" readonly>
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
import CustomerService from '@/services/sales/CustomerService';
import PricebookService from '@/services/sales/PricebookService';
import PricebookEntryService from '@/services/sales/PricebookEntryService';
import CurrencyService from '@/services/sales/CurrencyService';
import SalesOrderService from '@/services/sales/SalesOrderService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import SalesOrderItems from '@/views/pages/Sales/SalesOrder/SalesOrderItems.vue';
import {
  NUM_TAX_RATE,
  ORDER_STATUS,
  handleCanEditOrder,
  handleGetAvailableStatusOptions,
  handleValidateStatusTransition
} from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';
import {
  handleBuildLineItem,
  handleCalculateOrderTotals,
  handleFilterPricebookEntries,
  handleMapEntryOptions,
  handleSyncItemsWithEntries,
  handleValidateOrderItems,
  handleBuildItemsPayload
} from '@/views/pages/Sales/SalesOrder/salesOrderTotalsUtils';

const handleToNumber = (value, originalValue) => (originalValue === '' || originalValue === null ? null : Number(originalValue));

const validationSchema = yup.object({
  accountId: yup.number().nullable().transform(handleToNumber).required('El cliente es obligatorio'),
  pricebookId: yup.number().nullable().transform(handleToNumber).required('La lista de precios es obligatoria'),
  currencyId: yup.number().nullable().transform(handleToNumber).required('La moneda es obligatoria'),
  effectiveDate: yup.string().default('').required('La fecha es obligatoria'),
  discountPercent: yup.number().default(0).transform((value, originalValue) => Number(originalValue) || 0).min(0, 'No puede ser negativo').max(100, 'Máximo 100%'),
  shippingCharge: yup.number().default(0).transform((value, originalValue) => Number(originalValue) || 0).min(0, 'No puede ser negativo'),
  notes: yup.string().nullable().default(''),
  terms: yup.string().nullable().default('')
});

export default {
  name: 'SalesOrderForm',
  components: { Form, Field, ErrorMessage, SalesOrderItems },
  setup() {
    return { all_routes };
  },
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 2. Números (enteros)
      numTaxRate: NUM_TAX_RATE,

      // 3. Flotantes
      fltCalculatedSubtotal: 0,
      fltCalculatedDiscount: 0,
      fltCalculatedTax: 0,
      fltCalculatedTotal: 0,
      fltBalanceAmount: 0,

      // 4. Cadenas de Texto
      strTitle: 'Nueva Orden de Venta',
      strFormKey: 'new',
      strCurrentStatus: ORDER_STATUS.DRAFT,
      strStatus: ORDER_STATUS.DRAFT,

      // 5. Objetos
      recordId: null,
      objValidationSchema: validationSchema,
      objInitialData: {
        ...validationSchema.getDefault(),
        effectiveDate: new Date().toISOString().substr(0, 10)
      },

      // 6. Listas / Arreglos
      lstItems: [handleBuildLineItem(1)],
      lstCustomerOptions: [],
      lstPricebookOptions: [],
      lstCurrencyOptions: [],
      lstEntries: [],
      lstEntryOptions: []
    };
  },
  computed: {
    bPricebookLocked() {
      return this.lstItems.some((objItem) => objItem.pricebookEntryId);
    },
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
    this.handleGetCustomers();
    this.handleGetPricebooks();
    this.handleGetCurrencies();

    const id = this.$route.params.recordId;
    if (id) {
      this.recordId = id;
      this.strTitle = 'Editar Orden de Venta';
      this.handleLoadData(id);
    }
  },
  methods: {
    handleGetCustomers() {
      CustomerService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstCustomerOptions = (Array.isArray(lstData) ? lstData : []).map((objCustomer) => ({
            label: objCustomer.legal_name || `${objCustomer.first_name || ''} ${objCustomer.last_name || ''}`.trim() || 'Sin Nombre',
            value: objCustomer.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los clientes', objError));
    },
    handleGetPricebooks() {
      PricebookService.getAll({ per_page: 500, 'filter[is_active]': 1 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstPricebookOptions = (Array.isArray(lstData) ? lstData : []).map((objPricebook) => ({
            label: objPricebook.name,
            value: objPricebook.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar las listas de precios', objError));
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
    handleLoadData(recordId) {
      this.bSpinner = true;
      SalesOrderService.getById(recordId, { include: 'items.product' })
        .then((objResponse) => {
          const objRawOrder = objResponse.data || objResponse;

          if (!handleCanEditOrder(objRawOrder.status)) {
            handleError('No permitido', 'Solo puedes editar órdenes en estado Borrador.');
            this.$router.push(`${all_routes.salesOrders}/${recordId}/details`);
            return;
          }

          this.strCurrentStatus = objRawOrder.status || ORDER_STATUS.DRAFT;
          this.strStatus = this.strCurrentStatus;
          this.fltBalanceAmount = parseFloat(objRawOrder.balanceAmount) || 0;
          this.objInitialData = {
            accountId: objRawOrder.accountId,
            pricebookId: objRawOrder.pricebookId,
            currencyId: objRawOrder.currencyId,
            effectiveDate: objRawOrder.effectiveDate,
            discountPercent: objRawOrder.discountPercent || 0,
            shippingCharge: objRawOrder.shippingCharge || 0,
            notes: objRawOrder.notes || '',
            terms: objRawOrder.terms || ''
          };
          this.lstItems = (objRawOrder.items || []).map((objItem) => ({
            ...handleBuildLineItem(objItem.quantity),
            pricebookEntryId: objItem.pricebookEntryId,
            productId: objItem.productId,
            productName: objItem.product ? objItem.product.name : 'Desconocido',
            quantity: objItem.quantity,
            unitPrice: objItem.unitPrice,
            discountPercent: objItem.discountPercent,
            totalPrice: objItem.totalPrice
          }));
          if (this.lstItems.length === 0) {
            this.lstItems = [handleBuildLineItem(1)];
          }
          this.strFormKey = `edit-${recordId}`;
          this.handleLoadPricebookEntries(objRawOrder.pricebookId, objRawOrder.currencyId);
          this.handleRecalcTotals();
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los datos de la orden', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleLoadPricebookEntries(numPricebookId, numCurrencyId) {
      this.lstEntries = [];
      this.lstEntryOptions = [];

      if (!numPricebookId || !numCurrencyId) return;

      this.bSpinner = true;
      PricebookEntryService.getAll({
        'filter[pricebook_id]': numPricebookId,
        'filter[currency_id]': numCurrencyId,
        'filter[is_active]': 1,
        include: 'product',
        per_page: 500
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstEntries = handleFilterPricebookEntries(lstData, numPricebookId, numCurrencyId);
          this.lstEntryOptions = handleMapEntryOptions(this.lstEntries);
          this.lstItems = handleSyncItemsWithEntries(this.lstItems, this.lstEntries);
          this.handleRecalcTotals();
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los productos de la lista de precios', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleRecalcTotals(fltDiscountPercent, fltShippingCharge) {
      const objTotals = handleCalculateOrderTotals({
        lstItems: this.lstItems,
        fltDiscountPercent: fltDiscountPercent ?? this.objInitialData.discountPercent,
        fltShippingCharge: fltShippingCharge ?? this.objInitialData.shippingCharge,
        numTaxRate: this.numTaxRate
      });
      this.fltCalculatedSubtotal = objTotals.fltSubtotal;
      this.fltCalculatedDiscount = objTotals.fltDiscount;
      this.fltCalculatedTax = objTotals.fltTax;
      this.fltCalculatedTotal = objTotals.fltTotal;
    },
    handleSubmit(objValues) {
      const objItemsValidation = handleValidateOrderItems(this.lstItems);
      if (!objItemsValidation.bValid) {
        handleError('Error de Validación', objItemsValidation.strMessage);
        return;
      }

      const strStatus = this.strStatus || ORDER_STATUS.DRAFT;
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
        pricebookId: Number(objValues.pricebookId),
        currencyId: Number(objValues.currencyId),
        effectiveDate: objValues.effectiveDate,
        status: strStatus,
        discountPercent: Number(objValues.discountPercent) || 0,
        shippingCharge: Number(objValues.shippingCharge) || 0,
        taxAmount: this.fltCalculatedTax,
        subtotal: this.fltCalculatedSubtotal,
        discountAmount: this.fltCalculatedDiscount,
        totalAmount: this.fltCalculatedTotal,
        notes: objValues.notes || '',
        terms: objValues.terms || '',
        items: handleBuildItemsPayload(this.lstItems)
      };

      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCancel() {
      this.$router.push(`${all_routes.salesOrders}/list`);
    },
    handleCreate(objPayload) {
      this.bSpinner = true;
      SalesOrderService.create(objPayload)
        .then(() => {
          handleSuccess('Orden de venta creada exitosamente');
          this.$router.push('/sales/sales-orders/list');
        })
        .catch((objError) => handleError('Ocurrió un problema al crear la orden de venta', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objPayload) {
      this.bSpinner = true;
      SalesOrderService.update(this.recordId, objPayload)
        .then(() => {
          handleSuccess('Orden de venta actualizada exitosamente');
          this.$router.push('/sales/sales-orders/list');
        })
        .catch((objError) => handleError('Ocurrió un problema al actualizar la orden de venta', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    }
  }
};
</script>
