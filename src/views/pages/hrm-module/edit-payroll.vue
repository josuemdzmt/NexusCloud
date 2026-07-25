<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div>
                    <div class="flex items-center gap-2 text-sm text-default mb-1">
                        <router-link :to="all_routes.hrmDashboard" class="hover:text-primary">HRM</router-link>
                        <i class="ph ph-caret-right text-[10px]"></i>
                        <router-link :to="all_routes.payroll" class="hover:text-primary">Payroll</router-link>
                        <i class="ph ph-caret-right text-[10px]"></i> <span>Edit Payroll</span>
                    </div>
                    <h1 class="text-gray-900 text-xl font-bold mb-0">Edit Payroll</h1>
                </div>
                <div class="flex items-center gap-2"><router-link :to="all_routes.payroll" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancel</router-link>
                    <button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Changes</button>
                </div>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-8 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Payroll Details</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Payroll ID</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="#PR0020">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Employee <span class="text-danger">*</span></label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>Ethan Walker</option>
                                    <option>Madison Clark</option>
                                    <option>James Harris</option>
                                    <option>Avery Thompson</option>
                                    <option>Benjamin Wright</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Designation</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>Manager</option>
                                    <option>Developer</option>
                                    <option>Designer</option>
                                    <option>HR Manager</option>
                                    <option>Accountant</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Department</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option selected>Engineering</option>
                                    <option>Design</option>
                                    <option>HR</option>
                                    <option>Finance</option>
                                    <option>Sales</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Payroll Month <span class="text-danger">*</span></label>
                                <a-date-picker v-model:value="payrollMonth" class="w-full" />
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Payment Date</label>
                                <a-date-picker v-model:value="paymentDate" class="w-full" />
                            </div>
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Earnings</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Basic Salary <span class="text-danger">*</span></label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="6500">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">HRA</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="400">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Conveyance</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="150">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Bonus</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="500">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Other Allowances</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="50">
                            </div>
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Deductions</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Provident Fund (PF)</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="520">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Professional Tax</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="150">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">TDS</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="100">
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Other Deductions</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="30">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Net Salary</h2>
                        <div class="space-y-2">
                            <div class="flex items-center justify-between text-sm text-default"><span>Total Earnings</span><span>$7,600</span></div>
                            <div class="flex items-center justify-between text-sm text-default"><span>Total Deductions</span><span>$800</span></div>
                            <div class="flex items-center justify-between text-sm font-semibold text-title border-t border-border-color pt-2"><span>Net Salary</span><span>$6,800</span></div>
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg font-bold text-gray-900 mb-4">Status</h2>
                        <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            <option selected>Paid</option>
                            <option>Pending</option>
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
            payrollMonth: null,
            paymentDate: null,
        };
    },
}
</script>
