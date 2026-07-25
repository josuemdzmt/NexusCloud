<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Vendors</h1>
                <div class="flex items-center flex-wrap gap-2">
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
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-vendor-modal"><i class="ph ph-plus"></i> Add New</button>
                </div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input">
                        <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input type="text" class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center flex-wrap gap-2">
                        <div class="hs-dropdown [--placement:bottom-left] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
                            </button>
                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>Alpha Supplies Inc</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Beta Logistics Ltd</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Star Printers Co</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Quick Rentals</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Bright Cleaning</label> 
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
                        <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i></button>
                        <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i></button>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Code</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Vendor Name</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Contact Person</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Email</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Phone</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Country</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0020</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Alpha Supplies Inc</td>
                                <td class="py-2.5 px-2 text-sm text-default">Ethan Walker</td>
                                <td class="py-2.5 px-2 text-sm text-default">ethan@alpha.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+1 202 555 0173</td>
                                <td class="py-2.5 px-2 text-sm text-default">USA</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0019</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Beta Logistics Ltd</td>
                                <td class="py-2.5 px-2 text-sm text-default">Madison Clark</td>
                                <td class="py-2.5 px-2 text-sm text-default">madison@beta.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+91 98765 43210</td>
                                <td class="py-2.5 px-2 text-sm text-default">India</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0018</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Star Printers Co</td>
                                <td class="py-2.5 px-2 text-sm text-default">James Harris</td>
                                <td class="py-2.5 px-2 text-sm text-default">james@star.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+1 416 555 8294</td>
                                <td class="py-2.5 px-2 text-sm text-default">Canada</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0017</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Quick Rentals</td>
                                <td class="py-2.5 px-2 text-sm text-default">Avery Thompson</td>
                                <td class="py-2.5 px-2 text-sm text-default">avery@quick.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+61 412 345 678</td>
                                <td class="py-2.5 px-2 text-sm text-default">Australia</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Inactive</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0016</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Bright Cleaning</td>
                                <td class="py-2.5 px-2 text-sm text-default">Benjamin Wright</td>
                                <td class="py-2.5 px-2 text-sm text-default">ben@bright.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+49 1512 3456789</td>
                                <td class="py-2.5 px-2 text-sm text-default">Germany</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0015</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Green Cafe Supplies</td>
                                <td class="py-2.5 px-2 text-sm text-default">Chloe Mitchell</td>
                                <td class="py-2.5 px-2 text-sm text-default">chloe@green.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+81 90 1234 5678</td>
                                <td class="py-2.5 px-2 text-sm text-default">Japan</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0014</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Tech Soft Ltd</td>
                                <td class="py-2.5 px-2 text-sm text-default">Daniel Roberts</td>
                                <td class="py-2.5 px-2 text-sm text-default">daniel@tech.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+55 11 91234 5678</td>
                                <td class="py-2.5 px-2 text-sm text-default">Brazil</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0013</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Metro Cabs</td>
                                <td class="py-2.5 px-2 text-sm text-default">Grace Adams</td>
                                <td class="py-2.5 px-2 text-sm text-default">grace@metro.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+27 82 123 4567</td>
                                <td class="py-2.5 px-2 text-sm text-default">South Africa</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0012</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Horizon Supplies</td>
                                <td class="py-2.5 px-2 text-sm text-default">Hendrita Bennett</td>
                                <td class="py-2.5 px-2 text-sm text-default">hendrita@horizon.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+44 7700 900123</td>
                                <td class="py-2.5 px-2 text-sm text-default">UK</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Inactive</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm text-default hover:text-primary">#VND0011</a>
                                </td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">City Power</td>
                                <td class="py-2.5 px-2 text-sm text-default">Harper Scott</td>
                                <td class="py-2.5 px-2 text-sm text-default">harper@city.com</td>
                                <td class="py-2.5 px-2 text-sm text-default">+39 331 234 5678</td>
                                <td class="py-2.5 px-2 text-sm text-default">Italy</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-vendor-modal"> <i class="icon-pencil-line"></i> Edit </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
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

    <vendors-modal></vendors-modal>
</template>