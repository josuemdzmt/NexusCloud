<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <div>
          <div class="flex items-center gap-2 text-sm text-default mb-1">
            <router-link :to="`${all_routes.purchaseOrders}/list`" class="hover:text-primary">Órdenes de Compra</router-link>
            <i class="ph ph-caret-right text-[10px]"></i>
            <span>{{ strPoLabel }}</span>
          </div>
          <h1 class="text-gray-900 text-xl font-bold mb-0">Vista Previa de Orden</h1>
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <button v-if="bCanCancel" type="button" class="btn-sm bg-white border border-secondary text-secondary hover:bg-secondary hover:text-white cursor-pointer inline-flex items-center gap-1" @click="handleCancelOrder">
            <i class="ph ph-x"></i> Cancelar Orden
          </button>
          <button v-if="bCanRegisterPayment" type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer inline-flex items-center gap-1" @click="handleOpenPaymentModal">
            <i class="ph ph-currency-dollar"></i> Registrar Abono
          </button>
          <router-link v-if="bCanEdit" :to="`${all_routes.purchaseOrders}/${objOrder.id}/edit`" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer inline-flex items-center gap-1">
            <i class="ph ph-pencil"></i> Editar
          </router-link>
        </div>
      </div>

      <div class="bg-white border border-border-color rounded-md">
        <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button v-for="(objTab, numIndex) in lstTabs" :key="objTab.id" type="button" :id="`${objTab.id}-tab`" role="tab"
            :aria-selected="numIndex === 0" :aria-controls="`${objTab.id}-pane`" :data-hs-tab="`#${objTab.id}-pane`"
            class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden"
            :class="{ active: numIndex === 0 }">
            {{ objTab.label }}
          </button>
        </nav>

        <div class="p-4 sm:p-5">
          <div id="detail-pane" role="tabpanel" aria-labelledby="detail-tab">
            <div v-if="objOrder" class="w-full">
              <div class="flex justify-between items-start mb-8 flex-wrap gap-5 lg:flex-nowrap">
                <div>
                  <div class="invoice-logo block dark:hidden">
                    <img src="@/assets/img/logo.svg" class="h-10 mb-3" alt="logo">
                  </div>
                  <div class="invoice-logo-white hidden dark:block">
                    <img src="@/assets/img/logo-white.svg" class="h-10 mb-3" alt="logo">
                  </div>
                  <div class="text-sm text-default mb-0">NexusCloud
                    <span class="block pt-1">Sistema Integrado de Gestión</span>
                  </div>
                </div>
                <div class="text-start sm:text-right">
                  <h2 class="text-xl font-bold text-title uppercase mb-1">Orden de Compra</h2>
                  <p class="text-sm text-default mb-0">{{ strPoLabel }}</p>
                  <span :class="handleGetStatusClass(objOrder.status)" class="text-[11px] px-2 py-0.5 rounded mt-2 inline-block">
                    {{ handleGetStatusLabel(objOrder.status) }}
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b border-border-color">
                <div>
                  <p class="text-sm text-default mb-2">Proveedor</p>
                  <p class="text-sm font-semibold text-title mb-2">{{ strVendorName }}</p>
                  <p class="text-sm text-default mb-0">{{ objOrder.account?.tax_id || 'Sin NIT' }}
                    <span class="block pt-1">{{ objOrder.account?.email || '' }}</span>
                  </p>
                </div>
                <div class="text-start sm:text-right text-sm space-y-2">
                  <div>
                    <span class="text-default">Fecha:</span>
                    <span class="text-gray-900 font-semibold">{{ objOrder.effectiveDate || objOrder.effective_date }}</span>
                  </div>
                  <div v-if="strSupplierDoc">
                    <span class="text-default">Doc. proveedor: </span>
                    <span class="text-gray-900 font-semibold">{{ strSupplierDoc }}</span>
                  </div>
                  <div>
                    <span class="text-default">Moneda: </span>
                    <span class="text-gray-900 font-semibold">{{ strCurrencyLabel }}</span>
                  </div>
                </div>
              </div>

              <div class="overflow-x-auto mb-6">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="text-sm text-default border-b border-border-color bg-light">
                      <th class="text-left py-3 px-3 font-semibold text-gray-900">Producto</th>
                      <th class="text-right py-3 px-3 font-semibold text-gray-900">Cant.</th>
                      <th class="text-right py-3 px-3 font-semibold text-gray-900">Costo Unit.</th>
                      <th class="text-right py-3 px-3 font-semibold text-gray-900">Desc. (%)</th>
                      <th class="text-right py-3 px-3 font-semibold text-gray-900">Importe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="objItem in objOrder.items" :key="objItem.id" class="border-b border-border-color">
                      <td class="py-3 px-3 text-sm font-semibold text-title">
                        {{ objItem.product?.name || 'Desconocido' }}
                        <span v-if="objItem.product?.sku" class="text-xs text-default block font-normal">{{ objItem.product.sku }}</span>
                      </td>
                      <td class="py-3 px-3 text-sm text-right">{{ objItem.quantity }}</td>
                      <td class="py-3 px-3 text-sm text-right">${{ handleFormatAmount(objItem.unitCost ?? objItem.unit_cost) }}</td>
                      <td class="py-3 px-3 text-sm text-right">{{ (objItem.discountPercent ?? objItem.discount_percent) || 0 }}%</td>
                      <td class="py-3 px-3 text-sm text-right font-semibold">${{ handleFormatAmount(handleGetLineTotal(objItem)) }}</td>
                    </tr>
                    <tr v-if="!objOrder.items || objOrder.items.length === 0">
                      <td colspan="5" class="py-4 text-center text-default text-sm">Sin productos asociados a esta orden.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="grid xl:grid-cols-12 grid-cols-1 gap-8">
                <div class="xl:col-span-7 xxl:col-span-8">
                  <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-900 mb-1">Notas</h4>
                    <p class="text-sm text-default whitespace-pre-wrap mb-0">{{ objOrder.notes || '—' }}</p>
                  </div>
                  <div>
                    <h4 class="text-sm font-semibold text-gray-900 mb-1">Términos y Condiciones</h4>
                    <p class="text-sm text-default whitespace-pre-wrap mb-0">{{ objOrder.termsAndConditions || objOrder.terms_and_conditions || '—' }}</p>
                  </div>
                </div>
                <div class="xl:col-span-5 xxl:col-span-4">
                  <div class="text-sm space-y-2">
                    <div class="flex justify-between">
                      <span class="text-default">Subtotal</span>
                      <span class="text-gray-900 font-semibold">${{ handleFormatAmount(fltSubtotal) }}</span>
                    </div>
                    <div v-if="fltDiscountAmount > 0" class="flex justify-between">
                      <span class="text-default">Descuento</span>
                      <span class="text-danger font-semibold">-${{ handleFormatAmount(fltDiscountAmount) }}</span>
                    </div>
                    <div class="flex justify-between border-t border-border-color pt-2 text-base">
                      <span class="font-bold text-title">Total</span>
                      <span class="text-primary font-bold">${{ handleFormatAmount(fltTotalAmount) }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-default">Pagado</span>
                      <span class="text-success font-semibold">${{ handleFormatAmount(objOrder.paidAmount ?? objOrder.paid_amount) }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-default">Saldo</span>
                      <span class="text-danger font-semibold">${{ handleFormatAmount(objOrder.balanceAmount ?? objOrder.balance_amount) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="bSpinner" class="text-center p-12">
              <span class="text-default">Cargando detalles de la orden...</span>
            </div>
          </div>

          <div id="payments-pane" class="hidden" role="tabpanel" aria-labelledby="payments-tab">
            <PurchaseOrderPaymentRelatedList
              v-if="objOrder"
              ref="paymentRelatedListRef"
              :purchase-order-id="objOrder.id"
              :b-can-register="bCanRegisterPayment"
              @register="handleOpenPaymentModal"
            />
          </div>
        </div>
      </div>

      <PurchaseOrderPaymentForm ref="paymentFormRef" @refresh="handlePaymentRefresh" />
    </div>
  </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import PurchaseOrderPaymentForm from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentForm.vue';
import PurchaseOrderPaymentRelatedList from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentRelatedList.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import {
  ORDER_STATUS,
  SUPPLIER_DOCUMENT_TYPE_LABEL,
  handleGetStatusLabel,
  handleGetStatusClass,
  handleCanEditOrder,
  handleCanRegisterPayment,
  handleCanCancelOrder
} from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';

export default {
  name: 'PurchaseOrderDetails',
  components: {
    PurchaseOrderPaymentForm,
    PurchaseOrderPaymentRelatedList
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
      objOrder: null,
      lstTabs: [
        { id: 'detail', label: 'Detalle' },
        { id: 'payments', label: 'Abonos' }
      ]
    };
  },
  computed: {
    strPoLabel() {
      if (!this.objOrder) return '...';
      return `#PO-${this.objOrder.id}`;
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
      const strType = this.objOrder?.supplierDocumentType || this.objOrder?.supplier_document_type;
      const strNumber = this.objOrder?.supplierDocumentNumber || this.objOrder?.supplier_document_number;
      if (!strType && !strNumber) return '';
      const strTypeLabel = SUPPLIER_DOCUMENT_TYPE_LABEL[strType] || strType || '';
      return [strTypeLabel, strNumber].filter(Boolean).join(' · ');
    },
    fltSubtotal() {
      return parseFloat(this.objOrder?.subtotal) || 0;
    },
    fltDiscountAmount() {
      return parseFloat(this.objOrder?.discountAmount ?? this.objOrder?.discount_amount) || 0;
    },
    fltTotalAmount() {
      return parseFloat(this.objOrder?.totalAmount ?? this.objOrder?.total_amount) || 0;
    },
    bCanEdit() {
      return this.objOrder && handleCanEditOrder(this.objOrder.status);
    },
    bCanRegisterPayment() {
      return this.objOrder && handleCanRegisterPayment(this.objOrder.status);
    },
    bCanCancel() {
      return this.objOrder && handleCanCancelOrder(this.objOrder.status);
    }
  },
  mounted() {
    this.handleGetData();
    this.$nextTick(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
  },
  methods: {
    handleGetData() {
      const recordId = this.$route.params.recordId;
      this.bSpinner = true;

      PurchaseOrderService.getById(recordId, { include: 'account,currency,items,items.product,payments' })
        .then((objResponse) => {
          this.objOrder = objResponse.data || objResponse;
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los detalles de la orden de compra', objError))
        .finally(() => {
          this.bSpinner = false;
        });
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
    handleCancelOrder() {
      if (!this.bCanCancel || !this.objOrder) return;
      this.bSpinner = true;
      PurchaseOrderService.update(this.objOrder.id, { status: ORDER_STATUS.CANCELLED })
        .then(() => {
          handleSuccess('Orden de compra cancelada');
          this.handleGetData();
        })
        .catch((objError) => handleError('No se pudo cancelar la orden', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleGetLineTotal(objItem) {
      if (objItem.lineTotal != null || objItem.line_total != null) {
        return objItem.lineTotal ?? objItem.line_total;
      }
      const fltCost = parseFloat(objItem.unitCost ?? objItem.unit_cost) || 0;
      const numQty = parseFloat(objItem.quantity) || 0;
      const fltDisc = parseFloat(objItem.discountPercent ?? objItem.discount_percent) || 0;
      return (fltCost * numQty) * (1 - fltDisc / 100);
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
