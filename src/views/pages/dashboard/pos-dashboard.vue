<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <!-- Header -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">POS Dashboard</h1>
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

            <!-- Row 1: Top Products + Product Sales -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-5">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Top Products</h2>
                        <router-link :to="all_routes.products" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                    <i class="ph-fill ph-apple-logo text-gray-900"></i>
                                </div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#PRD0020</a></p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">Apple iPhone 15</p>
                                </div>
                            </div>
                            <div class="min-w-0 hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">No of Sales</p>
                                <p class="text-xs font-semibold text-title mb-0">200</p>
                            </div>
                            <div class="min-w-0 text-end sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Amount</p>
                                <p class="text-xs font-semibold text-title mb-0">$12,800</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-laptop text-gray-900"></i></div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#PRD0019</a></p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">Dell XPS 13 9310</p>
                                </div>
                            </div>
                            <div class="min-w-0 hidden sm:block sm:col-span-3"><p class="text-[11px] text-default mb-0">No of Sales</p><p class="text-xs font-semibold text-title mb-0">170</p></div>
                            <div class="min-w-0 text-end sm:col-span-3"><p class="text-[11px] text-default mb-0">Amount</p><p class="text-xs font-semibold text-title mb-0">$12000</p></div>
                        </div>
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-headphones text-gray-900"></i></div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#PRD0018</a></p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">Bose QuietComfort 45</p>
                                </div>
                            </div>
                            <div class="min-w-0 hidden sm:block sm:col-span-3"><p class="text-[11px] text-default mb-0">No of Sales</p><p class="text-xs font-semibold text-title mb-0">150</p></div>
                            <div class="min-w-0 text-end sm:col-span-3"><p class="text-[11px] text-default mb-0">Amount</p><p class="text-xs font-semibold text-title mb-0">$11500</p></div>
                        </div>
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-sneaker text-gray-900"></i></div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#PRD0017</a></p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">Adidas Running Shoe</p>
                                </div>
                            </div>
                            <div class="min-w-0 hidden sm:block sm:col-span-3"><p class="text-[11px] text-default mb-0">No of Sales</p><p class="text-xs font-semibold text-title mb-0">120</p></div>
                            <div class="min-w-0 text-end sm:col-span-3"><p class="text-[11px] text-default mb-0">Amount</p><p class="text-xs font-semibold text-title mb-0">$11000</p></div>
                        </div>
                        <div class="flex items-center justify-between gap-3 sm:grid grid-cols-1 sm:grid-cols-12">
                            <div class="flex items-center gap-2 min-w-0 sm:col-span-6">
                                <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-device-mobile text-gray-900"></i></div>
                                <div class="min-w-0">
                                    <p class="text-[11px] text-default mb-0"><a href="#">#PRD0012</a></p>
                                    <p class="text-xs font-semibold text-title truncate mb-0">OnePlus 11 5G</p>
                                </div>
                            </div>
                            <div class="min-w-0 hidden sm:block sm:col-span-3"><p class="text-[11px] text-default mb-0">No of Sales</p><p class="text-xs font-semibold text-title mb-0">100</p></div>
                            <div class="min-w-0 text-end sm:col-span-3"><p class="text-[11px] text-default mb-0">Amount</p><p class="text-xs font-semibold text-title mb-0">$10000</p></div>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Product Sales</h2>
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
                    <div class="flex items-center justify-between mb-2 flex-wrap gap-3">
                        <div>
                            <p class="text-xs text-default mb-1">Total Sales</p>
                            <div class="flex items-center gap-2">
                                <h3 class="text-2xl font-bold text-gray-900 mb-0">$2,458,900</h3>
                                <span class="size-5 rounded-full bg-success-transparent text-success inline-flex items-center justify-center text-[10px]"><i class="ph ph-arrow-up-right"></i></span>
                            </div>
                        </div>
                        <span class="text-[11px] bg-light text-default border border-border-color px-2 py-1 rounded">Updated : 15 Jan 2025</span>
                    </div>
                    <div id="pos-product-sales-chart">
                        <apexchart                                        
                            type="bar"
                            height="170"
                            :options="posProductSalesChart.chartOptions"
                            :series="posProductSalesChart.series"
                            >
                        </apexchart>
                    </div>
                </div>

            </div>

            <!-- Row 2: 4 KPI sparkline cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-shopping-bag text-white text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Total Sales</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-0">$45,230</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] mb-1"><span class="text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+12.4%</span>
                        <span class="text-default">Last 30 days</span>
                    </div>
                    <div id="pos-spark-1" class="-mx-4 -mb-4">
                        <apexchart                                        
                                type="area"
                                height="60"
                                :options="posSpark1.chartOptions"
                                :series="posSpark1.series"
                                >
                        </apexchart>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-purple flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-arrows-clockwise text-white text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Repeat Customers</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-0">42%</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] mb-1"><span class="text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+4.33%</span>
                        <span class="text-default">Last 30 days</span>
                    </div>
                    <div id="pos-spark-2" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="area"
                            height="60"
                            :options="posSpark2.chartOptions"
                            :series="posSpark2.series"
                            >
                        </apexchart>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-info flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-list-bullets text-white text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Total Transactions</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-0">1,645</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] mb-1"><span class="text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+5.87%</span>
                        <span class="text-default">Last 30 days</span>
                    </div>
                    <div id="pos-spark-3" class="-mx-4 -mb-4"></div>
                     <apexchart                                        
                        type="area"
                        height="60"
                        :options="posSpark3.chartOptions"
                        :series="posSpark3.series"
                        >
                    </apexchart>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-pink flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-currency-circle-dollar text-white text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Gross Profit</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-0">$18,450</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] mb-1"><span class="text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+2.68%</span>
                        <span class="text-default">Last 30 days</span>
                    </div>
                    <div id="pos-spark-4" class="-mx-4 -mb-4">
                         <apexchart                                        
                            type="area"
                            height="60"
                            :options="posSpark4.chartOptions"
                            :series="posSpark4.series"
                            >
                        </apexchart>
                    </div>
                </div>

            </div>

            <!-- Row 3: Sales vs Returns + High Selling Categories -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Sales Vs Returns</h2>
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
                    <div id="pos-sales-returns-chart">
                        <apexchart                                        
                            type="bar"
                            height="250"
                            :options="posSalesReturnsChart.chartOptions"
                            :series="posSalesReturnsChart.series"
                            >
                        </apexchart>
                    </div>
                    <div class="flex items-center justify-center gap-4 mt-2 text-[11px]">
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-success"></span><span class="text-default">Sales</span></div>
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">Returns</span></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-5">
                    <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">High Selling Categories</h2>
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
                    <div id="pos-categories-radar">
                        <apexchart                                        
                            type="radar"
                            height="280"
                            :options="posCategoriesRadar.chartOptions"
                            :series="posCategoriesRadar.series"
                            >
                        </apexchart>
                    </div>
                </div>
            </div>

            <!-- Row 4: Recent Orders -->
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex items-center justify-between mb-3">
                    <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Recent Orders</h2>
                    <router-link :to="all_routes.salesOrders" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View Orders <i class="icon-chevron-right"></i></router-link>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-xs text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Customer</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Email</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Items</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Total</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Payment Method</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default">
                                    <a href="#">#ORD0020</a>
                                </td>
                                    <td class="py-2.5 px-2">
                                        <div class="flex items-center gap-2">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                            <span class="text-xs font-semibold text-title">Alexander Kenn</span>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-default">alexan@example.com</td>
                                    <td class="py-2.5 px-2 text-xs text-default">11 Sep 2025</td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">05</td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">$2000</td>
                                    <td class="py-2.5 px-2 text-xs text-default">Cash</td>
                                    <td class="py-2.5 px-2">
                                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                    </td>
                                    </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default">
                                    <a href="#">#ORD0019</a>
                                </td>
                                <td class="py-2.5 px-2">
                                        <div class="flex items-center gap-2">
                                            <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                            <span class="text-xs font-semibold text-title">Gabriella White</span>
                                        </div>
                                    </td>
                                <td class="py-2.5 px-2 text-xs text-default">gabrie@example.com</td>
                                <td class="py-2.5 px-2 text-xs text-default">11 Sep 2025</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">03</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$1600</td>
                                <td class="py-2.5 px-2 text-xs text-default">Credit Card</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default">
                                    <a href="#">#ORD0018</a>
                                </td>
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2">
                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"
                                    ><span class="text-xs font-semibold text-title">Christopher Rey</span>
                                </div>
                            </td>
                            <td class="py-2.5 px-2 text-xs text-default">christ@example.com</td>
                            <td class="py-2.5 px-2 text-xs text-default">10 Sep 2025</td>
                            <td class="py-2.5 px-2 text-xs text-gray-900">01</td>
                            <td class="py-2.5 px-2 text-xs text-gray-900">$1300</td>
                            <td class="py-2.5 px-2 text-xs text-default">Debit Card</td>
                            <td class="py-2.5 px-2">
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                            </td>
                        </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default">
                                    <a href="#">#ORD0017</a>
                                </td>
                                    <td class="py-2.5 px-2">
                                        <div class="flex items-center gap-2">
                                            <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                            <span class="text-xs font-semibold text-title">Penelope Ton</span></div></td>
                                    <td class="py-2.5 px-2 text-xs text-default">penelo@example.com</td>
                                    <td class="py-2.5 px-2 text-xs text-default">10 Sep 2025</td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">02</td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">$1500</td>
                                    <td class="py-2.5 px-2 text-xs text-default">Cash</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                    </td
                                    ></tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#ORD0016</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                        <span class="text-xs font-semibold text-title">Daniel Foster</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">daniel@example.com</td>
                                <td class="py-2.5 px-2 text-xs text-default">10 Sep 2025</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">03</td>
                                <td class="py-2.5 px-2 text-xs text-gray-900">$1800</td>
                                <td class="py-2.5 px-2 text-xs text-default">Bank Transfer</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
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
import { posProductSalesChart, posSpark1, posSpark2, posSpark3, posSpark4, posSalesReturnsChart, posCategoriesRadar } from './data.js'
export default {
    setup() {
        return { all_routes };
    },
    data() {
        return {
            rangeDate: null,
            posProductSalesChart: posProductSalesChart,
            posSpark1: posSpark1,
            posSpark2: posSpark2,
            posSpark3: posSpark3,
            posSpark4: posSpark4,
            posSalesReturnsChart: posSalesReturnsChart,
            posCategoriesRadar: posCategoriesRadar,
        }
    }
}
</script>