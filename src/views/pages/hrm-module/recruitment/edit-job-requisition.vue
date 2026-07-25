<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div>
                    <div class="flex items-center gap-2 text-sm text-default mb-1"><span>HRM</span> 
                        <i class="ph ph-caret-right text-[10px]"></i> 
                        <router-link :to="all_routes.recruitment" class="hover:text-primary">Recruitment</router-link> 
                        <i class="ph ph-caret-right text-[10px]"></i> 
                        <span>Edit Senior React Developer</span>
                    </div>
                    <h1 class="text-gray-900 text-xl font-bold mb-0">Edit Job Requisition</h1>
                </div>
                <div class="flex items-center gap-2"><router-link :to="all_routes.recruitment" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancel</router-link>
                    <button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Changes</button>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-8 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Requisition Details</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Requisition ID</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#JOB0020" readonly>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Job Title 
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Senior React Developer">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Department 
                                    <span class="text-danger">*</span>
                                </label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>Engineering</option>
                                    <option>Design</option>
                                    <option>HR</option>
                                    <option>Finance</option>
                                    <option>Sales</option>
                                    <option>Marketing</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Hiring Manager 
                                    <span class="text-danger">*</span>
                                </label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>Ethan Walker</option>
                                    <option>Madison Clark</option>
                                    <option>James Harris</option>
                                    <option>Avery Thompson</option>
                                    <option>Benjamin Wright</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Employment Type</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Contract</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Openings</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="2">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Experience Level</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Entry Level</option>
                                    <option>Mid Level</option>
                                    <option selected>Senior Level</option>
                                    <option>Lead / Principal</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Location</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Remote">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Salary Range (Min)</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="95000">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Salary Range (Max)</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="125000">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Target Hire Date</label>
                                <a-date-picker v-model:value="targetHireDate" class="w-full" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Job Description</h2>
                        <div class="grid grid-cols-1 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Description 
                                    <span class="text-danger">*</span>
                                </label>
                                <textarea rows="5" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">We are looking for a Senior React Developer to join our Engineering team. You will build and maintain scalable front-end applications, collaborate with designers and back-end engineers, and mentor junior developers across the team.</textarea>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Skills</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="React, TypeScript, Redux, REST APIs, Tailwind CSS">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Priority</h2>
                        <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            <option selected>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Status</h2>
                        <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            <option>Draft</option>
                            <option selected>Open</option>
                            <option>On Hold</option>
                        </select>
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
            all_routes,
            targetHireDate: null
        };
    },
}
</script>
