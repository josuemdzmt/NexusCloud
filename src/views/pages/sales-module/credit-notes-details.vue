<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div>
                    <div class="flex items-center gap-2 text-sm text-default mb-1"><router-link :to="all_routes.creditNotes" class="hover:text-primary">Credit Notes</router-link> <i class="ph ph-caret-right text-[10px]"></i> <span>#CN0008</span></div>
                    <h1 class="text-gray-900 text-xl font-bold mb-0">Credit Notes Preview</h1></div>
                <div class="flex items-center gap-2">
                    <button class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer inline-flex items-center gap-1"><i class="ph ph-printer"></i> Print</button><router-link :to="all_routes.editCreditNotesInvoice" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer inline-flex items-center gap-1"><i class="ph ph-pencil"></i> Edit</router-link></div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-5 sm:p-8 w-full">
                <div class="flex justify-between items-start mb-8 flex-wrap gap-5 lg:flex-nowrap">
                    <div>
                        <div class="invoice-logo block dark:hidden"> 
                            <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mb-3" alt="logo"></router-link>
                        </div>
                        <div class="invoice-logo-white hidden dark:block">
                            <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mb-3" alt="logo"></router-link>
                        </div>
                        <div class="text-sm text-default mb-0">123 Business Ave
                            <span class="block pt-1">New York, NY 10001</span></div>
                    </div>
                    <div class="text-start sm:text-right">
                        <h2 class="text-xl font-bold text-title mb-1">CREDIT NOTE</h2>
                        <p class="text-sm text-default mb-0">#CN0008</p><span class="text-[11px] bg-warning text-white px-2 py-0.5 rounded mt-2 inline-block">Pending</span></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b border-border-color">
                    <div>
                        <p class="text-sm text-default mb-2">Bill To</p>
                        <p class="text-sm font-semibold text-title mb-2">Alexander Kenn</p>
                        <p class="text-sm text-default mb-0">TechCorp Inc
                            <span class="block pt-1">San Francisco, CA</span></p>
                    </div>
                    <div class="text-start sm:text-right text-sm space-y-2">
                        <div><span class="text-default">Cycle:</span> 
                            <span class="text-gray-900 font-semibold">Monthly</span>
                        </div>
                        <div><span class="text-default">Start Date:</span> 
                            <span class="text-gray-900 font-semibold">11 Sep 2025</span>
                        </div>
                        <div><span class="text-default">Next Issue:</span> 
                            <span class="text-gray-900 font-semibold">01 Oct 2025</span>
                        </div>
                        <div><span class="text-default">Issues Sent:</span> 
                            <span class="text-gray-900 font-semibold">8 / Ongoing</span>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm mb-6">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color bg-light">
                                <th class="text-left py-3 px-3 font-semibold text-gray-900">Description</th>
                                <th class="text-right py-3 px-3 font-semibold text-gray-900">Qty</th>
                                <th class="text-right py-3 px-3 font-semibold text-gray-900">Rate</th>
                                <th class="text-right py-3 px-3 font-semibold text-gray-900">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-3 px-3 text-sm font-semibold text-title">Monthly Subscription</td>
                                <td class="py-3 px-3 text-sm text-right">1</td>
                                <td class="py-3 px-3 text-sm text-right">$1,000</td>
                                <td class="py-3 px-3 text-sm text-right font-semibold">$1,000</td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-3 px-3 text-sm font-semibold text-title">Premium Support</td>
                                <td class="py-3 px-3 text-sm text-right">1</td>
                                <td class="py-3 px-3 text-sm text-right">$250</td>
                                <td class="py-3 px-3 text-sm text-right font-semibold">$250</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-end">
                    <div class="w-72 text-sm space-y-2">
                        <div class="flex justify-between"><span class="text-default">Subtotal</span>
                            <span class="text-gray-900 font-semibold">$1,250</span>
                        </div>
                        <div class="flex justify-between border-t border-border-color pt-2 text-base">
                            <span class="font-bold text-title">Total per Cycle</span>
                            <span class="text-primary font-bold">$1,250</span>
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
