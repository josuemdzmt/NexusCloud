<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">To Do</h1>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-3">

                <!-- Sidebar -->
                <div class="lg:col-span-3">

                    <div class="bg-white border border-border-color rounded-md p-4">
                        <button type="button" class="btn w-full bg-primary text-white border border-primary inline-flex items-center justify-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer mb-4" data-hs-overlay="#todo-add-modal">
                            <i class="ph-duotone ph-plus-circle"></i> Add Task
                        </button>

                        <div class="space-y-1 mb-4">
                            <a href="#" class="flex items-center justify-between gap-2 px-3 py-2 rounded-md bg-light-500 text-primary text-sm font-semibold border border-border-color"><span class="inline-flex items-center gap-2"><i class="ph-duotone ph-list-checks"></i> All Tasks</span><span class="size-5 rounded-full bg-danger text-white text-[10px] flex items-center justify-center">6</span></a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-star"></i> Starred</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-trash"></i> Trash</a>
                        </div>

                        <div class="mb-4 pt-3 border-t border-border-color">
                            <div class="flex items-center justify-between mb-2"><p class="text-sm font-semibold text-title mb-0">Priority</p><button type="button" class="text-default hover:text-primary cursor-pointer"><i class="ph ph-caret-down"></i></button></div>
                            <div class="space-y-1">
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-success"></span> Low</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-warning"></span> Medium</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-danger"></span> High</a>
                            </div>
                        </div>

                        <div class="pt-3 border-t border-border-color">
                            <div class="flex items-center justify-between mb-2"><p class="text-sm font-semibold text-title mb-0">Categories</p><button type="button" class="text-default hover:text-primary cursor-pointer"><i class="ph ph-caret-down"></i></button></div>
                            <div class="space-y-1">
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-purple"></span> Social</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-info"></span> Research</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-pink"></span> Web Design</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-danger"></span> Reminder</a>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Todo -->
                <div class="lg:col-span-9">

                    <div class="bg-white border border-border-color rounded-md p-4">

                        <!-- Toolbar -->
                        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                            <div class="relative w-64 search-input">
                                <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                                <input type="text" class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                            </div>

                            <div class="flex items-center flex-wrap gap-2">

                                <div class="relative rangepicker-input w-[220px] h-[28px] leading-none">
                                    <span class="absolute inset-y-0 left-0 flex items-center px-3 text-muted-foreground text-dark text-xs!">
                                        <i class="icon-calendar"></i>
                                    </span>
                                    <a-range-picker v-model:value="rangeDate" type="text" class="form-input text-xs! h-[28px] inline-block w-full bg-light border-border-color rounded-md focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color pl-8! ps-8!" data-provider="flatpickr" data-date-format="d M y" data-range-date="true" value="01 Jan 26 to 20 Jan 26" id="picker" />
                                </div>

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

                        <!-- Task table -->
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="text-sm text-default border-b border-border-color">
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Task Title</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Priority</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Created Date</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Updated Date</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Progress</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Update calendar and schedule</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Low</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">20 Jun 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded font-medium">Inprogress</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">25 Jun 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="70.4 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">80%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Finalize project proposal</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded font-medium">Medium</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">15 Jun 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-purple-transparent text-purple px-2 py-0.5 rounded font-medium">On Hold</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">20 Jun 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="52.8 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">60%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Submit to supervisor by EOD</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Low</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">02 Jun 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded font-medium">Pending</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">07 Jun 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="44 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">50%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Prepare presentation slides</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded font-medium">High</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">24 May 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Completed</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">30 May 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="88 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">100%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Check and respond to emails</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Low</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">18 May 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded font-medium">Pending</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">25 May 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="48.4 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">55%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Daily admin tasks organized</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded font-medium">Medium</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">13 May 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded font-medium">Inprogress</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">18 May 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="61.6 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">70%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Verify insurance eligibility</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded font-medium">High</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">25 Apr 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Completed</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">27 Apr 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="70.4 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">80%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Send lab results to patient portal</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Low</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">17 Apr 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded font-medium">Pending</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">20 Apr 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="44 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">50%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Keep tasks clear and specific</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded font-medium">Medium</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">01 Mar 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded font-medium">Completed</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">05 Mar 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="88 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">100%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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
                                    <tr class="border-b border-border-color last:border-0 hover:bg-light/20 transition-colors">
                                        <td class="py-2.5 px-2 text-sm font-semibold text-title">Use reminders for anything time</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded font-medium">High</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">21 Mar 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <span class="inline-flex items-center text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded font-medium">Inprogress</span>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default vertical-middle tabular-nums">25 Mar 2025</td>
                                        <td class="py-2.5 px-2 vertical-middle">
                                            <div class="flex items-center gap-2">
                                                <div class="relative size-8 shrink-0">
                                                    <svg class="size-8 -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-light-500" stroke-width="3" />
                                                        <circle cx="18" cy="18" r="14" fill="none" class="stroke-warning" stroke-width="3" stroke-dasharray="35.2 100" stroke-linecap="round" />
                                                    </svg>
                                                </div>
                                                <span class="text-[11px] font-semibold text-gray-900 tabular-nums">40%</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 vertical-middle text-right">
                                            <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-modal">
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

                        <!-- Pagination -->
                        <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border-color">
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
                                <button type="button" class="size-7 rounded bg-dark text-white inline-flex items-center justify-center cursor-pointer">1</button>
                                <button type="button" class="size-7 rounded text-gray-900 hover:bg-light inline-flex items-center justify-center cursor-pointer">2</button>
                                <button type="button" class="size-7 rounded text-gray-900 hover:bg-light inline-flex items-center justify-center cursor-pointer">3</button>
                                <button type="button" class="size-7 rounded border border-border-color bg-white text-gray-900 hover:bg-light inline-flex items-center justify-center cursor-pointer ms-2"><i class="ph ph-caret-left"></i></button>
                                <button type="button" class="size-7 rounded border border-border-color bg-white text-gray-900 hover:bg-light inline-flex items-center justify-center cursor-pointer"><i class="ph ph-caret-right"></i></button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </main>

    <todo-modal></todo-modal>
</template>

<script>

export default {
    data() {
        return {
            rangeDate: null,
        };
    },
}
</script>
