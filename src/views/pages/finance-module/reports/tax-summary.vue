<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Tax Summary</h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i> Print</button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                            <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i> 
                        </button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1"> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as PDF
                                </a> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as Excel
                                </a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-1 border-b border-border-color mb-4">
                <router-link :to="all_routes.taxSummary" class="px-4 py-2 text-sm font-semibold text-gray-900 border-b-2 border-primary -mb-px">Purchase Tax</router-link>
                <a href="#sales-tax" class="px-4 py-2 text-sm text-default hover:text-gray-900">Sales Tax</a>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <p class="text-sm text-default text-start mb-2">Total Purchase Tax</p>
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">$1,275</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">↗ 5.68</span>
                        </div>
                        <i class="ph-duotone ph-chart-bar text-2xl text-success"></i>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <p class="text-sm text-default text-start mb-2">Highest Tax Category</p>
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">GST</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">↗ 8.52</span>
                        </div>
                        <i class="ph-duotone ph-chart-bar text-2xl text-info"></i>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <p class="text-sm text-default text-start mb-2">Average Tax per Purchase</p>
                    <div class="flex items-center justify-between">
                        <div> 
                            <h2 class="text-lg font-bold text-gray-900 mb-2">$30.35</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">↗ 11.4</span>
                        </div>
                        <i class="ph-duotone ph-chart-bar text-2xl text-orange"></i>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <p class="text-sm text-default text-start mb-2">Purchase Tax Growth</p>
                    <div class="flex items-center justify-between">
                        <div> 
                            <h2 class="text-lg font-bold text-gray-900 mb-2">+10.5%</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">↗ 5.62</span>
                        </div>
                        <i class="ph-duotone ph-chart-bar text-2xl text-purple"></i>
                    </div>
                </div>
            </div>

            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <div class="relative w-64 search-input"> 
                            <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                            <input type="text" class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-lg bg-white focus:outline-none focus:ring-0" placeholder="Search"> 
                        </div>
                        <div class="relative rangepicker-input w-[220px] h-[28px] leading-none">
                            <span class="absolute inset-y-0 left-0 flex items-center px-3 text-muted-foreground text-dark text-xs!">
                                <i class="icon-calendar"></i>
                            </span>
                            <a-range-picker v-model:value="rangeDate" type="text" class="form-input text-xs! h-[28px] inline-block w-full bg-light border-border-color rounded-md focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color pl-8! ps-8!" data-provider="flatpickr" data-date-format="d M y" data-range-date="true" value="01 Jan 26 to 20 Jan 26" id="picker" />
                        </div>
                    </div>
                    <div class="flex items-center flex-wrap gap-2">
                        <div class="hs-dropdown [--placement:bottom-left] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>Apex Technologies</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Alpha Supplies</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">A1 Electronics</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0"> Astra Traders</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Avenue Accessories</label>
                                    <div class="flex items-center justify-between gap-2 mt-3">
                                        <button type="button" class="btn-sm bg-white w-full border border-border-color text-gray-900 flex items-center justify-center hover:bg-light cursor-pointer">Cancel</button>
                                        <button type="button" class="btn-sm bg-dark w-full border border-dark text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white cursor-pointer">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-arrow-up-down font-normal"></i> Sort By <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        A - Z
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Z - A
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Newest
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Oldest
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        High
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Low
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead><tr class="text-sm text-default border-b border-border-color"><th class="text-left py-2 px-2 font-semibold text-gray-900">Bill ID</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Supplier</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Tax Type</th><th class="text-right py-2 px-2 font-semibold text-gray-900">Tax Amount</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Payment Method</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th></tr></thead>
                        <tbody>
                            <tr class="border-b border-border-color"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#PUR0020</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Alpha Distributors</td><td class="py-2.5 px-2 text-sm text-default">GST 18%</td><td class="py-2.5 px-2 text-sm text-gray-900 text-right">$1,800</td><td class="py-2.5 px-2 text-sm text-default">Bank Transfer</td><td class="py-2.5 px-2 text-sm text-default">11 Sep 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Filed</span></td></tr>
                            <tr class="border-b border-border-color"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#PUR0019</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Beta Industries</td><td class="py-2.5 px-2 text-sm text-default">VAT 12%</td><td class="py-2.5 px-2 text-sm text-gray-900 text-right">$780</td><td class="py-2.5 px-2 text-sm text-default">Credit Card</td><td class="py-2.5 px-2 text-sm text-default">05 Sep 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td></tr>
                            <tr class="border-b border-border-color"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#PUR0018</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Zenith Supplies</td><td class="py-2.5 px-2 text-sm text-default">GST 18%</td><td class="py-2.5 px-2 text-sm text-gray-900 text-right">$216</td><td class="py-2.5 px-2 text-sm text-default">UPI</td><td class="py-2.5 px-2 text-sm text-default">27 Aug 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Filed</span></td></tr>
                            <tr class="border-b border-border-color"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#PUR0017</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Orion Equipments</td><td class="py-2.5 px-2 text-sm text-default">GST 28%</td><td class="py-2.5 px-2 text-sm text-gray-900 text-right">$2,408</td><td class="py-2.5 px-2 text-sm text-default">Cash</td><td class="py-2.5 px-2 text-sm text-default">16 Aug 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Filed</span></td></tr>
                            <tr class="border-b border-border-color"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#PUR0016</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Stellar Tools</td><td class="py-2.5 px-2 text-sm text-default">GST 18%</td><td class="py-2.5 px-2 text-sm text-gray-900 text-right">$1,170</td><td class="py-2.5 px-2 text-sm text-default">Bank Transfer</td><td class="py-2.5 px-2 text-sm text-default">25 Jul 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td></tr>
                            <tr class="border-b-2 border-border-color bg-light"><td class="py-3 px-2 text-sm font-bold text-title" colspan="3">TOTAL TAX</td><td class="py-3 px-2 text-sm font-bold text-gray-900 text-right">$6,374</td><td colspan="3"></td></tr>
                        </tbody>
                    </table>
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
    data() {
        return {
            rangeDate: null,
        };
    },
}
</script>
