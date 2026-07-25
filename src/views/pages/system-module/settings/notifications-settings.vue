<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="mb-4">
                <h1 class="text-gray-900 text-xl font-bold mb-1">Settings</h1>
                <p class="text-sm text-default mb-0">Manage and control all platform configurations from a centralized settings panel.</p>
            </div>

            <div class="inline-flex items-center gap-2 border border-border-color rounded-md p-1 mb-4 bg-white flex-wrap">
                <router-link :to="all_routes.generalSettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-user"></i> Profile</router-link>
                <router-link :to="all_routes.securitySettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-shield-check"></i> Security</router-link>
                <router-link :to="all_routes.notificationsSettings" class="px-3 py-1.5 text-sm font-semibold rounded-md bg-dark text-white inline-flex items-center gap-2"><i class="ph-duotone ph-bell"></i> Notifications</router-link>
                <router-link :to="all_routes.integrationsSettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-grid-four"></i> Integrations</router-link>
            </div>

            <div class="bg-white border border-border-color rounded-md p-5 max-w-4xl">
                <div class="space-y-4 mb-5">
                    <div class="flex items-center justify-between gap-3">
                        <p class="text-sm text-title mb-0">Mobile Push Notifications</p>
                        <label class="relative inline-block w-9 h-5 cursor-pointer">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <p class="text-sm text-title mb-0">Desktop Notifications</p>
                        <label class="relative inline-block w-9 h-5 cursor-pointer">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <p class="text-sm text-title mb-0">Email Notifications</p>
                        <label class="relative inline-block w-9 h-5 cursor-pointer">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <p class="text-sm text-title mb-0">SMS Notifications</p>
                        <label class="relative inline-block w-9 h-5 cursor-pointer">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                </div>

                <table class="w-full text-sm border-t border-border-color">
                    <thead>
                        <tr class="text-sm text-default border-b border-border-color">
                        <th class="text-left py-2 px-2 font-semibold text-gray-900">General Notification</th>
                        <th class="text-center py-2 px-2 font-medium">Push</th>
                        <th class="text-center py-2 px-2 font-medium">SMS</th>
                        <th class="text-center py-2 px-2 font-medium">Email</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr class="border-b border-border-color last:border-0">
                            <td class="py-2.5 px-2 text-sm text-title">Payment</td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked></td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked></td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                        </tr>
                        <tr class="border-b border-border-color last:border-0">
                            <td class="py-2.5 px-2 text-sm text-title">Transaction</td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                        </tr>
                        <tr class="border-b border-border-color last:border-0">
                            <td class="py-2.5 px-2 text-sm text-title">Email Verification</td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                        </tr>
                        <tr class="border-b border-border-color last:border-0">
                            <td class="py-2.5 px-2 text-sm text-title">OTP</td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                                <td class="py-2.5 px-2 text-center">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                                </td>
                                <td class="py-2.5 px-2 text-center">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                                </td>
                        </tr>
                        <tr class="border-b border-border-color last:border-0">
                            <td class="py-2.5 px-2 text-sm text-title">Activity
                            </td>
                                <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                                </td>
                                <td class="py-2.5 px-2 text-center">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                                </td>
                                <td class="py-2.5 px-2 text-center">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                                </td>
                            </tr>
                        <tr class="border-b border-border-color last:border-0">
                            <td class="py-2.5 px-2 text-sm text-title">Account</td>
                            <td class="py-2.5 px-2 text-center">
                                <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                            </td>
                                <td class="py-2.5 px-2 text-center">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                                </td>
                                <td class="py-2.5 px-2 text-center">
                                    <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>
                                </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center justify-end gap-3 mt-5 pt-5 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Save Changes</button>
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
