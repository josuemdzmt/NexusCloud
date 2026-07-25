<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Leads</h1>
                <div class="flex items-center gap-2">
                    <div class="inline-flex bg-white border border-border-color rounded-md p-1">
                        <router-link :to="all_routes.leads" class="btn-sm bg-white text-gray-900 hover:bg-light inline-flex items-center gap-1 cursor-pointer">
                            <i class="ph-duotone ph-rows"></i>
                        </router-link>
                        <router-link :to="all_routes.leadsGrid" class="btn-sm bg-dark text-white inline-flex items-center gap-1 cursor-pointer">
                            <i class="ph-duotone ph-grid-four"></i>
                        </router-link>
                    </div>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-leads-offcanvas"><i class="ph ph-plus"></i> Create Lead</button>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between mb-2">
                        <router-link :to="all_routes.leadDetails" class="text-sm font-semibold text-title hover:text-primary">John Smith</router-link>
                        <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">New</span>
                    </div>
                    <p class="text-sm text-default mb-3">TechCorp Inc</p>
                    <div class="text-sm text-default space-y-1 pt-3 border-t border-border-color">
                        <div class="flex justify-between"><span>Source</span>
                            <span class="text-gray-900">Website</span>
                        </div>
                        <div class="flex justify-between"><span>Value</span>
                            <span class="text-gray-900 font-semibold">$15,000</span>
                        </div>
                        <div class="flex justify-between"><span>Location</span>
                            <span class="text-gray-900">USA</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between mb-2">
                        <router-link :to="all_routes.leadDetails" class="text-sm font-semibold text-title hover:text-primary">Jane Doe</router-link>
                        <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Contacted</span>
                    </div>
                    <p class="text-sm text-default mb-3">InnoSoft</p>
                    <div class="text-sm text-default space-y-1 pt-3 border-t border-border-color">
                        <div class="flex justify-between"><span>Source</span>
                            <span class="text-gray-900">Referral</span>
                        </div>
                        <div class="flex justify-between"><span>Value</span>
                            <span class="text-gray-900 font-semibold">$25,000</span>
                        </div>
                        <div class="flex justify-between"><span>Location</span>
                            <span class="text-gray-900">India</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between mb-2">
                        <router-link :to="all_routes.leadDetails" class="text-sm font-semibold text-title hover:text-primary">Mike Johnson</router-link>
                        <span class="text-[11px] bg-purple-transparent text-purple px-2 py-0.5 rounded">Qualified</span>
                    </div>
                    <p class="text-sm text-default mb-3">DevWorks</p>
                    <div class="text-sm text-default space-y-1 pt-3 border-t border-border-color">
                        <div class="flex justify-between"><span>Source</span>
                            <span class="text-gray-900">Email</span>
                        </div>
                        <div class="flex justify-between"><span>Value</span>
                            <span class="text-gray-900 font-semibold">$8,500</span>
                        </div>
                        <div class="flex justify-between"><span>Location</span>
                            <span class="text-gray-900">Canada</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between mb-2">
                        <router-link :to="all_routes.leadDetails" class="text-sm font-semibold text-title hover:text-primary">Sarah Williams</router-link>
                        <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Converted</span>
                    </div>
                    <p class="text-sm text-default mb-3">GlobalSales</p>
                    <div class="text-sm text-default space-y-1 pt-3 border-t border-border-color">
                        <div class="flex justify-between"><span>Source</span>
                            <span class="text-gray-900">LinkedIn</span>
                        </div>
                        <div class="flex justify-between"><span>Value</span>
                            <span class="text-gray-900 font-semibold">$45,000</span>
                        </div>
                        <div class="flex justify-between"><span>Location</span>
                            <span class="text-gray-900">Australia</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between mb-2">
                        <router-link :to="all_routes.leadDetails" class="text-sm font-semibold text-title hover:text-primary">David Brown</router-link>
                        <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Lost</span>
                    </div>
                    <p class="text-sm text-default mb-3">AdMakers</p>
                    <div class="text-sm text-default space-y-1 pt-3 border-t border-border-color">
                        <div class="flex justify-between"><span>Source</span>
                            <span class="text-gray-900">Website</span>
                        </div>
                        <div class="flex justify-between"><span>Value</span>
                            <span class="text-gray-900 font-semibold">$12,000</span>
                        </div>
                        <div class="flex justify-between"><span>Location</span>
                            <span class="text-gray-900">Germany</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between mb-2">
                        <router-link :to="all_routes.leadDetails" class="text-sm font-semibold text-title hover:text-primary">Emma Wilson</router-link>
                        <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Contacted</span>
                    </div>
                    <p class="text-sm text-default mb-3">FinanceHub</p>
                    <div class="text-sm text-default space-y-1 pt-3 border-t border-border-color">
                        <div class="flex justify-between"><span>Source</span>
                            <span class="text-gray-900">Cold Call</span>
                        </div>
                        <div class="flex justify-between"><span>Value</span>
                            <span class="text-gray-900 font-semibold">$32,000</span>
                        </div>
                        <div class="flex justify-between"><span>Location</span>
                            <span class="text-gray-900">Japan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <lead-grid-modal></lead-grid-modal>
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
