<template>
  <main>
    <nx-list-view title="Bancos" object="bank" @create="handleCreate">
      <nx-datatable object="bank" key-field="id" :data="lstBanks" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <BankForm ref="bankFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import BankService from '@/services/sales/BankService';
import BankForm from '@/views/pages/Sales/Bank/BankForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from './BankConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'BankList',
  components: {
    BankForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstBanks: [],
      lstColumns: [
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        { label: 'Descripción', fieldName: 'description', type: 'text' },
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
      BankService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          this.lstBanks = Array.isArray(data) ? data : [];
        })
        .catch((objError) => {
          handleError('Error', 'No se pudieron cargar los bancos', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (this.$refs.bankFormRef) {
        this.$refs.bankFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.bankFormRef) {
          this.$refs.bankFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(recordId) {
      BankService.delete(recordId)
        .then(() => {
          handleSuccess('Eliminado', 'Banco eliminado exitosamente');
          this.handleGetData();
        })
        .catch((objError) => {
          handleError('Error', 'No se pudo eliminar el banco', objError);
        });
    }
  }
};
</script>
