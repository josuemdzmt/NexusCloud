<template>
    <!-- Add Role Modal -->
    <div id="add-role-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Add Role</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#add-role-modal"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4 grid grid-cols-12 gap-3">
                    <div class="col-span-12">
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Role <span class="text-danger">*</span></label>
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Created Date <span class="text-danger">*</span></label>
                        <a-date-picker v-model:value="addRoleCreatedDate" class="w-full" placeholder="dd/mm/yyyy" />
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Status <span class="text-danger">*</span></label>
                        <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            <option>Select</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
                <div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-role-modal">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Add Role</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Role Modal -->
    <div id="edit-role-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Edit Role</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#edit-role-modal"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4 grid grid-cols-12 gap-3">
                    <div class="col-span-12">
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Role <span class="text-danger">*</span></label>
                        <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Manager">
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Created Date <span class="text-danger">*</span></label>
                        <a-date-picker v-model:value="editRoleCreatedDate" class="w-full" placeholder="dd/mm/yyyy" />
                    </div>
                    <div class="col-span-12 sm:col-span-6">
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Status <span class="text-danger">*</span></label>
                        <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            <option>Select</option>
                            <option selected>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
                <div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-role-modal">Cancel</button>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Changes</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Permission Modal -->
    <div id="permission-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
                <div class="flex justify-between items-center p-4 border-b border-border-color">
                    <h2 class="text-base font-bold text-title">Permission</h2>
                    <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#permission-modal"><i class="ph ph-x text-sm"></i></button>
                </div>
                <div class="p-4">
                    <h2 class="text-base font-bold text-title mb-3">Inventory</h2>
                    <div class="overflow-x-auto border border-border-color border-b-0 mb-4">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-sm text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Modules</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Create</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Edit</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Delete</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">View</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Allow All</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Products</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Categories</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Suppliers</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-base font-bold text-title mb-3">Sales</h2>
                    <div class="overflow-x-auto border border-border-color border-b-0 mb-4">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-sm text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Modules</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Create</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Edit</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Delete</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">View</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Allow All</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Customers</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Credit Notes</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Cash Sales</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-base font-bold text-title mb-3">Purchase</h2>
                    <div class="overflow-x-auto border border-border-color border-b-0">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-sm text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Modules</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Create</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Edit</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Delete</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">View</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Allow All</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Purchase Orders</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Purchase Return</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">Purchases</td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0">
                                    </td>
                                    <td class="py-2.5 px-2">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 focus-visible:outline-none focus:ring-offset-0 allow-all">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>

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

<script>
export default {
    data() {
        return {
            addRoleCreatedDate: null,
            editRoleCreatedDate: null,
        };
    },
}
</script>
