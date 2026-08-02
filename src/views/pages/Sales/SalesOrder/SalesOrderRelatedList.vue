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
      @refresh="handleGetData"
    />
  </div>
</template>

<script>
import SalesOrderService from '@/services/sales/SalesOrderService';
import {
  ORDER_STATUS_BADGE,
  ACTION_BUTTONS
} from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';
import { handleError } from '@/utils/toastUtils';

const RELATED_ACTION_BUTTONS = {
  rowActions: ACTION_BUTTONS.rowActions.filter((objAction) => objAction.name === 'details')
};

export default {
  name: 'SalesOrderRelatedList',
  props: {
    accountId: { type: [Number, String], default: null }
  },
  emits: ['refresh'],
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstOrders: [],
      lstColumns: [
        { label: 'Orden', fieldName: 'orderLabel', type: 'text', sortable: true },
        { label: 'Fecha Venta', fieldName: 'effectiveDate', type: 'text', sortable: true },
        { label: 'Moneda', fieldName: 'currencyLabel', type: 'text', sortable: true },
        { label: 'Total', fieldName: 'totalAmount', type: 'currency' },
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
    handleGetData() {
      if (!this.accountId) return;

      this.bSpinner = true;
      SalesOrderService.getAll({
        include: 'account,currency',
        'filter[account_id]': this.accountId,
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          let lstRaw = Array.isArray(lstData) ? lstData : [];

          // Fallback si Vertex ignora el filtro
          lstRaw = lstRaw.filter((objOrder) => {
            const numAccountId = objOrder.accountId ?? objOrder.account_id ?? objOrder.account?.id;
            return !numAccountId || Number(numAccountId) === Number(this.accountId);
          });

          this.lstOrders = lstRaw.map((objOrder) => {
            const objCurrency = objOrder.currency || {};
            return {
              ...objOrder,
              orderLabel: `#SO-${objOrder.id}`,
              effectiveDate: objOrder.effectiveDate || objOrder.effective_date || '—',
              currencyLabel: objCurrency.iso_code || objCurrency.code || objCurrency.name || '—',
              totalAmount: parseFloat(objOrder.totalAmount ?? objOrder.total_amount) || 0,
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
      this.$router.push('/sales/sales-orders/new');
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'details') {
        this.$router.push(`/sales/sales-orders/${row.id}/details`);
      }
    }
  }
};
</script>
