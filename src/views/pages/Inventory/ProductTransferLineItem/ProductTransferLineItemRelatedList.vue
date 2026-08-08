<template>
  <div>
    <nx-datatable
      key-field="id"
      :data="lstLineItems"
      :columns="lstColumns"
      :is-loading="bSpinner"
      :show-date-range="false"
      @rowaction="handleRowAction"
      @search="handleSearch"
        @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
      </template>
    </nx-datatable>
  </div>
</template>

<script>
import ProductTransferLineItemService from '@/services/inventory/ProductTransferLineItemService';
import { TRANSFER_STATUS_BADGE } from '@/views/pages/Inventory/ProductTransfer/ProductTransferConstants';
import { handleError } from '@/utils/toastUtils';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

const ACTION_BUTTONS = {
  rowActions: [{ label: 'Detalles', name: 'details', icon: 'icon-eye' }]
};

export default {
  name: 'ProductTransferLineItemRelatedList',
  props: {
    productId: { type: [Number, String], required: true }
  },
  emits: ['refresh'],
  data() {
    return {
      ...handleInitPager(),
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstLineItems: [],
      lstColumns: [
        { label: 'Folio', fieldName: 'transferCode', type: 'text', sortable: true },
        { label: 'Almacén origen', fieldName: 'sourceLocationName', type: 'text', sortable: true },
        { label: 'Almacén destino', fieldName: 'destinationLocationName', type: 'text', sortable: true },
        { label: 'Cant. solicitada', fieldName: 'quantityRequested', type: 'number', sortable: true },
        { label: 'Cant. recibida', fieldName: 'quantityReceivedLabel', type: 'text', sortable: true },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: TRANSFER_STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: ACTION_BUTTONS }
      ]
    };
  },
  watch: {
    productId() {
      if (this.productId) this.handleGetData();
    }
  },
  mounted() {
    if (this.productId) this.handleGetData();
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
      if (!this.productId) return;
      this.bSpinner = true;
      ProductTransferLineItemService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch, {'filter[product_id]': this.productId,
        include: 'product,productTransfer,productTransfer.sourceLocation,productTransfer.destinationLocation'})))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          let lstRaw = Array.isArray(data) ? data : [];
          const numProductId = Number(this.productId);
          lstRaw = lstRaw.filter((objLine) => {
            const numLineProductId = Number(
              objLine.productId ?? objLine.product_id ?? objLine.product?.id ?? NaN
            );
            return numLineProductId === numProductId;
          });
          this.lstLineItems = lstRaw.map((objLine) => {
            const objTransfer = objLine.productTransfer || objLine.product_transfer || {};
            const numReceived = objLine.quantityReceived ?? objLine.quantity_received;
            const numTransferId = objTransfer.id ?? objLine.productTransferId ?? objLine.product_transfer_id;
            return {
              ...objLine,
              productTransferId: numTransferId,
              transferCode:
                objTransfer.transferNumber ||
                objTransfer.transfer_number ||
                (numTransferId ? `#PT${numTransferId}` : '—'),
              sourceLocationName:
                objTransfer.sourceLocation?.name || objTransfer.source_location?.name || '—',
              destinationLocationName:
                objTransfer.destinationLocation?.name || objTransfer.destination_location?.name || '—',
              quantityRequested: objLine.quantityRequested ?? objLine.quantity_requested ?? 0,
              quantityReceivedLabel: numReceived == null || numReceived === '' ? '—' : numReceived,
              status: objTransfer.status || '—'
            };
          });
          this.$emit('refresh', this.lstLineItems);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener los traspasos del producto', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'details' && row.productTransferId) {
        this.$router.push(`/inventory/product-transfer/${row.productTransferId}/details`);
      }
    }
  }
};
</script>
