<template>
  <div>
    <div v-if="showActions || $slots['toolbar-left'] || $slots.actions" class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6 print:hidden">
      <div>
        <slot name="toolbar-left" />
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <slot name="actions" />
        <button v-if="showActions" type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer inline-flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed" :disabled="disabled || bDownloading" @click="handleDownloadPdf">
          <span v-if="bDownloading" class="animate-spin inline-block size-3.5 border-[2px] border-current border-t-transparent rounded-full" role="status" aria-label="Generando PDF"></span>
          <i v-else class="ph ph-download-simple"></i>
          Descargar PDF
        </button>
      </div>
    </div>

    <div id="printableCard" ref="documentBody">
      <slot />
    </div>
  </div>
</template>

<script>
import {
  handleBuildDocumentPdf,
  handleDownloadDocumentPdf,
  handleNormalizePdfFilename
} from '@/utils/printableExportUtils';

export default {
  name: 'NX-Printable',
  props: {
    filename: { type: String, default: 'documento' },
    showActions: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false }
  },
  emits: ['download', 'error'],
  data() {
    return {
      bDownloading: false
    };
  },
  methods: {
    handleGetDocumentElement() {
      return this.$refs.documentBody || null;
    },
    async handleBuildPdf() {
      const elElement = this.handleGetDocumentElement();
      if (!elElement) {
        throw new Error('No printable element provided');
      }
      return handleBuildDocumentPdf(elElement, { filename: this.filename });
    },
    async handleDownloadPdf() {
      if (this.disabled || this.bDownloading) return;

      this.bDownloading = true;
      try {
        const objResult = await handleDownloadDocumentPdf(this.handleGetDocumentElement(), { filename: this.filename });
        this.$emit('download', {
          blob: objResult.blob,
          filename: objResult.filename || handleNormalizePdfFilename(this.filename)
        });
      } catch (objError) {
        this.$emit('error', objError);
      } finally {
        this.bDownloading = false;
      }
    }
  }
};
</script>
