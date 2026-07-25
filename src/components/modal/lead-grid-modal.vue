<template>
    <!-- Leads Deals start -->
    <div id="add-leads-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Create Lead</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#add-leads-offcanvas">
                <i class="ph ph-x text-sm"> </i></button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12"> 
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Profile Image 
                            <span class="text-danger">*</span
                                ></label>
                        <div class="flex items-center gap-3">
                            <div class="size-16 rounded-md border border-border-color bg-light flex items-center justify-center text-default"><i class="ph-duotone ph-image text-2xl"></i></div>
                            <div>
                                <div class="relative btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer">
                                    <i class="ph-duotone ph-upload-simple"></i> Upload Image
                                    <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                                </div>
                                <p class="text-[11px] text-default mt-2 mb-0">JPG or PNG format, not exceeding 5MB.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">ID <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#LED0020" readonly>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Lead Type 
                        <span class="text-danger">*</span></label>
                    <div class="flex items-center gap-6">
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-type" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> Person</label>
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-type" class="size-4 rounded border-border-color text-primary focus:ring-0"> Organization</label>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">First Name 
                        <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Last Name 
                        <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div class="col-span-12 sm:col-span-12"> 
                    <div class="flex items-center justify-between gap-3 mb-2">
                        <label class="text-sm font-semibold text-gray-900 mb-0 block">Company Name 
                            <span class="text-danger">*</span></label>
                        <button type="button" class="text-sm text-primary font-medium hover:text-primary-dark">+ Add New</button>
                    </div>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>TechCorp Inc</option>
                        <option>InnoSoft</option>
                        <option>DevWorks</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Value 
                        <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Currency
                         <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone Number 1 
                        <span class="text-danger">*</span></label>
                    <div class="flex items-center gap-2">
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone Number 2</label>
                    <div class="flex items-center gap-2">
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Source 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Website</option>
                        <option>Referral</option>
                        <option>Email</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Industry 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Software</option>
                        <option>Finance</option>
                        <option>Retail</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Owner 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Robert Cosper</option>
                        <option>Jane Doe</option>
                        <option>John Smith</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Tags 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Important</option>
                        <option>New</option>
                        <option>Urgent</option>
                    </select>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Description 
                        <span class="text-danger">*</span></label>
                    <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter Description"></textarea>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Visibility 
                        <span class="text-danger">*</span></label>
                    <div class="flex items-center gap-6">
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-visibility" class="size-4 rounded border-border-color text-primary focus:ring-0"> Public</label>
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-visibility" class="size-4 rounded border-border-color text-primary focus:ring-0"> Private</label>
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-visibility" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> Select Person</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between gap-2 p-4 bg-light">
            <button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-leads-offcanvas">Cancel</button>
            <button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Create New</button>
        </div>
    </div>
    <!-- Leads Offcanvas end -->

    <!-- Leads Edit Offcanvas start -->
    <div id="edit-leads-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Edit Lead</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#edit-leads-offcanvas"><i class="ph ph-x text-sm"></i></button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12"> 
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Profile Image 
                            <span class="text-danger">*</span></label>
                        <div class="flex items-center gap-3">
                            <div class="size-16 rounded-md flex items-center justify-center text-default overflow-hidden">
                                <img src="@/assets/img/avatar/avatar-02.jpg" alt="avatar" class="img-fluid">
                            </div>
                            <div>
                                <div class="relative btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer"><i class="ph-duotone ph-upload-simple"></i> Upload Image
                                    <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                                </div>
                                <p class="text-[11px] text-default mt-2 mb-0">JPG or PNG format, not exceeding 5MB.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">ID <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#LED0020" readonly>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Lead Type 
                        <span class="text-danger">*</span></label>
                    <div class="flex items-center gap-6">
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-type" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> Person</label>
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-type" class="size-4 rounded border-border-color text-primary focus:ring-0"> Organization</label>
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">First Name <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Alex">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Last Name 
                        <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Hayes">
                </div>
                <div class="col-span-12 sm:col-span-12"> 
                    <div class="flex items-center justify-between gap-3 mb-2">
                        <label class="text-sm font-semibold text-gray-900 mb-0 block">Company Name 
                            <span class="text-danger">*</span></label>
                        <button type="button" class="text-sm text-primary font-medium hover:text-primary-dark">+ Add New</button>
                    </div>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option selected>TechCorp Inc</option>
                        <option>InnoSoft</option>
                        <option>DevWorks</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Value <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="859787">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Currency 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>USD</option>
                        <option selected>EUR</option>
                        <option>GBP</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone Number 1 
                        <span class="text-danger">*</span></label>
                    <div class="flex items-center gap-2">
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="+99 547 7432">
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone Number 2</label>
                    <div class="flex items-center gap-2">
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="+99 547 8745">
                    </div>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Source 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Website</option>
                        <option selected>Referral</option>
                        <option>Email</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Industry 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option selected>Software</option>
                        <option>Finance</option>
                        <option>Retail</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Owner <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Robert Cosper</option>
                        <option selected>Jane Doe</option>
                        <option>John Smith</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Tags <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Important</option>
                        <option selected>New</option>
                        <option>Urgent</option>
                    </select>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Description 
                        <span class="text-danger">*</span></label>
                    <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter Description"></textarea>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Visibility 
                        <span class="text-danger">*</span></label>
                    <div class="flex items-center gap-6">
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-visibility" class="size-4 rounded border-border-color text-primary focus:ring-0"> Public
                        </label>
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-visibility" class="size-4 rounded border-border-color text-primary focus:ring-0"> Private
                        </label>
                        <label class="inline-flex items-center gap-2 text-sm text-gray-900"><input type="radio" name="lead-visibility" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> Select Person</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between gap-2 p-4 bg-light">
            <button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-leads-offcanvas">Cancel</button>
            <button type="button" class="btn-sm w-full sm:w-auto bg-dark border border-dark text-white cursor-pointer">Save Changes</button>
        </div>    
    </div>
    <!-- Leads Edit Offcanvas end -->

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