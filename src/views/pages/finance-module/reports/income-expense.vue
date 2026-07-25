<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Income vs Expense</h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer">
                        <i class="ph-duotone ph-printer"></i> Print
                    </button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-download font-normal"></i> Export 
                                <i class="icon-chevron-down"></i> 
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
                <div class="bg-success-transparent border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <div class="size-8 rounded-md bg-success-100 flex items-center justify-center mb-3"><i class="ph-duotone ph-trend-up text-success"></i></div>
                            <p class="text-sm text-default mb-1">Total Income</p>   
                            <h2 class="text-lg font-bold text-gray-900 mb-0">$152,000</h2>
                        </div>
                        <span class="text-[10px] bg-success text-white px-1.5 py-0.5 rounded">↗ 5.68</span>
                    </div>
                </div>
                <div class="bg-info-transparent border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <div class="size-8 rounded-md bg-info-100 flex items-center justify-center mb-3">
                                <i class="ph-duotone ph-receipt text-info"></i>
                            </div>
                            <p class="text-sm text-default mb-1">Total Expenses</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-0">$100,000</h2>
                        </div>
                            <span class="text-[10px] bg-success text-white px-1.5 py-0.5 rounded">↗ 8.52</span>
                        </div>
                </div>
                <div class="bg-orange-transparent border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <div class="size-8 rounded-md bg-orange-100 flex items-center justify-center mb-3">
                                <i class="ph-duotone ph-currency-circle-dollar text-orange"></i>
                            </div>
                            <p class="text-sm text-default mb-1">Net Difference</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-0">$400,000</h2>
                        </div>
                            <span class="text-[10px] bg-success text-white px-1.5 py-0.5 rounded">↗ 11.4</span>
                        </div>
                </div>
                <div class="bg-purple-transparent border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <div class="size-8 rounded-md bg-purple-100 flex items-center justify-center mb-3">
                                <i class="ph-duotone ph-chart-line text-purple"></i>
                            </div>
                            <p class="text-sm text-default mb-1">Expense Ratio</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-0">80%</h2>
                        </div>
                        <span class="text-[10px] bg-success text-white px-1.5 py-0.5 rounded">↗ 5.62</span>
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
                    <div class="flex items-center gap-2">
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-arrow-up-down font-normal"></i> Sort By <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1"
                                role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        A - Z
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        Z - A
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        Newest
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        Oldest
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        High
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        Low
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i></button>
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i></button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Period</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Income</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Expense</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Difference</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">January 2025</td>
                                <td class="py-2.5 px-2 text-sm text-success text-right">+$98,500</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$62,800</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">+$35,700</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↑ 12%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">February 2025</td>
                                <td class="py-2.5 px-2 text-sm text-success text-right">+$112,300</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$68,200</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">+$44,100</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↑ 8%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">March 2025</td>
                                <td class="py-2.5 px-2 text-sm text-success text-right">+$105,400</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$71,500</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">+$33,900</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">↓ 3%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">April 2025</td>
                                <td class="py-2.5 px-2 text-sm text-success text-right">+$128,900</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$79,400</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">+$49,500</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↑ 15%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">May 2025</td>
                                <td class="py-2.5 px-2 text-sm text-success text-right">+$135,200</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$82,100</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">+$53,100</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↑ 5%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">June 2025</td>
                                <td class="py-2.5 px-2 text-sm text-success text-right">+$142,800</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$85,700</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">+$57,100</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↑ 4%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">July 2025</td>
                                <td class="py-2.5 px-2 text-sm text-success text-right">+$138,500</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$91,200</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">+$47,300</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">↓ 7%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">August 2025</td>
                                <td class="py-2.5 px-2 text-sm text-success text-right">+$152,600</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$88,300</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">+$64,300</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↑ 11%</span></td>
                            </tr>
                            <tr class="border-b-2 border-border-color bg-light">
                                <td class="py-3 px-2 text-sm font-bold text-title">TOTAL</td>
                                <td class="py-3 px-2 text-sm font-bold text-success text-right">+$1,014,200</td>
                                <td class="py-3 px-2 text-sm font-bold text-danger text-right">-$629,200</td>
                                <td class="py-3 px-2 text-base font-bold text-gray-900 text-right">+$385,000</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main> 
</template>
<script>
export default {
    data() {
        return {
            rangeDate: null,
        };
    },
}
</script>
