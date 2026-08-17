<template>
  <main>
    <nx-list-view title="Precios de Productos" object="pricebook" @create="handleCreate">
      <nx-datatable object="pricebook" key-field="id" :data="lstEntries" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>
    <PricebookEntryForm ref="pricebookEntryFormRef" @refresh="handleGetData" />
  </main>
</template>

<script>
import PricebookEntryForm from './PricebookEntryForm.vue';
import PricebookEntryService from '@/services/sales/PricebookEntryService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Sales/PricebookEntry/PricebookEntryConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'PricebookEntryList',
  components: {
    PricebookEntryForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstEntries: [],
      lstColumns: [
        { label: 'Producto', fieldName: 'productName', type: 'text' },
        { label: 'Lista de Precios', fieldName: 'pricebookName', type: 'text' },
        { label: 'Moneda', fieldName: 'currencyName', type: 'text' },
        { label: 'Precio', fieldName: 'unitPrice', type: 'currency' },
        { label: 'Estado', fieldName: 'isActive', type: 'badge', typeAttributes: STATUS_BADGE },
        { label: 'Acciones', type: 'action', align: 'right', typeAttributes: ACTION_BUTTONS }
      ]
    };
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
      this.bSpinner = true;
      PricebookEntryService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch, {include: 'product,pricebook,currency'})))
        .then((response) => {
          const { data, current_page, last_page } = handleParseList(response, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          this.lstEntries = data.map(objEntry => ({
            ...objEntry,
            productName: objEntry.product ? objEntry.product.name : 'Desconocido',
            pricebookName: objEntry.pricebook ? objEntry.pricebook.name : 'Desconocido',
            currencyName: objEntry.currency ? objEntry.currency.iso_code : 'N/A'
          }));
        })
        .catch((error) => {
          handleError('Ocurrió un problema al obtener los precios de productos', error);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (this.$refs.pricebookEntryFormRef) {
        this.$refs.pricebookEntryFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.pricebookEntryFormRef) {
          this.$refs.pricebookEntryFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      PricebookEntryService.delete(numId)
        .then(() => {
          handleSuccess('Precio eliminado exitosamente');
          this.handleGetData();
        })
        .catch((error) => {
          handleError('Ocurrió un problema al eliminar el precio', error);
        });
    }
  }
};
</script>
