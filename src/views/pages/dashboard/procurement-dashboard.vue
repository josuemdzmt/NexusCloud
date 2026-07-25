<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Procurement Dashboard</h1>
                <div class="flex items-center gap-2">
                    <div class="relative rangepicker-input w-[220px] h-[28px] leading-none">
                        <span class="absolute inset-y-0 left-0 flex items-center px-3 text-muted-foreground text-dark text-xs!">
                            <i class="icon-calendar"></i>
                        </span>
                        <a-range-picker v-model:value="rangeDate" type="text" class="form-input text-xs! h-[28px] inline-block w-full bg-light border-border-color rounded-md focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color pl-8! ps-8!" data-provider="flatpickr" data-date-format="d M y" data-range-date="true" value="01 Jan 26 to 20 Jan 26" id="picker" />
                    </div>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <i class="icon-download font-normal"></i>  Export <i class="icon-chevron-down"></i>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1"> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as PDF
                                </a>
                                <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as Excel
                                </a>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Row 1: 4 KPI sparkline cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-success flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-user-circle text-white text-lg"></i>
                        </div>
                            <div class="min-w-0"><p class="text-xs text-default mb-1">Total Spend</p>
                                <div class="text-xl font-bold text-gray-900 mb-0">$2,145</div>
                            </div>
                        </div>
                    <div id="proc-spark-1" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="area"
                            height="60"
                            :options="procSpark1.chartOptions"
                            :series="procSpark1.series"
                            >
                        </apexchart>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-purple flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-info text-white text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Purchase Orders</p><div class="text-xl font-bold text-gray-900 mb-0">128</div>
                        </div>
                    </div>
                    <div id="proc-spark-2" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="area"
                            height="60"
                            :options="procSpark2.chartOptions"
                            :series="procSpark2.series"
                            >
                        </apexchart>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-orange flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-clock text-white text-lg"></i>
                        </div>
                        <div class="min-w-0"><p class="text-xs text-default mb-1">On Time Delivery</p>
                            <div class="text-xl font-bold text-gray-900 mb-0">88%</div>
                        </div>
                    </div>
                    <div id="proc-spark-3" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="area"
                            height="60"
                            :options="procSpark3.chartOptions"
                            :series="procSpark3.series"
                            >
                        </apexchart>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-pink flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-credit-card text-white text-lg"></i>
                        </div>
                        <div class="min-w-0"><p class="text-xs text-default mb-1">Avg PO Value</p>
                            <div class="text-xl font-bold text-gray-900 mb-0">$600</div>
                        </div>
                    </div>
                    <div id="proc-spark-4" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="area"
                            height="60"
                            :options="procSpark4.chartOptions"
                            :series="procSpark4.series"
                            >
                        </apexchart>
                    </div>
                </div>
            </div>

            <!-- Row 2: Top Suppliers + Monthly Spend Trend -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-5">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Top Suppliers</h2>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                2026 <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1"> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        2026
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        2025
                                    </a> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        2024
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="proc-top-suppliers-chart">
                        <apexchart                                        
                            type="bar"
                            height="280"
                            :options="procTopSuppliersChart.chartOptions"
                            :series="procTopSuppliersChart.series"
                            >
                        </apexchart>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Monthly Spend Trend</h2>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                January <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1"> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        January
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        February
                                    </a> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        March
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="proc-monthly-spend-chart">
                        <apexchart                                        
                            type="area"
                            height="280"
                            :options="procMonthlySpendChart.chartOptions"
                            :series="procMonthlySpendChart.series"
                            >
                        </apexchart>
                    </div>
                </div>
            </div>

            <!-- Row 3: Payments + Top Orders -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4 lg:col-span-4">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Payments</h2>
                        <router-link :to="all_routes.procurementAnalytics" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-03.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Robert Cosper</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0020</a></p>
                                </div>
                            </div>
                            <div class="text-end">
                                <p class="text-xs font-semibold text-title mb-0">$2,300</p>
                                <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">Paid</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Helen Nelson</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0019</a></p>
                                </div>
                            </div>
                            <div class="text-end">
                                <p class="text-xs font-semibold text-title mb-0">$3,600</p>
                                <span class="text-[10px] bg-warning-transparent text-warning px-1.5 py-0.5 rounded">Pending</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-05.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Thomas Neal</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0018</a></p>
                                </div>
                            </div>
                            <div class="text-end">
                                <p class="text-xs font-semibold text-title mb-0">$4,100</p>
                                <span class="text-[10px] bg-danger-transparent text-danger px-1.5 py-0.5 rounded">Failed
                                </span>
                            </div>
                            </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-06.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Sarah Spivey</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0017</a></p>
                                </div>
                            </div>
                            <div class="text-end">
                                <p class="text-xs font-semibold text-title mb-0">$1,500</p>
                                <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">Paid
                                </span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-07.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Jared Griffin</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0016</a></p>
                                </div>
                            </div>
                            <div class="text-end">
                                <p class="text-xs font-semibold text-title mb-0">$2,700</p>
                                <span class="text-[10px] bg-warning-transparent text-warning px-1.5 py-0.5 rounded">Pending</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 lg:col-span-8">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Top Orders</h2>
                        <router-link :to="all_routes.procurementAnalytics" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i>
                        </router-link>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-xs text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Supplier</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Category</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Amount</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2 text-xs text-default"><a href="#">#ORD0020</a></td>
                                    <td class="py-2.5 px-2">
                                        <div class="flex items-center gap-2">
                                            <div class="size-7 rounded-md bg-success-transparent flex items-center justify-center">
                                                <i class="ph-duotone ph-buildings text-success"></i>
                                            </div>
                                            <span class="text-xs font-semibold text-title">Alpha Distributors</span>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-default">Raw Materials</td>
                                        <td class="py-2.5 px-2 text-xs text-gray-900">$500</td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Delivered 
                                        <i class="ph ph-check text-[10px] ms-1"></i></span>
                                    </td>
                                </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#ORD0019</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-orange-transparent flex items-center justify-center">
                                            <i class="ph-duotone ph-storefront text-orange"></i>
                                        </div>
                                        <span class="text-xs font-semibold text-title">Beta Industries</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">IT Equipment</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$650</td>
                                <td class="py-2.5 px-2">
                                    <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">
                                        Pending <i class="ph ph-clock text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#ORD0018</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-info-transparent flex items-center justify-center">
                                            <i class="ph-duotone ph-leaf text-info"></i>
                                        </div>
                                        <span class="text-xs font-semibold text-title">Zenith Supplies</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">IT Equipment</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$120</td>
                                <td class="py-2.5 px-2">
                                    <span class="inline-flex items-center text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">
                                        In Transit <i class="ph ph-truck text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#ORD0017</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-purple-transparent flex items-center justify-center">
                                            <i class="ph-duotone ph-circle text-purple"></i>
                                        </div>
                                        <span class="text-xs font-semibold text-title">Orion Equipments</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">Office Supplies</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$860</td>
                                <td class="py-2.5 px-2">
                                    <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">
                                        Delivered <i class="ph ph-check text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <!-- Row 4: Supplier Performance + Spend by Category + Order Status -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4 xxl:col-span-4 xl:col-span-12">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Supplier Performance</h2>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                2026 <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1"> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        2026
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        2025
                                    </a> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        2024
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="proc-supplier-perf-chart">
                        <apexchart                                        
                            type="bubble"
                            height="220"
                            :options="procSupplierPerfChart.chartOptions"
                            :series="procSupplierPerfChart.series"
                            >
                        </apexchart>
                    </div>
                    <div class="flex items-center justify-center gap-4 mt-2 text-[11px]"><div class="flex items-center gap-1"><span class="size-2 rounded-full bg-info"></span><span class="text-default">Quality</span></div><div class="flex items-center gap-1"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">Cost Efficiency</span></div></div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 xxl:col-span-4 xl:col-span-6">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Spend by Category</h2>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Weekly <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1"> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Weekly
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Monthly
                                    </a> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Yearly
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center">
                        <div id="proc-spend-cat-chart">
                            <apexchart                                        
                                type="donut"
                                height="320"
                                :options="procSpendCatChart.chartOptions"
                                :series="procSpendCatChart.series"
                                >
                            </apexchart>
                        </div> 
                    </div>
                    <div class="space-y-1.5 mt-3">
                        <div class="flex items-center justify-between gap-2 text-[11px]"><div class="flex items-center gap-2"><span class="size-2 rounded-full bg-success"></span><span class="text-default">Clothing</span></div><span class="font-semibold text-gray-900">42%</span></div>
                        <div class="flex items-center justify-between gap-2 text-[11px]"><div class="flex items-center gap-2"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">Beauty Products</span></div><span class="font-semibold text-gray-900">38%</span></div>
                        <div class="flex items-center justify-between gap-2 text-[11px]"><div class="flex items-center gap-2"><span class="size-2 rounded-full bg-info"></span><span class="text-default">Electronics</span></div><span class="font-semibold text-gray-900">20%</span></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 xxl:col-span-4 xl:col-span-6">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Order Status</h2>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Weekly <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1"> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Weekly
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Monthly
                                    </a> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Yearly
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="proc-order-status-chart" class="flex justify-center">
                        <apexchart                                        
                            type="radialBar"
                            height="200"
                            :options="procOrderStatusChart.chartOptions"
                            :series="procOrderStatusChart.series"
                            >
                        </apexchart>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3">
                        <div class="flex items-center gap-2 text-[11px]"><span class="size-2 rounded-full bg-success"></span><span class="text-default">Approved</span></div>
                        <div class="flex items-center gap-2 text-[11px]"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">Pending</span></div>
                        <div class="flex items-center gap-2 text-[11px]"><span class="size-2 rounded-full bg-info"></span><span class="text-default">Delivered</span></div>
                        <div class="flex items-center gap-2 text-[11px]"><span class="size-2 rounded-full bg-danger"></span><span class="text-default">Rejected</span></div>
                    </div>
                </div>
            </div>

            <!-- Row 5: Recent Procurement Activity -->
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex items-center justify-between mb-3 flex-wrap gap-3">
                    <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Recent Procurement Activity</h2>
                    <router-link :to="all_routes.procurementAnalytics" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link></div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead><tr class="text-xs text-default border-b border-border-color">
                            <th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th>
                            <th class="text-left py-2 px-2 font-semibold text-gray-900">Supplier</th>
                            <th class="text-left py-2 px-2 font-semibold text-gray-900">Requestor</th>
                            <th class="text-left py-2 px-2 font-semibold text-gray-900">Purchase ID</th>
                            <th class="text-left py-2 px-2 font-semibold text-gray-900">Ordered Qty</th>
                            <th class="text-left py-2 px-2 font-semibold text-gray-900">Delivered Qty</th>
                            <th class="text-left py-2 px-2 font-semibold text-gray-900">Delivery Date</th>
                            <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAR0020</a></td>
                                <td class="py-2.5 px-2 text-xs font-semibold text-title">Alpha Distributors</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                        <span class="text-xs font-semibold text-title">Alexander Kenn</span>
                                    </div></td>
                                    <td class="py-2.5 px-2 text-xs text-default"><a href="#">#POD0020</a></td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">02</td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">02</td>
                                    <td class="py-2.5 px-2 text-xs text-default">11 Sep 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Delivered</span>
                                    </td>
                                </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAR0019</a></td>
                                <td class="py-2.5 px-2 text-xs font-semibold text-title">Beta Industries</td>
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2">
                                    <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                    <span class="text-xs font-semibold text-title">Gabriella White</span>
                                </div></td>
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#POD0019</a></td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">03</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">03</td>
                                <td class="py-2.5 px-2 text-xs text-default">05 Sep 2025</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Delivered</span></td>
                                </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAR0018</a></td>
                                <td class="py-2.5 px-2 text-xs font-semibold text-title">Zenith Supplies</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                        <span class="text-xs font-semibold text-title">Christopher Rey</span>
                                    </div></td>
                                    <td class="py-2.5 px-2 text-xs text-default"><a href="#">#POD0018</a></td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">05</td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">05</td>
                                    <td class="py-2.5 px-2 text-xs text-default">27 Aug 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Delivered</span>
                                    </td>
                                    </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAR0017</a></td>
                                <td class="py-2.5 px-2 text-xs font-semibold text-title">Orion Equipments</td>
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2">
                                    <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                    <span class="text-xs font-semibold text-title">Penelope Ton</span>
                                </div></td><td class="py-2.5 px-2 text-xs text-default"><a href="#">#POD0017</a></td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">10</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">04</td>
                                <td class="py-2.5 px-2 text-xs text-default">16 Aug 2025</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Partially Delivered</span>
                                </td>
                                </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAR0011</a></td>
                                <td class="py-2.5 px-2 text-xs font-semibold text-title">Stellar Tools</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                    <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                    <span class="text-xs font-semibold text-title">Catherine Lan</span>
                                </div></td>
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#POD0011</a></td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">07</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">07</td>
                                <td class="py-2.5 px-2 text-xs text-default">18 May 2025</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Delivered</span>
                                </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { procSpark1, procSpark2, procSpark3, procSpark4, procTopSuppliersChart, procMonthlySpendChart, procSupplierPerfChart, procSpendCatChart, procOrderStatusChart } from './data.js'
export default {
    data() {
        return {
            rangeDate: null,
            procSpark1: procSpark1,
            procSpark2: procSpark2,
            procSpark3: procSpark3,
            procSpark4: procSpark4,
            procTopSuppliersChart: procTopSuppliersChart,
            procMonthlySpendChart: procMonthlySpendChart,
            procSupplierPerfChart: procSupplierPerfChart,
            procSpendCatChart: procSpendCatChart,
            procOrderStatusChart: procOrderStatusChart,
        }
    },
    setup() {

        return {
            all_routes,
        }
    },
    mounted() {
        const el = document.getElementById('proc-spend-cat-chart');
        if (el) {
            const chartHeight = 320;
            const clipHeight = chartHeight / 2 + 20;
            el.style.marginBottom = `-${clipHeight}px`;
            const wrapper = document.createElement('div');
            wrapper.style.cssText = `position:relative;overflow:hidden;height:${clipHeight}px;width:100%;`;
            el.parentNode.insertBefore(wrapper, el);
            wrapper.appendChild(el);
        }
    }
}
</script>