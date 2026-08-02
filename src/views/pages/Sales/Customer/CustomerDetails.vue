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
                <div class="flex items-center gap-2 mb-3 flex-wrap">
                  <span :class="['text-[11px] px-2 py-0.5 rounded inline-block', strPersonBadgeClass]">{{ strPersonLabel }}</span>
                  <span :class="['text-[11px] px-2 py-0.5 rounded inline-block', strStatusBadgeClass]">{{ strStatusLabel }}</span>
                </div>
              </div>
              <button type="button" title="Editar" class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer shrink-0" @click="handleEdit">
                <i class="ph ph-pencil-simple"></i>
              </button>
            </div>
            <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
              <div class="flex justify-between">
                <span>RFC / Tax ID</span>
                <span class="text-gray-900 font-semibold text-right">{{ strTaxId }}</span>
              </div>
              <div class="flex justify-between">
                <span>Límite de crédito</span>
                <span class="text-gray-900 font-semibold text-right">${{ handleFormatAmount(fltCreditLimit) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Días de crédito</span>
                <span class="text-gray-900 font-semibold text-right">{{ numCreditDays }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white border border-border-color rounded-md">
            <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
              <button
                v-for="(objTab, numIndex) in lstTabs"
                :key="objTab.id"
                type="button"
                :id="`${objTab.id}-tab`"
                role="tab"
                :aria-selected="numIndex === 0"
                :aria-controls="`${objTab.id}-pane`"
                :data-hs-tab="`#${objTab.id}-pane`"
                class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden"
                :class="{ active: numIndex === 0 }"
              >
                {{ objTab.label }}
              </button>
            </nav>
            <div class="p-4">
              <div id="orders-pane" role="tabpanel" aria-labelledby="orders-tab">
                <SalesOrderRelatedList
                  v-if="recordId"
                  :account-id="recordId"
                />
              </div>
              <div id="payments-pane" class="hidden" role="tabpanel" aria-labelledby="payments-tab">
                <SalesOrderPaymentRelatedList
                  v-if="recordId"
                  ref="paymentRelatedListRef"
                  :account-id="recordId"
                  :b-can-register="true"
                  @register="handleOpenPaymentModal"
                />
              </div>
            </div>
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
import { IS_PERSON_BADGE, STATUS_BADGE } from '@/views/pages/Sales/Customer/CustomerConstants';
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

      // 4. Objetos
      objCustomer: null,

      // 5. Listas
      lstTabs: [
        { id: 'orders', label: 'Órdenes' },
        { id: 'payments', label: 'Abonos' }
      ]
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
    strPersonLabel() {
      return IS_PERSON_BADGE.labelMap[this.bIsPerson] || '—';
    },
    strPersonBadgeClass() {
      return IS_PERSON_BADGE.classMap[this.bIsPerson] || 'bg-secondary-transparent text-secondary';
    },
    strStatus() {
      return this.objCustomer?.status || 'Inactive';
    },
    strStatusLabel() {
      return STATUS_BADGE.labelMap[this.strStatus] || this.strStatus || '—';
    },
    strStatusBadgeClass() {
      return STATUS_BADGE.classMap[this.strStatus] || 'bg-secondary-transparent text-secondary';
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
    this.$nextTick(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
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
