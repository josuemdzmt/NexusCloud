<template>
  <main>
    <nx-list-view title="Listas de Precios" object="pricebook" @create="handleCreate">
      <nx-datatable object="pricebook" key-field="id" :data="lstPricebooks" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>
    <PricebookForm ref="pricebookFormRef" @refresh="handleGetData" />
  </main>
</template>

<script>
import PricebookForm from '@/views/pages/Sales/Pricebook/PricebookForm.vue';
import PricebookService from '@/services/sales/PricebookService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, YES_NO_BADGE, ACTION_BUTTONS } from '@/views/pages/Sales/Pricebook/PricebookConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'PricebookList',
  components: {
    PricebookForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstPricebooks: [],
      lstColumns: [
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        { label: 'Descripción', fieldName: 'description', type: 'text' },
        { label: 'Estándar', fieldName: 'isStandard', type: 'badge', typeAttributes: YES_NO_BADGE },
        { label: 'Estado', fieldName: 'isActive', type: 'badge', typeAttributes: STATUS_BADGE },
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
      PricebookService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          this.lstPricebooks = data.data || data;
        })
        .catch((error) => {
          handleError('Ocurrió un problema al obtener las listas de precios', error);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (this.$refs.pricebookFormRef) {
        this.$refs.pricebookFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'detail') {
        this.$router.push(`/system/pricebook/${row.id}/detail`);
      } else if (action.name === 'edit') {
        if (this.$refs.pricebookFormRef) {
          this.$refs.pricebookFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      PricebookService.delete(numId)
        .then(() => {
          handleSuccess('Lista de precios eliminada exitosamente');
          this.handleGetData();
        })
        .catch((error) => {
          handleError('Ocurrió un problema al eliminar la lista de precios', error);
        });
    }
  }
};
</script>
