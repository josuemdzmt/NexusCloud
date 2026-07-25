<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Barcode Print</h1>
                <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer"><i class="ph-duotone ph-printer"></i> Print Selected</button>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3">

                <div class="xl:col-span-5 min-w-0">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-title mb-5">Barcode Settings</h2>
                        <form class="space-y-4">
                            <div class="gap-3">
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Product</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Select Product</option>
                                    <option>Apple iPhone 15</option>
                                    <option>Dell XPS 13</option>
                                    <option>Bose QuietComfort 45</option>
                                </select>
                            </div>
                            <div class="grid grid-cols-12 sm:grid-cols-2 gap-3">
                                <div class="col-span-12 sm:col-span-1">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Barcode Type</label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>Code 128</option>
                                        <option>EAN-13</option>
                                        <option>UPC-A</option>
                                    </select>
                                </div>
                                <div class="col-span-12 sm:col-span-1">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Quantity</label>
                                    <input type="number" value="50" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                </div>
                            </div>
                            <div class="grid grid-cols-12 sm:grid-cols-2 gap-3">
                                <div class="col-span-12 sm:col-span-1">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Paper Size</label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>A4</option>
                                        <option>Letter</option>
                                        <option>Label Roll</option>
                                    </select>
                                </div>
                                <div class="col-span-12 sm:col-span-1">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Per Page</label>
                                    <input type="number" value="20" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="flex items-center gap-2 text-sm text-title">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> Show Product Name
                                </label>
                                <label class="flex items-center gap-2 text-sm text-title">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> Show Price
                                </label>
                                <label class="flex items-center gap-2 text-sm text-title">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0"> Show SKU
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="xl:col-span-7 min-w-0">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-title mb-5">Preview</h2>
                        <div class="bg-light rounded-md p-6 grid grid-cols-12 sm:grid-cols-4 gap-3">
                            <div class="bg-white border border-border-color rounded p-2 text-center col-span-12 sm:col-span-1">
                                <div class="flex items-center justify-center text-gray-900  mb-3">
                                    <img src="@/assets/img/icons/barcode.svg" alt="barcode" class="img-fluid">
                                </div>
                                <h2 class="text-sm text-title mb-2 truncate">iPhone 15</h2>
                                <p class="text-sm text-default mb-0">$250</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-2 text-center col-span-12 sm:col-span-1">
                                <div class="flex items-center justify-center text-gray-900  mb-3">
                                    <img src="@/assets/img/icons/barcode.svg" alt="barcode" class="img-fluid">
                                </div>
                                <h2 class="text-sm text-title mb-2 truncate">Dell XPS 13</h2>
                                <p class="text-sm text-default mb-0">$250</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-2 text-center col-span-12 sm:col-span-1">
                                <div class="flex items-center justify-center text-gray-900  mb-3">
                                    <img src="@/assets/img/icons/barcode.svg" alt="barcode" class="img-fluid">
                                </div>
                                <h2 class="text-sm text-title mb-2 truncate">Dell XPS 13</h2>
                                <p class="text-sm text-default mb-0">$250</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-2 text-center col-span-12 sm:col-span-1">
                                <div class="flex items-center justify-center text-gray-900  mb-3">
                                    <img src="@/assets/img/icons/barcode.svg" alt="barcode" class="img-fluid">
                                </div>
                                <h2 class="text-sm text-title mb-2 truncate">Dell XPS 13</h2>
                                <p class="text-sm text-default mb-0">$250</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-2 text-center col-span-12 sm:col-span-1">
                                <div class="flex items-center justify-center text-gray-900  mb-3">
                                    <img src="@/assets/img/icons/barcode.svg" alt="barcode" class="img-fluid">
                                </div>
                                <h2 class="text-sm text-title mb-2 truncate">Dell XPS 13</h2>
                                <p class="text-sm text-default mb-0">$250</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-2 text-center col-span-12 sm:col-span-1">
                                <div class="flex items-center justify-center text-gray-900  mb-3">
                                    <img src="@/assets/img/icons/barcode.svg" alt="barcode" class="img-fluid">
                                </div>
                                <h2 class="text-sm text-title mb-2 truncate">Dell XPS 13</h2>
                                <p class="text-sm text-default mb-0">$250</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-2 text-center col-span-12 sm:col-span-1">
                                <div class="flex items-center justify-center text-gray-900  mb-3">
                                    <img src="@/assets/img/icons/barcode.svg" alt="barcode" class="img-fluid">
                                </div>
                                <h2 class="text-sm text-title mb-2 truncate">Dell XPS 13</h2>
                                <p class="text-sm text-default mb-0">$250</p>
                            </div>
                            <div class="bg-white border border-border-color rounded p-2 text-center col-span-12 sm:col-span-1">
                                <div class="flex items-center justify-center text-gray-900  mb-3">
                                    <img src="@/assets/img/icons/barcode.svg" alt="barcode" class="img-fluid">
                                </div>
                                <h2 class="text-sm text-title mb-2 truncate">Dell XPS 13</h2>
                                <p class="text-sm text-default mb-0">$250</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </main>
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
