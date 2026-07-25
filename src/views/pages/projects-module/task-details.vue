<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
                <router-link :to="all_routes.tasks" class="hover:text-primary">Tasks</router-link>
                <i class="ph ph-caret-right text-[10px]"></i> <span>Design Employee Dashboard</span>
            </div>

            <div class="grid grid-cols-12 gap-3">

                <div class="col-span-12 lg:col-span-4">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <p class="text-sm text-default mb-2">#TSK0020</p>
                        <h1 class="text-base font-semibold text-title mb-4">Design Employee Dashboard</h1>
                        <div class="flex items-center gap-1">
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        </div>

                        <div class="text-sm text-default space-y-4 pt-5 mt-5 border-t border-border-color">
                            <div class="flex justify-between">
                                <span>Project</span>
                                <span class="text-gray-900 font-semibold">Office Management App</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Assignee</span>
                                <div class="flex items-center gap-2">
                                    <img src="@/assets/img/avatar/avatar-03.jpg" class="size-5 rounded-full shrink-0" alt="Ethan Walker">
                                    <span class="text-gray-900 font-semibold">Ethan Walker</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Reporter</span>
                                <div class="flex items-center gap-2">
                                    <img src="@/assets/img/avatar/avatar-12.jpg" class="size-5 rounded-full shrink-0" alt="Harper Scott">
                                    <span class="text-gray-900 font-semibold">Harper Scott</span>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <span>Start Date</span>
                                <span class="text-gray-900 font-semibold">11 Sep 2025</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Due Date</span>
                                <span class="text-gray-900 font-semibold">12 Sep 2025</span>
                            </div>
                        </div>
                        <div class="pt-3 mt-3 border-t border-border-color">
                            <p class="text-sm font-semibold text-title mb-3">Tags</p>
                            <div class="flex flex-wrap items-center gap-1">
                                <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">UI/UX</span>
                                <span class="text-[11px] bg-purple-transparent text-purple px-2 py-0.5 rounded">Dashboard</span>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Design</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-8 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-sm font-semibold text-title mb-3">Description</h2>
                        <p class="text-sm text-default mb-2">Design a clean and responsive employee dashboard for the Office Management App. The dashboard should give employees a quick overview of their attendance, leave balance, upcoming holidays and payroll summary in a single view.</p>
                        <p class="text-sm text-default mb-0">Follow the existing design system for colors, typography and spacing. Include widgets for announcements and pending approvals, and make sure the layout works well on mobile screens.</p>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-sm font-semibold text-title mb-3">Subtasks</h2>
                        <div class="space-y-2">
                            <div class="flex items-center gap-2 border border-border-color rounded-md p-2">
                                <input type="checkbox" class="shrink-0 border-border-color rounded-sm text-primary focus:ring-primary checked:border-primary disabled:opacity-50 disabled:pointer-events-none" id="subtask-one" checked>
                                <label for="subtask-one" class="text-sm text-gray-900">Create wireframes for dashboard layout</label>
                            </div>
                            <div class="flex items-center gap-2 border border-border-color rounded-md p-2">
                                <input type="checkbox" class="shrink-0 border-border-color rounded-sm text-primary focus:ring-primary checked:border-primary disabled:opacity-50 disabled:pointer-events-none" id="subtask-two" checked>
                                <label for="subtask-two" class="text-sm text-gray-900">Design attendance and leave widgets</label>
                            </div>
                            <div class="flex items-center gap-2 border border-border-color rounded-md p-2">
                                <input type="checkbox" class="shrink-0 border-border-color rounded-sm text-primary focus:ring-primary checked:border-primary disabled:opacity-50 disabled:pointer-events-none" id="subtask-three">
                                <label for="subtask-three" class="text-sm text-gray-900">Design payroll summary card</label>
                            </div>
                            <div class="flex items-center gap-2 border border-border-color rounded-md p-2">
                                <input type="checkbox" class="shrink-0 border-border-color rounded-sm text-primary focus:ring-primary checked:border-primary disabled:opacity-50 disabled:pointer-events-none" id="subtask-four">
                                <label for="subtask-four" class="text-sm text-gray-900">Prepare mobile responsive layout</label>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-sm font-semibold text-title mb-3">Comments</h2>
                        <div class="space-y-3">
                            <div class="flex gap-3 pb-3 border-b border-border-color">
                                <img src="@/assets/img/avatar/avatar-12.jpg" class="size-8 rounded-full shrink-0" alt="Harper Scott">
                                <div class="flex-1">
                                    <div class="flex items-center justify-between gap-2 mb-1">
                                        <p class="text-sm font-semibold text-title mb-0">Harper Scott</p>
                                        <span class="text-[11px] text-default">11 Sep 2025, 09:45 AM</span>
                                    </div>
                                    <p class="text-sm text-default mb-0">Please keep the layout consistent with the admin dashboard. The attendance widget should be the first thing employees see.</p>
                                </div>
                            </div>
                            <div class="flex gap-3 pb-3 border-b border-border-color">
                                <img src="@/assets/img/avatar/avatar-03.jpg" class="size-8 rounded-full shrink-0" alt="Ethan Walker">
                                <div class="flex-1">
                                    <div class="flex items-center justify-between gap-2 mb-1">
                                        <p class="text-sm font-semibold text-title mb-0">Ethan Walker</p>
                                        <span class="text-[11px] text-default">11 Sep 2025, 11:20 AM</span>
                                    </div>
                                    <p class="text-sm text-default mb-0">Got it. Wireframes are ready for review, I have shared them in the project folder. Starting on the leave widget next.</p>
                                </div>
                            </div>
                            <div class="flex gap-3 pb-3 border-b border-border-color">
                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-8 rounded-full shrink-0" alt="Madison Clark">
                                <div class="flex-1">
                                    <div class="flex items-center justify-between gap-2 mb-1">
                                        <p class="text-sm font-semibold text-title mb-0">Madison Clark</p>
                                        <span class="text-[11px] text-default">11 Sep 2025, 03:05 PM</span>
                                    </div>
                                    <p class="text-sm text-default mb-0">Wireframes look great. One suggestion - add a quick link to pending approvals near the announcements widget.</p>
                                </div>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Add Comment</label>
                                <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Write a comment..."></textarea>
                                <div class="flex justify-end mt-2">
                                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Post Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-sm font-semibold text-title mb-3">Activity</h2>
                        <div class="space-y-3">
                            <div class="flex gap-3 pb-3 border-b border-border-color">
                                <div class="size-8 rounded-full bg-success-transparent flex items-center justify-center flex-shrink-0"><i class="ph-duotone ph-plus-circle text-success"></i></div>
                                <div class="flex-1">
                                    <p class="text-sm font-semibold text-title mb-1">Task created</p>
                                    <p class="text-[11px] text-default mb-0">11 Sep 2025, 09:00 AM · Created by Harper Scott</p>
                                </div>
                            </div>
                            <div class="flex gap-3 pb-3 border-b border-border-color">
                                <div class="size-8 rounded-full bg-info-transparent flex items-center justify-center flex-shrink-0"><i class="ph-duotone ph-user-plus text-info"></i></div>
                                <div class="flex-1">
                                    <p class="text-sm font-semibold text-title mb-1">Assignee updated</p>
                                    <p class="text-[11px] text-default mb-0">11 Sep 2025, 09:10 AM · Assigned to Ethan Walker</p>
                                </div>
                            </div>
                            <div class="flex gap-3 pb-3 border-b border-border-color">
                                <div class="size-8 rounded-full bg-warning-transparent flex items-center justify-center flex-shrink-0"><i class="ph-duotone ph-note text-warning"></i></div>
                                <div class="flex-1">
                                    <p class="text-sm font-semibold text-title mb-1">Comment added</p>
                                    <p class="text-[11px] text-default mb-0">11 Sep 2025, 11:20 AM · Ethan Walker shared the wireframes</p>
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <div class="size-8 rounded-full bg-purple-transparent flex items-center justify-center flex-shrink-0"><i class="ph-duotone ph-check-circle text-purple"></i></div>
                                <div class="flex-1">
                                    <p class="text-sm font-semibold text-title mb-1">Subtask completed</p>
                                    <p class="text-[11px] text-default mb-0">11 Sep 2025, 04:30 PM · Design attendance and leave widgets</p>
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
