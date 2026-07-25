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
                <router-link :to="all_routes.notificationsSettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-bell"></i> Notifications</router-link>
                <router-link :to="all_routes.integrationsSettings" class="px-3 py-1.5 text-sm font-semibold rounded-md bg-dark text-white inline-flex items-center gap-2"><i class="ph-duotone ph-grid-four"></i> Integrations</router-link>
            </div>

            <div class="bg-white border border-border-color rounded-md p-5 max-w-4xl">
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-4">
                        <div class="flex items-center gap-3 min-w-0 flex-wrap">
                            <div class="size-10 rounded bg-light flex items-center justify-center shrink-0">
                                <i class="ph-fill ph-google-drive-logo text-success text-xl"></i>
                            </div>
                            <div class="min-w-0">
                                <h2 class="text-sm font-semibold text-title mb-1">Google Drive</h2>
                                <p class="text-sm text-default mb-0">Seamlessly store and access business documents from anywhere.</p>
                            </div>
                        </div>
                        <label class="relative inline-block w-9 h-5 cursor-pointer shrink-0">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-4">
                        <div class="flex items-center gap-3 min-w-0 flex-wrap">
                            <div class="size-10 rounded bg-light flex items-center justify-center shrink-0">
                                <i class="ph-fill ph-cube text-info text-xl"></i>
                            </div>
                            <div class="min-w-0">
                                <h2 class="text-sm font-semibold text-title mb-1">Dropbox</h2>
                                <p class="text-sm text-default mb-0">Keep your files in sync and share reports, invoices, and project files</p>
                            </div>
                        </div>
                        <label class="relative inline-block w-9 h-5 cursor-pointer shrink-0">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-4">
                        <div class="flex items-center gap-3 min-w-0 flex-wrap">
                            <div class="size-10 rounded bg-light flex items-center justify-center shrink-0">
                                <i class="ph-fill ph-slack-logo text-purple text-xl"></i>
                            </div>
                            <div class="min-w-0">
                                <h2 class="text-sm font-semibold text-title mb-1">Slack</h2><p class="text-sm text-default mb-0">Stay connected with real-time notifications, ensuring timely updates.
                                </p>
                            </div>
                        </div>
                        <label class="relative inline-block w-9 h-5 cursor-pointer shrink-0">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-4">
                        <div class="flex items-center gap-3 min-w-0 flex-wrap">
                            <div class="size-10 rounded bg-light flex items-center justify-center shrink-0">
                                <i class="ph-fill ph-calendar text-info text-xl"></i>
                            </div>
                                <div class="min-w-0"><h2 class="text-sm font-semibold text-title mb-1">Google Calendar</h2><p class="text-sm text-default mb-0">Auto sync schedules, meetings, and events, keeping everything updated across all devices.</p>
                                </div>
                            </div>
                                <label class="relative inline-block w-9 h-5 cursor-pointer shrink-0">
                                    <input type="checkbox" class="sr-only peer" checked>
                                    <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                                    <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                                </label>
                            </div>
                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-4">
                        <div class="flex items-center gap-3 min-w-0 flex-wrap">
                            <div class="size-10 rounded bg-light flex items-center justify-center shrink-0">
                                <i class="ph-fill ph-envelope text-danger text-xl"></i>
                            </div>
                            <div class="min-w-0">
                                <h2 class="text-sm font-semibold text-title mb-1">Gmail</h2>
                                <p class="text-sm text-default mb-0">Receive notifications, approvals, and updates directly in your inbox</p>
                            </div>
                        </div>
                        <label class="relative inline-block w-9 h-5 cursor-pointer shrink-0">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-4">
                        <div class="flex items-center gap-3 min-w-0 flex-wrap">
                            <div class="size-10 rounded bg-light flex items-center justify-center shrink-0">
                                <i class="ph-fill ph-github-logo text-gray-900 text-xl"></i>
                            </div>
                            <div class="min-w-0">
                                <h2 class="text-sm font-semibold text-title mb-1">GitHub</h2><p class="text-sm text-default mb-0">Seamlessly store and access code repositories from anywhere, with collaboration tools.</p>
                            </div>
                        </div>
                        <label class="relative inline-block w-9 h-5 cursor-pointer shrink-0">
                            <input type="checkbox" class="sr-only peer" checked>
                            <span class="absolute inset-0 bg-light-500 peer-checked:bg-success rounded-full transition-colors"></span>
                            <span class="absolute top-0.5 start-0.5 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
                        </label>
                    </div>
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
