import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Antd from "ant-design-vue";
import VueApexCharts from "vue3-apexcharts";
import Vue3Select from 'vue3-select-component'
import VueECharts from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GaugeChart } from "echarts/charts";
import {
  TooltipComponent,
  TitleComponent,
} from "echarts/components";

import 'preline'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/icons/lucide/lucide.css'
import '@/assets/icons/iconoir/css/iconoir.css'
import '@/assets/icons/phosphor-icons/duotone/style.css'
import '@/assets/icons/phosphor-icons/regular/style.css'
import '@/assets/icons/phosphor-icons/fill/style.css'
import '@/assets/icons/icons-webfont/tabler-icons.css'
import '@/assets/css/main.css'
import '@/assets/css/style.css'
import '@/assets/css/vue.css'

// ---------- Layouts Components ---------- //

import LayoutsHeader from './views/layouts/layouts-header.vue';
import LayoutsSidebar from './views/layouts/layouts-sidebar.vue';
import SidebarMenu from './views/layouts/sidebar-menu.vue';
import CommonFooter from './views/layouts/common-footer.vue';
import PosHeader from './views/layouts/pos-header.vue';

// ---------- Nexus UI Components ---------- //
import NXDataTable from './components/nexus/NX-DataTable.vue';
import NXCombobox from './components/nexus/NX-Combobox.vue';
import NXFormPage from './components/nexus/NX-FormPage.vue';
import NXModal from './components/nexus/NX-Modal.vue';
import NXModalHeader from './components/nexus/NX-ModalHeader.vue';
import NXModalBody from './components/nexus/NX-ModalBody.vue';
import NXModalFooter from './components/nexus/NX-ModalFooter.vue';
import NXModalForm from './components/nexus/NX-ModalForm.vue';

// ---------- Modal Components ---------- //

import InventoryDashboardModal from './components/modal/inventory-dashboard-modal.vue';
import FileManagerModal from './components/modal/file-manager-modal.vue';
import NotesModal from './components/modal/notes-modal.vue';
import TodoModal from './components/modal/todo-modal.vue';
import WorkflowModal from './components/modal/workflow-modal.vue';
import ProductsModal from './components/modal/products-modal.vue';
import CategoriesModal from './components/modal/categories-modal.vue';
import BrandsModal from './components/modal/brands-modal.vue';
import UnitsModal from './components/modal/units-modal.vue';
import InventoryModal from './components/modal/inventory-modal.vue';
import SuppliersModal from './components/modal/suppliers-modal.vue';
import WarehouseModal from './components/modal/warehouse-modal.vue';
import ManageStockModal from './components/modal/manage-stock-modal.vue';
import StockAdjustmentModal from './components/modal/stock-adjustment-modal.vue';
import StockTransferModal from './components/modal/stock-transfer-modal.vue';
import CustomersModal from './components/modal/customers-modal.vue';
import RefundModal from './components/modal/refund-modal.vue';
import VendorsModal from './components/modal/vendors-modal.vue';
import ExpensesModal from './components/modal/expenses-modal.vue';
import ExpenseCategoryModal from './components/modal/expense-category-modal.vue';
import BudgetingModal from './components/modal/budgeting-modal.vue';
import CashflowModal from './components/modal/cashflow-modal.vue';
import PaymentsModal from './components/modal/payments-modal.vue';
import TaxesModal from './components/modal/taxes-modal.vue';
import LeaveTypeModal from './components/modal/leave-type-modal.vue';
import LeaveModal from './components/modal/leave-modal.vue';
import DepartmentModal from './components/modal/department-modal.vue';
import DesignationsRolesModal from './components/modal/designations-roles-modal.vue';
import HolidaysModal from './components/modal/holidays-modal.vue';
import PerformanceApprisalModal from './components/modal/performance-apprisal-modal.vue';
import TrainingDevelopmentModal from './components/modal/training-development-modal.vue';
import ContactsGridModal from './components/modal/contacts-grid-modal.vue';
import ContactDetailsModal from './components/modal/contact-details-modal.vue';
import CampaignsModal from './components/modal/campaigns-modal.vue';
import DealDetailsModal from './components/modal/deal-details-modal.vue';
import DealGridModal from './components/modal/deal-grid-modal.vue';
import LeadDetailsModal from './components/modal/lead-details-modal.vue';
import LeadGridModal from './components/modal/lead-grid-modal.vue';
import PipelineModal from './components/modal/pipeline-modal.vue';
import MilestonesModal from './components/modal/milestones-modal.vue';
import ProjectsGridModal from './components/modal/projects-grid-modal.vue';
import ResourceAllocationModal from './components/modal/resource-allocation-modal.vue';
import TasksGridModal from './components/modal/tasks-grid-modal.vue';
import TasksModal from './components/modal/tasks-modal.vue';
import TimesheetModal from './components/modal/timesheet-modal.vue';
import QrCodePrintModal from './components/modal/qr-code-print-modal.vue';
import AssetRegisterModal from './components/modal/asset-register-modal.vue';
import AssignmentsModal from './components/modal/assignments-modal.vue';
import DisposalModal from './components/modal/disposal-modal.vue';
import MaintenanceModal from './components/modal/maintenance-modal.vue';
import AssetAnalyticsModal from './components/modal/asset-analytics-modal.vue';
import ContactMessagesModal from './components/modal/contact-messages-modal.vue';
import TicketsModal from './components/modal/tickets-modal.vue';
import SlaManagementModal from './components/modal/sla-management-modal.vue';
import MembershipAddonsModal from './components/modal/membership-addons-modal.vue';
import UserManagementModal from './components/modal/user-management-modal.vue';
import RolesPermissionsModal from './components/modal/roles-permissions-modal.vue';
import DeleteRequestsModal from './components/modal/delete-requests-modal.vue';
import SecuritySettingsModal from './components/modal/security-settings-modal.vue';
import SupportDashboardModal from './components/modal/support-dashboard-modal.vue';
import CalendarModal from './components/modal/calendar-modal.vue';

