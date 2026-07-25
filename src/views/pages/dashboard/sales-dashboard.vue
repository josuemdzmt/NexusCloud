<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            

            <!-- Header -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Sales Dashboard</h1>
                <div class="flex items-center gap-2 flex-wrap">
                    <div class="flex items-center -space-x-2 me-1">
                        <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border-2 border-white" alt="user">
                        <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border-2 border-white" alt="user">
                        <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border-2 border-white" alt="user">
                        <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border-2 border-white" alt="user">
                        <button type="button" class="size-7 rounded-full border-2 border-white bg-primary text-white text-xs flex items-center justify-center hover:bg-primary-hover cursor-pointer"><i class="ph ph-plus"></i></button>
                    </div>
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

            <!-- Row 1: Revenue Trends + Sales by Region -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-8">
                    <div class="flex items-center justify-between mb-3 flex-wrap gap-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Revenue Trends</h2>
                        <div class="flex items-center gap-1 bg-light rounded-md p-1 text-[11px]">
                            <button type="button" class="px-2 py-0.5 rounded text-default hover:bg-white cursor-pointer">1D</button>
                            <button type="button" class="px-2 py-0.5 rounded text-default hover:bg-white cursor-pointer">7D</button>
                            <button type="button" class="px-2 py-0.5 rounded text-default hover:bg-white cursor-pointer">1M</button>
                            <button type="button" class="px-2 py-0.5 rounded bg-white shadow-sm text-gray-900 font-medium cursor-pointer">1Y</button>
                        </div>
                    </div>
                    <div id="sales-revenue-trends-chart">
                        <apexchart                                        
                            type="bar"
                            height="340"
                            :options="salesRevenueTrendsChart.chartOptions"
                            :series="salesRevenueTrendsChart.series"
                            >
                        </apexchart>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-4 relative overflow-hidden">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-lg max-lg:text-[17px] text-title mb-0">Sales by Region</h3>
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
                    <!-- Map placeholder + region tooltip -->
                    <div id="chart-container" ref="containerRef" class="h-64"></div>
                    
                    <!-- Total bar -->
                    <div class="bg-gradient-to-br from-primary to-success text-white rounded-md p-3 mt-3">
                        <div class="flex items-center gap-2 mb-2"><h4 class="text-xl font-bold mb-0 text-white">$2.4M</h4><span class="text-[11px] text-white">vs last month</span></div>
                        <div class="h-1 bg-white/20 rounded-full mb-1 overflow-hidden"><div class="h-full bg-white rounded-full" style="width: 60%"></div></div>
                        <div class="flex items-center justify-between text-[10px] text-white"><span>0</span><span>2M</span><span>4M</span></div>
                    </div>
                </div>

            </div>

            <!-- Row 2: 4 KPI cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between"><div><p class="text-xs text-default mb-1">Revenue</p><h3 class="text-2xl font-bold text-gray-900 mb-0">12.8K</h3></div><div class="size-10 rounded-md bg-success flex items-center justify-center shrink-0"><i class="ph-duotone ph-currency-circle-dollar text-white text-lg"></i></div></div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between"><div><p class="text-xs text-default mb-1">Open Invoices</p><h3 class="text-2xl font-bold text-gray-900 mb-0">28</h3></div><div class="size-10 rounded-md bg-orange flex items-center justify-center shrink-0"><i class="ph-duotone ph-file-text text-white text-lg"></i></div></div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between"><div><p class="text-xs text-default mb-1">Open Orders</p><h3 class="text-2xl font-bold text-gray-900 mb-0">156</h3></div><div class="size-10 rounded-md bg-primary flex items-center justify-center shrink-0"><i class="ph-duotone ph-shopping-cart text-white text-lg"></i></div></div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between"><div><p class="text-xs text-default mb-1">New Customers</p><h3 class="text-2xl font-bold text-gray-900 mb-0">378</h3></div><div class="size-10 rounded-md bg-purple flex items-center justify-center shrink-0"><i class="ph-duotone ph-user-plus text-white text-lg"></i></div></div>
                </div>
            </div>

            <!-- Row 3: Top Customers + Top Selling Products + Recent Transactions -->
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between mb-4"><h2 class="text-lg max-lg:text-[17px] max-xxl:text-[16px] text-title mb-0">Top Customers</h2><router-link :to="all_routes.customers" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link></div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-03.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Robert Cosper</p><p class="text-[11px] text-default mb-0"><a href="#">#CUS0020</a></p></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$4,500</p><p class="text-[11px] text-default mb-0">Spent</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-04.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Helen Nelson</p><p class="text-[11px] text-default mb-0"><a href="#">#CUS0019</a></p></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$5,200</p><p class="text-[11px] text-default mb-0">Spent</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-05.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Thomas Neal</p><p class="text-[11px] text-default mb-0"><a href="#">#CUS0018</a></p></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$2,800</p><p class="text-[11px] text-default mb-0">Spent</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-06.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Sarah Spivey</p><p class="text-[11px] text-default mb-0"><a href="#">#CUS0017</a></p></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$1,750</p><p class="text-[11px] text-default mb-0">Spent</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-07.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Jared Griffin</p><p class="text-[11px] text-default mb-0"><a href="#">#CUS0016</a></p></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$3,000</p><p class="text-[11px] text-default mb-0">Spent</p></div></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between mb-4"><h2 class="text-lg max-lg:text-[17px] max-xxl:text-[16px] text-title mb-0">Top Selling Products</h2><router-link :to="all_routes.products" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link></div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-fill ph-apple-logo text-gray-900"></i></div><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Apple iPhone 15</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0">$250</p><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">In Stock</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">1,250</p><p class="text-[11px] text-default mb-0">Sales</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-laptop text-gray-900"></i></div><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Dell XPS 13 9310</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0">$185</p><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">In Stock</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">2,250</p><p class="text-[11px] text-default mb-0">Sales</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-headphones text-gray-900"></i></div><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Bose QuietComfort 45</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0">$120</p><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">In Stock</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">1,600</p><p class="text-[11px] text-default mb-0">Sales</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-sneaker text-gray-900"></i></div><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Adidas Running Shoe</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0">$140</p><span class="text-[10px] bg-danger-transparent text-danger px-1.5 py-0.5 rounded">Out of Stock</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">1,850</p><p class="text-[11px] text-default mb-0">Sales</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0"><i class="ph-duotone ph-fan text-gray-900"></i></div><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Dyson Vacuum Cleaner</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0">$220</p><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">In Stock</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">2,200</p><p class="text-[11px] text-default mb-0">Sales</p></div></div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between mb-4"><h2 class="text-lg max-lg:text-[17px] max-xxl:text-[16px] text-title mb-0">Recent Transactions</h2><router-link :to="all_routes.transactions" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link></div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-03.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Alexander Kenn</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0"><a href="#">#PAY0020</a></p><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">Paid</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$500</p><p class="text-[11px] text-default mb-0">05 Sep 2025</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-04.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Gabriella White</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0"><a href="#">#PAY0019</a></p><span class="text-[10px] bg-warning-transparent text-warning px-1.5 py-0.5 rounded">Pending</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$250</p><p class="text-[11px] text-default mb-0">11 Sep 2025</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-05.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Christopher Rey</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0"><a href="#">#PAY0018</a></p><span class="text-[10px] bg-danger-transparent text-danger px-1.5 py-0.5 rounded">Failed</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$300</p><p class="text-[11px] text-default mb-0">27 Aug 2025</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-06.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Penelope Ton</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0"><a href="#">#PAY0017</a></p><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">Paid</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$850</p><p class="text-[11px] text-default mb-0">15 Aug 2025</p></div></div>
                        <div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2 min-w-0"><img src="@/assets/img/avatar/avatar-07.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user"><div class="min-w-0"><p class="text-xs font-semibold text-title truncate mb-0">Catherine Lan</p><div class="flex items-center gap-2"><p class="text-[11px] text-default mb-0"><a href="#">#PAY0016</a></p><span class="text-[10px] bg-warning-transparent text-warning px-1.5 py-0.5 rounded">Pending</span></div></div></div><div class="text-end"><p class="text-xs font-semibold text-title mb-0">$600</p><p class="text-[11px] text-default mb-0">02 Aug 2025</p></div></div>
                    </div>
                </div>
            </div>

            <!-- Row 4: Recent Sales Activity table -->
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex items-center justify-between mb-3">
                    <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Recent Sales Activity</h2>
                    <router-link :to="all_routes.salesOrders" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead><tr class="text-xs text-default border-b border-border-color"><th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Type</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Customer</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Amount</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th></tr></thead>
                        <tbody>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-xs text-default"><a href="#">#INV0020</a></td><td class="py-2.5 px-2 text-xs text-default">Invoice</td><td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Alexander Kenn</span></div></td><td class="py-2.5 px-2 text-xs text-gray-900">$500</td><td class="py-2.5 px-2 text-xs text-default">11 Sep 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-xs text-default"><a href="#">#SAO0019</a></td><td class="py-2.5 px-2 text-xs text-default">Sales Order</td><td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Gabriella White</span></div></td><td class="py-2.5 px-2 text-xs text-gray-900">$650</td><td class="py-2.5 px-2 text-xs text-default">05 Sep 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-xs text-default"><a href="#">#CRN0018</a></td><td class="py-2.5 px-2 text-xs text-default">Credit Note</td><td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Christopher Rey</span></div></td><td class="py-2.5 px-2 text-xs text-gray-900">$120</td><td class="py-2.5 px-2 text-xs text-default">27 Aug 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Issued</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-xs text-default"><a href="#">#SAQ0017</a></td><td class="py-2.5 px-2 text-xs text-default">Sales Quote</td><td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Penelope Ton</span></div></td><td class="py-2.5 px-2 text-xs text-gray-900">$860</td><td class="py-2.5 px-2 text-xs text-default">16 Aug 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Sent</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-xs text-default"><a href="#">#INV0011</a></td><td class="py-2.5 px-2 text-xs text-default">Invoice</td><td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Catherine Lan</span></div></td><td class="py-2.5 px-2 text-xs text-gray-900">$650</td><td class="py-2.5 px-2 text-xs text-default">18 May 2025</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </main>

