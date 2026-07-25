<template>
    <!-- Add Note modal -->
	<div id="notes-add-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
		<div class="min-h-screen flex items-center justify-center px-4 py-6">
			<div class="max-w-[520px] w-full mx-auto">
				<div class="bg-white rounded-md pointer-events-auto p-5">
					<div class="flex items-center justify-between mb-5">
						<h2 class="text-base font-bold text-gray-900 mb-0">Add Note</h2>
						<button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#notes-add-modal" aria-label="Close"><i class="ph ph-x"></i></button>
					</div>
					<form @submit.prevent="submitForm" class="space-y-4">
						<div>
							<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Title <span class="text-danger">*</span></label>
							<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
						</div>
						<div>
							<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Priority <span class="text-danger">*</span></label>
							<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
								<option>Select</option>
								<option>Low</option>
								<option>Medium</option>
								<option>High</option>
							</select>
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<div>
								<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Created Date <span class="text-danger">*</span></label>
								<a-date-picker v-model:value="addNoteCreatedDate" class="w-full" placeholder="dd/mm/yyyy" />
							</div>
							<div>
								<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Due Date <span class="text-danger">*</span></label>
								<a-date-picker v-model:value="addNoteDueDate" class="w-full" placeholder="dd/mm/yyyy" />
							</div>
						</div>
						<div>
							<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Description</label>
							<textarea rows="4" class="w-full text-sm px-3 py-2 focus:outline-none focus:ring-0 resize-none border border-border-color rounded-md block bg-transparent text-gray-900"></textarea>
						</div>
						<div>
							<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Select Assignee <span class="text-danger">*</span></label>
							<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
								<option>Select</option>
								<option>Alexander Kenn</option>
								<option>Gabriella White</option>
								<option>Christopher Rey</option>
							</select>
						</div>
						<div class="flex items-center justify-between gap-3 mt-5">
							<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#notes-add-modal">Cancel</button>
							<button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Create New</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Edit Note modal -->
	<div id="edit-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
		<div class="min-h-screen flex items-center justify-center px-4 py-6">
			<div class="max-w-[520px] w-full mx-auto">
				<div class="bg-white rounded-md pointer-events-auto p-5">
					<div class="flex items-center justify-between mb-5">
						<h2 class="text-base font-bold text-gray-900 mb-0">Edit Note</h2>
						<button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#notes-add-modal" aria-label="Close"><i class="ph ph-x"></i></button>
					</div>
					<form @submit.prevent="submitForm" class="space-y-4">
						<div>
							<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Title <span class="text-danger">*</span></label>
							<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Follow up with HR">
						</div>
						<div>
							<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Priority <span class="text-danger">*</span></label>
							<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
								<option>Select</option>
								<option selected>Low</option>
								<option>Medium</option>
								<option>High</option>
							</select>
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<div>
								<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Created Date <span class="text-danger">*</span></label>
								<a-date-picker v-model:value="editNoteCreatedDate" class="w-full" placeholder="dd/mm/yyyy" />
							</div>
							<div>
								<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Due Date <span class="text-danger">*</span></label>
								<a-date-picker v-model:value="editNoteDueDate" class="w-full" placeholder="dd/mm/yyyy" />
							</div>
						</div>
						<div>
							<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Description</label>
							<textarea rows="4" class="w-full text-sm px-3 py-2 focus:outline-none focus:ring-0 resize-none border border-border-color rounded-md block bg-transparent text-gray-900">Follow up with HR regarding the new employee onboarding process.</textarea>
						</div>
						<div>
							<label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Select Assignee <span class="text-danger">*</span></label>
							<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
								<option>Select</option>
								<option selected>Alexander Kenn</option>
								<option>Gabriella White</option>
								<option>Christopher Rey</option>
							</select>
						</div>
						<div class="flex items-center justify-between gap-3 mt-5">
							<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-modal">Cancel</button>
							<button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Save Changes</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            addNoteCreatedDate: null,
            addNoteDueDate: null,
            editNoteCreatedDate: null,
            editNoteDueDate: null,
        };
    },
    setup() {
        const submitForm = () => {
            router.push("/applications/notes");
        };

        return {
            submitForm,
        };
    },
}
</script>
