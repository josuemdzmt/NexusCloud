<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">


            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Project Analytics</h1>
                <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                    <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i>
                    </button>
                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                        <div class="p-2 space-y-1">
                            <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as PDF</a>
                            <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">Export as Excel</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Active Projects</p>
                            <h2 class="text-xl max-lg:text-lg font-bold text-gray-900 mb-0">28</h2>
                        </div>
                        <div class="size-9 rounded-md bg-primary-transparent flex items-center justify-center">
                            <i class="ph-duotone ph-folder-user text-primary"></i>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">On Schedule</p>
                            <h2 class="text-xl max-lg:text-lg font-bold text-gray-900 mb-0">87%</h2>
                        </div>
                        <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center">
                            <i class="ph-duotone ph-clock text-success"></i>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Budget Used</p>
                            <h2 class="text-xl max-lg:text-lg font-bold text-gray-900 mb-0">$2.4M</h2>
                        </div>
                        <div class="size-9 rounded-md bg-orange-transparent flex items-center justify-center">
                            <i class="ph-duotone ph-currency-circle-dollar text-orange"></i>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Team Utilization</p>
                            <h2 class="text-xl max-lg:text-lg font-bold text-gray-900 mb-0">82%</h2>
                        </div>
                        <div class="size-9 rounded-md bg-pink-transparent flex items-center justify-center">
                            <i class="ph-duotone ph-users text-pink"></i>
                        </div>
                    </div>
                </div>

            </div>

            <div class="bg-white border border-border-color rounded-md p-4">
                <p class="text-sm font-semibold text-title mb-3">Project Performance Overview</p>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Project</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Lead</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Progress</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Budget</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Spent</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Health</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm font-semibold text-title hover:text-primary transition">Office Management App</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="Ethan Walker">
                                        </a>
                                        <p class="text-sm"><a href="#" class="text-body hover:text-primary transition">Ethan Walker</a></p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="h-1.5 w-20 bg-light-500 rounded-full overflow-hidden">
                                            <div class="h-full bg-success rounded-full" style="width:95%"></div>
                                        </div><span class="text-[11px]">95%</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$120K</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$98K</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Healthy</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm font-semibold text-title hover:text-primary transition">Clinic Management</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="Madison Clark">
                                        </a>
                                        <p class="text-sm"><a href="#" class="text-body hover:text-primary transition">Madison Clark</a></p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="h-1.5 w-20 bg-light-500 rounded-full overflow-hidden">
                                            <div class="h-full bg-warning rounded-full" style="width:65%"></div>
                                        </div><span class="text-[11px]">65%</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$220K</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$180K</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">At Risk</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm font-semibold text-title hover:text-primary transition">Educational Platform</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-05.jpg" class="rounded-full border border-border-color shrink-0" alt="James Harris">
                                        </a>
                                        <p class="text-sm"><a href="#" class="text-body hover:text-primary transition">James Harris</a></p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="h-1.5 w-20 bg-light-500 rounded-full overflow-hidden">
                                            <div class="h-full bg-success rounded-full" style="width:100%"></div>
                                        </div><span class="text-[11px]">100%</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$340K</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$335K</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Completed</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm font-semibold text-title hover:text-primary transition">Chat &amp; Call Mobile App</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-06.jpg" class="rounded-full border border-border-color shrink-0" alt="Avery Thompson">
                                        </a>
                                        <p class="text-sm"><a href="#" class="text-body hover:text-primary transition">Avery Thompson</a></p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="h-1.5 w-20 bg-light-500 rounded-full overflow-hidden">
                                            <div class="h-full bg-info rounded-full" style="width:48%"></div>
                                        </div><span class="text-[11px]">48%</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$180K</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$92K</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">On Track</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <a href="#" class="text-sm font-semibold text-title hover:text-primary transition">POS Admin Software</a>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <a href="#" class="size-7 shrink-0">
                                            <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full border border-border-color shrink-0" alt="Harper Scott">
                                        </a>
                                        <p class="text-sm"><a href="#" class="text-body hover:text-primary transition">Harper Scott</a></p>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <div class="h-1.5 w-20 bg-light-500 rounded-full overflow-hidden">
                                            <div class="h-full bg-danger rounded-full" style="width:32%"></div>
                                        </div><span class="text-[11px]">32%</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$95K</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-left">$78K</td>
                                <td class="py-2.5 px-2"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Critical</span></td>
                            </tr>
                        </tbody>
                    </table>
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