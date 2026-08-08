<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Bancos</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable
        key-field="id"
        :data="lstBanks"
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
