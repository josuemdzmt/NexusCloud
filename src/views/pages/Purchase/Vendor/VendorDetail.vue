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
                <span class="text-gray-900 font-semibold text-right">{{ objVendor?.phone || '—' }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Móvil</span>
                <span class="text-gray-900 font-semibold text-right">{{ objVendor?.mobile || '—' }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Correo</span>
                <span class="text-gray-900 font-semibold text-right break-all">{{ objVendor?.email || '—' }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Sitio web</span>
                <span class="text-gray-900 font-semibold text-right break-all">{{ objVendor?.website || '—' }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Límite de crédito</span>
                <span class="text-gray-900 font-semibold text-right">${{ handleFormatAmount(fltCreditLimit) }}</span>
              </div>
              <div class="flex justify-between gap-2">
                <span>Días de crédito</span>
                <span class="text-gray-900 font-semibold text-right">{{ numCreditDays }}</span>
              </div>
              <div class="pt-3 border-t border-border-color">
                <p class="text-default mb-1">Dirección fiscal</p>
                <p class="text-gray-900 font-semibold mb-0 whitespace-pre-line">{{ strBillingAddress }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white border border-border-color rounded-md">
            <nx-tabset v-model="strActiveTab">
              <nx-tab label="Órdenes" value="orders">
                <PurchaseOrderRelatedList v-if="recordId" :account-id="recordId" />
              </nx-tab>
              <nx-tab label="Abonos" value="payments">
                <PurchaseOrderPaymentRelatedList v-if="recordId" ref="paymentRelatedListRef" :account-id="recordId"
                  :b-can-register="true" @register="handleOpenPaymentModal" />
              </nx-tab>
            </nx-tabset>
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
import { handleFormatAddressLines } from '@/views/pages/Sales/SalesOrder/salesOrderUtils';
import { handleError } from '@/utils/toastUtils';

export default {
  name: 'VendorDetail',
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
      strActiveTab: 'orders',
      objVendor: null
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
    },
    strBillingAddress() {
      const objLines = handleFormatAddressLines(
        this.objVendor?.billing_address || this.objVendor?.billingAddress
      );
      const strText = [objLines.street, objLines.cityLine].filter(Boolean).join('\n');
      return strText || '—';
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
