<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0"> 
            <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3"><router-link :to="all_routes.deals" class="hover:text-primary">Deals</router-link> <i class="ph ph-caret-right text-[10px]"></i> 
                <span>Enterprise License - TechCorp</span>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-4">
                    <div class="bg-white border border-border-color rounded-md p-4 text-center">
                        <div class="text-start"> 
                            <h1 class="text-base font-semibold text-title mb-1">Enterprise License - TechCorp</h1>
                            <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded mb-3 inline-block">Proposal Stage</span>
                        </div>
                        <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
                            <div class="flex justify-between"><span>Customer</span>
                                <span class="text-gray-900 font-semibold">TechCorp Inc</span>
                            </div>
                            <div class="flex justify-between"><span>Value</span>
                                <span class="text-gray-900 font-semibold">$45,000</span>
                            </div>
                            <div class="flex justify-between"><span>Probability</span>
                                <span class="text-gray-900 font-semibold">60%</span>
                            </div>
                            <div class="flex justify-between"><span>Close Date</span>
                                <span class="text-gray-900 font-semibold">30 Jun 2026</span>
                            </div>
                            <div class="flex justify-between"><span>Owner</span>
                                <span class="text-gray-900 font-semibold">Ethan Walker</span>
                            </div>
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
                                        <div class="size-8 rounded-full bg-success-transparent flex items-center justify-center flex-shrink-0"> 
                                            <i class="ph-duotone ph-handshake text-success"></i>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Deal moved to Proposal</p>
                                            <p class="text-[11px] text-default mb-0">21 May 2026 · Proposal document attached</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 pb-3 border-b border-border-color">
                                        <div class="size-8 rounded-full bg-info-transparent flex items-center justify-center flex-shrink-0"> <i class="ph-duotone ph-phone text-info"></i></div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Discovery call completed</p>
                                            <p class="text-[11px] text-default mb-0">18 May 2026 · 45 min call</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-3 pb-3 border-b border-border-color">
                                        <div class="size-8 rounded-full bg-warning-transparent flex items-center justify-center flex-shrink-0"> <i class="ph-duotone ph-calendar-plus text-warning"></i></div>
                                        <div class="flex-1">
                                            <p class="text-sm font-semibold text-title mb-1">Demo scheduled</p>
                                            <p class="text-[11px] text-default mb-0">25 May 2026, 11:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Tab 2 -->
                            <div id="notes-pane" class="hidden" role="tabpanel" aria-labelledby="notes-tab">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <h2 class="text-sm font-semibold text-title mb-0">Notes</h2>
                                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-note-modal">
                                        <i class="ph ph-plus"></i> Add Note
                                    </button>
                                </div>
                                <div class="space-y-3">
                                    <div class="border border-border-color rounded-md p-3">
                                        <div class="flex items-start justify-between gap-2">
                                            <p class="text-sm font-semibold text-title mb-1">Proposal sent for review</p>
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
                                        <p class="text-[11px] text-default mb-2">Enterprise license proposal sent to TechCorp procurement. Pricing locked for 30 days.</p>
                                        <div class="flex items-center gap-2 text-[11px] text-default">
                                            <img src="@/assets/img/avatar/avatar-05.jpg" class="size-5 rounded-full shrink-0" alt="avatar">
                                            <span class="text-gray-900">Ethan Walker</span>
                                            <span>·</span>
                                            <span>19 May 2026</span>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3">
                                        <div class="flex items-start justify-between gap-2">
                                            <p class="text-sm font-semibold text-title mb-1">Discount approval needed</p>
                                            <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-note-modal">
                                                            <i class="ph ph-pencil-simple-line"></i> Edit
                                                        </a>
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                            <i class="ph ph-trash"></i> Delete
                                                        </a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-[11px] text-default mb-2">TechCorp asked for a 10% multi-year discount. Needs management approval before the contract revision.</p>
                                        <div class="flex items-center gap-2 text-[11px] text-default">
                                            <img src="@/assets/img/avatar/avatar-12.jpg" class="size-5 rounded-full shrink-0" alt="avatar">
                                            <span class="text-gray-900">Sophia Turner</span>
                                            <span>·</span>
                                            <span>15 May 2026</span>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3">
                                        <div class="flex items-start justify-between gap-2">
                                            <p class="text-sm font-semibold text-title mb-1">Legal review in progress</p>
                                            <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                    <i class="icon-ellipsis-vertical font-normal"></i>
                                                </button>
                                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                    <div class="p-2 space-y-1">
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#edit-note-modal">
                                                            <i class="ph ph-pencil-simple-line"></i> Edit
                                                        </a>
                                                        <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#" data-hs-overlay="#delete-modal">
                                                            <i class="ph ph-trash"></i> Delete
                                                        </a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-[11px] text-default mb-2">TechCorp legal team is reviewing the SLA terms. Expect feedback by end of next week. </p>
                                        <div class="flex items-center gap-2 text-[11px] text-default">
                                            <img src="@/assets/img/avatar/avatar-08.jpg" class="size-5 rounded-full shrink-0" alt="avatar">
                                            <span class="text-gray-900">Daniel Reed</span>
                                            <span>·</span>
                                            <span>12 May 2026</span>
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
                                                <p class="text-sm font-semibold text-title mb-0">TechCorp Inc</p> 
                                                <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Incoming</span> 
                                                <span class="text-[11px] text-default m-start sm:ms-auto">
                                                    20 May 2026, 10:30 AM
                                                </span> 
                                            </div>
                                            <p class="text-[11px] text-default mb-1">Procurement requested revised payment terms for the proposal.</p>
                                            <span class="text-[11px] text-default inline-flex items-center gap-1">
                                                <i class="ph ph-timer"></i> 20 min
                                            </span> 
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                        <div class="size-8 rounded-full bg-info-transparent flex items-center justify-center flex-shrink-0">
                                            <i class="ph-duotone ph-phone-outgoing text-info"></i>
                                        </div>
                                        <div class="flex flex-wrap items-center gap-2 mb-1 w-full">
                                            <div class="flex flex-wrap items-start sm:items-center gap-2 mb-1 w-full">
                                                <p class="text-sm font-semibold text-title mb-0">TechCorp Inc </p>
                                                <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Outgoing</span>
                                                <span class="text-[11px] text-default m-start sm:ms-auto">
                                                    21 May 2026, 3:45 PM
                                                </span>
                                            </div>
                                            <p class="text-[11px] text-default mb-1">Discovery call. Mapped requirements for the enterprise rollout.</p>
                                            <span class="text-[11px] text-default inline-flex items-center gap-1">
                                                <i class="ph ph-timer"></i> 45 min
                                            </span>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                        <div class="size-8 rounded-full bg-danger-transparent flex items-center justify-center flex-shrink-0">
                                            <i class="ph-duotone ph-phone-x text-danger"></i>
                                        </div>
                                        <div class="flex flex-wrap items-center gap-2 mb-1 w-full">
                                            <div class="flex flex-wrap items-start sm:items-center gap-2 mb-1 w-full">
                                                <p class="text-sm font-semibold text-title mb-0">TechCorp Inc </p>
                                                <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Missed</span>
                                                <span class="text-[11px] text-default m-start sm:ms-auto">
                                                    22 May 2026, 3:00 PM
                                                </span>
                                            </div>
                                            <p class="text-[11px] text-default mb-1">No answer from the procurement lead. Left a voicemail about the demo schedule.</p>
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
                                            <i class="ph-duotone ph-file-pdf text-danger"></i>
                                        </div>
                                        <div class="flex flex-col sm:flex-1 min-w-0">
                                            <p class="text-sm font-semibold text-title mb-0 truncate">Enterprise Proposal.pdf</p>
                                            <p class="text-[11px] text-default mb-0">4.8 MB · 21 May 2026</p>
                                        </div>
                                        <div class="flex -space-x-2"><img src="@/assets/img/avatar/avatar-05.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                            <img src="@/assets/img/avatar/avatar-12.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Download">
                                                <i class="ph ph-download-simple"></i>
                                            </button>
                                            <button type="button" class="size-7 rounded-md border border-border-color text-danger flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Delete" data-hs-overlay="#delete-modal">
                                                <i class="ph ph-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3 flex flex-wrap items-center sm:items-center gap-3">
                                        <div class="size-8 rounded-md bg-success-transparent flex items-center justify-center flex-shrink-0"> 
                                            <i class="ph-duotone ph-file-xls text-success"></i>
                                        </div>
                                        <div class="flex flex-col sm:flex-1 min-w-0">
                                            <p class="text-sm font-semibold text-title mb-0 truncate">License Pricing Breakdown.xlsx</p>
                                            <p class="text-[11px] text-default mb-0">1.6 MB · 20 May 2026</p>
                                        </div>
                                        <div class="flex -space-x-2"><img src="@/assets/img/avatar/avatar-08.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Download">
                                                <i class="ph ph-download-simple"></i>
                                            </button>
                                            <button type="button" class="size-7 rounded-md border border-border-color text-danger flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Delete" data-hs-overlay="#delete-modal">
                                                <i class="ph ph-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="border border-border-color rounded-md p-3 flex flex-wrap items-center sm:items-center gap-3">
                                        <div class="size-8 rounded-md bg-info-transparent flex items-center justify-center flex-shrink-0"> 
                                            <i class="ph-duotone ph-file-doc text-info"></i>
                                        </div>
                                        <div class="flex flex-col sm:flex-1 min-w-0">
                                            <p class="text-sm font-semibold text-title mb-0 truncate">Draft Contract.docx</p>
                                            <p class="text-[11px] text-default mb-0">2.2 MB · 19 May 2026</p>
                                        </div>
                                        <div class="flex -space-x-2"><img src="@/assets/img/avatar/avatar-12.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                            <img src="@/assets/img/avatar/avatar-05.jpg" class="size-6 rounded-full border-2 border-white shrink-0" alt="avatar">
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <button type="button" class="size-7 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer" aria-label="Download">
                                                <i class="ph ph-download-simple"></i>
                                            </button>
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
                                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" data-hs-overlay="#connect-account-modal">
                                        <i class="ph ph-plugs-connected"></i> Connect Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main> 

    <deal-details-modal></deal-details-modal>
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
