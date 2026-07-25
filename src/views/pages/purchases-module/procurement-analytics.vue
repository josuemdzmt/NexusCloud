<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Procurement Analytics</h1>
                <div class="flex items-center flex-wrap gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i>Print</button>
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

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Total Spend</p>
                            <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-0">$285K</h2>
                        </div>
                        <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center"><i class="ph-duotone ph-currency-circle-dollar text-success"></i></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Active POS</p>
                            <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-0">142</h2>
                        </div>
                        <div class="size-9 rounded-md bg-info-transparent flex items-center justify-center"><i class="ph-duotone ph-receipt text-info"></i></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Suppliers</p>
                            <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-0">48</h2>
                        </div>
                        <div class="size-9 rounded-md bg-warning-transparent flex items-center justify-center"><i class="ph-duotone ph-truck text-warning"></i></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Avg Lead Time</p>
                            <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-0">8.2 days</h2>
                        </div>
                        <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center"><i class="ph-duotone ph-clock text-purple"></i></div>
                    </div>
                </div>

            </div>

            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <div class="relative w-64 search-input">
                            <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                            <input type="text" class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
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
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>Alpha Supplies Inc</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Beta Logistics Ltd</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Star Printers Co</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Quick Rentals</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Bright Cleaning</label> 
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
                        <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i>
                        </button>
                        <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i>
                        </button>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Supplier</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Requestor</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">PO Count</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Total Spend</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Avg Lead Time</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">On-Time %</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Alpha Supplies Inc</td>
                                <td class="py-2.5 px-2 text-sm text-default">Ethan Walker</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">28</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$62,500</td>
                                <td class="py-2.5 px-2 text-sm text-default">7 days</td>
                                <td class="py-2.5 px-2 text-sm text-default">92%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Excellent</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Beta Logistics Ltd</td>
                                <td class="py-2.5 px-2 text-sm text-default">Madison Clark</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">22</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$45,750</td>
                                <td class="py-2.5 px-2 text-sm text-default">9 days</td>
                                <td class="py-2.5 px-2 text-sm text-default">85%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Good</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Star Printers Co</td>
                                <td class="py-2.5 px-2 text-sm text-default">James Harris</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">18</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$28,600</td>
                                <td class="py-2.5 px-2 text-sm text-default">6 days</td>
                                <td class="py-2.5 px-2 text-sm text-default">95%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Excellent</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Quick Rentals</td>
                                <td class="py-2.5 px-2 text-sm text-default">Avery Thompson</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">12</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$14,200</td>
                                <td class="py-2.5 px-2 text-sm text-default">12 days</td>
                                <td class="py-2.5 px-2 text-sm text-default">68%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Average</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Bright Cleaning</td>
                                <td class="py-2.5 px-2 text-sm text-default">Benjamin Wright</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">35</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$58,400</td>
                                <td class="py-2.5 px-2 text-sm text-default">5 days</td>
                                <td class="py-2.5 px-2 text-sm text-default">98%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Excellent</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Green Cafe Supplies</td>
                                <td class="py-2.5 px-2 text-sm text-default">Chloe Mitchell</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">15</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$16,400</td>
                                <td class="py-2.5 px-2 text-sm text-default">8 days</td>
                                <td class="py-2.5 px-2 text-sm text-default">88%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Good</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Tech Soft Ltd</td>
                                <td class="py-2.5 px-2 text-sm text-default">Daniel Roberts</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">20</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$31,300</td>
                                <td class="py-2.5 px-2 text-sm text-default">10 days</td>
                                <td class="py-2.5 px-2 text-sm text-default">75%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Average</span></td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">City Power</td>
                                <td class="py-2.5 px-2 text-sm text-default">Harper Scott</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">9</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$8,900</td>
                                <td class="py-2.5 px-2 text-sm text-default">14 days</td>
                                <td class="py-2.5 px-2 text-sm text-default">55%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Poor</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border-color">
                    <div class="flex items-center gap-2">
                        <span class="text-sm text-default">Showing</span>
                        <select class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28">
                            <option>10 / Pages</option>
                            <option>25 / Pages</option>
                            <option>50 / Pages</option>
                            <option>100 / Pages</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-1">
                        <button class="size-7 rounded-md text-sm bg-dark text-white flex items-center justify-center cursor-pointer">1</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center cursor-pointer">2</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center cursor-pointer">3</button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center cursor-pointer text-default hover:bg-light ml-1"><i class="ph ph-caret-left text-sm"></i></button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center cursor-pointer text-default hover:bg-light"><i class="ph ph-caret-right text-sm"></i></button>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            rangeDate: null
        };
    },
}
</script>