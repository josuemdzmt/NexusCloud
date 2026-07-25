<template>
    <!-- Add Performance Appraisal Modal -->
	<div id="add-performence-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">Add Performance Appraisal</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#add-performence-modal"><i class="ph ph-x text-sm"></i></button>
				</div>
				<div class="p-4 space-y-3">
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Employee <span class="text-danger">*</span></label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Employee</option>
                            <option>Ethan Walker</option>
                            <option>Madison Clark</option>
                            <option>James Harris</option>
                            <option>Avery Thompson</option>
                            <option>Benjamin Wright</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Designation <span class="text-danger">*</span></label>
						<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Appraisal Date</label>
						<a-date-picker v-model:value="addAppraisalDate" class="w-full" placeholder="dd/mm/yyyy" />
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Review Period</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Review Period</option>
                            <option>Q1 2026</option>
                            <option>Q2 2026</option>
                            <option>Q3 2026</option>
                            <option>Q4 2026</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Technical Skills</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Rating</option>
                            <option>5 - Excellent</option>
                            <option>4 - Good</option>
                            <option>3 - Average</option>
                            <option>2 - Needs Improvement</option>
                            <option>1 - Poor</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Communication</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Rating</option>
                            <option>5 - Excellent</option>
                            <option>4 - Good</option>
                            <option>3 - Average</option>
                            <option>2 - Needs Improvement</option>
                            <option>1 - Poor</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Problem Solving</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Rating</option>
                            <option>5 - Excellent</option>
                            <option>4 - Good</option>
                            <option>3 - Average</option>
                            <option>2 - Needs Improvement</option>
                            <option>1 - Poor</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Teamwork</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Rating</option>
                            <option>5 - Excellent</option>
                            <option>4 - Good</option>
                            <option>3 - Average</option>
                            <option>2 - Needs Improvement</option>
                            <option>1 - Poor</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Overall Rating</label>
						<input type="text" placeholder="e.g. 4.5/5" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Status</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Status</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Average</option>
                            <option>Needs Improvement</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Remarks</label>
						<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4"></textarea>
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-performence-modal">Cancel</button>
					<button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Add Appraisal</button>
				</div>
			</div>
		</div>
	</div>

    <!-- Edit Performance Appraisal Modal -->
	<div id="edit-performance-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">Edit Performance Appraisal</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#edit-performance-modal"><i class="ph ph-x text-sm"></i></button>
				</div>
				<div class="p-4 space-y-3">
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Employee <span class="text-danger">*</span></label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Employee</option>
                            <option selected>Ethan Walker</option>
                            <option>Madison Clark</option>
                            <option>James Harris</option>
                            <option>Avery Thompson</option>
                            <option>Benjamin Wright</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Designation <span class="text-danger">*</span></label>
						<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Manager">
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Appraisal Date</label>
						<a-date-picker v-model:value="editAppraisalDate" class="w-full" placeholder="dd/mm/yyyy" />
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Review Period</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Review Period</option>
                            <option>Q1 2026</option>
                            <option selected>Q2 2026</option>
                            <option>Q3 2026</option>
                            <option>Q4 2026</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Technical Skills</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Rating</option>
                            <option selected>5 - Excellent</option>
                            <option>4 - Good</option>
                            <option>3 - Average</option>
                            <option>2 - Needs Improvement</option>
                            <option>1 - Poor</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Communication</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Rating</option>
                            <option>5 - Excellent</option>
                            <option selected>4 - Good</option>
                            <option>3 - Average</option>
                            <option>2 - Needs Improvement</option>
                            <option>1 - Poor</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Problem Solving</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Rating</option>
                            <option selected>5 - Excellent</option>
                            <option>4 - Good</option>
                            <option>3 - Average</option>
                            <option>2 - Needs Improvement</option>
                            <option>1 - Poor</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Teamwork</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Rating</option>
                            <option selected>5 - Excellent</option>
                            <option>4 - Good</option>
                            <option>3 - Average</option>
                            <option>2 - Needs Improvement</option>
                            <option>1 - Poor</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Overall Rating</label>
						<input type="text" placeholder="e.g. 4.5/5" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="4.8/5">
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Status</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select Status</option>
                            <option selected>Excellent</option>
                            <option>Good</option>
                            <option>Average</option>
                            <option>Needs Improvement</option>
						</select>
					</div>
                    <div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Remarks</label>
						<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4">Consistently exceeds expectations and leads the engineering team effectively.</textarea>
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-performance-modal">Cancel</button>
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
            addAppraisalDate: null,
            editAppraisalDate: null,
        };
    },
}
</script>