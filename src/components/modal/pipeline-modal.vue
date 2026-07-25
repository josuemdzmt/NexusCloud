<template>
    <!-- Pipline Offcanvas start -->
    <div id="add-pipline-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Create Pipeline</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#add-pipline-offcanvas"><i class="ph ph-x text-sm"></i></button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">ID <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#PIP0020" readonly>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Pipeline Name <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter pipeline name">
                </div>
                <div class="col-span-12"> 
                    <div class="flex items-center justify-between gap-3 mb-3">
                        <label class="text-sm font-semibold text-gray-900 mb-0 block">Pipeline Stages</label>
                        <button type="button" class="text-sm text-primary font-medium hover:text-primary-danger cursor-pointer">+ Add New</button>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between gap-3 border-l-3 border-primary border border-border-color rounded-md p-3">
                            <div class="flex items-center gap-3">
                                <i class="ph ph-dots-six-vertical text-lg"></i>
                                <span class="text-sm text-gray-900 font-medium">Inpipeline</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-pencil-simple-line"></i> Edit</button>
                                <button type="button" class="btn-sm bg-white border border-border-color text-danger hover:bg-danger-transparent cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-trash"></i> Delete</button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 border-l-3 border-primary border border-border-color rounded-md p-3">
                            <div class="flex items-center gap-3">
                                <i class="ph ph-dots-six-vertical text-lg"></i>
                                <span class="text-sm text-gray-900 font-medium">Follow Up</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-pencil-simple-line"></i> Edit</button>
                                <button type="button" class="btn-sm bg-white border border-border-color text-danger hover:bg-danger-transparent cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-trash"></i> Delete</button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 border-l-3 border-primary border border-border-color rounded-md p-3">
                            <div class="flex items-center gap-3">
                                <i class="ph ph-dots-six-vertical text-lg"></i>
                                <span class="text-sm text-gray-900 font-medium">Schedule Service</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-pencil-simple-line"></i> Edit</button>
                                <button type="button" class="btn-sm bg-white border border-border-color text-danger hover:bg-danger-transparent cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-trash"></i> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Access <span class="text-danger">*</span></label>
                    <div class="flex items-center gap-6 mb-3">
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="pipeline-access" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> All Person</label>
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="pipeline-access" class="size-4 rounded border-border-color text-primary focus:ring-0"> Selected</label>
                    </div>
                    <div class="border border-border-color rounded-md p-3 flex items-center justify-between gap-3">
                        <div class="flex items-center gap-3">
                            <img src="@/assets/img/avatar/avatar-02.jpg" alt="avatar" class="size-7 rounded-full object-cover">
                            <div>
                                <p class="text-sm font-semibold text-title mb-0">Robert Cosper</p>
                            </div>
                        </div>
                        <button type="button" class="text-sm font-medium text-danger hover:text-danger-dark">Remove</button>
                    </div>
                </div>
            </div>
        </div>
		<div class="flex items-center justify-between gap-2 p-4 bg-light">
			<button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-pipline-offcanvas">Cancel</button>
			<button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Create New</button>
		</div>
    </div>
    <!-- Pipline Offcanvas end -->

    <!-- Pipline Edit Offcanvas start -->
    <div id="edit-pipline-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Edit Pipeline</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#edit-pipline-offcanvas"><i class="ph ph-x text-sm"></i></button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">ID <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#PIP0020" readonly>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Pipeline Name <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter pipeline name">
                </div>
                <div class="col-span-12"> 
                    <div class="flex items-center justify-between gap-3 mb-3">
                        <label class="text-sm font-semibold text-gray-900 mb-0 block">Pipeline Stages</label>
                        <button type="button" class="text-sm text-primary font-medium hover:text-primary-danger cursor-pointer">+ Add New</button>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between gap-3 border-l-3 border-primary border border-border-color rounded-md p-3">
                            <div class="flex items-center gap-3">
                                <i class="ph ph-dots-six-vertical text-lg"></i>
                                <span class="text-sm text-gray-900 font-medium">Inpipeline</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-pencil-simple-line"></i> Edit</button>
                                <button type="button" class="btn-sm bg-white border border-border-color text-danger hover:bg-danger-transparent cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-trash"></i> Delete</button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 border-l-3 border-primary border border-border-color rounded-md p-3">
                            <div class="flex items-center gap-3">
                                <i class="ph ph-dots-six-vertical text-lg"></i>
                                <span class="text-sm text-gray-900 font-medium">Follow Up</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-pencil-simple-line"></i> Edit</button>
                                <button type="button" class="btn-sm bg-white border border-border-color text-danger hover:bg-danger-transparent cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-trash"></i> Delete</button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 border-l-3 border-primary border border-border-color rounded-md p-3">
                            <div class="flex items-center gap-3">
                                <i class="ph ph-dots-six-vertical text-lg"></i>
                                <span class="text-sm text-gray-900 font-medium">Schedule Service</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-pencil-simple-line"></i> Edit</button>
                                <button type="button" class="btn-sm bg-white border border-border-color text-danger hover:bg-danger-transparent cursor-pointer flex items-center gap-2"> <i class="ph-duotone ph-trash"></i> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Access <span class="text-danger">*</span></label>
                    <div class="flex items-center gap-6 mb-3">
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="pipeline-access" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> All Person</label>
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="pipeline-access" class="size-4 rounded border-border-color text-primary focus:ring-0"> Selected</label>
                    </div>
                    <div class="border border-border-color rounded-md p-3 flex items-center justify-between gap-3">
                        <div class="flex items-center gap-3">
                            <img src="@/assets/img/avatar/avatar-02.jpg" alt="avatar" class="size-7 rounded-full object-cover">
                            <div>
                                <p class="text-sm font-semibold text-title mb-0">Robert Cosper</p>
                            </div>
                        </div>
                        <button type="button" class="text-sm font-medium text-danger hover:text-danger-dark">Remove</button>
                    </div>
                </div>
            </div>
        </div>
		<div class="mt-4 flex items-center justify-between gap-2 px-4">
			<button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-pipline-offcanvas">Cancel</button>
			<button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Changes</button>
		</div>
    </div>
    <!-- Campaign Edit Offcanvas end -->

    <!-- Delete Modal -->
	<div id="delete-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-sm sm:w-full m-3 max-w-[300px]! mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color p-6">
				<div class="bg-danger-transparent size-10 rounded-lg flex items-center justify-center mx-auto"> <i class="icon-trash-2 text-danger text-[20px]!"></i> </div>
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