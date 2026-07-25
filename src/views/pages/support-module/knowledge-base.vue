<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Knowledge Base</h1>
            </div>

            <!-- Get Started -->
            <h2 class="text-base font-bold text-title mb-3">Get Started</h2>

            <div class="flex flex-wrap justify-center gap-3 mb-4 lg:mb-6">

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-compass text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0"><router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">System Navigation</router-link></p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">6 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Explains the layout, menus, and key dashboard features to help users get familiar quickly.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-grid-four text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">ERP System Overview</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">4 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">A beginner-friendly guide explaining what the ERP system does, its modules, and benefits.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-shield-check text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Roles &amp; Permissions</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">3 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Describes different user roles, access levels, and how permissions work within the system.</p>
                </div>

            </div>

            <!-- Finance Module -->
            <h2 class="text-base font-bold text-title mb-3">Finance Module</h2>

            <div class="flex flex-wrap justify-center gap-3 mb-6">

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-file-text text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Customer Invoices</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">4 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Step by step guide to generating invoices, editing them, and marking them as paid or pending.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-chart-bar text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Financial Reports</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">6 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Explains how to run Profit &amp; Loss, Balance Sheet, and Cashflow reports directly from the ERP.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-gear text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Configure Tax Rules</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">9 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Walkthrough for setting up tax types (GST, VAT), percentages, and applying them to transactions.</p>
                </div>

            </div>

            <!-- Purchase, Sales & Membership Modules -->
            <h2 class="text-base font-bold text-title mb-3">Purchase, Sales &amp; Membership Modules</h2>

            <div class="flex flex-wrap justify-center gap-3">
                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-shopping-cart text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0"><router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Create Purchase Order</router-link></p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">8 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Guide to creating new purchase orders, selecting vendors, and sending for approval to the orders.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-credit-card text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Track Vendor Payments</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">3 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Explains how to manage supplier invoices and track payment status to the vendors for clarification.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-tag text-default text-2xl"></i></div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Create Sales Order</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">5 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Walkthrough for adding customer sales orders, editing them, and confirming delivery orders.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-chart-line-up text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">View Sales Reports</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">7 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Tutorial for generating and exporting sales performance and revenue reports with the perfect statics.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-users-three text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Membership Plans</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">9 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Create, edit, and manage membership plans with flexible pricing, duration, and exclusive member benefits.</p>
                </div>

                <div class="bg-white border border-border-color rounded-md p-5 text-center hover:shadow-sm transition w-full md:w-[calc(50%-6px)] xl:w-[calc(33.333%-8px)]">
                    <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3">
                        <i class="ph-duotone ph-puzzle-piece text-default text-2xl"></i>
                    </div>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <p class="text-sm font-semibold text-title mb-0">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="hover:text-primary">Membership Addons</router-link>
                        </p>
                        <span class="text-[10px] bg-info-transparent text-info px-2 py-0.5 rounded">11 Articles</span>
                    </div>
                    <p class="text-sm text-default mb-0">Easily renew, upgrade, or extend membership add-ons to offer more value and flexibility to maintain.</p>
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
