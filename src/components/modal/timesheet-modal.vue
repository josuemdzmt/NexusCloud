<template>
    <div id="add-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="max-w-[420px] w-full mx-auto">
                <div class="bg-white rounded-md pointer-events-auto p-5">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="text-base font-bold text-gray-900 mb-0">Add Timesheet</h2>
                        <button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-modal" aria-label="Close">
                            <i class="ph ph-x"></i>
                        </button>
                    </div>
                    <form class="space-y-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">User <span class="text-danger">*</span></label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>John Doe</option>
                                <option>Ethan Walker</option>
                                <option>Jane Smith</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Project Name <span class="text-danger">*</span></label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>Clinic Management</option>
                                <option>Hotel Booking</option>
                                <option>Food Order App</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Task Name <span class="text-danger">*</span></label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>Design Employee Dashboard</option>
                                <option>Develop User Authentication</option>
                                <option>Implement Payment Gateway</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Date <span class="text-danger">*</span></label>
                            <a-date-picker v-model:value="addTimesheetDate" class="w-full" placeholder="dd/mm/yyyy" />
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Used Hours <span class="text-danger">*</span></label>
                            <div class="relative">
                                <a-time-picker v-model:value="valueOne" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="hh:mm" />
                                <i class="ph ph-clock absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 mt-5">
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-modal">Cancel</button>
                            <button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Create New</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div id="edit-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="max-w-[420px] w-full mx-auto">
                <div class="bg-white rounded-md pointer-events-auto p-5">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="text-base font-bold text-gray-900 mb-0">Edit Timesheet</h2>
                        <button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-modal" aria-label="Close">
                            <i class="ph ph-x"></i>
                        </button>
                    </div>
                    <form class="space-y-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">User <span class="text-danger">*</span></label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>John Doe</option>
                                <option selected>Ethan Walker</option>
                                <option>Jane Smith</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Project Name <span class="text-danger">*</span></label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option selected>Clinic Management</option>
                                <option>Hotel Booking</option>
                                <option>Food Order App</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Task Name <span class="text-danger">*</span></label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option selected>Design Employee Dashboard</option>
                                <option>Develop User Authentication</option>
                                <option>Implement Payment Gateway</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Date <span class="text-danger">*</span></label>
                            <a-date-picker v-model:value="editTimesheetDate" class="w-full" placeholder="dd/mm/yyyy" />
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Used Hours <span class="text-danger">*</span></label>
                            <div class="relative">
                                <a-time-picker v-model:value="valueTwo" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="hh:mm" />
                                <i class="ph ph-clock absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 mt-5">
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-modal">Cancel</button>
                            <button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div id="delete-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-sm sm:w-full m-3 max-w-[300px]! mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color p-6">
                <div class="bg-danger-transparent size-10 rounded-lg flex items-center justify-center mx-auto">
                    <i class="icon-trash-2 text-danger text-[20px]!"></i>
                </div>
                <div class="my-5 text-center">
                    <p class="text-base font-bold text-title mb-1">Delete Confirmation</p>
                    <p class="mb-0 text-sm">Are you sure, do you want to delete ?</p>
                </div>
                <div class="flex justify-between items-center gap-2 flex-col">
                    <button type="button" class="btn-sm w-full bg-danger text-white border border-danger hover:bg-danger-hover cursor-pointer">Yes, Delete</button>
                    <button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#delete-modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
const valueOne = ref();
const valueTwo = ref();

export default {
    data() {
        return {
            valueOne,
			valueTwo,
            addTimesheetDate: null,
            editTimesheetDate: null,
        };
    },
}
</script>
