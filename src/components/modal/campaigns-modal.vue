<template>
    <!-- Campaign Offcanvas start -->
    <div id="add-campaign-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Create Campaign</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#add-campaign-offcanvas">
				<i class="ph ph-x text-sm"></i>
			</button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">ID <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#CAM0020" readonly>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Campaign Type 
						<span class="text-danger">*</span>
					</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Basic</option>
                        <option>Pro</option>
                        <option>Enterprise</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Deal Value 
						<span class="text-danger">*</span>
					</label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Currency 
						<span class="text-danger">*</span>
					</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Period 
						<span class="text-danger">*</span>
					</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Days</option>
                        <option>Weeks</option>
                        <option>Months</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Period Value 
						<span class="text-danger">*</span>
					</label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Target Audience 
						<span class="text-danger">*</span>
					</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Customers</option>
                        <option>Leads</option>
                        <option>Subscribers</option>
                    </select>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Description 
						<span class="text-danger">*</span>
					</label>
                    <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter Description"></textarea>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-2 block">Attachments</label>
                    <div class="border border-dashed border-border-color rounded-md py-8 text-center relative overflow-hidden">
                        <div class="text-3xl text-default mb-3"><i class="ph ph-image"></i></div>
                        <p class="text-sm text-gray-600">Drop Your Files or 
							<span class="text-primary hover:underline font-medium">Browse</span>
						</p>
                        <p class="text-sm text-default mt-2">Max Upload Size 800x800px. PNG / JPEG file, Maximum Upload size 5MB
						</p>
                        <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                    </div>
                </div>
            </div>
        </div>
		<div class="flex items-center justify-between gap-2 p-4 bg-light">
			<button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-campaign-offcanvas">Cancel</button>
			<button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Create New</button>
		</div>
    </div>
    <!-- Campaign Offcanvas end -->

    <!-- Campaign Edit Offcanvas start -->
    <div id="edit-campaign-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Edit Campaign</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#edit-campaign-offcanvas">
				<i class="ph ph-x text-sm"></i>
			</button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">ID <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#CAM0020" readonly>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Campaign Type 
						<span class="text-danger">*</span>
					</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Basic</option>
                        <option>Pro</option>
                        <option>Enterprise</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Deal Value 
						<span class="text-danger">*</span>
					</label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="$15,000">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Currency 
						<span class="text-danger">*</span>
					</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option selected>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Period 
						<span class="text-danger">*</span>
					</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option selected>Days</option>
                        <option>Weeks</option>
                        <option>Months</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Period Value 
						<span class="text-danger">*</span>
					</label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="$8,200">
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Target Audience 
						<span class="text-danger">*</span>
					</label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option selected>Customers</option>
                        <option>Leads</option>
                        <option>Subscribers</option>
                    </select>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Description 
						<span class="text-danger">*</span>
					</label>
                    <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter Description"></textarea>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-2 block">Attachments</label>
                    <div class="border border-dashed border-border-color rounded-md py-8 text-center relative overflow-hidden">
                        <div class="text-3xl text-default mb-3"><i class="ph ph-image"></i></div>
                        <p class="text-sm text-gray-600">Drop Your Files or 
							<span class="text-primary hover:underline font-medium">Browse</span>
						</p>
                        <p class="text-sm text-default mt-2">Max Upload Size 800x800px. PNG / JPEG file, Maximum Upload size 5MB</p>
                        <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                    </div>
                </div>
            </div>
        </div>
		<div class="flex items-center justify-between gap-2 p-4 bg-light">
			<button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-campaign-offcanvas">Cancel</button>
			<button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Changes</button>
		</div>
    </div>
    <!-- Campaign Edit Offcanvas end -->

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