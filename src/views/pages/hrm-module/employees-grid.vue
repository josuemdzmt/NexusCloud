<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Employees</h1>
                <div class="flex items-center gap-2">
                    <div class="inline-flex bg-white border border-border-color rounded-md p-1">
                        <router-link :to="all_routes.employees" class="btn-sm bg-white text-gray-900 hover:bg-light inline-flex items-center gap-1 cursor-pointer">
                        <i class="ph-duotone ph-rows"></i>
                    </router-link>
                        <router-link :to="all_routes.employeesGrid" class="btn-sm bg-dark text-white inline-flex items-center gap-1 cursor-pointer">
                            <i class="ph-duotone ph-grid-four"></i>
                        </router-link>
                    </div>
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer">
                        <i class="ph-duotone ph-printer"></i> Print
                    </button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                                <i class="icon-download font-normal"></i> Export 
                                <i class="icon-chevron-down"></i> 
                            </button>
                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1"> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Export as PDF
                                    </a> 
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                        Export as Excel
                                    </a> 
                                </div>
                            </div>
                        </div>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1">
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as PDF</a> 
                                <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as Excel</a>
                            </div>
                        </div>
                    </div><router-link :to="all_routes.addEmployee" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer"><i class="ph ph-plus"></i> Add New</router-link></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"> </div>
            <!-- <script>
            (function() {
                var grid = document.currentScript.previousElementSibling;
                var employees = [{
                    name: "Ethan Walker",
                    role: "Manager",
                    dept: "Engineering",
                    avatar: "avatar-03",
                    email: "ethan@example.com",
                    phone: "+1 202 555 0173"
                }, {
                    name: "Madison Clark",
                    role: "Designer",
                    dept: "Design",
                    avatar: "avatar-04",
                    email: "madison@example.com",
                    phone: "+91 98765 43210"
                }, {
                    name: "James Harris",
                    role: "Developer",
                    dept: "Engineering",
                    avatar: "avatar-05",
                    email: "james@example.com",
                    phone: "+1 416 555 8294"
                }, {
                    name: "Avery Thompson",
                    role: "HR Manager",
                    dept: "HR",
                    avatar: "avatar-06",
                    email: "avery@example.com",
                    phone: "+61 412 345 678"
                }, {
                    name: "Benjamin Wright",
                    role: "Accountant",
                    dept: "Finance",
                    avatar: "avatar-07",
                    email: "ben@example.com",
                    phone: "+49 1512 3456789"
                }, {
                    name: "Chloe Mitchell",
                    role: "Sales Rep",
                    dept: "Sales",
                    avatar: "avatar-08",
                    email: "chloe@example.com",
                    phone: "+81 90 1234 5678"
                }, {
                    name: "Daniel Roberts",
                    role: "DevOps",
                    dept: "Engineering",
                    avatar: "avatar-09",
                    email: "daniel@example.com",
                    phone: "+55 11 91234 5678"
                }, {
                    name: "Grace Adams",
                    role: "Marketing",
                    dept: "Marketing",
                    avatar: "avatar-10",
                    email: "grace@example.com",
                    phone: "+27 82 123 4567"
                }];
                grid.innerHTML = employees.map(e => '<div class="bg-white border border-border-color rounded-md p-4 text-center"><img src="@/assets/img/avatar/' + e.avatar + '.jpg" class="size-16 rounded-full mx-auto mb-3 border-2 border-light" alt="user"><h2 class="text-sm font-semibold text-title mb-0">' + e.name + '</h2><p class="text-sm text-default mb-2">' + e.role + '</p><span class="text-[11px] bg-primary-transparent text-primary px-2 py-0.5 rounded inline-block mb-3">' + e.dept + '</span><div class="text-[11px] text-default space-y-1 pt-3 border-t border-border-color"><div class="truncate flex items-center justify-center gap-1"><i class="ph ph-envelope"></i> ' + e.email + '</div><div><i class="ph ph-phone"></i> ' + e.phone + '</div></div></div>').join('');
            })();
            </script> -->
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