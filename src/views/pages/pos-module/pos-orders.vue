<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">POS Orders</h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i> Print</button>
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
                </div>
            </div>
            <nav class="flex items-center flex-wrap gap-1 border-b border-border-color mb-4" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                <button type="button" class="px-4 py-2 text-sm text-default border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none active" id="pos-tab-orders" aria-selected="true" data-hs-tab="#orders" aria-controls="orders" role="tab">Orders</button>
                <button type="button" class="px-4 py-2 text-sm text-default border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" id="pos-tab-items" aria-selected="false" data-hs-tab="#items" aria-controls="items" role="tab">Order Items</button>
                <button type="button" class="px-4 py-2 text-sm text-default border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" id="pos-tab-payments" aria-selected="false" data-hs-tab="#payments" aria-controls="payments" role="tab">Payments</button>
                <button type="button" class="px-4 py-2 text-sm text-default border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" id="pos-tab-returns" aria-selected="false" data-hs-tab="#returns" aria-controls="returns" role="tab">Returns</button>
                <button type="button" class="px-4 py-2 text-sm text-default border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" id="pos-tab-registers" aria-selected="false" data-hs-tab="#registers" aria-controls="registers" role="tab">POS Registers</button>
                <button type="button" class="px-4 py-2 text-sm text-default border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none" id="pos-tab-reports" aria-selected="false" data-hs-tab="#reports" aria-controls="reports" role="tab">POS Reports</button>
            </nav>
            <div id="orders" role="tabpanel" aria-labelledby="pos-tab-orders">
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input"><i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <div class="hs-dropdown [--placement:bottom-left] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
                            </button>
                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>Anderson</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Hendy Jade</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Olivia Wang</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Mark Johnson</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Emily White</label>
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
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Order ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Customer</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Items</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Total</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Payment</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Cashier</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#ORD-7821</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Walk-in</td>
                                <td class="py-2.5 px-2 text-sm text-default">19 May 2026 09:42</td>
                                <td class="py-2.5 px-2 text-sm text-default">3</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$672.00</td>
                                <td class="py-2.5 px-2 text-sm text-default">Card</td>
                                <td class="py-2.5 px-2 text-sm text-default">Alexander Kenn</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="icon-download"></i> Download </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#ORD-7820</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Anderson</td>
                                <td class="py-2.5 px-2 text-sm text-default">19 May 2026 09:15</td>
                                <td class="py-2.5 px-2 text-sm text-default">5</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$284.00</td>
                                <td class="py-2.5 px-2 text-sm text-default">Cash</td>
                                <td class="py-2.5 px-2 text-sm text-default">Gabriella White</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="icon-download"></i> Download </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#ORD-7819</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Hendy Jade</td>
                                <td class="py-2.5 px-2 text-sm text-default">18 May 2026 17:28</td>
                                <td class="py-2.5 px-2 text-sm text-default">2</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$68.75</td>
                                <td class="py-2.5 px-2 text-sm text-default">Mobile Pay</td>
                                <td class="py-2.5 px-2 text-sm text-default">Christopher Rey</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="icon-download"></i> Download </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#ORD-7818</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Walk-in</td>
                                <td class="py-2.5 px-2 text-sm text-default">18 May 2026 16:50</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$24.99</td>
                                <td class="py-2.5 px-2 text-sm text-default">Card</td>
                                <td class="py-2.5 px-2 text-sm text-default">Penelope Ton</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="icon-download"></i> Download </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default"><a href="#">#ORD-7817</a></td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Olivia Wang</td>
                                <td class="py-2.5 px-2 text-sm text-default">18 May 2026 14:33</td>
                                <td class="py-2.5 px-2 text-sm text-default">7</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$412.30</td>
                                <td class="py-2.5 px-2 text-sm text-default">Online</td>
                                <td class="py-2.5 px-2 text-sm text-default">Daniel Foster</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Refunded</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i> </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="icon-download"></i> Download </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> <i class="icon-trash-2"></i> Delete </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3">
                    <div class="flex items-center gap-2"><span class="text-sm text-default">Showing</span>
                        <select class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28">
                            <option>10 / Pages</option>
                            <option>25 / Pages</option>
                            <option>50 / Pages</option>
                            <option>100 / Pages</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-1">
                        <button class="size-7 rounded-md text-sm bg-dark text-white flex items-center justify-center">1</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">2</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">3</button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light ml-1"><i class="ph ph-caret-left text-sm"></i></button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light"><i class="ph ph-caret-right text-sm"></i></button>
                    </div>
                </div>
            </div>
            </div>

            <!-- Order Items Pane -->
            <div id="items" class="hidden" role="tabpanel" aria-labelledby="pos-tab-items">
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input"><i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i></button>
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i></button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Item</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Order ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Qty</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Unit Price</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Discount</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Total</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0"><img src="@/assets/img/product/product-1.png" alt="product" class="img-fluid"></div><span class="text-sm font-semibold text-title">Apple iPhone 15</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default">#ORD-7821</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$599.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$25.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$574.00</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0"><img src="@/assets/img/product/product-2.png" alt="product" class="img-fluid"></div><span class="text-sm font-semibold text-title">Tempered Glass Guard</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default">#ORD-7821</td>
                                <td class="py-2.5 px-2 text-sm text-default">2</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$24.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$0.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$48.00</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0"><img src="@/assets/img/product/product-3.png" alt="product" class="img-fluid"></div><span class="text-sm font-semibold text-title">Silicone Phone Case</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default">#ORD-7821</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$50.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$0.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$50.00</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0"><img src="@/assets/img/product/product-4.png" alt="product" class="img-fluid"></div><span class="text-sm font-semibold text-title">Bose QuietComfort 45</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default">#ORD-7820</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$249.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$15.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$234.00</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0"><img src="@/assets/img/product/product-5.png" alt="product" class="img-fluid"></div><span class="text-sm font-semibold text-title">AA Batteries 8-Pack</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default">#ORD-7820</td>
                                <td class="py-2.5 px-2 text-sm text-default">2</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$25.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$0.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$50.00</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0"><img src="@/assets/img/product/product-6.png" alt="product" class="img-fluid"></div><span class="text-sm font-semibold text-title">Organic Coffee Beans 1kg</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default">#ORD-7819</td>
                                <td class="py-2.5 px-2 text-sm text-default">2</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$27.50</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$0.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$55.00</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0"><img src="@/assets/img/product/product-7.png" alt="product" class="img-fluid"></div><span class="text-sm font-semibold text-title">Wireless Mouse</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default">#ORD-7818</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$24.99</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$0.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$24.99</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><div class="size-7 rounded-md bg-light flex items-center justify-center shrink-0"><img src="@/assets/img/product/product-8.png" alt="product" class="img-fluid"></div><span class="text-sm font-semibold text-title">Dell XPS 13 9310</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default">#ORD-7817</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$412.30</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$0.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$412.30</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Refunded</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3">
                    <div class="flex items-center gap-2"><span class="text-sm text-default">Showing</span>
                        <select class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28">
                            <option>10 / Pages</option>
                            <option>25 / Pages</option>
                            <option>50 / Pages</option>
                            <option>100 / Pages</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-1">
                        <button class="size-7 rounded-md text-sm bg-dark text-white flex items-center justify-center">1</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">2</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">3</button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light ml-1"><i class="ph ph-caret-left text-sm"></i></button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light"><i class="ph ph-caret-right text-sm"></i></button>
                    </div>
                </div>
            </div>
            </div>

            <!-- Payments Pane -->
            <div id="payments" class="hidden" role="tabpanel" aria-labelledby="pos-tab-payments">
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input"><i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i></button>
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i></button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Payment ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Order ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Date &amp; Time</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Method</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Amount</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#PAY-3101</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7821</td>
                                <td class="py-2.5 px-2 text-sm text-default">19 May 2026 09:42</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-credit-card text-sm"></i> Card</span></td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$672.00</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2"><button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-receipt"></i></button></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#PAY-3100</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7820</td>
                                <td class="py-2.5 px-2 text-sm text-default">19 May 2026 09:15</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-money text-sm"></i> Cash</span></td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$284.00</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2"><button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-receipt"></i></button></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#PAY-3099</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7819</td>
                                <td class="py-2.5 px-2 text-sm text-default">18 May 2026 17:28</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-device-mobile text-sm"></i> UPI</span></td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$68.75</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td>
                                <td class="py-2.5 px-2"><button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-receipt"></i></button></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#PAY-3098</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7818</td>
                                <td class="py-2.5 px-2 text-sm text-default">18 May 2026 16:50</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-credit-card text-sm"></i> Card</span></td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$24.99</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2"><button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-receipt"></i></button></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#PAY-3097</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7817</td>
                                <td class="py-2.5 px-2 text-sm text-default">18 May 2026 14:33</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-device-mobile text-sm"></i> UPI</span></td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$412.30</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Refunded</span></td>
                                <td class="py-2.5 px-2"><button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-receipt"></i></button></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#PAY-3096</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7816</td>
                                <td class="py-2.5 px-2 text-sm text-default">18 May 2026 11:05</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-money text-sm"></i> Cash</span></td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$129.45</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2"><button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-receipt"></i></button></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#PAY-3095</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7815</td>
                                <td class="py-2.5 px-2 text-sm text-default">17 May 2026 18:40</td>
                                <td class="py-2.5 px-2 text-sm text-default"><span class="inline-flex items-center gap-1.5"><i class="ph-duotone ph-credit-card text-sm"></i> Card</span></td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$86.20</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                                <td class="py-2.5 px-2"><button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-receipt"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3">
                    <div class="flex items-center gap-2"><span class="text-sm text-default">Showing</span>
                        <select class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28">
                            <option>10 / Pages</option>
                            <option>25 / Pages</option>
                            <option>50 / Pages</option>
                            <option>100 / Pages</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-1">
                        <button class="size-7 rounded-md text-sm bg-dark text-white flex items-center justify-center">1</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">2</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">3</button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light ml-1"><i class="ph ph-caret-left text-sm"></i></button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light"><i class="ph ph-caret-right text-sm"></i></button>
                    </div>
                </div>
            </div>
            </div>

            <!-- Returns Pane -->
            <div id="returns" class="hidden" role="tabpanel" aria-labelledby="pos-tab-returns">
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input"><i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i></button>
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i></button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Return ID</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Order Ref</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Customer</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Items Returned</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Refund Amount</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Reason</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#RTN-0214</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7817</td>
                                <td class="py-2.5 px-2 text-sm text-default">Olivia Wang</td>
                                <td class="py-2.5 px-2 text-sm text-default">7</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$412.30</td>
                                <td class="py-2.5 px-2 text-sm text-default">Damaged product</td>
                                <td class="py-2.5 px-2 text-sm text-default">18 May 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Refunded</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#RTN-0213</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7809</td>
                                <td class="py-2.5 px-2 text-sm text-default">Mark Johnson</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$59.00</td>
                                <td class="py-2.5 px-2 text-sm text-default">Wrong item delivered</td>
                                <td class="py-2.5 px-2 text-sm text-default">17 May 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Approved</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#RTN-0212</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7804</td>
                                <td class="py-2.5 px-2 text-sm text-default">Emily White</td>
                                <td class="py-2.5 px-2 text-sm text-default">2</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$48.50</td>
                                <td class="py-2.5 px-2 text-sm text-default">Size mismatch</td>
                                <td class="py-2.5 px-2 text-sm text-default">16 May 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#RTN-0211</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7798</td>
                                <td class="py-2.5 px-2 text-sm text-default">Walk-in</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$24.99</td>
                                <td class="py-2.5 px-2 text-sm text-default">Defective unit</td>
                                <td class="py-2.5 px-2 text-sm text-default">15 May 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Approved</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#RTN-0210</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7795</td>
                                <td class="py-2.5 px-2 text-sm text-default">Hendy Jade</td>
                                <td class="py-2.5 px-2 text-sm text-default">3</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$112.40</td>
                                <td class="py-2.5 px-2 text-sm text-default">Changed mind</td>
                                <td class="py-2.5 px-2 text-sm text-default">14 May 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Rejected</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm text-default">#RTN-0209</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">#ORD-7790</td>
                                <td class="py-2.5 px-2 text-sm text-default">Anderson</td>
                                <td class="py-2.5 px-2 text-sm text-default">1</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$35.00</td>
                                <td class="py-2.5 px-2 text-sm text-default">Expired product</td>
                                <td class="py-2.5 px-2 text-sm text-default">13 May 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Approved</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3">
                    <div class="flex items-center gap-2"><span class="text-sm text-default">Showing</span>
                        <select class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28">
                            <option>10 / Pages</option>
                            <option>25 / Pages</option>
                            <option>50 / Pages</option>
                            <option>100 / Pages</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-1">
                        <button class="size-7 rounded-md text-sm bg-dark text-white flex items-center justify-center">1</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">2</button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light ml-1"><i class="ph ph-caret-left text-sm"></i></button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light"><i class="ph ph-caret-right text-sm"></i></button>
                    </div>
                </div>
            </div>
            </div>

            <!-- POS Registers Pane -->
            <div id="registers" class="hidden" role="tabpanel" aria-labelledby="pos-tab-registers">
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input"><i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i></button>
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i></button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Register</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Cashier</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Opening Float</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Cash Sales</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Card Sales</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Expected</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Counted</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Variance</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Opened / Closed</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Register 01</td>
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-sm font-semibold text-title">Alexander Kenn</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$200.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,240.50</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,180.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$1,440.50</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$1,440.50</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-success text-left">$0.00</td>
                                <td class="py-2.5 px-2 text-sm text-default">08:00 - 16:02</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-light text-default border border-border-color px-2 py-0.5 rounded">Closed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Register 02</td>
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-sm font-semibold text-title">Gabriella White</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$150.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$980.25</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,640.80</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$1,130.25</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$1,117.75</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-danger text-left">-$12.50</td>
                                <td class="py-2.5 px-2 text-sm text-default">08:00 - 16:05</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-light text-default border border-border-color px-2 py-0.5 rounded">Closed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Register 03</td>
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-sm font-semibold text-title">Christopher Rey</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$200.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,505.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$890.40</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$1,705.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$1,710.00</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-success text-left">+$5.00</td>
                                <td class="py-2.5 px-2 text-sm text-default">09:00 - Active</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Open</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Register 04</td>
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-sm font-semibold text-title">Penelope Ton</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$100.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$640.75</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,120.30</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$740.75</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">-</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">-</td>
                                <td class="py-2.5 px-2 text-sm text-default">10:00 - Active</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Open</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Register 05</td>
                                <td class="py-2.5 px-2"><div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="user"><span class="text-sm font-semibold text-title">Daniel Foster</span></div></td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$250.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,210.40</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$3,054.60</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$2,460.40</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$2,452.90</td>
                                <td class="py-2.5 px-2 text-sm font-semibold text-danger text-left">-$7.50</td>
                                <td class="py-2.5 px-2 text-sm text-default">07:30 - 15:45</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-light text-default border border-border-color px-2 py-0.5 rounded">Closed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>

            <!-- POS Reports Pane -->
            <div id="reports" class="hidden" role="tabpanel" aria-labelledby="pos-tab-reports">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-primary flex items-center justify-center shrink-0"><i class="ph-duotone ph-shopping-bag text-white text-lg"></i></div>
                        <div class="min-w-0">
                            <p class="text-sm text-default mb-1">Today's Sales</p>
                            <h2 class="text-xl font-bold text-gray-900 mb-0">$4,820.50</h2>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] mb-1"><span class="text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+8.2%</span><span class="text-default">vs yesterday</span></div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-info flex items-center justify-center shrink-0"><i class="ph-duotone ph-list-bullets text-white text-lg"></i></div>
                        <div class="min-w-0">
                            <p class="text-sm text-default mb-1">Transactions</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-0">142</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] mb-1"><span class="text-danger font-medium inline-flex items-center"><i class="ph ph-arrow-down text-[10px] me-0.5"></i>-2.4%</span><span class="text-default">vs yesterday</span></div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-pink flex items-center justify-center shrink-0"><i class="ph-duotone ph-currency-circle-dollar text-white text-lg"></i></div>
                        <div class="min-w-0">
                            <p class="text-sm text-default mb-1">Avg Order Value</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-0">$33.95</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] mb-1"><span class="text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+3.1%</span><span class="text-default">vs yesterday</span></div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4 overflow-hidden">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="size-10 rounded-full bg-purple flex items-center justify-center shrink-0"><i class="ph-duotone ph-package text-white text-lg"></i></div>
                        <div class="min-w-0">
                            <p class="text-sm text-default mb-1">Items Sold</p>
                            <h3 class="text-xl font-bold text-gray-900 mb-0">386</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-[11px] mb-1"><span class="text-success font-medium inline-flex items-center"><i class="ph ph-arrow-up text-[10px] me-0.5"></i>+6.7%</span><span class="text-default">vs yesterday</span></div>
                </div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 class="text-lg max-lg:text-[17px] text-title mb-0">Daily Summary</h3>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph-duotone ph-columns"></i></button>
                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-arrow-clockwise"></i></button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Orders</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Gross Sales</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Discounts</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Net Sales</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Cash</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Card</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">UPI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">19 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">142</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$4,820.50</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$186.20</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$4,634.30</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,505.00</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,610.55</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$518.75</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">18 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">168</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$5,640.80</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$210.45</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$5,430.35</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,820.40</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,940.20</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$669.75</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">17 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">121</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$3,980.20</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$145.00</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$3,835.20</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,240.10</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,110.60</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$484.50</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">16 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">154</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$5,120.45</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$198.30</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$4,922.15</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,610.25</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,705.40</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$606.50</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">15 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">138</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$4,560.90</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$172.60</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$4,388.30</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,450.30</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,420.75</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$517.25</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">14 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">117</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$3,845.60</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$130.90</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$3,714.70</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,205.45</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,028.50</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$480.75</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">13 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">149</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$4,990.35</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$189.75</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$4,800.60</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$1,540.20</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$2,650.15</td>
                                <td class="py-2.5 px-2 text-sm text-default text-left">$610.25</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    </main>

    <pos-orders-modal></pos-orders-modal>
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
