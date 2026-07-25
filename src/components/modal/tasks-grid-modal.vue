<template>
    <div id="add-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
        <div class="min-h-screen flex items-center justify-center p-4">
            <div class="max-w-[420px] w-full mx-auto">
                <div class="bg-white rounded-md pointer-events-auto p-5">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="text-base font-bold text-gray-900 mb-0">Add Task</h2>
                        <button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-modal" aria-label="Close">
                            <i class="ph ph-x"></i>
                        </button>
                    </div>
                    <form class="space-y-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Task Name <span class="text-danger">*</span></label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
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
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Assignee <span class="text-danger">*</span></label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>John Doe</option>
                                <option>Ethan Walker</option>
                                <option>Jane Smith</option>
                            </select>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Priority <span class="text-danger">*</span></label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Select</option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Status <span class="text-danger">*</span></label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Select</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Created Date <span class="text-danger">*</span></label>
                                <a-date-picker v-model:value="createdDate" class="w-full" placeholder="dd/mm/yyyy" />
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Due Date <span class="text-danger">*</span></label>
                                <a-date-picker v-model:value="dueDate" class="w-full" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Description</label>
                            <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4"></textarea>
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
</template>

<script>
export default {
    data() {
        return {
            createdDate: null,
            dueDate: null,
        };
    },
}
</script>
