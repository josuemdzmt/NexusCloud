import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/pages/pages-module/authentication/login.vue'),
    meta: { title: 'Login | NexusCloud', hideLayout: true }
  },
  {
    path: '/login-cover',
    name: 'login-cover',
    component: () => import('@/views/pages/pages-module/authentication/login-cover.vue'),
    meta: { title: 'Login | NexusCloud', hideLayout: true }
  },
  {
    path: '/login-illustration',
    name: 'login-illustration',
    component: () => import('@/views/pages/pages-module/authentication/login-illustration.vue'),
    meta: { title: 'Login | NexusCloud', hideLayout: true }
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('@/views/pages/pages-module/utilities/coming-soon.vue'),
    meta: { title: 'Coming Soon | NexusCloud', hideLayout: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/pages-module/authentication/register.vue'),
    meta: { title: 'Register | NexusCloud', hideLayout: true }
  },
  {
    path: '/register-cover',
    name: 'register-cover',
    component: () => import('@/views/pages/pages-module/authentication/register-cover.vue'),
    meta: { title: 'Register | NexusCloud', hideLayout: true }
  },
  {
    path: '/register-illustration',
    name: 'register-illustration',
    component: () => import('@/views/pages/pages-module/authentication/register-illustration.vue'),
    meta: { title: 'Register | NexusCloud', hideLayout: true }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/pages/pages-module/authentication/forgot-password.vue'),
    meta: { title: 'Forgot Password | NexusCloud', hideLayout: true }
  },
  {
    path: '/forgot-password-cover',
    name: 'forgot-password-cover',
    component: () => import('@/views/pages/pages-module/authentication/forgot-password-cover.vue'),
    meta: { title: 'Forgot Password | NexusCloud', hideLayout: true }
  },
  {
    path: '/forgot-password-illustration',
    name: 'forgot-password-illustration',
    component: () => import('@/views/pages/pages-module/authentication/forgot-password-illustration.vue'),
    meta: { title: 'Forgot Password | NexusCloud', hideLayout: true }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/pages/pages-module/authentication/reset-password.vue'),
    meta: { title: 'Reset Password | NexusCloud', hideLayout: true }
  },
  {
    path: '/reset-password-cover',
    name: 'reset-password-cover',
    component: () => import('@/views/pages/pages-module/authentication/reset-password-cover.vue'),
    meta: { title: 'Reset Password | NexusCloud', hideLayout: true }
  },
  {
    path: '/reset-password-illustration',
    name: 'reset-password-illustration',
    component: () => import('@/views/pages/pages-module/authentication/reset-password-illustration.vue'),
    meta: { title: 'Reset Password | NexusCloud', hideLayout: true }
  },
  {
    path: '/email-verification',
    name: 'email-verification',
    component: () => import('@/views/pages/pages-module/authentication/email-verification.vue'),
    meta: { title: 'Email Verification | NexusCloud', hideLayout: true }
  },
  {
    path: '/email-verification-cover',
    name: 'email-verification-cover',
    component: () => import('@/views/pages/pages-module/authentication/email-verification-cover.vue'),
    meta: { title: 'Email Verification | NexusCloud', hideLayout: true }
  },
  {
    path: '/email-verification-illustration',
    name: 'email-verification-illustration',
    component: () => import('@/views/pages/pages-module/authentication/email-verification-illustration.vue'),
    meta: { title: 'Email Verification | NexusCloud', hideLayout: true }
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/pages/pages-module/error-pages/error-404.vue'),
    meta: { title: 'Error 404 | NexusCloud', hideLayout: true }
  },
  {
    path: '/error-500',
    name: 'error-500',
    component: () => import('@/views/pages/pages-module/error-pages/error-500.vue'),
    meta: { title: 'Error 500 | NexusCloud', hideLayout: true }
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: () => import('@/views/pages/pages-module/authentication/lock-screen.vue'),
    meta: { title: 'Lock Screen | NexusCloud', hideLayout: true }
  },
  {
    path: "/dashboard",
    component: () => import("@/views/pages/dashboard/dashboard-index.vue"),
    children: [
      { path: "", redirect: "/dashboard/hrm-dashboard" },
      { path: "hrm-dashboard", component: () => import("@/views/pages/dashboard/hrm-dashboard.vue"), meta: { title: "HRM Dashboard | NexusCloud" } },
      { path: "inventory-dashboard", component: () => import("@/views/pages/dashboard/inventory-dashboard.vue"), meta: { title: "Inventory Dashboard | NexusCloud" } },
      { path: "crm-dashboard", component: () => import("@/views/pages/dashboard/crm-dashboard.vue"), meta: { title: "CRM Dashboard | NexusCloud" } },
      { path: "pos-dashboard", component: () => import("@/views/pages/dashboard/pos-dashboard.vue"), meta: { title: "POS Dashboard | NexusCloud" } },
      { path: "finance-dashboard", component: () => import("@/views/pages/dashboard/finance-dashboard.vue"), meta: { title: "Finance Dashboard | NexusCloud" } },
      { path: "sales-dashboard", component: () => import("@/views/pages/dashboard/sales-dashboard.vue"), meta: { title: "Sales Dashboard | NexusCloud" } },
      { path: "procurement-dashboard", component: () => import("@/views/pages/dashboard/procurement-dashboard.vue"), meta: { title: "Procurement Dashboard | NexusCloud" } },
      { path: "project-dashboard", component: () => import("@/views/pages/dashboard/project-dashboard.vue"), meta: { title: "Project Dashboard | NexusCloud" } },
      { path: "support-dashboard", component: () => import("@/views/pages/dashboard/support-dashboard.vue"), meta: { title: "Support Dashboard | NexusCloud" } },
    ],
  },
  {
    path: "/applications",
    component: () => import("@/views/pages/applications-module/applications-index.vue"),
    children: [
      { path: "", redirect: "/applications/chat" },
      { path: "chat", component: () => import("@/views/pages/applications-module/chat.vue"), meta: { title: "Chat | NexusCloud" } },
      { path: "calendar", component: () => import("@/views/pages/applications-module/calendar.vue"), meta: { title: "Calendar | NexusCloud" } },
      { path: "email", component: () => import("@/views/pages/applications-module/email.vue"), meta: { title: "Email | NexusCloud" } },
      { path: "email-compose", component: () => import("@/views/pages/applications-module/email-compose.vue"), meta: { title: "Email Compose | NexusCloud" } },
      { path: "file-manager", component: () => import("@/views/pages/applications-module/file-manager.vue"), meta: { title: "File Manager | NexusCloud" } },
      { path: "notes", component: () => import("@/views/pages/applications-module/notes.vue"), meta: { title: "Notes | NexusCloud" } },
      { path: "todo", component: () => import("@/views/pages/applications-module/todo.vue"), meta: { title: "To Do | NexusCloud" } },
      { path: "workflow-approvals", component: () => import("@/views/pages/applications-module/workflow-approvals.vue"), meta: { title: "Workflow Approvals | NexusCloud" } },
      { path: "workflow-approval-levels", component: () => import("@/views/pages/applications-module/workflow-approval-levels.vue"), meta: { title: "Workflow Approval Levels | NexusCloud" } },
      { path: "workflow-requests", component: () => import("@/views/pages/applications-module/workflow-requests.vue"), meta: { title: "Workflow Request | NexusCloud" } },
      { path: "workflow-actions", component: () => import("@/views/pages/applications-module/workflow-actions.vue"), meta: { title: "Workflow Actions | NexusCloud" } },
    ],
  },
  {
    path: "/calls",
    component: () => import("@/views/pages/applications-module/calls/calls-index.vue"),
    children: [
      { path: "", redirect: "/calls/voice-call" },
      { path: "voice-call", component: () => import("@/views/pages/applications-module/calls/voice-call.vue"), meta: { title: "Voice Call | NexusCloud" } },
      { path: "video-call", component: () => import("@/views/pages/applications-module/calls/video-call.vue"), meta: { title: "Video Call | NexusCloud" } },
    ],
  },
  {
    path: "/layout",
    component: () => import("@/views/pages/layouts-module/layouts-index.vue"),
    children: [
      { path: "", redirect: "/layout/layout-mini" },
      { path: "layout-mini", component: () => import("@/views/pages/layouts-module/layout-mini.vue"), meta: { title: "Layouts Mini | NexusCloud", layout: "mini" } },
      { path: "layout-hoverview", component: () => import("@/views/pages/layouts-module/layout-hoverview.vue"), meta: { title: "Layout Hoverview | NexusCloud", layout: "hoverview" } },
      { path: "layout-hidden", component: () => import("@/views/pages/layouts-module/layout-hidden.vue"), meta: { title: "Layout Hidden | NexusCloud", layout: "hidden" } },
      { path: "layout-fullwidth", component: () => import("@/views/pages/layouts-module/layout-fullwidth.vue"), meta: { title: "Layout Fullwidth | NexusCloud", layout: "full-width" } },
      { path: "layout-rtl", component: () => import("@/views/pages/layouts-module/layout-rtl.vue"), meta: { title: "Layout RTL | NexusCloud", layout: "rtl" } },
    ],
  },
  // ==========================================
  // INVENTORY
  // ==========================================

  // Product
  {
    path: "/inventory/product",
    component: () => import("@/views/pages/Inventory/Product/Product.vue"),
    children: [
      { path: "", redirect: "/inventory/product/list" },
      { path: "list", component: () => import("@/views/pages/Inventory/Product/ProductList.vue"), meta: { title: "Productos | NexusCloud" } },
      { path: "new", component: () => import("@/views/pages/Inventory/Product/ProductForm.vue"), meta: { title: "Nuevo Producto | NexusCloud" } },
      { path: ":recordId/details", component: () => import("@/views/pages/Inventory/Product/ProductDetails.vue"), meta: { title: "Detalles Producto | NexusCloud" } },
      { path: ":recordId/edit", component: () => import("@/views/pages/Inventory/Product/ProductForm.vue"), meta: { title: "Editar Producto | NexusCloud" } },
    ],
  },

  // Category
  {
    path: "/inventory/category",
    component: () => import("@/views/pages/Inventory/ProductCategory/ProductCategory.vue"),
    children: [
      { path: "", redirect: "/inventory/category/list" },
      { path: "list", component: () => import("@/views/pages/Inventory/ProductCategory/ProductCategoryList.vue"), meta: { title: "Categorías | NexusCloud" } },
    ],
  },

  // Brand
  {
    path: "/inventory/brand",
    component: () => import("@/views/pages/Inventory/Brand/Brand.vue"),
    children: [
      { path: "", redirect: "/inventory/brand/list" },
      { path: "list", component: () => import("@/views/pages/Inventory/Brand/BrandList.vue"), meta: { title: "Marcas | NexusCloud" } },
    ],
  },

  // Units of Measure
  {
    path: "/inventory/unit-measure",
    component: () => import("@/views/pages/Inventory/UnitMeasure/UnitMeasure.vue"),
    children: [
      { path: "", redirect: "/inventory/unit-measure/list" },
      { path: "list", component: () => import("@/views/pages/Inventory/UnitMeasure/UnitMeasureList.vue"), meta: { title: "Unidades de Medida | NexusCloud" } },
    ],
  },

  // Location
  {
    path: "/inventory/location",
    component: () => import("@/views/pages/Inventory/Location/Location.vue"),
    children: [
      { path: "", redirect: "/inventory/location/list" },
      { path: "list", component: () => import("@/views/pages/Inventory/Location/LocationList.vue"), meta: { title: "Ubicaciones | NexusCloud" } },
      { path: ":recordId/details", component: () => import("@/views/pages/Inventory/Location/LocationDetails.vue"), meta: { title: "Detalle Almacén | NexusCloud" } },
    ],
  },

  // Product Item (Existencias)
  {
    path: "/inventory/product-item",
    component: () => import("@/views/pages/Inventory/ProductItem/ProductItem.vue"),
    children: [
      { path: "", redirect: "/inventory/product-item/list" },
      { path: "list", component: () => import("@/views/pages/Inventory/ProductItem/ProductItemList.vue"), meta: { title: "Existencias | NexusCloud" } },
    ],
  },

  // Product Item Transactions (Ledger / ajustes)
  {
    path: "/inventory/product-item-transaction",
    component: () => import("@/views/pages/Inventory/ProductItemTransaction/ProductItemTransaction.vue"),
    children: [
      { path: "", redirect: "/inventory/product-item-transaction/list" },
      { path: "list", component: () => import("@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionList.vue"), meta: { title: "Movimientos | NexusCloud" } },
    ],
  },

  // Product Transfers
  {
    path: "/inventory/product-transfer",
    component: () => import("@/views/pages/Inventory/ProductTransfer/ProductTransfer.vue"),
    children: [
      { path: "", redirect: "/inventory/product-transfer/list" },
      { path: "list", component: () => import("@/views/pages/Inventory/ProductTransfer/ProductTransferList.vue"), meta: { title: "Traspasos | NexusCloud" } },
      { path: ":recordId/details", component: () => import("@/views/pages/Inventory/ProductTransfer/ProductTransferDetails.vue"), meta: { title: "Detalle Traspaso | NexusCloud" } },
    ],
  },


  // Inventory General
  {
    path: "/inventory/general",
    component: () => import("@/views/pages/inventory-module/inventory-index.vue"),
    children: [
      { path: "", redirect: "/inventory/products" },
      { path: "products", component: () => import("@/views/pages/inventory-module/products/products.vue"), meta: { title: "Products | NexusCloud" } },
      { path: "add-product", component: () => import("@/views/pages/inventory-module/products/add-product.vue"), meta: { title: "Add Product | NexusCloud" } },
      { path: "edit-product", component: () => import("@/views/pages/inventory-module/products/edit-product.vue"), meta: { title: "Edit Product | NexusCloud" } },
      { path: "categories", component: () => import("@/views/pages/inventory-module/categories.vue"), meta: { title: "Categories | NexusCloud" } },
      { path: "brands", component: () => import("@/views/pages/inventory-module/brands.vue"), meta: { title: "Brands | NexusCloud" } },
      { path: "units", component: () => import("@/views/pages/inventory-module/units.vue"), meta: { title: "Units | NexusCloud" } },
      { path: "inventory", component: () => import("@/views/pages/inventory-module/inventory.vue"), meta: { title: "Inventory | NexusCloud" } },
      { path: "suppliers", component: () => import("@/views/pages/inventory-module/suppliers.vue"), meta: { title: "Suppliers | NexusCloud" } },
      { path: "warehouse", component: () => import("@/views/pages/inventory-module/warehouse.vue"), meta: { title: "Warehouse | NexusCloud" } },
    ],
  },

  // ==========================================
  // SALES
  // ==========================================
  {
    path: "/sales/currency",
    component: () => import("@/views/pages/Sales/Currency/Currency.vue"),
    children: [
      { path: "", redirect: "/sales/currency/list" },
      { path: "list", component: () => import("@/views/pages/Sales/Currency/CurrencyList.vue"), meta: { title: "Monedas | NexusCloud" } }
    ]
  },
  {
    path: "/sales/payment-methods",
    component: () => import("@/views/pages/Sales/PaymentMethod/PaymentMethod.vue"),
    children: [
      { path: "", redirect: "/sales/payment-methods/list" },
      { path: "list", component: () => import("@/views/pages/Sales/PaymentMethod/PaymentMethodList.vue"), meta: { title: "Métodos de Pago | NexusCloud" } }
    ]
  },
  {
    path: "/sales/banks",
    component: () => import("@/views/pages/Sales/Bank/Bank.vue"),
    children: [
      { path: "", redirect: "/sales/banks/list" },
      { path: "list", component: () => import("@/views/pages/Sales/Bank/BankList.vue"), meta: { title: "Bancos | NexusCloud" } }
    ]
  },
  //Customer
  {
    path: "/sales/customer",
    component: () => import("@/views/pages/Sales/Customer/Customer.vue"),
    children: [
      { path: "", redirect: "/sales/customer/list" },
      { path: "list", component: () => import("@/views/pages/Sales/Customer/CustomerList.vue"), meta: { title: "Clientes | NexusCloud" } },
      { path: ":recordId/details", component: () => import("@/views/pages/Sales/Customer/CustomerDetails.vue"), meta: { title: "Detalles Cliente | NexusCloud" } }
    ]
  },
  
  //Tax Profile
  {
    path: "/sales/tax-profile",
    component: () => import("@/views/pages/Sales/TaxProfile/TaxProfile.vue"),
    children: [
      { path: "", redirect: "/sales/tax-profile/list" },
      { path: "list", component: () => import("@/views/pages/Sales/TaxProfile/TaxProfileList.vue"), meta: { title: "Perfiles Fiscales | NexusCloud" } }
    ]
  },
  {
    path: "/sales/pricebook",
    component: () => import("@/views/pages/Sales/Pricebook/Pricebook.vue"),
    children: [
      { path: "", redirect: "/sales/pricebook/list" },
      { path: "list", component: () => import("@/views/pages/Sales/Pricebook/PricebookList.vue"), meta: { title: "Listas de Precios | NexusCloud" } },
      { path: ":recordId/details", component: () => import("@/views/pages/Sales/Pricebook/PricebookDetails.vue"), meta: { title: "Detalles Lista de Precio | NexusCloud" } }
    ]
  },
  {
    path: "/sales/product-price",
    component: () => import("@/views/pages/Sales/PricebookEntry/PricebookEntry.vue"),
    children: [
      { path: "", redirect: "/sales/product-price/list" },
      { path: "list", component: () => import("@/views/pages/Sales/PricebookEntry/PricebookEntryList.vue"), meta: { title: "Precios de Productos | NexusCloud" } }
    ]
  },

  //System Module
  {
    path: "/system",
    component: () => import("@/views/pages/System/Org/Org.vue"), // we can use any container or a generic one
    children: [
      { path: "org/list", component: () => import("@/views/pages/System/Org/OrgList.vue"), meta: { title: "Organizaciones | NexusCloud" } },
      { path: "branch/list", component: () => import("@/views/pages/System/Branch/BranchList.vue"), meta: { title: "Sucursales | NexusCloud" } }
    ]
  },
//Sales Orders
  {
    path: "/sales/sales-orders",
    component: () => import("@/views/pages/Sales/SalesOrder/SalesOrder.vue"),
    children: [
      { path: "", redirect: "/sales/sales-orders/list" },
      { path: "list", component: () => import("@/views/pages/Sales/SalesOrder/SalesOrderList.vue"), meta: { title: "Pedidos | NexusCloud" } },
      { path: "new", component: () => import("@/views/pages/Sales/SalesOrder/SalesOrderForm.vue"), meta: { title: "Nuevo Pedido | NexusCloud" } },
      { path: ":recordId/edit", component: () => import("@/views/pages/Sales/SalesOrder/SalesOrderForm.vue"), meta: { title: "Editar Pedido | NexusCloud" } },
      { path: ":recordId/details", component: () => import("@/views/pages/Sales/SalesOrder/SalesOrderDetails.vue"), meta: { title: "Detalles Pedido | NexusCloud" } }
    ]
  },

  {
    path: "/stock",
    component: () => import("@/views/pages/inventory-module/stock/stock-index.vue"),
    children: [
      { path: "", redirect: "/stock/manage-stock" },
      { path: "manage-stock", component: () => import("@/views/pages/inventory-module/stock/manage-stock.vue"), meta: { title: "Manage Stock | NexusCloud" } },
      { path: "stock-adjustment", component: () => import("@/views/pages/inventory-module/stock/stock-adjustment.vue"), meta: { title: "Stock Adjustment | NexusCloud" } },
      { path: "stock-transfer", component: () => import("@/views/pages/inventory-module/stock/stock-transfer.vue"), meta: { title: "Stock Transfer | NexusCloud" } },
    ],
  },
  {
    path: "/sales",
    component: () => import("@/views/pages/sales-module/sales-index.vue"),
    children: [
      { path: "", redirect: "/sales/customer/list" },
      { path: "customers", component: () => import("@/views/pages/sales-module/customers.vue"), meta: { title: "Customers | NexusCloud" } },
      { path: "sales-orders", component: () => import("@/views/pages/sales-module/sales-orders.vue"), meta: { title: "Sales Orders | NexusCloud" } },
      { path: "recurring-invoices", component: () => import("@/views/pages/sales-module/recurring-invoices.vue"), meta: { title: "Recurring Invoices | NexusCloud" } },
      { path: "add-recurring-invoice", component: () => import("@/views/pages/sales-module/add-recurring-invoice.vue"), meta: { title: "Add Recurring Invoices | NexusCloud" } },
      { path: "edit-recurring-invoice", component: () => import("@/views/pages/sales-module/edit-recurring-invoice.vue"), meta: { title: "Edit Recurring Invoices | NexusCloud" } },
      { path: "recurring-invoice-details", component: () => import("@/views/pages/sales-module/recurring-invoice-details.vue"), meta: { title: "Recurring Invoice Details | NexusCloud" } },
      { path: "invoice-templates", component: () => import("@/views/pages/sales-module/invoice-templates.vue"), meta: { title: "Invoice Templates | NexusCloud" } },
      { path: "credit-notes", component: () => import("@/views/pages/sales-module/credit-notes.vue"), meta: { title: "Credit Notes | NexusCloud" } },
      { path: "add-credit-notes-invoice", component: () => import("@/views/pages/sales-module/add-credit-notes-invoice.vue"), meta: { title: "Add Credit Notes | NexusCloud" } },
      { path: "edit-credit-notes-invoice", component: () => import("@/views/pages/sales-module/edit-credit-notes-invoice.vue"), meta: { title: "Edit Credit Notes | NexusCloud" } },
      { path: "credit-notes-details", component: () => import("@/views/pages/sales-module/credit-notes-details.vue"), meta: { title: "Credit Notes Details | NexusCloud" } },
      { path: "sales-quotes", component: () => import("@/views/pages/sales-module/sales-quotes.vue"), meta: { title: "Sales Quotes | NexusCloud" } },
      { path: "add-sales-quotes", component: () => import("@/views/pages/sales-module/add-sales-quotes.vue"), meta: { title: "Add Sales Quotes | NexusCloud" } },
      { path: "edit-sales-quotes", component: () => import("@/views/pages/sales-module/edit-sales-quotes.vue"), meta: { title: "Edit Sales Quotes | NexusCloud" } },
      { path: "sales-quotes-details", component: () => import("@/views/pages/sales-module/sales-quotes-details.vue"), meta: { title: "Sales Quotes Details | NexusCloud" } },
      { path: "cash-sales", component: () => import("@/views/pages/sales-module/cash-sales.vue"), meta: { title: "Cash Sales | NexusCloud" } },
      { path: "add-cash-sales", component: () => import("@/views/pages/sales-module/add-cash-sales.vue"), meta: { title: "Add Cash Sales | NexusCloud" } },
      { path: "edit-cash-sales", component: () => import("@/views/pages/sales-module/edit-cash-sales.vue"), meta: { title: "Edit Cash Sales | NexusCloud" } },
      { path: "cash-sales-details", component: () => import("@/views/pages/sales-module/cash-sales-details.vue"), meta: { title: "Cash Sales Details | NexusCloud" } },
      { path: "refunds", component: () => import("@/views/pages/sales-module/refunds.vue"), meta: { title: "Refunds | NexusCloud" } },
      { path: "delivery-notes", component: () => import("@/views/pages/sales-module/delivery-notes.vue"), meta: { title: "Delivery Notes | NexusCloud" } },
      { path: "add-delivery-notes-invoice", component: () => import("@/views/pages/sales-module/add-delivery-notes-invoice.vue"), meta: { title: "Add Delivery Notes | NexusCloud" } },
      { path: "edit-delivery-notes-invoice", component: () => import("@/views/pages/sales-module/edit-delivery-notes-invoice.vue"), meta: { title: "Edit Delivery Notes | NexusCloud" } },
      { path: "delivery-note-details", component: () => import("@/views/pages/sales-module/delivery-note-details.vue"), meta: { title: "Delivery Notes Details | NexusCloud" } },
      { path: "sales-analytics", component: () => import("@/views/pages/sales-module/sales-analytics.vue"), meta: { title: "Sales Analytics | NexusCloud" } },
      { path: "add-sales", component: () => import("@/views/pages/sales-module/add-sales.vue"), meta: { title: "Add Sales | NexusCloud" } },
      { path: "edit-sales", component: () => import("@/views/pages/sales-module/edit-sales.vue"), meta: { title: "Edit Sales | NexusCloud" } },
      { path: "sales-details", component: () => import("@/views/pages/sales-module/sales-details.vue"), meta: { title: "Sales Details | NexusCloud" } },
    ],
  },
  // Vendor (Purchase)
  {
    path: "/purchase/vendor",
    component: () => import("@/views/pages/Purchase/Vendor/Vendor.vue"),
    children: [
      { path: "", redirect: "/purchase/vendor/list" },
      { path: "list", component: () => import("@/views/pages/Purchase/Vendor/VendorList.vue"), meta: { title: "Proveedores | NexusCloud" } },
      { path: ":recordId/details", component: () => import("@/views/pages/Purchase/Vendor/VendorDetails.vue"), meta: { title: "Detalles Proveedor | NexusCloud" } }
    ]
  },
  // Purchase Orders
  {
    path: "/purchase/purchase-orders",
    component: () => import("@/views/pages/Purchase/PurchaseOrder/PurchaseOrder.vue"),
    children: [
      { path: "", redirect: "/purchase/purchase-orders/list" },
      { path: "list", component: () => import("@/views/pages/Purchase/PurchaseOrder/PurchaseOrderList.vue"), meta: { title: "Órdenes de Compra | NexusCloud" } },
      { path: "new", component: () => import("@/views/pages/Purchase/PurchaseOrder/PurchaseOrderForm.vue"), meta: { title: "Nueva OC | NexusCloud" } },
      { path: ":recordId/edit", component: () => import("@/views/pages/Purchase/PurchaseOrder/PurchaseOrderForm.vue"), meta: { title: "Editar OC | NexusCloud" } },
      { path: ":recordId/details", component: () => import("@/views/pages/Purchase/PurchaseOrder/PurchaseOrderDetails.vue"), meta: { title: "Detalles OC | NexusCloud" } }
    ]
  },
  // Procurement Analytics (cuentas por pagar / deuda a proveedores)
  {
    path: "/purchase/procurement-analytics",
    component: () => import("@/views/pages/Purchase/ProcurementAnalytics/ProcurementAnalytics.vue"),
    children: [
      { path: "", redirect: "/purchase/procurement-analytics/list" },
      { path: "list", component: () => import("@/views/pages/Purchase/ProcurementAnalytics/ProcurementAnalyticsList.vue"), meta: { title: "Análisis de Compras | NexusCloud" } }
    ]
  },
  {
    path: "/purchase",
    component: () => import("@/views/pages/purchases-module/purchases-index.vue"),
    children: [
      { path: "", redirect: "/purchase/purchases" },
      { path: "purchases", component: () => import("@/views/pages/purchases-module/purchases.vue"), meta: { title: "Purchases | NexusCloud" } },
      { path: "add-purchase", component: () => import("@/views/pages/purchases-module/add-purchase.vue"), meta: { title: "Add Purchases | NexusCloud" } },
      { path: "edit-purchase", component: () => import("@/views/pages/purchases-module/edit-purchase.vue"), meta: { title: "Edit Purchases | NexusCloud" } },
      { path: "purchase-details", component: () => import("@/views/pages/purchases-module/purchase-details.vue"), meta: { title: "Purchase Details | NexusCloud" } },
      { path: "purchase-orders", component: () => import("@/views/pages/purchases-module/purchase-orders.vue"), meta: { title: "Purchase Orders | NexusCloud" } },
      { path: "add-purchase-order", component: () => import("@/views/pages/purchases-module/add-purchase-order.vue"), meta: { title: "Add Purchase Orders | NexusCloud" } },
      { path: "edit-purchase-order", component: () => import("@/views/pages/purchases-module/edit-purchase-order.vue"), meta: { title: "Edit Purchase Orders | NexusCloud" } },
      { path: "purchase-order-details", component: () => import("@/views/pages/purchases-module/purchase-order-details.vue"), meta: { title: "Purchase Orders Details | NexusCloud" } },
      { path: "purchase-return", component: () => import("@/views/pages/purchases-module/purchase-return.vue"), meta: { title: "Purchase Returns | NexusCloud" } },
      { path: "add-purchase-return", component: () => import("@/views/pages/purchases-module/add-purchase-return.vue"), meta: { title: "Add Purchase Returns | NexusCloud" } },
      { path: "edit-purchase-return", component: () => import("@/views/pages/purchases-module/edit-purchase-return.vue"), meta: { title: "Edit Purchase Returns | NexusCloud" } },
      { path: "purchase-return-details", component: () => import("@/views/pages/purchases-module/purchase-return-details.vue"), meta: { title: "Purchase Return Details | NexusCloud" } },
      { path: "vendors", component: () => import("@/views/pages/purchases-module/vendors.vue"), meta: { title: "Vendors | NexusCloud" } },
      { path: "procurement-analytics", component: () => import("@/views/pages/purchases-module/procurement-analytics.vue"), meta: { title: "Procurement Analytics" } },
    ],
  },
  {
    path: "/finance",
    component: () => import("@/views/pages/finance-module/finance-index.vue"),
    children: [
      { path: "", redirect: "/finance/expenses" },
      { path: "expenses", component: () => import("@/views/pages/finance-module/expenses.vue"), meta: { title: "Expenses | NexusCloud" } },
      { path: "expense-category", component: () => import("@/views/pages/finance-module/expense-category.vue"), meta: { title: "Expense Category | NexusCloud" } },
      { path: "payments", component: () => import("@/views/pages/finance-module/payments.vue"), meta: { title: "Payments | NexusCloud" } },
      { path: "cashflow", component: () => import("@/views/pages/finance-module/cashflow.vue"), meta: { title: "Cashflow | NexusCloud" } },
      { path: "budgeting", component: () => import("@/views/pages/finance-module/budgeting.vue"), meta: { title: "Budgeting | NexusCloud" } },
      { path: "taxes", component: () => import("@/views/pages/finance-module/taxes.vue"), meta: { title: "Taxes | NexusCloud" } },
    ],
  },
  {
    path: "/reports",
    component: () => import("@/views/pages/finance-module/reports/reports-index.vue"),
    children: [
      { path: "", redirect: "/reports/expense-summary" },
      { path: "expense-summary", component: () => import("@/views/pages/finance-module/reports/expense-summary.vue"), meta: { title: "Expense Summary | NexusCloud" } },
      { path: "income-summary", component: () => import("@/views/pages/finance-module/reports/income-summary.vue"), meta: { title: "Income Summary | NexusCloud" } },
      { path: "profit-loss", component: () => import("@/views/pages/finance-module/reports/profit-loss.vue"), meta: { title: "Profit Loss | NexusCloud" } },
      { path: "income-expense", component: () => import("@/views/pages/finance-module/reports/income-expense.vue"), meta: { title: "Income Expense | NexusCloud" } },
      { path: "tax-summary", component: () => import("@/views/pages/finance-module/reports/tax-summary.vue"), meta: { title: "Tax Summary | NexusCloud" } },
    ],
  },
  {
    path: "/hrm",
    component: () => import("@/views/pages/hrm-module/hrm-index.vue"),
    children: [
      { path: "", redirect: "/hrm/employees-grid" },
      { path: "employees-grid", component: () => import("@/views/pages/hrm-module/employees-grid.vue"), meta: { title: "Employees Grid | NexusCloud" } },
      { path: "employees", component: () => import("@/views/pages/hrm-module/employees.vue"), meta: { title: "Employees | NexusCloud" } },
      { path: "add-employee", component: () => import("@/views/pages/hrm-module/add-employee.vue"), meta: { title: "Add Employees | NexusCloud" } },
      { path: "edit-employee", component: () => import("@/views/pages/hrm-module/edit-employee.vue"), meta: { title: "Edit Employees | NexusCloud" } },
      { path: "employee-details", component: () => import("@/views/pages/hrm-module/employee-details.vue"), meta: { title: "Employee Details | NexusCloud" } },
      { path: "departments", component: () => import("@/views/pages/hrm-module/departments.vue"), meta: { title: "Departments | NexusCloud" } },
      { path: "designations-roles", component: () => import("@/views/pages/hrm-module/designations-roles.vue"), meta: { title: "Designations Roles | NexusCloud" } },
      { path: "attendance", component: () => import("@/views/pages/hrm-module/attendance.vue"), meta: { title: "Attendance | NexusCloud" } },
      { path: "holidays", component: () => import("@/views/pages/hrm-module/holidays.vue"), meta: { title: "Holidays | NexusCloud" } },
      { path: "payroll", component: () => import("@/views/pages/hrm-module/payroll.vue"), meta: { title: "Payroll | NexusCloud" } },
      { path: "add-payroll", component: () => import("@/views/pages/hrm-module/add-payroll.vue"), meta: { title: "Add Payroll | NexusCloud" } },
      { path: "edit-payroll", component: () => import("@/views/pages/hrm-module/edit-payroll.vue"), meta: { title: "Edit Payroll | NexusCloud" } },
      { path: "performance-appraisal", component: () => import("@/views/pages/hrm-module/performance-appraisal.vue"), meta: { title: "Performance Appraisal | NexusCloud" } },
      { path: "training-development", component: () => import("@/views/pages/hrm-module/training-development.vue"), meta: { title: "Training Development | NexusCloud" } },
      { path: "hr-analytics", component: () => import("@/views/pages/hrm-module/hr-analytics.vue"), meta: { title: "Hr Analytics | NexusCloud" } },
    ],
  },
  {
    path: "/leaves",
    component: () => import("@/views/pages/hrm-module/leaves/leaves-index.vue"),
    children: [
      { path: "", redirect: "/leaves/leave" },
      { path: "leave", component: () => import("@/views/pages/hrm-module/leaves/leave.vue"), meta: { title: "Leave | NexusCloud" } },
      { path: "leave-types", component: () => import("@/views/pages/hrm-module/leaves/leave-types.vue"), meta: { title: "leave Types | NexusCloud" } },
    ],
  },
  {
    path: "/recruitment",
    component: () => import("@/views/pages/hrm-module/recruitment/recruitment-index.vue"),
    children: [
      { path: "", redirect: "/recruitment/recruitment" },
      { path: "recruitment", component: () => import("@/views/pages/hrm-module/recruitment/recruitment.vue"), meta: { title: "Recruitment | NexusCloud" } },
      { path: "sourcing-campaigns", component: () => import("@/views/pages/hrm-module/recruitment/sourcing-campaigns.vue"), meta: { title: "Sourcing Campaigns | NexusCloud" } },
      { path: "recruitment-analytics", component: () => import("@/views/pages/hrm-module/recruitment/recruitment-analytics.vue"), meta: { title: "Recruitment Analytics | NexusCloud" } },
      { path: "add-job-requisition", component: () => import("@/views/pages/hrm-module/recruitment/add-job-requisition.vue"), meta: { title: "Add Job Requisition | NexusCloud" } },
      { path: "edit-job-requisition", component: () => import("@/views/pages/hrm-module/recruitment/edit-job-requisition.vue"), meta: { title: "Edit Job Requisition | NexusCloud" } },
      { path: "candidate-pipline", component: () => import("@/views/pages/hrm-module/recruitment/candidate-pipline.vue"), meta: { title: "Candidate Pipline | NexusCloud" } },
      { path: "interview-scheduler", component: () => import("@/views/pages/hrm-module/recruitment/interview-scheduler.vue"), meta: { title: "Interview Scheduler | NexusCloud" } },
      { path: "offer-management", component: () => import("@/views/pages/hrm-module/recruitment/offer-management.vue"), meta: { title: "Offer Management | NexusCloud" } },
      { path: "onboarding", component: () => import("@/views/pages/hrm-module/recruitment/onboarding.vue"), meta: { title: "Onboarding | NexusCloud" } },
    ],
  },
  {
    path: "/crm",
    component: () => import("@/views/pages/crm-module/crm-index.vue"),
    children: [
      { path: "", redirect: "/crm/contacts" },
      { path: "contacts-grid", component: () => import("@/views/pages/crm-module/contacts-grid.vue"), meta: { title: "Contacts Grid | NexusCloud" } },
      { path: "contacts", component: () => import("@/views/pages/crm-module/contacts.vue"), meta: { title: "Contacts | NexusCloud" } },
      { path: "contact-details", component: () => import("@/views/pages/crm-module/contact-details.vue"), meta: { title: "Contacts Details | NexusCloud" } },
      { path: "leads-grid", component: () => import("@/views/pages/crm-module/leads-grid.vue"), meta: { title: "Leads Grid | NexusCloud" } },
      { path: "leads", component: () => import("@/views/pages/crm-module/leads.vue"), meta: { title: "Leads | NexusCloud" } },
      { path: "lead-details", component: () => import("@/views/pages/crm-module/lead-details.vue"), meta: { title: "Leads Details | NexusCloud" } },
      { path: "deals", component: () => import("@/views/pages/crm-module/deals.vue"), meta: { title: "Deals | NexusCloud" } },
      { path: "deals-grid", component: () => import("@/views/pages/crm-module/deals-grid.vue"), meta: { title: "Deals Grid | NexusCloud" } },
      { path: "deal-details", component: () => import("@/views/pages/crm-module/deal-details.vue"), meta: { title: "Deals Details | NexusCloud" } },
      { path: "pipeline", component: () => import("@/views/pages/crm-module/pipeline.vue"), meta: { title: "Pipeline | NexusCloud" } },
      { path: "campaigns", component: () => import("@/views/pages/crm-module/campaigns.vue"), meta: { title: "Campaigns | NexusCloud" } },
      { path: "customer-feedback", component: () => import("@/views/pages/crm-module/customer-feedback.vue"), meta: { title: "Customer Feedback | NexusCloud" } },
      { path: "customer-analytics", component: () => import("@/views/pages/crm-module/customer-analytics.vue"), meta: { title: "Customer Analytics | NexusCloud" } },
    ],
  },
  {
    path: "/projects",
    component: () => import("@/views/pages/projects-module/projects-index.vue"),
    children: [
      { path: "", redirect: "/projects/projects-grid" },
      { path: "projects-grid", component: () => import("@/views/pages/projects-module/projects-grid.vue"), meta: { title: "Projects Grid | NexusCloud" } },
      { path: "projects", component: () => import("@/views/pages/projects-module/projects.vue"), meta: { title: "Projects | NexusCloud" } },
      { path: "project-details", component: () => import("@/views/pages/projects-module/project-details.vue"), meta: { title: "Project Details | NexusCloud" } },
      { path: "tasks-grid", component: () => import("@/views/pages/projects-module/tasks-grid.vue"), meta: { title: "Tasks Grid | NexusCloud" } },
      { path: "tasks", component: () => import("@/views/pages/projects-module/tasks.vue"), meta: { title: "Tasks | NexusCloud" } },
      { path: "task-details", component: () => import("@/views/pages/projects-module/task-details.vue"), meta: { title: "Tasks Details | NexusCloud" } },
      { path: "timesheet", component: () => import("@/views/pages/projects-module/timesheet.vue"), meta: { title: "Timesheet | NexusCloud" } },
      { path: "milestones", component: () => import("@/views/pages/projects-module/milestones.vue"), meta: { title: "Milestones | NexusCloud" } },
      { path: "resource-allocation", component: () => import("@/views/pages/projects-module/resource-allocation.vue"), meta: { title: "Resource Allocation | NexusCloud" } },
      { path: "project-analytics", component: () => import("@/views/pages/projects-module/project-analytics.vue"), meta: { title: "Project Analytics | NexusCloud" } },
    ],
  },
  {
    path: "/pos",
    component: () => import("@/views/pages/pos-module/pos-index.vue"),
    children: [
      { path: "", redirect: "/pos/pos" },
      { path: "pos", component: () => import("@/views/pages/pos-module/pos.vue"), meta: { title: "POS | NexusCloud", hideLayout: true }, },
      { path: "pos-orders", component: () => import("@/views/pages/pos-module/pos-orders.vue"), meta: { title: "POS Orders | NexusCloud" } },
      { path: "barcode-print", component: () => import("@/views/pages/pos-module/barcode-print.vue"), meta: { title: "Barcode Print | NexusCloud" } },
      { path: "qr-code-print", component: () => import("@/views/pages/pos-module/qr-code-print.vue"), meta: { title: "QR Code Print | NexusCloud" } },
      { path: "print-settings", component: () => import("@/views/pages/pos-module/print-settings.vue"), meta: { title: "Print Settings | NexusCloud" } },
    ],
  },
  {
    path: "/assets",
    component: () => import("@/views/pages/assets-module/assets-index.vue"),
    children: [
      { path: "", redirect: "/assets/asset-register" },
      { path: "asset-register", component: () => import("@/views/pages/assets-module/asset-register.vue"), meta: { title: "Assets Register | NexusCloud" } },
      { path: "assignments", component: () => import("@/views/pages/assets-module/assignments.vue"), meta: { title: "Assignments | NexusCloud" } },
      { path: "depreciation", component: () => import("@/views/pages/assets-module/depreciation.vue"), meta: { title: "Depreciation | NexusCloud" } },
      { path: "maintenance", component: () => import("@/views/pages/assets-module/maintenance.vue"), meta: { title: "Maintenance | NexusCloud" } },
      { path: "disposal", component: () => import("@/views/pages/assets-module/disposal.vue"), meta: { title: "Disposal | NexusCloud" } },
      { path: "asset-analytics", component: () => import("@/views/pages/assets-module/asset-analytics.vue"), meta: { title: "Asset Analytics | NexusCloud" } },
    ],
  },
  {
    path: "/documents",
    component: () => import("@/views/pages/documents-module/documents-index.vue"),
    children: [
      { path: "", redirect: "/documents/document-repository" },
      { path: "document-repository", component: () => import("@/views/pages/documents-module/document-repository.vue"), meta: { title: "Document Repository | NexusCloud" } },
      { path: "policies-manuals", component: () => import("@/views/pages/documents-module/policies-manuals.vue"), meta: { title: "Policies Manuals | NexusCloud" } },
      { path: "compliance-docs", component: () => import("@/views/pages/documents-module/compliance-docs.vue"), meta: { title: "Compliance Docs | NexusCloud" } },
      { path: "document-workflows", component: () => import("@/views/pages/documents-module/document-workflows.vue"), meta: { title: "Document Workflows | NexusCloud" } },
    ],
  },
  {
    path: "/support",
    component: () => import("@/views/pages/support-module/support-index.vue"),
    children: [
      { path: "", redirect: "/support/contact-messages" },
      { path: "contact-messages", component: () => import("@/views/pages/support-module/contact-messages.vue"), meta: { title: "Contact Messages | NexusCloud" } },
      { path: "tickets", component: () => import("@/views/pages/support-module/tickets.vue"), meta: { title: "Tickets | NexusCloud" } },
      { path: "ticket-details", component: () => import("@/views/pages/support-module/ticket-details.vue"), meta: { title: "Ticket Details | NexusCloud" } },
      { path: "knowledge-base", component: () => import("@/views/pages/support-module/knowledge-base.vue"), meta: { title: "Knowledge Base | NexusCloud" } },
      { path: "knowledge-base-details", component: () => import("@/views/pages/support-module/knowledge-base-details.vue"), meta: { title: "Knowledge Base Details | NexusCloud" } },
      { path: "sla-management", component: () => import("@/views/pages/support-module/sla-management.vue"), meta: { title: "Sla Management | NexusCloud" } },
    ],
  },
  {
    path: "/membership",
    component: () => import("@/views/pages/membership-module/membership-index.vue"),
    children: [
      { path: "", redirect: "/membership/membership-plans" },
      { path: "membership-plans", component: () => import("@/views/pages/membership-module/membership-plans.vue"), meta: { title: "Membership Plans | NexusCloud" } },
      { path: "add-membership-plan", component: () => import("@/views/pages/membership-module/add-membership-plan.vue"), meta: { title: "Add Membership Plan | NexusCloud" } },
      { path: "membership-addons", component: () => import("@/views/pages/membership-module/membership-addons.vue"), meta: { title: "Membership Addons | NexusCloud" } },
      { path: "transactions", component: () => import("@/views/pages/membership-module/transactions.vue"), meta: { title: "Transactions | NexusCloud" } },
    ],
  },
  {
    path: "/system",
    component: () => import("@/views/pages/system-module/system-index.vue"),
    children: [
      { path: "", redirect: "/system/user-management" },
      { path: "user-management", component: () => import("@/views/pages/system-module/user-management.vue"), meta: { title: "User Management | NexusCloud" } },
      { path: "roles-permissions", component: () => import("@/views/pages/system-module/roles-permissions.vue"), meta: { title: "Roles Permissions | NexusCloud" } },
      { path: "delete-requests", component: () => import("@/views/pages/system-module/delete-requests.vue"), meta: { title: "Delete Requests | NexusCloud" } },
    ],
  },
  {
    path: "/settings",
    component: () => import("@/views/pages/system-module/settings/settings-index.vue"),
    children: [
      { path: "", redirect: "/settings/general-settings" },
      { path: "general-settings", component: () => import("@/views/pages/system-module/settings/general-settings.vue"), meta: { title: "General Settings | NexusCloud" } },
      { path: "security-settings", component: () => import("@/views/pages/system-module/settings/security-settings.vue"), meta: { title: "Security Settings | NexusCloud" } },
      { path: "notifications-settings", component: () => import("@/views/pages/system-module/settings/notifications-settings.vue"), meta: { title: "Notifications Settings | NexusCloud" } },
      { path: "integrations-settings", component: () => import("@/views/pages/system-module/settings/integrations-settings.vue"), meta: { title: "integrations Settings | NexusCloud" } },
    ],
  },
  {
    path: "/utilities",
    component: () => import("@/views/pages/pages-module/utilities/utilities-index.vue"),
    children: [
      { path: "", redirect: "/utilities/blank-page" },
      { path: "blank-page", component: () => import("@/views/pages/pages-module/utilities/blank-page.vue"), meta: { title: "Blank Page | NexusCloud" } },
    ],
  },
  {
    path: "/account",
    component: () => import("@/views/pages/pages-module/account/account-index.vue"),
    children: [
      { path: "", redirect: "/account/profile" },
      { path: "profile", component: () => import("@/views/pages/pages-module/account/profile.vue"), meta: { title: "Profile | NexusCloud" } },
      { path: "edit-profile", component: () => import("@/views/pages/pages-module/account/edit-profile.vue"), meta: { title: "Edit Profile | NexusCloud" } },
    ],
  },
  {
    path: "/base-ui",
    component: () => import("@/views/pages/ui-interface/base-ui/base-ui-index.vue"),
    children: [
      { path: "", redirect: "/base-ui/ui-alerts" },
      { path: "ui-alerts", component: () => import("@/views/pages/ui-interface/base-ui/ui-alerts.vue"), meta: { title: "Alerts | NexusCloud" } },
      { path: "ui-accordion", component: () => import("@/views/pages/ui-interface/base-ui/ui-accordion.vue"), meta: { title: "Accordion | NexusCloud" } },
      { path: "ui-avatar", component: () => import("@/views/pages/ui-interface/base-ui/ui-avatar.vue"), meta: { title: "Avatar | NexusCloud" } },
      { path: "ui-badges", component: () => import("@/views/pages/ui-interface/base-ui/ui-badges.vue"), meta: { title: "Badges | NexusCloud" } },
      { path: "ui-buttons", component: () => import("@/views/pages/ui-interface/base-ui/ui-buttons.vue"), meta: { title: "Buttons | NexusCloud" } },
      { path: "ui-buttons-group", component: () => import("@/views/pages/ui-interface/base-ui/ui-buttons-group.vue"), meta: { title: "Buttons Group | NexusCloud" } },
      { path: "ui-breadcrumb", component: () => import("@/views/pages/ui-interface/base-ui/ui-breadcrumb.vue"), meta: { title: "Breadcrumb | NexusCloud" } },
      { path: "ui-cards", component: () => import("@/views/pages/ui-interface/base-ui/ui-cards.vue"), meta: { title: "Cards | NexusCloud" } },
      { path: "ui-colors", component: () => import("@/views/pages/ui-interface/base-ui/ui-colors.vue"), meta: { title: "Colors | NexusCloud" } },
      { path: "ui-collapse", component: () => import("@/views/pages/ui-interface/base-ui/ui-collapse.vue"), meta: { title: "Collapse | NexusCloud" } },
      { path: "ui-dropdowns", component: () => import("@/views/pages/ui-interface/base-ui/ui-dropdowns.vue"), meta: { title: "Dropdowns | NexusCloud" } },
      { path: "ui-grid", component: () => import("@/views/pages/ui-interface/base-ui/ui-grid.vue"), meta: { title: "Grid | NexusCloud" } },
      { path: "ui-images", component: () => import("@/views/pages/ui-interface/base-ui/ui-images.vue"), meta: { title: "Images | NexusCloud" } },
      { path: "ui-modals", component: () => import("@/views/pages/ui-interface/base-ui/ui-modals.vue"), meta: { title: "Modals | NexusCloud" } },
      { path: "ui-offcanvas", component: () => import("@/views/pages/ui-interface/base-ui/ui-offcanvas.vue"), meta: { title: "Offcanvas | NexusCloud" } },
      { path: "ui-pagination", component: () => import("@/views/pages/ui-interface/base-ui/ui-pagination.vue"), meta: { title: "Pagination | NexusCloud" } },
      { path: "ui-popovers", component: () => import("@/views/pages/ui-interface/base-ui/ui-popovers.vue"), meta: { title: "Popovers | NexusCloud" } },
      { path: "ui-progress", component: () => import("@/views/pages/ui-interface/base-ui/ui-progress.vue"), meta: { title: "Progress | NexusCloud" } },
      { path: "ui-nav-tabs", component: () => import("@/views/pages/ui-interface/base-ui/ui-nav-tabs.vue"), meta: { title: "Nav Tabs | NexusCloud" } },
      { path: "ui-typography", component: () => import("@/views/pages/ui-interface/base-ui/ui-typography.vue"), meta: { title: "Typography | NexusCloud" } },
    ],
  },
  {
    path: "/advance-ui",
    component: () => import("@/views/pages/ui-interface/advance-ui/advance-ui-index.vue"),
    children: [
      { path: "", redirect: "/advance-ui/ui-dragula" },
      { path: "ui-dragula", component: () => import("@/views/pages/ui-interface/advance-ui/ui-dragula.vue"), meta: { title: "Dragula | NexusCloud" } },
      { path: "ui-clipboard", component: () => import("@/views/pages/ui-interface/advance-ui/ui-clipboard.vue"), meta: { title: "Clipboard | NexusCloud" } },
      { path: "ui-rangeslider", component: () => import("@/views/pages/ui-interface/advance-ui/ui-rangeslider.vue"), meta: { title: "Range Slider | NexusCloud" } },
      { path: "ui-lightbox", component: () => import("@/views/pages/ui-interface/advance-ui/ui-lightbox.vue"), meta: { title: "Lightbox | NexusCloud" } },
    ],
  },
  {
    path: "/forms",
    component: () => import("@/views/pages/ui-interface/forms/forms-index.vue"),
    children: [
      { path: "", redirect: "/forms/form-elements" },
      { path: "form-elements", component: () => import("@/views/pages/ui-interface/forms/form-elements.vue"), meta: { title: "Form Elements | NexusCloud" } },
      { path: "form-select2", component: () => import("@/views/pages/ui-interface/forms/form-select2.vue"), meta: { title: "Form Select2 | NexusCloud" } },
      { path: "form-editors", component: () => import("@/views/pages/ui-interface/forms/form-editors.vue"), meta: { title: "Form Editors | NexusCloud" } },
      { path: "form-pickers", component: () => import("@/views/pages/ui-interface/forms/form-pickers.vue"), meta: { title: "Form Pickers | NexusCloud" } },
    ],
  },
  {
    path: "/tables",
    component: () => import("@/views/pages/ui-interface/tables/tables-index.vue"),
    children: [
      { path: "", redirect: "/tables/tables-basic" },
      { path: "tables-basic", component: () => import("@/views/pages/ui-interface/tables/tables-basic.vue"), meta: { title: "Tables Basic | NexusCloud" } },
      { path: "data-tables", component: () => import("@/views/pages/ui-interface/tables/data-tables.vue"), meta: { title: "Data Tables | NexusCloud" } },
    ],
  },
  {
    path: "/charts",
    component: () => import("@/views/pages/ui-interface/charts/charts-index.vue"),
    children: [
      { path: "", redirect: "/charts/chart-apex" },
      { path: "chart-apex", component: () => import("@/views/pages/ui-interface/charts/chart-apex.vue"), meta: { title: "Chart Apex | NexusCloud" } },
      { path: "chart-js", component: () => import("@/views/pages/ui-interface/charts/chart-js.vue"), meta: { title: "ChartJS | NexusCloud" } },
    ],
  },
  {
    path: "/icons",
    component: () => import("@/views/pages/ui-interface/icons/icons-index.vue"),
    children: [
      { path: "", redirect: "/icons/icon-fontawesome" },
      { path: "icon-fontawesome", component: () => import("@/views/pages/ui-interface/icons/icon-fontawesome.vue"), meta: { title: "Font Awesome | NexusCloud" } },
      { path: "icon-tabler", component: () => import("@/views/pages/ui-interface/icons/icon-tabler.vue"), meta: { title: "Tabler Icons | NexusCloud" } },
      { path: "icon-lucide", component: () => import("@/views/pages/ui-interface/icons/icon-lucide.vue"), meta: { title: "Lucide Icons | NexusCloud" } },
      { path: "icon-phosphor", component: () => import("@/views/pages/ui-interface/icons/icon-phosphor.vue"), meta: { title: "Phosphor Icons | NexusCloud" } },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta.title || "NexusCloud";
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;