</template>

<script>
import { all_routes } from '@/router/all_routes';
import { salesRevenueTrendsChart } from './data.js'

import * as echarts from "echarts";
import worldGeoJson from "echarts-countries-js/new-world.geojson?raw";

let worldMapRegistered = false;

const salesByRegionData = [
  { name: "Canada", value: [-106.35, 56.13, 70] },
  { name: "Malaysia", value: [101.98, 4.21, 55] },
  { name: "Portugal", value: [-8.22, 39.4, 40] },
];

export default {
    setup() {
        return { all_routes };
    },
    props: {
        className: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            rangeDate: null,
            salesRevenueTrendsChart: salesRevenueTrendsChart,
            chart: null,
        };
    },
    mounted() {
        if (!this.$refs.containerRef) return;

        if (!worldMapRegistered) {
            echarts.registerMap("world", JSON.parse(worldGeoJson));
            worldMapRegistered = true;
        }

        this.chart = echarts.init(this.$refs.containerRef);

        this.chart.setOption({
            tooltip: { trigger: "item" },
            visualMap: {
                min: 0,
                max: 100,
                dimension: 2,
                show: false,
                inRange: { symbolSize: [10] },
            },
            geo: {
                map: "world",
                roam: true,
                itemStyle: { areaColor: "#EDE6FF", borderColor: "#EDE6FF" },
            },
            series: [
                {
                type: "scatter",
                coordinateSystem: "geo",
                data: salesByRegionData,
                itemStyle: { color: "#7A13F0", borderColor: "#F5F1FF", borderWidth: 6 },
                symbolSize: 2,
                },
            ],
        });

        window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    },
    methods: {
        handleResize() {
            if (this.chart) this.chart.resize();
        },
    },
}
</script>