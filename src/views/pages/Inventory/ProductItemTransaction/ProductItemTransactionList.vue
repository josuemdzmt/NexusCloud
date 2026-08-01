<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Ajuste de Stock</h1>
        <div class="flex items-center gap-2">
          <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>

      <nx-datatable
        key-field="id"
        :data="lstTransactions"
        :columns="lstColumns"
        :is-loading="bSpinner"
        :show-date-range="false"
        @rowaction="handleRowAction"
        @refresh="handleGetData"
      />

      <ProductItemTransactionForm ref="transactionFormRef" @success="handleGetData" />
    </div>
  </main>
</template>

<script>
import ProductItemTransactionService from '@/services/inventory/ProductItemTransactionService';
import ProductItemTransactionForm from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionForm.vue';
import { handleError } from '@/utils/toastUtils';
import { MOTIVO_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionConstants';

export default {
  name: 'ProductItemTransactionList',
  components: {
    ProductItemTransactionForm
  },
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstTransactions: [],
      lstColumns: [
        { label: 'ID', fieldName: 'adjustmentCode', type: 'text', sortable: true },
        { label: 'Producto', fieldName: 'productName', type: 'text', sortable: true },
        { label: 'SKU', fieldName: 'productSku', type: 'text', sortable: true },
        { label: 'Almacén', fieldName: 'locationName', type: 'text', sortable: true },
        { label: 'Cant. anterior', fieldName: 'quantityBefore', type: 'number', sortable: true },
        { label: 'Diferencia (+/−)', fieldName: 'quantityLabel', type: 'text', sortable: true },
        { label: 'Cant. actualizada', fieldName: 'quantityAfter', type: 'number', sortable: true },
        { label: 'Motivo', fieldName: 'reason', type: 'badge', typeAttributes: MOTIVO_BADGE },
        { label: 'Fecha ajuste', fieldName: 'adjustmentDateLabel', type: 'text', sortable: true },
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
      ProductItemTransactionService.getAll({
        include: 'productItem.product,productItem.location',
        per_page: 500,
        sort: '-created_at'
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstTransactions = this.handleMapTransactions(lstRaw);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener los ajustes', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleMapTransactions(lstRaw) {
      const objQtyByItem = {};
      lstRaw.forEach((objTx) => {
        const objItem = objTx.productItem || objTx.product_item || {};
        const recordId = objTx.productItemId ?? objTx.product_item_id ?? objItem.id;
        if (recordId && objQtyByItem[recordId] === undefined) {
          objQtyByItem[recordId] = Number(objItem.quantityOnHand ?? objItem.quantity_on_hand ?? 0) || 0;
        }
      });

      const lstSortedDesc = [...lstRaw].sort((objA, objB) => {
        const numA = new Date(objA.createdAt || objA.created_at || 0).getTime();
        const numB = new Date(objB.createdAt || objB.created_at || 0).getTime();
        return numB - numA;
      });

      const objRunning = { ...objQtyByItem };

      return lstSortedDesc.map((objTx) => {
        const objItem = objTx.productItem || objTx.product_item || {};
        const objProduct = objItem.product || {};
        const recordId = objTx.productItemId ?? objTx.product_item_id ?? objItem.id;
        const numQty = Number(objTx.quantity) || 0;
        const numAfter = recordId !== undefined && objRunning[recordId] !== undefined ? objRunning[recordId] : null;
        const numBefore = numAfter !== null ? numAfter - numQty : null;
        if (recordId !== undefined && objRunning[recordId] !== undefined) {
          objRunning[recordId] = numBefore;
        }

        return {
          ...objTx,
          adjustmentCode: `#ADJ${String(objTx.id).padStart(4, '0')}`,
          productName: objProduct.name || 'Desconocido',
          productSku: objProduct.sku || '—',
          locationName: objItem.location?.name || 'Desconocido',
          productItemId: recordId,
          productId: objItem.productId ?? objItem.product_id ?? objProduct.id ?? null,
          locationId: objItem.locationId ?? objItem.location_id ?? objItem.location?.id ?? null,
          quantityOnHand: objItem.quantityOnHand ?? objItem.quantity_on_hand ?? numAfter ?? 0,
          quantityBefore: numBefore,
          quantityLabel: numQty > 0 ? `+${numQty}` : String(numQty),
          quantityAfter: numAfter,
          adjustmentDateLabel: this.handleFormatDate(
            objTx.transactionDate || objTx.transaction_date || objTx.createdAt || objTx.created_at
          ),
          reason: this.handleResolveReason(objTx),
          transactionType: objTx.transactionType || objTx.transaction_type || ''
        };
      });
    },
    handleResolveReason(objTx) {
      const strReason = objTx.reason || '';
      if (strReason && !strReason.includes('\\')) return strReason;

      const strRelated = objTx.relatedRecordType || objTx.related_record_type || '';
      if (strRelated && !strRelated.includes('\\') && strRelated !== 'Manual') return strRelated;

      return objTx.transactionType || objTx.transaction_type || '—';
    },
    handleFormatDate(strDate) {
      if (!strDate) return '—';
      const objDate = new Date(strDate);
      if (Number.isNaN(objDate.getTime())) return strDate;
      return objDate.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
    },
    handleCreate() {
      if (this.$refs.transactionFormRef) {
        this.$refs.transactionFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'adjust') {
        if (!this.$refs.transactionFormRef) return;
        if (!row.productItemId) {
          handleError('Validación', 'No se pudo resolver la existencia de este movimiento');
          return;
        }
        this.$refs.transactionFormRef.handleOpen({
          id: row.productItemId,
          productId: row.productId,
          locationId: row.locationId,
          quantityOnHand: row.quantityOnHand
        });
      }
    }
  }
};
</script>
