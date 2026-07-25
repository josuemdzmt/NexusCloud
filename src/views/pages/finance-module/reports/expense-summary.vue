<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Expense Summary</h1>
                <div class="flex items-center flex-wrap gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i>Print</button>
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

            <!-- KPIs -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3"> 
                <div class="bg-success/10 border border-border-color rounded-md p-4 flex items-center justify-between"><div><p class="text-sm text-default mb-1">Total Expenses</p><h2 class="text-xl font-bold text-gray-900 mb-0">$15,450</h2></div><div class="size-10 rounded-md bg-success flex items-center justify-center"><i class="ph-duotone ph-calendar-check text-white text-lg"></i></div></div>
                <div class="bg-info/10 border border-border-color rounded-md p-4 flex items-center justify-between"><div><p class="text-sm text-default mb-1">Highest Category</p><h2 class="text-xl font-bold text-gray-900 mb-0">Maintanance</h2></div><div class="size-10 rounded-md bg-info flex items-center justify-center"><i class="ph-duotone ph-grid-four text-white text-lg"></i></div></div>
                <div class="bg-orange/10 border border-border-color rounded-md p-4 flex items-center justify-between"><div><p class="text-sm text-default mb-1">Average Expense</p><h2 class="text-xl font-bold text-gray-900 mb-0">$1,275</h2></div><div class="size-10 rounded-md bg-orange flex items-center justify-center"><i class="ph-duotone ph-chart-bar text-white text-lg"></i></div></div>
                <div class="bg-pink/10 border border-border-color rounded-md p-4 flex items-center justify-between"><div><p class="text-sm text-default mb-1">Expense Growth</p><h2 class="text-xl font-bold text-gray-900 mb-0">+8%</h2></div><div class="size-10 rounded-md bg-pink flex items-center justify-center"><i class="ph-duotone ph-trend-up text-white text-lg"></i></div></div>
            </div>

            <div class="bg-white border border-border-color rounded-md p-4">
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
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked>Office Supplies</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Travel</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Utilities</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0"> Rent</label>
                                    <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white"><input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0">Marketing</label>
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
                        <button type="button" class="size-7 rounded-md border border-border-color bg-white inline-flex items-center justify-center hover:bg-light cursor-pointer"><i class="ph-duotone ph-rows"></i></button>
                        <button type="button" class="size-7 rounded-md border border-border-color bg-white inline-flex items-center justify-center hover:bg-light cursor-pointer"><i class="ph-duotone ph-arrows-clockwise"></i></button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead><tr class="text-sm text-default border-b border-border-color"><th class="text-left py-2 px-2 font-semibold text-gray-900">Expense ID</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Expense Name</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Expense Category</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Amount</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Payment Method</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Expense Date</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Description</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Status</th></tr></thead>
                        <tbody>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0020</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Stationery Purchase</td><td class="py-2.5 px-2 text-sm text-default">Office Supplies</td><td class="py-2.5 px-2 text-sm text-gray-900">$10,000</td><td class="py-2.5 px-2 text-sm text-default">Cash</td><td class="py-2.5 px-2 text-sm text-default">11 Sep 2025</td><td class="py-2.5 px-2 text-sm text-default">Bulk stationery for Q3 operations.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0019</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Sales Team Flights</td><td class="py-2.5 px-2 text-sm text-default">Travel</td><td class="py-2.5 px-2 text-sm text-gray-900">$5,000</td><td class="py-2.5 px-2 text-sm text-default">Credit Card</td><td class="py-2.5 px-2 text-sm text-default">05 Sep 2025</td><td class="py-2.5 px-2 text-sm text-default">Tickets for sales team conference.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0018</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Utility Bill</td><td class="py-2.5 px-2 text-sm text-default">Utilities</td><td class="py-2.5 px-2 text-sm text-gray-900">$25,000</td><td class="py-2.5 px-2 text-sm text-default">Debit Card</td><td class="py-2.5 px-2 text-sm text-default">27 Aug 2025</td><td class="py-2.5 px-2 text-sm text-default">Monthly electricity and water bills.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Approved</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0017</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Office Rent</td><td class="py-2.5 px-2 text-sm text-default">Rent</td><td class="py-2.5 px-2 text-sm text-gray-900">$15,500</td><td class="py-2.5 px-2 text-sm text-default">UPI</td><td class="py-2.5 px-2 text-sm text-default">16 Aug 2025</td><td class="py-2.5 px-2 text-sm text-default">Monthly office rent for September.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0016</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Google Ad Campaign</td><td class="py-2.5 px-2 text-sm text-default">Marketing</td><td class="py-2.5 px-2 text-sm text-gray-900">$34,000</td><td class="py-2.5 px-2 text-sm text-default">Bank Transfer</td><td class="py-2.5 px-2 text-sm text-default">25 Jul 2025</td><td class="py-2.5 px-2 text-sm text-default">PPC ads for product launch.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0015</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Cloud Hosting Fees</td><td class="py-2.5 px-2 text-sm text-default">IT Services</td><td class="py-2.5 px-2 text-sm text-gray-900">$28,000</td><td class="py-2.5 px-2 text-sm text-default">Cash</td><td class="py-2.5 px-2 text-sm text-default">12 Jul 2025</td><td class="py-2.5 px-2 text-sm text-default">Monthly cloud hosting &amp; support fees.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Approved</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0014</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Local Transport</td><td class="py-2.5 px-2 text-sm text-default">Travel</td><td class="py-2.5 px-2 text-sm text-gray-900">$1,45,000</td><td class="py-2.5 px-2 text-sm text-default">Credit Card</td><td class="py-2.5 px-2 text-sm text-default">23 Jun 2025</td><td class="py-2.5 px-2 text-sm text-default">Client meeting transport costs.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0013</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Leadership Training</td><td class="py-2.5 px-2 text-sm text-default">Employee Training</td><td class="py-2.5 px-2 text-sm text-gray-900">$2,70,000</td><td class="py-2.5 px-2 text-sm text-default">Debit Card</td><td class="py-2.5 px-2 text-sm text-default">07 Jun 2025</td><td class="py-2.5 px-2 text-sm text-default">Training for senior managers.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-warning-transparent text-warning px-2 py-0.5 rounded">Pending</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0012</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Office Deep Cleaning</td><td class="py-2.5 px-2 text-sm text-default">Maintenance</td><td class="py-2.5 px-2 text-sm text-gray-900">$3,00,000</td><td class="py-2.5 px-2 text-sm text-default">UPI</td><td class="py-2.5 px-2 text-sm text-default">28 May 2025</td><td class="py-2.5 px-2 text-sm text-default">Quarterly office deep cleaning service.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-info-transparent text-info px-2 py-0.5 rounded">Approved</span></td></tr>
                            <tr class="border-b border-border-color last:border-0"><td class="py-2.5 px-2 text-sm text-default"><a href="#">#EXP0011</a></td><td class="py-2.5 px-2 text-sm font-semibold text-title">Office Insurance</td><td class="py-2.5 px-2 text-sm text-default">Insurance</td><td class="py-2.5 px-2 text-sm text-gray-900">$5,50,000</td><td class="py-2.5 px-2 text-sm text-default">Bank Transfer</td><td class="py-2.5 px-2 text-sm text-default">18 May 2025</td><td class="py-2.5 px-2 text-sm text-default">Quarterly office &amp; asset insurance.</td><td class="py-2.5 px-2"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">Paid</span></td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border-color">
                    <div class="flex items-center gap-2"><span class="text-sm text-default">Showing</span>
                        <select class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28">
                            <option>10 / Pages</option>
                            <option>25 / Pages</option>
                            <option>50 / Pages</option>
                            <option>100 / Pages</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-1"><button type="button" class="size-7 rounded bg-dark text-white inline-flex items-center justify-center cursor-pointer">1</button><button type="button" class="size-7 rounded text-gray-900 hover:bg-light inline-flex items-center justify-center cursor-pointer">2</button><button type="button" class="size-7 rounded text-gray-900 hover:bg-light inline-flex items-center justify-center cursor-pointer">3</button><button type="button" class="size-7 rounded border border-border-color bg-white text-gray-900 hover:bg-light inline-flex items-center justify-center cursor-pointer ms-2"><i class="ph ph-caret-left"></i></button><button type="button" class="size-7 rounded border border-border-color bg-white text-gray-900 hover:bg-light inline-flex items-center justify-center cursor-pointer"><i class="ph ph-caret-right"></i></button></div>
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
