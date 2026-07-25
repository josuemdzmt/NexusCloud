<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Print Settings</h1>
            </div>

            <div class="flex items-center justify-center">
                <div class="bg-white border border-border-color rounded-md p-5 max-w-3xl">
                    <form class="space-y-5">
                        <div>
                            <h2 class="text-lg font-bold text-title mb-5">Receipt Header</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div><label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Business Name
                                </label>
                                    <input type="text" value="Dreams ERP Store" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                </div>
                                <div>
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Phone</label>
                                    <input type="text" value="+1 555 0123" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                </div>
                                <div class="md:col-span-2">
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Address</label>
                                    <textarea rows="4" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">782 Lincoln Avenue, Sacramento, California, 94203, USA</textarea>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-lg font-bold text-title mb-5 pt-5 border-t border-border-color">Printer Configuration</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div><label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Default Printer</label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>HP Office Jet Pro 9020</option>
                                        <option>Epson TM-T20III</option>
                                        <option>Star TSP143</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Paper Size
                                    </label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>80mm Thermal</option>
                                        <option>A4</option>
                                        <option>Letter</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Copies per Receipt</label>
                                    <input type="number" value="1" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                </div>
                                <div>
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Font Size</label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>Small (10pt)</option>
                                        <option selected>Normal (12pt)</option>
                                        <option>Large (14pt)</option>
                                    </select>
                                    </div>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-lg font-bold text-title mb-5 pt-5 border-t border-border-color">Receipt Options</h2>
                            <div class="space-y-3">
                                <label class="flex items-center justify-between gap-3">
                                    <span class="text-sm text-title">Print Logo</span>
                                    <span class="relative inline-block w-9 h-5 cursor-pointer">
                                        <input type="checkbox" class="sr-only peer" checked>
                                        <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                        <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                                    </span>
                                </label>
                                <label class="flex items-center justify-between gap-3">
                                    <span class="text-sm text-title">Show Cashier Name</span>
                                    <span class="relative inline-block w-9 h-5 cursor-pointer">
                                        <input type="checkbox" class="sr-only peer" checked>
                                        <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                        <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                                    </span>
                                </label>
                                <label class="flex items-center justify-between gap-3">
                                    <span class="text-sm text-title">Show Tax Breakdown</span>
                                    <span class="relative inline-block w-9 h-5 cursor-pointer">
                                        <input type="checkbox" class="sr-only peer" checked>
                                        <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                        <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                                    </span>
                                </label>
                                <label class="flex items-center justify-between gap-3">
                                    <span class="text-sm text-title">Auto-print after Sale</span>
                                    <span class="relative inline-block w-9 h-5 cursor-pointer">
                                        <input type="checkbox" class="sr-only peer">
                                        <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                        <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-2 inline-block">Footer Note</label>
                            <textarea rows="4" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">Thanks for your business! Returns accepted within 7 days with receipt.</textarea>
                        </div>
                    </form>
                    <div class="flex items-center justify-end gap-3 mt-5 pt-5 border-t border-border-color">
                        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancel</button>
                        <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Save Changes</button>
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
