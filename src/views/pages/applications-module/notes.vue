<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Notes</h1>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3">

                <!-- Left sidebar -->
                <div class="xl:col-span-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <button type="button" class="btn w-full bg-primary text-white border border-primary inline-flex items-center justify-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer mb-4" data-hs-overlay="#notes-add-modal">
                            <i class="ph-duotone ph-plus-circle"></i> Add Note
                        </button>
                        <div class="space-y-1 mb-4">
                            <a href="#" class="flex items-center justify-between gap-2 px-3 py-2 rounded-md bg-light-500 text-primary text-sm font-semibold border border-border-color">
                                <span class="inline-flex items-center gap-2">
                                    <i class="ph-duotone ph-list-checks"></i> All Tasks</span>
                                    <span class="size-5 rounded-full bg-danger text-white text-[10px] flex items-center justify-center">6</span>
                                </a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-star"></i> Starred</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-trash"></i> Trash</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-note-pencil"></i> Draft</a>
                        </div>
                        <div class="pt-3 border-t border-border-color">
                            <div class="flex items-center justify-between mb-2">
                                <p class="text-sm font-semibold text-title mb-0">Lables</p>
                            </div>
                            <div class="space-y-1">
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-success"></span> Low</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-warning"></span> Medium</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-danger"></span> High</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right main: notes grid -->
                <div class="xl:col-span-9">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        
                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Meeting with Product Team</p>
                            <p class="text-sm text-default mb-3">Discuss dashboard revamp and analytics tracking.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph ph-star"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-09.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <!-- Submit Quarterly Report -->
                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Submit Quarterly Report</p>
                            <p class="text-sm text-default mb-3">Compile a comprehensive report for covering sales performance.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph-fill ph-star text-warning"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <!-- Follow up with HR -->
                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Follow up with HR</p>
                            <p class="text-sm text-default mb-3">Review and verify the current onboarding status of all hires.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph ph-star"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-15.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <!-- Design Feedback Notes -->
                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Design Feedback Notes</p>
                            <p class="text-sm text-default mb-3">Adjust the form layout to reduce vertical and horizontal spacing</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph-fill ph-star text-warning"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-05.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <!-- Call Vendor Support -->
                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Call Vendor Support</p>
                            <p class="text-sm text-default mb-3">The printer maintenance issue is still pending requires attention.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph ph-star"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-06.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <!-- Give me the staff guide -->
                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Give me the staff guide</p>
                            <p class="text-sm text-default mb-3">The patient contacted us to request a rescheduling.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph ph-star"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-12.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Insurance Update</p>
                            <p class="text-sm text-default mb-3">We have received the updated insurance card from the patient.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph ph-star"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Staff Reminder</p>
                            <p class="text-sm text-default mb-3">A reminder was sent to the team regarding the scheduled meeting</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph ph-star"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-08.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">General Task Tracking</p>
                            <p class="text-sm text-default mb-3">Printer cartridges and paper stock have been ordered.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph-fill ph-star text-warning"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-14.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Insurance Inquiry</p>
                            <p class="text-sm text-default mb-3">Patient called to check status of last insurance claim for lab tests.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph-fill ph-star text-warning"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-06.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Maintenance Request</p>
                            <p class="text-sm text-default mb-3">Noted recurring jam in front desk printer. Called vendor support.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph ph-star"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                        <div class="bg-white border border-border-color rounded-md p-4">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium
                                </span>
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
                            </div>
                            <p class="text-sm font-semibold text-title mb-1">Internal Task</p>
                            <p class="text-sm text-default mb-3">Ordered toner, copy paper, and cleaning supplies.</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1">
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon">
                                        <i class="ph ph-star"></i>
                                    </button>
                                    <button type="button" class="size-6 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer">
                                        <i class="ph ph-trash"></i>
                                    </button>
                                </div>
                                <img src="@/assets/img/avatar/avatar-07.jpg" class="size-6 rounded border border-border-color" alt="user">
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </main>

    <notes-modal></notes-modal>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
}
</script>
