<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
        <router-link :to="`${all_routes.purchaseOrders}/list`" class="hover:text-primary">Órdenes de Compra</router-link>
        <i class="ph ph-caret-right text-[10px]"></i>
        <span>Detalle</span>
      </div>

      <div class="grid grid-cols-12 gap-3 mb-3">
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white border border-border-color rounded-md p-4">
            <div v-if="objOrder" class="text-start">
              <div class="flex items-start justify-between mb-3 gap-2">
                <div>
                  <h2 class="text-base font-semibold text-title mb-1">{{ strPoLabel }}</h2>
                  <span :class="handleGetStatusClass(objOrder.status)" class="text-[11px] px-2 py-0.5 rounded inline-block">
                    {{ handleGetStatusLabel(objOrder.status) }}
                  </span>
                </div>
                <div class="flex flex-wrap items-center justify-end gap-1 shrink-0">
                  <button v-if="bCanEdit" type="button" title="Editar" @click="handleEdit"
                    class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer">
                    <i class="ph ph-pencil-simple"></i>
                  </button>
                  <router-link :to="`${all_routes.purchaseOrders}/${objOrder.id}/preview`" title="Vista previa"
                    class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light">
                    <i class="ph ph-eye"></i>
                  </router-link>
                  <button v-if="bCanRegisterPayment" type="button" title="Abonar" @click="handleOpenPaymentModal"
                    class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer">
                    <i class="ph ph-currency-dollar"></i>
                  </button>
                </div>
              </div>
              <div class="text-sm text-default space-y-3 pt-3 border-t border-border-color">
                <div class="flex justify-between gap-2">
                  <span>Proveedor</span>
                  <span class="text-gray-900 font-semibold text-right">{{ strVendorName }}</span>
                </div>
                <div class="flex justify-between gap-2">
                  <span>Fecha</span>
                  <span class="text-gray-900 font-semibold">{{ objOrder.effectiveDate }}</span>
                </div>
                <div v-if="strSupplierDoc" class="flex justify-between gap-2">
                  <span>Doc. proveedor</span>
                  <span class="text-gray-900 font-semibold text-right">{{ strSupplierDoc }}</span>
                </div>
                <div class="flex justify-between gap-2">
                  <span>Moneda</span>
                  <span class="text-gray-900 font-semibold">{{ strCurrencyLabel }}</span>
                </div>
                <div class="flex justify-between gap-2 pt-2 border-t border-border-color">
                  <span>Subtotal</span>
                  <span class="text-gray-900 font-semibold">${{ handleFormatAmount(objOrder.subtotal) }}</span>
                </div>
                <div v-if="objOrder.discountAmount > 0" class="flex justify-between gap-2">
                  <span>Descuento</span>
                  <span class="text-danger font-semibold">-${{ handleFormatAmount(objOrder.discountAmount) }}</span>
                </div>
                <div v-if="objOrder.totalTaxAmount > 0" class="flex justify-between gap-2">
                  <span>Impuesto</span>
                  <span class="text-gray-900 font-semibold">${{ handleFormatAmount(objOrder.totalTaxAmount) }}</span>
                </div>
                <div class="flex justify-between gap-2">
                  <span class="font-bold text-title">Total</span>
                  <span class="text-primary font-bold">${{ handleFormatAmount(objOrder.grandTotalAmount) }}</span>
                </div>
                <div class="flex justify-between gap-2">
                  <span>Pagado</span>
                  <span class="text-success font-semibold">${{ handleFormatAmount(objOrder.paidAmount) }}</span>
                </div>
                <div class="flex justify-between gap-2">
                  <span>Saldo</span>
                  <span class="text-danger font-semibold">${{ handleFormatAmount(objOrder.balanceAmount) }}</span>
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-border-color text-sm space-y-3">
                <div>
                  <p class="text-default mb-1">Dirección de facturación</p>
                  <p class="text-gray-900 font-semibold mb-0 whitespace-pre-line">{{ strBillToAddress }}</p>
                </div>
                <div>
                  <p class="text-default mb-1">Dirección de envío</p>
                  <p class="text-gray-900 font-semibold mb-0 whitespace-pre-line">{{ strShipToAddress }}</p>
                </div>
              </div>
              <div v-if="objOrder.notes || objOrder.termsAndConditions" class="mt-4 pt-3 border-t border-border-color text-sm space-y-3">
                <div v-if="objOrder.notes">
                  <h4 class="font-semibold text-gray-900 mb-1">Notas</h4>
                  <p class="text-default whitespace-pre-wrap mb-0">{{ objOrder.notes }}</p>
                </div>
                <div v-if="objOrder.termsAndConditions">
                  <h4 class="font-semibold text-gray-900 mb-1">Términos</h4>
                  <p class="text-default whitespace-pre-wrap mb-0">{{ objOrder.termsAndConditions }}</p>
                </div>
              </div>
            </div>
            <div v-else-if="bSpinner" class="text-center p-6 text-default text-sm">Cargando...</div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white border border-border-color rounded-md">
            <nx-tabset v-model="strActiveTab">
              <nx-tab label="Líneas" value="lines">
                <PurchaseOrderLineItemList v-if="objOrder" :purchase-order-id="objOrder.id" :status="objOrder.status"
                  :currency-id="objOrder.currencyId" @refresh="handleLinesRefresh" />
              </nx-tab>
              <nx-tab label="Abonos" value="payments">
                <PurchaseOrderPaymentRelatedList v-if="objOrder" ref="paymentRelatedListRef" :purchase-order-id="objOrder.id"
                  :b-can-register="bCanRegisterPayment" @register="handleOpenPaymentModal" />
              </nx-tab>
            </nx-tabset>
          </div>
        </div>
      </div>

      <PurchaseOrderPaymentForm ref="paymentFormRef" @refresh="handlePaymentRefresh" />
      <PurchaseOrderForm ref="purchaseOrderFormRef" @success="handleFormSuccess" />
    </div>
  </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import PurchaseOrderPaymentForm from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentForm.vue';
