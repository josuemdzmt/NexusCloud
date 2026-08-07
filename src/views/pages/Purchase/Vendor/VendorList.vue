<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Proveedores</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstVendors" 
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
    <VendorForm ref="vendorFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import VendorService from '@/services/purchasing/VendorService';
import VendorForm from '@/views/pages/Purchase/Vendor/VendorForm.vue';
import { handleError } from '@/utils/toastUtils';
import { ACCOUNT_TYPE_BADGE, IS_PERSON_BADGE, STATUS_BADGE, ACTION_BUTTONS } from './VendorConstants';
import { handleInitPager, handlePagerParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'VendorList',
  components: {
    VendorForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstVendors: [],
      lstColumns: [
        { label: 'Razón Social / Nombre', fieldName: 'legal_name', type: 'text', sortable: true },
        { label: 'RFC / Tax ID', fieldName: 'tax_id', type: 'text', sortable: true },
        { label: 'Tipo Cuenta', fieldName: 'account_type', type: 'badge', typeAttributes: ACCOUNT_TYPE_BADGE },
        { label: 'Tipo Persona', fieldName: 'is_person', type: 'badge', typeAttributes: IS_PERSON_BADGE },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: STATUS_BADGE },
        { label: 'Límite Crédito', fieldName: 'credit_limit', type: 'currency', sortable: true },
        { label: 'Días Crédito', fieldName: 'credit_days', type: 'text', sortable: true },
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
      VendorService.getAll(handlePagerParams(this.currentPage, this.pageSize))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstAccounts = Array.isArray(data) ? data : [];

          this.lstVendors = lstAccounts
            .filter((objItem) => VendorService.handleIsVendorAccount(objItem))
            .map((objItem) => {
              if (objItem.is_person) {
                objItem.legal_name = `${objItem.first_name || ''} ${objItem.last_name || ''} ${objItem.second_last_name || ''}`.trim();
              }
              objItem.account_type = objItem.account_type || objItem.accountType || 'Vendor';
              return objItem;
            });
        })
        .catch((objError) => {
          handleError('Ocurrió un problema al obtener los proveedores', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (this.$refs.vendorFormRef) {
        this.$refs.vendorFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'details') {
        this.$router.push(`/purchase/vendor/${row.id}/details`);
      } else if (action.name === 'edit') {
        if (this.$refs.vendorFormRef) {
          this.$refs.vendorFormRef.handleOpen(row.id);
        }
      }
    }
  }
};
</script>
