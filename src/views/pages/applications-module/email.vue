<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">
            

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Email</h1>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 w-full">

                <!-- Sidebar -->
                <div class="xl:col-span-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <router-link :to="all_routes.emailCompose" class="btn w-full bg-primary text-white border border-primary inline-flex items-center justify-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer mb-4">
                            <i class="ph-duotone ph-diamond"></i> Compose New
                        </router-link>
                        <div class="mb-4 hs-accordion active">
                            <div class="flex items-center justify-between hs-accordion-toggle" aria-expanded="true" aria-controls="accordion-one">
                                <p class="text-sm font-semibold text-title mb-0">Mail</p>
                                <button type="button" class="text-default hover:text-primary cursor-pointer"><i class="ph ph-caret-down"></i></button>
                            </div>
                            <div id="accordion-one" class="overflow-hidden transition-all duration-300 hs-accordion-content space-y-1 pt-2">
                                <a href="#" class="flex items-center justify-between gap-2 px-3 py-2 rounded-md bg-light-500 text-primary text-sm font-semibold border border-border-color"><span class="inline-flex items-center gap-2"><i class="ph-duotone ph-tray"></i> Inbox</span><span class="size-5 rounded-full bg-danger text-white text-[10px] flex items-center justify-center">6</span>
                                </a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-star"></i> Starred</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-alarm"></i> Snoozed</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-paper-plane-right"></i> Sent</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-note-pencil"></i> Drafts</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-flag"></i> Important</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-chat-circle"></i> Chats</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-clock"></i> Scheduled</a>
                            </div>
                        </div>
                        <div class="mb-4 pt-3 border-t border-border-color hs-accordion active">
                            <div class="flex items-center justify-between hs-accordion-toggle" aria-expanded="true" aria-controls="accordion-two">
                                <p class="text-sm font-semibold text-title mb-0">Others</p><button type="button" class="text-default hover:text-primary cursor-pointer"><i class="ph ph-caret-down"></i></button></div>
                            <div id="accordion-two" class="overflow-hidden transition-all duration-300 hs-accordion-content space-y-1 pt-2">
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-envelope"></i> All Emails</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-warning-octagon"></i> Spam</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-trash"></i> Trash</a>
                            </div>
                        </div>
                        <div class="pt-3 border-t border-border-color hs-accordion active">
                            <div class="flex items-center justify-between hs-accordion-toggle" aria-expanded="true" aria-controls="accordion-three">
                                <p class="text-sm font-semibold text-title mb-0">Labels</p><button type="button" class="text-default hover:text-primary cursor-pointer"><i class="ph ph-caret-down"></i></button></div>
                            <div id="accordion-three" class="overflow-hidden transition-all duration-300 hs-accordion-content space-y-1 pt-2">
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-success"></span> Personal</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-orange"></span> Client</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-info"></span> Marketing</a>
                                <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><span class="size-2 rounded-full bg-info"></span> Office</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Email Table -->
                <div class="xl:col-span-9">

                    <div class="bg-white border border-border-color rounded-md p-4">
                        <!-- Toolbar -->
                        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                            <div class="flex items-center gap-2 ps-2">
                                <label class="inline-flex items-center">
                                    <input type="checkbox" id="select-all" class="size-4 rounded border-border-color text-primary focus:ring-0">
                                </label>
                                <button type="button" class="size-8 rounded-md border border-border-color bg-white inline-flex items-center justify-center hover:bg-light cursor-pointer"><i class="ph-duotone ph-archive"></i></button>
                                <button type="button" class="size-8 rounded-md border border-border-color bg-white inline-flex items-center justify-center hover:bg-light cursor-pointer"><i class="ph-duotone ph-trash"></i></button>
                                <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-8 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light  hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                        <i class="icon-ellipsis-vertical font-normal"></i>
                                    </button>
                                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                        <div class="p-2 space-y-1">
                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                Unread
                                            </a>
                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                Mark All Read
                                            </a>
                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                Spam
                                            </a>
                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                Delete All
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative max-w-xs">
                                <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                                <input type="text" class="w-full px-3 pe-8 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Search">
                            </div>
                        </div>

                        <!-- Email list -->
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse">
                                <tbody>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-04.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Sarah, me <span class="text-default font-normal">(7)</span></p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">[Reminder] Client Meeting at 3 PM Today</span>
                                                <span class="text-default ms-1">Hi John, just a quick reminder about our meeting with ABC Corp at 3 PM...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">6:15 PM</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-05.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Mike, team <span class="text-default font-normal">(5)</span></p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">Submit Project Proposal</span>
                                                <span class="text-default ms-1">Hi Team, please ensure that your sections of the project proposal are sub...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">5:00 PM</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-06.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Anna</p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0 flex items-center">
                                                <span class="font-semibold shrink-0">[Team Outing Next Friday]</span>
                                                <span class="text-[10px] bg-warning text-white px-1.5 py-0.5 rounded ms-1 shrink-0">Marketing</span>
                                                <span class="text-default ms-1 truncate">Hello Everyone, we're planning a team outing next Friday. Please RSVP by...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">1:00 PM</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center  fav-icon cursor-pointer"><i class="ph-fill ph-star text-warning"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-07.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Tom</p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0 flex items-center">
                                                <span class="font-semibold shrink-0">[Update] New Design Guidelines Available</span>
                                                <span class="text-[10px] bg-orange text-white px-1.5 py-0.5 rounded ms-1 shrink-0">Client</span>
                                                <span class="text-default ms-1 truncate">Hi all, the new design guidelines have been finalized and are now available...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">10:30 AM</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-08.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Lisa</p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">[Event] Webinar on Social Media Strategy</span>
                                                <span class="text-default ms-1">Don't forget to register for our webinar covering advanced social media stra...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">09:45 AM</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 block" checked>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-09.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Jason, me <span class="text-default font-normal">(9)</span></p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">[Reminder] Sales Targets Review</span>
                                                <span class="text-default ms-1">Hey Team, please prepare your sales reports for the review meeting schedul...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">Yesterday</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-10.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Emily</p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0 flex items-center">
                                                <span class="font-semibold shrink-0">[Alert] System Maintenance Scheduled</span>
                                                <span class="text-[10px] bg-pink text-white px-1.5 py-0.5 rounded ms-1 shrink-0">Personal</span>
                                                <span class="text-default ms-1 truncate">Dear Team, please be aware that there will be system maintenance this Satu...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">Yesterday</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-01.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Kevin</p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">Expense Reports Due</span>
                                                <span class="text-default ms-1">Hi everyone, please submit all expense reports for Q3 by the end of this week...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">Yesterday</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-04.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Rachel</p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">Beta Testing</span>
                                                <span class="text-default ms-1">Hi Team, your feedback on the latest beta release is crucial. Please complete...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">12 Jul</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-05.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">David</p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">[Reminder] Contract Renewals</span>
                                                <span class="text-default ms-1">Attention all, please ensure that all contract renewals are reviewed and...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">12 Jul</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-06.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Nina, me <span class="text-default font-normal">(9)</span></p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">[Notice] Policy Changes</span>
                                                <span class="text-default ms-1">Hello Team, we have implemented some policy changes effective immediately...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">11 Jul</p>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color hover:bg-light cursor-pointer">
                                        <td class="py-2.5 px-2 w-1">
                                            <input type="checkbox" class="email-checkbox size-4 rounded border-border-color text-primary focus:ring-0 block">
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <button type="button" class="size-6 inline-flex items-center justify-center text-default fav-icon cursor-pointer"><i class="ph ph-star"></i></button>
                                        </td>
                                        <td class="py-2.5 px-2 w-1">
                                            <div class="size-7">
                                                <img src="@/assets/img/avatar/avatar-07.jpg" class="rounded-full border border-border-color" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 w-24">
                                            <p class="text-sm font-semibold text-title truncate mb-0">Mark</p>
                                        </td>
                                        <td class="py-2.5 px-2 max-w-40">
                                            <p class="text-sm text-title truncate mb-0">
                                                <span class="font-semibold">[Action Needed] Inventory Assessment</span>
                                                <span class="text-default ms-1">Team, an inventory assessment is required before our next shipment. Please...</span>
                                            </p>
                                        </td>
                                        <td class="py-2.5 px-2 w-1 text-end whitespace-nowrap">
                                            <p class="text-[11px] text-default mb-0">11 Jul</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>									
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
