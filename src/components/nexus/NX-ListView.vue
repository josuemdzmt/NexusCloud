<template>
  <div class="p-3 lg:py-6 lg:px-0">
    <div v-if="title" class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
      <component :is="strTitleTag" class="text-gray-900 text-xl font-bold mb-0">{{ title }}</component>
      <div v-if="bShowCreateButton" class="flex items-center gap-2">
        <router-link v-if="createTo" :to="createTo"
          class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">
          <i class="ph ph-plus"></i> {{ createLabel }}
        </router-link>
        <button v-else type="button"
          class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="$emit('create')">
          <i class="ph ph-plus"></i> {{ createLabel }}
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { handleCanShowCreate, objSessionUser } from '@/services/auth/authSession';

export default {
  name: 'NXListView',
  props: {
    title: { type: String, default: '' },
    titleTag: { type: String, default: 'h1' },
    object: { type: String, default: '' },
    child: { type: Boolean, default: false },
    createLabel: { type: String, default: 'Nuevo Registro' },
    createTo: { type: [String, Object], default: null },
    showCreate: { type: Boolean, default: true }
  },
  emits: ['create'],
  computed: {
    lstSessionPermissions() {
      return objSessionUser.value?.permissions || [];
    },
    bCreateRequested() {
      if (this.createTo) return true;
      return typeof this.$.vnode?.props?.onCreate === 'function';
    },
    bShowCreateButton() {
      void this.lstSessionPermissions;
      if (!this.bCreateRequested) return false;
      return handleCanShowCreate(this.object, { child: this.child, showCreate: this.showCreate });
    },
    strTitleTag() {
      return this.titleTag === 'h2' ? 'h2' : 'h1';
    }
  }
};
</script>
