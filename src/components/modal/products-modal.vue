<template>
    <!-- Product details Modal -->
    <div id="product-details-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h3 class="text-base font-bold text-title">Product Details</h3>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#product-details-modal"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                        <div class="flex items-center gap-4">
                            <div class="size-18 shrink-0 bg-light rounded-full flex items-center justify-center overflow-hidden">
                                <i class="ph-duotone ph-apple-logo text-2xl"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-bold text-title mb-2">Apple iPhone 15</h4>
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-sm text-default"><a href="#">#PRD0020</a></span>
                                    <span class="text-sm text-default border-l border-border-color pl-2">APP-PH-15</span>
                                </div>
                                <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Low Stock</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 text-sm text-default">
                            <i class="ph ph-clock"></i> Last Updated : 04 Mar 2026
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                        <div class="border border-border-color rounded-md p-4 bg-white shadow-sm">
                            <p class="text-sm text-default mb-1">Selling Price</p>
                            <h4 class="text-lg font-bold text-gray-900 mb-0">$250</h4>
                        </div>
                        <div class="border border-border-color rounded-md p-4 bg-white shadow-sm">
                            <p class="text-sm text-default mb-1">Purchase Price</p>
                            <h4 class="text-lg font-bold text-gray-900 mb-0">$230</h4>
                        </div>
                        <div class="border border-border-color rounded-md p-4 bg-white shadow-sm">
                            <p class="text-sm text-default mb-1">Margin</p>
                            <h4 class="text-lg font-bold text-gray-900 mb-0">+8%</h4>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center border-b border-border-color pb-2">
                            <span class="text-sm text-default w-1/3">Category</span>
                            <span class="text-sm font-semibold text-title w-2/3">Smart Phones</span>
                        </div>
                        <div class="flex items-center border-b border-border-color pb-2">
                            <span class="text-sm text-default w-1/3">Brand</span>
                            <span class="text-sm font-semibold text-title w-2/3">Apple</span>
                        </div>
                        <div class="flex items-center border-b border-border-color pb-2">
                            <span class="text-sm text-default w-1/3">Unit</span>
                            <span class="text-sm font-semibold text-title w-2/3">Piece</span>
                        </div>
                        <div class="flex items-center border-b border-border-color pb-3">
                            <span class="text-sm text-default w-1/3">Quantity</span>
                            <span class="text-sm font-semibold text-title w-2/3">300</span>
                        </div>
                        <div class="flex items-start">
                            <span class="text-sm text-default w-1/3">Description</span>
                            <span class="text-sm font-semibold text-title w-2/3">Latest Apple flagship smartphone with A16 Bionic chip.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
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