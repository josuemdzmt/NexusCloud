<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Membership Addons</h1>
                <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer" data-hs-overlay="#add-membership-addon-modal"><i class="ph ph-plus"></i> Add New</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <!-- 8 addon cards -->
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-sm font-semibold text-title mb-1">Extra Storage</h2>
                    <p class="text-sm text-default mb-4">Add 100 GB of secure cloud storage to any plan.</p>
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-border-color">
                        <p class="text-sm mb-0">
                            <span class="font-bold text-gray-900">$5</span>
                            <span class="text-default"> / month</span>
                        </p>
                        <label class="inline-flex items-center gap-2 cursor-pointer">
                            <span class="relative inline-block w-9 h-5"><input type="checkbox" class="sr-only peer" checked>
                                <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                            </span>
                            <span class="text-sm text-default">Active</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Subscribers</p>
                        <p class="text-base font-bold text-gray-900 mb-0">652</p>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-sm font-semibold text-title mb-1">Premium Support</h2>
                    <p class="text-sm text-default mb-4">Get 24/7 priority assistance from our Export team.</p>
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-border-color"><p class="text-sm mb-0">
                        <span class="font-bold text-gray-900">$15</span>
                        <span class="text-default"> / month</span>
                    </p>
                    <label class="inline-flex items-center gap-2 cursor-pointer">
                        <span class="relative inline-block w-9 h-5">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </span>
                        <span class="text-sm text-default">Active</span>
                    </label>
                </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Subscribers</p>
                        <p class="text-base font-bold text-gray-900 mb-0">348</p>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-sm font-semibold text-title mb-1">Advanced Analytics</h2>
                    <p class="text-sm text-default mb-4">Unlock detailed insights and reporting on your usage.</p>
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-border-color">
                        <p class="text-sm mb-0">
                            <span class="font-bold text-gray-900">$10</span>
                            <span class="text-default"> / month</span>
                        </p>
                        <label class="inline-flex items-center gap-2 cursor-pointer">
                            <span class="relative inline-block w-9 h-5">
                                <input type="checkbox" class="sr-only peer" checked>
                                <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                            </span><span class="text-sm text-default">Active</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Subscribers</p>
                        <p class="text-base font-bold text-gray-900 mb-0">215</p>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-sm font-semibold text-title mb-1">Custom Branding</h2>
                    <p class="text-sm text-default mb-4">Personalize your interface with your brand logo and colors.</p>
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-border-color">
                        <p class="text-sm mb-0">
                            <span class="font-bold text-gray-900">$20</span>
                            <span class="text-default"> / month</span>
                        </p>
                        <label class="inline-flex items-center gap-2 cursor-pointer">
                            <span class="relative inline-block w-9 h-5">
                                <input type="checkbox" class="sr-only peer" checked>
                                <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                            </span>
                            <span class="text-sm text-default">Active</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Subscribers</p>
                        <p class="text-base font-bold text-gray-900 mb-0">183</p>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-sm font-semibold text-title mb-1">Premium Support</h2>
                    <p class="text-sm text-default mb-4">Get 24/7 priority support from our Export team.</p>
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-border-color">
                        <p class="text-sm mb-0">
                            <span class="font-bold text-gray-900">$15</span>
                            <span class="text-default"> / month</span>
                        </p>
                        <label class="inline-flex items-center gap-2 cursor-pointer">
                            <span class="relative inline-block w-9 h-5">
                                <input type="checkbox" class="sr-only peer" checked>
                                <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                            </span>
                            <span class="text-sm text-default">Active</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Subscribers</p>
                        <p class="text-base font-bold text-gray-900 mb-0">300</p>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-sm font-semibold text-title mb-1">Data Analytics</h2>
                    <p class="text-sm text-default mb-4">Unlock advanced analytics to track your usage and growth.</p>
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-border-color">
                        <p class="text-sm mb-0">
                            <span class="font-bold text-gray-900">$10</span>
                            <span class="text-default"> / month</span>
                        </p>
                        <label class="inline-flex items-center gap-2 cursor-pointer">
                            <span class="relative inline-block w-9 h-5">
                                <input type="checkbox" class="sr-only peer" checked>
                                <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                            </span>
                            <span class="text-sm text-default">Active</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Subscribers</p>
                        <p class="text-base font-bold text-gray-900 mb-0">450</p>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-sm font-semibold text-title mb-1">Team Collaboration</h2>
                    <p class="text-sm text-default mb-4">Enhance teamwork with shared folders and project management.</p>
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-border-color">
                        <p class="text-sm mb-0">
                            <span class="font-bold text-gray-900">$20</span>
                            <span class="text-default"> / month</span>
                        </p>
                        <label class="inline-flex items-center gap-2 cursor-pointer">
                            <span class="relative inline-block w-9 h-5">
                                <input type="checkbox" class="sr-only peer" checked>
                                <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                            </span>
                            <span class="text-sm text-default">Active</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Subscribers</p>
                        <p class="text-base font-bold text-gray-900 mb-0">200</p>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-sm font-semibold text-title mb-1">Priority Support</h2>
                    <p class="text-sm text-default mb-4">Get 24/7 assistance from our Export support staff.</p>
                    <div class="flex items-center justify-between mb-4 pb-4 border-b border-border-color">
                        <p class="text-sm mb-0">
                            <span class="font-bold text-gray-900">$25</span>
                            <span class="text-default"> / month</span>
                        </p>
                        <label class="inline-flex items-center gap-2 cursor-pointer">
                            <span class="relative inline-block w-9 h-5">
                                <input type="checkbox" class="sr-only peer" checked>
                                <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                            </span>
                            <span class="text-sm text-default">Active</span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-default mb-0">Clients</p>
                        <p class="text-base font-bold text-gray-900 mb-0">300</p>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <membership-addons-modal></membership-addons-modal>
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
