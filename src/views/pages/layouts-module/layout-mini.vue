<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            

            <!-- Greeting -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div>
                    <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-1">Good morning, Andrew 👋</h1>
                    <p class="text-sm text-default mb-0">You have 7 leave requests and 2 urgent alerts pending.</p>
                </div>
                <div class="flex items-center gap-2">
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
                    <router-link :to="all_routes.addEmployee" class="btn-sm bg-dark text-white border border-dark flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer">
                        <i class="ph-duotone ph-plus-circle"></i> Add Employee
                    </router-link>
                </div>
            </div>

            <div class="grid grid-cols-1 xxl:grid-cols-12 xl:grid-cols-12 gap-3 mb-3">

                <!-- Total Workforce -->
                <div class="flex flex-col gap-3 xl:col-span-12 xxl:col-span-4">

                    <!-- Total Workforce -->
                    <div class="bg-white border border-border-color rounded-md p-4 flex-1">
                        <div class="">
                            <div class="flex items-center justify-between mb-2">
                                <p class="text-base font-bold text-title mb-0">Total Workforce</p>
                                <div class="size-10 shrink-0 bg-indigo rounded-md flex items-center justify-center">
                                    <i class="icon-users text-white text-2xl"></i>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 mb-1">
                                <h2 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">1,284</h2>
                                <span class="inline-flex items-center text-[11px] font-medium bg-success-transparent text-success px-2 py-0.5 rounded-md">
                                    <i class="icon-arrow-up-right text-[10px] me-1"></i> 12 new this month
                                </span>
                            </div>
                            <p class="text-[13px] text-default mb-0">Active employees across 7 departments</p>
                        </div>
                    </div>

                    <!-- KPI grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <div class="size-9 bg-primary rounded-md flex items-center justify-center">
                                    <i class="ph-duotone ph-calendar-blank text-xl text-white"></i>
                                </div>
                                <span class="inline-flex items-center text-[11px] font-medium bg-success-transparent text-success px-2 py-0.5 rounded-md">
                                    <i class="icon-arrow-up-right me-1"></i>3.64%
                                </span>
                            </div>
                            <p class="text-xs text-default mb-1">On Leave Today</p>
                            <h3 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">23</h3>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <div class="size-9 bg-warning rounded-md flex items-center justify-center">
                                    <i class="ph-duotone ph-user-check text-xl text-white"></i>
                                </div>
                                <span class="inline-flex items-center text-[11px] font-medium bg-success-transparent text-success px-2 py-0.5 rounded-md">
                                    <i class="icon-arrow-up-right me-1"></i>3.64%
                                </span>
                            </div>
                            <p class="text-xs text-default mb-1">Attendance Rate</p>
                            <h3 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">94.2%</h3>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <div class="size-9 bg-purple rounded-md flex items-center justify-center">
                                    <i class="ph-duotone ph-user-plus text-xl text-white"></i>
                                </div>
                                <span class="inline-flex items-center text-[11px] font-medium bg-success-transparent text-success px-2 py-0.5 rounded-md">
                                    <i class="icon-arrow-up-right me-1"></i>3.64%
                                </span>
                            </div>
                            <p class="text-xs text-default mb-1">Open Positions</p>
                            <h3 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">47</h3>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <div class="size-9 bg-danger rounded-md flex items-center justify-center">
                                    <i class="ph-duotone ph-currency-circle-dollar text-xl text-white"></i>
                                </div>
                                <span class="inline-flex items-center text-[11px] font-medium bg-success-transparent text-success px-2 py-0.5 rounded-md">
                                    <i class="icon-arrow-up-right me-1"></i>3.64%
                                </span>
                            </div>
                            <p class="text-xs text-default mb-1">Monthly Payroll</p>
                            <h3 class="text-2xl max-lg:text-xl font-bold text-gray-900 mb-0">$1,248K</h3>
                        </div>

                    </div>

                </div>

                <!-- Employee Distribution + Run Payroll -->
                <div class="flex flex-col gap-3 xl:col-span-6 xxl:col-span-4">

                    <!-- Employee Distribution -->
                    <div class="bg-white p-4 border border-border-color rounded-md flex-1">
                        <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                            <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0 dark:text-dark">Employee Distribution</h3>
                            <span class="inline-flex items-center text-[11px] font-medium bg-success-transparent text-success px-2 py-0.5 rounded-md">Live</span>
                        </div>
                        <div>
                            <div class="flex-column sm:flex items-center gap-3">
                                <div id="employee-distribution-chart" class="shrink-0">
                                    <apexchart                                        
                                        type="donut"
                                        height="150"
                                        width="150"
                                        :options="employeeDistributionChart.chartOptions"
                                        :series="employeeDistributionChart.series"
                                        >
                                    </apexchart>
                                </div>
                                <div class="flex-1 space-y-1.5">
                                    <div class="flex items-center justify-between gap-2">
                                        <div class="flex items-center gap-2">
                                            <span class="size-2 rounded-full bg-primary"></span>
                                            <span class="text-xs text-default">Engineering</span>
                                        </div>
                                        <p>488</p>
                                    </div>
                                    <div class="flex items-center justify-between gap-2">
                                        <div class="flex items-center gap-2">
                                            <span class="size-2 rounded-full bg-orange"></span>
                                            <span class="text-xs text-default">Marketing</span>
                                        </div>
                                        <p>282</p>
                                    </div>
                                    <div class="flex items-center justify-between gap-2">
                                        <div class="flex items-center gap-2">
                                            <span class="size-2 rounded-full bg-success"></span>
                                            <span class="text-xs text-default">Finance</span>
                                        </div>
                                        <p>231</p>
                                    </div>
                                    <div class="flex items-center justify-between gap-2">
                                        <div class="flex items-center gap-2">
                                            <span class="size-2 rounded-full bg-pink"></span>
                                            <span class="text-xs text-default">Sales</span>
                                        </div>
                                        <p>180</p>
                                    </div>
                                    <div class="flex items-center justify-between gap-2">
                                        <div class="flex items-center gap-2">
                                            <span class="size-2 rounded-full bg-dark"></span>
                                            <span class="text-xs text-default">HR</span>
                                        </div>
                                        <p>103</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border-color">
                                <div class="text-center bg-light border border-border-color rounded-md p-2">
                                    <h3 class="mb-1">1196</h3>
                                    <p class="text-default mb-0">Active</p>
                                </div>
                                <div class="text-center bg-light border border-border-color rounded-md p-2">
                                    <h3 class="mb-1">88</h3>
                                    <p class="text-default mb-0">Active</p>
                                </div>
                                <div class="text-center bg-light border border-border-color rounded-md p-2">
                                    <h3 class="mb-1">12</h3>
                                    <p class="text-default mb-0">Active</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Run Payroll CTA -->
                    <div class="bg-primary-gradient rounded-md p-4 flex items-center justify-between gap-3">
                        <div>
                            <p class="text-lg max-lg:text-[17px] font-bold text-white mb-1">Run Payroll</p>
                            <p class="text-white mb-0">Process Monthly Pay</p>
                        </div>
                        <button type="button" class="btn bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer shrink-0">
                            <i class="icon-circle-dollar-sign"></i> Run Payroll
                        </button>
                    </div>

                </div>

                <!-- Attendance Summary -->
                <div class="bg-white p-4 pb-0 border border-border-color rounded-md xl:col-span-6 xxl:col-span-4">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Attendance Summary</h3>
                        <router-link :to="all_routes.attendance" class="btn-sm bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer">
                            View Logs<i class="icon-chevron-right"></i>
                        </router-link>
                    </div>
                    <div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                            <div class="border border-border-color bg-light rounded-md p-3">
                                <p class="text-xs text-default mb-1">Present</p>
                                <h4 class="text-xl font-bold text-gray-900 mb-1">1209</h4>
                                <p class="text-[13px] text-default mb-0">94.2% of workforce</p>
                            </div>
                            <div class="border border-border-color bg-light rounded-md p-3">
                                <p class="text-xs text-default mb-1">Late</p>
                                <h4 class="text-xl font-bold text-gray-900 mb-1">78</h4>
                                <p class="text-[13px] text-default mb-0">After 9:30 AM</p>
                            </div>
                            <div class="border border-border-color bg-light rounded-md p-3">
                                <p class="text-xs text-default mb-1">Absent</p>
                                <h4 class="text-xl font-bold text-gray-900 mb-1">52</h4>
                                <p class="text-[13px] text-default mb-0">Unplanned absence</p>
                            </div>
                            <div class="border border-border-color bg-light rounded-md p-3">
                                <p class="text-xs text-default mb-1">Remote</p>
                                <h4 class="text-xl font-bold text-gray-900 mb-1">361</h4>
                                <p class="text-[13px] text-default mb-0">WFH approved</p>
                            </div>
                        </div>
                        <p class="text-base font-bold text-title mb-1">Weekly Attendance Trend</p>
                        <div id="weekly-attendance-chart">
                            <apexchart                                        
                                type="bar"
                                height="110"
                                :options="weeklyAttendanceChart.chartOptions"
                                :series="weeklyAttendanceChart.series"
                                >
                            </apexchart>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Recruitment Pipeline -->
            <div class="grid grid-cols-1 xxl:grid-cols-2 xl:grid-cols-1 gap-3 mb-3">

                
                <div class="relative overflow-hidden rounded-md border border-border-color bg-white">
                    <div class="bg-linear-gradient p-4">
                        <div class="flex items-center justify-between flex-wrap gap-2 mb-5">
                            <div>
                                <p class="text-white mb-1">Monthly Payroll</p>
                                <h3 class="font-bold text-white mb-2">$1,248K</h3>
                                <p class="text-[13px] text-white mb-0">March 2026 · 1,196 employees</p>
                            </div>
                            <button type="button" class="btn-sm bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer">
                                <i class="icon-download"></i> Download Payslip
                            </button>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                                <p class="text-white mb-1">Avg Salary</p>
                                <h4 class="text-2xl max-lg:text-xl text-white mb-0">$1,285.3K</h4>
                            </div>
                            <div>
                                <p class="text-white mb-1">Last Month</p>
                                <h4 class="text-2xl max-lg:text-xl text-white mb-0">$1,196K</h4>
                            </div>
                            <div>
                                <p class="text-white mb-1">MOM Growth</p>
                                <h4 class="text-2xl max-lg:text-xl text-white mb-0">4.2%</h4>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 pb-0">
                        <p class="text-lg max-lg:text-[17px] text-gray-900 font-bold mb-0">6-Month Payroll Trend</p>
                        <div id="payroll-trend-chart">
                            <apexchart                                        
                                type="area"
                                height="80"
                                :options="payrollTrendChart.chartOptions"
                                :series="payrollTrendChart.series"
                                >
                            </apexchart>
                        </div>
                    </div>
                </div>

                <!-- Recruitment Pipeline -->
                <div class="bg-white p-4 border border-border-color rounded-md">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Recruitment Pipeline</h3>
                        <router-link :to="all_routes.addJobRequisition" class="btn-sm bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer">
                            <i class="ph ph-plus"></i> Post New Job
                        </router-link>
                    </div>
                    <div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                            <div class="border border-border-color rounded-md p-3">
                                <div class="flex items-center gap-2 mb-2">
                                    <div class="size-10 bg-light border border-border-color rounded-md flex items-center justify-center">
                                        <i class="ph-duotone ph-clipboard-text text-2xl"></i>
                                    </div>
                                    <div>											
                                        <h3 class="mb-0">47</h3>
                                        <p class="text-xs mb-0">New Applicants</p>
                                    </div>
                                </div>
                                <div class="h-1 bg-success rounded-full"></div>
                            </div>
                            <div class="border border-border-color rounded-md p-3">
                                <div class="flex items-center gap-2 mb-2">
                                    <div class="size-10 bg-light border border-border-color rounded-md flex items-center justify-center">
                                        <i class="ph-duotone ph-users text-2xl"></i>
                                    </div>											
                                    <div>											
                                        <h3 class="mb-0">23</h3>
                                        <p class="text-xs mb-0">Screening</p>
                                    </div>
                                </div>
                                <div class="h-1 bg-purple rounded-full"></div>
                            </div>
                            <div class="border border-border-color rounded-md p-3">
                                <div class="flex items-center gap-2 mb-2">
                                    <div class="size-10 bg-light border border-border-color rounded-md flex items-center justify-center">
                                        <i class="ph-duotone ph-video-camera text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="mb-0">12</h3>
                                        <p class="text-xs mb-0">Interviews</p>
                                    </div>
                                </div>
                                <div class="h-1 bg-info rounded-full"></div>
                            </div>
                        </div>
                        <p class="text-sm font-semibold text-title mb-2">Recent Candidates</p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div class="flex items-center justify-between gap-2 border border-border-color bg-light rounded-md p-2">
                                <div class="flex items-center gap-2 min-w-0">
                                    <img src="@/assets/img/avatar/avatar-03.jpg" class="size-10 rounded-full border border-border-color shrink-0" alt="Alex">
                                    <div class="min-w-0">
                                        <p class="font-medium text-title truncate mb-0">Alex Thompson</p>
                                        <p class="text-[13px] truncate mb-0">Senior Developer</p>
                                    </div>
                                </div>
                                <span class="text-[11px] bg-pink-transparent text-pink  px-2 py-0.5 rounded-md shrink-0">Interview</span>
                            </div>
                            <div class="flex items-center justify-between gap-2 border border-border-color bg-light rounded-md p-2">
                                <div class="flex items-center gap-2 min-w-0">
                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="size-10 rounded-full border border-border-color shrink-0" alt="Maria">
                                    <div class="min-w-0">
                                        <p class="font-medium text-title truncate mb-0">Maria Garcia</p>
                                        <p class="text-[13px] truncate mb-0">UX Designer</p>
                                    </div>
                                </div>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded shrink-0">Applied</span>
                            </div>
                            <div class="flex items-center justify-between gap-2 border border-border-color bg-light rounded-md p-2">
                                <div class="flex items-center gap-2 min-w-0">
                                    <img src="@/assets/img/avatar/avatar-07.jpg" class="size-10 rounded-full border border-border-color shrink-0" alt="Thomas">
                                    <div class="min-w-0">
                                        <p class="font-medium text-title truncate mb-0">Thomas Mervin</p>
                                        <p class="text-[13px] truncate mb-0">Senior Developer</p>
                                    </div>
                                </div>
                                <span class="text-[11px] bg-purple-transparent text-purple px-2 py-0.5 rounded shrink-0">Offer Made</span>
                            </div>
                            <div class="flex items-center justify-between gap-2 border border-border-color bg-light rounded-md p-2">
                                <div class="flex items-center gap-2 min-w-0">
                                    <img src="@/assets/img/avatar/avatar-09.jpg" class="size-10 rounded-full border border-border-color shrink-0" alt="Regina">
                                    <div class="min-w-0">
                                        <p class="font-medium text-title truncate mb-0">Regina Bryant</p>
                                        <p class="text-[13px] truncate mb-0">Android Developer</p>
                                    </div>
                                </div>
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded shrink-0">Hired</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-12 gap-3">

                <!-- Performance Tracking -->
                <div class="bg-white p-4 border border-border-color rounded-b-md  xl:col-span-5 lg:col-span-12">
                    <div class="flex items-center justify-between flex-wrap gap-2  mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Performance Tracking</h3>
                        <router-link :to="all_routes.performanceAppraisal" class="btn-sm bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer">
                            Full Report<i class="icon-chevron-right"></i>
                        </router-link>
                    </div>
                    <div>
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center justify-between gap-2 border border-border-color rounded-md p-3">
                                <div class="flex items-center gap-2">
                                    <div class="relative">
                                        <img src="@/assets/img/avatar/avatar-04.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Evelyn">
                                        <span class="absolute bottom-0 right-0 bg-orange text-white text-xs font-semibold rounded-full size-4 flex items-center justify-center">1</span>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="font-medium text-title truncate mb-0">Evelyn Hayes</p>
                                        <p class="text-[13px] truncate mb-0">Product Manager</p>
                                    </div>
                                </div>
                                <div class="text-right shrink-0">
                                    <p class="font-semibold text-gray-900 mb-0">98</p>
                                    <p class="text-xs text-success inline-flex items-center"><i class="icon-arrow-up-right me-1"></i>2.8%</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between gap-2 border border-border-color rounded-md p-3">
                                <div class="flex items-center gap-2 min-w-0">
                                    <div class="relative">
                                        <img src="@/assets/img/avatar/avatar-06.jpg" class="size-9 rounded-full border border-border-color shrink-0" alt="Emily">
                                        <span class="absolute bottom-0 right-0 bg-primary text-white text-xs font-semibold rounded-full size-4 flex items-center justify-center">2</span>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="font-medium text-title truncate mb-0">Emily Carter</p>
                                        <p class="text-[13px] text-default truncate mb-0">Android Developer</p>
                                    </div>
                                </div>
                                <div class="text-right shrink-0">
                                    <p class="font-semibold text-gray-900 mb-0">96</p>
                                    <p class="text-xs text-success inline-flex items-center"><i class="icon-arrow-up-right me-1"></i>4.8%</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between gap-2 border border-border-color rounded-md p-3">
                                <div class="flex items-center gap-2 min-w-0">
                                    <div class="relative">
                                        <img src="@/assets/img/avatar/avatar-08.jpg" class="size-10 rounded-full border border-border-color shrink-0" alt="Daniel">
                                        <span class="absolute bottom-0 right-0 bg-info text-white text-xs font-semibold rounded-full size-4 flex items-center justify-center">3</span>
                                    </div>
                                    <div class="min-w-0">
                                        <p class="font-medium text-title truncate mb-0">Daniel Roberts</p>
                                        <p class="text-[13px] text-default truncate mb-0">Graphic Designer</p>
                                    </div>
                                </div>
                                <div class="text-right shrink-0">
                                    <p class="font-semibold text-gray-900 mb-0">94</p>
                                    <p class="text-xs text-success inline-flex items-center"><i class="icon-arrow-up-right me-1"></i>29.6%</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-3">
                            <div>
                                <div class="h-1.5 bg-light rounded-full overflow-hidden mb-2">
                                    <div class="h-full bg-primary rounded-full" style="width: 87%"></div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-[13px] mb-0">Hiring Target</p>
                                    <p class="font-semibold text-gray-900 mb-0">87%</p>
                                </div>
                            </div>
                            <div>
                                <div class="h-1.5 bg-light rounded-full overflow-hidden mb-2">
                                    <div class="h-full bg-warning rounded-full" style="width: 92%"></div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-[13px] mb-0">Employee Retention</p>
                                    <p class="font-semibold text-gray-900 mb-0">92%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Payments -->
                <div class="bg-white p-4 pb-1.5 border border-border-color rounded-md xl:col-span-7 lg:col-span-12">
                    <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 class="text-lg max-lg:text-[17px] font-bold text-title mb-0">Recent Payments</h3>
                        <router-link :to="all_routes.payments" class="btn-sm bg-white border border-border-color text-dark hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center gap-1 cursor-pointer">
                            All Openings<i class="icon-chevron-right"></i>
                        </router-link>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-xs text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 text-[13px] font-semibold text-gray-900">Job Title</th>
                                    <th class="text-left py-2 px-2 text-[13px] font-semibold text-gray-900">Category</th>
                                    <th class="text-left py-2 px-2 text-[13px] font-semibold text-gray-900">Location</th>
                                    <th class="text-left py-2 px-2 text-[13px] font-semibold text-gray-900">Openings</th>
                                    <th class="text-left py-2 px-2 text-[13px] font-semibold text-gray-900">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center gap-2">
                                            <a href="#" class="size-9 rounded-md bg-light border border-border-color flex items-center justify-center">
                                                <img src="@/assets/img/icons/apple.svg" alt="ios" class="dark:invert">
                                            </a>
                                            <p class="text-xs font-medium text-title"><a href="#" class="hover:text-primary transition">Senior IOS Developer</a></p>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2 text-xs text-default">IOS</td>
                                    <td class="py-3 px-2 text-xs text-default">New York , USA</td>
                                    <td class="py-3 px-2 text-xs text-default">02</td>
                                    <td class="py-3 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">
                                            <i class="ph ph-check-circle text-[10px] me-1"></i>Active
                                        </span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center gap-2">
                                            <a href="#" class="size-9 rounded-md bg-light border border-border-color flex items-center justify-center">
                                                <img src="@/assets/img/icons/php.svg" alt="php" class="dark:invert">
                                            </a>
                                            <span class="text-xs font-semibold text-title">Junior PHP Developer</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2 text-xs text-default">Web &amp; Application</td>
                                    <td class="py-3 px-2 text-xs text-default">Los Angeles, USA</td>
                                    <td class="py-3 px-2 text-xs text-default">03</td>
                                    <td class="py-3 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">
                                            <i class="ph ph-check-circle text-[10px] me-1"></i>Active
                                        </span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center gap-2">
                                            <a href="#" class="size-9 rounded-md bg-light border border-border-color flex items-center justify-center">
                                                <img src="@/assets/img/icons/network.svg" alt="networking" class="dark:invert">
                                            </a>
                                            <span class="text-xs font-semibold text-title">Network Engineer</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2 text-xs text-default">Networking</td>
                                    <td class="py-3 px-2 text-xs text-default">Bristol, UK</td>
                                    <td class="py-3 px-2 text-xs text-default">01</td>
                                    <td class="py-3 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">
                                            <i class="ph ph-x-circle text-[10px] me-1"></i>Expired
                                        </span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center gap-2">
                                            <a href="#" class="size-9 rounded-md bg-light border border-border-color flex items-center justify-center">
                                                <img src="@/assets/img/icons/react.svg" alt="react" class="dark:invert">
                                            </a>
                                            <span class="text-xs font-semibold text-title">Junior React Developer</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2 text-xs text-default">Web &amp; Application</td>
                                    <td class="py-3 px-2 text-xs text-default">Birmingham, UK</td>
                                    <td class="py-3 px-2 text-xs text-default">04</td>
                                    <td class="py-3 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">
                                            <i class="ph ph-check-circle text-[10px] me-1"></i>Active
                                        </span>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color last:border-0">
                                    <td class="py-3 px-2">
                                        <div class="inline-flex items-center gap-2">
                                            <a href="#" class="size-9 rounded-md bg-light border border-border-color flex items-center justify-center">
                                                <img src="@/assets/img/icons/laravel.svg" alt="laravel" class="dark:invert">
                                            </a>
                                            <span class="text-xs font-semibold text-title">Senior Laravel Developer</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-2 text-xs text-default">Web &amp; Application</td>
                                    <td class="py-3 px-2 text-xs text-default">Washington, USA</td>
                                    <td class="py-3 px-2 text-xs text-default">02</td>
                                    <td class="py-3 px-2">
                                        <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">
                                            <i class="ph ph-check-circle text-[10px] me-1"></i>Active
                                        </span>
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
import { employeeDistributionChart, weeklyAttendanceChart, payrollTrendChart } from './data.js'
export default {
    setup() {
        return { all_routes };
    },
    data() {
        return {
            employeeDistributionChart: employeeDistributionChart,
            weeklyAttendanceChart: weeklyAttendanceChart,
            payrollTrendChart: payrollTrendChart,
        }
    }
}
</script>