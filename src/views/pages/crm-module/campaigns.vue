<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Campaigns</h1>
                <div class="flex items-center gap-2">
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i>
                        </button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1">
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as PDF</a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as Excel</a>
                                </div>
                        </div>
                    </div>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" aria-haspopup="dialog" aria-expanded="false" aria-controls="add-campaign-offcanvas" data-hs-overlay="#add-campaign-offcanvas"><i class="ph ph-plus"></i> Add Campaign</button>
                </div>
            </div>
            <nav class="flex items-center gap-1 border-b border-border-color mb-4 flex-wrap" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                <button type="button" class="px-4 py-2 text-sm text-default hover:text-gray-900 border-b-2 border-transparent -mb-px cursor-pointer hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden active" id="campaigns-tab-active" aria-selected="true" data-hs-tab="#active" aria-controls="active" role="tab">Active</button>
                <button type="button" class="px-4 py-2 text-sm text-default hover:text-gray-900 border-b-2 border-transparent -mb-px cursor-pointer hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="campaigns-tab-completed" aria-selected="false" data-hs-tab="#completed" aria-controls="completed" role="tab">Completed</button>
                <button type="button" class="px-4 py-2 text-sm text-default hover:text-gray-900 border-b-2 border-transparent -mb-px cursor-pointer hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="campaigns-tab-archived" aria-selected="false" data-hs-tab="#archived" aria-controls="archived" role="tab">Archived</button>
            </nav>
            <div id="active" role="tabpanel" aria-labelledby="campaigns-tab-active">
                <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-sm text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Campaign</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Type</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Channel</th>
                                    <th class="text-right py-2 px-2 font-semibold text-gray-900">Budget</th>
                                    <th class="text-right py-2 px-2 font-semibold text-gray-900">Spent</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Start</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Summer Sale 2026</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Promotional</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$15,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$8,200</td>
                                    <td class="py-2.5 px-2 text-sm text-default">11 Jun 2026</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i> 
                                                </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Product Launch Q3</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Brand Awareness</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Social Media</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$25,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$12,400</td>
                                    <td class="py-2.5 px-2 text-sm text-default">05 Jun 2026</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                                <i class="icon-ellipsis-vertical font-normal"></i> 
                                            </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Customer Retention</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email Drip</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$8,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$5,600</td>
                                    <td class="py-2.5 px-2 text-sm text-default">01 May 2026</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                                <i class="icon-ellipsis-vertical font-normal"></i> 
                                            </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Referral Program</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Referral</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Multi-channel</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$12,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$3,800</td>
                                    <td class="py-2.5 px-2 text-sm text-default">15 Apr 2026</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                                <i class="icon-ellipsis-vertical font-normal"></i> 
                                            </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Spring Promotion</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Promotional</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Google Ads</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$18,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$17,500</td>
                                    <td class="py-2.5 px-2 text-sm text-default">01 Mar 2026</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Ending Soon</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                                <i class="icon-ellipsis-vertical font-normal"></i> 
                                            </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
            <div id="completed" class="hidden" role="tabpanel" aria-labelledby="campaigns-tab-completed">
                <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-sm text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Campaign</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Type</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Channel</th>
                                    <th class="text-right py-2 px-2 font-semibold text-gray-900">Budget</th>
                                    <th class="text-right py-2 px-2 font-semibold text-gray-900">Spent</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Start</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Holiday Email Blast</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Promotional</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$10,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$9,850</td>
                                    <td class="py-2.5 px-2 text-sm text-default">01 Dec 2025</td>
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
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Black Friday Mega Sale</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Promotional</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Multi-channel</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$30,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$29,400</td>
                                    <td class="py-2.5 px-2 text-sm text-default">15 Nov 2025</td>
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
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Winter Webinar Series</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Lead Generation</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Webinar</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$6,500</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$6,500</td>
                                    <td class="py-2.5 px-2 text-sm text-default">10 Jan 2026</td>
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
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">New Year Social Push</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Brand Awareness</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Social Media</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$14,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$13,750</td>
                                    <td class="py-2.5 px-2 text-sm text-default">26 Dec 2025</td>
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
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Q1 Newsletter Drive</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email Drip</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$5,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$4,920</td>
                                    <td class="py-2.5 px-2 text-sm text-default">05 Feb 2026</td>
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
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-campaign-offcanvas"> 
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
            <div id="archived" class="hidden" role="tabpanel" aria-labelledby="campaigns-tab-archived">
                <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-sm text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Campaign</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Type</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Channel</th>
                                    <th class="text-right py-2 px-2 font-semibold text-gray-900">Budget</th>
                                    <th class="text-right py-2 px-2 font-semibold text-gray-900">Spent</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Start</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Autumn Clearance 2025</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Promotional</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$9,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$8,640</td>
                                    <td class="py-2.5 px-2 text-sm text-default">20 Sep 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-secondary-transparent text-secondary px-2 py-0.5 rounded">Archived</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                                <i class="icon-ellipsis-vertical font-normal"></i> 
                                            </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="ph ph-arrow-counter-clockwise"></i> Unarchive </a>
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> 
                                                        <i class="icon-trash-2"></i> Delete 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Legacy Product Webinar</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Lead Generation</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Webinar</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$4,500</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$4,100</td>
                                    <td class="py-2.5 px-2 text-sm text-default">12 Aug 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-secondary-transparent text-secondary px-2 py-0.5 rounded">Archived</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                                <i class="icon-ellipsis-vertical font-normal"></i> 
                                            </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="ph ph-arrow-counter-clockwise"></i> Unarchive </a>
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> 
                                                        <i class="icon-trash-2"></i> Delete 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Summer Social Contest</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Brand Awareness</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Social Media</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$7,500</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$7,200</td>
                                    <td class="py-2.5 px-2 text-sm text-default">01 Jul 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-secondary-transparent text-secondary px-2 py-0.5 rounded">Archived</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                                <i class="icon-ellipsis-vertical font-normal"></i> 
                                            </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="ph ph-arrow-counter-clockwise"></i> Unarchive </a>
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"> 
                                                        <i class="icon-trash-2"></i> Delete 
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-2.5 px-2 text-sm font-semibold text-title">Win-Back Email Series</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email Drip</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Email</td>
                                    <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$3,000</td>
                                    <td class="py-2.5 px-2 text-sm text-default text-right">$2,850</td>
                                    <td class="py-2.5 px-2 text-sm text-default">18 Jun 2025</td>
                                    <td class="py-2.5 px-2">
                                        <span class="text-[11px] bg-secondary-transparent text-secondary px-2 py-0.5 rounded">Archived</span>
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                                <i class="icon-ellipsis-vertical font-normal"></i> 
                                            </button>
                                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                <div class="p-2 space-y-1">
                                                    <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#"> <i class="ph ph-arrow-counter-clockwise"></i> Unarchive </a>
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
        </div>
    </main>

    <campaigns-modal></campaigns-modal>
</template>