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
import SalesOrderPaymentService from '@/services/sales/SalesOrderPaymentService';
import {
  PAYMENT_COLUMNS,
  ACCOUNT_PAYMENT_COLUMNS
} from '@/views/pages/Sales/SalesOrderPayment/SalesOrderPaymentConstants';
import { handleError } from '@/utils/toastUtils';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

const STR_PAYMENT_INCLUDES = 'paymentMethod,bank,salesOrder';

export default {
  name: 'SalesOrderPaymentRelatedList',
  props: {
    salesOrderId: { type: [Number, String], default: null },
    accountId: { type: [Number, String], default: null },
    bCanRegister: { type: Boolean, default: false }
  },
  emits: ['register'],
  data() {
    return {
      ...handleInitPager(),
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstPayments: []
    };
  },
  computed: {
    bAccountMode() {
      return this.accountId != null && this.accountId !== '' && !this.salesOrderId;
    },
    lstVisibleColumns() {
      return this.bAccountMode ? ACCOUNT_PAYMENT_COLUMNS : PAYMENT_COLUMNS;
    }
  },
  watch: {
    salesOrderId() {
      this.handleGetData();
    },
    accountId() {
      this.handleGetData();
    }
  },
  mounted() {
    this.handleGetData();
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
    handleGetData() {
      if (this.bAccountMode) {
        this.handleGetAccountPayments();
        return;
      }
      if (!this.salesOrderId) return;

      this.bSpinner = true;
      SalesOrderPaymentService.getAll(handlePagerParams(
        this.currentPage,
        this.pageSize,
        handleSearchParams(this.strSearch, {
          include: STR_PAYMENT_INCLUDES,
          'filter[sales_order_id]': this.salesOrderId
        })
      ))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstRaw = Array.isArray(data) ? data : [];
          const numOrderId = Number(this.salesOrderId);
          this.lstPayments = lstRaw
            .filter((objPayment) => {
              const numPaymentOrderId = Number(objPayment.salesOrderId ?? objPayment.sales_order_id);
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
      SalesOrderPaymentService.getAll(handlePagerParams(
        this.currentPage,
        this.pageSize,
        handleSearchParams(this.strSearch, {
          include: STR_PAYMENT_INCLUDES,
          'filter[account_id]': this.accountId
        })
      ))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;
          const lstRaw = Array.isArray(data) ? data : [];
          this.lstPayments = lstRaw.map((objPayment) => this.handleMapPayment(objPayment));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los abonos', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleMapPayment(objPayment) {
      const numMethodId = objPayment.paymentMethodId ?? objPayment.payment_method_id;
      const numBankId = objPayment.bankId ?? objPayment.bank_id;
      const strReference = objPayment.paymentReference ?? objPayment.payment_reference ?? '';
      const strDate = objPayment.paymentDate || objPayment.payment_date || '';
      const fltAmount = parseFloat(objPayment.amount) || 0;
      const objOrder = objPayment.salesOrder || objPayment.sales_order || null;
      const numSalesOrderId = objOrder?.id ?? objPayment.salesOrderId ?? objPayment.sales_order_id;
      const strOrderNumber =
        objOrder?.orderNumber ||
        objOrder?.order_number ||
        (numSalesOrderId ? `SO-${numSalesOrderId}` : null);
      const objMethod = objPayment.paymentMethod || objPayment.payment_method;
      const objBank = objPayment.bank;

      return {
        ...objPayment,
        paymentDateLabel: strDate ? String(strDate).split(' ')[0] : '—',
        paymentMethodLabel: objMethod?.name || (numMethodId != null ? `Método #${numMethodId}` : '—'),
        bankLabel: objBank?.name || (numBankId != null ? `Banco #${numBankId}` : '—'),
        paymentReferenceLabel: strReference || '—',
        salesOrderLabel: strOrderNumber || '—',
        amountLabel: `+$${fltAmount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`
      };
    },
    handleRegister() {
      this.$emit('register');
    }
  }
};
</script>
