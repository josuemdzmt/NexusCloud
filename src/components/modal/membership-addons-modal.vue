<template>
    <!-- Add Addon Modal -->
    <div id="add-membership-addon-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Add New Addon</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#add-membership-addon-modal">
                        <i class="ph ph-x text-sm"></i>
                    </button>
                </div>
                <div class="p-4 space-y-4">
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Plans</label>
                        <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            <option>Select</option>
                            <option>Basic</option>
                            <option>Pro</option>
                            <option>Enterprise</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Add-on Name <span class="text-danger">*</span></label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Price
                                <span class="text-danger">*</span></label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Description</label>
                        <textarea rows="4" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"></textarea>
                    </div>
                    <div class="border-t border-border-color pt-5 mt-5">
                        <div class="text-lg font-bold text-gray-900 mb-3">Validity & limits</div>
                        <div class="grid grid-cols-2 gap-3">
                            <button type="button" class="rounded-lg border border-border-color p-4 text-left bg-white hover:bg-light cursor-pointer">
                                <span  class="text-sm font-semibold text-title mb-1 block">Ongoing</span >
                                <span  class="text-sm text-default">Active until cancelled</span >
                            </button>
                            <button type="button" class="rounded-lg border border-border-color p-4 text-left bg-white hover:bg-light cursor-pointer">
                                <span  class="text-sm font-semibold text-title mb-1 block">Fixed period</span >
                                <span  class="text-sm text-default">Set start and end dates</span >
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Max Subscribers</label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Trial Days</label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row justify-end items-center gap-2 p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-membership-addon-modal">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Publish</button>
                </div>
            </div>
        </div>
    </div>
</template>
