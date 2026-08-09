<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
        <router-link to="/sales/customer/list" class="hover:text-primary">Clientes</router-link>
        <i class="ph ph-caret-right text-[10px]"></i>
        <span>Detalles</span>
      </div>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white border border-border-color rounded-md p-4">
            <div class="flex items-start justify-between mb-3">
              <div class="text-start">
                <h1 class="text-base font-semibold text-title mb-1">{{ strCustomerName }}</h1>
                <p class="text-sm text-default mb-0">{{ strTaxId }}</p>
              </div>
              <button type="button" title="Editar" class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer shrink-0" @click="handleEdit">
                <i class="ph ph-pencil-simple"></i>
              </button>
            </div>
            <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
              <div class="flex justify-between gap-2">
                <span>Tipo de cuenta</span>
                <span class="text-gray-900 font-semibold text-right">{{ strAccountTypeLabel }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Tipo de persona</span>
                <span class="text-gray-900 font-semibold text-right">{{ strPersonLabel }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Estado</span>
                <span class="text-gray-900 font-semibold text-right">{{ strStatusLabel }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Teléfono</span>
                <span class="text-gray-900 font-semibold text-right">{{ objCustomer?.phone || '—' }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Móvil</span>
                <span class="text-gray-900 font-semibold text-right">{{ objCustomer?.mobile || '—' }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Correo</span>
                <span class="text-gray-900 font-semibold text-right break-all">{{ objCustomer?.email || '—' }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Sitio web</span>
                <span class="text-gray-900 font-semibold text-right break-all">{{ objCustomer?.website || '—' }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Límite de crédito</span>
                <span class="text-gray-900 font-semibold text-right">${{ handleFormatAmount(fltCreditLimit) }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Días de crédito</span>
                <span class="text-gray-900 font-semibold text-right">{{ numCreditDays }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white border border-border-color rounded-md">
            <nx-tabset v-model="strActiveTab">
              <nx-tab label="Órdenes" value="orders">
                <SalesOrderRelatedList v-if="recordId" :account-id="recordId" />
              </nx-tab>
              <nx-tab label="Abonos" value="payments">
                <SalesOrderPaymentRelatedList v-if="recordId" ref="paymentRelatedListRef" :account-id="recordId" :b-can-register="true" @register="handleOpenPaymentModal" />
              </nx-tab>
            </nx-tabset>
          </div>
        </div>
      </div>
      <CustomerForm ref="customerFormRef" @success="handleFormSuccess" />
      <SalesOrderPaymentForm ref="paymentFormRef" @refresh="handlePaymentRefresh" />
    </div>
  </main>
</template>

<script>
import CustomerService from '@/services/sales/CustomerService';
import CustomerForm from '@/views/pages/Sales/Customer/CustomerForm.vue';
import SalesOrderRelatedList from '@/views/pages/Sales/SalesOrder/SalesOrderRelatedList.vue';
import SalesOrderPaymentRelatedList from '@/views/pages/Sales/SalesOrderPayment/SalesOrderPaymentRelatedList.vue';
import SalesOrderPaymentForm from '@/views/pages/Sales/SalesOrderPayment/SalesOrderPaymentForm.vue';
import { ACCOUNT_TYPE_BADGE, IS_PERSON_BADGE, STATUS_BADGE } from '@/views/pages/Sales/Customer/CustomerConstants';
import { handleError } from '@/utils/toastUtils';

export default {
  name: 'CustomerDetails',
  components: {
    CustomerForm,
    SalesOrderRelatedList,
    SalesOrderPaymentRelatedList,
    SalesOrderPaymentForm
  },
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 2. Números / IDs
      recordId: null,

      // 3. Strings
      strActiveTab: 'orders',

      // 4. Objetos
      objCustomer: null
    };
  },
  computed: {
    strCustomerName() {
      if (!this.objCustomer) return 'Cargando...';
      if (this.bIsPerson) {
        const strName = `${this.objCustomer.first_name || this.objCustomer.firstName || ''} ${this.objCustomer.last_name || this.objCustomer.lastName || ''} ${this.objCustomer.second_last_name || this.objCustomer.secondLastName || ''}`.trim();
        return strName || '—';
      }
      return this.objCustomer.legal_name || this.objCustomer.legalName || '—';
    },
    bIsPerson() {
      return Boolean(this.objCustomer?.is_person ?? this.objCustomer?.isPerson);
    },
    strAccountType() {
      return this.objCustomer?.account_type || this.objCustomer?.accountType || 'Customer';
    },
    strAccountTypeLabel() {
      return ACCOUNT_TYPE_BADGE.labelMap[this.strAccountType] || this.strAccountType;
    },
    strPersonLabel() {
      return IS_PERSON_BADGE.labelMap[this.bIsPerson] || '—';
    },
    strStatus() {
      return this.objCustomer?.status || 'Inactive';
    },
    strStatusLabel() {
      return STATUS_BADGE.labelMap[this.strStatus] || this.strStatus || '—';
    },
    strTaxId() {
      return this.objCustomer?.tax_id || this.objCustomer?.taxId || '—';
    },
    fltCreditLimit() {
      return parseFloat(this.objCustomer?.credit_limit ?? this.objCustomer?.creditLimit) || 0;
    },
    numCreditDays() {
      const numDays = this.objCustomer?.credit_days ?? this.objCustomer?.creditDays;
      return numDays != null && numDays !== '' ? numDays : '—';
    }
  },
  mounted() {
    this.recordId = this.$route.params.recordId;
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      if (!this.recordId) return;
      this.bSpinner = true;
      CustomerService.getById(this.recordId)
        .then((objResponse) => {
          this.objCustomer = objResponse.data || objResponse;
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener el cliente', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleEdit() {
      const numId = this.objCustomer?.id || this.recordId;
      if (numId && this.$refs.customerFormRef) {
        this.$refs.customerFormRef.handleOpen(numId);
      }
    },
    handleFormSuccess() {
      this.handleGetData();
    },
    handleOpenPaymentModal() {
      if (this.$refs.paymentFormRef && this.recordId) {
        this.$refs.paymentFormRef.handleOpen(null, { accountId: Number(this.recordId) });
      }
    },
    handlePaymentRefresh() {
      if (this.$refs.paymentRelatedListRef) {
        this.$refs.paymentRelatedListRef.handleGetData();
      }
    },
    handleFormatAmount(fltValue) {
      const fltAmount = parseFloat(fltValue) || 0;
      return fltAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
};
</script>
