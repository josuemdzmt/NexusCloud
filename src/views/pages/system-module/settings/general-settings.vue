<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="mb-4">
                <h1 class="text-gray-900 text-xl font-bold mb-1">Settings</h1>
                <p class="text-sm text-default mb-0">Manage and control all platform configurations from a centralized settings panel.</p>
            </div>

            <!-- Tabs -->
            <div class="inline-flex items-center gap-2 border border-border-color rounded-md p-1 mb-4 bg-white flex-wrap">
                <router-link :to="all_routes.generalSettings" class="px-3 py-1.5 text-sm font-semibold rounded-md bg-dark text-white inline-flex items-center gap-2"><i class="ph-duotone ph-user"></i> Profile</router-link>
                <router-link :to="all_routes.securitySettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-shield-check"></i> Security</router-link>
                <router-link :to="all_routes.notificationsSettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-bell"></i> Notifications</router-link>
                <router-link :to="all_routes.integrationsSettings" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-grid-four"></i> Integrations</router-link>
            </div>

            <div class="bg-white border border-border-color rounded-md p-5 max-w-4xl">
                <h2 class="text-lg font-bold text-gray-900 mb-4">Profile</h2>
                <form class="space-y-5">
                    <!-- Profile Image -->
                    <div>
                        <label class="text-sm text-title font-medium mb-2 inline-block">Profile Image
                            <span class="text-danger">*</span>
                        </label>
                        <div class="flex items-center gap-3">
                            <div class="size-16 rounded-md border border-border-color bg-light flex items-center justify-center text-default">
                                <i class="ph-duotone ph-image text-2xl"></i>
                            </div>
                            <div>
                                <div class="relative btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover">
                                    <i class="ph-duotone ph-upload-simple"></i> Upload Image
                                    <input type="file" class="absolute inset-0 opacity-0 cursor-pointer">
                                </div>
                                <p class="text-[11px] text-default mt-2 mb-0">JPG or PNG format, not exceeding 5MB.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Name -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label class="text-sm font-semibold text-gray-900 mb-1 inline-block">First Name
                            <span class="text-danger">*</span>
                        </label>
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                        <div><label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Last Name
                            <span class="text-danger">*</span>
                        </label>
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                    </div>
                    <!-- Email & Phone -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Email
                            <span class="text-danger">*</span>
                        </label>
                        <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                        <div><label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Phone Number <span class="text-danger">*</span>
                        </label>
                        <input type="tel" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                    </div>
                    <!-- Address Details -->
                    <div class="pt-5 mt-5 border-t border-border-color">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Address Details</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Address Line 1
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Address Line 2
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Country</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Select</option>
                                    <option>USA</option>
                                    <option>India</option>
                                    <option>UK</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">State</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Select</option>
                                    <option>Texas</option>
                                    <option>California</option>
                                    <option>New York</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">City</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Select</option>
                                    <option>New York</option>
                                    <option>Los Angeles</option>
                                    <option>Houston</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Postal Code</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                        </div>
                    </div>
                </form>
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
