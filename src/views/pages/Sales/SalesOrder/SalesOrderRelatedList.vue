<template>
  <div>
    <div class="flex justify-end mb-3">
      <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
        <i class="ph ph-plus"></i> Nueva orden
      </button>
    </div>
    <nx-datatable
      key-field="id"
      :data="lstOrders"
      :columns="lstColumns"
      :is-loading="bSpinner"
      :show-date-range="false"
      @rowaction="handleRowAction"
      @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
      </template>
    </nx-datatable>
    <SalesOrderForm ref="salesOrderFormRef" @success="handleFormSuccess" />
  </div>
</template>

<script>
import SalesOrderService from '@/services/sales/SalesOrderService';
import SalesOrderForm from '@/views/pages/Sales/SalesOrder/SalesOrderForm.vue';
import { ORDER_STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';
import { handleError } from '@/utils/toastUtils';
import { handleInitPager, handlePagerParams, handleParseList } from '@/utils/listPaginationUtils';

const RELATED_ACTION_BUTTONS = {
  rowActions: ACTION_BUTTONS.rowActions.filter((objAction) => objAction.name === 'detail')
};

export default {
  name: 'SalesOrderRelatedList',
  components: { 
    SalesOrderForm 
  },
  props: {
    accountId: { type: [Number, String], default: null }
  },
  emits: ['refresh'],
  data() {
    return {
      ...handleInitPager(),
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstOrders: [],
      lstColumns: [
        { label: 'Orden', fieldName: 'orderNumber', type: 'text', sortable: true },
        { label: 'Fecha Venta', fieldName: 'effectiveDate', type: 'text', sortable: true },
        { label: 'Moneda', fieldName: 'currencyLabel', type: 'text', sortable: true },
        { label: 'Total', fieldName: 'grandTotalAmount', type: 'currency' },
        { label: 'Pagado', fieldName: 'paidAmount', type: 'currency' },
        { label: 'Saldo Pendiente', fieldName: 'balanceAmount', type: 'currency' },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: ORDER_STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: RELATED_ACTION_BUTTONS }
      ]
    };
  },
  watch: {
    accountId() {
      if (this.accountId) this.handleGetData();
    }
  },
  mounted() {
    if (this.accountId) this.handleGetData();
  },
  methods: {
    handlePageChange(objEvent) {
      this.currentPage = objEvent.detail.currentPage;
      this.pageSize = objEvent.detail.pageSize;
      this.handleGetData();
    },

    handleGetData() {
      if (!this.accountId) return;

      this.bSpinner = true;
      SalesOrderService.getAll(handlePagerParams(this.currentPage, this.pageSize, {include: 'account,currency',
        'filter[account_id]': this.accountId}))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          let lstRaw = Array.isArray(data) ? data : [];

          // Fallback si Vertex ignora el filtro
          lstRaw = lstRaw.filter((objOrder) => {
            const numAccountId = objOrder.accountId ?? objOrder.account_id ?? objOrder.account?.id;
            return !numAccountId || Number(numAccountId) === Number(this.accountId);
          });

          this.lstOrders = lstRaw.map((objOrder) => {
            const objCurrency = objOrder.currency || {};
            return {
              ...objOrder,
              orderNumber: objOrder.orderNumber || objOrder.order_number || `SO-${objOrder.id}`,
              effectiveDate: objOrder.effectiveDate || objOrder.effective_date || '—',
              currencyLabel: objCurrency.iso_code || objCurrency.code || objCurrency.name || '—',
              grandTotalAmount: parseFloat(objOrder.grandTotalAmount ?? objOrder.grand_total_amount ?? objOrder.totalAmount ?? objOrder.total_amount) || 0,
              paidAmount: parseFloat(objOrder.paidAmount ?? objOrder.paid_amount) || 0,
              balanceAmount: parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0
            };
          });
          this.$emit('refresh', this.lstOrders);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las órdenes', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      this.$refs.salesOrderFormRef?.handleOpen(null, { accountId: this.accountId });
    },
    handleFormSuccess() {
      this.handleGetData();
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'detail') {
        this.$router.push(`/sales/sales-orders/${row.id}/detail`);
      }
    }
  }
};
</script>
