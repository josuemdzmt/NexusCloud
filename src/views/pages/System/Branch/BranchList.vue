<template>
  <main>
    <nx-list-view title="Sucursales" object="branch" @create="handleCreate">
      <nx-datatable object="branch" key-field="id" :data="lstBranches" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <!-- Formulario Modal Integrado -->
    <BranchForm ref="branchFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import BranchService from '@/services/system/BranchService';
import BranchForm from './BranchForm.vue';
import { STATUS_BADGE, ACTION_BUTTONS } from './BranchConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'BranchList',
  components: {
    BranchForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstBranches: [],
      lstColumns: [
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Teléfono', fieldName: 'phone', type: 'text', sortable: true },
        { label: 'Correo', fieldName: 'email', type: 'text', sortable: true },
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
      BranchService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstBranches = response.data || response;
      })
      .catch((error) => {
        console.error('Error fetching branches:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.branchFormRef) {
        this.$refs.branchFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.branchFormRef) {
          this.$refs.branchFormRef.handleOpen(row.id);
        }
      }
    }
  }
};
</script>
