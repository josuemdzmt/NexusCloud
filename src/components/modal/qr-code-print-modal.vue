<template>
    <!-- Add QR Code Offcanvas start -->
    <div id="add-qr-code-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Add New QR Code</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#add-qr-code-offcanvas"><i class="ph ph-x text-sm"></i></button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Product <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select Product</option>
                        <option>Apple iPhone 15</option>
                        <option>Dell XPS 13</option>
                        <option>Bose QuietComfort 45</option>
                    </select>
                </div>
                <div class="col-span-12">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">QR Data / SKU <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter QR data or SKU">
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Size <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Quantity <span class="text-danger">*</span></label>
                    <input type="number" value="24" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div class="col-span-12">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Preview</label>
                    <div class="bg-light rounded-md p-6 flex items-center justify-center">
                        <div class="bg-white border border-border-color rounded p-3 text-center">
                            <div class="aspect-square bg-light rounded mx-auto mb-2 flex items-center justify-center">
                                <img src="@/assets/img/icons/qr.svg" alt="qr-ion" class="img-fluid dark:brightness-0 dark:invert">
                            </div>
                            <p class="text-[10px] text-title mb-0 truncate">PROD-QR-1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between gap-2 p-4 bg-light">
            <button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-qr-code-offcanvas">Cancel</button>
            <button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer" data-hs-overlay="#add-qr-code-offcanvas">Add</button>
        </div>
    </div>
    <!-- Add QR Code Offcanvas end -->
</template>
