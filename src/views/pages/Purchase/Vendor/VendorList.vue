<template>
  <main>
    <nx-list-view title="Proveedores" object="account" @create="handleCreate">
      <nx-datatable object="account" key-field="id" :data="lstVendors" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <!-- Formulario Modal Integrado -->
    <VendorForm ref="vendorFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import VendorService from '@/services/purchasing/VendorService';
import VendorForm from '@/views/pages/Purchase/Vendor/VendorForm.vue';
import { handleError } from '@/utils/toastUtils';
import { ACCOUNT_TYPE_BADGE, IS_PERSON_BADGE, STATUS_BADGE, ACTION_BUTTONS } from './VendorConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

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
    handleSearch(objEvent) {
      this.strSearch = objEvent.detail.value || '';
      this.currentPage = 1;
      this.handleGetData();
    },

    handleGetData() {
      this.bSpinner = true;
      VendorService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
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
      if (action.name === 'detail') {
        this.$router.push(`/purchase/vendor/${row.id}/detail`);
      } else if (action.name === 'edit') {
        if (this.$refs.vendorFormRef) {
          this.$refs.vendorFormRef.handleOpen(row.id);
        }
      }
    }
  }
};
</script>
