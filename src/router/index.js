import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/pages/pages-module/authentication/login.vue'),
    meta: { title: 'Login | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/login-cover',
    name: 'login-cover',
    component: () => import('@/views/pages/pages-module/authentication/login-cover.vue'),
    meta: { title: 'Login | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/login-illustration',
    name: 'login-illustration',
    component: () => import('@/views/pages/pages-module/authentication/login-illustration.vue'),
    meta: { title: 'Login | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('@/views/pages/pages-module/utilities/coming-soon.vue'),
    meta: { title: 'Coming Soon | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/pages-module/authentication/register.vue'),
    meta: { title: 'Register | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/register-cover',
    name: 'register-cover',
    component: () => import('@/views/pages/pages-module/authentication/register-cover.vue'),
    meta: { title: 'Register | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/register-illustration',
    name: 'register-illustration',
    component: () => import('@/views/pages/pages-module/authentication/register-illustration.vue'),
    meta: { title: 'Register | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/pages/pages-module/authentication/forgot-password.vue'),
    meta: { title: 'Forgot Password | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/forgot-password-cover',
    name: 'forgot-password-cover',
    component: () => import('@/views/pages/pages-module/authentication/forgot-password-cover.vue'),
    meta: { title: 'Forgot Password | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/forgot-password-illustration',
    name: 'forgot-password-illustration',
    component: () => import('@/views/pages/pages-module/authentication/forgot-password-illustration.vue'),
    meta: { title: 'Forgot Password | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/pages/pages-module/authentication/reset-password.vue'),
    meta: { title: 'Reset Password | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/reset-password-cover',
    name: 'reset-password-cover',
    component: () => import('@/views/pages/pages-module/authentication/reset-password-cover.vue'),
    meta: { title: 'Reset Password | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/reset-password-illustration',
    name: 'reset-password-illustration',
    component: () => import('@/views/pages/pages-module/authentication/reset-password-illustration.vue'),
    meta: { title: 'Reset Password | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/email-verification',
    name: 'email-verification',
    component: () => import('@/views/pages/pages-module/authentication/email-verification.vue'),
    meta: { title: 'Email Verification | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/email-verification-cover',
    name: 'email-verification-cover',
    component: () => import('@/views/pages/pages-module/authentication/email-verification-cover.vue'),
    meta: { title: 'Email Verification | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/email-verification-illustration',
    name: 'email-verification-illustration',
    component: () => import('@/views/pages/pages-module/authentication/email-verification-illustration.vue'),
    meta: { title: 'Email Verification | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/pages/pages-module/error-pages/error-404.vue'),
    meta: { title: 'Error 404 | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/error-500',
    name: 'error-500',
    component: () => import('@/views/pages/pages-module/error-pages/error-500.vue'),
    meta: { title: 'Error 500 | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: () => import('@/views/pages/pages-module/authentication/lock-screen.vue'),
    meta: { title: 'Lock Screen | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template', hideLayout: true }
  },
  {
    path: "/dashboard",
    component: () => import("@/views/pages/dashboard/dashboard-index.vue"),
    children: [
      { path: "", redirect: "/dashboard/hrm-dashboard" },
      { path: "hrm-dashboard", component: () => import("@/views/pages/dashboard/hrm-dashboard.vue"), meta: { title: "HRM Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "inventory-dashboard", component: () => import("@/views/pages/dashboard/inventory-dashboard.vue"), meta: { title: "Inventory Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "crm-dashboard", component: () => import("@/views/pages/dashboard/crm-dashboard.vue"), meta: { title: "CRM Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "pos-dashboard", component: () => import("@/views/pages/dashboard/pos-dashboard.vue"), meta: { title: "POS Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "finance-dashboard", component: () => import("@/views/pages/dashboard/finance-dashboard.vue"), meta: { title: "Finance Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "sales-dashboard", component: () => import("@/views/pages/dashboard/sales-dashboard.vue"), meta: { title: "Sales Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "procurement-dashboard", component: () => import("@/views/pages/dashboard/procurement-dashboard.vue"), meta: { title: "Procurement Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "project-dashboard", component: () => import("@/views/pages/dashboard/project-dashboard.vue"), meta: { title: "Project Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "support-dashboard", component: () => import("@/views/pages/dashboard/support-dashboard.vue"), meta: { title: "Support Dashboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/applications",
    component: () => import("@/views/pages/applications-module/applications-index.vue"),
    children: [
      { path: "", redirect: "/applications/chat" },
      { path: "chat", component: () => import("@/views/pages/applications-module/chat.vue"), meta: { title: "Chat | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "calendar", component: () => import("@/views/pages/applications-module/calendar.vue"), meta: { title: "Calendar | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "email", component: () => import("@/views/pages/applications-module/email.vue"), meta: { title: "Email | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "email-compose", component: () => import("@/views/pages/applications-module/email-compose.vue"), meta: { title: "Email Compose | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "file-manager", component: () => import("@/views/pages/applications-module/file-manager.vue"), meta: { title: "File Manager | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "notes", component: () => import("@/views/pages/applications-module/notes.vue"), meta: { title: "Notes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "todo", component: () => import("@/views/pages/applications-module/todo.vue"), meta: { title: "To Do | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "workflow-approvals", component: () => import("@/views/pages/applications-module/workflow-approvals.vue"), meta: { title: "Workflow Approvals | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "workflow-approval-levels", component: () => import("@/views/pages/applications-module/workflow-approval-levels.vue"), meta: { title: "Workflow Approval Levels | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "workflow-requests", component: () => import("@/views/pages/applications-module/workflow-requests.vue"), meta: { title: "Workflow Request | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "workflow-actions", component: () => import("@/views/pages/applications-module/workflow-actions.vue"), meta: { title: "Workflow Actions | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/calls",
    component: () => import("@/views/pages/applications-module/calls/calls-index.vue"),
    children: [
      { path: "", redirect: "/calls/voice-call" },
      { path: "voice-call", component: () => import("@/views/pages/applications-module/calls/voice-call.vue"), meta: { title: "Voice Call | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "video-call", component: () => import("@/views/pages/applications-module/calls/video-call.vue"), meta: { title: "Video Call | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/layout",
    component: () => import("@/views/pages/layouts-module/layouts-index.vue"),
    children: [
      { path: "", redirect: "/layout/layout-mini" },
      { path: "layout-mini", component: () => import("@/views/pages/layouts-module/layout-mini.vue"), meta: { title: "Layouts Mini | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template", layout: "mini" } },
      { path: "layout-hoverview", component: () => import("@/views/pages/layouts-module/layout-hoverview.vue"), meta: { title: "Layout Hoverview | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template", layout: "hoverview" } },
      { path: "layout-hidden", component: () => import("@/views/pages/layouts-module/layout-hidden.vue"), meta: { title: "Layout Hidden | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template", layout: "hidden" } },
      { path: "layout-fullwidth", component: () => import("@/views/pages/layouts-module/layout-fullwidth.vue"), meta: { title: "Layout Fullwidth | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template", layout: "full-width" } },
      { path: "layout-rtl", component: () => import("@/views/pages/layouts-module/layout-rtl.vue"), meta: { title: "Layout RTL | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template", layout: "rtl" } },
    ],
  },
  {
    path: "/inventory",
    component: () => import("@/views/pages/inventory-module/inventory-index.vue"),
    children: [
      { path: "", redirect: "/inventory/products" },
      { path: "products", component: () => import("@/views/pages/inventory-module/products/products.vue"), meta: { title: "Products | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-product", component: () => import("@/views/pages/inventory-module/products/add-product.vue"), meta: { title: "Add Product | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-product", component: () => import("@/views/pages/inventory-module/products/edit-product.vue"), meta: { title: "Edit Product | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "categories", component: () => import("@/views/pages/inventory-module/categories.vue"), meta: { title: "Categories | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "brands", component: () => import("@/views/pages/inventory-module/brands.vue"), meta: { title: "Brands | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "units", component: () => import("@/views/pages/inventory-module/units.vue"), meta: { title: "Units | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "inventory", component: () => import("@/views/pages/inventory-module/inventory.vue"), meta: { title: "Inventory | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "suppliers", component: () => import("@/views/pages/inventory-module/suppliers.vue"), meta: { title: "Suppliers | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "warehouse", component: () => import("@/views/pages/inventory-module/warehouse.vue"), meta: { title: "Warehouse | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/stock",
    component: () => import("@/views/pages/inventory-module/stock/stock-index.vue"),
    children: [
      { path: "", redirect: "/stock/manage-stock" },
      { path: "manage-stock", component: () => import("@/views/pages/inventory-module/stock/manage-stock.vue"), meta: { title: "Manage Stock | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "stock-adjustment", component: () => import("@/views/pages/inventory-module/stock/stock-adjustment.vue"), meta: { title: "Stock Adjustment | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "stock-transfer", component: () => import("@/views/pages/inventory-module/stock/stock-transfer.vue"), meta: { title: "Stock Transfer | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/sales",
    component: () => import("@/views/pages/sales-module/sales-index.vue"),
    children: [
      { path: "", redirect: "/sales/customers" },
      { path: "customers", component: () => import("@/views/pages/sales-module/customers.vue"), meta: { title: "Customers | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "sales-orders", component: () => import("@/views/pages/sales-module/sales-orders.vue"), meta: { title: "Sales Orders | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "recurring-invoices", component: () => import("@/views/pages/sales-module/recurring-invoices.vue"), meta: { title: "Recurring Invoices | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-recurring-invoice", component: () => import("@/views/pages/sales-module/add-recurring-invoice.vue"), meta: { title: "Add Recurring Invoices | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-recurring-invoice", component: () => import("@/views/pages/sales-module/edit-recurring-invoice.vue"), meta: { title: "Edit Recurring Invoices | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "recurring-invoice-details", component: () => import("@/views/pages/sales-module/recurring-invoice-details.vue"), meta: { title: "Recurring Invoice Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "invoice-templates", component: () => import("@/views/pages/sales-module/invoice-templates.vue"), meta: { title: "Invoice Templates | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "credit-notes", component: () => import("@/views/pages/sales-module/credit-notes.vue"), meta: { title: "Credit Notes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-credit-notes-invoice", component: () => import("@/views/pages/sales-module/add-credit-notes-invoice.vue"), meta: { title: "Add Credit Notes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-credit-notes-invoice", component: () => import("@/views/pages/sales-module/edit-credit-notes-invoice.vue"), meta: { title: "Edit Credit Notes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "credit-notes-details", component: () => import("@/views/pages/sales-module/credit-notes-details.vue"), meta: { title: "Credit Notes Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "sales-quotes", component: () => import("@/views/pages/sales-module/sales-quotes.vue"), meta: { title: "Sales Quotes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-sales-quotes", component: () => import("@/views/pages/sales-module/add-sales-quotes.vue"), meta: { title: "Add Sales Quotes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-sales-quotes", component: () => import("@/views/pages/sales-module/edit-sales-quotes.vue"), meta: { title: "Edit Sales Quotes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "sales-quotes-details", component: () => import("@/views/pages/sales-module/sales-quotes-details.vue"), meta: { title: "Sales Quotes Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "cash-sales", component: () => import("@/views/pages/sales-module/cash-sales.vue"), meta: { title: "Cash Sales | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-cash-sales", component: () => import("@/views/pages/sales-module/add-cash-sales.vue"), meta: { title: "Add Cash Sales | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-cash-sales", component: () => import("@/views/pages/sales-module/edit-cash-sales.vue"), meta: { title: "Edit Cash Sales | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "cash-sales-details", component: () => import("@/views/pages/sales-module/cash-sales-details.vue"), meta: { title: "Cash Sales Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "refunds", component: () => import("@/views/pages/sales-module/refunds.vue"), meta: { title: "Refunds | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "delivery-notes", component: () => import("@/views/pages/sales-module/delivery-notes.vue"), meta: { title: "Delivery Notes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-delivery-notes-invoice", component: () => import("@/views/pages/sales-module/add-delivery-notes-invoice.vue"), meta: { title: "Add Delivery Notes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-delivery-notes-invoice", component: () => import("@/views/pages/sales-module/edit-delivery-notes-invoice.vue"), meta: { title: "Edit Delivery Notes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "delivery-note-details", component: () => import("@/views/pages/sales-module/delivery-note-details.vue"), meta: { title: "Delivery Notes Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "sales-analytics", component: () => import("@/views/pages/sales-module/sales-analytics.vue"), meta: { title: "Sales Analytics | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-sales", component: () => import("@/views/pages/sales-module/add-sales.vue"), meta: { title: "Add Sales | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-sales", component: () => import("@/views/pages/sales-module/edit-sales.vue"), meta: { title: "Edit Sales | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "sales-details", component: () => import("@/views/pages/sales-module/sales-details.vue"), meta: { title: "Sales Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/purchase",
    component: () => import("@/views/pages/purchases-module/purchases-index.vue"),
    children: [
      { path: "", redirect: "/purchase/purchases" },
      { path: "purchases", component: () => import("@/views/pages/purchases-module/purchases.vue"), meta: { title: "Purchases | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-purchase", component: () => import("@/views/pages/purchases-module/add-purchase.vue"), meta: { title: "Add Purchases | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-purchase", component: () => import("@/views/pages/purchases-module/edit-purchase.vue"), meta: { title: "Edit Purchases | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "purchase-details", component: () => import("@/views/pages/purchases-module/purchase-details.vue"), meta: { title: "Purchase Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "purchase-orders", component: () => import("@/views/pages/purchases-module/purchase-orders.vue"), meta: { title: "Purchase Orders | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-purchase-order", component: () => import("@/views/pages/purchases-module/add-purchase-order.vue"), meta: { title: "Add Purchase Orders | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-purchase-order", component: () => import("@/views/pages/purchases-module/edit-purchase-order.vue"), meta: { title: "Edit Purchase Orders | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "purchase-order-details", component: () => import("@/views/pages/purchases-module/purchase-order-details.vue"), meta: { title: "Purchase Orders Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "purchase-return", component: () => import("@/views/pages/purchases-module/purchase-return.vue"), meta: { title: "Purchase Returns | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-purchase-return", component: () => import("@/views/pages/purchases-module/add-purchase-return.vue"), meta: { title: "Add Purchase Returns | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-purchase-return", component: () => import("@/views/pages/purchases-module/edit-purchase-return.vue"), meta: { title: "Edit Purchase Returns | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "purchase-return-details", component: () => import("@/views/pages/purchases-module/purchase-return-details.vue"), meta: { title: "Purchase Return Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "vendors", component: () => import("@/views/pages/purchases-module/vendors.vue"), meta: { title: "Vendors | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "procurement-analytics", component: () => import("@/views/pages/purchases-module/procurement-analytics.vue"), meta: { title: "Procurement Analytics" } },
    ],
  },
  {
    path: "/finance",
    component: () => import("@/views/pages/finance-module/finance-index.vue"),
    children: [
      { path: "", redirect: "/finance/expenses" },
      { path: "expenses", component: () => import("@/views/pages/finance-module/expenses.vue"), meta: { title: "Expenses | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "expense-category", component: () => import("@/views/pages/finance-module/expense-category.vue"), meta: { title: "Expense Category | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "payments", component: () => import("@/views/pages/finance-module/payments.vue"), meta: { title: "Payments | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "cashflow", component: () => import("@/views/pages/finance-module/cashflow.vue"), meta: { title: "Cashflow | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "budgeting", component: () => import("@/views/pages/finance-module/budgeting.vue"), meta: { title: "Budgeting | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "taxes", component: () => import("@/views/pages/finance-module/taxes.vue"), meta: { title: "Taxes | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/reports",
    component: () => import("@/views/pages/finance-module/reports/reports-index.vue"),
    children: [
      { path: "", redirect: "/reports/expense-summary" },
      { path: "expense-summary", component: () => import("@/views/pages/finance-module/reports/expense-summary.vue"), meta: { title: "Expense Summary | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "income-summary", component: () => import("@/views/pages/finance-module/reports/income-summary.vue"), meta: { title: "Income Summary | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "profit-loss", component: () => import("@/views/pages/finance-module/reports/profit-loss.vue"), meta: { title: "Profit Loss | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "income-expense", component: () => import("@/views/pages/finance-module/reports/income-expense.vue"), meta: { title: "Income Expense | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "tax-summary", component: () => import("@/views/pages/finance-module/reports/tax-summary.vue"), meta: { title: "Tax Summary | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/hrm",
    component: () => import("@/views/pages/hrm-module/hrm-index.vue"),
    children: [
      { path: "", redirect: "/hrm/employees-grid" },
      { path: "employees-grid", component: () => import("@/views/pages/hrm-module/employees-grid.vue"), meta: { title: "Employees Grid | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "employees", component: () => import("@/views/pages/hrm-module/employees.vue"), meta: { title: "Employees | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-employee", component: () => import("@/views/pages/hrm-module/add-employee.vue"), meta: { title: "Add Employees | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-employee", component: () => import("@/views/pages/hrm-module/edit-employee.vue"), meta: { title: "Edit Employees | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "employee-details", component: () => import("@/views/pages/hrm-module/employee-details.vue"), meta: { title: "Employee Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "departments", component: () => import("@/views/pages/hrm-module/departments.vue"), meta: { title: "Departments | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "designations-roles", component: () => import("@/views/pages/hrm-module/designations-roles.vue"), meta: { title: "Designations Roles | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "attendance", component: () => import("@/views/pages/hrm-module/attendance.vue"), meta: { title: "Attendance | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "holidays", component: () => import("@/views/pages/hrm-module/holidays.vue"), meta: { title: "Holidays | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "payroll", component: () => import("@/views/pages/hrm-module/payroll.vue"), meta: { title: "Payroll | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-payroll", component: () => import("@/views/pages/hrm-module/add-payroll.vue"), meta: { title: "Add Payroll | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-payroll", component: () => import("@/views/pages/hrm-module/edit-payroll.vue"), meta: { title: "Edit Payroll | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "performance-appraisal", component: () => import("@/views/pages/hrm-module/performance-appraisal.vue"), meta: { title: "Performance Appraisal | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "training-development", component: () => import("@/views/pages/hrm-module/training-development.vue"), meta: { title: "Training Development | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "hr-analytics", component: () => import("@/views/pages/hrm-module/hr-analytics.vue"), meta: { title: "Hr Analytics | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/leaves",
    component: () => import("@/views/pages/hrm-module/leaves/leaves-index.vue"),
    children: [
      { path: "", redirect: "/leaves/leave" },
      { path: "leave", component: () => import("@/views/pages/hrm-module/leaves/leave.vue"), meta: { title: "Leave | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "leave-types", component: () => import("@/views/pages/hrm-module/leaves/leave-types.vue"), meta: { title: "leave Types | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/recruitment",
    component: () => import("@/views/pages/hrm-module/recruitment/recruitment-index.vue"),
    children: [
      { path: "", redirect: "/recruitment/recruitment" },
      { path: "recruitment", component: () => import("@/views/pages/hrm-module/recruitment/recruitment.vue"), meta: { title: "Recruitment | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "sourcing-campaigns", component: () => import("@/views/pages/hrm-module/recruitment/sourcing-campaigns.vue"), meta: { title: "Sourcing Campaigns | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "recruitment-analytics", component: () => import("@/views/pages/hrm-module/recruitment/recruitment-analytics.vue"), meta: { title: "Recruitment Analytics | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-job-requisition", component: () => import("@/views/pages/hrm-module/recruitment/add-job-requisition.vue"), meta: { title: "Add Job Requisition | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-job-requisition", component: () => import("@/views/pages/hrm-module/recruitment/edit-job-requisition.vue"), meta: { title: "Edit Job Requisition | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "candidate-pipline", component: () => import("@/views/pages/hrm-module/recruitment/candidate-pipline.vue"), meta: { title: "Candidate Pipline | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "interview-scheduler", component: () => import("@/views/pages/hrm-module/recruitment/interview-scheduler.vue"), meta: { title: "Interview Scheduler | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "offer-management", component: () => import("@/views/pages/hrm-module/recruitment/offer-management.vue"), meta: { title: "Offer Management | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "onboarding", component: () => import("@/views/pages/hrm-module/recruitment/onboarding.vue"), meta: { title: "Onboarding | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/crm",
    component: () => import("@/views/pages/crm-module/crm-index.vue"),
    children: [
      { path: "", redirect: "/crm/contacts" },
      { path: "contacts-grid", component: () => import("@/views/pages/crm-module/contacts-grid.vue"), meta: { title: "Contacts Grid | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "contacts", component: () => import("@/views/pages/crm-module/contacts.vue"), meta: { title: "Contacts | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "contact-details", component: () => import("@/views/pages/crm-module/contact-details.vue"), meta: { title: "Contacts Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "leads-grid", component: () => import("@/views/pages/crm-module/leads-grid.vue"), meta: { title: "Leads Grid | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "leads", component: () => import("@/views/pages/crm-module/leads.vue"), meta: { title: "Leads | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "lead-details", component: () => import("@/views/pages/crm-module/lead-details.vue"), meta: { title: "Leads Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "deals", component: () => import("@/views/pages/crm-module/deals.vue"), meta: { title: "Deals | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "deals-grid", component: () => import("@/views/pages/crm-module/deals-grid.vue"), meta: { title: "Deals Grid | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "deal-details", component: () => import("@/views/pages/crm-module/deal-details.vue"), meta: { title: "Deals Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "pipeline", component: () => import("@/views/pages/crm-module/pipeline.vue"), meta: { title: "Pipeline | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "campaigns", component: () => import("@/views/pages/crm-module/campaigns.vue"), meta: { title: "Campaigns | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "customer-feedback", component: () => import("@/views/pages/crm-module/customer-feedback.vue"), meta: { title: "Customer Feedback | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "customer-analytics", component: () => import("@/views/pages/crm-module/customer-analytics.vue"), meta: { title: "Customer Analytics | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/projects",
    component: () => import("@/views/pages/projects-module/projects-index.vue"),
    children: [
      { path: "", redirect: "/projects/projects-grid" },
      { path: "projects-grid", component: () => import("@/views/pages/projects-module/projects-grid.vue"), meta: { title: "Projects Grid | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "projects", component: () => import("@/views/pages/projects-module/projects.vue"), meta: { title: "Projects | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "project-details", component: () => import("@/views/pages/projects-module/project-details.vue"), meta: { title: "Project Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "tasks-grid", component: () => import("@/views/pages/projects-module/tasks-grid.vue"), meta: { title: "Tasks Grid | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "tasks", component: () => import("@/views/pages/projects-module/tasks.vue"), meta: { title: "Tasks | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "task-details", component: () => import("@/views/pages/projects-module/task-details.vue"), meta: { title: "Tasks Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "timesheet", component: () => import("@/views/pages/projects-module/timesheet.vue"), meta: { title: "Timesheet | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "milestones", component: () => import("@/views/pages/projects-module/milestones.vue"), meta: { title: "Milestones | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "resource-allocation", component: () => import("@/views/pages/projects-module/resource-allocation.vue"), meta: { title: "Resource Allocation | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "project-analytics", component: () => import("@/views/pages/projects-module/project-analytics.vue"), meta: { title: "Project Analytics | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/pos",
    component: () => import("@/views/pages/pos-module/pos-index.vue"),
    children: [
      { path: "", redirect: "/pos/pos" },
      { path: "pos", component: () => import("@/views/pages/pos-module/pos.vue"), meta: { title: "POS | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" , hideLayout: true }, },
      { path: "pos-orders", component: () => import("@/views/pages/pos-module/pos-orders.vue"), meta: { title: "POS Orders | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "barcode-print", component: () => import("@/views/pages/pos-module/barcode-print.vue"), meta: { title: "Barcode Print | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "qr-code-print", component: () => import("@/views/pages/pos-module/qr-code-print.vue"), meta: { title: "QR Code Print | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "print-settings", component: () => import("@/views/pages/pos-module/print-settings.vue"), meta: { title: "Print Settings | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/assets",
    component: () => import("@/views/pages/assets-module/assets-index.vue"),
    children: [
      { path: "", redirect: "/assets/asset-register" },
      { path: "asset-register", component: () => import("@/views/pages/assets-module/asset-register.vue"), meta: { title: "Assets Register | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "assignments", component: () => import("@/views/pages/assets-module/assignments.vue"), meta: { title: "Assignments | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "depreciation", component: () => import("@/views/pages/assets-module/depreciation.vue"), meta: { title: "Depreciation | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "maintenance", component: () => import("@/views/pages/assets-module/maintenance.vue"), meta: { title: "Maintenance | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "disposal", component: () => import("@/views/pages/assets-module/disposal.vue"), meta: { title: "Disposal | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "asset-analytics", component: () => import("@/views/pages/assets-module/asset-analytics.vue"), meta: { title: "Asset Analytics | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/documents",
    component: () => import("@/views/pages/documents-module/documents-index.vue"),
    children: [
      { path: "", redirect: "/documents/document-repository" },
      { path: "document-repository", component: () => import("@/views/pages/documents-module/document-repository.vue"), meta: { title: "Document Repository | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "policies-manuals", component: () => import("@/views/pages/documents-module/policies-manuals.vue"), meta: { title: "Policies Manuals | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "compliance-docs", component: () => import("@/views/pages/documents-module/compliance-docs.vue"), meta: { title: "Compliance Docs | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "document-workflows", component: () => import("@/views/pages/documents-module/document-workflows.vue"), meta: { title: "Document Workflows | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/support",
    component: () => import("@/views/pages/support-module/support-index.vue"),
    children: [
      { path: "", redirect: "/support/contact-messages" },
      { path: "contact-messages", component: () => import("@/views/pages/support-module/contact-messages.vue"), meta: { title: "Contact Messages | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "tickets", component: () => import("@/views/pages/support-module/tickets.vue"), meta: { title: "Tickets | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ticket-details", component: () => import("@/views/pages/support-module/ticket-details.vue"), meta: { title: "Ticket Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "knowledge-base", component: () => import("@/views/pages/support-module/knowledge-base.vue"), meta: { title: "Knowledge Base | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "knowledge-base-details", component: () => import("@/views/pages/support-module/knowledge-base-details.vue"), meta: { title: "Knowledge Base Details | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "sla-management", component: () => import("@/views/pages/support-module/sla-management.vue"), meta: { title: "Sla Management | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/membership",
    component: () => import("@/views/pages/membership-module/membership-index.vue"),
    children: [
      { path: "", redirect: "/membership/membership-plans" },
      { path: "membership-plans", component: () => import("@/views/pages/membership-module/membership-plans.vue"), meta: { title: "Membership Plans | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "add-membership-plan", component: () => import("@/views/pages/membership-module/add-membership-plan.vue"), meta: { title: "Add Membership Plan | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "membership-addons", component: () => import("@/views/pages/membership-module/membership-addons.vue"), meta: { title: "Membership Addons | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "transactions", component: () => import("@/views/pages/membership-module/transactions.vue"), meta: { title: "Transactions | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/system",
    component: () => import("@/views/pages/system-module/system-index.vue"),
    children: [
      { path: "", redirect: "/system/user-management" },
      { path: "user-management", component: () => import("@/views/pages/system-module/user-management.vue"), meta: { title: "User Management | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "roles-permissions", component: () => import("@/views/pages/system-module/roles-permissions.vue"), meta: { title: "Roles Permissions | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "delete-requests", component: () => import("@/views/pages/system-module/delete-requests.vue"), meta: { title: "Delete Requests | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/settings",
    component: () => import("@/views/pages/system-module/settings/settings-index.vue"),
    children: [
      { path: "", redirect: "/settings/general-settings" },
      { path: "general-settings", component: () => import("@/views/pages/system-module/settings/general-settings.vue"), meta: { title: "General Settings | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "security-settings", component: () => import("@/views/pages/system-module/settings/security-settings.vue"), meta: { title: "Security Settings | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "notifications-settings", component: () => import("@/views/pages/system-module/settings/notifications-settings.vue"), meta: { title: "Notifications Settings | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "integrations-settings", component: () => import("@/views/pages/system-module/settings/integrations-settings.vue"), meta: { title: "integrations Settings | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/utilities",
    component: () => import("@/views/pages/pages-module/utilities/utilities-index.vue"),
    children: [
      { path: "", redirect: "/utilities/blank-page" },
      { path: "blank-page", component: () => import("@/views/pages/pages-module/utilities/blank-page.vue"), meta: { title: "Blank Page | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/account",
    component: () => import("@/views/pages/pages-module/account/account-index.vue"),
    children: [
      { path: "", redirect: "/account/profile" },
      { path: "profile", component: () => import("@/views/pages/pages-module/account/profile.vue"), meta: { title: "Profile | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "edit-profile", component: () => import("@/views/pages/pages-module/account/edit-profile.vue"), meta: { title: "Edit Profile | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/base-ui",
    component: () => import("@/views/pages/ui-interface/base-ui/base-ui-index.vue"),
    children: [
      { path: "", redirect: "/base-ui/ui-alerts" },
      { path: "ui-alerts", component: () => import("@/views/pages/ui-interface/base-ui/ui-alerts.vue"), meta: { title: "Alerts | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-accordion", component: () => import("@/views/pages/ui-interface/base-ui/ui-accordion.vue"), meta: { title: "Accordion | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-avatar", component: () => import("@/views/pages/ui-interface/base-ui/ui-avatar.vue"), meta: { title: "Avatar | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-badges", component: () => import("@/views/pages/ui-interface/base-ui/ui-badges.vue"), meta: { title: "Badges | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-buttons", component: () => import("@/views/pages/ui-interface/base-ui/ui-buttons.vue"), meta: { title: "Buttons | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-buttons-group", component: () => import("@/views/pages/ui-interface/base-ui/ui-buttons-group.vue"), meta: { title: "Buttons Group | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-breadcrumb", component: () => import("@/views/pages/ui-interface/base-ui/ui-breadcrumb.vue"), meta: { title: "Breadcrumb | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-cards", component: () => import("@/views/pages/ui-interface/base-ui/ui-cards.vue"), meta: { title: "Cards | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-colors", component: () => import("@/views/pages/ui-interface/base-ui/ui-colors.vue"), meta: { title: "Colors | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-collapse", component: () => import("@/views/pages/ui-interface/base-ui/ui-collapse.vue"), meta: { title: "Collapse | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-dropdowns", component: () => import("@/views/pages/ui-interface/base-ui/ui-dropdowns.vue"), meta: { title: "Dropdowns | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-grid", component: () => import("@/views/pages/ui-interface/base-ui/ui-grid.vue"), meta: { title: "Grid | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-images", component: () => import("@/views/pages/ui-interface/base-ui/ui-images.vue"), meta: { title: "Images | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-modals", component: () => import("@/views/pages/ui-interface/base-ui/ui-modals.vue"), meta: { title: "Modals | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-offcanvas", component: () => import("@/views/pages/ui-interface/base-ui/ui-offcanvas.vue"), meta: { title: "Offcanvas | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-pagination", component: () => import("@/views/pages/ui-interface/base-ui/ui-pagination.vue"), meta: { title: "Pagination | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-popovers", component: () => import("@/views/pages/ui-interface/base-ui/ui-popovers.vue"), meta: { title: "Popovers | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-progress", component: () => import("@/views/pages/ui-interface/base-ui/ui-progress.vue"), meta: { title: "Progress | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-nav-tabs", component: () => import("@/views/pages/ui-interface/base-ui/ui-nav-tabs.vue"), meta: { title: "Nav Tabs | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-typography", component: () => import("@/views/pages/ui-interface/base-ui/ui-typography.vue"), meta: { title: "Typography | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/advance-ui",
    component: () => import("@/views/pages/ui-interface/advance-ui/advance-ui-index.vue"),
    children: [
      { path: "", redirect: "/advance-ui/ui-dragula" },
      { path: "ui-dragula", component: () => import("@/views/pages/ui-interface/advance-ui/ui-dragula.vue"), meta: { title: "Dragula | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-clipboard", component: () => import("@/views/pages/ui-interface/advance-ui/ui-clipboard.vue"), meta: { title: "Clipboard | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-rangeslider", component: () => import("@/views/pages/ui-interface/advance-ui/ui-rangeslider.vue"), meta: { title: "Range Slider | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "ui-lightbox", component: () => import("@/views/pages/ui-interface/advance-ui/ui-lightbox.vue"), meta: { title: "Lightbox | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/forms",
    component: () => import("@/views/pages/ui-interface/forms/forms-index.vue"),
    children: [
      { path: "", redirect: "/forms/form-elements" },
      { path: "form-elements", component: () => import("@/views/pages/ui-interface/forms/form-elements.vue"), meta: { title: "Form Elements | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "form-select2", component: () => import("@/views/pages/ui-interface/forms/form-select2.vue"), meta: { title: "Form Select2 | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "form-editors", component: () => import("@/views/pages/ui-interface/forms/form-editors.vue"), meta: { title: "Form Editors | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "form-pickers", component: () => import("@/views/pages/ui-interface/forms/form-pickers.vue"), meta: { title: "Form Pickers | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/tables",
    component: () => import("@/views/pages/ui-interface/tables/tables-index.vue"),
    children: [
      { path: "", redirect: "/tables/tables-basic" },
      { path: "tables-basic", component: () => import("@/views/pages/ui-interface/tables/tables-basic.vue"), meta: { title: "Tables Basic | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "data-tables", component: () => import("@/views/pages/ui-interface/tables/data-tables.vue"), meta: { title: "Data Tables | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/charts",
    component: () => import("@/views/pages/ui-interface/charts/charts-index.vue"),
    children: [
      { path: "", redirect: "/charts/chart-apex" },
      { path: "chart-apex", component: () => import("@/views/pages/ui-interface/charts/chart-apex.vue"), meta: { title: "Chart Apex | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "chart-js", component: () => import("@/views/pages/ui-interface/charts/chart-js.vue"), meta: { title: "ChartJS | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
  {
    path: "/icons",
    component: () => import("@/views/pages/ui-interface/icons/icons-index.vue"),
    children: [
      { path: "", redirect: "/icons/icon-fontawesome" },
      { path: "icon-fontawesome", component: () => import("@/views/pages/ui-interface/icons/icon-fontawesome.vue"), meta: { title: "Font Awesome | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "icon-tabler", component: () => import("@/views/pages/ui-interface/icons/icon-tabler.vue"), meta: { title: "Tabler Icons | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "icon-lucide", component: () => import("@/views/pages/ui-interface/icons/icon-lucide.vue"), meta: { title: "Lucide Icons | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
      { path: "icon-phosphor", component: () => import("@/views/pages/ui-interface/icons/icon-phosphor.vue"), meta: { title: "Phosphor Icons | Dreams ERP - Tailwind CSS ERP Admin Dashboard Template" } },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory('/vue/'),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Dreams ERP - Tailwind CSS ERP Admin Dashboard Template";
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;