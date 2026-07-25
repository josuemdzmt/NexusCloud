<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex items-center gap-2 mb-6">
                <router-link :to="all_routes.membershipPlans" class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary">
                    <i class="ph ph-arrow-left"></i>
                    Back to Plans
                </router-link>
            </div>

            <div class="bg-white border border-border-color rounded-lg p-6 shadow-sm max-w-5xl mx-auto">
                <div class="mb-8">
                    <h1 class="text-lg font-bold text-gray-900 mb-4">Basic Details</h1>
                    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Plan Name
                                <span class="text-danger">*</span>
                            </label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Plan Slug</label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0">
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Plan Badge</label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>New</option>
                                <option>Popular</option>
                                <option>Recommended</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Currency</label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>GBP</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Monthly Price
                                <span class="text-danger">*</span>
                            </label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Yearly Price
                                <span class="text-danger">*</span>
                            </label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                    </div>
                </div>

                <div class="mb-8 mt-5 pt-5 border-t border-border-color">
                    <h2 class="text-lg font-bold text-gray-900 mb-4">Pricing Details</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="rounded-2xl border border-border-color p-4">
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">User Limits</label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            <div class="flex items-center gap-2 mt-3">
                                <label class="relative inline-block w-9 h-5 cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" checked="">
                                    <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                    <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                                </label>
                                Unlimited
                            </div>
                        </div>
                        <div class="rounded-2xl border border-border-color p-4">
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">Transactions Limit</label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"  >
                            <div class="flex items-center gap-2 mt-3">
                                <label class="relative inline-block w-9 h-5 cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" checked="">
                                    <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                    <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                                </label>
                                Unlimited
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Modules Access</label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>Basic</option>
                                <option>Standard</option>
                                <option>Full</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Advanced Reporting</label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">API Access</label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Priority Support</label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row justify-end items-center gap-3 mt-5 pt-5 border-t border-border-color">
                    <router-link :to="all_routes.membershipPlans" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancel</router-link>
                    <button type="button" class="btn-sm bg-success text-white border border-success hover:bg-success-800 hover:border-success-800 cursor-pointer">Create New</button>
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
