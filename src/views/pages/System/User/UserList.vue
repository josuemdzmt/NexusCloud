<template>
  <main>
    <nx-list-view title="Usuarios" object="user" @create="handleCreate">
      <nx-datatable object="user" key-field="id" :data="lstUsers" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>
    <UserForm ref="userFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import UserService from '@/services/system/UserService';
import UserForm from '@/views/pages/System/User/UserForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from './UserConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';
import { getUser, handleHasPermission, objSessionUser } from '@/services/auth/authSession';

export default {
  name: 'UserList',
  components: {
    UserForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstUsers: []
    };
  },
  computed: {
    lstColumns() {
      void objSessionUser.value;
      const lstActions = ACTION_BUTTONS.rowActions.filter((objAction) => {
        if (objAction.name === 'edit') return handleHasPermission('user.update');
        if (objAction.name === 'delete') return handleHasPermission('user.delete');
        return true;
      });
      const lstCols = [
        { label: 'Nombre', fieldName: 'fullName', type: 'text', sortable: true },
        { label: 'Correo', fieldName: 'email', type: 'text', sortable: true },
        { label: 'Puesto', fieldName: 'jobTitle', type: 'text' },
        { label: 'Perfil', fieldName: 'profileName', type: 'text' },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: STATUS_BADGE }
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
    handleMapRow(objRow) {
      const strFirst = objRow.firstName || '';
      const strLast = objRow.lastName || '';
      const strSecond = objRow.secondLastName || '';
      return {
        ...objRow,
        fullName: `${strFirst} ${strLast} ${strSecond}`.trim(),
        status: objRow.isActive ? 'Active' : 'Inactive'
      };
    },
    handleGetData() {
      this.bSpinner = true;
      UserService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;
          const lstRaw = Array.isArray(data) ? data : [];
          this.lstUsers = lstRaw.map((objRow) => this.handleMapRow(objRow));
        })
        .catch((objError) => {
          handleError('Error', 'No se pudieron cargar los usuarios', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (this.$refs.userFormRef) {
        this.$refs.userFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.userFormRef) {
          this.$refs.userFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(recordId) {
      if (Number(recordId) === Number(getUser()?.id)) {
        handleError('Error', 'No puedes eliminar tu propio usuario');
        return;
      }
      UserService.delete(recordId)
        .then(() => {
          handleSuccess('Eliminado', 'Usuario eliminado exitosamente');
          this.handleGetData();
        })
        .catch((objError) => {
          handleError('Error', 'No se pudo eliminar el usuario', objError);
        });
    }
  }
};
</script>
