<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <div>
          <div class="flex items-center gap-2 text-sm text-default mb-1">
            <router-link :to="`${all_routes.salesOrders}/list`" class="hover:text-primary">Órdenes de Venta</router-link>
            <i class="ph ph-caret-right text-[10px]"></i>
            <span>#SO-{{ objOrder?.id || '...' }}</span>
          </div>
          <h1 class="text-gray-900 text-xl font-bold mb-0">Vista Previa de Orden</h1>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer inline-flex items-center gap-1">
            <i class="ph ph-printer"></i> Imprimir
          </button>
          <button v-if="bCanRegisterPayment" type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer inline-flex items-center gap-1" @click="handleOpenPaymentModal">
            <i class="ph ph-currency-dollar"></i> Registrar Abono
          </button>
          <router-link v-if="bCanEdit" :to="`${all_routes.salesOrders}/${objOrder.id}/edit`" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer inline-flex items-center gap-1">
            <i class="ph ph-pencil"></i> Editar
          </router-link>
        </div>
      </div>

      <div class="bg-white border border-border-color rounded-md">
        <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button
            v-for="(objTab, numIndex) in lstTabs"
            :key="objTab.id"
            type="button"
            :id="`${objTab.id}-tab`"
            role="tab"
            :aria-selected="numIndex === 0"
            :aria-controls="`${objTab.id}-pane`"
            :data-hs-tab="`#${objTab.id}-pane`"
            class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden"
            :class="{ active: numIndex === 0 }"
          >
            {{ objTab.label }}
          </button>
        </nav>

        <div class="p-4 sm:p-5">
          <div id="detail-pane" role="tabpanel" aria-labelledby="detail-tab">
            <div v-if="objOrder" class="w-full">
              <div class="flex justify-between items-start mb-8 flex-wrap gap-5 lg:flex-nowrap">
                <div>
                  <div class="invoice-logo block dark:hidden">
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mb-3" alt="logo"></router-link>
                  </div>
                  <div class="invoice-logo-white hidden dark:block">
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mb-3" alt="logo"></router-link>
                  </div>
                  <div class="text-sm text-default mb-0">NexusCloud
                    <span class="block pt-1">Sistema Integrado de Gestión</span>
                  </div>
                </div>
                <div class="text-start sm:text-right">
                  <h2 class="text-xl font-bold text-title uppercase mb-1">Orden de Venta</h2>
                  <p class="text-sm text-default mb-0">#SO-{{ objOrder.id }}</p>
                  <span :class="handleGetStatusClass(objOrder.status)" class="text-[11px] px-2 py-0.5 rounded mt-2 inline-block">
                    {{ handleGetStatusLabel(objOrder.status) }}
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b border-border-color">
                <div>
                  <p class="text-sm text-default mb-2">Cliente</p>
                  <p class="text-sm font-semibold text-title mb-2">{{ strCustomerName }}</p>
                  <p class="text-sm text-default mb-0">{{ objOrder.account?.tax_id || 'Sin NIT' }}
                    <span class="block pt-1">{{ objOrder.account?.email || '' }}</span>
                  </p>
                </div>
                <div class="text-start sm:text-right text-sm space-y-2">
                  <div>
                    <span class="text-default">Fecha de Venta:</span>
                    <span class="text-gray-900 font-semibold">{{ objOrder.effectiveDate }}</span>
                  </div>
                  <div>
                    <span class="text-default">Lista de Precios: </span>
                    <span class="text-gray-900 font-semibold">{{ objOrder.pricebook?.name || 'Desconocido' }}</span>
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
                      <th class="text-right py-3 px-3 font-semibold text-gray-900">Precio Unit.</th>
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
                      <td class="py-3 px-3 text-sm text-right">${{ handleFormatAmount(objItem.unitPrice) }}</td>
                      <td class="py-3 px-3 text-sm text-right">{{ objItem.discountPercent || 0 }}%</td>
                      <td class="py-3 px-3 text-sm text-right font-semibold">${{ handleFormatAmount(objItem.totalPrice) }}</td>
                    </tr>
                    <tr v-if="!objOrder.items || objOrder.items.length === 0">
                      <td colspan="5" class="py-4 text-center text-default text-sm">Sin productos asociados a esta orden.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="flex justify-end">
                <div class="w-72 text-sm space-y-2">
                  <div class="flex justify-between">
                    <span class="text-default">Subtotal</span>
                    <span class="text-gray-900 font-semibold">${{ handleFormatAmount(fltSubtotal) }}</span>
                  </div>
                  <div v-if="fltDiscountAmount > 0" class="flex justify-between">
                    <span class="text-default">Descuento</span>
                    <span class="text-danger font-semibold">-${{ handleFormatAmount(fltDiscountAmount) }}</span>
                  </div>
                  <div v-if="fltTaxAmount > 0" class="flex justify-between">
                    <span class="text-default">Impuestos ({{ numTaxRate }}%)</span>
                    <span class="text-gray-900 font-semibold">${{ handleFormatAmount(fltTaxAmount) }}</span>
                  </div>
                  <div v-if="fltShippingCharge > 0" class="flex justify-between">
                    <span class="text-default">Cargo de Envío</span>
                    <span class="text-gray-900 font-semibold">${{ handleFormatAmount(fltShippingCharge) }}</span>
                  </div>
                  <div class="flex justify-between border-t border-border-color pt-2 text-base">
                    <span class="font-bold text-title">Total</span>
                    <span class="text-primary font-bold">${{ handleFormatAmount(fltTotalAmount) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-default">Pagado</span>
                    <span class="text-success font-semibold">${{ handleFormatAmount(objOrder.paidAmount) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-default">Saldo</span>
                    <span class="text-danger font-semibold">${{ handleFormatAmount(objOrder.balanceAmount) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="bSpinner" class="text-center p-12">
              <span class="text-default">Cargando detalles de la orden...</span>
            </div>
          </div>

          <div id="payments-pane" class="hidden" role="tabpanel" aria-labelledby="payments-tab">
            <SalesOrderPaymentRelatedList
              v-if="objOrder"
              ref="paymentRelatedListRef"
              :sales-order-id="objOrder.id"
              :b-can-register="bCanRegisterPayment"
              @register="handleOpenPaymentModal"
            />
          </div>
        </div>
      </div>

      <SalesOrderPaymentForm ref="paymentFormRef" @refresh="handlePaymentRefresh" />
    </div>
  </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import SalesOrderService from '@/services/sales/SalesOrderService';
import SalesOrderPaymentForm from '@/views/pages/Sales/SalesOrderPayment/SalesOrderPaymentForm.vue';
import SalesOrderPaymentRelatedList from '@/views/pages/Sales/SalesOrderPayment/SalesOrderPaymentRelatedList.vue';
import { handleError } from '@/utils/toastUtils';
import {
  NUM_TAX_RATE,
  handleGetStatusLabel,
  handleGetStatusClass,
  handleCanEditOrder,
  handleCanRegisterPayment
} from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';

export default {
  name: 'SalesOrderDetails',
  components: {
    SalesOrderPaymentForm,
    SalesOrderPaymentRelatedList
  },
  setup() {
    return {
      all_routes,
      numTaxRate: NUM_TAX_RATE,
      handleGetStatusLabel,
      handleGetStatusClass
    };
  },
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 4. Objetos
      objOrder: null,

      // 5. Listas
      lstTabs: [
        { id: 'detail', label: 'Detalle' },
        { id: 'payments', label: 'Pagos' }
      ]
    };
  },
  computed: {
    strCustomerName() {
      if (!this.objOrder?.account) return 'Desconocido';
      const objAccount = this.objOrder.account;
      return objAccount.legal_name || `${objAccount.first_name || ''} ${objAccount.last_name || ''}`.trim() || 'Desconocido';
    },
    strCurrencyLabel() {
      if (!this.objOrder?.currency) return 'Desconocido';
      const objCurrency = this.objOrder.currency;
      return `${objCurrency.name} (${objCurrency.code || objCurrency.iso_code || ''})`;
    },
    fltSubtotal() {
      return parseFloat(this.objOrder?.subtotal) || 0;
    },
    fltDiscountAmount() {
      return parseFloat(this.objOrder?.discountAmount) || 0;
    },
    fltTaxAmount() {
      if (this.objOrder?.taxAmount !== undefined && this.objOrder?.taxAmount !== null) {
        return parseFloat(this.objOrder.taxAmount) || 0;
      }
      const fltTaxable = Math.max(0, this.fltSubtotal - this.fltDiscountAmount);
      return parseFloat((fltTaxable * (NUM_TAX_RATE / 100)).toFixed(2));
    },
    fltShippingCharge() {
      return parseFloat(this.objOrder?.shippingCharge) || 0;
    },
    fltTotalAmount() {
      return parseFloat(this.objOrder?.totalAmount) || 0;
    },
    bCanEdit() {
      return this.objOrder && handleCanEditOrder(this.objOrder.status);
    },
    bCanRegisterPayment() {
      return this.objOrder && handleCanRegisterPayment(this.objOrder.status);
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

      SalesOrderService.getById(recordId, { include: 'account,currency,pricebook,items.product' })
        .then((objResponse) => {
          this.objOrder = objResponse.data || objResponse;
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los detalles de la orden de venta', objError))
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
