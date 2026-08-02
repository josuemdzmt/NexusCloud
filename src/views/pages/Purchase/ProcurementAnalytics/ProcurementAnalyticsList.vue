<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Análisis de Compras</h1>
        <div class="flex items-center flex-wrap gap-2">
          <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer" @click="handlePrint">
            <i class="ph-duotone ph-printer"></i> Imprimir
          </button>
          <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              <i class="icon-download font-normal"></i> Exportar <i class="icon-chevron-down"></i>
            </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
              <div class="p-2 space-y-1">
                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white cursor-pointer" href="#" @click.prevent>Exportar PDF</a>
                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white cursor-pointer" href="#" @click.prevent>Exportar Excel</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
        <div class="bg-white border border-border-color rounded-md p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-default mb-1">Total gastado</p>
              <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-0">{{ strTotalSpendLabel }}</h2>
            </div>
            <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center">
              <i class="ph-duotone ph-currency-circle-dollar text-success"></i>
            </div>
          </div>
        </div>
        <div class="bg-white border border-border-color rounded-md p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-default mb-1">OC activas</p>
              <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-0">{{ numActivePoCount }}</h2>
            </div>
            <div class="size-9 rounded-md bg-info-transparent flex items-center justify-center">
              <i class="ph-duotone ph-receipt text-info"></i>
            </div>
          </div>
        </div>
        <div class="bg-white border border-border-color rounded-md p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-default mb-1">Proveedores</p>
              <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-0">{{ lstVendors.length }}</h2>
            </div>
            <div class="size-9 rounded-md bg-warning-transparent flex items-center justify-center">
              <i class="ph-duotone ph-truck text-warning"></i>
            </div>
          </div>
        </div>
        <div class="bg-white border border-border-color rounded-md p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-default mb-1">Saldo pendiente</p>
              <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-0">{{ strBalanceLabel }}</h2>
            </div>
            <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center">
              <i class="ph-duotone ph-clock text-purple"></i>
            </div>
          </div>
        </div>
      </div>

      <nx-datatable
        key-field="id"
        :data="lstVendors"
        :columns="lstColumns"
        :is-loading="bSpinner"
        :show-date-range="true"
        :show-filters="true"
        :hide-checkbox-column="true"
        @rowaction="handleRowAction"
        @refresh="handleGetData"
      />
    </div>
  </main>
</template>

<script>
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import { handleError } from '@/utils/toastUtils';
import { ORDER_STATUS } from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';

/** Salud de pago por proveedor (equivalente visual Excellent/Good/Average/Poor) */
export const VENDOR_HEALTH_BADGE = {
  classMap: {
    Excellent: 'bg-success-transparent text-success',
    Good: 'bg-success-transparent text-success',
    Average: 'bg-warning-transparent text-warning',
    Poor: 'bg-danger-transparent text-danger'
  },
  labelMap: {
    Excellent: 'Excelente',
    Good: 'Bueno',
    Average: 'Regular',
    Poor: 'Crítico'
  }
};

const ANALYTICS_ACTIONS = {
  rowActions: [
    { label: 'Detalles', name: 'details', icon: 'ph ph-eye' }
  ]
};

