<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Profit &amp; Loss</h1>
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
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                <div class="bg-success/10 border border-border-color rounded-md p-4">
                    <p class="text-sm text-default mb-1">Total Revenue</p>
                    <h2 class="text-xl font-bold text-gray-900 mb-0">$1.24M</h2></div>
                <div class="bg-danger/10 border border-border-color rounded-md p-4">
                    <p class="text-sm text-default mb-1">Total Expenses</p>
                    <h2 class="text-xl font-bold text-gray-900 mb-0">$864K</h2></div>
                <div class="bg-info/10 border border-border-color rounded-md p-4">
                    <p class="text-sm text-default mb-1">Net Profit</p>
                    <h2 class="text-xl font-bold text-gray-900 mb-0">$376K</h2></div>
                <div class="bg-orange/10 border border-border-color rounded-md p-4">
                    <p class="text-sm text-default mb-1">Margin</p>
                    <h2 class="text-xl font-bold text-gray-900 mb-0">30.3%</h2></div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 class="text-sm font-bold text-title mb-2">Statement Breakdown</h3>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            Q3 2026 <i class="icon-chevron-down"></i>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1"> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Q3 2026
                                </a>
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Q2 2025
                                </a> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Q1 2024
                                </a> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Line Item</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Category</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Q1 2024</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Q2 2025</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Q3 2026</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color bg-light">
                                <td class="py-2.5 px-2 text-sm font-bold text-title">REVENUE</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-title ps-6">Product Sales</td>
                                <td class="py-2.5 px-2 text-sm text-default">Income</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$280,000</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$320,000</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$362,000</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">$962,000</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-title ps-6">Service Fees</td>
                                <td class="py-2.5 px-2 text-sm text-default">Income</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$45,000</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$58,000</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$72,000</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">$175,000</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-title ps-6">Recurring Subscriptions</td>
                                <td class="py-2.5 px-2 text-sm text-default">Income</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$32,000</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$36,000</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$39,000</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-gray-900 text-right">$107,000</td>
                            </tr>
                            <tr class="border-b border-border-color bg-light">
                                <td class="py-2.5 px-2 text-sm font-bold text-title">EXPENSES</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-title ps-6">Payroll</td>
                                <td class="py-2.5 px-2 text-sm text-default">Operating</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$140,000</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$145,000</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$152,000</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-danger text-right">-$437,000</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-title ps-6">Office Rent</td>
                                <td class="py-2.5 px-2 text-sm text-default">Operating</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$25,500</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$25,500</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$25,500</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-danger text-right">-$76,500</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-title ps-6">Marketing</td>
                                <td class="py-2.5 px-2 text-sm text-default">Operating</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$18,000</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$32,000</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$28,000</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-danger text-right">-$78,000</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-title ps-6">IT &amp; Cloud</td>
                                <td class="py-2.5 px-2 text-sm text-default">Operating</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$12,500</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$14,000</td>
                                <td class="py-2.5 px-2 text-sm text-danger text-right">-$16,500</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-danger text-right">-$43,000</td>
                            </tr>
                            <tr class="border-b-2 border-border-color bg-light">
                                <td class="py-3 px-2 text-sm font-bold text-title">NET PROFIT</td> 
                                <td></td>
                                <td class="py-3 px-2 text-sm font-bold text-success text-right">$161,000</td>
                                <td class="py-3 px-2 text-sm font-bold text-success text-right">$197,500</td>
                                <td class="py-3 px-2 text-sm font-bold text-success text-right">$251,000</td>
                                <td class="py-3 px-2 text-base font-bold text-success text-right">$609,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main> 
</template>