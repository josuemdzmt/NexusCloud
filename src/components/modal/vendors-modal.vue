<template>
    <!-- Add Vendor Modal -->
	<div id="add-vendor-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
		<div class="min-h-screen flex items-center justify-center px-4">
			<div class="max-w-[420px] w-full mx-auto">
				<div class="bg-white rounded-md pointer-events-auto p-5">
					<div class="flex items-center justify-between mb-5">
                        <h2 class="text-base font-bold text-title">Add Vendor</h2>
                        <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#add-vendor-modal">
							<i class="ph ph-x text-sm"></i>
						</button>
                    </div>
                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Vendor Name <span class="text-danger">*</span></label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Contact Person</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Email <span class="text-danger">*</span></label>
                                <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Country</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>USA</option>
                                    <option>Canada</option>
                                    <option>UK</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Status</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 mt-5">
							<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-modal">Cancel</button>
							<button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Create New</button>
						</div>
                    </form>
                </div>
			</div>
		</div>
    </div>

    <!-- Edit Vendor Modal -->
	<div id="edit-vendor-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
		<div class="min-h-screen flex items-center justify-center px-4">
			<div class="max-w-[420px] w-full mx-auto">
				<div class="bg-white rounded-md pointer-events-auto p-5">
					<div class="flex items-center justify-between mb-5">
                        <h2 class="text-base font-bold text-title">Edit Vendor</h2>
                        <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#edit-vendor-modal">
							<i class="ph ph-x text-sm"></i>
						</button>
                    </div>
                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Vendor Name <span class="text-danger">*</span></label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Alpha Supplies Inc">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Contact Person</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="John Doe">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Email <span class="text-danger">*</span></label>
                                <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="johndoe@example.com">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="123-456-7890">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Country</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>USA</option>
                                    <option>Canada</option>
                                    <option>UK</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Status</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-3 mt-5">
							<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-vendor-modal">Cancel</button>
							<button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Save Changes</button>
						</div>
                    </form>
                </div>
			</div>
		</div>

	</div> 

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
    setup() {
        const submitForm = () => {
            router.push("/purchase/vendors");
        };

        return {
            submitForm,
        };
    },
}
</script>
