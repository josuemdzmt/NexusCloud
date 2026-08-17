<template>
  <main>
    <nx-list-view title="Marcas" object="product" @create="handleCreate">
      <nx-datatable object="product" key-field="id" :data="lstBrands" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <!-- Formulario Modal Integrado -->
    <BrandForm ref="brandFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import BrandService from '@/services/inventory/BrandService';
import BrandForm from '@/views/pages/Inventory/Brand/BrandForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/Brand/BrandConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'BrandList',
  components: {
    BrandForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstBrands: [],
      lstColumns: [
        { label: 'Marca', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
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
      BrandService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstBrands = data;
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.brandFormRef) {
        this.$refs.brandFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.brandFormRef) {
          this.$refs.brandFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      BrandService.delete(numId)
      .then(() => {
        handleSuccess('Eliminado', 'Marca eliminada exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar la marca');
        console.error('Error deleting brand:', error);
      });
    }
  }
};
</script>
