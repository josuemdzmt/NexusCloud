<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Job Listings</h1>
                <div class="flex items-center gap-2">
                    <router-link :to="all_routes.sourcingCampaigns" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-megaphone"></i> Sourcing</router-link>
                    <router-link :to="all_routes.recruitmentAnalytics" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-chart-bar"></i> Analytics</router-link>
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i> Print</button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i> </button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1"> <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as PDF
                                </a> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as Excel
                                </a> 
                            </div>
                        </div>
                    </div>
                    <router-link :to="all_routes.addJobRequisition" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer"><i class="ph ph-plus"></i> Add New</router-link>
                </div>
            </div>
            <div class="flex items-center flex-wrap gap-1 border-b border-border-color mb-4"><router-link :to="all_routes.recruitment" class="px-4 py-2 text-sm font-semibold text-gray-900 border-b-2 border-primary -mb-px">Jobs</router-link><router-link :to="all_routes.candidatePipline" class="px-4 py-2 text-sm text-default hover:text-gray-900">Pipeline</router-link><router-link :to="all_routes.interviewScheduler" class="px-4 py-2 text-sm text-default hover:text-gray-900">Interviews</router-link><router-link :to="all_routes.offerManagement" class="px-4 py-2 text-sm text-default hover:text-gray-900">Offers</router-link><router-link :to="all_routes.onboarding" class="px-4 py-2 text-sm text-default hover:text-gray-900">Onboarding</router-link></div>
            <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input"><i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center flex-wrap gap-2">
                        <div class="hs-dropdown [--placement:bottom-left] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>Ethan Walker</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Madison Clark</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">James Harris</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Avery Thompson</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Benjamin Wright</label>
                                    <div class="flex items-center justify-between gap-2 mt-3">
                                        <button type="button" class="btn-sm bg-white w-full border border-border-color text-gray-900 flex items-center justify-center hover:bg-light cursor-pointer">Cancel</button>
                                        <button type="button" class="btn-sm bg-dark w-full border border-dark text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white cursor-pointer">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-arrow-up-down font-normal"></i> Sort By <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        A - Z
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Z - A
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Newest
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Oldest
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        High
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Low
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Job ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Job Title</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Department</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Location</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Applicants</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Posted</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#JOB0020</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Senior React Developer</td>
                                <td class="py-2.5 px-2 text-sm text-default">Engineering</td>
                                <td class="py-2.5 px-2 text-sm text-default">Remote</td>
                                <td class="py-2.5 px-2 text-sm text-default">42</td>
                                <td class="py-2.5 px-2 text-sm text-default">11 Sep 2025</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Open</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <router-link class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" :to="all_routes.editJobRequisition">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </router-link>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#JOB0019</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">UX Designer</td>
                                <td class="py-2.5 px-2 text-sm text-default">Design</td>
                                <td class="py-2.5 px-2 text-sm text-default">New York, USA</td>
                                <td class="py-2.5 px-2 text-sm text-default">28</td>
                                <td class="py-2.5 px-2 text-sm text-default">05 Sep 2025</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Open</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <router-link class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" :to="all_routes.editJobRequisition">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </router-link>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#JOB0018</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">HR Specialist</td>
                                <td class="py-2.5 px-2 text-sm text-default">HR</td>
                                <td class="py-2.5 px-2 text-sm text-default">London, UK</td>
                                <td class="py-2.5 px-2 text-sm text-default">35</td>
                                <td class="py-2.5 px-2 text-sm text-default">27 Aug 2025</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">On Hold</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <router-link class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" :to="all_routes.editJobRequisition">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </router-link>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#JOB0017</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Sales Executive</td>
                                <td class="py-2.5 px-2 text-sm text-default">Sales</td>
                                <td class="py-2.5 px-2 text-sm text-default">Hybrid</td>
                                <td class="py-2.5 px-2 text-sm text-default">56</td>
                                <td class="py-2.5 px-2 text-sm text-default">16 Aug 2025</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Open</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <router-link class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" :to="all_routes.editJobRequisition">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </router-link>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#JOB0016</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">DevOps Engineer</td>
                                <td class="py-2.5 px-2 text-sm text-default">Engineering</td>
                                <td class="py-2.5 px-2 text-sm text-default">Remote</td>
                                <td class="py-2.5 px-2 text-sm text-default">18</td>
                                <td class="py-2.5 px-2 text-sm text-default">25 Jul 2025</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Closed</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <router-link class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" :to="all_routes.editJobRequisition">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </router-link>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#JOB0015</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Marketing Lead</td>
                                <td class="py-2.5 px-2 text-sm text-default">Marketing</td>
                                <td class="py-2.5 px-2 text-sm text-default">San Francisco, USA</td>
                                <td class="py-2.5 px-2 text-sm text-default">22</td>
                                <td class="py-2.5 px-2 text-sm text-default">12 Jul 2025</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Open</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <router-link class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" :to="all_routes.editJobRequisition">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </router-link>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#JOB0014</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Financial Analyst</td>
                                <td class="py-2.5 px-2 text-sm text-default">Finance</td>
                                <td class="py-2.5 px-2 text-sm text-default">Chicago, USA</td>
                                <td class="py-2.5 px-2 text-sm text-default">31</td>
                                <td class="py-2.5 px-2 text-sm text-default">23 Jun 2025</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Open</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <router-link class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" :to="all_routes.editJobRequisition">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </router-link>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>

    <!-- Delete Modal -->
    <div id="delete-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-sm sm:w-full m-3 max-w-[300px]! sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color p-6">
                <div class="bg-danger-transparent size-10 rounded-lg flex items-center justify-center mx-auto">
                    <i class="icon-trash-2 text-danger text-[20px]!"></i>
                </div>
                <div class="my-5 text-center">
                    <p class="text-base font-bold text-title mb-1">Delete Confirmation</p>
                    <p class="mb-0 text-sm">Are you sure, do you want to delete ?</p>
                </div>
                <div class="flex justify-between items-center gap-2 flex-col">
                    <button type="button" class="btn-sm w-full bg-danger text-white border border-danger hover:bg-danger-hover cursor-pointer">Yes, Delete</button>
                    <button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#delete-modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
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
