<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3"><router-link :to="all_routes.projects" class="hover:text-primary">Projects</router-link> <i class="ph ph-caret-right text-[10px]"></i> <span>Office Management App</span></div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-4">
                    <div class="bg-white border border-border-color rounded-md p-4 text-center">
                        <div class="size-14 rounded-md bg-primary-transparent flex items-center justify-center mx-auto mb-3">
                            <i class="ph-duotone ph-buildings text-primary text-2xl"></i>
                        </div>
                        <h1 class="text-base font-semibold text-title mb-1">Office Management App</h1>
                        <p class="text-sm text-default mb-3">#PRO0020 &middot; TechCorp Inc</p>
                        <div class="flex justify-center gap-2 mb-3">
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low</span>
                        </div>
                        <div class="flex items-center gap-2 mb-3">
                            <div class="h-1.5 w-full bg-light-500 rounded-full overflow-hidden">
                                <div class="h-full bg-success rounded-full" style="width:95%"></div>
                            </div><span class="text-[11px]">95%</span>
                        </div>
                        <div class="text-sm text-default text-left space-y-4 pt-3 border-t border-border-color">
                            <div class="flex justify-between"><span>Project ID</span><span class="text-gray-900 font-semibold">#PRO0020</span></div>
                            <div class="flex justify-between"><span>Client</span><span class="text-gray-900 font-semibold">TechCorp Inc</span></div>
                            <div class="flex justify-between"><span>Project Lead</span><span class="text-gray-900 font-semibold">Ethan Walker</span></div>
                            <div class="flex justify-between"><span>Start Date</span><span class="text-gray-900 font-semibold">11 Sep 2025</span></div>
                            <div class="flex justify-between"><span>Deadline</span><span class="text-gray-900 font-semibold">25 Sep 2025</span></div>
                            <div class="flex justify-between"><span>Budget</span><span class="text-gray-900 font-semibold">$120K</span></div>
                            <div class="flex justify-between"><span>Spent</span><span class="text-gray-900 font-semibold">$98K</span></div>
                        </div>
                        <div class="text-left pt-3 mt-3 border-t border-border-color">
                            <p class="text-sm font-semibold text-gray-900 mb-3">Team Members</p>
                            <div class="flex -space-x-1.5">
                                <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border-2 border-white" alt="Ethan Walker">
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border-2 border-white" alt="Madison Clark">
                                <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full border-2 border-white" alt="James Harris">
                                <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full border-2 border-white" alt="Avery Thompson">
                                <span class="size-7 rounded-full bg-light border-2 border-white text-[10px] flex items-center justify-center text-default">+5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-8">
                    <div class="bg-white border border-border-color rounded-md">
                        <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                            <button type="button" class="py-2 px-4 text-sm hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary border-b-2 border-transparent  whitespace-nowrap hover:text-primary hover:border-b-primary focus:outline-hidden focus:text-primary disabled:opacity-50 disabled:pointer-events-none active" id="project-tab-1" aria-selected="true" data-hs-tab="#project-tab-01" aria-controls="project-tab-01" role="tab">
                                Overview
                            </button>
                            <button type="button" class="py-2 px-4 text-sm hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary border-b-2 border-transparent  whitespace-nowrap hover:text-primary hover:border-b-primary focus:outline-hidden focus:text-primary disabled:opacity-50 disabled:pointer-events-none" id="project-tab-2" aria-selected="false" data-hs-tab="#project-tab-02" aria-controls="project-tab-02" role="tab">
                                Tasks
                            </button>
                            <button type="button" class="py-2 px-4 text-sm hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary border-b-2 border-transparent  whitespace-nowrap hover:text-primary hover:border-b-primary focus:outline-hidden focus:text-primary disabled:opacity-50 disabled:pointer-events-none" id="project-tab-3" aria-selected="false" data-hs-tab="#project-tab-03" aria-controls="project-tab-03" role="tab">
                                Activity
                            </button>
                            <button type="button" class="py-2 px-4 text-sm hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary border-b-2 border-transparent  whitespace-nowrap hover:text-primary hover:border-b-primary focus:outline-hidden focus:text-primary disabled:opacity-50 disabled:pointer-events-none" id="project-tab-4" aria-selected="false" data-hs-tab="#project-tab-04" aria-controls="project-tab-04" role="tab">
                                Files
                            </button>
                        </nav>
                        <div class="p-4">

                            <!-- Tab 1 -->
                            <div id="project-tab-01" role="tabpanel" aria-labelledby="project-tab-1">
                                <h2 class="text-sm font-semibold text-title mb-3">Description</h2>
                                <p class="text-sm text-default mb-0">A centralized workspace platform to manage office operations, meeting rooms and internal requests. The app brings together visitor logs, asset requests, desk reservations and facility maintenance into a single dashboard, giving administrators a real-time view of day-to-day office activity across all branches.</p>
                                <h2 class="text-sm font-semibold text-title mb-3 mt-6">Key Stats</h2>
                                <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                    <div class="bg-light rounded-md p-3">
                                        <p class="text-default text-sm mb-1">Total Tasks</p>
                                        <p class="text-gray-900 text-sm font-semibold mb-0">48</p>
                                    </div>
                                    <div class="bg-light rounded-md p-3">
                                        <p class="text-default text-sm mb-1">Completed</p>
                                        <p class="text-gray-900 text-sm font-semibold mb-0">32</p>
                                    </div>
                                    <div class="bg-light rounded-md p-3">
                                        <p class="text-default text-sm mb-1">Hours Logged</p>
                                        <p class="text-gray-900 text-sm font-semibold mb-0">364</p>
                                    </div>
                                    <div class="bg-light rounded-md p-3">
                                        <p class="text-default text-sm mb-1">Budget Spent</p>
                                        <p class="text-gray-900 text-sm font-semibold mb-0">$98K</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 2 -->
                            <div id="project-tab-02" class="hidden" role="tabpanel" aria-labelledby="project-tab-2">
                                <h2 class="text-sm font-semibold text-title mb-3">Tasks</h2>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead>
                                            <tr class="text-sm text-default border-b border-border-color">
                                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Task</th>
                                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Assignee</th>
                                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Due Date</th>
                                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-border-color">
                                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Design dashboard wireframes</td>
                                                <td class="py-2.5 px-2">
                                                    <div class="flex items-center gap-2">
                                                        <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full shrink-0" alt="Madison Clark">
                                                        <span class="text-sm">Madison Clark</span>
                                                    </div>
                                                </td>
                                                <td class="py-2.5 px-2 text-sm text-default">15 Sep 2025</td>
                                                <td class="py-2.5 px-2">
                                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span>
                                                </td>
                                            </tr>
                                            <tr class="border-b border-border-color">
                                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Build meeting room booking module</td>
                                                <td class="py-2.5 px-2">
                                                    <div class="flex items-center gap-2">
                                                        <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full shrink-0" alt="James Harris">
                                                        <span class="text-sm">James Harris</span>
                                                    </div>
                                                </td>
                                                <td class="py-2.5 px-2 text-sm text-default">18 Sep 2025</td>
                                                <td class="py-2.5 px-2">
                                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">In Progress</span>
                                                </td>
                                            </tr>
                                            <tr class="border-b border-border-color">
                                                <td class="py-2.5 px-2 text-sm font-semibold text-title">API integration for visitor log</td>
                                                <td class="py-2.5 px-2">
                                                    <div class="flex items-center gap-2">
                                                        <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full shrink-0" alt="Avery Thompson">
                                                        <span class="text-sm">Avery Thompson</span>
                                                    </div>
                                                </td>
                                                <td class="py-2.5 px-2 text-sm text-default">20 Sep 2025</td>
                                                <td class="py-2.5 px-2">
                                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">In Progress</span>
                                                </td>
                                            </tr>
                                            <tr class="border-b border-border-color">
                                                <td class="py-2.5 px-2 text-sm font-semibold text-title">QA testing for asset requests</td>
                                                <td class="py-2.5 px-2">
                                                    <div class="flex items-center gap-2">
                                                        <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full shrink-0" alt="Sophia Martinez">
                                                        <span class="text-sm">Sophia Martinez</span>
                                                    </div>
                                                </td>
                                                <td class="py-2.5 px-2 text-sm text-default">22 Sep 2025</td>
                                                <td class="py-2.5 px-2">
                                                    <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Prepare release notes &amp; docs</td>
                                                <td class="py-2.5 px-2">
                                                    <div class="flex items-center gap-2">
                                                        <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full shrink-0" alt="Ethan Walker">
                                                        <span class="text-sm">Ethan Walker</span>
                                                    </div>
                                                </td>
                                                <td class="py-2.5 px-2 text-sm text-default">25 Sep 2025</td>
                                                <td class="py-2.5 px-2">
                                                    <span class="text-[11px] bg-purple-transparent text-purple px-2 py-0.5 rounded">On Hold</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Tab 3 -->
                            <div id="project-tab-03" class="hidden" role="tabpanel" aria-labelledby="project-tab-3">
                                <h2 class="text-sm font-semibold text-title mb-3">Recent Activity</h2>
                                <div class="space-y-3">
                                    <div class="flex gap-3 pb-3 border-b border-border-color">
                                        <div class="size-8 rounded-full bg-success-transparent flex items-center justify-center flex-shrink-0"><i class="ph-duotone ph-check-circle text-success"></i></div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Task completed</p>
                                            <p class="text-[11px] text-default mb-0">21 Sep 2025, 10:30 AM &middot; Design dashboard wireframes marked as done</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 pb-3 border-b border-border-color">
                                        <div class="size-8 rounded-full bg-info-transparent flex items-center justify-center flex-shrink-0"><i class="ph-duotone ph-file-arrow-up text-info"></i></div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">File uploaded</p>
                                            <p class="text-[11px] text-default mb-0">20 Sep 2025, 2:15 PM &middot; Requirement-Specs.pdf added to project files</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 pb-3 border-b border-border-color">
                                        <div class="size-8 rounded-full bg-warning-transparent flex items-center justify-center flex-shrink-0"><i class="ph-duotone ph-chat-circle-dots text-warning"></i></div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Comment added</p>
                                            <p class="text-[11px] text-default mb-0">19 Sep 2025 &middot; Madison commented on meeting room booking module</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3">
                                        <div class="size-8 rounded-full bg-purple-transparent flex items-center justify-center flex-shrink-0"><i class="ph-duotone ph-flag text-purple"></i></div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Milestone reached</p>
                                            <p class="text-[11px] text-default mb-0">18 Sep 2025 &middot; Phase 2 development completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 4 -->
                            <div id="project-tab-04" class="hidden" role="tabpanel" aria-labelledby="project-tab-4">
                                <h2 class="text-sm font-semibold text-title mb-3">Files</h2>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-3">
                                        <div class="flex items-center gap-3">
                                            <div class="size-8 rounded-md bg-danger-transparent flex items-center justify-center shrink-0"><i class="ph-duotone ph-file-pdf text-danger"></i></div>
                                            <div>
                                                <p class="text-sm font-semibold text-title mb-0">Requirement-Specs.pdf</p>
                                                <p class="text-[11px] text-default mb-0">2.4 MB &middot; 20 Sep 2025</p>
                                            </div>
                                        </div>
                                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-download-simple"></i></button>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-3">
                                        <div class="flex items-center gap-3">
                                            <div class="size-8 rounded-md bg-info-transparent flex items-center justify-center shrink-0"><i class="ph-duotone ph-file-image text-info"></i></div>
                                            <div>
                                                <p class="text-sm font-semibold text-title mb-0">UI-Wireframes.png</p>
                                                <p class="text-[11px] text-default mb-0">5.1 MB &middot; 15 Sep 2025</p>
                                            </div>
                                        </div>
                                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-download-simple"></i></button>
                                    </div>
                                    <div class="flex items-center justify-between gap-3 border border-border-color rounded-md p-3">
                                        <div class="flex items-center gap-3">
                                            <div class="size-8 rounded-md bg-success-transparent flex items-center justify-center shrink-0"><i class="ph-duotone ph-file-xls text-success"></i></div>
                                            <div>
                                                <p class="text-sm font-semibold text-title mb-0">Project-Budget.xlsx</p>
                                                <p class="text-[11px] text-default mb-0">1.2 MB &middot; 12 Sep 2025</p>
                                            </div>
                                        </div>
                                        <button class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer"><i class="ph ph-download-simple"></i></button>
                                    </div>
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
