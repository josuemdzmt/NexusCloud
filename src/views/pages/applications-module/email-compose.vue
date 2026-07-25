<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Email Compose</h1>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 w-full">

                <!-- Sidebar -->
                <div class="xl:col-span-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <router-link :to="all_routes.emailCompose" class="btn w-full bg-primary text-white border border-primary inline-flex items-center justify-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer mb-4">
                            <i class="ph-duotone ph-diamond"></i> Compose New
                        </router-link>
                        <div class="mb-4">
                            <div class="flex items-center justify-between mb-2"><p class="text-sm font-semibold text-title mb-0">Mail</p><button type="button" class="text-default hover:text-primary cursor-pointer"><i class="ph ph-caret-down"></i></button></div>
                            <div class="space-y-1">
                                <router-link :to="all_routes.email" class="flex items-center justify-between gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="inline-flex items-center gap-2"><i class="ph-duotone ph-tray"></i> Inbox</span><span class="size-5 rounded-full bg-danger text-white text-[10px] flex items-center justify-center">6</span></router-link>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-star"></i> Starred</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-alarm"></i> Snoozed</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-paper-plane-right"></i> Sent</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-note-pencil"></i> Drafts</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-flag"></i> Important</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-chat-circle"></i> Chats</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-clock"></i> Scheduled</a>
                            </div>
                        </div>
                        <div class="mb-4 pt-3 border-t border-border-color">
                            <div class="flex items-center justify-between mb-2"><p class="text-sm font-semibold text-title mb-0">Others</p><button type="button" class="text-default hover:text-primary cursor-pointer"><i class="ph ph-caret-down"></i></button></div>
                            <div class="space-y-1">
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-envelope"></i> All Emails</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-warning-octagon"></i> Spam</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-trash"></i> Trash</a>
                            </div>
                        </div>
                        <div class="pt-3 border-t border-border-color">
                            <div class="flex items-center justify-between mb-2"><p class="text-sm font-semibold text-title mb-0">Labels</p><button type="button" class="text-default hover:text-primary cursor-pointer"><i class="ph ph-caret-down"></i></button></div>
                            <div class="space-y-1">
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-success"></span> Personal</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-orange"></span> Client</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-info"></span> Marketing</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-info"></span> Office</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Compose Panel -->
                <div class="xl:col-span-9">
                    <div class="bg-white border border-border-color rounded-md flex flex-col">
                        <div class="px-4 py-3 border-b border-border-color">
                            <p class="text-sm font-semibold text-title mb-0">New Message</p>
                        </div>
                        <form @submit.prevent="submitForm" class="p-4 space-y-4 flex-1">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">From <span class="text-danger">*</span></label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>Select</option>
                                        <option>jamie.anderson@example.com</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">To <span class="text-danger">*</span></label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>Select</option>
                                        <option>Sarah Johnson</option>
                                        <option>Mike Chen</option>
                                        <option>Anna Smith</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">BCC <span class="text-danger">*</span></label>
                                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                        <option>Select</option>
                                        <option>team@example.com</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Subject <span class="text-danger">*</span></label>
                                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                </div>
                            </div>

                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Message</label>
                                <textarea rows="8" placeholder="Type Here" class="w-full text-sm px-3 py-2 focus:outline-none focus:ring-0 resize-none border border-border-color rounded-md"></textarea>
                            </div>

                            <div>
                                <div>
                                    <input type="file" id="file-attachment-input" class="hidden" >
                                    <label for="file-attachment-input" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer text-sm font-medium py-1.5 px-3 rounded">
                                        <i class="ph-duotone ph-paperclip"></i> Attachment
                                    </label>
                                </div>
                                <p class="text-[11px] text-default mt-2 mb-0">Max upload file size: 32MB</p>
                            </div>
                        </form>

                        <div class="flex flex-wrap items-center justify-end gap-2 px-4 py-3 border-t border-border-color">
                            <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer"><i class="ph-duotone ph-note-pencil"></i> Make as Draft</button>
                            <button type="button" class="btn-sm bg-danger text-white border border-danger inline-flex items-center gap-2 hover:bg-danger-hover hover:border-danger-hover cursor-pointer"><i class="ph ph-x"></i> Discard</button>
                            <button type="button" class="btn-sm bg-primary text-white border border-primary inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer"><i class="ph-duotone ph-paper-plane-right"></i> Send Email</button>
                        </div>
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
        const submitForm = () => {
            router.push("/applications/email-compose");
        };

        return {
            all_routes,
            submitForm
        };
    },
}
</script>
