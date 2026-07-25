<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div>
                    <div class="flex items-center gap-2 text-sm text-default mb-1"><span>HRM</span> <i class="ph ph-caret-right text-[10px]"></i> <router-link :to="all_routes.recruitment" class="hover:text-primary">Recruitment</router-link> <i class="ph ph-caret-right text-[10px]"></i> <span>Analytics</span></div>
                    <h1 class="text-gray-900 text-xl font-bold mb-0">Recruitment Analytics</h1>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i> Print</button>
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer" aria-haspopup="dialog" aria-expanded="false" aria-controls="analytics-filter-offcanvas" data-hs-overlay="#analytics-filter-offcanvas"><i class="ph-duotone ph-funnel"></i> Filter</button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i> </button>
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
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Time to Hire</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">24 days</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↘ 3 days</span>
                        </div>
                        <div class="size-9 rounded-md bg-info-transparent flex items-center justify-center"><i class="ph-duotone ph-clock text-info"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Offer Acceptance Rate</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">87.5%</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 2.3%</span>
                        </div>
                        <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center"><i class="ph-duotone ph-seal-check text-success"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Open Requisitions</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">12</h2>
                            <span class="text-[10px] bg-warning-transparent text-warning px-1.5 py-0.5 rounded mt-1 inline-block">↗ 4</span>
                        </div>
                        <div class="size-9 rounded-md bg-warning-transparent flex items-center justify-center"><i class="ph-duotone ph-briefcase text-warning"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Applicants This Month</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">164</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 18.6%</span>
                        </div>
                        <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center"><i class="ph-duotone ph-user-plus text-purple"></i></div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-3 mb-3">
                <div class="col-span-12 lg:col-span-5">
                    <div class="bg-white border border-border-color rounded-md p-4 h-full">
                        <h3 class="text-lg font-bold text-title mb-3">Hiring Funnel</h3>
                        <div class="space-y-4">
                            <div>
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-sm font-semibold text-gray-900">Applied</span>
                                    <span class="text-sm text-default">486</span>
                                </div>
                                <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                                    <div class="h-full bg-primary rounded-full" style="width:100%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-sm font-semibold text-gray-900">Screened</span>
                                    <span class="text-sm text-default">312</span>
                                </div>
                                <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                                    <div class="h-full bg-info rounded-full" style="width:64%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-sm font-semibold text-gray-900">Interviewed</span>
                                    <span class="text-sm text-default">148</span>
                                </div>
                                <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                                    <div class="h-full bg-warning rounded-full" style="width:30%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-sm font-semibold text-gray-900">Offered</span>
                                    <span class="text-sm text-default">40</span>
                                </div>
                                <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                                    <div class="h-full bg-purple rounded-full" style="width:8%"></div>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-sm font-semibold text-gray-900">Hired</span>
                                    <span class="text-sm text-default">35</span>
                                </div>
                                <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                                    <div class="h-full bg-success rounded-full" style="width:7%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-7">
                    <div class="bg-white border border-border-color rounded-md p-4 pb-0 h-full">
                        <h3 class="text-lg font-bold text-title mb-3">Source Effectiveness</h3>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="text-sm text-default border-b border-border-color">
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Source</th>
                                        <th class="text-right py-2 px-2 font-semibold text-gray-900">Applicants</th>
                                        <th class="text-right py-2 px-2 font-semibold text-gray-900">Hires</th>
                                        <th class="text-right py-2 px-2 font-semibold text-gray-900">Conversion</th>
                                        <th class="text-right py-2 px-2 font-semibold text-gray-900">Cost per Hire</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-border-color">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">LinkedIn</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">230</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">12</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">5.2%</td>
                                        <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$725</td>
                                        <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Strong</span></td>
                                    </tr>
                                    <tr class="border-b border-border-color">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Indeed</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">148</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">8</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">5.4%</td>
                                        <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$630</td>
                                        <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Strong</span></td>
                                    </tr>
                                    <tr class="border-b border-border-color">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Referral</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">64</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">11</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">17.2%</td>
                                        <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$220</td>
                                        <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Strong</span></td>
                                    </tr>
                                    <tr class="border-0">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Job Fair</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">64</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">3</td>
                                        <td class="py-2.5 px-2 text-sm text-default text-right">4.7%</td>
                                        <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$915</td>
                                        <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Watch</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                <h3 class="text-lg font-bold text-title mb-3">Open Requisitions by Department</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Department</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Open Roles</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Applicants</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Avg Time to Hire</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Offer Acceptance</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Engineering</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">5</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">198</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">28 days</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">90%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">On Track</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Sales</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">3</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">112</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">21 days</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">82%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">On Track</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Design</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">2</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">88</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">19 days</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">95%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">On Track</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Finance</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">1</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">31</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">34 days</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">75%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Delayed</span></td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">HR</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">1</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">35</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">40 days</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">70%</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">At Risk</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>

    <!-- Analytics Filter Offcanvas start -->
    <div id="analytics-filter-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[400px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Filter</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#analytics-filter-offcanvas"><i class="ph ph-x text-sm"></i></button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Department</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>HR</option>
                        <option>Finance</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                    </select>
                </div>
                <div class="col-span-12">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Position</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Senior React Developer</option>
                        <option>UX Designer</option>
                        <option>HR Specialist</option>
                        <option>Sales Executive</option>
                        <option>DevOps Engineer</option>
                        <option>Marketing Lead</option>
                        <option>Financial Analyst</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Start Date</label>
                    <input type="date" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">End Date</label>
                    <input type="date" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between gap-2 p-4 bg-light">
            <button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#analytics-filter-offcanvas">Cancel</button>
            <button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Apply</button>
        </div>
    </div>
    <!-- Analytics Filter Offcanvas end -->
</template>

<script>
import { all_routes } from '@/router/all_routes';

export default {
    setup() {

        return {
            all_routes
        };
    },
}
</script>
