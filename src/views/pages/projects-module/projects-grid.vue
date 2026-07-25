<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Projects</h1>
                <div class="flex items-center gap-2 flex-wrap">
                    <div class="inline-flex bg-white border border-border-color rounded-md p-1">
                        <router-link :to="all_routes.projects" class="btn-sm bg-white text-gray-900 hover:bg-light inline-flex items-center gap-1 cursor-pointer"><i class="ph-duotone ph-rows"></i></router-link>
                        <router-link :to="all_routes.projectsGrid" class="btn-sm bg-dark text-white inline-flex items-center gap-1 cursor-pointer"><i class="ph-duotone ph-grid-four"></i></router-link>
                    </div>
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i>Print</button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i>
                        </button>
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
                    <a href="javascript:void(0);" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-modal"><i class="ph ph-plus"></i> Add New</a>
                </div>
            </div>

            <div class="bg-white border border-border-color rounded-md p-4 mb-3">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <div class="relative w-64 search-input">
                            <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                            <input type="text" class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                        </div>
                        <div class="relative rangepicker-input w-[220px] h-[28px] leading-none">
                            <span class="absolute inset-y-0 left-0 flex items-center px-3 text-muted-foreground text-dark text-xs!">
                                <i class="icon-calendar"></i>
                            </span>
                            <a-range-picker v-model:value="rangeDate" type="text" class="form-input text-xs! h-[28px] inline-block w-full bg-light border-border-color rounded-md focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color pl-8! ps-8!" data-provider="flatpickr" data-date-format="d M y" data-range-date="true" value="01 Jan 26 to 20 Jan 26" id="picker" />
                        </div>
                    </div>
                    <div class="flex items-center flex-wrap gap-2">
                        <div class="hs-dropdown [--placement:bottom-left] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
                            </button>
                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>Office Management App</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Clinic Management</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Educational Platform</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Hotel Booking App</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">POS Admin Software</label>
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
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i></button>
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i></button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-primary-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-buildings text-primary"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Office Management App</router-link>
                            <p class="text-sm text-default mb-0">#PRO0020 &middot; Ethan Walker</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low</span>
                    </div>
                    <p class="text-sm text-default mb-3">A centralized workspace platform to manage office operations, meeting rooms and internal requests.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border-2 border-white" alt="Madison Clark">
                            <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border-2 border-white" alt="James Harris">
                            <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border-2 border-white" alt="Avery Thompson">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 32/48 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-success rounded-full" style="width:95%"></div>
                        </div><span class="text-[11px]">95%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">25 Sep 2025</span>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-pink-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-heartbeat text-pink"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Clinic Management</router-link>
                            <p class="text-sm text-default mb-0">#PRO0019 &middot; Madison Clark</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span>
                    </div>
                    <p class="text-sm text-default mb-3">Patient scheduling, appointment and billing management system for multi-branch clinics.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border-2 border-white" alt="James Harris">
                            <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border-2 border-white" alt="Avery Thompson">
                            <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border-2 border-white" alt="Sophia Martinez">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 24/40 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-warning rounded-full" style="width:65%"></div>
                        </div><span class="text-[11px]">65%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">10 Sep 2025</span>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-info-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-graduation-cap text-info"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Educational Platform</router-link>
                            <p class="text-sm text-default mb-0">#PRO0018 &middot; James Harris</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High</span>
                    </div>
                    <p class="text-sm text-default mb-3">Online learning platform with course management, live classes and student progress tracking.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border-2 border-white" alt="Avery Thompson">
                            <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border-2 border-white" alt="Sophia Martinez">
                            <img src="@/assets/img/avatar/avatar-08.jpg" class="size-7 rounded-full border-2 border-white" alt="Liam Johnson">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 56/56 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-success rounded-full" style="width:100%"></div>
                        </div><span class="text-[11px]">100%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">02 Sep 2025</span>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-warning-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-chat-circle-dots text-warning"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Chat &amp; Call Mobile App</router-link>
                            <p class="text-sm text-default mb-0">#PRO0017 &middot; Avery Thompson</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Inactive</span>
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low</span>
                    </div>
                    <p class="text-sm text-default mb-3">Cross-platform messaging app with HD voice and video calling, group chats and file sharing.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border-2 border-white" alt="Sophia Martinez">
                            <img src="@/assets/img/avatar/avatar-08.jpg" class="size-7 rounded-full border-2 border-white" alt="Liam Johnson">
                            <img src="@/assets/img/avatar/avatar-09.jpg" class="size-7 rounded-full border-2 border-white" alt="Olivia Davis">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 17/36 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-info rounded-full" style="width:48%"></div>
                        </div><span class="text-[11px]">48%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">23 Aug 2025</span>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-orange-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-airplane text-orange"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Travel Planning Website</router-link>
                            <p class="text-sm text-default mb-0">#PRO0016 &middot; Benjamin Wright</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span>
                    </div>
                    <p class="text-sm text-default mb-3">Trip planning portal with itinerary builder, hotel and flight booking and curated travel guides.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-08.jpg" class="size-7 rounded-full border-2 border-white" alt="Liam Johnson">
                            <img src="@/assets/img/avatar/avatar-09.jpg" class="size-7 rounded-full border-2 border-white" alt="Olivia Davis">
                            <img src="@/assets/img/avatar/avatar-10.jpg" class="size-7 rounded-full border-2 border-white" alt="Noah Brown">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 26/36 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-info rounded-full" style="width:72%"></div>
                        </div><span class="text-[11px]">72%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">30 Aug 2025</span>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-purple-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-calendar-check text-purple"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Service Booking Software</router-link>
                            <p class="text-sm text-default mb-0">#PRO0015 &middot; Chloe Mitchell</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High</span>
                    </div>
                    <p class="text-sm text-default mb-3">On-demand service booking system with provider scheduling, payments and review management.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-09.jpg" class="size-7 rounded-full border-2 border-white" alt="Olivia Davis">
                            <img src="@/assets/img/avatar/avatar-10.jpg" class="size-7 rounded-full border-2 border-white" alt="Noah Brown">
                            <img src="@/assets/img/avatar/avatar-11.jpg" class="size-7 rounded-full border-2 border-white" alt="Avery Thompson">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 18/32 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-warning rounded-full" style="width:58%"></div>
                        </div><span class="text-[11px]">58%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">20 Jul 2025</span>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-info-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-bed text-info"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Hotel Booking App</router-link>
                            <p class="text-sm text-default mb-0">#PRO0014 &middot; Daniel Roberts</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low</span>
                    </div>
                    <p class="text-sm text-default mb-3">Hotel reservation app with real-time room availability, dynamic pricing and loyalty rewards.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-10.jpg" class="size-7 rounded-full border-2 border-white" alt="Noah Brown">
                            <img src="@/assets/img/avatar/avatar-11.jpg" class="size-7 rounded-full border-2 border-white" alt="Avery Thompson">
                            <img src="@/assets/img/avatar/avatar-12.jpg" class="size-7 rounded-full border-2 border-white" alt="Ethan Wilson">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 38/45 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-success rounded-full" style="width:84%"></div>
                        </div><span class="text-[11px]">84%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">28 Jun 2025</span>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-warning-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-car text-warning"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Car &amp; Bike Rental Software</router-link>
                            <p class="text-sm text-default mb-0">#PRO0013 &middot; Grace Adams</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Inactive</span>
                        <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span>
                    </div>
                    <p class="text-sm text-default mb-3">Vehicle rental management software with fleet tracking, bookings and automated invoicing.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-11.jpg" class="size-7 rounded-full border-2 border-white" alt="Avery Thompson">
                            <img src="@/assets/img/avatar/avatar-12.jpg" class="size-7 rounded-full border-2 border-white" alt="Ethan Wilson">
                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border-2 border-white" alt="Sophia Martinez">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 10/28 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-danger rounded-full" style="width:36%"></div>
                        </div><span class="text-[11px]">36%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">15 Jun 2025</span>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="size-7 rounded-md bg-success-transparent flex items-center justify-center shrink-0">
                            <i class="ph-duotone ph-fork-knife text-success"></i>
                        </div>
                        <div class="flex-1">
                            <router-link :to="all_routes.projectDetails" class="text-sm font-semibold text-title hover:text-primary">Food Order App</router-link>
                            <p class="text-sm text-default mb-0">#PRO0012 &middot; Hendrita Bennett</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High</span>
                    </div>
                    <p class="text-sm text-default mb-3">Food delivery app with live order tracking, restaurant management and secure payments.</p>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <div class="flex -space-x-1.5">
                            <img src="@/assets/img/avatar/avatar-12.jpg" class="size-7 rounded-full border-2 border-white" alt="Ethan Wilson">
                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border-2 border-white" alt="Sophia Martinez">
                            <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border-2 border-white" alt="Liam Johnson">
                            <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                        </div>
                        <span class="text-sm text-default flex items-center gap-1"><i class="ph ph-check-square"></i> 21/34 Tasks</span>
                    </div>
                    <div class="flex items-center gap-2 mb-3">
                        <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                            <div class="h-full bg-warning rounded-full" style="width:62%"></div>
                        </div><span class="text-[11px]">62%</span>
                    </div>
                    <div class="flex items-center justify-between text-sm text-default pt-3 border-t border-border-color">
                        <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Deadline</span>
                        <span class="text-gray-900">05 Jun 2025</span>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="bg-white border border-border-color rounded-md p-4 mt-3">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-2">
                        <span class="text-sm text-default">Showing</span>
                        <select class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28">
                            <option>10 / Pages</option>
                            <option>25 / Pages</option>
                            <option>50 / Pages</option>
                            <option>100 / Pages</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-1">
                        <button class="size-7 rounded-md text-sm bg-dark text-white flex items-center justify-center cursor-pointer">1</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center cursor-pointer">2</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center cursor-pointer">3</button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center cursor-pointer text-default hover:bg-light ml-1"><i class="ph ph-caret-left text-sm"></i></button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center cursor-pointer text-default hover:bg-light"><i class="ph ph-caret-right text-sm"></i></button>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <projects-grid-modal></projects-grid-modal>
</template>

<script>
import { all_routes } from '@/router/all_routes';

export default {
    setup() {

        return {
            all_routes
        };
    },
    data() {
        return {
            rangeDate: null,
        };
    },
}
</script>
