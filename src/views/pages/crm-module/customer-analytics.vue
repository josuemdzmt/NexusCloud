<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Customer Analytics</h1>
                <div class="flex items-center gap-2">
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i>
                        </button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1"><a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as PDF</a> <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as Excel</a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Total Customers</p>
                            <h2 class="text-lg gmax-lg:text-[17px] font-bold text-gray-900 mb-1">4,820</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 12.5%</span>
                        </div>
                        <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center"><i class="ph-duotone ph-users text-success"></i></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">New This Month</p>
                            <h2 class="text-lg gmax-lg:text-[17px] font-bold text-gray-900 mb-1">342</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 8.2%</span>
                        </div>
                        <div class="size-9 rounded-md bg-info-transparent flex items-center justify-center"><i class="ph-duotone ph-user-plus text-info"></i></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Retention Rate</p>
                            <h2 class="text-lg gmax-lg:text-[17px] font-bold text-gray-900 mb-1">87.4%</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 2.1%</span></div>
                        <div class="size-9 rounded-md bg-warning-transparent flex items-center justify-center"><i class="ph-duotone ph-trend-up text-warning"></i></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Avg LTV</p>
                            <h2 class="text-lg gmax-lg:text-[17px] font-bold text-gray-900 mb-1">$8,450</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 5.5%</span>
                        </div>
                        <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center"><i class="ph-duotone ph-currency-circle-dollar text-purple"></i></div>
                    </div>
                </div>
                
            </div>
            
            <div class="bg-white border border-border-color rounded-md p-4">
                <p class="text-sm font-semibold text-title mb-3">Top Customer Segments</p>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Segment</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Customers</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Revenue</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Avg Order</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Enterprise</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">128</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$1,250,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$9,765</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 18%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Mid-Market</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">624</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$895,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,434</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 12%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">SMB</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">2,840</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$680,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$240</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 8%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Individual</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">1,228</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$184,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$150</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">↗ 3%</span></td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Trial</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">386</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$0</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$0</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">↗ 22%</span></td>
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