<template>
  <div>
    <div v-if="bCanRegister" class="flex justify-end mb-3">
      <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleRegister">
        <i class="ph ph-plus"></i> Registrar Abono
      </button>
    </div>
    <nx-datatable
      key-field="id"
      :data="lstPayments"
      :columns="lstVisibleColumns"
      :is-loading="bSpinner"
      :show-date-range="false"
      @search="handleSearch"
        @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
      </template>
    </nx-datatable>
  </div>
</template>

<script>
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import PurchaseOrderPaymentService from '@/services/purchasing/PurchaseOrderPaymentService';
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import BankService from '@/services/sales/BankService';
import { PAYMENT_COLUMNS, ACCOUNT_PAYMENT_COLUMNS } from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentConstants';
import { handleError } from '@/utils/toastUtils';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'PurchaseOrderPaymentRelatedList',
  props: {
    purchaseOrderId: { type: [Number, String], default: null },
    accountId: { type: [Number, String], default: null },
    bCanRegister: { type: Boolean, default: false }
  },
  emits: ['register'],
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstPayments: [],
      lstPaymentMethods: [],
      lstBanks: []
    };
  },
  computed: {
    bAccountMode() {
      return this.accountId != null && this.accountId !== '' && !this.purchaseOrderId;
    },
    lstVisibleColumns() {
      return this.bAccountMode ? ACCOUNT_PAYMENT_COLUMNS : PAYMENT_COLUMNS;
    }
  },
  watch: {
    purchaseOrderId() {
      this.handleGetData();
    },
    accountId() {
      this.handleGetData();
    }
  },
  mounted() {
    Promise.all([this.handleGetPaymentMethods(), this.handleGetBanks()]).then(() => {
      this.handleGetData();
    });
  },
  methods: {
    handlePageChange(objEvent) {
      this.currentPage = objEvent.detail.currentPage;
      this.pageSize = objEvent.detail.pageSize;
      this.handleGetData();
    },
    handleSearch(objEvent) {
      this.strSearch = objEvent.detail.value || '';
      this.currentPage = 1;
      this.handleGetData();
    },

    handleGetPaymentMethods() {
      return PaymentMethodService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const data = objResponse.data || objResponse;
          this.lstPaymentMethods = Array.isArray(data) ? data : [];
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los métodos de pago', objError));
    },
    handleGetBanks() {
      return BankService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const data = objResponse.data || objResponse;
          this.lstBanks = Array.isArray(data) ? data : [];
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los bancos', objError));
    },
    handleGetData() {
      if (this.bAccountMode) {
        this.handleGetAccountPayments();
        return;
      }
      if (!this.purchaseOrderId) return;
      this.bSpinner = true;
      PurchaseOrderPaymentService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch, {'filter[purchase_order_id]': this.purchaseOrderId})))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstRaw = Array.isArray(data) ? data : [];
          const numOrderId = Number(this.purchaseOrderId);
          this.lstPayments = lstRaw
            .filter((objPayment) => {
              const numPaymentOrderId = Number(objPayment.purchaseOrderId ?? objPayment.purchase_order_id);
              return numPaymentOrderId === numOrderId;
            })
            .map((objPayment) => this.handleMapPayment(objPayment));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los abonos', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleGetAccountPayments() {
      if (!this.accountId) return;
      this.bSpinner = true;
      PurchaseOrderService.getAll(handlePagerParams(1, 100, { 'filter[account_id]': this.accountId }))
        .then((objResponse) => {
          const { data } = handleParseList(objResponse, 1);
          let lstOrders = Array.isArray(data) ? data : [];
          lstOrders = lstOrders.filter((objOrder) => {
            const numAccountId = objOrder.accountId ?? objOrder.account_id ?? objOrder.account?.id;
            return !numAccountId || Number(numAccountId) === Number(this.accountId);
          });

          if (!lstOrders.length) {
            this.lstPayments = [];
            this.totalPages = 1;
            return;
          }

          return Promise.all(
            lstOrders.map((objOrder) =>
              PurchaseOrderPaymentService.getAll(handlePagerParams(1, 100, {
                'filter[purchase_order_id]': objOrder.id
              })).then((objPayResponse) => {
                const { data: lstPayData } = handleParseList(objPayResponse, 1);
                const lstRaw = Array.isArray(lstPayData) ? lstPayData : [];
                const numOrderId = Number(objOrder.id);
                return lstRaw
                  .filter((objPayment) => {
                    const numPaymentOrderId = Number(objPayment.purchaseOrderId ?? objPayment.purchase_order_id);
                    return numPaymentOrderId === numOrderId;
                  })
                  .map((objPayment) => this.handleMapPayment(objPayment, objOrder));
              })
            )
          ).then((lstGrouped) => {
            this.lstPayments = lstGrouped.flat().sort((objA, objB) => {
              const strDateA = objA.paymentDate || objA.payment_date || '';
              const strDateB = objB.paymentDate || objB.payment_date || '';
              return String(strDateB).localeCompare(String(strDateA));
            });
            this.totalPages = Math.max(1, Math.ceil(this.lstPayments.length / this.pageSize));
            this.currentPage = 1;
          });
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los abonos', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleMapPayment(objPayment, objOrderOrId = null) {
      const numMethodId = objPayment.paymentMethodId ?? objPayment.payment_method_id;
      const numBankId = objPayment.bankId ?? objPayment.bank_id;
      const strReference = objPayment.paymentReference ?? objPayment.payment_reference ?? '';
      const strDate = objPayment.paymentDate || objPayment.payment_date || '';
      const fltAmount = parseFloat(objPayment.amount) || 0;
      const objOrder = objOrderOrId && typeof objOrderOrId === 'object' ? objOrderOrId : null;
      const numPurchaseOrderId = objOrder?.id ?? objOrderOrId ?? objPayment.purchaseOrderId ?? objPayment.purchase_order_id;
      const strPurchaseNumber =
        objOrder?.purchaseNumber ||
        objOrder?.purchase_number ||
        objPayment.purchaseOrder?.purchaseNumber ||
        objPayment.purchase_order?.purchase_number ||
        (numPurchaseOrderId ? `PO-${numPurchaseOrderId}` : null);
      return {
        ...objPayment,
        paymentDateLabel: strDate ? String(strDate).split(' ')[0] : '—',
        paymentMethodLabel: this.handleGetPaymentMethodLabel(numMethodId),
        bankLabel: this.handleGetBankLabel(numBankId),
        paymentReferenceLabel: strReference || '—',
        purchaseOrderLabel: strPurchaseNumber || '—',
        amountLabel: `+$${fltAmount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`
      };
    },
    handleGetPaymentMethodLabel(numMethodId) {
      if (numMethodId == null) return '—';
      const objMethod = this.lstPaymentMethods.find((objItem) => Number(objItem.id) === Number(numMethodId));
      return objMethod ? objMethod.name : `Método #${numMethodId}`;
    },
    handleGetBankLabel(numBankId) {
      if (numBankId == null) return '—';
      const objBank = this.lstBanks.find((objItem) => Number(objItem.id) === Number(numBankId));
      return objBank ? objBank.name : `Banco #${numBankId}`;
    },
    handleRegister() {
      this.$emit('register');
    }
  }
};
</script>
