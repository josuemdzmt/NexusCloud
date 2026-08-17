<template>
  <main>
    <nx-list-view title="Almacenes" object="location" @create="handleCreate">
      <nx-datatable object="location" key-field="id" :data="lstLocations" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <!-- Formulario Modal Integrado -->
    <LocationForm ref="locationFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import LocationService from '@/services/inventory/LocationService';
import LocationForm from '@/views/pages/Inventory/Location/LocationForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { LOCATION_TYPE_BADGE, BOOLEAN_BADGE, STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/Location/LocationConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'LocationList',
  components: {
    LocationForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstLocations: [],
      lstColumns: [
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Tipo', fieldName: 'location_type', type: 'badge', typeAttributes: LOCATION_TYPE_BADGE },
        { label: 'Móvil', fieldName: 'is_mobile', type: 'badge', typeAttributes: BOOLEAN_BADGE },
        { label: 'Inventariable', fieldName: 'is_inventory_location', type: 'badge', typeAttributes: BOOLEAN_BADGE },
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
      LocationService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstLocations = data;
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.locationFormRef) {
        this.$refs.locationFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'detail') {
        this.$router.push(`/inventory/location/${row.id}/detail`);
      } else if (action.name === 'edit') {
        if (this.$refs.locationFormRef) {
          this.$refs.locationFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(id) {
      LocationService.delete(id)
      .then(() => {
        handleSuccess('Eliminado', 'Almacén eliminado exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar el almacén');
        console.error('Error deleting location:', error);
      });
    }
  }
};
</script>
