<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Training</h1>

                <div class="flex items-center gap-2">

                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer">
                        <i class="ph-duotone ph-printer"></i> Print
                    </button>

                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i> </button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1"> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as PDF
                                </a> <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as Excel
                                </a> 
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-training-modal"><i class="ph ph-plus"></i> Add New</button>
                </div>
            </div>

            <div class="bg-white border border-border-color rounded-md p-4 pb-0">

                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input"> 
                        <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input type="text" class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-lg bg-white focus:outline-none focus:ring-0" placeholder="Search"> 
                    </div>

                    <div class="flex items-center gap-2">
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
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Training Program</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Trainer</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Start Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">End Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Participants</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#TR0020</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">React Development</td>
                                <td class="py-2.5 px-2 text-sm text-default">Ethan Walker</td>
                                <td class="py-2.5 px-2 text-sm text-default">10 Jun 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">15 Jun 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">12</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Scheduled</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-training-modal">
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
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#TR0019</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">UX Design Fundamentals</td>
                                <td class="py-2.5 px-2 text-sm text-default">Madison Clark</td>
                                <td class="py-2.5 px-2 text-sm text-default">05 Jun 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">08 Jun 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">8</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">In Progress</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-training-modal">
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
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#TR0018</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">DevOps & Cloud</td>
                                <td class="py-2.5 px-2 text-sm text-default">Daniel Roberts</td>
                                <td class="py-2.5 px-2 text-sm text-default">27 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">02 Jun 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">10</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-training-modal">
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
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#TR0017</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Leadership Skills</td>
                                <td class="py-2.5 px-2 text-sm text-default">Avery Thompson</td>
                                <td class="py-2.5 px-2 text-sm text-default">16 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">20 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">15</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-training-modal">
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
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#TR0016</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Sales Techniques</td>
                                <td class="py-2.5 px-2 text-sm text-default">Chloe Mitchell</td>
                                <td class="py-2.5 px-2 text-sm text-default">25 Apr 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">28 Apr 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">20</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-training-modal">
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
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#TR0015</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Financial Reporting</td>
                                <td class="py-2.5 px-2 text-sm text-default">Benjamin Wright</td>
                                <td class="py-2.5 px-2 text-sm text-default">12 Apr 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">14 Apr 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">6</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Cancelled</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-training-modal">
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
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#TR0014</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Digital Marketing</td>
                                <td class="py-2.5 px-2 text-sm text-default">Grace Adams</td>
                                <td class="py-2.5 px-2 text-sm text-default">07 Apr 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">10 Apr 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">14</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-training-modal">
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

    <training-development-modal></training-development-modal>
</template>