<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
                <router-link :to="all_routes.supportDashboard" class="hover:text-primary">Support</router-link>
                <i class="ph ph-caret-right text-[10px]"></i>
                <router-link :to="all_routes.tickets" class="hover:text-primary">Tickets</router-link>
                <i class="ph ph-caret-right text-[10px]"></i> <span>#TKT0019</span>
            </div>

            <div class="grid grid-cols-12 gap-3">

                <div class="col-span-12 lg:col-span-4">

                    <!-- Ticket Summary -->
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <h1 class="text-base font-semibold text-title mb-0">#TKT0019</h1>
                            <div class="flex items-center gap-2">
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 mb-4">
                            <img src="@/assets/img/avatar/avatar-04.jpg" class="size-10 rounded-full shrink-0" alt="Gabriella White">
                            <div>
                                <p class="text-sm font-semibold text-title mb-0">Gabriella White</p>
                                <p class="text-sm text-default mb-0">gabriella@example.com</p>
                            </div>
                        </div>
                        <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
                            <div class="flex justify-between items-center">
                                <span>Assigned To</span>
                                <span class="flex items-center gap-2">
                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="size-5 rounded-full shrink-0" alt="Regina Bryant"><span class="text-gray-900 font-semibold">Regina Bryant</span>
                                </span>
                            </div>
                            <div class="flex justify-between">
                                <span>Category</span>
                                <span class="text-gray-900 font-semibold">Finance &amp; Billing</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Created On</span>
                                <span class="text-gray-900 font-semibold">05 Sep 2025</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Due Date</span>
                                <span class="text-gray-900 font-semibold">22 Sep 2025</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Last Updated</span>
                                <span class="text-gray-900 font-semibold">20 Sep 2025</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>SLA</span>
                                <span class="text-[11px] font-semibold bg-warning-transparent text-warning px-2 py-0.5 rounded">Due in 2 Days</span>
                            </div>
                        </div>
                    </div>

                    <!-- Ticket Properties -->
                    <div class="bg-white border border-border-color rounded-md p-4 mt-3">
                        <h2 class="text-sm font-semibold text-title mb-3">Ticket Properties</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Status</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Open</option>
                                    <option selected>Pending</option>
                                    <option>Resolved</option>
                                    <option>Closed</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Priority</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Low</option>
                                    <option selected>Medium</option>
                                    <option>High</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Assigned To</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>Regina Bryant</option>
                                    <option>Steven Schroer</option>
                                    <option>James Parker</option>
                                    <option>Muriel Hood</option>
                                </select>
                            </div>
                            <button type="button" class="btn-sm w-full bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Save Changes</button>
                        </div>
                    </div>

                </div>

                <div class="col-span-12 lg:col-span-8">
                    <div class="bg-white border border-border-color rounded-md">

                        <div class="p-4 border-b border-border-color">
                            <h2 class="text-base font-bold text-gray-900 mb-1">Invoice Query</h2>
                            <p class="text-sm text-default mb-0">#TKT0019 &middot; Finance &amp; Billing &middot; Created 05 Sep 2025</p>
                        </div>

                        <div class="p-4">

                            <!-- Original Message -->
                            <div class="flex gap-3">
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-8 rounded-full shrink-0" alt="Gabriella White">
                                <div class="flex-1">
                                    <div class="flex flex-wrap items-center gap-2 mb-1">
                                        <p class="text-sm font-semibold text-title mb-0">Gabriella White</p>
                                        <span class="text-[11px] text-default">05 Sep 2025, 09:45 AM</span>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3">
                                        <p class="text-sm text-default mb-0">Hi team, I noticed a mismatch on my invoice for the July billing cycle. The total amount doesn't match the agreed pricing, and the tax line looks higher than expected. Could you please clarify how the tax calculation and payment adjustment were applied?</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="text-sm font-semibold text-title mt-5 mb-3">Conversation</h3>
                            <div class="space-y-4">

                                <!-- Agent Reply -->
                                <div class="flex gap-3">
                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="size-8 rounded-full shrink-0" alt="Regina Bryant">
                                    <div class="flex-1">
                                        <div class="flex flex-wrap items-center gap-2 mb-1">
                                            <p class="text-sm font-semibold text-title mb-0">Regina Bryant</p>
                                            <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">Support Agent</span>
                                            <span class="text-[11px] text-default">05 Sep 2025, 11:20 AM</span>
                                        </div>
                                        <div class="bg-light rounded-md p-3">
                                            <p class="text-sm text-default mb-0">Hi Gabriella, thanks for reaching out. I've pulled up your July invoice and I'm reviewing the tax breakdown with our finance team. Could you confirm which plan you were on during July so I can cross-check the adjustment?</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Requester Reply -->
                                <div class="flex gap-3">
                                    <img src="@/assets/img/avatar/avatar-04.jpg" class="size-8 rounded-full shrink-0" alt="Gabriella White">
                                    <div class="flex-1">
                                        <div class="flex flex-wrap items-center gap-2 mb-1">
                                            <p class="text-sm font-semibold text-title mb-0">Gabriella White</p>
                                            <span class="text-[11px] text-default">06 Sep 2025, 10:05 AM</span>
                                        </div>
                                        <div class="border border-border-color rounded-md p-3">
                                            <p class="text-sm text-default mb-2">Sure, we were on the Business plan for the whole of July. I've attached the invoice copy for reference.</p>
                                            <span class="inline-flex items-center gap-2 text-sm text-gray-900 border border-border-color rounded-md px-2 py-1"><i class="ph ph-file-pdf text-danger"></i> Invoice_July_2025.pdf</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Internal Note -->
                                <div class="flex gap-3">
                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="size-8 rounded-full shrink-0" alt="Regina Bryant">
                                    <div class="flex-1">
                                        <div class="flex flex-wrap items-center gap-2 mb-1">
                                            <p class="text-sm font-semibold text-title mb-0">Regina Bryant</p>
                                            <span class="text-[10px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Internal Note</span>
                                            <span class="text-[11px] text-default">18 Sep 2025, 03:40 PM</span>
                                        </div>
                                        <div class="bg-warning-transparent rounded-md p-3">
                                            <p class="text-sm text-default mb-0">Finance confirmed the July tax rule was updated mid-cycle, which caused the higher tax line. A credit adjustment of $42.50 has been approved and will reflect on the next invoice.</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Agent Reply -->
                                <div class="flex gap-3">
                                    <img src="@/assets/img/avatar/avatar-05.jpg" class="size-8 rounded-full shrink-0" alt="Regina Bryant">
                                    <div class="flex-1">
                                        <div class="flex flex-wrap items-center gap-2 mb-1">
                                            <p class="text-sm font-semibold text-title mb-0">Regina Bryant</p>
                                            <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">Support Agent</span>
                                            <span class="text-[11px] text-default">20 Sep 2025, 09:15 AM</span>
                                        </div>
                                        <div class="bg-light rounded-md p-3">
                                            <p class="text-sm text-default mb-0">Hi Gabriella, thanks for your patience. The mismatch was caused by a mid-cycle tax rule update. We've approved a credit adjustment of $42.50, which will be applied to your next invoice. Please let us know once you've verified it so we can resolve this ticket.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <!-- Reply Composer -->
                            <div class="pt-4 mt-5 border-t border-border-color">
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Reply</label>
                                <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Type your reply..."></textarea>
                                <div class="flex items-center justify-between gap-3 mt-3">
                                    <div class="relative btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"> <i class="ph-duotone ph-paperclip"></i> Attach
                                        <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                                    </div>
                                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer"><i class="ph ph-paper-plane-tilt"></i> Send Reply</button>
                                </div>
                            </div>
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

        return {
            all_routes
        };
    },
}
</script>
