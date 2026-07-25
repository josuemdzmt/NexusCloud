<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Attendance</h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i> Print</button>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> 
                            <i class="icon-download font-normal"></i> Export <i class="icon-chevron-down"></i> 
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
                </div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-4 pb-0">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div class="flex items-center gap-2 flex-wrap">
                        <div class="relative w-64 search-input"> 
                            <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                            <input type="text" class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-lg bg-white focus:outline-none focus:ring-0" placeholder="Search"> 
                        </div>
                        <div class="relative rangepicker-input w-[220px] h-[28px] leading-none">
                            <span class="absolute inset-y-0 left-0 flex items-center px-3 text-muted-foreground text-dark text-xs!">
                                <i class="icon-calendar"></i>
                            </span>
                            <a-range-picker v-model:value="rangeDate" type="text" class="form-input text-xs! h-[28px] inline-block w-full bg-light border-border-color rounded-md focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color pl-8! ps-8!" data-provider="flatpickr" data-date-format="d M y" data-range-date="true" value="01 Jan 26 to 20 Jan 26" id="picker" />
                        </div>
                    </div>
                    <div class="flex items-center flex-wrap gap-2">
                        <div class="hs-dropdown [--placement:bottom-left] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>Ethan Walker
                                    </label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Madison Clark
                                    </label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">James Harris
                                    </label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Avery Thompson
                                    </label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                                        <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Benjamin Wright
                                    </label>
                                    <div class="flex items-center justify-between gap-2 mt-3">
                                        <button type="button" class="btn-sm bg-white w-full border border-border-color text-gray-900 flex items-center justify-center hover:bg-light cursor-pointer">Cancel</button>
                                        <button type="button" class="btn-sm bg-dark w-full border border-dark text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white cursor-pointer">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white focus:bg-primary focus:border-primary focus:text-white  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <i class="icon-arrow-up-down font-normal"></i> Sort By <i class="icon-chevron-down"></i>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1"
                            role="menu" aria-orientation="vertical" tabindex="-1">
                                <div class="p-2 space-y-1">
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        A - Z
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        Z - A
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        Newest
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        Oldest
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        High
                                    </a>
                                    <a class="flex items-center px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"
                                        href="#">
                                        Low
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Employee</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Check In</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Check Out</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Hours</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Late</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-03.jpg" class="size-7 rounded-full shrink-0" alt="user">
                                        <span class="text-sm font-semibold text-title">Ethan Walker</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-default">21 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">09:00 AM</td>
                                <td class="py-2.5 px-2 text-sm text-default">06:05 PM</td>
                                <td class="py-2.5 px-2 text-sm text-default">9h 5m</td>
                                <td class="py-2.5 px-2 text-sm text-default">-</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Present</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-04.jpg" class="size-7 rounded-full shrink-0" alt="user">
                                        <span class="text-sm font-semibold text-title">Madison Clark</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-default">21 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">09:15 AM</td>
                                <td class="py-2.5 px-2 text-sm text-default">06:00 PM</td>
                                <td class="py-2.5 px-2 text-sm text-default">8h 45m</td>
                                <td class="py-2.5 px-2 text-sm text-default">15 min</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Late</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-05.jpg" class="size-7 rounded-full shrink-0" alt="user">
                                        <span class="text-sm font-semibold text-title">James Harris</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-default">21 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">08:55 AM</td>
                                <td class="py-2.5 px-2 text-sm text-default">05:50 PM</td>
                                <td class="py-2.5 px-2 text-sm text-default">8h 55m</td>
                                <td class="py-2.5 px-2 text-sm text-default">-</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Present</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-06.jpg" class="size-7 rounded-full shrink-0" alt="user">
                                        <span class="text-sm font-semibold text-title">Avery Thompson</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-default">21 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">-</td>
                                <td class="py-2.5 px-2 text-sm text-default">-</td>
                                <td class="py-2.5 px-2 text-sm text-default">-</td>
                                <td class="py-2.5 px-2 text-sm text-default">-</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">Absent</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/img/avatar/avatar-07.jpg" class="size-7 rounded-full shrink-0" alt="user">
                                        <span class="text-sm font-semibold text-title">Benjamin Wright</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-default">21 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">09:05 AM</td>
                                <td class="py-2.5 px-2 text-sm text-default">06:10 PM</td>
                                <td class="py-2.5 px-2 text-sm text-default">9h 5m</td>
                                <td class="py-2.5 px-2 text-sm text-default">5 min</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Present</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-08.jpg" class="size-7 rounded-full shrink-0" alt="user">
                                        <span class="text-sm font-semibold text-title">Chloe Mitchell</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-default">21 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">08:50 AM</td>
                                <td class="py-2.5 px-2 text-sm text-default">05:45 PM</td>
                                <td class="py-2.5 px-2 text-sm text-default">8h 55m</td>
                                <td class="py-2.5 px-2 text-sm text-default">-</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Present</span>
                                </td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-09.jpg" class="size-7 rounded-full shrink-0" alt="user">
                                        <span class="text-sm font-semibold text-title">Daniel Roberts</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-default">21 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">10:30 PM</td>
                                <td class="py-2.5 px-2 text-sm text-default">07:00 AM</td>
                                <td class="py-2.5 px-2 text-sm text-default">8h 30m</td>
                                <td class="py-2.5 px-2 text-sm text-default">-</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Night Shift</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2">
                                    <div class="flex items-center gap-2"><img src="@/assets/img/avatar/avatar-10.jpg" class="size-7 rounded-full shrink-0" alt="user">
                                        <span class="text-sm font-semibold text-title">Grace Adams</span>
                                    </div>
                                </td>
                                <td class="py-2.5 px-2 text-sm text-default">21 May 2026</td>
                                <td class="py-2.5 px-2 text-sm text-default">09:30 AM</td>
                                <td class="py-2.5 px-2 text-sm text-default">01:00 PM</td>
                                <td class="py-2.5 px-2 text-sm text-default">3h 30m</td>
                                <td class="py-2.5 px-2 text-sm text-default">30 min</td>
                                <td class="py-2.5 px-2">
                                    <span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Half Day</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            rangeDate: null,
        };
    },
}
</script>
