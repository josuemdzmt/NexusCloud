<template>
  <main>
    <nx-list-view title="Perfiles" object="profile" @create="handleCreate">
      <nx-datatable object="profile" key-field="id" :data="lstProfiles" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>
    <ProfileForm ref="profileFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import ProfileService from '@/services/system/ProfileService';
import ProfileForm from '@/views/pages/System/Profile/ProfileForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { ACTION_BUTTONS } from './ProfileConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';
import { handleHasPermission, objSessionUser } from '@/services/auth/authSession';

export default {
  name: 'ProfileList',
  components: {
    ProfileForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstProfiles: []
    };
  },
  computed: {
    lstColumns() {
      void objSessionUser.value;
      const lstActions = ACTION_BUTTONS.rowActions.filter((objAction) => {
        if (objAction.name === 'edit') return handleHasPermission('profile.update') || handleHasPermission('profile.read');
        if (objAction.name === 'delete') return handleHasPermission('profile.delete');
        return true;
      });
      const lstCols = [
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Usuarios', fieldName: 'usersCount', type: 'text' }
      ];
      if (lstActions.length) {
        lstCols.push({ label: 'Acción', type: 'action', typeAttributes: { rowActions: lstActions } });
      }
      return lstCols;
    }
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
      ProfileService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;
          this.lstProfiles = Array.isArray(data) ? data : [];
        })
        .catch((objError) => {
          handleError('Error', 'No se pudieron cargar los perfiles', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (this.$refs.profileFormRef) {
        this.$refs.profileFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.profileFormRef) {
          this.$refs.profileFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row);
      }
    },
    handleDelete(objRow) {
      if (objRow.isLocked) {
        handleError('Error', 'No se puede eliminar el perfil System Administrator');
        return;
      }
      if (Number(objRow.usersCount) > 0) {
        handleError('Error', 'No se puede eliminar un perfil asignado a usuarios');
        return;
      }
      ProfileService.delete(objRow.id)
        .then(() => {
          handleSuccess('Eliminado', 'Perfil eliminado exitosamente');
          this.handleGetData();
        })
        .catch((objError) => {
          handleError('Error', objError.response?.data?.message || 'No se pudo eliminar el perfil', objError);
        });
    }
  }
};
</script>