export default {
  name: 'ProcurementAnalyticsList',
  data() {
    return {
      bSpinner: false,
      numActivePoCount: 0,
      fltTotalAmount: 0,
      fltTotalBalance: 0,
      lstVendors: [],
      lstColumns: [
        { label: 'Proveedor', fieldName: 'accountName', type: 'text', sortable: true, cellAttributes: { class: 'font-semibold text-title' } },
        { label: '# OC', fieldName: 'poCount', type: 'text', sortable: true },
        { label: 'Total', fieldName: 'totalAmount', type: 'currency', sortable: true },
        { label: 'Pagado', fieldName: 'paidAmount', type: 'currency', sortable: true },
        { label: 'Saldo', fieldName: 'balanceAmount', type: 'currency', sortable: true },
        { label: '% Pagado', fieldName: 'paidPercentLabel', type: 'text', sortable: true },
        { label: 'Estado', fieldName: 'healthStatus', type: 'badge', typeAttributes: VENDOR_HEALTH_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: ANALYTICS_ACTIONS }
      ]
    };
  },
  computed: {
    strTotalSpendLabel() {
      return this.handleFormatCompact(this.fltTotalAmount);
    },
    strBalanceLabel() {
      return this.handleFormatCompact(this.fltTotalBalance);
    }
  },
  mounted() {
    this.handleGetData();
    this.$nextTick(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
  },
  methods: {
    handlePrint() {
      window.print();
    },
    handleGetHealthStatus(fltPaidPercent) {
      if (fltPaidPercent >= 90) return 'Excellent';
      if (fltPaidPercent >= 70) return 'Good';
      if (fltPaidPercent >= 40) return 'Average';
      return 'Poor';
    },
    handleGetAccountName(objAccount) {
      if (!objAccount) return 'Desconocido';
      return objAccount.legal_name
        || `${objAccount.first_name || ''} ${objAccount.last_name || ''}`.trim()
        || 'Desconocido';
    },
    handleAggregateByVendor(lstOrders) {
      const objMap = {};

      lstOrders.forEach((objOrder) => {
        const numAccountId = objOrder.accountId ?? objOrder.account_id ?? objOrder.account?.id ?? 0;
        const fltTotal = parseFloat(objOrder.totalAmount ?? objOrder.total_amount) || 0;
        const fltPaid = parseFloat(objOrder.paidAmount ?? objOrder.paid_amount) || 0;
        const fltBalance = parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0;

        if (!objMap[numAccountId]) {
          objMap[numAccountId] = {
            id: numAccountId,
            accountId: numAccountId,
            accountName: this.handleGetAccountName(objOrder.account),
            poCount: 0,
            totalAmount: 0,
            paidAmount: 0,
            balanceAmount: 0
          };
        }

        objMap[numAccountId].poCount += 1;
        objMap[numAccountId].totalAmount += fltTotal;
        objMap[numAccountId].paidAmount += fltPaid;
        objMap[numAccountId].balanceAmount += fltBalance;
      });

      return Object.values(objMap)
        .map((objVendor) => {
          const fltPaidPercent = objVendor.totalAmount > 0
            ? (objVendor.paidAmount / objVendor.totalAmount) * 100
            : 0;
          return {
            ...objVendor,
            totalAmount: parseFloat(objVendor.totalAmount.toFixed(2)),
            paidAmount: parseFloat(objVendor.paidAmount.toFixed(2)),
            balanceAmount: parseFloat(objVendor.balanceAmount.toFixed(2)),
            paidPercent: fltPaidPercent,
            paidPercentLabel: `${Math.round(fltPaidPercent)}%`,
            healthStatus: this.handleGetHealthStatus(fltPaidPercent)
          };
        })
        .sort((objA, objB) => objB.balanceAmount - objA.balanceAmount);
    },
    handleGetData() {
      this.bSpinner = true;
      PurchaseOrderService.getAll({
        'filter[status]': ORDER_STATUS.ACTIVATED,
        include: 'account,currency',
        sort: '-balance_amount',
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = (Array.isArray(lstData) ? lstData : []).filter((objOrder) => {
            const fltBalance = parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0;
            return fltBalance > 0;
          });

          this.numActivePoCount = lstRaw.length;
          this.fltTotalAmount = lstRaw.reduce((fltSum, objOrder) => {
            return fltSum + (parseFloat(objOrder.totalAmount ?? objOrder.total_amount) || 0);
          }, 0);
          this.fltTotalBalance = lstRaw.reduce((fltSum, objOrder) => {
            return fltSum + (parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0);
          }, 0);
          this.lstVendors = this.handleAggregateByVendor(lstRaw);
        })
        .catch((objError) => {
          handleError('Ocurrió un problema al obtener el análisis de compras', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'details' && row.accountId) {
        this.$router.push(`/purchase/vendor/${row.accountId}/details`);
      }
    },
    handleFormatCompact(fltValue) {
      const fltAmount = parseFloat(fltValue) || 0;
      if (fltAmount >= 1000) {
        const fltK = fltAmount / 1000;
        return `$${fltK % 1 === 0 ? fltK.toFixed(0) : fltK.toFixed(1)}K`;
      }
      return `$${fltAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`;
    }
  }
};
</script>
