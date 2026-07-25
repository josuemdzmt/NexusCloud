<template>
    <main>
        <div class="p-3 lg:p-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Project Dashboard</h1>
                <div class="flex items-center flex-wrap gap-2">
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
                <!-- Card 1 -->
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-orange-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-folder-user text-orange text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Total Projects</p>
                            <div class="flex items-center gap-2">
                                <h2 class="text-xl max-lg:text-lg font-bold text-gray-900 mb-0">65</h2>
                                <span class="text-[11px] text-success font-medium inline-flex items-center">
                                    <i class="ph ph-arrow-up text-[10px]"></i>5.62%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="pj-spark-1" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="bar"
                            height="60"
                            :options="pjSpark1.chartOptions"
                            :series="pjSpark1.series"
                            >
                        </apexchart>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-info-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-circle-half text-info text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Active Projects</p>
                            <div class="flex items-center gap-2">
                                <h2 class="text-xl max-lg:text-lg font-bold text-gray-900 mb-0">32</h2>
                                <span class="text-[11px] text-success font-medium inline-flex items-center">
                                    <i class="ph ph-arrow-up text-[10px]"></i>6.64%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="pj-spark-2" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="bar"
                            height="60"
                            :options="pjSpark2.chartOptions"
                            :series="pjSpark2.series"
                            >
                        </apexchart>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-purple-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-check-circle text-purple text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Finished Projects</p>
                            <div class="flex items-center gap-2">
                                <h2 class="text-xl max-lg:text-lg font-bold text-gray-900 mb-0">33</h2>
                                <span class="text-[11px] text-success font-medium inline-flex items-center">
                                    <i class="ph ph-arrow-up text-[10px]"></i>4.84%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="pj-spark-3" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="bar"
                            height="60"
                            :options="pjSpark3.chartOptions"
                            :series="pjSpark3.series"
                            >
                        </apexchart>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-success-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-users text-success text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-xs text-default mb-1">Active Users</p>
                            <div class="flex items-center gap-2">
                                <h2 class="text-xl max-lg:text-lg font-bold text-gray-900 mb-0">254</h2>
                                <span class="text-[11px] text-success font-medium inline-flex items-center">
                                    <i class="ph ph-arrow-up text-[10px]"></i>4.65%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="pj-spark-4" class="-mx-4 -mb-4">
                        <apexchart                                        
                            type="bar"
                            height="60"
                            :options="pjSpark4.chartOptions"
                            :series="pjSpark4.series"
                            >
                        </apexchart>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4 pb-0 xl:col-span-8">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Projects Progress</h3>
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
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Today
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center flex-wrap gap-3 mb-2 text-[11px]">
                        <div class="flex items-center gap-1">
                            <span class="size-2 rounded-full bg-success"></span>
                            <span class="text-default">Completed</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="size-2 rounded-full bg-info"></span>
                            <span class="text-default">Inprogress</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="size-2 rounded-full bg-warning"></span>
                            <span class="text-default">Not Started Yet</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="size-2 rounded-full bg-danger"></span>
                            <span class="text-default">Cancelled</span>
                        </div>
                    </div>
                    <div id="pj-progress-chart">
                        <apexchart                                        
                            type="line"
                            height="200"
                            :options="pjProgressChart.chartOptions"
                            :series="pjProgressChart.series"
                            >
                        </apexchart>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 pb-0 xl:col-span-4">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Resource Utilization</h3>
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
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Today
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="resource-chart">
                        <apexchart                                        
                            type="heatmap"
                            height="230"
                            :options="resourceChart.chartOptions"
                            :series="resourceChart.series"
                            >
                        </apexchart>
                    </div>
                </div>

            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4 pb-1.5">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Tasks</h3>
                        <router-link :to="all_routes.tasks" class="btn-sm bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer">
                            View All<i class="icon-chevron-right"></i>
                        </router-link>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-xs text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Task Name</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Assigned To</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                    <td class="py-2.5 px-2">
                                        <p class="text-[11px] text-default mb-1 leading-tight"><a href="#">#TSK0020</a></p>
                                        <p class="text-xs font-semibold text-title mb-0 leading-tight">Design Employee Dashboard</p>
                                    </td>
                                    <td class="py-2.5 px-2 vertical-middle">
                                        <div class="flex items-center gap-2">
                                            <div class="size-7 overflow-hidden">
                                                <a href="#">
                                                    <img src="@/assets/img/avatar/avatar-03.jpg" class="rounded-full border border-border-color w-full h-full object-cover" alt="Alexander">
                                                </a>
                                            </div>
                                            <p class="text-xs font-semibold text-title"><a href="#" class="text-title hover:text-primary transition-colors">Alexander Kenn</a></p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">
                                            Completed <i class="ph ph-check text-[10px] ms-1"></i>
                                        </span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                    <td class="py-2.5 px-2">
                                        <p class="text-[11px] text-default mb-1 leading-tight"><a href="#">#TSK0019</a></p>
                                        <p class="text-xs font-semibold text-title mb-0 leading-tight">Build Patient Registration Form</p>
                                    </td>
                                    <td class="py-2.5 px-2 vertical-middle">
                                        <div class="flex items-center gap-2">													
                                            <div class="size-7 overflow-hidden">
                                                <a href="#">
                                                    <img src="@/assets/img/avatar/avatar-04.jpg" class="border border-border-color w-full h-full object-cover rounded-full" alt="Gabriella">
                                                </a>
                                            </div>
                                            <p class="text-xs font-semibold text-title"><a href="#" class="text-title hover:text-primary transition-colors">Gabriella White</a></p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded font-medium">
                                            Pending <i class="ph ph-clock text-[10px] ms-1"></i>
                                        </span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                    <td class="py-2.5 px-2">
                                        <p class="text-[11px] text-default mb-1 leading-tight"><a href="#">#TSK0018</a></p>
                                        <p class="text-xs font-semibold text-title mb-0 leading-tight">Develop Quiz & Assessment</p>
                                    </td>
                                    <td class="py-2.5 px-2 vertical-middle">
                                        <div class="flex items-center gap-2">
                                            <div class="size-7 overflow-hidden">
                                                <a href="#">
                                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="rounded-full border border-border-color shrink-0" alt="Christopher">
                                                </a>
                                            </div>
                                            <p class="text-xs font-semibold text-title"><a href="#" class="text-title hover:text-primary transition-colors">Christopher Rey</a></p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded font-medium">
                                            In Progress <i class="ph ph-arrow-clockwise text-[10px] ms-1"></i>
                                        </span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                    <td class="py-2.5 px-2">
                                        <p class="text-[11px] text-default mb-1 leading-tight"><a href="#">#TSK0017</a></p>
                                        <p class="text-xs font-semibold text-title mb-0 leading-tight">Integrate Voice & Video Calling</p>
                                    </td>
                                    <td class="py-2.5 px-2 vertical-middle">
                                        <div class="flex items-center gap-2">
                                            <div class="size-7 overflow-hidden">
                                                <a href="#">
                                                    <img src="@/assets/img/avatar/avatar-06.jpg" class="rounded-full border border-border-color w-full h-full object-cover" alt="Penelope">
                                                </a>
                                            </div>
                                            <p class="text-xs font-semibold text-title"><a href="#" class="text-title hover:text-primary transition-colors">Penelope Ton</a></p>
                                        </div>
                                    </td>
                                    <td class="py-2.5 px-2 vertical-middle">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">
                                            Completed <i class="ph ph-check text-[10px] ms-1"></i>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4 pb-1.5">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Milestones</h3>
                        <router-link :to="all_routes.milestones" class="btn-sm bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer">
                            View All<i class="icon-chevron-right"></i>
                        </router-link>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-xs text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Milestone Name</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Target Date</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2">
                                        <a href="#" class="text-xs text-default hover:text-primary transition-colors">#MLS0020</a>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">Requirement Gathering</td>
                                    <td class="py-2.5 px-2 text-xs text-default">11 Sep 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Planned</span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2">
                                        <a href="#" class="text-xs text-default hover:text-primary transition-colors">#MLS0019</a>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">Design Phase</td>
                                    <td class="py-2.5 px-2 text-xs text-default">05 Sep 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2">
                                        <a href="#" class="text-xs text-default hover:text-primary transition-colors">#MLS0018</a>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">First Pass API</td>
                                    <td class="py-2.5 px-2 text-xs text-default">27 Aug 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">On Track</span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2">
                                        <a href="#" class="text-xs text-default hover:text-primary transition-colors">#MLS0017</a>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">App Store Submission</td>
                                    <td class="py-2.5 px-2 text-xs text-default">16 Aug 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Planned</span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-2.5 px-2">
                                        <a href="#" class="text-xs text-default hover:text-primary transition-colors">#MLS0011</a>
                                    </td>
                                    <td class="py-2.5 px-2 text-xs font-semibold text-title">Beta Release</td>
                                    <td class="py-2.5 px-2 text-xs text-default">18 May 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">On Track</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-12 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4 lg:col-span-12 xl:col-span-4">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Timesheet</h3>
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
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Today
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-03.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Anastasia Leton">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Anastasia Leton</p>
                                    <p class="text-[11px] text-default truncate mb-0">Design Employee Dashboard</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-0">05 Sep 2025</p>
                                <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">Approved</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Noah Bennett">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Noah Bennett</p>
                                    <p class="text-[11px] text-default truncate mb-0">Build Patient Form</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-0">11 Sep 2025</p>
                                <span class="text-[10px] bg-warning-transparent text-warning px-1.5 py-0.5 rounded">Pending</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-05.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Victoria Ellsworth">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Victoria Ellsworth</p>
                                    <p class="text-[11px] text-default truncate mb-0">Develop Quiz</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-0">28 Aug 2025</p>
                                <span class="text-[10px] bg-info-transparent text-info px-1.5 py-0.5 rounded">Submitted</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-06.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Noah Kensington">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Noah Kensington</p>
                                    <p class="text-[11px] text-default truncate mb-0">Integrate Voice</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-0">17 Aug 2025</p>
                                <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded">Approved</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-07.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Liam Gallagher">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Liam Gallagher</p>
                                    <p class="text-[11px] text-default truncate mb-0">Refactor API Authentication</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-0">14 Aug 2025</p>
                                <span class="text-[10px] bg-secondary-transparent text-secondary px-1.5 py-0.5 rounded">In Progress</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <img src="@/assets/img/avatar/avatar-08.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Sophia Vance">
                                <div class="min-w-0">
                                    <p class="text-xs font-semibold text-title truncate mb-0">Sophia Vance</p>
                                    <p class="text-[11px] text-default truncate mb-0">Setup Webhook Listeners</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-0">09 Aug 2025</p>
                                <span class="text-[10px] bg-danger-transparent text-danger px-1.5 py-0.5 rounded">Rejected</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="bg-white border border-border-color rounded-md p-4 lg:col-span-6 xl:col-span-4">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Teams</h3>
                        <router-link :to="all_routes.departments" class="btn-sm bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer">
                            View All<i class="icon-chevron-right"></i>
                        </router-link>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <a href="#" class="shrink-0 group hover:opacity-80 transition-opacity">
                                    <img src="@/assets/img/avatar/avatar-04.jpg" class="size-9 rounded-full border border-border-color" alt="Chloe Mitchell">
                                </a>
                                <div class="min-w-0">
                                    <p class="mb-0">
                                        <a href="#" class="text-xs font-semibold text-title truncate block hover:text-primary transition-colors">Chloe Mitchell (TL)</a>
                                    </p>
                                    <p class="text-[11px] text-default mb-0">UI/UX Designing</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-1">Team Members</p>
                                <div class="flex items-center -space-x-2 justify-end">
                                    <img src="@/assets/img/avatar/avatar-03.jpg" class="size-5 rounded-full border-2 border-white" alt="Anastasia Leton">
                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="size-5 rounded-full border-2 border-white" alt="Victoria Ellsworth">
                                    <span class="size-5 rounded-full bg-primary text-white text-[9px] flex items-center justify-center border-2 border-white">+5</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <a href="#" class="shrink-0 group hover:opacity-80 transition-opacity">
                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="size-9 rounded-full border border-border-color" alt="Daniel Roberts">
                                </a>
                                <div class="min-w-0">
                                    <p class="mb-0">
                                        <a href="#" class="text-xs font-semibold text-title truncate block hover:text-primary transition-colors">Daniel Roberts (TL)</a>
                                    </p>
                                    <p class="text-[11px] text-default mb-0">Frontend Developer</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-1">Team Members</p>
                                <div class="flex items-center -space-x-2 justify-end">
                                    <img src="@/assets/img/avatar/avatar-04.jpg" class="size-5 rounded-full border-2 border-white" alt="Chloe Mitchell">
                                    <img src="@/assets/img/avatar/avatar-07.jpg" class="size-5 rounded-full border-2 border-white" alt="Daniel Roberts">
                                    <span class="size-5 rounded-full bg-primary text-white text-[9px] flex items-center justify-center border-2 border-white">+5</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <a href="#" class="shrink-0 group hover:opacity-80 transition-opacity">
                                    <img src="@/assets/img/avatar/avatar-06.jpg" class="size-9 rounded-full border border-border-color" alt="Grace Adams">
                                </a>
                                <div class="min-w-0">
                                    <p class="mb-0">
                                        <a href="#" class="text-xs font-semibold text-title truncate block hover:text-primary transition-colors">Grace Adams (TL)</a>
                                    </p>
                                    <p class="text-[11px] text-default mb-0">React Developer</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-1">Team Members</p>
                                <div class="flex items-center -space-x-2 justify-end">
                                    <img src="@/assets/img/avatar/avatar-03.jpg" class="size-5 rounded-full border-2 border-white" alt="Ethan Turner">
                                    <img src="@/assets/img/avatar/avatar-08.jpg" class="size-5 rounded-full border-2 border-white" alt="Marcus Vance">
                                    <span class="size-5 rounded-full bg-primary text-white text-[9px] flex items-center justify-center border-2 border-white">+5</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <a href="#" class="shrink-0 group hover:opacity-80 transition-opacity">
                                    <img src="@/assets/img/avatar/avatar-07.jpg" class="size-9 rounded-full border border-border-color" alt="Hendrita Bennett">
                                </a>
                                <div class="min-w-0">
                                    <p class="mb-0">
                                        <a href="#" class="text-xs font-semibold text-title truncate block hover:text-primary transition-colors">Hendrita Bennett (TL)</a>
                                    </p>
                                    <p class="text-[11px] text-default mb-0">Backend Developer</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-1">Team Members</p>
                                <div class="flex items-center -space-x-2 justify-end">
                                    <img src="@/assets/img/avatar/avatar-04.jpg" class="size-5 rounded-full border-2 border-white" alt="Chloe Mitchell">
                                    <img src="@/assets/img/avatar/avatar-06.jpg" class="size-5 rounded-full border-2 border-white" alt="Grace Adams">
                                    <span class="size-5 rounded-full bg-primary text-white text-[9px] flex items-center justify-center border-2 border-white">+5</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <a href="#" class="shrink-0 group hover:opacity-80 transition-opacity">
                                    <img src="@/assets/img/avatar/avatar-08.jpg" class="size-9 rounded-full border border-border-color" alt="Marcus Vance">
                                </a>
                                <div class="min-w-0">
                                    <p class="mb-0">
                                        <a href="#" class="text-xs font-semibold text-title truncate block hover:text-primary transition-colors">Marcus Vance (TL)</a>
                                    </p>
                                    <p class="text-[11px] text-default mb-0">DevOps Engineer</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-1">Team Members</p>
                                <div class="flex items-center -space-x-2 justify-end">
                                    <img src="@/assets/img/avatar/avatar-01.jpg" class="size-5 rounded-full border-2 border-white" alt="Alice Johnson">
                                    <img src="@/assets/img/avatar/avatar-02.jpg" class="size-5 rounded-full border-2 border-white" alt="Boe Johnson">
                                    <span class="size-5 rounded-full bg-primary text-white text-[9px] flex items-center justify-center border-2 border-white">+3</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2 min-w-0">
                                <a href="#" class="shrink-0 group hover:opacity-80 transition-opacity">
                                    <img src="@/assets/img/avatar/avatar-09.jpg" class="size-9 rounded-full border border-border-color" alt="Sophia Gallagher">
                                </a>
                                <div class="min-w-0">
                                    <p class="mb-0">
                                        <a href="#" class="text-xs font-semibold text-title truncate block hover:text-primary transition-colors">Sophia Gallagher (TL)</a>
                                    </p>
                                    <p class="text-[11px] text-default mb-0">QA Automation</p>
                                </div>
                            </div>
                            <div class="text-end shrink-0">
                                <p class="text-[11px] text-default mb-1">Team Members</p>
                                <div class="flex items-center -space-x-2 justify-end">
                                    <img src="@/assets/img/avatar/avatar-10.jpg" class="size-5 rounded-full border-2 border-white" alt="Isabella Martin">
                                    <img src="@/assets/img/avatar/avatar-11.jpg" class="size-5 rounded-full border-2 border-white" alt="James Wilson">
                                    <span class="size-5 rounded-full bg-primary text-white text-[9px] flex items-center justify-center border-2 border-white">+4</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="bg-white border border-border-color rounded-md p-4 lg:col-span-6 xl:col-span-4">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Task Summary</h3>
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
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Today
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="pj-task-summary-chart" class="flex justify-center">
                        <apexchart                                        
                            type="donut"
                            height="150"
                            :options="pjTaskSummaryChart.chartOptions"
                            :series="pjTaskSummaryChart.series"
                            >
                        </apexchart>
                    </div>
                    <div class="space-y-2 mt-3">
                        <div class="flex items-center justify-between gap-2 text-[11px]">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-success"></span>
                                <span class="text-default">Completed</span>
                            </div>
                            <span class="font-semibold text-gray-900">30%</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 text-[11px]">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-orange"></span>
                                <span class="text-default">Pending</span>
                            </div>
                            <span class="font-semibold text-gray-900">25%</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 text-[11px]">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-info"></span>
                                <span class="text-default">In Progress</span>
                            </div>
                            <span class="font-semibold text-gray-900">20%</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 text-[11px]">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-purple"></span>
                                <span class="text-default">Active</span>
                            </div>
                            <span class="font-semibold text-gray-900">15%</span>
                        </div>
                        <div class="flex items-center justify-between gap-2 text-[11px]">
                            <div class="flex items-center gap-2">
                                <span class="size-2 rounded-full bg-danger"></span>
                                <span class="text-default">Cancelled</span>
                            </div>
                            <span class="font-semibold text-gray-900">10%</span>
                        </div>
                    </div>
                </div>

            </div>

            <!-- All Project -->
            <div class="bg-white border border-border-color rounded-md p-4 pb-1.5">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">All Project</h3>
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
                                <a class="flex items-center px-2 py-1.5 rounded-md text-xs text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Today
                                </a>  
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-xs text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Project Name</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Priority</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Project Lead</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-xs text-default hover:text-primary transition-colors">#PRO0020</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 rounded-md bg-success-transparent flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
                                            <i class="ph-duotone ph-buildings text-success"></i>
                                        </a>
                                        <p class="mb-0">
                                            <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Office Management App</a>
                                        </p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Low</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" class="rounded-full border border-border-color" alt="Ethan Walker">
                                        </div>
                                        <p class="text-xs font-semibold text-title mb-0 whitespace-nowrap">Ethan Walker</p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-xs text-default hover:text-primary transition-colors">#PRO0019</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 rounded-md bg-info-transparent flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
                                            <i class="ph-duotone ph-first-aid-kit text-info"></i>
                                        </a>
                                        <p class="mb-0">
                                            <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Clinic Management</a>
                                        </p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-04.jpg" class="rounded-full border border-border-color" alt="Madison Clark">
                                        </div>
                                        <p class="text-xs font-semibold text-title mb-0 whitespace-nowrap">Madison Clark</p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">In Progress</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-xs text-default hover:text-primary transition-colors">#PRO0018</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 rounded-md bg-orange-transparent flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
                                            <i class="ph-duotone ph-graduation-cap text-orange"></i>
                                        </a>
                                        <p class="mb-0">
                                            <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Educational Platform</a>
                                        </p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-05.jpg" class="rounded-full border border-border-color" alt="James Harris">
                                        </div>
                                        <p class="text-xs font-semibold text-title mb-0 whitespace-nowrap">James Harris</p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-xs text-default hover:text-primary transition-colors">#PRO0017</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 rounded-md bg-pink-transparent flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
                                            <i class="ph-duotone ph-chat-circle text-pink"></i>
                                        </a>
                                        <p class="mb-0">
                                            <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">Chat & Call Mobile App</a>
                                        </p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Low</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-06.jpg" class="rounded-full border border-border-color" alt="Avery Thompson">
                                        </div>
                                        <p class="text-xs font-semibold text-title mb-0 whitespace-nowrap">Avery Thompson</p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">In Progress</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color last:border-0">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-xs text-default hover:text-primary transition-colors">#PRO0011</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 rounded-md bg-purple-transparent flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity">
                                            <i class="ph-duotone ph-storefront text-purple"></i>
                                        </a>
                                        <p class="mb-0">
                                            <a href="#" class="text-xs font-semibold text-title hover:text-primary transition-colors">POS Admin Software</a>
                                        </p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Low</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-07.jpg" class="rounded-full border border-border-color" alt="Harper Scott">
                                        </div>
                                        <p class="text-xs font-semibold text-title mb-0 whitespace-nowrap">Harper Scott</p>
                                    </div>
                                </td>
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
import { pjSpark1, pjSpark2, pjSpark3, pjSpark4, pjProgressChart, resourceChart, pjTaskSummaryChart } from './data.js'
export default {
    data() {
        return {
            rangeDate: null,
            pjSpark1: pjSpark1,
            pjSpark2: pjSpark2,
            pjSpark3: pjSpark3,
            pjSpark4: pjSpark4,
            pjProgressChart: pjProgressChart,
            resourceChart: resourceChart,
            pjTaskSummaryChart: pjTaskSummaryChart,
        }
    },
    setup() {
        return {
            all_routes
        }
    }
}
</script>