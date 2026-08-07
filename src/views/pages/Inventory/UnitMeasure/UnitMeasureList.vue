<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Unidades de Medida</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstUnitMeasures" 
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
    <UnitMeasureForm ref="unitMeasureFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import UnitMeasureService from '@/services/inventory/UnitMeasureService';
import UnitMeasureForm from '@/views/pages/Inventory/UnitMeasure/UnitMeasureForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/UnitMeasure/UnitMeasureConstants';
import { handleInitPager, handlePagerParams, handleParseList } from '@/utils/listPaginationUtils';

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

    handleGetData() {
      this.bSpinner = true;
      UnitMeasureService.getAll(handlePagerParams(this.currentPage, this.pageSize))
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
