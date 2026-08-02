<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Órdenes de Venta</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">
            <i class="ph ph-plus"></i> Nueva Orden
          </button>
        </div>
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
  </main>
</template>

<script>
import SalesOrderService from '@/services/sales/SalesOrderService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { ORDER_STATUS_BADGE, ACTION_BUTTONS, handleCanEditOrder, handleCanDeleteOrder } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';

export default {
  name: 'SalesOrderList',
  data() {
    return {
      bSpinner: false,
      lstOrders: [],
      lstColumns: [
        { label: 'Cliente', fieldName: 'accountName', type: 'text', sortable: true },
        { label: 'Fecha Venta', fieldName: 'effectiveDate', type: 'text', sortable: true },
        { label: 'Moneda', fieldName: 'currencyLabel', type: 'text', sortable: true },
        { label: 'Total', fieldName: 'totalAmount', type: 'currency' },
        { label: 'Saldo Pendiente', fieldName: 'balanceAmount', type: 'currency' },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: ORDER_STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: ACTION_BUTTONS }
      ]
    };
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      this.bSpinner = true;
      SalesOrderService.getAll({ include: 'account,currency' })
        .then((data) => {
          const lstOrders = data.data || data;
          this.lstOrders = lstOrders.map(objOrder => {
            const objCurrency = objOrder.currency || {};
            return {
              ...objOrder,
              accountName: objOrder.account ? (objOrder.account.legal_name || `${objOrder.account.first_name || ''} ${objOrder.account.last_name || ''}`.trim() || 'Sin Nombre') : 'Desconocido',
              currencyLabel: objCurrency.iso_code || objCurrency.code || objCurrency.name || '—'
            };
          });
        })
        .catch((error) => {
          handleError('Ocurrió un problema al obtener las órdenes de venta', error);
        })
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
      } else if (action.name === 'edit') {
        if (!handleCanEditOrder(row.status)) {
          handleError('No permitido', 'Solo puedes editar órdenes en estado Borrador.');
          return;
        }
        this.$router.push(`/sales/sales-orders/${row.id}/edit`);
      } else if (action.name === 'delete') {
        if (!handleCanDeleteOrder(row.status)) {
          handleError('No permitido', 'Solo puedes eliminar órdenes en estado Borrador.');
          return;
        }
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      SalesOrderService.delete(numId)
        .then(() => {
          handleSuccess('Orden de venta eliminada exitosamente');
          this.handleGetData();
        })
        .catch((error) => {
          handleError('Ocurrió un problema al eliminar la orden de venta', error);
        });
    }
  }
};
</script>
