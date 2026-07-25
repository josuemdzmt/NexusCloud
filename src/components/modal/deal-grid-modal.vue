<template>
    <!-- Deals Deals start -->
    <div id="add-deals-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Create Deal</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#add-deals-offcanvas">
                <i class="ph ph-x text-sm"></i>
            </button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">ID <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#DEL0020" readonly>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Deal Name
                         <span class="text-danger">*</span>
                        </label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter deal name">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <div class="flex items-center justify-between gap-3 mb-2">
                        <label class="text-sm font-semibold text-gray-900 mb-0 block">Pipeline</label>
                        <button type="button" class="text-sm text-primary font-medium hover:text-primary-dark">+ Add New</button>
                    </div>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Enterprise Sales</option>
                        <option>SMB Pipeline</option>
                        <option>Renewal Pipeline</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Status 
                        <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Closed</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Deal Value 
                        <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter value">
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
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter period value">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Contact 
                        <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Robert Cosper</option>
                        <option>Jane Doe</option>
                        <option>John Smith</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Project 
                        <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Project A</option>
                        <option>Project B</option>
                        <option>Project C</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Due Date
                        <span class="text-danger">*</span>
                    </label>
                    <a-date-picker v-model:value="dueDate" class="w-full" placeholder="dd/mm/yyyy" />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Expected Closing Date
                        <span class="text-danger">*</span>
                    </label>
                    <a-date-picker v-model:value="expectedClosingDate" class="w-full" placeholder="dd/mm/yyyy" />
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Assignee 
                        <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Robert Cosper</option>
                        <option>Jane Doe</option>
                        <option>John Smith</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Follow up Date
                        <span class="text-danger">*</span>
                    </label>
                    <a-date-picker v-model:value="followUpDate" class="w-full" placeholder="dd/mm/yyyy" />
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Source 
                        <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Email</option>
                        <option>Phone</option>
                        <option>Referral</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Tags 
                        <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Important</option>
                        <option>New</option>
                        <option>Urgent</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Priority 
                        <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Description 
                        <span class="text-danger">*</span>
                    </label>
                    <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter Description"></textarea>
                </div>
            </div>
        </div>
		<div class="flex items-center justify-between gap-2 p-4 bg-light">
			<button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-deals-offcanvas">Cancel</button>
			<button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Create New</button>
		</div>
    </div>
    <!-- Deals Offcanvas end -->

    <!-- Deals Edit Offcanvas start -->
    <div id="edit-deals-offcanvas" class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform w-full z-80 bg-white max-w-[260px]! sm:max-w-[600px]! overflow-hidden m-0 md:m-4 rounded-lg h-full md:h-[calc(100vh-30px)]" role="dialog" tabindex="-1">
        <div class="flex justify-between items-center p-4 border-b border-border-color">
            <div class="text-base font-bold text-title">Edit Deal</div>
            <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#edit-deals-offcanvas">
                <i class="ph ph-x text-sm"></i>
            </button>
        </div>
        <div class="p-4 overflow-y-auto h-[calc(100vh-120px)] md:h-[calc(100vh-150px)]">
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">ID <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light focus:outline-none focus:ring-0" value="#DEL0020" readonly>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Deal Name <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter deal name">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <div class="flex items-center justify-between gap-3 mb-2">
                        <label class="text-sm font-semibold text-gray-900 mb-0 block">Pipeline</label>
                        <button type="button" class="text-sm text-primary font-medium hover:text-primary-dark">+ Add New</button>
                    </div>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Enterprise Sales</option>
                        <option>SMB Pipeline</option>
                        <option>Renewal Pipeline</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Status <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Closed</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Deal Value <span class="text-danger">*</span>
                    </label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter value">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Currency <span class="text-danger">*</span>
                    </label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Period <span class="text-danger">*</span>
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
                        <span class="text-danger">*</span></label>
                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter period value">
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Contact 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Robert Cosper</option>
                        <option>Jane Doe</option>
                        <option>John Smith</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Project 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Project A</option>
                        <option>Project B</option>
                        <option>Project C</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Due Date
                        <span class="text-danger">*</span></label>
                    <a-date-picker v-model:value="editDueDate" class="w-full" placeholder="dd/mm/yyyy" />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Expected Closing Date
                        <span class="text-danger">*</span></label>
                    <a-date-picker v-model:value="editExpectedClosingDate" class="w-full" placeholder="dd/mm/yyyy" />
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Assignee 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Robert Cosper</option>
                        <option>Jane Doe</option>
                        <option>John Smith</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Follow up Date
                        <span class="text-danger">*</span></label>
                    <a-date-picker v-model:value="editFollowUpDate" class="w-full" placeholder="dd/mm/yyyy" />
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Source 
                        <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Email</option>
                        <option>Phone</option>
                        <option>Referral</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Tags <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Important</option>
                        <option>New</option>
                        <option>Urgent</option>
                    </select>
                </div>
                <div class="col-span-12 sm:col-span-6"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Priority <span class="text-danger">*</span></label>
                    <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        <option>Select</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div class="col-span-12"> 
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Description 
                        <span class="text-danger">*</span></label>
                    <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter Description"></textarea>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between gap-2 p-4 bg-light"> 
            <button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-deals-offcanvas">Cancel</button>
            <button type="button" class="btn-sm w-full sm:w-auto bg-dark border border-dark text-white cursor-pointer">Save Changes</button>
        </div>    
    </div>
    <!-- Deals Edit Offcanvas end -->

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

<script>
export default {
    data() {
        return {
            dueDate: null,
            expectedClosingDate: null,
            followUpDate: null,
            editDueDate: null,
            editExpectedClosingDate: null,
            editFollowUpDate: null,
        };
    },
};
</script>