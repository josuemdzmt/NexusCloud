<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Support Dashboard</h1>
                <div class="flex items-center gap-2 flex-wrap">
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer" data-hs-overlay="#add-modal"><i class="ph ph-plus"></i> Add Tickets</button>
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

            <!-- Row 1: Ticket Volume full-width -->
            <div class="bg-white border border-border-color rounded-md p-4 mb-3">
                <div class="flex items-center justify-between mb-3">
                    <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Ticket Volume</h2>
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
                <div id="sup-ticket-volume-chart">
                    <apexchart                                        
                        type="bar"
                        height="280"
                        :options="supTicketVolumeChart.chartOptions"
                        :series="supTicketVolumeChart.series"
                        >
                    </apexchart>
                </div>
            </div>

            <!-- Row 2: SLA Breaches + 4 KPI sparkline cards (2x2) -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-4">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">SLA Breaches</h2>
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
                    <div id="sup-sla-pie" class="flex justify-center">
                        <apexchart                                        
                            type="pie"
                            height="240"
                            :options="supSlaPie.chartOptions"
                            :series="supSlaPie.series"
                            >
                        </apexchart>
                    </div>
                    <div class="flex items-center justify-center gap-3 mt-3 text-[11px]">
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-success"></span><span class="text-default">SLA Compliant</span></div>
                        <div class="flex items-center gap-1"><span class="size-2 rounded-full bg-orange"></span><span class="text-default">SLA Breached</span></div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:col-span-8">
                    <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                        <div class="flex items-center justify-between mb-2">
                            <div>
                                <p class="text-xs text-default mb-1">Open Tickets</p>
                                <div class="flex items-baseline gap-2">
                                    <h3 class="text-xl font-bold text-gray-900 mb-0">128</h3>
                                    <span class="text-[11px] text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px]"></i>5.52%</span>
                                </div>
                            </div>
                            <div class="size-9 rounded-md bg-orange-transparent flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-folder-open text-orange"></i>
                            </div>
                        </div>
                        <div id="sup-spark-1" class="-mx-4 -mb-4">
                            <apexchart                                        
                                type="area"
                                height="60"
                                :options="supSpark1.chartOptions"
                                :series="supSpark1.series"
                                >
                            </apexchart>
                        </div>
                    </div>
                    
                    <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                        <div class="flex items-center justify-between mb-2">
                            <div>
                                <p class="text-xs text-default mb-1">Avg Response</p>
                                <div class="flex items-baseline gap-2">
                                    <h3 class="text-xl font-bold text-gray-900 mb-0">2.4 hrs</h3>
                                    <span class="text-[11px] text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px]"></i>7.32%</span>
                                </div>
                            </div>
                            <div class="size-9 rounded-md bg-danger-transparent flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-chart-line-up text-danger"></i>
                            </div>
                        </div>
                        <div id="sup-spark-2" class="-mx-4 -mb-4">
                            <apexchart                                        
                                type="area"
                                height="60"
                                :options="supSpark2.chartOptions"
                                :series="supSpark2.series"
                                >
                            </apexchart>
                        </div>
                    </div>

                    <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                        <div class="flex items-center justify-between mb-2">
                            <div>
                                <p class="text-xs text-default mb-1">SLA Compliance</p>
                                <div class="flex items-baseline gap-2">
                                    <h3 class="text-xl font-bold text-gray-900 mb-0">94%</h3>
                                    <span class="text-[11px] text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px]"></i>9.42%</span>
                                </div>
                            </div>
                            <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-package text-success"></i>
                            </div>
                        </div>
                        <div id="sup-spark-3" class="-mx-4 -mb-4">
                            <apexchart                                        
                                type="area"
                                height="60"
                                :options="supSpark3.chartOptions"
                                :series="supSpark3.series"
                                >
                            </apexchart>
                        </div>
                    </div>

                    <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                        <div class="flex items-center justify-between mb-2">
                            <div>
                                <p class="text-xs text-default mb-1">KB Articles</p>
                                <div class="flex items-baseline gap-2">
                                    <h3 class="text-xl font-bold text-gray-900 mb-0">378</h3>
                                    <span class="text-[11px] text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px]"></i>8.34%</span>
                                </div>
                            </div>
                            <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-book-open text-purple"></i>
                            </div>
                        </div>
                        <div id="sup-spark-4" class="-mx-4 -mb-4">
                            <apexchart                                        
                                type="area"
                                height="60"
                                :options="supSpark4.chartOptions"
                                :series="supSpark4.series"
                                >
                            </apexchart>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Row 3: Satisfaction Rate + Recent Tickets -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <div class="xl:col-span-4">
                    <div class="bg-white border border-border-color rounded-md p-4 mb-3">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Satisfaction Rate</h2>
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
                        <div id="sup-satisfaction-gauge" class="flex justify-center">
                            <apexchart                                        
                                type="donut"
                                height="320"
                                :options="supSatisfactionGauge.chartOptions"
                                :series="supSatisfactionGauge.series"
                                >
                            </apexchart>
                        </div>
                        <div class="flex items-center justify-center gap-3 mt-3 text-[11px]">
                            <div class="flex items-center gap-1">
                                <span class="size-2 rounded-full bg-danger"></span><span class="text-default">Dissatisfied</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="size-2 rounded-full bg-info"></span><span class="text-default">Neutral</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="size-2 rounded-full bg-success"></span><span class="text-default">Satisfied</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border border-border-color rounded-md p-4 pb-1">
                        <div class="flex items-center justify-between mb-3">
                            <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Ticket Response Rate</h2>
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
                        <div id="sup-response-rate-chart">
                            <apexchart                                        
                                type="area"
                                height="180"
                                :options="supResponseRrateChart.chartOptions"
                                :series="supResponseRrateChart.series"
                                >
                            </apexchart>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-8">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-0">Recent Tickets</h2>
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
                    <div class="space-y-3">

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-03.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Robert Cosper</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0020</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">45</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">05 Sep 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Open</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Helen Nelson</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0019</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">41</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">11 Sep 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-05.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Thomas Neal</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0018</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">36</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">27 Aug 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Resolved</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-06.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Sarah Spivey</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0017</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">32</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">15 Aug 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Closed</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-07.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Jared Griffin</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0016</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">29</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">03 Aug 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Open</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-08.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Alexander Kenn</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0015</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">25</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">28 Jul 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-03.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Alex Thompson</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0018</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">35</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">15 Jul 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Resolved</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-05.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Maria Garcia</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0019</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">40</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">10 Jul 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-07.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Thomas Mervin</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0020</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">32</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">28 June 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Resolved</span>
                            </div>
                        </div>

                        <!-- Row -->
                        <div class="sm:grid sm:grid-cols-12 items-center flex justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0 col-span-12 sm:col-span-4">
                                <img src="@/assets/img/avatar/avatar-09.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="user">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Regina Bryant</p>
                                    <p class="text-[11px] text-default mb-0"><a href="#">#CUS0021</a></p>
                                </div>
                            </div>
                            <div class="hidden sm:block sm:col-span-3">
                                <p class="text-[11px] text-default mb-0">Ticket Count</p>
                                <p class="text-xs font-semibold text-title mb-0">22</p>
                            </div>
                            <div class="hidden md:block sm:col-span-2">
                                <p class="text-[11px] text-default mb-0">Last Ticket</p>
                                <p class="text-xs font-semibold text-title mb-0">19 June 2025</p>
                            </div>
                            <div class="sm:col-span-3 text-end">
                                <p class="text-[11px] text-default mb-0">Status</p>
                                <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Open</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Row 5: All Tickets table -->
            <div class="bg-white border border-border-color rounded-md p-4 pb-1.5">
                <div class="flex items-center justify-between mb-3">
                    <h2 class="text-lg max-lg:text-[17px] text-title mb-0">All Tickets</h2>
                    <router-link :to="all_routes.tickets" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="icon-chevron-right"></i></router-link>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-xs text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Ticket ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Customer</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Created On</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Subject</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Priority</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Last Updated</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Assigned To</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#TKT0020</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Alexander Kenn</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">11 Sep 2025</td>
                                <td class="py-2.5 px-2 text-xs text-default">Login Issue</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Low</span></td>
                                <td class="py-2.5 px-2 text-xs text-default">26 Sep 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Steven Schroer</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Open</span></td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#TKT0019</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Gabriella White</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">05 Sep 2025</td>
                                <td class="py-2.5 px-2 text-xs text-default">Invoice Query</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span></td>
                                <td class="py-2.5 px-2 text-xs text-default">20 Sep 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Regina Bryant</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#TKT0018</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Christopher Rey</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">27 Aug 2025</td>
                                <td class="py-2.5 px-2 text-xs text-default">Password Reset</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High</span></td>
                                <td class="py-2.5 px-2 text-xs text-default">11 Sep 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">James Parker</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Resolved</span></td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#TKT0017</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Penelope Ton</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">16 Aug 2025</td>
                                <td class="py-2.5 px-2 text-xs text-default">Purchase Order Issue</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Low</span></td>
                                <td class="py-2.5 px-2 text-xs text-default">31 Aug 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-xs font-semibold text-title">Muriel Hood</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Closed</span></td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2 text-xs text-default"><a href="#">#TKT0011</a></td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                        <span class="text-xs font-semibold text-title">Catherine Lan</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-xs text-default">18 May 2025</td>
                                <td class="py-2.5 px-2 text-xs text-default">Bug Report</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Low</span></td>
                                <td class="py-2.5 px-2 text-xs text-default">02 Jun 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-08.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user">
                                        <span class="text-xs font-semibold text-title">Tina Williams</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </main>
    
    <support-dashboard-modal></support-dashboard-modal>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { supTicketVolumeChart, supSlaPie, supSpark1, supSpark2, supSpark3, supSpark4, supSatisfactionGauge, supResponseRrateChart } from './data.js'
export default {
    data() {
        return {
            rangeDate: null,
            supTicketVolumeChart: supTicketVolumeChart,
            supSlaPie: supSlaPie,
            supSpark1: supSpark1,
            supSpark2: supSpark2,
            supSpark3: supSpark3,
            supSpark4: supSpark4,
            supSatisfactionGauge: supSatisfactionGauge,
            supResponseRrateChart: supResponseRrateChart,
        }
    },
    setup() {

        return {
            all_routes,
        }
    },
    mounted() {
        const el = document.getElementById('sup-satisfaction-gauge');
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