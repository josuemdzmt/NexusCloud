<template>
    <!-- Add Note Offcanvas start -->
	<div id="add-note-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Add Note</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#add-note-modal">
						<i class="ph ph-x text-sm"></i>
					</button>
                </div>
                <div class="p-4">
					<div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
						<div class="col-span-12">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Title 
								<span class="text-danger">*</span>
							</label>
							<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter note title"> 
						</div>
						<div class="col-span-12">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Note 
								<span class="text-danger">*</span>
							</label>
							<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter note"></textarea>
						</div>
						<div class="col-span-12">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Attachment</label>
							<div class="relative btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"> <i class="ph-duotone ph-paperclip"></i> Upload File
								<input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"> 
							</div>
							<p class="text-[11px] text-default mt-2 mb-0">PDF, DOC or image, not exceeding 5MB.</p>
						</div>
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-note-modal">Cancel</button>
					<button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Add Note</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Add Note Offcanvas End-->

	<!-- Edit Note Offcanvas start -->
	<div id="edit-note-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Edit Note</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#edit-note-modal">
						<i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4">
					<div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
						<div class="col-span-12">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Title 
								<span class="text-danger">*</span>
							</label>
							<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter note title"> 
						</div>
						<div class="col-span-12">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Note 
								<span class="text-danger">*</span>
							</label>
							<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter note"></textarea>
						</div>
						<div class="col-span-12">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Attachment</label>
							<div class="relative btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"> <i class="ph-duotone ph-paperclip"></i> Upload File
								<input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"> 
							</div>
							<p class="text-[11px] text-default mt-2 mb-0">PDF, DOC or image, not exceeding 5MB.</p>
						</div>
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-note-modal">Cancel</button>
					<button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Changes</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Add Note Offcanvas End-->

	<!-- Add Call Modal start -->
	<div id="add-call-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">Add Call</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#add-call-modal">
						<i class="ph ph-x text-sm"></i>
					</button>
				</div>
				<div class="p-4">
					<div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
						<div class="col-span-12 sm:col-span-6">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Status 
								<span class="text-danger">*</span>
							</label>
							<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
								<option>Select</option>
								<option>Connected</option>
								<option>Busy</option>
								<option>No Answer</option>
								<option>Left Voicemail</option>
							</select>
						</div>
						<div class="col-span-12 sm:col-span-6">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Follow-up Date 
								<span class="text-danger">*</span>
							</label>
							<a-date-picker v-model:value="followUpDate" class="w-full" placeholder="dd/mm/yyyy" />
						</div>
						<div class="col-span-12">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Call Purpose 
								<span class="text-danger">*</span>
							</label>
							<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
								<option>Select</option>
								<option>Prospecting</option>
								<option>Follow Up</option>
								<option>Demo</option>
								<option>Negotiation</option>
								<option>Support</option>
							</select>
						</div>
						<div class="col-span-12">
							<label class="text-sm font-semibold text-gray-900 mb-1 block">Description 
								<span class="text-danger">*</span>
							</label>
							<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter description"></textarea>
						</div>
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-call-modal">Cancel</button>
					<button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Add Call</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Add Call Offcanvas end -->

	<!-- Create File Offcanvas start -->
	<div id="create-file-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">Create New File</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#create-file-modal">
						<i class="ph ph-x text-sm"></i>
					</button>
				</div>
				<div class="p-4">
					<div id="file-step-1" role="tabpanel">
						<div class="flex items-center gap-2 mb-5">
							<span class="text-[11px] bg-primary-transparent text-primary px-2 py-0.5 rounded">Step 1 of 2</span>
							<h3 class="text-sm font-semibold text-title mb-0">Basic Info</h3>
						 </div>
						<div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
							<div class="col-span-12">
								<label class="text-sm font-semibold text-gray-900 mb-1 block">File Name
									 <span class="text-danger">*</span>
									</label>
								<input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Enter file name"> 
							</div>
							<div class="col-span-12">
								<label class="text-sm font-semibold text-gray-900 mb-1 block">File Type 
									<span class="text-danger">*</span>
								</label>
								<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
									<option>Select</option>
									<option>PDF</option>
									<option>Word Document</option>
									<option>Excel Sheet</option>
									<option>Image</option>
								</select>
							</div>
							<div class="col-span-12">
								<label class="text-sm font-semibold text-gray-900 mb-1 block">Description</label>
								<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter description"></textarea>
							</div>
						</div>
					</div>
					<div id="file-step-2" class="hidden" role="tabpanel">
						<div class="flex items-center gap-2 mb-5">
							<span class="text-[11px] bg-primary-transparent text-primary px-2 py-0.5 rounded">Step 2 of 2</span>
							<h3 class="text-sm font-semibold text-title mb-0">Add Recipient</h3> 
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
							<div class="col-span-12">
								<label class="text-sm font-semibold text-gray-900 mb-1 block">Recipient 
									<span class="text-danger">*</span>
								</label>
								<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
									<option>Select</option>
									<option>Alexander Kenn</option>
									<option>Ethan Walker</option>
									<option>Sophia Turner</option>
									<option>Daniel Reed</option>
								</select>
							</div>
							<div class="col-span-12">
								<label class="text-sm font-semibold text-gray-900 mb-1 block">Message</label>
								<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4" placeholder="Enter message"></textarea>
							</div>
							<div class="col-span-12">
								<button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark inline-flex items-center justify-center gap-2 hover:bg-primary-hover cursor-pointer">
									<i class="ph ph-paper-plane-tilt"></i> Send</button>
							</div>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-between gap-2 p-4" role="tablist" aria-label="Create File Steps" aria-orientation="horizontal">
					<button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#create-file-modal">Cancel</button>
					<button type="button" class="btn-sm w-full sm:w-auto bg-white border border-border-color text-gray-900 inline-flex items-center justify-center gap-2 hover:bg-light cursor-pointer hs-tab-active:hidden active" id="file-step-back" aria-selected="true" data-hs-tab="#file-step-1" aria-controls="file-step-1" role="tab"><i class="ph ph-arrow-left"></i> Back</button>
					<button type="button" class="btn-sm w-full sm:w-auto bg-dark text-white border border-dark inline-flex items-center justify-center gap-2 hover:bg-primary-hover cursor-pointer hs-tab-active:hidden" id="file-step-next" aria-selected="false" data-hs-tab="#file-step-2" aria-controls="file-step-2" role="tab">Next <i class="ph ph-arrow-right"></i></button>
				</div>
			</div>
		</div>
	</div>
	<!-- Create File Modal end -->

	<!-- Connect Account Modal start -->
	<div id="connect-account-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-sm sm:w-full m-3 max-w-[300px]! sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color p-6 w-full">
				<div class="flex justify-between items-center mb-4">
					<p class="text-base font-bold text-title mb-0">Connect Email Account</p>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" aria-label="close" data-hs-overlay="#connect-account-modal"><i class="ph ph-x text-sm"></i></button>
				</div>
				<div class="space-y-2 mb-4">
					<label class="flex items-center gap-3 p-3 border border-border-color rounded-md cursor-pointer hover:bg-light">
						<input type="radio" name="email-provider" class="size-4 rounded border-border-color text-primary focus:ring-0" checked> <span class="size-8 rounded-md bg-danger-transparent flex items-center justify-center">
							<i class="ph-duotone ph-google-logo text-danger"></i></span> 
							<span class="flex-1">
									<span class="text-sm font-semibold text-title block">Gmail</span>
								<span class="text-[11px] text-default block">Connect your Google account</span>
							</span>
					</label>
					<label class="flex items-center gap-3 p-3 border border-border-color rounded-md cursor-pointer hover:bg-light">
						<input type="radio" name="email-provider" class="size-4 rounded border-border-color text-primary focus:ring-0"> 
						<span class="size-8 rounded-md bg-info-transparent flex items-center justify-center">
							<i
								class="ph-duotone ph-microsoft-outlook-logo text-info"></i>
							</span> 
							<span class="flex-1"><span class="text-sm font-semibold text-title block">Outlook</span>
							<span class="text-[11px] text-default block">Connect your Microsoft account</span>
						</span>
					</label>
					<label class="flex items-center gap-3 p-3 border border-border-color rounded-md cursor-pointer hover:bg-light">
						<input type="radio" name="email-provider" class="size-4 rounded border-border-color text-primary focus:ring-0"> <span class="size-8 rounded-md bg-warning-transparent flex items-center justify-center">
							<i class="ph-duotone ph-gear-six text-warning"></i></span>
								<span class="flex-1">
									<span class="text-sm font-semibold text-title block">Custom SMTP</span>
									<span class="text-[11px] text-default block">Use your own SMTP settings</span>
								</span>
					</label>
				</div>
				<div class="flex justify-between items-center gap-2">
					<button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#connect-account-modal">Cancel</button>
					<button type="button" class="btn-sm w-full bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Connect</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Connect Account Modal end -->

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
            followUpDate: null,
        };
    },
};
</script>