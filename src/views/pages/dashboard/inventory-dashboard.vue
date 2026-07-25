<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <!-- Header -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Inventory Dashboard</h1>
                <div class="flex items-center gap-2 flex-wrap">
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
                    <a href="#" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer" data-hs-overlay="#add-inventory-modal"><i class="ph ph-plus"></i> Add Inventory</a>
                </div>
            </div>

            <!-- Category Distribution -->
            <div class="grid grid-cols-1 xxl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 gap-3 mb-3 w-full">

                <!-- Sparkline Cards -->
                <div class="flex flex-col gap-3 xxl:col-span-3 lg:col-span-6 md:col-span-6 min-w-0">
                    <div class="bg-white border border-border-color rounded-md p-4 relative overflow-hidden flex-1">
                        <div class="flex items-start justify-between mb-2">
                            <div>
                                <p class="text-xs text-default mb-1">Total Stock</p>
                                <div class="flex items-center gap-2">
                                    <h2 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">250</h2>
                                    <span class="text-[11px] font-medium bg-success-transparent text-success px-1.5 py-0.5 rounded">+6.43%</span>
                                </div>
                            </div>
                            <div class="size-9 rounded-md bg-success flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-cube text-white"></i>
                            </div>
                        </div>
                        <div id="inv-total-stock-spark" class="w-full">
                            <apexchart                                        
                                type="area"
                                height="80"
                                :options="invTotalStockSpark.chartOptions"
                                :series="invTotalStockSpark.series"
                                >
                            </apexchart>
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4 relative overflow-hidden flex-1">
                        <div class="flex items-start justify-between mb-2">
                            <div>
                                <p class="text-xs text-default mb-1">Inventory Value</p>
                                <div class="flex items-center gap-2">
                                    <h2 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">$2,300</h2>
                                    <span class="text-[11px] font-medium bg-danger-transparent text-danger px-1.5 py-0.5 rounded">-3.72%</span>
                                </div>
                            </div>
                            <div class="size-9 rounded-md bg-orange flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-currency-circle-dollar text-white"></i>
                            </div>
                        </div>
                        <div id="inv-value-spark" class="w-full">
                            <apexchart                                        
                                type="area"
                                height="80"
                                :options="invValueSpark.chartOptions"
                                :series="invValueSpark.series"
                                >
                            </apexchart>
                        </div>
                    </div>
                </div>

                <!-- Category Distribution -->
                <div class="bg-white border border-border-color rounded-md p-4 xxl:col-span-4 lg:col-span-6 md:col-span-6 min-w-0">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Category Distribution</h3>
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
                    <div id="inv-category-chart" class="w-full">
                        <apexchart                                        
                            type="bar"
                            height="240"
                            :options="invCategoryChart.chartOptions"
                            :series="invCategoryChart.series"
                            >
                        </apexchart>
                    </div>
                    <p class="text-[11px] text-default mb-0 inline-flex items-center">
                        <span class="size-1.5 rounded-full bg-pink me-2"></span>No of Products increased by <span class="text-success font-medium ms-1">+20% from last Week</span>
                    </p>
                </div>

                <!-- Product Stock Levels -->
                <div class="bg-white border border-border-color rounded-md p-4 xxl:col-span-5 lg:col-span-12 md:col-span-12 min-w-0">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Product Stock Levels</h3>
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
                    <div id="inv-stock-levels-chart" class="w-full">
                        <apexchart                                        
                            type="line"
                            height="240"
                            :options="invStockLevelsChart.chartOptions"
                            :series="invStockLevelsChart.series"
                            >
                        </apexchart>
                    </div>
                    <div class="flex items-center justify-center gap-4 mt-1 text-[11px]">
                        <div class="flex items-center gap-1">
                            <span class="size-2 rounded-full bg-success"></span>
                            <span class="text-default">Total Products</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="size-2 rounded-full bg-orange"></span>
                            <span class="text-default">Out Of Stock</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Suppliers Warehouse -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">

                <!-- Suppliers -->
                <div class="bg-white border border-border-color rounded-md p-4 pb-3">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Suppliers</h3>
                        <router-link :to="all_routes.suppliers" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="ph ph-caret-right text-[10px]"></i></router-link>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-start border-collapse">
                            <tbody>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                                <i class="ph-duotone ph-desktop-tower text-warning"></i>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-[11px] text-default mb-0"><a href="#">#LED0020</a></p>
                                                <p class="text-xs font-semibold text-title truncate mb-0">Apex Computers</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3">
                                        <p class="text-[11px] text-default mb-0">Goods Supplied</p>
                                        <p class="text-xs font-semibold text-title mb-0">$40,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded inline-block whitespace-nowrap">Active</span>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                                <i class="ph-duotone ph-headphones text-info"></i>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-[11px] text-default mb-0"><a href="#">#LED0019</a></p>
                                                <p class="text-xs font-semibold text-title truncate mb-0">Beats Headphones</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3">
                                        <p class="text-[11px] text-default mb-0">Goods Supplied</p>
                                        <p class="text-xs font-semibold text-title mb-0">$34,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end">
                                        <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded inline-block whitespace-nowrap">Inactive</span>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                                <i class="ph-duotone ph-sneaker text-pink"></i>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-[11px] text-default mb-0"><a href="#">#LED0018</a></p>
                                                <p class="text-xs font-semibold text-title truncate mb-0">Dazzle Shoes</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3">
                                        <p class="text-[11px] text-default mb-0">Goods Supplied</p>
                                        <p class="text-xs font-semibold text-title mb-0">$32,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded inline-block whitespace-nowrap">Active</span>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                                <i class="ph-duotone ph-shopping-bag text-purple"></i>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-[11px] text-default mb-0"><a href="#">#LED0017</a></p>
                                                <p class="text-xs font-semibold text-title truncate mb-0">Best Accessories</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3">
                                        <p class="text-[11px] text-default mb-0">Goods Supplied</p>
                                        <p class="text-xs font-semibold text-title mb-0">$27,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded inline-block whitespace-nowrap">Active</span>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <div class="size-9 rounded-md bg-light flex items-center justify-center shrink-0">
                                                <i class="ph-duotone ph-storefront text-success"></i>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-[11px] text-default mb-0"><a href="#">#LED0016</a></p>
                                                <p class="text-xs font-semibold text-title truncate mb-0">A-Z Store</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3">
                                        <p class="text-[11px] text-default mb-0">Goods Supplied</p>
                                        <p class="text-xs font-semibold text-title mb-0">$13,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end">
                                        <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded inline-block whitespace-nowrap">Inactive</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Warehouse -->
                <div class="bg-white border border-border-color rounded-md p-4 pb-3">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Warehouse</h3>
                        <router-link :to="all_routes.warehouse" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="ph ph-caret-right text-[10px]"></i></router-link>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-start border-collapse">
                            <tbody>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="block min-w-0 group">
                                            <p class="text-[11px] text-default mb-0"><a href="#">#WRH0020</a></p>
                                            <p class="text-xs font-semibold text-title truncate mb-0">Smart Stock Hub</p>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Contact Person</p>
                                        <p class="text-xs font-semibold text-title truncate mb-0">Ethan Walker</p>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Capacity</p>
                                        <p class="text-xs font-semibold text-title mb-0">30,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end w-1">
                                        <div class="relative size-9">
                                            <svg class="size-full -rotate-90" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-light-500" stroke-width="3"></circle>
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-primary" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="15" stroke-linecap="round"></circle>
                                            </svg>
                                            <span class="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-900">85%</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="block min-w-0 group hover:opacity-80 transition-opacity">
                                            <p class="text-[11px] text-default mb-0"><a href="#">#WRH0019</a></p>
                                            <p class="text-xs font-semibold text-title truncate mb-0">Flow Grid Storage</p>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Contact Person</p>
                                        <p class="text-xs font-semibold text-title truncate mb-0">Madison Clark</p>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Capacity</p>
                                        <p class="text-xs font-semibold text-title mb-0">20,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end w-1">
                                        <div class="relative size-9">
                                            <svg class="size-full -rotate-90" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-light-500" stroke-width="3"></circle>
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-orange" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="25" stroke-linecap="round"></circle>
                                            </svg>
                                            <span class="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-900">75%</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="block min-w-0 group hover:opacity-80 transition-opacity">
                                            <p class="text-[11px] text-default mb-0"><a href="#">#WRH0018</a></p>
                                            <p class="text-xs font-semibold text-title truncate mb-0">Prime Storage Solutions</p>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Contact Person</p>
                                        <p class="text-xs font-semibold text-title truncate mb-0">James Harris</p>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Capacity</p>
                                        <p class="text-xs font-semibold text-title mb-0">300,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end w-1">
                                        <div class="relative size-9">
                                            <svg class="size-full -rotate-90" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-light-500" stroke-width="3"></circle>
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-warning" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="39" stroke-linecap="round"></circle>
                                            </svg>
                                            <span class="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-900">61%</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="block min-w-0 group hover:opacity-80 transition-opacity">
                                            <p class="text-[11px] text-default mb-0"><a href="#">#WRH0017</a></p>
                                            <p class="text-xs font-semibold text-title truncate mb-0">Global Supply Depot</p>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Contact Person</p>
                                        <p class="text-xs font-semibold text-title truncate mb-0">Avery Thompson</p>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Capacity</p>
                                        <p class="text-xs font-semibold text-title mb-0">25,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end w-1">
                                        <div class="relative size-9">
                                            <svg class="size-full -rotate-90" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-light-500" stroke-width="3"></circle>
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-info" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="75" stroke-linecap="round"></circle>
                                            </svg>
                                            <span class="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-900">40%</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="py-2 pe-3">
                                        <div class="block min-w-0 group hover:opacity-80 transition-opacity">
                                            <p class="text-[11px] text-default mb-0"><a href="#">#WRH0016</a></p>
                                            <p class="text-xs font-semibold text-title truncate mb-0">Silverline Storage</p>
                                        </div>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Contact Person</p>
                                        <p class="text-xs font-semibold text-title truncate mb-0">Benjamin Wright</p>
                                    </td>
                                    <td class="py-2 px-3 min-w-0">
                                        <p class="text-[11px] text-default mb-0">Capacity</p>
                                        <p class="text-xs font-semibold text-title mb-0">16,000</p>
                                    </td>
                                    <td class="py-2 ps-3 text-end w-1">
                                        <div class="relative size-9">
                                            <svg class="size-full -rotate-90" viewBox="0 0 36 36">
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-light-500" stroke-width="3"></circle>
                                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-danger" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="75" stroke-linecap="round"></circle>
                                            </svg>
                                            <span class="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-900">32%</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            <!-- Inventory Value -->
            <div class="bg-white border border-border-color rounded-md p-4 pb-0 mb-3">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Inventory Value</h3>
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
                <div id="inv-value-chart" class="w-full">
                    <apexchart                                        
                        type="area"
                        height="320"
                        :options="invValueChart.chartOptions"
                        :series="invValueChart.series"
                        >
                    </apexchart>
                </div>
            </div>

            <!-- Recent Stocks -->
            <div class="bg-white border border-border-color rounded-md p-4 pb-[6px]">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Recent Stocks</h3>
                    <router-link :to="all_routes.manageStock" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="ph ph-caret-right text-[10px]"></i></router-link>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm border-collapse">
                        <thead>
                            <tr class="text-xs text-default border-b border-border-color bg-light/50">
                                <th class="text-left py-3 px-3 font-semibold text-gray-900">Code</th>
                                <th class="text-left py-3 px-3 font-semibold text-gray-900">Product</th>
                                <th class="text-left py-3 px-3 font-semibold text-gray-900">SKU</th>
                                <th class="text-left py-3 px-3 font-semibold text-gray-900">Category</th>
                                <th class="text-left py-3 px-3 font-semibold text-gray-900">Brand</th>
                                <th class="text-left py-3 px-3 font-semibold text-gray-900">Unit</th>
                                <th class="text-right py-3 px-3 font-semibold text-gray-900">Quantity</th>
                                <th class="text-right py-3 px-3 font-semibold text-gray-900">Selling Price</th>
                                <th class="text-right py-3 px-3 font-semibold text-gray-900">Purchase Price</th>
                                <th class="text-center py-3 px-3 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                <td class="py-3 px-3 text-xs text-default">
                                    <a href="#" class="hover:text-primary transition-colors font-medium">#PRD0020</a>
                                </td>
                                <td class="py-3 px-3">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0">
                                            <i class="ph-fill ph-apple-logo text-gray-900"></i>
                                        </div>
                                        <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Apple iPhone 15</a>
                                    </div>
                                </td>
                                <td class="py-3 px-3 text-xs text-default">APP-PH-15</td>
                                <td class="py-3 px-3 text-xs text-default">Smartphones</td>
                                <td class="py-3 px-3 text-xs text-default">Apple</td>
                                <td class="py-3 px-3 text-xs text-default">Piece</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">02</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$250</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$230</td>
                                <td class="py-3 px-3 text-center">
                                    <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">
                                        In Stock <i class="ph ph-caret-down text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                            <!-- Row 2: Dell XPS 13 -->
                            <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                <td class="py-3 px-3 text-xs text-default">
                                    <a href="#" class="hover:text-primary transition-colors font-medium">#PRD0019</a>
                                </td>
                                <td class="py-3 px-3">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0">
                                            <i class="ph-duotone ph-laptop text-gray-900"></i>
                                        </div>
                                        <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Dell XPS 13 9310</a>
                                    </div>
                                </td>
                                <td class="py-3 px-3 text-xs text-default">DEL-LAP-9310</td>
                                <td class="py-3 px-3 text-xs text-default">Computers</td>
                                <td class="py-3 px-3 text-xs text-default">Dell</td>
                                <td class="py-3 px-3 text-xs text-default">Piece</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">12</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$300</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$280</td>
                                <td class="py-3 px-3 text-center">
                                    <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">
                                        In Stock <i class="ph ph-caret-down text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                <td class="py-3 px-3 text-xs text-default">
                                    <a href="#" class="hover:text-primary transition-colors font-medium">#PRD0018</a>
                                </td>
                                <td class="py-3 px-3">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0">
                                            <i class="ph-duotone ph-headphones text-gray-900"></i>
                                        </div>
                                        <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Bose QuietComfort 45</a>
                                    </div>
                                </td>
                                <td class="py-3 px-3 text-xs text-default">BOS-HD-45</td>
                                <td class="py-3 px-3 text-xs text-default">Headphones</td>
                                <td class="py-3 px-3 text-xs text-default">Bose</td>
                                <td class="py-3 px-3 text-xs text-default">Piece</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">15</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$100</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$80</td>
                                <td class="py-3 px-3 text-center">
                                    <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">
                                        In Stock <i class="ph ph-caret-down text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                <td class="py-3 px-3 text-xs text-default">
                                    <a href="#" class="hover:text-primary transition-colors font-medium">#PRD0017</a>
                                </td>
                                <td class="py-3 px-3">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0">
                                            <i class="ph-duotone ph-sneaker text-gray-900"></i>
                                        </div>
                                        <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Adidas Running Shoe</a>
                                    </div>
                                </td>
                                <td class="py-3 px-3 text-xs text-default">ADI-SHO-RUN</td>
                                <td class="py-3 px-3 text-xs text-default">Footwear</td>
                                <td class="py-3 px-3 text-xs text-default">Adidas</td>
                                <td class="py-3 px-3 text-xs text-default">Pack</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">20</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$400</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$380</td>
                                <td class="py-3 px-3 text-center">
                                    <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">
                                        In Stock <i class="ph ph-caret-down text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                <td class="py-3 px-3 text-xs text-default">
                                    <a href="#" class="hover:text-primary transition-colors font-medium">#PRD0016</a>
                                </td>
                                <td class="py-3 px-3">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0">
                                            <i class="ph-duotone ph-fan text-gray-900"></i>
                                        </div>
                                        <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Dyson Vacuum Cleaner</a>
                                    </div>
                                </td>
                                <td class="py-3 px-3 text-xs text-default">DYS-VC-100</td>
                                <td class="py-3 px-3 text-xs text-default">Appliances</td>
                                <td class="py-3 px-3 text-xs text-default">Dyson</td>
                                <td class="py-3 px-3 text-xs text-default">Piece</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">08</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$750</td>
                                <td class="py-3 px-3 text-xs text-gray-900 text-right tabular-nums">$730</td>
                                <td class="py-3 px-3 text-center">
                                    <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded font-medium">
                                        Out of Stock <i class="ph ph-caret-down text-[10px] ms-1"></i>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </main>

    <inventory-dashboard-modal></inventory-dashboard-modal>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { invTotalStockSpark, invValueSpark, invCategoryChart, invStockLevelsChart, invValueChart } from './data.js'
export default {
    setup() {
        return { all_routes };
    },
    data() {
        return {
            rangeDate: null,
            invTotalStockSpark: invTotalStockSpark,
            invValueSpark: invValueSpark,
            invCategoryChart: invCategoryChart,
            invStockLevelsChart: invStockLevelsChart,
            invValueChart: invValueChart,
        }
    }
}
</script>