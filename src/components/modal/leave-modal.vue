<template>
    <!-- Add Leave Modal -->
	<div id="add-leave-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">Add Leave</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#add-leave-modal"><i class="ph ph-x text-sm"></i></button>
				</div>
				<div class="p-4 space-y-3">
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Emploee *</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Trainer</option>
                            <option>Ethan Walker</option>
                            <option>Madison Clark</option>
                            <option>Avery Thompson</option>
                            <option>Benjamin Wright</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Leave Type <span class="text-danger">*</span></label>
						<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">From</label>
						<a-date-picker v-model:value="leaveFromDate" class="w-full" placeholder="dd/mm/yyyy" />
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">To</label>
						<a-date-picker v-model:value="leaveToDate" class="w-full" placeholder="dd/mm/yyyy" />
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Description</label>
						<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4"></textarea>
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-leave-modal">Cancel</button>
					<button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Add Leave</button>
				</div>
			</div>
		</div>
	</div> 

    <!-- Edit Leave Modal -->
	<div id="edit-leave-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">Edit Leave</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#edit-leave-modal"><i class="ph ph-x text-sm"></i></button>
				</div>
				<div class="p-4 space-y-3">
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Emploee *</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Trainer</option>
                            <option selected>Ethan Walker</option>
                            <option>Madison Clark</option>
                            <option>Avery Thompson</option>
                            <option>Benjamin Wright</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Leave Type <span class="text-danger">*</span></label>
						<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Casual Leave">
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">From</label>
						<a-date-picker v-model:value="editLeaveFromDate" class="w-full" placeholder="dd/mm/yyyy" />
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">To</label>
						<a-date-picker v-model:value="editLeaveToDate" class="w-full" placeholder="dd/mm/yyyy" />
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Description</label>
						<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4"> Going to Hospital</textarea>
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-leave-modal">Cancel</button>
					<button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Changes</button>
				</div>
			</div>
		</div>
	</div>

    <!-- Delete Modal -->
    <div id="delete-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-sm sm:w-full m-3 max-w-[300px]! sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
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
            leaveFromDate: null,
            leaveToDate: null,
            editLeaveFromDate: null,
            editLeaveToDate: null,
        };
    },
};
</script>