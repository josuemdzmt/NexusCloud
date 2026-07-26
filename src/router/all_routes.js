export const all_routes = {

  // Dashboard pages

  hrmDashboard: '/dashboard/hrm-dashboard',
  inventoryDashboard: '/dashboard/inventory-dashboard',
  crmDashboard: '/dashboard/crm-dashboard',
  posDashboard: '/dashboard/pos-dashboard',
  financeDashboard: '/dashboard/finance-dashboard',
  salesDashboard: '/dashboard/sales-dashboard',
  procurementDashboard: '/dashboard/procurement-dashboard',
  projectDashboard: '/dashboard/project-dashboard',
  supportDashboard: '/dashboard/support-dashboard',

  // Applications

  chat: '/applications/chat',
  calendar: '/applications/calendar',
  email: '/applications/email',
  emailCompose: '/applications/email-compose',
  fileManager: '/applications/file-manager',
  notes: '/applications/notes',
  todo: '/applications/todo',
  workflowApprovals: '/applications/workflow-approvals',
  workflowApprovalLevels: '/applications/workflow-approval-levels',
  workflowRequests: '/applications/workflow-requests',
  workflowActions: '/applications/workflow-actions',

  // Calls

  voiceCall: '/calls/voice-call',
  videoCall: '/calls/video-call',

  // Layouts

  layoutMini: '/layout/layout-mini',
  layoutHoverview: '/layout/layout-hoverview',
  layoutHidden: '/layout/layout-hidden',
  layoutFullwidth: '/layout/layout-fullwidth',
  layoutRtl: '/layout/layout-rtl',

  // Inventory

  products: '/inventory/product/list',
  addProduct: '/inventory/product/new',
  editProduct: '/inventory/product/:recordId/edit',
  categories: '/inventory/category/list',
  brands: '/inventory/brand/list',
  units: '/inventory/unit/list',
  inventory: '/inventory/general/inventory',
  suppliers: '/inventory/general/suppliers',
  warehouse: '/inventory/general/warehouse',

  // Stock

  manageStock: '/stock/manage-stock',
  stockAdjustment: '/stock/stock-adjustment',
  stockTransfer: '/stock/stock-transfer',

  // Sales

  customers: '/sales/customers',
  salesOrders: '/sales/sales-orders',
  recurringInvoices: '/sales/recurring-invoices',
  addRecurringInvoices: '/sales/add-recurring-invoice',
  editRecurringInvoices: '/sales/edit-recurring-invoice',
  recurringInvoiceDetails: '/sales/recurring-invoice-details',
  invoiceTemplates: '/sales/invoice-templates',
  creditNotes: '/sales/credit-notes',
  addCreditNotesInvoice: '/sales/add-credit-notes-invoice',
  editCreditNotesInvoice: '/sales/edit-credit-notes-invoice',
  creditNotesDetails: '/sales/credit-notes-details',
  salesQuotes: '/sales/sales-quotes',
  addSalesQuotes: '/sales/add-sales-quotes',
  editSalesQuotes: '/sales/edit-sales-quotes',
  salesQuotesDetails: '/sales/sales-quotes-details',
  cashSales: '/sales/cash-sales',
  addCashSales: '/sales/add-cash-sales',
  editCashSales: '/sales/edit-cash-sales',
  cashSalesDetails: '/sales/cash-sales-details',
  refunds: '/sales/refunds',
  deliveryNotes: '/sales/delivery-notes',
  addDeliveryNotesInvoice: '/sales/add-delivery-notes-invoice',
  editDeliveryNotesInvoice: '/sales/edit-delivery-notes-invoice',
  deliveryNoteDetails: '/sales/delivery-note-details',
  salesAnalytics: '/sales/sales-analytics',
  addSales: '/sales/add-sales',
  editsales: '/sales/edit-sales',
  salesDetails: '/sales/sales-details',

  // Purchase

  purchases: '/purchase/purchases',
  addPurchase: '/purchase/add-purchase',
  editPurchase: '/purchase/edit-purchase',
  purchaseDetails: '/purchase/purchase-details',
  purchaseOrders: '/purchase/purchase-orders',
  addPurchaseOrder: '/purchase/add-purchase-order',
  editPurchaseOrder: '/purchase/edit-purchase-order',
  purchaseOrderDetails: '/purchase/purchase-order-details',
  purchaseReturn: '/purchase/purchase-return',
  addPurchaseReturn: '/purchase/add-purchase-return',
  editPurchaseReturn: '/purchase/edit-purchase-return',
  purchaseReturnDetails: '/purchase/purchase-return-details',
  vendors: '/purchase/vendors',
  procurementAnalytics: '/purchase/procurement-analytics',
  
  // Finance

  expenses: '/finance/expenses',
  expenseCategory: '/finance/expense-category',
  payments: '/finance/payments',
  cashflow: '/finance/cashflow',
  budgeting: '/finance/budgeting',
  taxes: '/finance/taxes',

  // Reports

  expenseSummary: '/reports/expense-summary',
  incomeSummary: '/reports/income-summary',
  profitLoss: '/reports/profit-loss',
  incomeExpense: '/reports/income-expense',
  taxSummary: '/reports/tax-summary',

  // HRM

  employeesGrid: '/hrm/employees-grid',
  employees: '/hrm/employees',
  addEmployee: '/hrm/add-employee',
  editEmployee: '/hrm/edit-employee',
  employeeDetails: '/hrm/employee-details',
  departments: '/hrm/departments',
  designationsRoles: '/hrm/designations-roles',
  attendance: '/hrm/attendance',
  holidays: '/hrm/holidays',
  payroll: '/hrm/payroll',
  addPayroll: '/hrm/add-payroll',
  editPayroll: '/hrm/edit-payroll',
  performanceAppraisal: '/hrm/performance-appraisal',
  trainingDevelopment: '/hrm/training-development',
  hrAnalytics: '/hrm/hr-analytics',

  // HRM Recruitment

  recruitment: '/recruitment/recruitment',
  sourcingCampaigns: '/recruitment/sourcing-campaigns',
  recruitmentAnalytics: '/recruitment/recruitment-analytics',
  addJobRequisition: '/recruitment/add-job-requisition',
  editJobRequisition: '/recruitment/edit-job-requisition',
  candidatePipline: '/recruitment/candidate-pipline',
  interviewScheduler: '/recruitment/interview-scheduler',
  offerManagement: '/recruitment/offer-management',
  onboarding: '/recruitment/onboarding',

  // Leaves

  leave: '/leaves/leave',
  leaveTypes: '/leaves/leave-types',

  // CRM

  contactsGrid: '/crm/contacts-grid',
  contacts: '/crm/contacts',
  contactDetails: '/crm/contact-details',
  leadsGrid: '/crm/leads-grid',
  leads: '/crm/leads',
  leadDetails: '/crm/lead-details',
  dealsGrid: '/crm/deals-grid',
  deals: '/crm/deals',
  dealDetails: '/crm/deal-details',
  pipeline: '/crm/pipeline',
  campaigns: '/crm/campaigns',
  customerFeedback: '/crm/customer-feedback',
  customerAnalytics: '/crm/customer-analytics',

  // Projects

  projectsGrid: '/projects/projects-grid',
  projects: '/projects/projects',
  projectDetails: '/projects/project-details',
  tasksGrid: '/projects/tasks-grid',
  tasks: '/projects/tasks',
  taskDetails: '/projects/task-details',
  timesheet: '/projects/timesheet',
  milestones: '/projects/milestones',
  resourceAllocation: '/projects/resource-allocation',
  projectAnalytics: '/projects/project-analytics',

  // POS

  pos: '/pos/pos',
  posOrders: '/pos/pos-orders',
  barcodePrint: '/pos/barcode-print',
  qrCodePrint: '/pos/qr-code-print',
  printSettings: '/pos/print-settings',

  // Assets

  assetRegister: '/assets/asset-register',
  assignments: '/assets/assignments',
  depreciation: '/assets/depreciation',
  maintenance: '/assets/maintenance',
  disposal: '/assets/disposal',
  assetAnalytics: '/assets/asset-analytics',

  // Documents

  documentRepository: '/documents/document-repository',
  policiesManuals: '/documents/policies-manuals',
  complianceDocs: '/documents/compliance-docs',
  documentWorkflows: '/documents/document-workflows',

  // Support

  contactMessages: '/support/contact-messages',
  tickets: '/support/tickets',
  ticketDetails: '/support/ticket-details',
  knowledgeBase: '/support/knowledge-base',
  knowledgeBaseDetails: '/support/knowledge-base-details',
  slaManagement: '/support/sla-management',

  // Membership

  membershipPlans: '/membership/membership-plans',
  addMembershipPlan: '/membership/add-membership-plan',
  membershipAddons: '/membership/membership-addons',
  transactions: '/membership/transactions',

  // System

  userManagement: '/system/user-management',
  rolesPermissions: '/system/roles-permissions',
  deleteRequests: '/system/delete-requests',

  // Settings

  generalSettings: '/settings/general-settings',
  securitySettings: '/settings/security-settings',
  notificationsSettings: '/settings/notifications-settings',
  integrationsSettings: '/settings/integrations-settings',

  // Authentication

  login: '/',
  loginCover: '/login-cover',
  loginIllustration: '/login-illustration',
  register: '/register',
  registerCover: '/register-cover',
  registerIllustration: '/register-illustration',
  forgotPassword: '/forgot-password',
  forgotPasswordCover: '/forgot-password-cover',
  forgotPasswordIllustration: '/forgot-password-illustration',
  resetPassword: '/reset-password',
  resetPasswordCover: '/reset-password-cover',
  resetPasswordIllustration: '/reset-password-illustration',
  emailVerification: '/email-verification',
  emailVerificationCover: '/email-verification-cover',
  emailVerificationIllustration: '/email-verification-illustration',
  error404: '/error-404',
  error500: '/error-500',
  lockScreen: '/lock-screen',

  // Account

  profile: '/account/profile',
  editProfile: '/account/edit-profile',

  // Base UI

  uiAlerts: '/base-ui/ui-alerts',
  uiAccordion: '/base-ui/ui-accordion',
  uiAvatar: '/base-ui/ui-avatar',
  uiBadges: '/base-ui/ui-badges',
  uiButtons: '/base-ui/ui-buttons',
  uiButtonsGroup: '/base-ui/ui-buttons-group',
  uiBreadcrumb: '/base-ui/ui-breadcrumb',
  uiCards: '/base-ui/ui-cards',
  uiColors: '/base-ui/ui-colors',
  uiCollapse: '/base-ui/ui-collapse',
  uiDropdowns: '/base-ui/ui-dropdowns',
  uiGrid: '/base-ui/ui-grid',
  uiImages: '/base-ui/ui-images',
  uiModals: '/base-ui/ui-modals',
  uiOffcanvas: '/base-ui/ui-offcanvas',
  uiPagination: '/base-ui/ui-pagination',
  uiPopovers: '/base-ui/ui-popovers',
  uiProgress: '/base-ui/ui-progress',
  uiNavTabs: '/base-ui/ui-nav-tabs',
  uiTypography: '/base-ui/ui-typography',

  // Advance UI

  uiDragula: '/advance-ui/ui-dragula',
  uiClipboard: '/advance-ui/ui-clipboard',
  uiRangeslider: '/advance-ui/ui-rangeslider',
  uiLightbox: '/advance-ui/ui-lightbox',

  // Forms

  formElements : '/forms/form-elements',
  formSelectTwo : '/forms/form-select2',
  formEditors : '/forms/form-editors',
  formPickers : '/forms/form-pickers',

  // Tables

  tablesBasic : '/tables/tables-basic',
  dataTables : '/tables/data-tables',

  // Charts

  chartApex: '/charts/chart-apex',
  chartJs: '/charts/chart-js',

  // Icons

  iconFontawesome: '/icons/icon-fontawesome',
  iconTabler: '/icons/icon-tabler',
  iconLucide: '/icons/icon-lucide',
  iconPhosphor: '/icons/icon-phosphor',

};
