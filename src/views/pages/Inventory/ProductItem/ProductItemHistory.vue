<template>
  <div>
    <button :id="strModalId + '-trigger-btn'" :data-hs-overlay="'#' + strModalId" data-hs-overlay-keyboard="false" class="hidden"></button>
    <nx-modal :id="strModalId" size="3xl">
      <nx-modal-header label="Historial" />
      <nx-modal-body>
        <div class="bg-light rounded-md p-5 mb-1 flex items-center justify-between gap-3 flex-wrap">
          <h3 class="text-sm font-semibold flex flex-col gap-1 mb-0">
            {{ strProductName }}
            <span class="text-sm text-default font-normal">{{ strProductCode }} · {{ strLocationName }}</span>
          </h3>
          <div class="flex items-center justify-end gap-3">
            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer" @click="handlePrint">
              <i class="ph-duotone ph-printer"></i> Imprimir
            </button>
          </div>
        </div>

        <nx-datatable
          key-field="id"
          :data="lstTransactions"
          :columns="lstColumns"
          :is-loading="bSpinner"
          :hide-checkbox-column="true"
          :show-search="false"
          :show-date-range="false"
          @refresh="handleGetData"
        />
      </nx-modal-body>
    </nx-modal>
  </div>
</template>

<script>
import ProductItemTransactionService from '@/services/inventory/ProductItemTransactionService';
import { MOTIVO_BADGE } from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionConstants';
import { handleError } from '@/utils/toastUtils';

export default {
  name: 'ProductItemHistory',
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 2. Números / IDs
      recordId: null,
      numQuantityOnHand: 0,

      // 3. Cadenas
      strModalId: 'product-item-history-modal',
      strProductName: '',
      strProductCode: '',
      strLocationName: '',
      strUnitName: '—',

      // 5. Listas
      lstTransactions: [],
      lstColumns: [
        { label: 'Fecha', fieldName: 'dateLabel', type: 'text', sortable: true },
        { label: 'Unidad', fieldName: 'unitName', type: 'text' },
        { label: 'Cantidad', fieldName: 'quantityLabel', type: 'text', sortable: true },
        { label: 'Stock después', fieldName: 'stockAfter', type: 'number', sortable: true },
        { label: 'Motivo', fieldName: 'transactionType', type: 'badge', typeAttributes: MOTIVO_BADGE }
      ]
    };
  },
  methods: {
    /**
     * @param {Object} objProductItem - Fila de existencia
     */
    handleOpen(objProductItem) {
      if (!objProductItem?.id) return;

      this.recordId = objProductItem.id;
      this.numQuantityOnHand = objProductItem.quantityOnHand ?? objProductItem.quantity_on_hand ?? 0;
      this.strProductName = objProductItem.productName || objProductItem.product?.name || 'Producto';
      this.strProductCode = objProductItem.productCode || (objProductItem.product?.code ? `#${objProductItem.product.code}` : `#${objProductItem.id}`);
      this.strLocationName = objProductItem.locationName || objProductItem.location?.name || 'Almacén';
      this.strUnitName =
        objProductItem.product?.unitMeasure?.name || '—';
      this.lstTransactions = [];

      this.handleOpenModal();
      this.handleGetData();
    },
    handleOpenModal() {
      setTimeout(() => {
        const elTrigger = document.getElementById(this.strModalId + '-trigger-btn');
        if (elTrigger) {
          elTrigger.click();
        }
      }, 50);
    },
    handleClose() {
      const elModal = document.getElementById(this.strModalId);
      const elCloseBtn = elModal ? elModal.querySelector('[data-hs-overlay]') : null;
      if (elCloseBtn) {
        elCloseBtn.click();
      } else if (window.HSOverlay) {
        window.HSOverlay.close('#' + this.strModalId);
      }
    },
    handleGetData() {
      if (!this.recordId) return;

      this.bSpinner = true;
      ProductItemTransactionService.getAll({
        'filter[product_item_id]': this.recordId,
        per_page: 500,
        sort: '-created_at'
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstTransactions = this.handleMapTransactions(lstRaw);
        })
        .catch((objError) => handleError('Error', 'No se pudo cargar el historial', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleMapTransactions(lstRaw) {
      const lstSortedDesc = [...lstRaw].sort((objA, objB) => {
        const numA = new Date(objA.createdAt || objA.created_at || 0).getTime();
        const numB = new Date(objB.createdAt || objB.created_at || 0).getTime();
        return numB - numA;
      });

      let numRunning = Number(this.numQuantityOnHand) || 0;

      return lstSortedDesc.map((objTx) => {
        const numQty = Number(objTx.quantity) || 0;
        const numStockAfter = numRunning;
        numRunning -= numQty;

        return {
          ...objTx,
          unitName: this.strUnitName,
          quantityLabel: numQty > 0 ? `+${numQty}` : String(numQty),
          stockAfter: numStockAfter,
          transactionType: objTx.transactionType || objTx.transaction_type || '',
          dateLabel: this.handleFormatDate(objTx.createdAt || objTx.created_at)
        };
      });
    },
    handleFormatDate(strDate) {
      if (!strDate) return '—';
      const objDate = new Date(strDate);
      if (Number.isNaN(objDate.getTime())) return strDate;
      return objDate.toLocaleString('es-MX', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    handlePrint() {
      window.print();
    }
  }
};
</script>
