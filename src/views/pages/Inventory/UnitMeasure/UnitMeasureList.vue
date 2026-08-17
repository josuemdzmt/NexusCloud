<template>
  <main>
    <nx-list-view title="Unidades de Medida" object="product" @create="handleCreate">
      <nx-datatable object="product" key-field="id" :data="lstUnitMeasures" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <!-- Formulario Modal Integrado -->
    <UnitMeasureForm ref="unitMeasureFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import UnitMeasureService from '@/services/inventory/UnitMeasureService';
import UnitMeasureForm from '@/views/pages/Inventory/UnitMeasure/UnitMeasureForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/UnitMeasure/UnitMeasureConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'UnitMeasureList',
  components: {
    UnitMeasureForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstUnitMeasures: [],
      lstColumns: [
        { label: 'Unidad de Medida', fieldName: 'name', type: 'text', sortable: true },
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
      UnitMeasureService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstUnitMeasures = data;
      })
      .catch((error) => {
        console.error('Error fetching unit measures:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.unitMeasureFormRef) {
        this.$refs.unitMeasureFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.unitMeasureFormRef) {
          this.$refs.unitMeasureFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(id) {
      UnitMeasureService.delete(id)
      .then(() => {
        handleSuccess('Eliminado', 'Unidad de medida eliminada exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar la unidad de medida');
        console.error('Error deleting unit measure:', error);
      });
    }
  }
};
</script>
