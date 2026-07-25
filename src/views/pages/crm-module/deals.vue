<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Deals</h1>
                <div class="flex items-center gap-2">
                    <div class="inline-flex bg-white border border-border-color rounded-md p-1">
                        <router-link :to="all_routes.deals" class="btn-sm bg-dark text-white inline-flex items-center gap-1 cursor-pointer">
                            <i class="ph-duotone ph-rows"></i>
                        </router-link>
                        <router-link :to="all_routes.dealsGrid" class="btn-sm bg-white text-gray-900 hover:bg-light inline-flex items-center gap-1 cursor-pointer"><i class="ph-duotone ph-grid-four"></i>
                        </router-link>
                    </div>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-deals-offcanvas">
                        <i class="ph ph-plus"></i> Create Deal
                    </button>
                </div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="relative w-64 search-input">
                        <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                        <input class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="hs-dropdown [--placement:bottom-left] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
                            </button>
                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> CRM Subscription</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0"> ERP Implementation </label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0"> Cloud Migration</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0"> SaaS Renewal </label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0"> Data Backup Solution</label>
                                    <div class="flex items-center justify-between gap-2 mt-3">
                                        <button type="button" class="btn-sm bg-white w-full border border-border-color text-gray-900 flex items-center justify-center hover:bg-light cursor-pointer">Cancel</button>
                                        <button type="button" class="btn-sm bg-dark w-full border border-dark text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white cursor-pointer">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Deal Name</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Customer</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Stage</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Value</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Close Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2"><router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Enterprise License - TechCorp</router-link></td>
                                <td class="py-2.5 px-2 text-sm text-default">TechCorp Inc</td>
                                <td class="py-2.5 px-2 text-sm text-default">Proposal</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$45,000</td>
                                <td class="py-2.5 px-2 text-sm text-default">30 Jun 2026</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Open</span>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                            <i class="icon-ellipsis-vertical font-normal"></i> 
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-deals-offcanvas"> 
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
                                <td class="py-2.5 px-2"><router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Annual Contract - InnoSoft</router-link></td>
                                <td class="py-2.5 px-2 text-sm text-default">InnoSoft</td>
                                <td class="py-2.5 px-2 text-sm text-default">Negotiation</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$28,000</td>
                                <td class="py-2.5 px-2 text-sm text-default">15 Jun 2026</td>
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
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-deals-offcanvas"> 
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
                                <td class="py-2.5 px-2"><router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Service Package - DevWorks</router-link></td>
                                <td class="py-2.5 px-2 text-sm text-default">DevWorks</td>
                                <td class="py-2.5 px-2 text-sm text-default">Closed Won</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$12,500</td>
                                <td class="py-2.5 px-2 text-sm text-default">20 May 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Won</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                            <i class="icon-ellipsis-vertical font-normal"></i> 
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-deals-offcanvas"> 
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
                                <td class="py-2.5 px-2"><router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Premium Plan - GlobalSales</router-link></td>
                                <td class="py-2.5 px-2 text-sm text-default">GlobalSales</td>
                                <td class="py-2.5 px-2 text-sm text-default">Demo</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$52,000</td>
                                <td class="py-2.5 px-2 text-sm text-default">10 Jul 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Open</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                            <i class="icon-ellipsis-vertical font-normal"></i> 
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-deals-offcanvas"> 
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
                                <td class="py-2.5 px-2"><router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Campaign Bundle - AdMakers</router-link></td>
                                <td class="py-2.5 px-2 text-sm text-default">AdMakers</td>
                                <td class="py-2.5 px-2 text-sm text-default">Closed Lost</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$18,000</td>
                                <td class="py-2.5 px-2 text-sm text-default">15 May 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Lost</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                            <i class="icon-ellipsis-vertical font-normal"></i> 
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-deals-offcanvas"> 
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
                                <td class="py-2.5 px-2"><router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Implementation - FinanceHub</router-link></td>
                                <td class="py-2.5 px-2 text-sm text-default">FinanceHub</td>
                                <td class="py-2.5 px-2 text-sm text-default">Qualification</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$38,000</td>
                                <td class="py-2.5 px-2 text-sm text-default">25 Jul 2026</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">In Progress</span></td>
                                <td class="py-2.5 px-2">
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                            <i class="icon-ellipsis-vertical font-normal"></i> 
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-deals-offcanvas"> 
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
