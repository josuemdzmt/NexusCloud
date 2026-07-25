<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
                <router-link :to="all_routes.leads" class="hover:text-primary">Leads</router-link> 
                <i class="ph ph-caret-right text-[10px]"></i>
                    <span>John Smith</span></div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-4">
                    <div class="bg-white border border-border-color rounded-md p-4 text-center">
                        <img src="@/assets/img/avatar/avatar-06.jpg" class="size-20 rounded-full mx-auto mb-3" alt="avatar">
                        <h1 class="text-base font-semibold text-title mb-1">John Smith</h1>
                        <p class="text-sm text-default mb-3">TechCorp Inc</p>
                        <div class="flex justify-center gap-2 mb-3">
                            <button class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer"><i class="ph ph-envelope"></i></button>
                            <button class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer"><i class="ph ph-phone"></i></button>
                            <button class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer"><i class="ph ph-chats"></i></button>
                        </div>
                        <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
                            <div class="flex justify-between"><span>Email</span><span class="text-gray-900 font-semibold">john@techcorp.com</span></div>
                            <div class="flex justify-between"><span>Phone</span><span class="text-gray-900 font-semibold">+1 555 0173</span></div>
                            <div class="flex justify-between"><span>Source</span><span class="text-gray-900 font-semibold">Website</span></div>
                            <div class="flex justify-between"><span>Est. Value</span><span class="text-gray-900 font-semibold">$15,000</span></div>
                            <div class="flex justify-between"><span>Stage</span><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">New Lead</span> </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-8">
                    <div class="bg-white border border-border-color rounded-md">
                        <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                            <button type="button" class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden active" id="activity-tab" aria-selected="true" data-hs-tab="#activity-pane" aria-controls="activity-pane" role="tab">Activity</button>
                            <button type="button" class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="notes-tab" aria-selected="false" data-hs-tab="#notes-pane" aria-controls="notes-pane" role="tab">Notes</button>
                            <button type="button" class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="calls-tab" aria-selected="false" data-hs-tab="#calls-pane" aria-controls="calls-pane" role="tab">Calls</button>
                            <button type="button" class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="files-tab" aria-selected="false" data-hs-tab="#files-pane" aria-controls="files-pane" role="tab">Files</button>
                            <button type="button" class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="email-tab" aria-selected="false" data-hs-tab="#email-pane" aria-controls="email-pane" role="tab">Email</button>
                        </nav>
                        <div class="p-4">
                            <!-- Tab 1 -->
                            <div id="activity-pane" role="tabpanel" aria-labelledby="activity-tab">
                                <h2 class="text-sm font-semibold text-title mb-5">Recent Activity</h2>
                                <div class="space-y-3">
                                    <div class="flex gap-3 pb-3 border-b border-border-color">
                                        <div class="size-8 rounded-full bg-success-transparent flex items-center justify-center flex-shrink-0"> <i class="ph-duotone ph-user text-success"></i>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Lead created</p>
                                            <p class="text-[11px] text-default mb-0">21 May 2026 · Website form submission</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 pb-3 border-b border-border-color">
                                        <div class="size-8 rounded-full bg-info-transparent flex items-center justify-center flex-shrink-0"> <i class="ph-duotone ph-envelope text-info"></i>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Welcome email sent</p>
                                            <p class="text-[11px] text-default mb-0">21 May 2026 · Auto-sent via campaign</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 pb-3 border-b border-border-color">
                                        <div class="size-8 rounded-full bg-warning-transparent flex items-center justify-center flex-shrink-0"> <i class="ph-duotone ph-calendar-check text-warning"></i></div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Follow-up scheduled</p>
                                            <p class="text-[11px] text-default mb-0">Discovery call on 28 May 2026</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 2 -->
                            <div id="notes-pane" class="hidden" role="tabpanel" aria-labelledby="notes-tab">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <h2 class="text-sm font-semibold text-title mb-0">Notes</h2>
                                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-note-modal"><i class="ph ph-plus"></i> Add Note</button>
                                </div>
                                <div class="space-y-3">
                                    <div class="border border-border-color rounded-md p-3">
                                        <div class="flex items-start justify-between gap-2">
                                            <p class="text-sm font-semibold text-title mb-1">Qualified via website form
                                            </p>
                                            <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-note-modal">
                                                            <i class="ph ph-pencil-simple-line"></i> Edit
                                                        </a>
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"><i class="ph ph-trash"></i> Delete</a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-[11px] text-default mb-2">John requested a quote through the pricing page. Budget fits the starter plan and intent looks high.</p>
                                        <div class="flex items-center gap-2 text-[11px] text-default">
                                            <img src="@/assets/img/avatar/avatar-05.jpg" class="size-5 rounded-full shrink-0" alt="avatar">
                                            <span class="text-gray-900">Ethan Walker</span>
                                            <span>·</span>
                                            <span>21 May 2026</span>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3">
                                        <div class="flex items-start justify-between gap-2">
                                            <p class="text-sm font-semibold text-title mb-1">Decision maker confirmed</p>
                                            <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-note-modal">
                                                            <i class="ph ph-pencil-simple-line"></i> Edi
                                                            t</a>
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"><i class="ph ph-trash"></i> Delete</a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-[11px] text-default mb-2">john is the IT manager and owns the buying decision. Wants a product walkthrough before committing.</p>
                                        <div class="flex items-center gap-2 text-[11px] text-default">
                                            <img src="@/assets/img/avatar/avatar-12.jpg" class="size-5 rounded-full shrink-0" alt="avatar">
                                            <span class="text-gray-900">Sophia Turner</span>
                                            <span>·</span>
                                            <span>22 May 2026</span>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3">
                                        <div class="flex items-start justify-between gap-2">
                                            <p class="text-sm font-semibold text-title mb-1">Competitor comparison requested</p>
                                            <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-note-modal"><i class="ph ph-pencil-simple-line"></i> Edit</a>
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal"><i class="ph ph-trash"></i> Delete</a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-[11px] text-default mb-2">Prospect is also evaluating two competitors. Send the comparison sheet before the discovery call. </p>
                                        <div class="flex items-center gap-2 text-[11px] text-default">
                                            <img src="@/assets/img/avatar/avatar-08.jpg" class="size-5 rounded-full shrink-0" alt="avatar">
                                            <span class="text-gray-900">Daniel Reed</span>
                                            <span>·</span>
                                            <span>23 May 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 3 -->
                            <div id="calls-pane" class="hidden" role="tabpanel" aria-labelledby="calls-tab">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <h2 class="text-sm font-semibold text-title mb-0">Calls</h2>
                                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-call-modal"><i class="ph ph-plus"></i> Add Call</button>
                                </div>
                                <div class="space-y-3">
                                    <div class="border border-border-color rounded-md p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                        <div class="size-8 rounded-full bg-success-transparent flex items-center justify-center flex-shrink-0"> <i class="ph-duotone ph-phone-incoming text-success"></i> </div>
                                        <div class="flex flex-wrap items-center gap-2 mb-1 w-full">
                                            <div class="flex flex-wrap items-start sm:items-center gap-2 mb-1 w-full">
                                                <p class="text-sm font-semibold text-title mb-0">John Smith </p> 
                                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Incoming</span> 
                                                <span class="text-[11px] text-default m-start sm:ms-auto">
                                                    23 May 2026, 10:15 AM
                                                </span> 
                                            </div>
                                            <p class="text-[11px] text-default mb-1">John asked about onboarding support and trial extension options.</p>
                                            <span class="text-[11px] text-default inline-flex items-center gap-1">
                                                <i class="ph ph-timer"></i> 08 min
                                            </span> 
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                        <div class="size-8 rounded-full bg-info-transparent flex items-center justify-center flex-shrink-0">
                                            <i class="ph-duotone ph-phone-outgoing text-info"></i>
                                        </div>
                                        <div class="flex flex-wrap items-center gap-2 mb-1 w-full">
                                            <div class="flex flex-wrap items-start sm:items-center gap-2 mb-1 w-full">
                                                <p class="text-sm font-semibold text-title mb-0">John Smith </p>
                                                <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Outgoing</span>
                                                <span class="text-[11px] text-default m-start sm:ms-auto">
                                                    22 May 2026, 3:45 PM
                                                </span>
                                            </div>
                                            <p class="text-[11px] text-default mb-1">Qualification call. Confirmed budget range and current tooling.</p>
                                            <span class="text-[11px] text-default inline-flex items-center gap-1">
                                                <i class="ph ph-timer"></i> 12 min
                                            </span>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                        <div class="size-8 rounded-full bg-danger-transparent flex items-center justify-center flex-shrink-0">
                                            <i class="ph-duotone ph-phone-x text-danger"></i>
                                        </div>
                                        <div class="flex flex-wrap items-center gap-2 mb-1 w-full">
                                            <div class="flex flex-wrap items-start sm:items-center gap-2 mb-1 w-full">
                                                <p class="text-sm font-semibold text-title mb-0">John Smith </p>
                                                <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Missed</span>
                                                <span class="text-[11px] text-default m-start sm:ms-auto">
                                                    14 May 2026,
                                                    11:15 AM
                                                </span>
                                            </div>
                                            <p class="text-[11px] text-default mb-1">No answer. Sent a follow-up email to reschedule the discovery call.</p>
                                            <span class="text-[11px] text-default inline-flex items-center gap-1">
                                                <i class="ph ph-timer"></i> 0 min
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 4 -->
                            <div id="files-pane" class="hidden" role="tabpanel" aria-labelledby="files-tab">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <h2 class="text-sm font-semibold text-title mb-0">Files</h2>
                                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#create-file-modal"><i class="ph ph-plus"></i> Create New File
                                    </button>
                                </div>
                                <div class="space-y-3">
                                    <div class="border border-border-color rounded-md p-3 flex flex-wrap items-center sm:items-center gap-3">
                                        <div class="size-8 rounded-md bg-danger-transparent flex items-center justify-center flex-shrink-0"> 
                                            <i class="ph-duotone ph-file-pdf text-danger">
                                        </i>
                                    </div>
                                        <div class="flex flex-col sm:flex-1 min-w-0">
                                            <p class="text-sm font-semibold text-title mb-0 truncate">Lead Qualification Form.pdf</p>
                                            <p class="text-[11px] text-default mb-0">2.4 MB · 20 May 2026</p>
                                        </div>
                                        <div class="flex -space-x-2"><img src="@/assets/img/avatar/avatar-05.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                            <img src="@/assets/img/avatar/avatar-12.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Download"><i class="ph ph-download-simple"></i>
                                            </button>
                                            <button type="button" class="size-7 rounded-md border border-border-color text-danger flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Delete" data-hs-overlay="#delete-modal"><i class="ph ph-trash">
                                            </i>
                                        </button>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3 flex flex-wrap items-center sm:items-center gap-3">
                                        <div class="size-8 rounded-md bg-success-transparent flex items-center justify-center flex-shrink-0"> 
                                            <i class="ph-duotone ph-file-xls text-success">
                                        </i>
                                    </div>
                                        <div class="flex flex-col sm:flex-1 min-w-0">
                                            <p class="text-sm font-semibold text-title mb-0 truncate">Product Comparison Sheet.xlsx</p>
                                            <p class="text-[11px] text-default mb-0">1.3 MB · 23 May 2026</p>
                                        </div>
                                        <div class="flex -space-x-2"><img src="@/assets/img/avatar/avatar-08.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Download"><i class="ph ph-download-simple"></i>
                                            </button>
                                            <button type="button" class="size-7 rounded-md border border-border-color text-danger flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Delete" data-hs-overlay="#delete-modal">
                                                <i class="ph ph-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3 flex flex-wrap items-center sm:items-center gap-3">
                                        <div class="size-8 rounded-md bg-info-transparent flex items-center justify-center flex-shrink-0"> <i class="ph-duotone ph-file-doc text-info"></i>
                                        </div>
                                        <div class="flex flex-col sm:flex-1 min-w-0">
                                            <p class="text-sm font-semibold text-title mb-0 truncate">Company Intro Deck.docx</p>
                                            <p class="text-[11px] text-default mb-0">2.1 MB · 24 May 2026</p>
                                        </div>
                                        <div class="flex -space-x-2"><img src="@/assets/img/avatar/avatar-12.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                            <img src="@/assets/img/avatar/avatar-05.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar"></div>
                                        <div class="flex items-center gap-2">
                                            <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Download"><i class="ph ph-download-simple"></i></button>
                                            <button type="button" class="size-7 rounded-md border border-border-color text-danger flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Delete" data-hs-overlay="#delete-modal">
                                                <i class="ph ph-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 5 -->
                            <div id="email-pane" class="hidden" role="tabpanel" aria-labelledby="email-tab">
                                <div class="text-center py-8">
                                    <div class="size-14 rounded-full bg-primary-transparent flex items-center justify-center mx-auto mb-3"> 
                                        <i class="ph-duotone ph-envelope text-primary text-2xl"></i>
                                    </div>
                                    <h2 class="text-sm font-semibold text-title mb-1">
                                        No email account connected
                                    </h2>
                                    <p class="text-sm text-default mb-3">
                                        Connect an email account to send, receive and track emails with Alexander right from this page.
                                    </p>
                                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#connect-account-modal"><i class="ph ph-plugs-connected"></i> Connect Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main> 

    <lead-details-modal></lead-details-modal>
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
