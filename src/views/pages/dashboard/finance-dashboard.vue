<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">
            

            <!-- Header -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Finance Dashboard</h1>
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

            <!-- Row 1: Revenue vs Expense + Recent Invoices -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4 xxl:col-span-8 xl:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Revenue vs Expense</h2>
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
                    <div id="fin-rev-exp-chart">
                        <apexchart                                        
                            type="bar"
                            height="200"
                            :options="finRevExpChart.chartOptions"
                            :series="finRevExpChart.series"
                            >
                        </apexchart>
                    </div>
                    <div class="flex items-center justify-center gap-4 mt-2 text-[11px]">
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-success"></span><span class="text-default">Revenue</span></div>
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">Expense</span></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 xxl:col-span-4 xl:col-span-5">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Recent Invoices</h2>
                        <router-link :to="all_routes.recurringInvoices" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-desktop-tower text-warning"></i></div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#INV0020</a>
                                    </p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">Apex Computers
                                    </p>
                            </div>
                            </div>
                            <div class="min-w-0 text-start hidden sm:block sm:col-span-3"><p class="text-[11px] text-default mb-0">Amount</p><p class="text-xs font-semibold text-title mb-0">$10,000</p>
                            </div>
                            <div class="text-end sm:col-span-3"><p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid
                                </span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                    <i class="ph-duotone ph-headphones text-info"></i>
                                </div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#INV0019</a></p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">Beats Headphones</p>
                                    </div>
                            </div>
                            <div class="min-w-0 text-start hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Amount</p>
                                <p class="text-xs font-semibold text-title mb-0">$5,000</p>
                            </div>
                            <div class="text-end sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Unpaid</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                    <i class="ph-duotone ph-sneaker text-pink"></i></div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#INV0018</a></p>
                                        <p class="text-xs font-semibold text-title truncate mb-0">Dazzle Shoes</p>
                                    </div>
                            </div>
                            <div class="min-w-0 text-start hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Amount</p>
                                <p class="text-xs font-semibold text-title mb-0">$25,000</p>
                            </div>
                            <div class="text-end sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Canceled
                                </span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-shopping-bag text-purple"></i></div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#INV0017</a></p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">Best Accessories</p>
                                </div>
                            </div>
                            <div class="min-w-0 text-start hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Amount</p>
                                <p class="text-xs font-semibold text-title mb-0">$15,500</p>
                            </div>
                            <div class="text-end sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Partially
                                </span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                    <i class="ph-duotone ph-storefront text-success"></i>
                                </div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#INV0016</a></p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">A-Z Store</p>
                                </div>
                            </div>
                            <div class="min-w-0 text-start hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Amount</p>
                                <p class="text-xs font-semibold text-title mb-0">$34,000</p>
                            </div>
                            <div class="text-end sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Overdue</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Row 2: 5 KPI cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex justify-between mb-2 items-center"><div>
                        <p class="text-xs text-default mb-1">Total Revenue</p>
                        <h3 class="text-xl font-bold text-gray-900 mb-0">$125,000</h3>
                    </div>
                    <div class="size-9 rounded-md bg-orange-transparent flex items-center justify-center shrink-0">
                        <i class="ph-duotone ph-wallet text-orange"></i>
                    </div>
                </div>
                    <div class="flex items-center gap-2 text-[11px] pt-2 border-t border-border-color">
                        <span class="text-success font-medium inline-flex items-center">
                            <i class="ph ph-arrow-up text-[10px] me-0.5"></i>+12.4%</span>
                            <span class="text-default">Last 30 days</span>
                        </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex justify-between mb-2 items-center"><div>
                        <p class="text-xs text-default mb-1">Total Expenses</p>
                        <h3 class="text-xl font-bold text-gray-900 mb-0">$89,500</h3>
                    </div>
                    <div class="size-9 rounded-md bg-info-transparent flex items-center justify-center shrink-0">
                        <i class="ph-duotone ph-credit-card text-info"></i>
                    </div>
                </div>
                    <div class="flex items-center gap-2 text-[11px] pt-2 border-t border-border-color">
                        <span class="text-danger font-medium inline-flex items-center">
                            <i class="ph ph-arrow-down text-[10px] me-0.5"></i>-6.8%
                        </span>
                            <span class="text-default">Last 30 days</span>
                        </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex justify-between mb-2 items-center"><div>
                        <p class="text-xs text-default mb-1">Pending Invoices</p>
                        <h3 class="text-xl font-bold text-gray-900 mb-0">12</h3>
                    </div>
                    <div class="size-9 rounded-md bg-pink-transparent flex items-center justify-center shrink-0">
                        <i class="ph-duotone ph-file-text text-pink"></i>
                    </div>
                </div>
                    <div class="flex items-center gap-2 text-[11px] pt-2 border-t border-border-color">
                        <span class="text-success font-medium inline-flex items-center">
                            <i class="ph ph-arrow-up text-[10px] me-0.5"></i>+5.2%</span>
                            <span class="text-default">Last 30 days</span>
                        </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex justify-between mb-2 items-center"><div>
                        <p class="text-xs text-default mb-1">Budget Utilization</p>
                        <h3 class="text-xl font-bold text-gray-900 mb-0">65%</h3>
                    </div>
                        <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-chart-bar text-purple"></i>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] pt-2 border-t border-border-color">
                        <span class="text-success font-medium inline-flex items-center">
                            <i class="ph ph-arrow-up text-[10px] me-0.5"></i>+5.2%
                        </span>
                            <span class="text-default">Last 30 days</span>
                        </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex justify-between mb-2 items-center"><div>
                        <p class="text-xs text-default mb-1">Net Profit / Loss</p>
                        <h3 class="text-xl font-bold text-gray-900 mb-0">$35,500</h3>
                    </div>
                        <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-trend-up text-success"></i>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] pt-2 border-t border-border-color">
                        <span class="text-success font-medium inline-flex items-center">
                            <i class="ph ph-arrow-up text-[10px] me-0.5"></i>+18%
                        </span>
                            <span class="text-default">Last 30 days</span>
                        </div>
                </div>
            </div>

            <!-- Row 3: Revenue donut + Profit Margin vs Sales line + Expenses donut -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-3">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Revenue</h2>
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
                    <div id="fin-revenue-donut" class="flex justify-center">
                        <apexchart                                        
                            type="donut"
                            height="250"
                            :options="finRevenueDonut.chartOptions"
                            :series="finRevenueDonut.series"
                            >
                        </apexchart>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-3 mt-3 text-[11px]">
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-success"></span><span class="text-default">Sales</span></div>
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">Recurring</span></div>
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-purple"></span><span class="text-default">Service Fees</span></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-6">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Profit Margin vs Sales</h2>
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
                    <div id="fin-profit-sales-chart">
                        <apexchart                                        
                            type="line"
                            height="240"
                            :options="finProfitSalesChart.chartOptions"
                            :series="finProfitSalesChart.series"
                            >
                        </apexchart>
                    </div>
                    <div class="flex items-center justify-center gap-4 mt-2 text-[11px]">
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">Profit Margin</span></div>
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-success"></span><span class="text-default">Sales</span></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-3">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Expenses</h2>
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
                    <div id="fin-expense-donut" class="flex justify-center">
                        <apexchart                                        
                            type="donut"
                            height="200"
                            :options="finExpenseDonut.chartOptions"
                            :series="finExpenseDonut.series"
                            >
                        </apexchart>
                    </div>
                    <div class="space-y-1.5 mt-3">
                        <div class="flex items-center justify-between gap-2 text-[11px]"><div class="flex items-center gap-2"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">Salaries</span></div><span class="font-semibold text-gray-900">50%</span></div>
                        <div class="flex items-center justify-between gap-2 text-[11px]"><div class="flex items-center gap-2"><span class="size-2 rounded-full bg-purple"></span><span class="text-default">Marketing</span></div><span class="font-semibold text-gray-900">30%</span></div>
                        <div class="flex items-center justify-between gap-2 text-[11px]"><div class="flex items-center gap-2"><span class="size-2 rounded-full bg-success"></span><span class="text-default">Miscellaneous</span></div><span class="font-semibold text-gray-900">20%</span></div>
                    </div>
                </div>

            </div>

            <!-- Row 4: Recent Payments table -->
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex items-center justify-between mb-3">
                    <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Recent Payments</h2>
                    <router-link :to="all_routes.payments" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-xs text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Payment ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Payee</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Description</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Invoice ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Amount</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Bank &amp; Account</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Payment Method</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAY0020</a></td>
                                <td class="py-2.5 px-2 text-xs text-default">11 Sep 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-success-transparent flex items-center justify-center">
                                            <i class="ph-duotone ph-leaf text-success"></i>
                                        </div>
                                        <span class="text-xs font-semibold text-title">Zenith Supplies</span>
                                    </div>
                                </td>
                                    <td class="py-2.5 px-2 text-xs text-default">Office Stationery</td>
                                    <td class="py-2.5 px-2 text-xs text-default">#INV0020</td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">$10,000</td>
                                    <td class="py-2.5 px-2 text-xs text-default">BOA – 4567329878</td>
                                    <td class="py-2.5 px-2 text-xs text-default">Cash</td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid 
                                            <i class="ph ph-check-circle text-[10px] ms-1"></i>
                                        </span>
                                    </td>
                                </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAY0019</a></td>
                                <td class="py-2.5 px-2 text-xs text-default">05 Sep 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                    <div class="size-7 rounded-md bg-info-transparent flex items-center justify-center">
                                        <i class="ph-duotone ph-triangle text-info"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-title">Delta Traders</span>
                                </div>
                            </td>
                                <td class="py-2.5 px-2 text-xs text-default">Courier Charges</td>
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#INV0019</a></td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$5,000</td>
                                <td class="py-2.5 px-2 text-xs text-default">WF – 9981432098</td>
                                <td class="py-2.5 px-2 text-xs text-default">Credit Card</td>
                                <td class="py-2.5 px-2">
                                    <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Unpaid 
                                        <i class="ph ph-clock text-[10px] ms-1"></i>
                                    </span>
                                    </td>
                                </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAY0018</a></td>
                                <td class="py-2.5 px-2 text-xs text-default">27 Aug 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                    <div class="size-7 rounded-md bg-purple-transparent flex items-center justify-center">
                                        <i class="ph-duotone ph-flower text-purple"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-title">Nova Enterprises</span>
                                </div>
                            </td>
                                <td class="py-2.5 px-2 text-xs text-default">Marketing Flyers</td>
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#INV0018</a></td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$2,000</td>
                                <td class="py-2.5 px-2 text-xs text-default">JPM – 3205987643</td>
                                <td class="py-2.5 px-2 text-xs text-default">Debit Card</td>
                                <td class="py-2.5 px-2">
                                    <span class="inline-flex items-center text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Partially Paid 
                                        <i class="ph ph-gear text-[10px] ms-1"></i></span>
                                    </td>
                                </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAY0017</a></td>
                                <td class="py-2.5 px-2 text-xs text-default">16 Aug 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-orange-transparent flex items-center justify-center">
                                            <i class="ph-duotone ph-factory text-orange"></i>
                                        </div>
                                        <span class="text-xs font-semibold text-title">Apex Manufacturing</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">Office Rent</td>
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#INV0017</a></td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$1,500</td>
                                <td class="py-2.5 px-2 text-xs text-default">CITI – 6721345098</td>
                                <td class="py-2.5 px-2 text-xs text-default">UPI</td>
                                <td class="py-2.5 px-2">
                                    <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid 
                                        <i class="ph ph-check-circle text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#PAY0016</a></td>
                                <td class="py-2.5 px-2 text-xs text-default">25 Jul 2025</td>
                                <td class="py-2.5 px-2">
                                <div class="flex items-center gap-2">
                                    <div class="size-7 rounded-md bg-pink-transparent flex items-center justify-center">
                                        <i class="ph-duotone ph-star text-pink"></i>
                                    </div>
                                        <span class="text-xs font-semibold text-title">Stellar Tools</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">Monthly Cleaning</td>
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#INV0016</a></td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$3,000</td>
                                <td class="py-2.5 px-2 text-xs text-default">BOA – 4567329878</td>
                                <td class="py-2.5 px-2 text-xs text-default">Bank Transfer</td>
                                <td class="py-2.5 px-2">
                                    <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Unpaid 
                                        <i class="ph ph-clock text-[10px] ms-1"></i>
                                    </span>
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
import { finRevExpChart, finRevenueDonut, finProfitSalesChart, finExpenseDonut } from './data.js'
export default {
    setup() {
        return { all_routes };
    },
    data() {
        return {
            rangeDate: null,
            finRevExpChart: finRevExpChart,
            finRevenueDonut: finRevenueDonut,
            finProfitSalesChart: finProfitSalesChart,
            finExpenseDonut: finExpenseDonut,
        }
    }
}
</script>