<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Candidate Pipeline</h1>
                <div class="flex items-center gap-2">
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i>
                        </button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1">
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as PDF</a> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as Excel</a>
                            </div>
                        </div>
                    </div>
                    <router-link :to="all_routes.addJobRequisition" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer"><i class="ph ph-plus"></i> Add New</router-link>
                </div>
            </div>
            <div class="flex items-center flex-wrap gap-1 border-b border-border-color mb-4">
                <router-link :to="all_routes.recruitment" class="px-4 py-2 text-sm text-default hover:text-gray-900">Jobs</router-link>
                <router-link :to="all_routes.candidatePipline" class="px-4 py-2 text-sm font-semibold text-gray-900 border-b-2 border-primary -mb-px">Pipeline</router-link><router-link :to="all_routes.interviewScheduler" class="px-4 py-2 text-sm text-default hover:text-gray-900">Interviews</router-link>
                <router-link :to="all_routes.offerManagement" class="px-4 py-2 text-sm text-default hover:text-gray-900">Offers</router-link>
                <router-link :to="all_routes.onboarding" class="px-4 py-2 text-sm text-default hover:text-gray-900">Onboarding</router-link>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Applied</h2>
                        <span class="text-sm bg-info-transparent text-info px-2 py-0.5 rounded">12</span>
                    </div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">John Smith</p>
                            <p class="text-[11px] text-default">Senior React Dev</p>
                        </div>
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">Jane Doe</p>
                            <p class="text-[11px] text-default">UX Designer</p>
                        </div>
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">Mike Johnson</p>
                            <p class="text-[11px] text-default">DevOps Engineer</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Screening</h2>
                        <span class="text-sm bg-warning-transparent text-warning px-2 py-0.5 rounded">8</span></div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">Sarah Williams</p>
                            <p class="text-[11px] text-default">Sales Executive</p>
                        </div>
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">David Brown</p>
                            <p class="text-[11px] text-default">Marketing Lead</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Interview</h2>
                        <span class="text-sm bg-orange-transparent text-orange px-2 py-0.5 rounded">5</span></div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">Emma Wilson</p>
                            <p class="text-[11px] text-default">HR Specialist</p>
                        </div>
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">Tom Anderson</p>
                            <p class="text-[11px] text-default">Financial Analyst</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Offer</h2>
                        <span class="text-sm bg-purple-transparent text-purple px-2 py-0.5 rounded">3</span></div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">Lisa Garcia</p>
                            <p class="text-[11px] text-default">Senior React Dev</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-3">
                    <div class="flex items-center justify-between mb-3">
                        <h2 class="text-sm font-semibold text-title mb-0">Hired</h2>
                        <span class="text-sm bg-success-transparent text-success px-2 py-0.5 rounded">2</span></div>
                    <div class="space-y-2">
                        <div class="border border-border-color rounded p-2">
                            <p class="text-sm font-semibold text-title mb-1">Robert Lee</p>
                            <p class="text-[11px] text-default">UX Designer</p>
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
