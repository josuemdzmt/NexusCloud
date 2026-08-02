<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
        <router-link to="/purchase/vendor/list" class="hover:text-primary">Proveedores</router-link>
        <i class="ph ph-caret-right text-[10px]"></i>
        <span>Detalles</span>
      </div>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white border border-border-color rounded-md p-4">
            <div class="flex items-start justify-between mb-3">
              <div class="text-start">
                <h1 class="text-base font-semibold text-title mb-1">{{ strVendorName }}</h1>
                <p class="text-sm text-default mb-0">{{ strTaxId }}</p>
              </div>
              <button type="button" title="Editar" class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer shrink-0" @click="handleEdit">
                <i class="ph ph-pencil-simple"></i>
              </button>
            </div>
            <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
              <div class="flex justify-between">
                <span>Tipo de cuenta</span>
                <span class="text-gray-900 font-semibold text-right">{{ strAccountTypeLabel }}</span>
              </div>
              <div class="flex justify-between">
                <span>Tipo de persona</span>
                <span class="text-gray-900 font-semibold text-right">{{ strPersonLabel }}</span>
              </div>
              <div class="flex justify-between">
                <span>Estado</span>
                <span class="text-gray-900 font-semibold text-right">{{ strStatusLabel }}</span>
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
                <PurchaseOrderRelatedList
                  v-if="recordId"
                  :account-id="recordId"
                />
              </div>
              <div id="payments-pane" class="hidden" role="tabpanel" aria-labelledby="payments-tab">
                <PurchaseOrderPaymentRelatedList
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
      <VendorForm ref="vendorFormRef" @success="handleFormSuccess" />
      <PurchaseOrderPaymentForm ref="paymentFormRef" @refresh="handlePaymentRefresh" />
    </div>
  </main>
</template>

<script>
import VendorService from '@/services/purchasing/VendorService';
import VendorForm from '@/views/pages/Purchase/Vendor/VendorForm.vue';
import PurchaseOrderRelatedList from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderRelatedList.vue';
import PurchaseOrderPaymentRelatedList from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentRelatedList.vue';
import PurchaseOrderPaymentForm from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentForm.vue';
import { ACCOUNT_TYPE_BADGE, IS_PERSON_BADGE, STATUS_BADGE } from '@/views/pages/Purchase/Vendor/VendorConstants';
import { handleError } from '@/utils/toastUtils';

export default {
  name: 'VendorDetails',
  components: {
    VendorForm,
    PurchaseOrderRelatedList,
    PurchaseOrderPaymentRelatedList,
    PurchaseOrderPaymentForm
  },
  data() {
    return {
      bSpinner: false,
      recordId: null,
      objVendor: null,
      lstTabs: [
        { id: 'orders', label: 'Órdenes' },
        { id: 'payments', label: 'Abonos' }
      ]
    };
  },
  computed: {
    strVendorName() {
      if (!this.objVendor) return 'Cargando...';
      if (this.bIsPerson) {
        const strName = `${this.objVendor.first_name || this.objVendor.firstName || ''} ${this.objVendor.last_name || this.objVendor.lastName || ''} ${this.objVendor.second_last_name || this.objVendor.secondLastName || ''}`.trim();
        return strName || '—';
      }
      return this.objVendor.legal_name || this.objVendor.legalName || '—';
    },
    bIsPerson() {
      return Boolean(this.objVendor?.is_person ?? this.objVendor?.isPerson);
    },
    strAccountType() {
      return this.objVendor?.account_type || this.objVendor?.accountType || 'Vendor';
    },
    strAccountTypeLabel() {
      return ACCOUNT_TYPE_BADGE.labelMap[this.strAccountType] || this.strAccountType;
    },
    strPersonLabel() {
      return IS_PERSON_BADGE.labelMap[this.bIsPerson] || '—';
    },
    strStatus() {
      return this.objVendor?.status || 'Inactive';
    },
    strStatusLabel() {
      return STATUS_BADGE.labelMap[this.strStatus] || this.strStatus || '—';
    },
    strTaxId() {
      return this.objVendor?.tax_id || this.objVendor?.taxId || '—';
    },
    fltCreditLimit() {
      return parseFloat(this.objVendor?.credit_limit ?? this.objVendor?.creditLimit) || 0;
    },
    numCreditDays() {
      const numDays = this.objVendor?.credit_days ?? this.objVendor?.creditDays;
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
      VendorService.getById(this.recordId)
        .then((objResponse) => {
          this.objVendor = objResponse.data || objResponse;
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener el proveedor', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleEdit() {
      const numId = this.objVendor?.id || this.recordId;
      if (numId && this.$refs.vendorFormRef) {
        this.$refs.vendorFormRef.handleOpen(numId);
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
