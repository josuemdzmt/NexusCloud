<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Membership Plans</h1>
                <router-link :to="all_routes.addMembershipPlan" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer">
                    <i class="ph ph-plus"></i> Add New
                </router-link>
            </div>

            <!-- Hero -->
            <div class="flex flex-wrap items-end justify-between gap-3 mb-6">
                <div>
                    <h2 class="text-lg font-bold text-gray-900 mb-1">Streamline your teamwork. Start free.</h2>
                    <p class="text-sm text-default mb-0">Choose the perfect plan for your business needs</p>
                </div>
                <nav class="inline-flex items-center gap-2 bg-white rounded-full p-1 text-sm" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                    <button type="button" class="px-3 py-1 rounded-full text-gray-900 hover:bg-white cursor-pointer active  hs-tab-active:bg-success hs-tab-active:text-white dark:hs-tab-active:text-dark" id="tab-1" aria-selected="true" data-hs-tab="#tab-01" aria-controls="tab-01" role="tab">Monthly</button>
                    <button type="button" class="px-3 py-1 rounded-full text-gray-900 hover:bg-white cursor-pointer hs-tab-active:bg-success hs-tab-active:text-white dark:hs-tab-active:text-dark" id="tab-2" aria-selected="false" data-hs-tab="#tab-02" aria-controls="tab-02" role="tab">Yearly
                    </button>
                </nav>
            </div>

            <!-- Monthly -->
            <div id="tab-01" role="tabpanel" aria-labelledby="tab-01">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">

                    <!-- Free -->
                    <div class="bg-white border border-border-color rounded-md p-5 flex flex-col">
                        <p class="text-base font-bold text-gray-900 mb-1">Free</p>
                        <p class="text-sm text-default mb-4">Best for personal use</p>
                        <div class="flex items-baseline gap-1 mb-1">
                            <h3 class="text-3xl font-bold text-gray-900 mb-0">$99</h3>
                            <span class="text-sm text-default">/ month</span>
                        </div>
                        <p class="text-sm text-default mb-5">For Only 1 User</p>
                        <p class="text-sm font-semibold text-title mb-3">What you get:</p>
                        <ul class="space-y-2 mb-6 text-sm flex-1 pl-2">
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>1 User Seats
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Access to Free Modules
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>100 Transactions Per Month
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>Advanced Reporting
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>API access
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>Priority support
                            </li>
                        </ul>
                        <button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Select Free Membership</button>
                    </div>

                    <!-- Starter — Most Popular -->
                    <div class="bg-white border-2 border-primary rounded-md p-5 flex flex-col relative">
                        <div class="absolute -top-3 right-3 bg-success text-white text-[11px] font-medium px-2 py-1 rounded">Most Popular</div>
                        <p class="text-base font-bold text-gray-900 mb-1">Starter</p>
                        <p class="text-sm text-default mb-4">Best for personal use</p>
                        <div class="flex items-baseline gap-1 mb-1">
                            <h3 class="text-3xl font-bold text-gray-900 mb-0">$199</h3>
                            <span class="text-sm text-default">/ month</span>
                        </div>
                        <p class="text-sm text-default mb-5">For small teams up to 5 users</p>
                        <p class="text-sm font-semibold text-title mb-3">What you get:</p>
                        <ul class="space-y-2 mb-6 text-sm flex-1 pl-2">
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>5 User Seats
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Core ERP Modules
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>500 Transactions Per
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success">
                                </i>Advanced Reporting
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>API access
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>Priority support
                            </li>
                        </ul>
                        <button type="button" class="btn-sm w-full bg-primary text-white border border-primary hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Current Plan</button>
                    </div>

                    <!-- Business -->
                    <div class="bg-white border border-border-color rounded-md p-5 flex flex-col">
                        <p class="text-base font-bold text-gray-900 mb-1">Business</p>
                        <p class="text-sm text-default mb-4">Best for personal use</p>
                        <div class="flex items-baseline gap-1 mb-1">
                            <h3 class="text-3xl font-bold text-gray-900 mb-0">$399</h3>
                            <span class="text-sm text-default">/ month</span>
                        </div>
                        <p class="text-sm text-default mb-5">For growing teams up to 25 users</p>
                        <p class="text-sm font-semibold text-title mb-3">What you get:</p>
                        <ul class="space-y-2 mb-6 text-sm flex-1 pl-2">
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>25 User Seats
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>All ERP modules
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>10,000 transactions/mo
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Advanced Reporting
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>API access
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>Priority support
                            </li>
                        </ul>
                        <button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Buy Business</button>
                    </div>

                    <!-- Enterprise -->
                    <div class="bg-white border border-border-color rounded-md p-5 flex flex-col">
                        <p class="text-base font-bold text-gray-900 mb-1">Enterprise</p>
                        <p class="text-sm text-default mb-4">Best for personal use</p>
                        <div class="flex items-baseline gap-1 mb-1">
                            <h3 class="text-3xl font-bold text-gray-900 mb-0">$999</h3>
                            <span class="text-sm text-default">/ month</span>
                        </div>
                        <p class="text-sm text-default mb-5">Unlimited users, custom SLA</p>
                        <p class="text-sm font-semibold text-title mb-3">What you get:</p>
                        <ul class="space-y-2 mb-6 text-sm flex-1 pl-2">
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Unlimited seats
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>All ERP modules
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Unlimited transactions
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Advanced Reporting
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Full API access
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Priority support
                            </li>
                        </ul>
                        <button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Buy Enterprise</button>
                    </div>

                </div>
            </div>

            <!-- Yearly -->
            <div class="hidden" id="tab-02" role="tabpanel" aria-labelledby="tab-02">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">

                    <!-- Free -->
                    <div class="bg-white border border-border-color rounded-md p-5 flex flex-col">
                        <p class="text-base font-bold text-gray-900 mb-1">Free</p>
                        <p class="text-sm text-default mb-4">Best for personal use</p>
                        <div class="flex items-baseline gap-1 mb-1">
                            <h3 class="text-3xl font-bold text-gray-900 mb-0">$599</h3>
                            <span class="text-sm text-default">/ year</span>
                        </div>
                        <p class="text-sm text-default mb-5">For Only 1 User</p>
                        <p class="text-sm font-semibold text-title mb-3">What you get:</p>
                        <ul class="space-y-2 mb-6 text-sm flex-1 pl-2">
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>1 User Seats
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Access to Free Modules
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>100 Transactions Per Month
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>Advanced Reporting
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>API access
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>Priority support
                            </li>
                        </ul>
                        <button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Select Free Membership</button>
                    </div>

                    <!-- Starter — Most Popular -->
                    <div class="bg-white border-2 border-primary rounded-md p-5 flex flex-col relative">
                        <div class="absolute -top-3 right-3 bg-success text-white text-[11px] font-medium px-2 py-1 rounded">Most Popular</div>
                        <p class="text-base font-bold text-gray-900 mb-1">Starter</p>
                        <p class="text-sm text-default mb-4">Best for personal use</p>
                        <div class="flex items-baseline gap-1 mb-1">
                            <h3 class="text-3xl font-bold text-gray-900 mb-0">$999</h3>
                            <span class="text-sm text-default">/ year</span>
                        </div>
                        <p class="text-sm text-default mb-5">For small teams up to 5 users</p>
                        <p class="text-sm font-semibold text-title mb-3">What you get:</p>
                        <ul class="space-y-2 mb-6 text-sm flex-1 pl-2">
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>5 User Seats
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Core ERP Modules
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>500 Transactions Per
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success">
                                </i>Advanced Reporting
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>API access
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>Priority support
                            </li>
                        </ul>
                        <button type="button" class="btn-sm w-full bg-primary text-white border border-primary hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Current Plan</button>
                    </div>

                    <!-- Business -->
                    <div class="bg-white border border-border-color rounded-md p-5 flex flex-col">
                        <p class="text-base font-bold text-gray-900 mb-1">Business</p>
                        <p class="text-sm text-default mb-4">Best for personal use</p>
                        <div class="flex items-baseline gap-1 mb-1">
                            <h3 class="text-3xl font-bold text-gray-900 mb-0">$1299</h3>
                            <span class="text-sm text-default">/ year</span>
                        </div>
                        <p class="text-sm text-default mb-5">For growing teams up to 25 users</p>
                        <p class="text-sm font-semibold text-title mb-3">What you get:</p>
                        <ul class="space-y-2 mb-6 text-sm flex-1 pl-2">
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>25 User Seats
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>All ERP modules
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>10,000 transactions/mo
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Advanced Reporting
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>API access
                            </li>
                            <li class="flex items-center gap-2 line-through text-default">
                                <i class="ph-fill ph-check-circle text-success"></i>Priority support
                            </li>
                        </ul>
                        <button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Buy Business</button>
                    </div>

                    <!-- Enterprise -->
                    <div class="bg-white border border-border-color rounded-md p-5 flex flex-col">
                        <p class="text-base font-bold text-gray-900 mb-1">Enterprise</p>
                        <p class="text-sm text-default mb-4">Best for personal use</p>
                        <div class="flex items-baseline gap-1 mb-1">
                            <h3 class="text-3xl font-bold text-gray-900 mb-0">$2999</h3>
                            <span class="text-sm text-default">/ year</span>
                        </div>
                        <p class="text-sm text-default mb-5">Unlimited users, custom SLA</p>
                        <p class="text-sm font-semibold text-title mb-3">What you get:</p>
                        <ul class="space-y-2 mb-6 text-sm flex-1 pl-2">
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Unlimited seats
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>All ERP modules
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Unlimited transactions
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Advanced Reporting
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Full API access
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="ph-fill ph-check-circle text-success"></i>Priority support
                            </li>
                        </ul>
                        <button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Buy Enterprise</button>
                    </div>

                </div>
            </div>

            <p class="text-center text-sm text-default">All plans include a 14-day free trial. No credit card required.</p>

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
