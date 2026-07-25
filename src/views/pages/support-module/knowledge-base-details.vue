<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
                <router-link :to="all_routes.supportDashboard" class="hover:text-primary">Support</router-link>
                <i class="ph ph-caret-right text-[10px]"></i>
                <router-link :to="all_routes.knowledgeBase" class="hover:text-primary">Knowledge Base</router-link>
                <i class="ph ph-caret-right text-[10px]"></i>
                <span>ERP System Overview</span>
            </div>

            <div class="grid grid-cols-12 gap-3">

                <!-- Article -->
                <div class="col-span-12 lg:col-span-8">
                    <div class="bg-white border border-border-color rounded-md p-5">

                        <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-3">ERP System Overview</h1>

                        <div class="flex flex-wrap items-center gap-3 pb-4 mb-4 border-b border-border-color">
                            <div class="flex items-center gap-2">
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full shrink-0" alt="Steven Schroer">
                                <span class="text-sm font-semibold text-title">Steven Schroer</span>
                            </div>
                            <span class="text-sm text-default inline-flex items-center gap-1"><i class="ph ph-calendar-blank"></i> Updated 20 Sep 2025</span>
                            <span class="text-sm text-default inline-flex items-center gap-1"><i class="ph ph-clock"></i> 6 min read</span>
                            <span class="text-sm text-default inline-flex items-center gap-1"><i class="ph ph-eye"></i> 1,245 Views</span>
                        </div>

                        <div id="what-is-dreams-erp" class="mb-5">
                            <h2 class="text-base font-semibold text-title mb-2">What is Dreams ERP</h2>
                            <p class="text-sm text-default mb-2">Dreams ERP is an all-in-one enterprise resource planning system that brings your finance, sales, purchases, inventory, HR, and support operations into a single workspace. Instead of switching between disconnected tools, every team works from the same data in real time.</p>
                            <p class="text-sm text-default mb-0">The system is designed to be beginner friendly, so new users can start with day-to-day tasks like creating invoices or raising tickets, and gradually adopt advanced features such as budgeting, asset management, and analytics.</p>
                        </div>

                        <div id="modules-overview" class="mb-5">
                            <h2 class="text-base font-semibold text-title mb-2">Modules Overview</h2>
                            <p class="text-sm text-default mb-3">Dreams ERP is organised into focused modules. Each module can be used on its own, but they share data so transactions flow seamlessly across the system.</p>
                            <ul class="space-y-2 mb-0 pl-3">
                                <li class="flex items-center gap-2 text-sm text-default"><i class="ph ph-check-circle text-success mt-0.5"></i><span><span class="font-semibold text-title">Finance</span> &ndash; invoices, expenses, budgeting, cashflow, and financial reports.</span></li>
                                <li class="flex items-center gap-2 text-sm text-default"><i class="ph ph-check-circle text-success mt-0.5"></i><span><span class="font-semibold text-title">Sales &amp; Purchases</span> &ndash; quotes, sales orders, purchase orders, and vendor payments.</span></li>
                                <li class="flex items-center gap-2 text-sm text-default"><i class="ph ph-check-circle text-success mt-0.5"></i><span><span class="font-semibold text-title">Inventory</span> &ndash; products, categories, brands, and stock movements.</span></li>
                                <li class="flex items-center gap-2 text-sm text-default"><i class="ph ph-check-circle text-success mt-0.5"></i><span><span class="font-semibold text-title">HR &amp; Payroll</span> &ndash; employees, attendance, leaves, and payroll processing.</span></li>
                                <li class="flex items-center gap-2 text-sm text-default"><i class="ph ph-check-circle text-success mt-0.5"></i><span><span class="font-semibold text-title">Support</span> &ndash; tickets, customer feedback, and this knowledge base.</span></li>
                            </ul>
                        </div>

                        <div id="getting-started" class="mb-5">
                            <h2 class="text-base font-semibold text-title mb-2">Getting Started</h2>
                            <p class="text-sm text-default mb-3">After signing in, you land on the dashboard, which summarises key metrics across modules. Use the sidebar to navigate between modules, and the top bar to search, switch company settings, or open notifications. Most list pages follow the same pattern: search and filters at the top, the data table in the middle, and an Add New button to create records.</p>
                            <div class="bg-info-transparent rounded-md p-4 flex items-center gap-3">
                                <i class="ph-duotone ph-info text-info text-xl shrink-0"></i>
                                <p class="text-sm text-default mb-0"><span class="font-semibold text-title">Tip:</span> Start with the General Settings page to configure your company profile, tax rules, and currencies before creating your first transactions. This ensures every invoice and report uses the correct defaults.</p>
                            </div>
                        </div>

                        <div id="user-roles-permissions" class="mb-5">
                            <h2 class="text-base font-semibold text-title mb-2">User Roles &amp; Permissions</h2>
                            <p class="text-sm text-default mb-2">Access in Dreams ERP is controlled through roles. An administrator assigns each user a role, and the role determines which modules and actions are available. Typical roles include Admin (full access), Manager (module-level access with approvals), and Staff (day-to-day data entry within assigned modules).</p>
                            <p class="text-sm text-default mb-0">Permissions can be fine-tuned per role from the Designations &amp; Roles page, letting you allow viewing while restricting create, edit, or delete actions on sensitive records such as payroll or financial reports.</p>
                        </div>

                        <div id="faqs" class="mb-5">
                            <h2 class="text-base font-semibold text-title mb-2">FAQs</h2>
                            <div class="space-y-3">
                                <div>
                                    <p class="text-sm font-semibold text-title mb-1">Can I use only one module to begin with?</p>
                                    <p class="text-sm text-default mb-0">Yes. Modules work independently, so you can start with Finance or Sales and enable other modules whenever your team is ready.</p>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-title mb-1">Does the ERP support multiple tax rules?</p>
                                    <p class="text-sm text-default mb-0">Yes. You can configure GST, VAT, and custom tax types with their own percentages and apply them per transaction.</p>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-title mb-1">How do I get help if something is unclear?</p>
                                    <p class="text-sm text-default mb-0">Browse the related articles in this knowledge base, or raise a support ticket and our team will respond within the SLA for your plan.</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border-color">
                            <p class="text-sm font-semibold text-title mb-0">Was this helpful?</p>
                            <div class="flex items-center gap-2">
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph ph-thumbs-up text-success"></i> Yes</button>
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph ph-thumbs-down text-danger"></i> No</button>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Sidebar -->
                <div class="col-span-12 lg:col-span-4">

                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-base font-semibold text-title mb-3">In this article</h2>
                        <div class="space-y-2">
                            <a href="#what-is-dreams-erp" class="flex items-center gap-2 text-sm text-default hover:text-primary"><i class="ph ph-caret-right text-[10px]"></i> What is Dreams ERP</a>
                            <a href="#modules-overview" class="flex items-center gap-2 text-sm text-default hover:text-primary"><i class="ph ph-caret-right text-[10px]"></i> Modules Overview</a>
                            <a href="#getting-started" class="flex items-center gap-2 text-sm text-default hover:text-primary"><i class="ph ph-caret-right text-[10px]"></i> Getting Started</a>
                            <a href="#user-roles-permissions" class="flex items-center gap-2 text-sm text-default hover:text-primary"><i class="ph ph-caret-right text-[10px]"></i> User Roles &amp; Permissions</a>
                            <a href="#faqs" class="flex items-center gap-2 text-sm text-default hover:text-primary"><i class="ph ph-caret-right text-[10px]"></i> FAQs</a>
                        </div>
                    </div>

                    <div class="bg-white border border-border-color rounded-md p-4 mt-3">
                        <h2 class="text-base font-semibold text-title mb-3">Related Articles</h2>
                        <div class="space-y-3">
                            <router-link :to="all_routes.knowledgeBaseDetails" class="flex items-start gap-2 text-sm text-default hover:text-primary"><i class="ph-duotone ph-file-text text-default"></i> Navigating the Dashboard &amp; Menus</router-link>
                            <router-link :to="all_routes.knowledgeBaseDetails" class="flex items-start gap-2 text-sm text-default hover:text-primary"><i class="ph-duotone ph-file-text text-default"></i> Understanding Roles &amp; Permissions</router-link>
                            <router-link :to="all_routes.knowledgeBaseDetails" class="flex items-start gap-2 text-sm text-default hover:text-primary"><i class="ph-duotone ph-file-text text-default"></i> Creating Your First Customer Invoice</router-link>
                            <router-link :to="all_routes.knowledgeBaseDetails" class="flex items-start gap-2 text-sm text-default hover:text-primary"><i class="ph-duotone ph-file-text text-default"></i> Configuring Tax Rules (GST &amp; VAT)</router-link>
                        </div>
                    </div>

                    <div class="bg-white border border-border-color rounded-md p-4 mt-3 text-center">
                        <div class="size-12 mx-auto rounded-full bg-light flex items-center justify-center mb-3"><i class="ph-duotone ph-headset text-default text-2xl"></i></div>
                        <p class="text-sm font-semibold text-title mb-1">Still need help?</p>
                        <p class="text-sm text-default mb-3">Can't find what you're looking for? Our support team is happy to assist.</p>
                        <router-link :to="all_routes.tickets" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer"><i class="ph ph-ticket"></i> Raise a Ticket</router-link>
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
