<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div>
                    <div class="flex items-center gap-2 text-sm text-default mb-1"><span>HRM</span> <i class="ph ph-caret-right text-[10px]"></i> <router-link :to="all_routes.recruitment" class="hover:text-primary">Recruitment</router-link> <i class="ph ph-caret-right text-[10px]"></i> <span>Sourcing &amp; Campaigns</span></div>
                    <h1 class="text-gray-900 text-xl font-bold mb-0">Sourcing &amp; Campaigns</h1></div>
                <div class="flex items-center gap-2">
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
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer"><i class="ph ph-plus"></i> Add Campaign</button>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Active Campaigns</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">5</h2><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 2</span></div>
                        <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center"><i class="ph-duotone ph-megaphone text-success"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Total Applicants</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">486</h2><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 12.4%</span></div>
                        <div class="size-9 rounded-md bg-info-transparent flex items-center justify-center"><i class="ph-duotone ph-users text-info"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Cost per Applicant</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">$38.50</h2><span class="text-[10px] bg-danger-transparent text-danger px-1.5 py-0.5 rounded mt-1 inline-block">↘ 4.2%</span></div>
                        <div class="size-9 rounded-md bg-warning-transparent flex items-center justify-center"><i class="ph-duotone ph-currency-circle-dollar text-warning"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-2">Conversion Rate</p>
                            <h2 class="text-lg font-bold text-gray-900 mb-2">3.9%</h2><span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 0.6%</span></div>
                        <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center"><i class="ph-duotone ph-trend-up text-purple"></i></div>
                    </div>
                </div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input"><i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center flex-wrap gap-2">
                        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white focus:outline-hidden cursor-pointer" aria-haspopup="dialog" aria-expanded="false" aria-controls="sourcing-filter-offcanvas" data-hs-overlay="#sourcing-filter-offcanvas">
                            <i class="icon-funnel font-normal"></i> Filter
                        </button>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-arrow-up-down font-normal"></i> Sort By <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1"
                                role="menu" aria-orientation="vertical" tabindex="-1">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Campaign</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Channel</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Job Requisition</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Applicants</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Hires</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Cost</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Start - End</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">React Devs LinkedIn Push</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-linkedin-logo text-info"></i> LinkedIn</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">Senior React Developer</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">142</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">2</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$4,800</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">12 Sep - 12 Nov 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">UX Designer Indeed Sponsored</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-globe text-primary"></i> Indeed</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">UX Designer</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">96</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">1</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$3,200</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">06 Sep - 06 Nov 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Engineering Referral Drive</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-users-three text-success"></i> Referral</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">DevOps Engineer</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">38</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">3</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$1,500</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">01 Aug - 31 Dec 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Campus Job Fair - Fall</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-storefront text-warning"></i> Job Fair</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">Financial Analyst</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">64</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">1</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$2,750</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Scheduled</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">15 Oct - 17 Oct 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Sales Talent LinkedIn Ads</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-linkedin-logo text-info"></i> LinkedIn</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">Sales Executive</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">88</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">2</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$3,900</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">17 Aug - 17 Oct 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">HR Specialist Indeed Listing</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-globe text-primary"></i> Indeed</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">HR Specialist</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">52</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">0</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$1,850</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Paused</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">28 Aug - 28 Oct 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Design Community Referrals</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-users-three text-success"></i> Referral</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">UX Designer</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">26</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">1</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$900</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2 text-sm text-default">10 Jun - 10 Aug 2025</td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
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

    <!-- Sourcing Filter Offcanvas start -->
    <div id="sourcing-filter-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[400px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Filter</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#sourcing-filter-offcanvas"><i class="ph ph-x text-sm"></i></button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Channel</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>LinkedIn</option>
                        <option>Indeed</option>
                        <option>Referral</option>
                        <option>Job Fair</option>
                    </select>
                </div>
                <div class="col-span-12">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Status</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Active</option>
                        <option>Scheduled</option>
                        <option>Paused</option>
                        <option>Completed</option>
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
                <div class="col-span-12">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Owner</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Ethan Walker</option>
                        <option>Madison Clark</option>
                        <option>James Harris</option>
                        <option>Avery Thompson</option>
                        <option>Benjamin Wright</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between gap-2 p-4 bg-light">
            <button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#sourcing-filter-offcanvas">Cancel</button>
            <button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Apply</button>
        </div>
    </div>
    <!-- Sourcing Filter Offcanvas end -->

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
