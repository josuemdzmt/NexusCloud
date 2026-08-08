<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Organizaciones</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstOrgs" 
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

    <!-- Formulario Modal Integrado -->
    <OrgForm ref="orgFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import OrgService from '@/services/system/OrgService';
import OrgForm from './OrgForm.vue';
import { STATUS_BADGE, ACTION_BUTTONS } from './OrgConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'OrgList',
  components: {
    OrgForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstOrgs: [],
      lstColumns: [
        { label: 'Nombre Comercial', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Razón Social', fieldName: 'legal_name', type: 'text', sortable: true },
        { label: 'RFC', fieldName: 'tax_id', type: 'text', sortable: true },
        { label: 'Teléfono', fieldName: 'phone', type: 'text', sortable: true },
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
      OrgService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstOrgs = response.data || response;
      })
      .catch((error) => {
        console.error('Error fetching organizations:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.orgFormRef) {
        this.$refs.orgFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.orgFormRef) {
          this.$refs.orgFormRef.handleOpen(row.id);
        }
      }
    }
  }
};
</script>
