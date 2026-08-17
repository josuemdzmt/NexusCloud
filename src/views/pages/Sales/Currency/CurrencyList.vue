<template>
  <main>
    <nx-list-view title="Monedas" object="currency" @create="handleCreate">
      <nx-datatable object="currency" key-field="id" :data="lstCurrencies" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <!-- Formulario Modal Integrado -->
    <CurrencyForm ref="currencyFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import CurrencyService from '@/services/sales/CurrencyService';
import CurrencyForm from '@/views/pages/Sales/Currency/CurrencyForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, IS_DEFAULT_BADGE, ACTION_BUTTONS } from './CurrencyConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'CurrencyList',
  components: {
    CurrencyForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstCurrencies: [],
      lstColumns: [
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código ISO', fieldName: 'iso_code', type: 'text', sortable: true },
        { label: 'Símbolo', fieldName: 'symbol', type: 'text' },
        { label: 'Predeterminado', fieldName: 'is_default', type: 'badge', typeAttributes: IS_DEFAULT_BADGE },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: ACTION_BUTTONS }
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
      CurrencyService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstCurrencies = (Array.isArray(data) ? data : []).map((objCurrency) => ({
          ...objCurrency,
          is_default: Boolean(objCurrency.is_default ?? objCurrency.isDefault)
        }));
      })
      .catch((error) => {
        console.error('Error fetching currencies:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.currencyFormRef) {
        this.$refs.currencyFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.currencyFormRef) {
          this.$refs.currencyFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      CurrencyService.delete(numId)
      .then(() => {
        handleSuccess('Eliminada', 'Moneda eliminada exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar la moneda');
        console.error('Error deleting currency:', error);
      });
    }
  }
};
</script>
