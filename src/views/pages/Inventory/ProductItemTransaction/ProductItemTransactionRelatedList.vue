<template>
  <div>
    <div class="flex justify-end mb-3">
      <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
        <i class="ph ph-plus"></i> {{ strCreateLabel }}
      </button>
    </div>
    <nx-datatable
      key-field="id"
      :data="lstTransactions"
      :columns="lstVisibleColumns"
      :is-loading="bSpinner"
      :show-date-range="false"
      @rowaction="handleRowAction"
      @refresh="handleGetData"
    />
    <ProductItemTransactionForm ref="transactionFormRef" @success="handleGetData" />
  </div>
</template>

<script>
import ProductItemService from '@/services/inventory/ProductItemService';
import ProductItemTransactionService from '@/services/inventory/ProductItemTransactionService';
import ProductItemTransactionForm from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionForm.vue';
import { handleError } from '@/utils/toastUtils';
import { MOTIVO_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionConstants';

export default {
  name: 'ProductItemTransactionRelatedList',
  components: {
    ProductItemTransactionForm
  },
  props: {
    productItemId: { type: [Number, String], default: null },
    locationId: { type: [Number, String], default: null },
    productId: { type: [Number, String], default: null }
  },
  emits: ['refresh'],
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
  computed: {
    bFilteredByProductItem() {
      return this.productItemId != null && this.productItemId !== '';
    },
    bFilteredByLocation() {
      return this.locationId != null && this.locationId !== '';
    },
    bFilteredByProduct() {
      return this.productId != null && this.productId !== '';
    },
    strCreateLabel() {
      if (this.bFilteredByLocation || this.bFilteredByProduct || this.bFilteredByProductItem) return 'Nuevo movimiento';
      return 'Nuevo registro';
    },
    lstVisibleColumns() {
      let lstCols = this.lstColumns;
      if (this.bFilteredByLocation || this.bFilteredByProductItem) {
        lstCols = lstCols.filter((objCol) => objCol.fieldName !== 'locationName');
      }
      if (this.bFilteredByProduct || this.bFilteredByProductItem) {
        lstCols = lstCols.filter((objCol) => objCol.fieldName !== 'productName' && objCol.fieldName !== 'productSku');
      }
      return lstCols;
    }
  },
  watch: {
    productItemId() {
      this.handleWatchFilters();
    },
    locationId() {
      this.handleWatchFilters();
    },
    productId() {
      this.handleWatchFilters();
    }
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    handleWatchFilters() {
      if (this.bFilteredByProductItem && !this.productItemId) return;
      if (this.bFilteredByLocation && !this.locationId) return;
      if (this.bFilteredByProduct && !this.productId) return;
      this.handleGetData();
    },
    handleLedgerParams(numProductItemId) {
      return {
        'filter[product_item_id]': numProductItemId,
        include: 'productItem.product,productItem.location',
        per_page: 500,
        sort: '-created_at'
      };
    },
    handleGetData() {
      this.bSpinner = true;

      // Bin conocido → kardex directo
      if (this.bFilteredByProductItem) {
        this.handleGetLedgerByProductItemIds([Number(this.productItemId)])
          .finally(() => {
            this.bSpinner = false;
          });
        return;
      }

      // Filtro por almacén / producto → resolver ProductItem(s) primero
      if (this.bFilteredByLocation || this.bFilteredByProduct) {
        this.handleResolveProductItemIds()
          .then((lstIds) => {
            if (!lstIds.length) {
              this.lstTransactions = [];
              this.$emit('refresh', this.lstTransactions);
              return;
            }
            return this.handleGetLedgerByProductItemIds(lstIds);
          })
          .catch((objError) => handleError('Ocurrió un problema al obtener las existencias', objError))
          .finally(() => {
            this.bSpinner = false;
          });
        return;
      }

      // Listado global de movimientos (sin filtros de bin)
      ProductItemTransactionService.getAll({
        include: 'productItem.product,productItem.location',
        per_page: 500,
        sort: '-created_at'
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstTransactions = this.handleMapTransactions(lstRaw);
          this.$emit('refresh', this.lstTransactions);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener los ajustes', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleResolveProductItemIds() {
      const objParams = {
        include: 'product,location',
        per_page: 500
      };
      if (this.bFilteredByLocation) {
        objParams['filter[location_id]'] = this.locationId;
      }
      if (this.bFilteredByProduct) {
        objParams['filter[product_id]'] = this.productId;
      }

      return ProductItemService.getAll(objParams).then((objResponse) => {
        const lstData = objResponse.data || objResponse;
        let lstRaw = Array.isArray(lstData) ? lstData : [];

        if (this.bFilteredByLocation) {
          const numLocationId = Number(this.locationId);
          lstRaw = lstRaw.filter((objItem) => {
            const numItemLocationId = Number(objItem.locationId ?? objItem.location_id ?? objItem.location?.id ?? NaN);
            return !numItemLocationId || numItemLocationId === numLocationId;
          });
        }
        if (this.bFilteredByProduct) {
          const numProductId = Number(this.productId);
          lstRaw = lstRaw.filter((objItem) => {
            const numItemProductId = Number(objItem.productId ?? objItem.product_id ?? objItem.product?.id ?? NaN);
            return !numItemProductId || numItemProductId === numProductId;
          });
        }

        return lstRaw.map((objItem) => Number(objItem.id)).filter((numId) => !!numId);
      });
    },
    handleGetLedgerByProductItemIds(lstIds) {
      return Promise.all(
        lstIds.map((numId) =>
          ProductItemTransactionService.getAll(this.handleLedgerParams(numId)).then((objResponse) => {
            const lstData = objResponse.data || objResponse;
            return Array.isArray(lstData) ? lstData : [];
          })
        )
      )
        .then((lstGrouped) => {
          const lstRaw = lstGrouped.flat();
          this.lstTransactions = this.handleMapTransactions(lstRaw);
          this.$emit('refresh', this.lstTransactions);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener los ajustes', objError));
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
      if (!this.$refs.transactionFormRef) return;
      const objContext = {};
      if (this.bFilteredByLocation) objContext.locationId = Number(this.locationId);
      if (this.bFilteredByProduct) objContext.productId = Number(this.productId);
      if (this.bFilteredByProductItem) objContext.id = Number(this.productItemId);
      if (Object.keys(objContext).length) {
        this.$refs.transactionFormRef.handleOpen(objContext);
        return;
      }
      this.$refs.transactionFormRef.handleOpen();
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
