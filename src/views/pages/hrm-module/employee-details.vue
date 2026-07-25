<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3"><router-link :to="all_routes.employees" class="hover:text-primary">Employees</router-link> <i class="ph ph-caret-right text-[10px]"></i> 
                <span>Ethan Walker</span>
            </div>
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-4">
                    <div class="bg-white border border-border-color rounded-md p-4 text-center">
                        <img src="@/assets/img/avatar/avatar-03.jpg" class="size-24 rounded-full mx-auto mb-3" alt="user">
                        <h1 class="text-base font-semibold text-title mb-1">Ethan Walker</h1>
                        <p class="text-sm text-default mb-0">Engineering Manager</p>
                        <span class="text-[11px] bg-success text-white px-2 py-0.5 rounded-md mb-3 inline-block">Active</span>
                        <div class="text-sm text-default text-left space-y-2 pt-5 mt-5 border-t border-border-color">
                            <div class="flex justify-between"><span>Employee ID</span>
                                <span class="text-gray-900">#EMP0020</span>
                            </div>
                            <div class="flex justify-between"><span>Email</span>
                                <span class="text-gray-900">ethan@example.com</span>
                            </div>
                            <div class="flex justify-between"><span>Phone</span><span class="text-gray-900">+1 202 555 0173</span></div>
                            <div class="flex justify-between"><span>Department</span>
                                <span class="text-gray-900">Engineering</span>
                            </div>
                            <div class="flex justify-between"><span>Join Date</span>
                                <span class="text-gray-900">11 Sep 2023</span>
                            </div>
                            <div class="flex justify-between"><span>Shift</span>
                                <span class="text-gray-900">Day</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-8">
                    <div class="bg-white border border-border-color rounded-md">
                        <div class="flex items-center gap-1 border-b border-border-color overflow-x-auto"><a href="#about" class="px-4 py-3 text-sm font-semibold text-gray-900 border-b-2 border-primary -mb-px">About</a><a href="#attendance" class="px-4 py-3 text-sm text-default hover:text-gray-900">Attendance</a><a href="#leaves" class="px-4 py-3 text-sm text-default hover:text-gray-900">Leaves</a><a href="#payroll" class="px-4 py-3 text-sm text-default hover:text-gray-900">Payroll</a><a href="#documents" class="px-4 py-3 text-sm text-default hover:text-gray-900">Documents</a></div>
                        <div class="p-4">
                            <h2 class="text-sm font-semibold text-title mb-3">Personal Details</h2>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p class="text-default mb-1">Date of Birth</p>
                                    <p class="text-gray-900 font-medium mb-0">15 Mar 1988</p>
                                </div>
                                <div>
                                    <p class="text-default mb-1">Gender</p>
                                    <p class="text-gray-900 font-medium mb-0">Male</p>
                                </div>
                                <div>
                                    <p class="text-default mb-1">Marital Status</p>
                                    <p class="text-gray-900 font-medium mb-0">Married</p>
                                </div>
                                <div>
                                    <p class="text-default mb-1">Nationality</p>
                                    <p class="text-gray-900 font-medium mb-0">American</p>
                                </div>
                                <div class="col-span-2">
                                    <p class="text-default mb-1">Address</p>
                                    <p class="text-gray-900 font-medium mb-0">123 Main Street, New York, NY 10001, USA</p>
                                </div>
                            </div>
                            <h2 class="text-sm font-semibold text-title mb-3 mt-6">Employment Details</h2>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p class="text-default mb-1">Salary</p>
                                    <p class="text-gray-900 font-medium mb-0">$6,500/month</p>
                                </div>
                                <div>
                                    <p class="text-default mb-1">Manager</p>
                                    <p class="text-gray-900 font-medium mb-0">CEO (Self)</p>
                                </div>
                                <div>
                                    <p class="text-default mb-1">Employment Type</p>
                                    <p class="text-gray-900 font-medium mb-0">Full Time</p>
                                </div>
                                <div>
                                    <p class="text-default mb-1">Work Location</p>
                                    <p class="text-gray-900 font-medium mb-0">HQ Office</p>
                                </div>
                            </div>
                        </div>
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
}
</script>
