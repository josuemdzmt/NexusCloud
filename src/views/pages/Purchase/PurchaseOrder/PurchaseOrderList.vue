<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Órdenes de Compra</h1>
        <div class="flex items-center flex-wrap gap-2">
          <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>

      <nx-datatable
        key-field="id"
        :data="lstOrders"
        :columns="lstColumns"
        :is-loading="bSpinner"
        :show-date-range="false"
        :show-filters="false"
        :hide-checkbox-column="true"
        @rowaction="handleRowAction"
        @refresh="handleGetData"
      >
        <template #cell-poLabel="{ row }">
          <router-link :to="`/purchase/purchase-orders/${row.id}/details`" class="text-sm text-default hover:text-primary">
            {{ row.poLabel }}
          </router-link>
        </template>
      </nx-datatable>
    </div>
  </main>
</template>

<script>
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import {
  ORDER_STATUS_BADGE,
  ACTION_BUTTONS,
  handleCanEditOrder,
  handleCanDeleteOrder
} from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';

const PAYMENT_STATUS_BADGE = {
  classMap: {
    Paid: 'bg-success-transparent text-success',
    Partial: 'bg-warning-transparent text-warning',
    Pending: 'bg-danger-transparent text-danger'
  },
  labelMap: {
    Paid: 'Pagado',
    Partial: 'Parcial',
    Pending: 'Pendiente'
  }
};

export default {
  name: 'PurchaseOrderList',
  data() {
    return {
      bSpinner: false,
      lstOrders: [],
      lstColumns: [
        { label: 'Referencia', fieldName: 'poLabel', type: 'text', sortable: true },
        { label: 'Proveedor', fieldName: 'accountName', type: 'text', sortable: true, cellAttributes: { class: 'font-semibold text-title' } },
        { label: 'Fecha', fieldName: 'effectiveDateLabel', type: 'text', sortable: true },
        { label: 'Ítems', fieldName: 'itemsCount', type: 'text', sortable: true },
        { label: 'Monto', fieldName: 'totalAmount', type: 'currency', sortable: true },
        { label: 'Pago', fieldName: 'paymentStatus', type: 'badge', typeAttributes: PAYMENT_STATUS_BADGE },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: ORDER_STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: ACTION_BUTTONS }
      ]
    };
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
    handleFormatReference(numId) {
      return `#PO${String(numId).padStart(4, '0')}`;
    },
    handleFormatDate(strDate) {
      if (!strDate || strDate === '—') return '—';
      const strRaw = String(strDate).split(' ')[0];
      const objDate = new Date(`${strRaw}T00:00:00`);
      if (Number.isNaN(objDate.getTime())) return strRaw;
      return objDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    },
    handleGetPaymentStatus(fltPaid, fltBalance) {
      if (fltBalance <= 0) return 'Paid';
      if (fltPaid > 0) return 'Partial';
      return 'Pending';
    },
    handleGetData() {
      this.bSpinner = true;
      PurchaseOrderService.getAll({
        include: 'account,currency,items',
        sort: '-effective_date',
        per_page: 200
      })
        .then((objResponse) => {
          const lstOrders = objResponse.data || objResponse;
          this.lstOrders = (Array.isArray(lstOrders) ? lstOrders : []).map((objOrder) => {
            const fltTotal = parseFloat(objOrder.totalAmount ?? objOrder.total_amount) || 0;
            const fltPaid = parseFloat(objOrder.paidAmount ?? objOrder.paid_amount) || 0;
            const fltBalance = parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0;
            const lstItems = objOrder.items || [];
            const strEffective = objOrder.effectiveDate || objOrder.effective_date || '';

            return {
              ...objOrder,
              poLabel: this.handleFormatReference(objOrder.id),
              accountName: objOrder.account
                ? (objOrder.account.legal_name || `${objOrder.account.first_name || ''} ${objOrder.account.last_name || ''}`.trim() || 'Sin Nombre')
                : 'Desconocido',
              effectiveDate: strEffective,
              effectiveDateLabel: this.handleFormatDate(strEffective),
              itemsCount: Array.isArray(lstItems) ? lstItems.length : 0,
              totalAmount: fltTotal,
              paidAmount: fltPaid,
              balanceAmount: fltBalance,
              paymentStatus: this.handleGetPaymentStatus(fltPaid, fltBalance)
            };
          });
        })
        .catch((objError) => {
          handleError('Ocurrió un problema al obtener las órdenes de compra', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      this.$router.push('/purchase/purchase-orders/new');
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'details') {
        this.$router.push(`/purchase/purchase-orders/${row.id}/details`);
      } else if (action.name === 'edit') {
        if (!handleCanEditOrder(row.status)) {
          handleError('No permitido', 'Solo puedes editar órdenes en estado Borrador.');
          return;
        }
        this.$router.push(`/purchase/purchase-orders/${row.id}/edit`);
      } else if (action.name === 'delete') {
        if (!handleCanDeleteOrder(row.status)) {
          handleError('No permitido', 'Solo puedes eliminar órdenes en estado Borrador.');
          return;
        }
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      PurchaseOrderService.delete(numId)
        .then(() => {
          handleSuccess('Orden de compra eliminada exitosamente');
          this.handleGetData();
        })
        .catch((objError) => {
          handleError('Ocurrió un problema al eliminar la orden de compra', objError);
        });
    }
  }
};
</script>
