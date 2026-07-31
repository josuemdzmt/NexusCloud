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
          <button v-if="bCanRegisterPayment" type="button" class="btn-sm bg-success text-white border border-success hover:bg-success-hover cursor-pointer inline-flex items-center gap-1" @click="handleOpenPaymentModal">
            <i class="ph ph-currency-dollar"></i> Registrar Abono
          </button>
          <button v-if="bCanActivate" type="button" class="btn-sm bg-primary text-white border border-primary hover:bg-primary-hover cursor-pointer inline-flex items-center gap-1" :disabled="bSpinner" @click="handleChangeStatus(ORDER_STATUS.ACTIVATED)">
            <i class="ph ph-check"></i> Activar
          </button>
          <button v-if="bCanComplete" type="button" class="btn-sm bg-success text-white border border-success hover:bg-success-hover cursor-pointer inline-flex items-center gap-1" :disabled="bSpinner" @click="handleChangeStatus(ORDER_STATUS.COMPLETED)">
            <i class="ph ph-check-circle"></i> Completar
          </button>
          <button v-if="bCanCancel" type="button" class="btn-sm bg-danger text-white border border-danger hover:bg-danger-hover cursor-pointer inline-flex items-center gap-1" :disabled="bSpinner" @click="handleChangeStatus(ORDER_STATUS.CANCELLED)">
            <i class="ph ph-x"></i> Cancelar
          </button>
          <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer inline-flex items-center gap-1">
            <i class="ph ph-printer"></i> Imprimir
          </button>
          <router-link v-if="bCanEdit" :to="`${all_routes.salesOrders}/${objOrder.id}/edit`" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer inline-flex items-center gap-1">
            <i class="ph ph-pencil"></i> Editar
          </router-link>
        </div>
      </div>

      <div v-if="objOrder" class="bg-white border border-border-color rounded-md p-5 sm:p-8 w-full">
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

        <div v-if="lstPayments.length > 0" class="mt-10">
          <h3 class="text-sm font-bold text-gray-900 mb-3 border-b border-border-color pb-2">Historial de Abonos Recibidos</h3>
          <table class="w-full text-sm text-left border-collapse">
            <thead class="bg-light text-gray-700 text-xs uppercase">
              <tr>
                <th class="p-3 border-b border-border-color font-semibold">Fecha</th>
                <th class="p-3 border-b border-border-color font-semibold">Método de Pago</th>
                <th class="p-3 border-b border-border-color text-right font-semibold">Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="objPayment in lstPayments" :key="objPayment.id" class="hover:bg-light/40">
                <td class="p-3 border-b border-border-color text-gray-900">{{ handleFormatDate(objPayment.paymentDate) }}</td>
                <td class="p-3 border-b border-border-color">{{ handleGetPaymentMethodLabel(objPayment.paymentMethodId) }}</td>
                <td class="p-3 border-b border-border-color text-right font-semibold text-success">+${{ handleFormatAmount(objPayment.amount) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="!objOrder && bSpinner" class="text-center p-12">
        <span class="text-default">Cargando detalles de la orden...</span>
      </div>

      <SalesOrderPaymentForm ref="paymentFormRef" @refresh="handleGetData" />
    </div>
  </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import SalesOrderService from '@/services/sales/SalesOrderService';
import SalesOrderPaymentService from '@/services/sales/SalesOrderPaymentService';
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import SalesOrderPaymentForm from '@/views/pages/Sales/SalesOrder/SalesOrderPaymentForm.vue';
import { handleError, handleSuccess } from '@/utils/toastUtils';
import {
  ORDER_STATUS,
  NUM_TAX_RATE,
  handleGetStatusLabel,
  handleGetStatusClass,
  handleCanEditOrder,
  handleCanRegisterPayment,
  handleCanActivateOrder,
  handleCanCompleteOrder,
  handleCanCancelOrder,
  handleValidateStatusTransition
} from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';

export default {
  name: 'SalesOrderDetails',
  components: {
    SalesOrderPaymentForm
  },
  setup() {
    return {
      all_routes,
      numTaxRate: NUM_TAX_RATE,
      ORDER_STATUS,
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

      // 5. Listas / Arreglos
      lstPayments: [],
      lstPaymentMethods: []
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
    fltBalanceAmount() {
      return parseFloat(this.objOrder?.balanceAmount) || 0;
    },
    bCanEdit() {
      return this.objOrder && handleCanEditOrder(this.objOrder.status);
    },
    bCanRegisterPayment() {
      return this.objOrder && handleCanRegisterPayment(this.objOrder.status);
    },
    bCanActivate() {
      return this.objOrder && handleCanActivateOrder(this.objOrder.status);
    },
    bCanComplete() {
      return this.objOrder && handleCanCompleteOrder(this.objOrder.status, this.fltBalanceAmount);
    },
    bCanCancel() {
      return this.objOrder && handleCanCancelOrder(this.objOrder.status);
    }
  },
  mounted() {
    this.handleGetPaymentMethods();
    this.handleGetData();
  },
  methods: {
    handleGetPaymentMethods() {
      PaymentMethodService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstPaymentMethods = Array.isArray(lstData) ? lstData : [];
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los métodos de pago', objError));
    },
    handleGetData() {
      const recordId = this.$route.params.recordId;
      this.bSpinner = true;

      SalesOrderService.getById(recordId, { include: 'account,currency,pricebook,items.product' })
        .then((objResponse) => {
          this.objOrder = objResponse.data || objResponse;
          this.handleLoadPayments(recordId);
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los detalles de la orden de venta', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleLoadPayments(recordId) {
      SalesOrderPaymentService.getAll({ sales_order_id: recordId })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstPayments = Array.isArray(lstData) ? lstData : [];
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los abonos', objError));
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
    handleChangeStatus(strNextStatus) {
      if (!this.objOrder) return;

      const objTransition = handleValidateStatusTransition(this.objOrder.status, strNextStatus, {
        fltBalanceAmount: this.fltBalanceAmount
      });
      if (!objTransition.bValid) {
        handleError('Transición no permitida', objTransition.strMessage);
        return;
      }

      this.bSpinner = true;
      SalesOrderService.update(this.objOrder.id, { status: strNextStatus })
        .then(() => {
          handleSuccess('Estado actualizado', `La orden ahora está ${handleGetStatusLabel(strNextStatus)}.`);
          this.handleGetData();
        })
        .catch((objError) => handleError('Ocurrió un problema al actualizar el estado', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleGetPaymentMethodLabel(numMethodId) {
      const objMethod = this.lstPaymentMethods.find((objMethod) => objMethod.id === numMethodId);
      return objMethod ? objMethod.name : `Método #${numMethodId}`;
    },
    handleFormatDate(strDate) {
      if (!strDate) return '';
      return strDate.split(' ')[0];
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
