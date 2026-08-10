<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6 print:hidden">
        <div>
          <div class="flex items-center gap-2 text-sm text-default mb-1">
            <router-link :to="`${all_routes.salesOrders}/list`" class="hover:text-primary">Órdenes de Venta</router-link>
            <i class="ph ph-caret-right text-[10px]"></i>
            <span>{{ strOrderLabel }}</span>
          </div>
          <h1 class="text-gray-900 text-xl font-bold mb-0">Vista previa de orden</h1>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <router-link v-if="objOrder" :to="`${all_routes.salesOrders}/${objOrder.id}/detail`" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light inline-flex items-center gap-1">
            <i class="ph ph-arrow-left"></i> Detalle
          </router-link>
          <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer inline-flex items-center gap-1" @click="handlePrint">
            <i class="ph ph-printer"></i> Imprimir
          </button>
          <button v-if="bCanEdit" type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer inline-flex items-center gap-1" @click="handleEdit">
            <i class="ph ph-pencil"></i> Editar
          </button>
        </div>
      </div>

      <div v-if="bSpinner && !objOrder" class="bg-white border border-border-color rounded-md p-8 text-center text-default text-sm">
        Cargando...
      </div>

      <div v-else-if="objOrder" class="bg-white border border-border-color rounded-md p-5 sm:p-8 w-full">
        <div class="flex justify-between items-start mb-8 flex-wrap gap-5 lg:flex-nowrap">
          <div>
            <div class="invoice-logo block dark:hidden">
              <img src="@/assets/img/logo-invoice.svg" class="h-16 mb-3" alt="logo">
            </div>
            <div class="invoice-logo-white hidden dark:block">
              <img src="@/assets/img/logo-white.svg" class="h-16 mb-3" alt="logo">
            </div>
          </div>
          <div class="text-start sm:text-right">
            <h2 class="text-xl font-bold text-title uppercase mb-1">Orden de Venta</h2>
            <p class="text-sm text-default mb-0">{{ strOrderLabel }}</p>
            <span :class="handleGetStatusClass(objOrder.status)" class="text-[11px] px-2 py-0.5 rounded mt-2 inline-block">
              {{ handleGetStatusLabel(objOrder.status) }}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 pb-6 border-b border-border-color">
          <div>
            <p class="text-sm text-default mb-2">Compañía</p>
            <p class="text-sm font-semibold text-title mb-2">{{ objCompany.name }}</p>
            <p class="text-sm text-default mb-0">
              {{ objCompany.street }}
              <span class="block pt-1">{{ objCompany.cityLine }}</span>
              <span class="block pt-1">RFC: {{ objCompany.taxId }}</span>
              <span class="block pt-1">{{ objCompany.phone }} · {{ objCompany.email }}</span>
            </p>
          </div>
          <div>
            <p class="text-sm text-default mb-2">Facturar a</p>
            <p class="text-sm font-semibold text-title mb-2">{{ strCustomerName }}</p>
            <p class="text-sm text-default mb-0">
              {{ objCustomer.street }}
              <span class="block pt-1">{{ objCustomer.cityLine }}</span>
              <span class="block pt-1">RFC: {{ strCustomerTaxId }}</span>
              <span class="block pt-1">{{ strCustomerPhone }} · {{ strCustomerEmail }}</span>
            </p>
          </div>
          <div>
            <p class="text-sm text-default mb-2">Datos de la orden</p>
            <div class="text-sm space-y-2">
              <div>
                <span class="text-default">Fecha de venta:</span>
                <span class="text-gray-900 font-semibold"> {{ objOrder.effectiveDate || '—' }}</span>
              </div>
              <div>
                <span class="text-default">Moneda:</span>
                <span class="text-gray-900 font-semibold"> {{ strCurrencyCode }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="text-sm text-default border-b border-border-color bg-light">
                <th class="text-left py-3 px-3 font-semibold text-gray-900">Descripción</th>
                <th class="text-right py-3 px-3 font-semibold text-gray-900">Precio</th>
                <th class="text-right py-3 px-3 font-semibold text-gray-900">Cant.</th>
                <th class="text-right py-3 px-3 font-semibold text-gray-900">Descuento</th>
                <th class="text-right py-3 px-3 font-semibold text-gray-900">Impuesto</th>
                <th class="text-right py-3 px-3 font-semibold text-gray-900">Importe</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!lstLineItems.length">
                <td colspan="6" class="py-6 px-3 text-sm text-center text-default">Sin líneas de producto</td>
              </tr>
              <tr v-for="objLine in lstLineItems" :key="objLine.id" class="border-b border-border-color">
                <td class="py-3 px-3 text-sm font-semibold text-title">
                  {{ objLine.productName || objLine.description || '—' }}
                  <span v-if="objLine.description && objLine.productName && objLine.description !== objLine.productName" class="block font-normal text-default text-xs pt-0.5">
                    {{ objLine.description }}
                  </span>
                </td>
                <td class="py-3 px-3 text-sm text-right">${{ handleFormatAmount(objLine.unitPrice) }}</td>
                <td class="py-3 px-3 text-sm text-right">{{ handleFormatQty(objLine.quantity) }}</td>
                <td class="py-3 px-3 text-sm text-right">${{ handleFormatAmount(objLine.discountAmount) }}</td>
                <td class="py-3 px-3 text-sm text-right">${{ handleFormatAmount(objLine.taxAmount) }}</td>
                <td class="py-3 px-3 text-sm text-right font-semibold">${{ handleFormatAmount(objLine.totalPrice) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex justify-end">
          <div class="w-72 text-sm space-y-2">
            <div class="flex justify-between">
              <span class="text-default">Subtotal</span>
              <span class="text-gray-900 font-semibold">${{ handleFormatAmount(objOrder.subtotal) }}</span>
            </div>
            <div v-if="objOrder.discountAmount > 0" class="flex justify-between">
              <span class="text-default">Descuento</span>
              <span class="text-danger font-semibold">-${{ handleFormatAmount(objOrder.discountAmount) }}</span>
            </div>
            <div v-if="objOrder.totalTaxAmount > 0" class="flex justify-between">
              <span class="text-default">Impuesto</span>
              <span class="text-gray-900 font-semibold">${{ handleFormatAmount(objOrder.totalTaxAmount) }}</span>
            </div>
            <div class="flex justify-between border-t border-border-color pt-2 text-base">
              <span class="font-bold text-title">Total</span>
              <span class="text-primary font-bold">${{ handleFormatAmount(objOrder.grandTotalAmount) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-default">Total de abonos</span>
              <span class="text-success font-semibold">${{ handleFormatAmount(objOrder.paidAmount) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-default">Saldo pendiente</span>
              <span class="text-danger font-semibold">${{ handleFormatAmount(objOrder.balanceAmount) }}</span>
            </div>
          </div>
        </div>

        <div v-if="objOrder.notes || objOrder.termsAndConditions" class="mt-8 pt-6 border-t border-border-color text-sm space-y-4">
          <div v-if="objOrder.notes">
            <h4 class="font-semibold text-gray-900 mb-1">Notas</h4>
            <p class="text-default whitespace-pre-wrap mb-0">{{ objOrder.notes }}</p>
          </div>
          <div v-if="objOrder.termsAndConditions">
            <h4 class="font-semibold text-gray-900 mb-1">Términos y condiciones</h4>
            <p class="text-default whitespace-pre-wrap mb-0">{{ objOrder.termsAndConditions }}</p>
          </div>
        </div>
      </div>

      <SalesOrderForm ref="salesOrderFormRef" @success="handleGetData" />
    </div>
  </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import SalesOrderService from '@/services/sales/SalesOrderService';
import SalesOrderLineItemService from '@/services/sales/SalesOrderLineItemService';
import SalesOrderForm from '@/views/pages/Sales/SalesOrder/SalesOrderForm.vue';
import { handleError } from '@/utils/toastUtils';
import {
  handleGetStatusLabel,
  handleGetStatusClass,
  handleCanEditOrder
} from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';
import {
  handleNormalizeSalesOrder,
  handleNormalizeSalesOrderLineItem
} from '@/views/pages/Sales/SalesOrder/salesOrderUtils';

const OBJ_COMPANY_DUMMY = {
  name: 'NexusCloud S.A. de C.V.',
  street: 'Av. Reforma 123, Col. Centro',
  cityLine: 'Ciudad de México, CDMX 06000',
  taxId: 'NCL010101ABC',
  phone: '+52 55 1234 5678',
  email: 'contacto@nexuscloud.mx'
};

const OBJ_CUSTOMER_DUMMY = {
  name: 'Comercial del Norte S.A. de C.V.',
  street: 'Calle Industria 456, Col. Industrial',
  cityLine: 'Monterrey, N.L. 64000',
  taxId: 'CNO850215XYZ',
  phone: '+52 81 9876 5432',
  email: 'compras@comercialnorte.mx'
};

export default {
  name: 'SalesOrderPreview',
  components: {
    SalesOrderForm
  },
  setup() {
    return {
      all_routes,
      handleGetStatusLabel,
      handleGetStatusClass
    };
  },
  data() {
    return {
      bSpinner: false,
      objOrder: null,
      objCompany: OBJ_COMPANY_DUMMY,
      objCustomer: OBJ_CUSTOMER_DUMMY,
      lstLineItems: []
    };
  },
  computed: {
    strOrderLabel() {
      if (!this.objOrder) return '...';
      return this.objOrder.orderNumber || `SO-${this.objOrder.id}`;
    },
    strCustomerName() {
      const objAccount = this.objOrder?.account;
      if (!objAccount) return this.objCustomer.name;
      return objAccount.legal_name || `${objAccount.first_name || ''} ${objAccount.last_name || ''} ${objAccount.second_last_name || ''}`.trim()
    },
    strCustomerPhone() {
      return this.objOrder?.account?.phone || this.objCustomer.phone;
    },
    strCustomerEmail() {
      return this.objOrder?.account?.email || this.objCustomer.email;
    },
    strCurrencyCode() {
      if (!this.objOrder?.currency) return '—';
      const objCurrency = this.objOrder.currency;
      return objCurrency.code || objCurrency.iso_code || objCurrency.isoCode || '—';
    },
    strCustomerTaxId() {
      return this.objOrder?.account?.tax_id || '—';
    },
    bCanEdit() {
      return this.objOrder && handleCanEditOrder(this.objOrder.status);
    }
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      const recordId = this.$route.params.recordId;
      this.bSpinner = true;

      Promise.all([
        SalesOrderService.getById(recordId, { include: 'account,currency' }),
        SalesOrderLineItemService.getAll({
          'filter[sales_order_id]': recordId,
          include: 'product',
          per_page: 200
        })
      ])
        .then(([objOrderResponse, objLinesResponse]) => {
          this.objOrder = handleNormalizeSalesOrder(objOrderResponse.data || objOrderResponse);
          const lstData = objLinesResponse.data || objLinesResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstLineItems = lstRaw.map(handleNormalizeSalesOrderLineItem);
        })
        .catch((objError) => handleError('Error', 'No se pudo cargar la vista previa', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handlePrint() {
      window.print();
    },
    handleEdit() {
      if (!this.objOrder) return;
      this.$refs.salesOrderFormRef?.handleOpen(this.objOrder.id);
    },
    handleFormatAmount(fltValue) {
      const fltAmount = parseFloat(fltValue) || 0;
      return fltAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    handleFormatQty(fltValue) {
      const fltQty = parseFloat(fltValue) || 0;
      return fltQty.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
    }
  }
};
</script>