import PurchaseOrderPaymentRelatedList from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentRelatedList.vue';
import PurchaseOrderLineItemList from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderLineItemList.vue';
import PurchaseOrderForm from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderForm.vue';
import { handleError } from '@/utils/toastUtils';
import {
  SUPPLIER_DOCUMENT_TYPE_LABEL,
  handleGetStatusLabel,
  handleGetStatusClass,
  handleCanEditOrder,
  handleCanRegisterPayment
} from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';
import { handleNormalizePurchaseOrder } from '@/views/pages/Purchase/PurchaseOrder/purchaseOrderUtils';
import { handleFormatAddressLines } from '@/views/pages/Sales/SalesOrder/salesOrderUtils';

export default {
  name: 'PurchaseOrderDetail',
  components: {
    PurchaseOrderPaymentForm,
    PurchaseOrderPaymentRelatedList,
    PurchaseOrderLineItemList,
    PurchaseOrderForm
  },
  setup() {
    return {
      all_routes,
      handleGetStatusLabel,
      handleGetStatusClass
    };
  },
  data() {
    return {
      bSpinner: false,
      strActiveTab: 'lines',
      objOrder: null
    };
  },
  computed: {
    strPoLabel() {
      if (!this.objOrder) return '...';
      return this.objOrder.purchaseNumber || `PO-${this.objOrder.id}`;
    },
    strVendorName() {
      if (!this.objOrder?.account) return 'Desconocido';
      const objAccount = this.objOrder.account;
      return objAccount.legal_name || `${objAccount.first_name || ''} ${objAccount.last_name || ''}`.trim() || 'Desconocido';
    },
    strCurrencyLabel() {
      if (!this.objOrder?.currency) return 'Desconocido';
      const objCurrency = this.objOrder.currency;
      return `${objCurrency.name} (${objCurrency.code || objCurrency.iso_code || ''})`;
    },
    strSupplierDoc() {
      const strType = this.objOrder?.supplierDocumentType;
      const strNumber = this.objOrder?.supplierDocumentNumber;
      if (!strType && !strNumber) return '';
      const strTypeLabel = SUPPLIER_DOCUMENT_TYPE_LABEL[strType] || strType || '';
      return [strTypeLabel, strNumber].filter(Boolean).join(' · ');
    },
    bCanEdit() {
      return this.objOrder && handleCanEditOrder(this.objOrder.status);
    },
    bCanRegisterPayment() {
      return this.objOrder && handleCanRegisterPayment(this.objOrder.status);
    },
    strBillToAddress() {
      return this.handleFormatPartyAddress(this.objOrder?.billToAddress);
    },
    strShipToAddress() {
      return this.handleFormatPartyAddress(this.objOrder?.shipToAddress);
    }
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    handleFormatPartyAddress(objAddress) {
      const objLines = handleFormatAddressLines(objAddress);
      const strText = [objLines.street, objLines.cityLine].filter(Boolean).join('\n');
      return strText || '—';
    },
    handleGetData() {
      const recordId = this.$route.params.recordId;
      this.bSpinner = true;

      PurchaseOrderService.getById(recordId, { include: 'account,currency' })
        .then((objResponse) => {
          this.objOrder = handleNormalizePurchaseOrder(objResponse.data || objResponse);
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los detalles de la orden de compra', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleLinesRefresh() {
      this.handleGetData();
    },
    handlePaymentRefresh() {
      this.handleGetData();
      if (this.$refs.paymentRelatedListRef) {
        this.$refs.paymentRelatedListRef.handleGetData();
      }
    },
    handleOpenPaymentModal() {
      if (!this.bCanRegisterPayment) {
        handleError('No permitido', 'No se pueden registrar abonos en el estado actual de la orden.');
        return;
      }
      if (this.$refs.paymentFormRef && this.objOrder) {
        this.$refs.paymentFormRef.handleOpen(this.objOrder);
      }
    },
    handleEdit() {
      if (!this.objOrder) return;
      this.$refs.purchaseOrderFormRef?.handleOpen(this.objOrder.id);
    },
    handleFormSuccess() {
      this.handleGetData();
    },
    handleFormatAmount(fltValue) {
      const fltAmount = parseFloat(fltValue) || 0;
      return fltAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
};
</script>
