<template>
    <main>
                
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Deals</h1>
                <div class="flex items-center gap-2">
                    <div class="inline-flex bg-white border border-border-color rounded-md p-1">
                        <router-link :to="all_routes.deals" class="btn-sm bg-white text-gray-900 hover:bg-light inline-flex items-center gap-1 cursor-pointer">
                            <i class="ph-duotone ph-rows"></i>
                        </router-link>
                        <router-link :to="all_routes.dealsGrid" class="btn-sm bg-dark text-white inline-flex items-center gap-1 cursor-pointer"><i class="ph-duotone ph-grid-four"></i></router-link>
                    </div>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-deals-offcanvas"><i class="ph ph-plus"></i> Create Deal</button>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Qualification</h2><span class="text-sm bg-info-transparent text-info px-2 py-0.5 rounded">$38K</span></div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2">
                            <router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Implementation - FinanceHub</router-link>
                            <p class="text-[11px] text-default mb-0 mt-1">$38,000</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Demo</h2>
                        <span class="text-sm bg-warning-transparent text-warning px-2 py-0.5 rounded">$52K</span>
                    </div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2">
                            <router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Premium Plan - GlobalSales</router-link>
                            <p class="text-[11px] text-default mb-0 mt-1">$52,000</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Proposal</h2>
                        <span class="text-sm bg-orange-transparent text-orange px-2 py-0.5 rounded">$45K</span>
                    </div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2">
                            <router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Enterprise License - TechCorp</router-link>
                            <p class="text-[11px] text-default mb-0 mt-1">$45,000</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Negotiation</h2>
                        <span class="text-sm bg-purple-transparent text-purple px-2 py-0.5 rounded">$28K</span>
                    </div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2"><router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Annual Contract - InnoSoft</router-link>
                            <p class="text-[11px] text-default mb-0 mt-1">$28,000</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Closed Won</h2>
                        <span class="text-sm bg-success-transparent text-success px-2 py-0.5 rounded">$12.5K</span>
                    </div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2"><router-link :to="all_routes.dealDetails" class="text-sm font-semibold text-title hover:text-primary">Service Package - DevWorks</router-link>
                            <p class="text-[11px] text-default mb-0 mt-1">$12,500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <deal-grid-modal></deal-grid-modal>
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
