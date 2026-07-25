<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">HR Analytics</h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer">
                        <i class="ph-duotone ph-printer"></i> Print</button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
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
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1">
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as PDF</a> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as Excel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Total Employees</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">152</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 8.5%</span>
                        </div>
                        <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center"><i class="ph-duotone ph-users text-success"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Attendance Rate</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">94.2%</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 2.1%</span>
                        </div>
                        <div class="size-9 rounded-md bg-info-transparent flex items-center justify-center">
                            <i class="ph-duotone ph-calendar-check text-info"></i>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Turnover Rate</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">3.8%</h2>
                            <span class="text-[10px] bg-danger-transparent text-danger px-1.5 py-0.5 rounded mt-1 inline-block">↘ 0.5%</span></div>
                        <div class="size-9 rounded-md bg-warning-transparent flex items-center justify-center">
                            <i class="ph-duotone ph-trend-down text-warning"></i>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Avg Tenure</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">3.2 yrs</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 0.3</span>
                        </div>
                        <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center"><i class="ph-duotone ph-clock text-purple"></i></div>
                    </div>
                </div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                <h3 class="text-lg font-bold text-title mb-3">Department Breakdown</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Department</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Employees</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Avg Salary</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Turnover</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Satisfaction</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Engineering</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">45</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$72,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">2.5%</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">4.5/5</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Healthy</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Sales</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">25</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$58,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">5.2%</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">4.1/5</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Watch</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Operations</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">20</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$52,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">3.0%</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">4.3/5</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Healthy</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Design</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">18</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$68,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">2.0%</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">4.7/5</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Healthy</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Marketing</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">14</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$56,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">4.5%</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">4.0/5</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Healthy</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Finance</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">12</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$62,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">1.5%</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">4.6/5</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Healthy</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Support</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">10</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$45,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">6.8%</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">3.8/5</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">At Risk</span></td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">HR</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">8</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$54,000</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">0.0%</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">4.4/5</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Healthy</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>