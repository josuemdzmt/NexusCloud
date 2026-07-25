<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="mb-4">
                <h1 class="text-gray-900 text-xl font-bold mb-1">Settings</h1>
                <p class="text-sm text-default mb-0">Manage and control all platform configurations from a centralized settings panel.</p>
            </div>

            <div class="inline-flex items-center gap-1 border border-border-color rounded-md p-1 mb-4 bg-white">
                <router-link :to="all_routes.generalSettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-user"></i> Profile</router-link>
                <router-link :to="all_routes.securitySettings" class="px-3 py-1.5 text-sm font-semibold rounded-md bg-dark text-white inline-flex items-center gap-2"><i class="ph-duotone ph-shield-check"></i> Security</router-link>
                <router-link :to="all_routes.notificationsSettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-bell"></i> Notifications</router-link>
                <router-link :to="all_routes.integrationsSettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-grid-four"></i> Integrations</router-link>
            </div>

            <div class="bg-white border border-border-color rounded-md p-5 max-w-4xl">
                <div class="space-y-4">
                    <div class="flex items-center justify-between gap-3 pb-4 border-b border-border-color">
                        <div>
                            <p class="text-sm font-semibold text-title mb-1">Change Password</p>
                            <p class="text-sm text-default mb-0">Receive codes via SMS or email every time you login</p>
                        </div>
                        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-password">Change</button>
                    </div>
                    <div class="flex items-center justify-between gap-3 pb-4 border-b border-border-color">
                        <div>
                            <p class="text-sm font-semibold text-title mb-1">Two Step Verification</p>
                            <p class="text-sm text-default mb-0">Add an extra layer of security to your account by enable it</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancel</button>
                            <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer" data-hs-overlay="#popup-select-auth">Set Up</button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between gap-3 pb-4 border-b border-border-color">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <p class="text-sm font-semibold text-title mb-0">Phone Number Verification</p>
                                <span class="inline-flex items-center gap-1 text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded"><i class="ph ph-check-circle"></i> Verified Mobile Number : +81699799974</span>
                            </div>
                            <p class="text-sm text-default mb-0">Verify your phone number to enhance security</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Remove</button>
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-phone">Change</button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between gap-3 pb-4 border-b border-border-color">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <p class="text-sm font-semibold text-title mb-0">Email Verification</p>
                                <span class="inline-flex items-center gap-1 text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded"><i class="ph ph-check-circle"></i> Verified Email : mathew@example.com</span>
                            </div>
                            <p class="text-sm text-default mb-0">Verify your email address to secure your account</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Remove</button>
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-change-email">Change</button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between gap-3 pb-4 border-b border-border-color">
                        <div>
                            <p class="text-sm font-semibold text-title mb-1">Deactivate Account</p>
                            <p class="text-sm text-default mb-0">This will shutdown your account. Your account will be reactive when you sign in again</p>
                        </div>
                        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Deactivate</button>
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <div>
                            <p class="text-sm font-semibold text-title mb-1">Delete Account</p>
                            <p class="text-sm text-default mb-0">Permanently deletes the user account along with all associated data from the app</p>
                        </div>
                        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#popup-delete-account">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <security-settings-modal></security-settings-modal>
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
