<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">QR Code Print</h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-qr-code-offcanvas"><i class="ph ph-plus"></i> Add New QR Code</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer"><i class="ph-duotone ph-printer"></i> Print Selected</button>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3">

                <div class="xl:col-span-5 min-w-0">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-title mb-5">QR Code Settings</h2>
                        <form class="space-y-4">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">QR Type</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Product</option>
                                    <option>URL</option>
                                    <option>Text</option>
                                    <option>Contact</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Content</label>
                                <textarea rows="4" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">https://dreamserp.com/product/12345</textarea>
                            </div>
                            <div class="grid grid-cols-12 sm:grid-cols-6 gap-3">
                                <div class="col-span-12 sm:col-span-6">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Error Correction</label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>L (7%)</option>
                                        <option>M (15%)</option>
                                        <option>Q (25%)</option>
                                        <option>H (30%)</option>
                                    </select>
                                </div>
                                <div class="col-span-12 sm:col-span-6">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Quantity</label>
                                    <input type="number" value="24" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                </div>
                            </div>
                            <div class="grid grid-cols-12 sm:grid-cols-6 gap-3">
                                <div class="col-span-12 sm:col-span-6">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Foreground</label>
                                    <div class="flex items-center gap-2">
                                        <input type="color" value="#000000" class="size-9 rounded border border-border-color">
                                        <input type="text" value="#000000" class="form-input flex-1 text-sm border border-border-color rounded-md px-3 py-2 focus:outline-none focus:ring-0">
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-6">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Background</label>
                                    <div class="flex items-center gap-2">
                                        <input type="color" value="#ffffff" class="size-9 rounded border border-border-color">
                                        <input type="text" value="#ffffff" class="form-input flex-1 text-sm border border-border-color rounded-md px-3 py-2 focus:outline-none focus:ring-0">
                                    </div>
                                </div>
                            </div>
                            <label class="flex items-center gap-2 text-sm text-title">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0"> Add Logo to QR Code
                            </label>
                        </form>
                    </div>
                </div>

                <div class="xl:col-span-7 min-w-0">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-title mb-5">Preview</h2>
                        <div class="bg-light rounded-md p-6 min-h-[400px] grid grid-cols-12 sm:grid-cols-3 gap-3">
                            <div class="bg-white border border-border-color rounded p-3 text-center col-span-12 sm:col-span-1">
                                <div class="aspect-square bg-light rounded mx-auto mb-2 flex items-center justify-center">
                                    <img src="@/assets/img/icons/qr.svg" alt="qr-ion" class="img-fluid dark:brightness-0 dark:invert">
                                </div>
                                <p class="text-[10px] text-title mb-0 truncate">PROD-QR-1</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-3 text-center col-span-12 sm:col-span-1">
                                <div class="aspect-square bg-light rounded mx-auto mb-2 flex items-center justify-center">
                                    <img src="@/assets/img/icons/qr.svg" alt="qr-ion" class="img-fluid dark:brightness-0 dark:invert">
                                </div>
                                <p class="text-[10px] text-title mb-0 truncate">PROD-QR-2</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-3 text-center col-span-12 sm:col-span-1">
                                <div class="aspect-square bg-light rounded mx-auto mb-2 flex items-center justify-center">
                                    <img src="@/assets/img/icons/qr.svg" alt="qr-ion" class="img-fluid dark:brightness-0 dark:invert">
                                </div>
                                <p class="text-[10px] text-title mb-0 truncate">PROD-QR-3</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-3 text-center col-span-12 sm:col-span-1">
                                <div class="aspect-square bg-light rounded mx-auto mb-2 flex items-center justify-center">
                                    <img src="@/assets/img/icons/qr.svg" alt="qr-ion" class="img-fluid dark:brightness-0 dark:invert">
                                </div>
                                <p class="text-[10px] text-title mb-0 truncate">PROD-QR-4</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-3 text-center col-span-12 sm:col-span-1">
                                <div class="aspect-square bg-light rounded mx-auto mb-2 flex items-center justify-center">
                                    <img src="@/assets/img/icons/qr.svg" alt="qr-ion" class="img-fluid dark:brightness-0 dark:invert">
                                </div>
                                <p class="text-[10px] text-title mb-0 truncate">PROD-QR-5</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-3 text-center col-span-12 sm:col-span-1">
                                <div class="aspect-square bg-light rounded mx-auto mb-2 flex items-center justify-center">
                                    <img src="@/assets/img/icons/qr.svg" alt="qr-ion" class="img-fluid dark:brightness-0 dark:invert">
                                </div>
                                <p class="text-[10px] text-title mb-0 truncate">PROD-QR-6</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </main>
    <qr-code-print-modal></qr-code-print-modal>
</template>

<script>
import { all_routes } from '@/router/all_routes';

export default {
    setup() {

        return {
            all_routes
        };
    },
}
</script>
