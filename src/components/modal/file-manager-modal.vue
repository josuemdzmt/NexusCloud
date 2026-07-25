<template>
    <!-- Upload modal -->
    <div id="file-upload-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="max-w-[560px] w-full mx-auto">
                <div class="bg-white rounded-md pointer-events-auto p-6">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="text-base font-bold text-gray-900 mb-0">Add Files</h2>
                        <button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#file-upload-modal" aria-label="Close"><i class="ph ph-x"></i></button>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div class="bg-light hover:bg-light-hover border border-border-color rounded-md p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition" data-hs-overlay="#fm-create-folder-modal">
                            <div class="size-12 rounded-md bg-white border border-border-color flex items-center justify-center">
                                <i class="ph-duotone ph-folder-plus text-2xl text-gray-900"></i>
                            </div>
                            <p class="text-sm font-semibold text-title mb-0">Create New Folder</p>
						</div>
                        <div class="bg-light hover:bg-light-hover border border-border-color rounded-md p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition">
                            <div class="size-12 rounded-md bg-white border border-border-color flex items-center justify-center">
                                <i class="ph-duotone ph-upload-simple text-2xl text-gray-900"></i>
                            </div>
                            <p class="text-sm font-semibold text-title mb-0">Upload File</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Create Folder modal -->
    <div id="fm-create-folder-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="max-w-[420px] w-full mx-auto">
                <div class="bg-white rounded-md pointer-events-auto p-5">
                    <div class="flex items-center justify-between mb-5">
                        <h2 class="text-base font-bold text-gray-900 mb-0">Create Folder</h2>
                        <button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#fm-create-folder-modal" aria-label="Close"><i class="ph ph-x"></i></button>
                    </div>
                    <form>
                        <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Folder Name <span class="text-danger">*</span></label>
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </form>
                    <div class="flex items-center justify-between gap-3 mt-5">
                        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#fm-create-folder-modal">Cancel</button>
                        <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Create New</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>