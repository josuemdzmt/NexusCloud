<template>
    <main>				
        <div class="p-3 lg:py-6 lg:px-0">

            <!-- Header row -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">CRM Dashboard</h1>
                <div class="flex items-center flex-wrap gap-2">
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

            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md overflow-hidden">
                    <div class="h-1 bg-gradient-to-r from-success via-warning to-danger"></div>
                    <div class="p-4 bg-success/5">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <p class="text-xs text-default mb-1">Total Leads</p>
                                <h2 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">$125,000</h2>
                            </div>
                            <div class="size-10 rounded-full bg-success flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-user text-white text-lg"></i>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-xs">
                            <span class="inline-flex items-center font-semibold text-success"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+12.4%</span>
                            <span class="text-default">from last week</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md overflow-hidden">
                    <div class="h-1 bg-gradient-to-r from-purple via-pink to-purple"></div>
                    <div class="p-4 bg-purple/5">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <p class="text-xs text-default mb-1">Total Deals Closed</p>
                                <h2 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">$154,000</h2>
                            </div>
                            <div class="size-10 rounded-full bg-purple flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-info text-white text-lg"></i>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-xs">
                            <span class="inline-flex items-center font-semibold text-success"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+5.3%</span>
                            <span class="text-default">from last week</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md overflow-hidden">
                    <div class="h-1 bg-gradient-to-r from-warning via-orange to-warning"></div>
                    <div class="p-4 bg-warning/5">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <p class="text-xs text-default mb-1">Total Opportunities</p>
                                <h2 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">$185,000</h2>
                            </div>
                            <div class="size-10 rounded-full bg-warning flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-medal text-white text-lg"></i>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-xs">
                            <span class="inline-flex items-center font-semibold text-danger"><i class="ph ph-arrow-down text-[10px] me-0.5"></i>-4.35%</span>
                            <span class="text-default">from last week</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md overflow-hidden">
                    <div class="h-1 bg-gradient-to-r from-pink via-purple to-pink"></div>
                    <div class="p-4 bg-pink/5">
                        <div class="flex items-start justify-between mb-3">
                            <div>
                                <p class="text-xs text-default mb-1">Total Revenue</p>
                                <h2 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">$210,000</h2>
                            </div>
                            <div class="size-10 rounded-full bg-pink flex items-center justify-center shrink-0">
                                <i class="ph-duotone ph-credit-card text-white text-lg"></i>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-xs">
                            <span class="inline-flex items-center font-semibold text-success"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+11.8%</span>
                            <span class="text-default">from last week</span>
                        </div>
                    </div>
                </div>

            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <!-- Recent Leads -->
                <div class="bg-white border border-border-color rounded-md p-4 pb-1.5 xl:col-span-4">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Recent Leads</h3>
                        <router-link :to="all_routes.leads" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="ph ph-caret-right text-[10px]"></i></router-link>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <tbody>
                                <tr>
                                    <td class="py-2.5 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Robert">
                                            <div class="min-w-0">
                                                <a href="#" class="block text-[11px] text-default hover:text-primary transition-colors font-medium leading-tight mb-1">#LED0020</a>
                                                <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Robert Cosper</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-3 vertical-middle">
                                        <div class="min-w-0">
                                            <p class="text-[11px] text-default mb-1 leading-tight">Lead Owner</p>
                                            <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Ethan Walker</p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 ps-3 text-right vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Closed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2.5 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <img src="@/assets/img/avatar/avatar-04.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Helen">
                                            <div class="min-w-0">
                                                <a href="#" class="block text-[11px] text-default hover:text-primary transition-colors font-medium leading-tight mb-1">#LED0019</a>
                                                <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Helen Nelson</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-3 vertical-middle">
                                        <div class="min-w-0">
                                            <p class="text-[11px] text-default mb-1 leading-tight">Lead Owner</p>
                                            <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Madison Clark</p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 ps-3 text-right vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded font-medium">Not Closed</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2.5 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <img src="@/assets/img/avatar/avatar-05.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Thomas">
                                            <div class="min-w-0">
                                                <a href="#" class="block text-[11px] text-default hover:text-primary transition-colors font-medium leading-tight mb-1">#LED0018</a>
                                                <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Thomas Neal</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-3 vertical-middle">
                                        <div class="min-w-0">
                                            <p class="text-[11px] text-default mb-1 leading-tight">Lead Owner</p>
                                            <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">James Harris</p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 ps-3 text-right vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded font-medium">Contacted</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2.5 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <img src="@/assets/img/avatar/avatar-06.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Sarah">
                                            <div class="min-w-0">
                                                <a href="#" class="block text-[11px] text-default hover:text-primary transition-colors font-medium leading-tight mb-1">#LED0017</a>
                                                <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Sarah Spivey</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-3 vertical-middle">
                                        <div class="min-w-0">
                                            <p class="text-[11px] text-default mb-1 leading-tight">Lead Owner</p>
                                            <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Avery Thompson</p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 ps-3 text-right vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded font-medium">Lost</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2.5 pe-3">
                                        <div class="flex items-center gap-2 min-w-0">
                                            <img src="@/assets/img/avatar/avatar-07.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Jared">
                                            <div class="min-w-0">
                                                <a href="#" class="block text-[11px] text-default hover:text-primary transition-colors font-medium leading-tight mb-1">#LED0016</a>
                                                <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Jared Griffin</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-3 vertical-middle">
                                        <div class="min-w-0">
                                            <p class="text-[11px] text-default mb-1 leading-tight">Lead Owner</p>
                                            <p class="text-xs font-semibold text-title truncate mb-0 leading-tight">Benjamin Wright</p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 ps-3 text-right vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Closed</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Leads Generated -->
                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-8">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Leads Generated</h3>
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
                    <div id="crm-leads-generated-chart">
                        <apexchart                                        
                            type="line"
                            height="250"
                            :options="crmLeadsGeneratedChart.chartOptions"
                            :series="crmLeadsGeneratedChart.series"
                            >
                        </apexchart>
                    </div>
                    <div class="flex items-center justify-center flex-wrap gap-4 text-[11px]">
                        <div class="flex items-center gap-1">
                            <span class="size-2 rounded-full bg-pink"></span>
                            <span class="text-default">No of Leads Expected</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="size-2 rounded-full bg-success"></span>
                            <span class="text-default">No of Leads Generated</span>
                        </div>
                    </div>
                </div>

            </div>
            
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <!-- Recent Deals -->
                <div class="bg-white border border-border-color rounded-md p-4 pb-1.5 xl:col-span-7">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Recent Deals</h3>
                        <router-link :to="all_routes.deals" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="ph ph-caret-right text-[10px]"></i></router-link>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-xs text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Deal Name</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Stage</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Probability</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Tags</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2 text-xs text-default"><a href="#">#DEL0020</a></td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">CRM Subscription</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Qualify To Buy</span>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">90%</td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded"><i class="ph ph-plus-circle text-[10px] me-1"></i>Open<i class="ph ph-caret-down text-[10px] ms-1"></i></span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2 text-xs text-default"><a href="#">#DEL0019</a></td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">ERP Implementation</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-pink-transparent text-pink px-2 py-0.5 rounded">Contact Made</span>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">40%</td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded"><i class="ph ph-check-circle text-[10px] me-1"></i>Won<i class="ph ph-caret-down text-[10px] ms-1"></i></span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2 text-xs text-default"><a href="#">#DEL0018</a></td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">Cloud Migration</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-orange-transparent text-orange px-2 py-0.5 rounded">Presentation</span>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">60%</td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded"><i class="ph ph-x-circle text-[10px] me-1"></i>Lost<i class="ph ph-caret-down text-[10px] ms-1"></i></span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2 text-xs text-default"><a href="#">#DEL0017</a></td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">Cybersecurity Upgrade</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Proposal Made</span>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">50%</td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded"><i class="ph ph-check-circle text-[10px] me-1"></i>Won<i class="ph ph-caret-down text-[10px] ms-1"></i></span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2 text-xs text-default"><a href="#">#DEL0016</a></td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">SaaS Renewal</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-purple-transparent text-purple px-2 py-0.5 rounded">Appointment</span>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-gray-900">70%</td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded"><i class="ph ph-x-circle text-[10px] me-1"></i>Lost<i class="ph ph-caret-down text-[10px] ms-1"></i></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Deals Pipeline -->
                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-5">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Deals Pipeline</h3>
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
                    <!-- Single stacked pipeline bar -->
                    <div class="flex w-full h-4 rounded-full overflow-hidden mb-5 bg-light-500">
                        <div class="bg-success" style="width:26.8%"></div>
                        <div class="bg-orange" style="width:19.5%"></div>
                        <div class="bg-warning" style="width:17%"></div>
                        <div class="bg-info" style="width:13.4%"></div>
                        <div class="bg-purple" style="width:10.5%"></div>
                        <div class="bg-primary" style="width:7.8%"></div>
                        <div class="bg-danger" style="width:5.1%"></div>
                    </div>
                    <!-- Stage list -->
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-success"></span>
                                <span class="text-xs text-default">Qualify To Buy</span>
                            </div>
                            <span class="text-xs font-semibold text-gray-900">1100</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-orange"></span>
                                <span class="text-xs text-default">Contact Made</span>
                            </div>
                            <span class="text-xs font-semibold text-gray-900">800</span>
                        </div>								
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-warning"></span>
                                <span class="text-xs text-default">Presentation</span>
                            </div>
                            <span class="text-xs font-semibold text-gray-900">700</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-info"></span>
                                <span class="text-xs text-default">Proposal Made</span>
                            </div>
                            <span class="text-xs font-semibold text-gray-900">550</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-purple"></span>
                                <span class="text-xs text-default">Appointment</span>
                            </div>
                            <span class="text-xs font-semibold text-gray-900">430</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-primary"></span>
                                <span class="text-xs text-default">Won</span>
                            </div>
                            <span class="text-xs font-semibold text-gray-900">320</span>
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-danger"></span>
                                <span class="text-xs text-default">Lost</span>
                            </div>
                            <span class="text-xs font-semibold text-gray-900">210</span>
                        </div>
                    </div>
                </div>

            </div>
            
            <div class="grid grid-cols-1 xl:grid-cols-12 xxl:grid-cols-12 gap-3">

                <!-- Contact By Sources -->
                <div class="bg-white border border-border-color rounded-md p-4 xl:col-span-6 xxl:col-span-5">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Contact By Sources</h3>
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
                    <div class="flex items-center flex-col sm:flex-row gap-4">
                        <div id="crm-contact-sources-chart" class="shrink-0">
                            <apexchart                                        
                                type="donut"
                                height="215"
                                width="215"
                                :options="crmContactSourcesChart.chartOptions"
                                :series="crmContactSourcesChart.series"
                                >
                            </apexchart>
                        </div>
                        <div class="flex-1 space-y-3">
                            <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-info"></span>
                                    <span class="text-xs text-default">Organic Search</span>
                                </div>
                                <span class="text-xs font-semibold text-gray-900">25%</span>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-orange"></span>
                                    <span class="text-xs text-default">Campaigns</span>
                                </div>
                                <span class="text-xs font-semibold text-gray-900">15%</span>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-success"></span>
                                    <span class="text-xs text-default">Referral</span>
                                </div>
                                <span class="text-xs font-semibold text-gray-900">15%</span>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-pink"></span>
                                    <span class="text-xs text-default">Marketing</span>
                                </div>
                                <span class="text-xs font-semibold text-gray-900">10%</span>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-purple"></span>
                                    <span class="text-xs text-default">Paid Social</span>
                                </div>
                                <span class="text-xs font-semibold text-gray-900">15%</span>
                            </div>
                            <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-warning"></span>
                                    <span class="text-xs text-default">Events</span>
                                </div>
                                <span class="text-xs font-semibold text-gray-900">20%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Contacts -->
                <div class="bg-white border border-border-color rounded-md p-4 pb-1.5 xl:col-span-6 xxl:col-span-7">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Recent Contacts</h3>
                        <div class="flex items-center gap-2">
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
                            <router-link :to="all_routes.contacts" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white hover:border-primary">View All <i class="ph ph-caret-right text-[10px]"></i></router-link>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm border-collapse">
                            <thead>
                                <tr class="text-xs text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Contact</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Phone Number</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                    <td class="py-2.5 px-2 text-xs text-default">
                                        <router-link :to="all_routes.contactDetails" class="hover:text-primary transition-colors font-medium">#CON0020</router-link>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="flex items-center gap-2">
                                            <div class="size-7 shrink-0">
                                                <a href="#">
                                                    <img src="@/assets/img/avatar/avatar-03.jpg" class="rounded-full border border-border-color" alt="Ethan">
                                                </a>
                                            </div>
                                            <p class="text-nowrap"><a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Ethan Walker</a></p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-default"><span>+1 (212) 555-0174</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded"><i class="ph ph-check-circle text-[10px] me-1"></i>Active</span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                    <td class="py-2.5 px-2 text-xs text-default">
                                        <router-link :to="all_routes.contactDetails" class="hover:text-primary transition-colors font-medium">#CON0019</router-link>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="flex items-center gap-2">
                                            <div class="size-7 shrink-0">
                                                <a href="#">
                                                    <img src="@/assets/img/avatar/avatar-04.jpg" class="rounded-full border border-border-color" alt="Madison">
                                                </a>
                                            </div>
                                            <p class="text-nowrap"><a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Madison Clark</a></p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-default"><span>+1 (312) 555-0148</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded"><i class="ph ph-x-circle text-[10px] me-1"></i>Inactive</span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                    <td class="py-2.5 px-2 text-xs text-default">
                                        <router-link :to="all_routes.contactDetails" class="hover:text-primary transition-colors font-medium">#CON0018</router-link>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="flex items-center gap-2">
                                            <div class="size-7 shrink-0">
                                                <a href="#">
                                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="rounded-full border border-border-color" alt="James">
                                                </a>
                                            </div>
                                            <p class="text-nowrap"><a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">James Harris</a></p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-default"><span>+1 (415) 555-0123</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded"><i class="ph ph-check-circle text-[10px] me-1"></i>Active</span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                    <td class="py-2.5 px-2 text-xs text-default">
                                        <router-link :to="all_routes.contactDetails" class="hover:text-primary transition-colors font-medium">#CON0017</router-link>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="flex items-center gap-2">
                                            <div class="size-7 shrink-0">
                                                <a href="#">
                                                    <img src="@/assets/img/avatar/avatar-06.jpg" class="rounded-full border border-border-color" alt="Avery">
                                                </a>
                                            </div>
                                            <p class="text-nowrap"><a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Avery Thompson</a></p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs text-default"><span>+1 (305) 555-0189</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded"><i class="ph ph-check-circle text-[10px] me-1"></i>Active</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </div>
    </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { crmLeadsGeneratedChart, crmContactSourcesChart } from './data.js'
export default {
    setup() {
        return { all_routes };
    },
    data() {
        return {
            rangeDate: null,
            crmLeadsGeneratedChart: crmLeadsGeneratedChart,
            crmContactSourcesChart: crmContactSourcesChart,
        }
    }
}
</script>