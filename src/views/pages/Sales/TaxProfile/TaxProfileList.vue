<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Perfiles de Impuestos</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstTaxProfiles" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </div>

    <!-- Formulario Modal Integrado -->
    <TaxProfileForm ref="taxProfileFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import TaxProfileService from '@/services/sales/TaxProfileService';
import TaxProfileForm from './TaxProfileForm.vue';
import { IS_DEFAULT_BADGE, ACTION_BUTTONS } from './TaxProfileConstants';
import { handleInitPager, handlePagerParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'TaxProfileList',
  components: {
    TaxProfileForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstTaxProfiles: [],
      lstColumns: [
        { label: 'Razón Social', fieldName: 'legal_name', type: 'text', sortable: true },
        { label: 'RFC / Tax ID', fieldName: 'tax_id', type: 'text', sortable: true },
        { label: 'Régimen Fiscal', fieldName: 'tax_regime', type: 'text', sortable: true },
        { label: 'C.P.', fieldName: 'zip_code', type: 'text', sortable: true },
        { label: 'Predeterminado', fieldName: 'is_default', type: 'badge', typeAttributes: IS_DEFAULT_BADGE },
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

    handleGetData() {
      this.bSpinner = true;
      TaxProfileService.getAll(handlePagerParams(this.currentPage, this.pageSize))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstTaxProfiles = response.data || response;
      })
      .catch((error) => {
        console.error('Error fetching tax profiles:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.taxProfileFormRef) {
        this.$refs.taxProfileFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.taxProfileFormRef) {
          this.$refs.taxProfileFormRef.handleOpen(row.id);
        }
      }
    }
  }
};
</script>
