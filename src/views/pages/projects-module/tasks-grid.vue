<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">

                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Tasks</h1>

                <div class="flex items-center flex-wrap gap-2">
                    <div class="inline-flex bg-white border border-border-color rounded-md p-1 gap-1">
                        <router-link :to="all_routes.tasks" class="btn-sm bg-white text-gray-900 hover:bg-light inline-flex items-center gap-1 cursor-pointer"><i class="ph-duotone ph-rows"></i></router-link>
                        <router-link :to="all_routes.tasksGrid" class="btn-sm bg-dark text-white inline-flex items-center gap-1 cursor-pointer"><i class="ph-duotone ph-grid-four"></i></router-link>
                    </div>

                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i>Print</button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i>
                        </button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1">
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as PDF
                                </a>
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    Export as Excel
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-modal"><i class="ph ph-plus"></i> Add New</a>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Design Employee Dashboard</router-link>
                            <p class="text-sm text-default mb-0">Office Management App</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Create a clean employee dashboard with attendance, leave and payroll widgets.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full shrink-0" alt="Ethan Walker">
                            <span class="text-sm">Ethan Walker</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 12 Sep 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 4</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 2</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Build Patient Registration Form</router-link>
                            <p class="text-sm text-default mb-0">Clinic Management</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Build a multi-step patient registration form with insurance and history details.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full shrink-0" alt="Madison Clark">
                            <span class="text-sm">Madison Clark</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 06 Sep 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 2</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 1</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Develop Quiz &amp; Assessment</router-link>
                            <p class="text-sm text-default mb-0">Educational Platform</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Develop quiz and assessment modules with timed tests and auto grading.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full shrink-0" alt="James Harris">
                            <span class="text-sm">James Harris</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 28 Aug 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 6</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 3</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Integrate Voice &amp; Video Calling</router-link>
                            <p class="text-sm text-default mb-0">Chat &amp; Call Mobile App</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low</span>
                            <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Inactive</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Integrate one-to-one voice and video calling with call history and notifications.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full shrink-0" alt="Avery Thompson">
                            <span class="text-sm">Avery Thompson</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 17 Aug 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 3</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 1</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Design Homepage</router-link>
                            <p class="text-sm text-default mb-0">Travel Planning Website</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Design a responsive homepage with destination search and featured packages.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full shrink-0" alt="Benjamin Wright">
                            <span class="text-sm">Benjamin Wright</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 26 Jul 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 5</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 2</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Build Service Listing Page</router-link>
                            <p class="text-sm text-default mb-0">Service Booking Software</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Build a service listing page with category filters, ratings and pricing.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-08.jpg" class="size-7 rounded-full shrink-0" alt="Chloe Mitchell">
                            <span class="text-sm">Chloe Mitchell</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 13 Jul 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 7</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 4</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Integrate Payment Gateway</router-link>
                            <p class="text-sm text-default mb-0">Hotel Booking App</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Low</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Integrate a secure payment gateway with card, UPI and wallet support.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-09.jpg" class="size-7 rounded-full shrink-0" alt="Daniel Roberts">
                            <span class="text-sm">Daniel Roberts</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 24 Jun 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 2</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 1</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Build Vehicle Inventory</router-link>
                            <p class="text-sm text-default mb-0">Car &amp; Bike Rental Software</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Medium</span>
                            <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Inactive</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Build a vehicle inventory with availability status, pricing and documents.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-10.jpg" class="size-7 rounded-full shrink-0" alt="Grace Adams">
                            <span class="text-sm">Grace Adams</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 08 Jun 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 1</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 2</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <div class="flex-1"><router-link :to="all_routes.taskDetails" class="text-sm font-semibold text-title hover:text-primary">Add Order Tracking Feature</router-link>
                            <p class="text-sm text-default mb-0">Food Order App</p>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">High</span>
                            <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Active</span>
                        </div>
                    </div>
                    <p class="text-sm text-default mb-3">Add live order tracking with delivery partner location and ETA updates.</p>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border-color">
                        <div class="flex items-center gap-2">
                            <img src="@/assets/img/avatar/avatar-11.jpg" class="size-7 rounded-full shrink-0" alt="Hendrita Bennett">
                            <span class="text-sm">Hendrita Bennett</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-default">
                            <span class="flex items-center gap-1"><i class="ph ph-calendar-blank"></i> 29 May 2025</span>
                            <span class="flex items-center gap-1"><i class="ph ph-chat-circle"></i> 8</span>
                            <span class="flex items-center gap-1"><i class="ph ph-paperclip"></i> 3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <tasks-grid-modal></tasks-grid-modal>
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
