<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div>
                    <div class="flex items-center gap-2 text-sm text-default mb-1">
                        <router-link :to="all_routes.employees" class="hover:text-primary">Employees</router-link> 
                        <i class="ph ph-caret-right text-[10px]"></i> 
                        <span>Add New</span>
                    </div>
                    <h1 class="text-gray-900 text-xl font-bold mb-0">Add Employee</h1></div>
                <div class="flex items-center gap-2">
                    <router-link :to="all_routes.employees" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancel</router-link>
                    <button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Employee</button>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-8 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Personal Information</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">First Name 
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Last Name 
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Email 
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="email" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Phone</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Date of Birth</label>
                                <a-date-picker v-model:value="dateOfBirth" class="w-full" placeholder="dd/mm/yyyy" />
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Gender</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Employment Details</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Employee ID</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Join Date</label>
                                <a-date-picker v-model:value="joinDate" class="w-full" placeholder="dd/mm/yyyy" />
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Designation</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Manager</option>
                                    <option>Developer</option>
                                    <option>HR Manager</option>
                                    <option>Finance Manager</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Department</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Engineering</option>
                                    <option>Design</option>
                                    <option>HR</option>
                                    <option>Finance</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Shift</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Day</option>
                                    <option>Night</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Salary</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Profile Photo</h2>
                        <div class="relative border-2 border-dashed border-border-color rounded-md p-6 text-center cursor-pointer hover:border-primary">
                            <i class="ph-duotone ph-user-circle text-4xl text-default"></i>
                            <p class="text-sm text-default mt-2 mb-0">Click to upload</p>
                            <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Status</h2>
                        <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';

export default {
    setup() {

        return {
            all_routes
        };
    },
    data() {
        return {
            dateOfBirth: null,
            joinDate: null,
        };
    },
}
</script>