const app = createApp(App)

// ---------- Layouts Components ---------- //

app.component('layouts-header', LayoutsHeader)
app.component('layouts-sidebar', LayoutsSidebar)
app.component('sidebar-menu', SidebarMenu)
app.component('common-footer', CommonFooter)
app.component('pos-header', PosHeader)

// ---------- Modal Components ---------- //

app.component('inventory-dashboard-modal', InventoryDashboardModal)
app.component('file-manager-modal', FileManagerModal)
app.component('notes-modal', NotesModal)
app.component('todo-modal', TodoModal)
app.component('workflow-modal', WorkflowModal)
app.component('products-modal', ProductsModal)
app.component('categories-modal', CategoriesModal)
app.component('brands-modal', BrandsModal)
app.component('units-modal', UnitsModal)
app.component('inventory-modal', InventoryModal)
app.component('supplier-modal', SuppliersModal)
app.component('warehouse-modal', WarehouseModal)
app.component('manage-stock-modal', ManageStockModal)
app.component('stock-adjustment-modal', StockAdjustmentModal)
app.component('stock-transfer-modal', StockTransferModal)
app.component('customers-modal', CustomersModal)
app.component('refund-modal', RefundModal)
app.component('vendors-modal', VendorsModal)
app.component('expenses-modal', ExpensesModal)
app.component('expense-category-modal', ExpenseCategoryModal)
app.component('budgeting-modal', BudgetingModal)
app.component('cashflow-modal', CashflowModal)
app.component('payments-modal', PaymentsModal)
app.component('taxes-modal', TaxesModal)
app.component('leave-type-modal', LeaveTypeModal)
app.component('leave-modal', LeaveModal)
app.component('department-modal', DepartmentModal)
app.component('designations-roles-modal', DesignationsRolesModal)
app.component('holidays-modal', HolidaysModal)
app.component('performance-apprisal-modal', PerformanceApprisalModal)
app.component('training-development-modal', TrainingDevelopmentModal)
app.component('contacts-grid-modal', ContactsGridModal)
app.component('contact-details-modal', ContactDetailsModal)
app.component('campaigns-modal', CampaignsModal)
app.component('deal-details-modal', DealDetailsModal)
app.component('deal-grid-modal', DealGridModal)
app.component('lead-details-modal', LeadDetailsModal)
app.component('lead-grid-modal', LeadGridModal)
app.component('pipeline-modal', PipelineModal)
app.component('milestones-modal', MilestonesModal)
app.component('projects-grid-modal', ProjectsGridModal)
app.component('resource-allocation-modal', ResourceAllocationModal)
app.component('tasks-grid-modal', TasksGridModal)
app.component('tasks-modal', TasksModal)
app.component('timesheet-modal', TimesheetModal)
app.component('qr-code-print-modal', QrCodePrintModal)
app.component('asset-register-modal', AssetRegisterModal)
app.component('assignments-modal', AssignmentsModal)
app.component('disposal-modal', DisposalModal)
app.component('maintenance-modal', MaintenanceModal)
app.component('asset-analytics-modal', AssetAnalyticsModal)
app.component('contact-messages-modal', ContactMessagesModal)
app.component('tickets-modal', TicketsModal)
app.component('sla-management-modal', SlaManagementModal)
app.component('membership-addons-modal', MembershipAddonsModal)
app.component('user-management-modal', UserManagementModal)
app.component('roles-permissions-modal', RolesPermissionsModal)
app.component('delete-requests-modal', DeleteRequestsModal)
app.component('security-settings-modal', SecuritySettingsModal)
app.component('support-dashboard-modal', SupportDashboardModal)
app.component('calendar-modal', CalendarModal)

use([
  CanvasRenderer,
  GaugeChart,
  TooltipComponent,
  TitleComponent,
]);
app.component('vue3-select', Vue3Select);
app.component('nx-datatable', NXDataTable);
app.component('nx-combobox', NXCombobox);
app.component('nx-form-page', NXFormPage);
app.component('nx-modal', NXModal);
app.component('nx-modal-header', NXModalHeader);
app.component('nx-modal-body', NXModalBody);
app.component('nx-modal-footer', NXModalFooter);
app.component('nx-modal-form', NXModalForm);
app.component("v-chart", VueECharts);
app.use(VueApexCharts);
app.use(Antd)
app.use(router).mount('#app'); 
