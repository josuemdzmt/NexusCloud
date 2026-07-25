<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Invoice Templates</h1>
                <div class="flex items-center gap-2">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer">Switch Template <i class="ph ph-caret-down text-[10px]"></i></button>
                </div>
            </div>

            <!-- Template tabs -->
            <nav class="flex items-center gap-2 border-b border-border-color mb-4 flex-wrap" aria-label="Invoice Templates" role="tablist" aria-orientation="horizontal">
                <button type="button" class="px-4 py-2 text-sm text-default -mb-px border-b-2 border-transparent cursor-pointer whitespace-nowrap hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden active" id="tpl-tab-1" aria-selected="true" data-hs-tab="#tpl-1" aria-controls="tpl-1" role="tab">General Invoice 1</button>
                <button type="button" class="px-4 py-2 text-sm text-default -mb-px border-b-2 border-transparent cursor-pointer whitespace-nowrap hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="tpl-tab-2" aria-selected="false" data-hs-tab="#tpl-2" aria-controls="tpl-2" role="tab">General Invoice 2</button>
                <button type="button" class="px-4 py-2 text-sm text-default -mb-px border-b-2 border-transparent cursor-pointer whitespace-nowrap hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="tpl-tab-3" aria-selected="false" data-hs-tab="#tpl-3" aria-controls="tpl-3" role="tab">General Invoice 3</button>
                <button type="button" class="px-4 py-2 text-sm text-default -mb-px border-b-2 border-transparent cursor-pointer whitespace-nowrap hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="tpl-tab-4" aria-selected="false" data-hs-tab="#tpl-4" aria-controls="tpl-4" role="tab">General Invoice 4</button>
                <button type="button" class="px-4 py-2 text-sm text-default -mb-px border-b-2 border-transparent cursor-pointer whitespace-nowrap hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden" id="tpl-tab-5" aria-selected="false" data-hs-tab="#tpl-5" aria-controls="tpl-5" role="tab">General Invoice 5</button>
            </nav>

            <!-- Invoice preview card -->
            <div class="bg-white border border-border-color rounded-md">
                <!-- Preview header -->
                <div class="flex items-center justify-between gap-3 px-5 py-3 border-b border-border-color">
                    <p class="text-sm font-semibold text-title mb-0">Preview</p>
                    <button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer"><i class="ph ph-x"></i></button>
                </div>

                <!-- Action bar -->
                <div class="flex flex-wrap items-center justify-end gap-2 px-5 py-3 border-b border-border-color">
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-download-simple"></i> Download PDF</button>
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-envelope"></i> Send Email</button>
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i> Print</button>
                </div>

                <!-- Template panes -->
                <div>

                    <!-- General Invoice 1 -->
                    <div id="tpl-1" role="tabpanel" aria-labelledby="tpl-tab-1">
                        <div class="p-6 lg:p-8" id="printableCard">
                            <!-- Top brand row -->
                            <div class="flex flex-wrap items-start justify-between gap-3 mb-6">
                                <div>
                                    <div class="mb-2">
                                        <div class="invoice-logo block dark:hidden"> 
                                            <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10" alt="logo"></router-link>
                                        </div>
                                        <div class="invoice-logo-white hidden dark:block">
                                            <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10" alt="logo"></router-link>
                                        </div>
                                    </div>
                                    <p class="text-[11px] text-default mb-0">Original For Recipient</p>
                                </div>
                                <div class="text-end">
                                    <h2 class="text-xl font-bold text-primary mb-1">TAX INVOICE</h2>
                                    <p class="text-sm text-default mb-0">Date: <span class="text-gray-900 font-medium">05/09/2025</span> <span class="ms-3">Invoice No:</span> <span class="text-gray-900 font-medium">INV 00001</span></p>
                                </div>
                            </div>

                            <!-- 3-col header info -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 mb-6 border-b border-border-color">
                                <div>
                                    <p class="text-sm font-semibold text-primary mb-2">Invoice To :</p>
                                    <p class="text-sm font-semibold text-title mb-1">Michael Anderson</p>
                                    <p class="text-[11px] text-default mb-1">299 Star Trek Drive, Panama City,<br>Florida, 32405, USA.</p>
                                    <p class="text-[11px] text-default mb-0">Email : <span class="text-gray-900">michael@example.com</span></p>
                                    <p class="text-[11px] text-default mb-0">Phone : <span class="text-gray-900">+1 917 452 8093</span></p>
                                </div>
                                <div>
                                    <p class="text-sm font-semibold text-primary mb-2">Pay To :</p>
                                    <p class="text-sm font-semibold text-title mb-1">James Carter</p>
                                    <p class="text-[11px] text-default mb-1">1448 Maplewood Lane, Austin,<br>Texas, 73301, USA.</p>
                                    <p class="text-[11px] text-default mb-0">Email : <span class="text-gray-900">james@example.com</span></p>
                                    <p class="text-[11px] text-default mb-0">Phone : <span class="text-gray-900">+1 305 678 2345</span></p>
                                </div>
                                <div class="md:text-end">
                                    <p class="text-sm font-semibold text-primary mb-2">Dreamguys</p>
                                    <p class="text-[11px] text-default mb-0">GST IN : <span class="text-gray-900">22AABCU9603R1ZX</span></p>
                                    <p class="text-[11px] text-default mb-0">Address : <span class="text-gray-900">782 Lincoln Avenue, Sacramento, California, 94203, USA.</span></p>
                                    <p class="text-[11px] text-default mb-0">Mobile : <span class="text-gray-900">+91 98765 43210</span></p>
                                </div>
                            </div>

                            <!-- Items table -->
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead><tr class="text-sm bg-light border-b border-border-color"><th class="text-left py-2 px-2 font-semibold text-gray-900">#</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Item</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Qty</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Price</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Discount</th><th class="text-right py-2 px-2 font-semibold text-gray-900">Total</th></tr></thead>
                                    <tbody>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-title font-semibold">Apple iPhone 15</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$400.00</td><td class="py-3 px-2 text-sm text-gray-900">$5.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$395.00</td></tr>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">2</td><td class="py-3 px-2 text-sm text-title font-semibold">Dell XPS 13 9310</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$180.00</td><td class="py-3 px-2 text-sm text-gray-900">$2.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$178.00</td></tr>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">4</td><td class="py-3 px-2 text-sm text-title font-semibold">Bose QuietComfort 45</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$50.00</td><td class="py-3 px-2 text-sm text-gray-900">$1.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$49.00</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Totals -->
                            <div class="flex justify-end mt-4">
                                <div class="w-full md:w-80 space-y-2 text-sm">
                                    <div class="flex items-center justify-between"><span class="text-default">Sub Total</span><span class="text-gray-900 font-medium">$620.00</span></div>
                                    <div class="flex items-center justify-between"><span class="text-default">Tax</span><span class="text-gray-900 font-medium">$30.00</span></div>
                                    <div class="flex items-center justify-between"><span class="text-default">Discount</span><span class="text-gray-900 font-medium">$8.00</span></div>
                                    <div class="flex items-center justify-between"><span class="text-default">Roundoff Value</span><span class="text-gray-900 font-medium">$0.00</span></div>
                                </div>
                            </div>

                            <!-- Total row -->
                            <div class="flex flex-wrap items-center justify-between gap-3 mt-4 py-3 border-t border-b border-border-color">
                                <p class="text-sm text-default mb-0">Total Items / Qty : <span class="text-gray-900 font-medium">3 / 3</span></p>
                                <div class="flex items-center gap-3">
                                    <p class="text-sm font-semibold text-gray-900 mb-0">Total</p>
                                    <p class="text-base font-bold text-gray-900 mb-0">$642.00</p>
                                </div>
                            </div>

                            <p class="text-sm text-default mt-4 pb-4 mb-6 border-b border-border-color">Total amount ( in words ) : <span class="text-gray-900 font-medium">Six Hundred Forty Two Dollars Only.</span></p>

                            <!-- Bank + signature -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <p class="text-sm font-semibold text-title mb-2">Bank Details</p>
                                    <p class="text-[11px] text-default mb-0">Bank : <span class="text-gray-900">YES Bank</span></p>
                                    <p class="text-[11px] text-default mb-0">Account : <span class="text-gray-900">6677889944551</span></p>
                                    <p class="text-[11px] text-default mb-0">IFSC : <span class="text-gray-900">YESBBIN4567</span></p>
                                    <p class="text-[11px] text-default mb-0">BRANCH : <span class="text-gray-900">RS Puram</span></p>
                                </div>
                                <div class="md:text-end">
                                    <p class="text-sm text-default mb-2">For Dreamguys</p>
                                    <p class="font-['cursive'] italic text-lg text-gray-900">James Paulo</p>
                                </div>
                            </div>

                            <!-- T&C -->
                            <div class="pt-4 border-t border-border-color mb-4">
                                <p class="text-sm font-semibold text-title mb-2">Terms &amp; Conditions :</p>
                                <p class="text-[11px] text-default mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>
                                <p class="text-[11px] text-default mb-0">2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>
                            </div>
                            <p class="text-sm text-default mb-0">Thanks for your Business</p>
                        </div>
                    </div>

                    <!-- General Invoice 2 -->
                    <div id="tpl-2" class="hidden" role="tabpanel" aria-labelledby="tpl-tab-2">
                        <div class="p-6 lg:p-8">
                            <!-- Top brand row -->
                            <div class="flex flex-wrap items-start justify-between gap-3 pb-6 mb-6 border-b border-border-color">
                                <div>
                                    <div class="mb-2">
                                        <div class="invoice-logo block dark:hidden"> 
                                            <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10" alt="logo"></router-link>
                                        </div>
                                        <div class="invoice-logo-white hidden dark:block">
                                            <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10" alt="logo"></router-link>
                                        </div>
                                    </div>
                                    <p class="text-[11px] text-default mb-0">Original For Recipient</p>
                                </div>
                                <div class="text-end">
                                    <h3 class="text-xl font-bold text-title mb-1">TAX INVOICE</h3>
                                    <p class="text-sm text-default mb-0">Date: <span class="text-gray-900 font-medium">05/09/2025</span> <span class="ms-3">Invoice No:</span> <span class="text-gray-900 font-medium">INV 00001</span></p>
                                </div>
                            </div>

                            <!-- Company info -->
                            <div class="mb-6">
                                <p class="text-sm font-semibold text-title mb-3">Dreamguys</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <p class="text-[11px] text-default mb-1">GST IN :</p>
                                        <p class="text-sm text-gray-900 mb-0">22AABCU9603R1ZX</p>
                                    </div>
                                    <div>
                                        <p class="text-[11px] text-default mb-1">Mobile :</p>
                                        <p class="text-sm text-gray-900 mb-0">+91 98765 43210</p>
                                    </div>
                                    <div>
                                        <p class="text-[11px] text-default mb-1">Address :</p>
                                        <p class="text-sm text-gray-900 mb-0">782 Lincoln Avenue, Sacramento, California, 94203, USA.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Invoice To / Pay To -->
                            <div class="flex flex-wrap items-start justify-between gap-6 mb-6">
                                <div>
                                    <p class="text-sm font-semibold text-title mb-2">Invoice To :</p>
                                    <p class="text-sm font-semibold text-title mb-1">Michael Anderson</p>
                                    <p class="text-[11px] text-default mb-1">299 Star Trek Drive, Panama City,<br>Florida, 32405, USA.</p>
                                    <p class="text-[11px] text-default mb-0">Email : <span class="text-gray-900">michael@example.com</span></p>
                                    <p class="text-[11px] text-default mb-0">Phone : <span class="text-gray-900">+1 917 452 8093</span></p>
                                </div>
                                <div class="text-end">
                                    <p class="text-sm font-semibold text-title mb-2">Pay To :</p>
                                    <p class="text-sm font-semibold text-title mb-1">James Carter</p>
                                    <p class="text-[11px] text-default mb-1">1448 Maplewood Lane, Austin,<br>Texas, 73301, USA.</p>
                                    <p class="text-[11px] text-default mb-0">Email : <span class="text-gray-900">james@example.com</span></p>
                                    <p class="text-[11px] text-default mb-0">Phone : <span class="text-gray-900">+1 305 678 2345</span></p>
                                </div>
                            </div>

                            <!-- Items table -->
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead><tr class="text-sm bg-light border-b border-border-color"><th class="text-left py-2 px-2 font-semibold text-gray-900">#</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Item</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Qty</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Price</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Discount</th><th class="text-right py-2 px-2 font-semibold text-gray-900">Total</th></tr></thead>
                                    <tbody>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-title font-semibold">Apple iPhone 15</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$400.00</td><td class="py-3 px-2 text-sm text-gray-900">$5.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$395.00</td></tr>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">2</td><td class="py-3 px-2 text-sm text-title font-semibold">Dell XPS 13 9310</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$180.00</td><td class="py-3 px-2 text-sm text-gray-900">$2.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$178.00</td></tr>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">4</td><td class="py-3 px-2 text-sm text-title font-semibold">Bose QuietComfort 45</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$50.00</td><td class="py-3 px-2 text-sm text-gray-900">$1.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$49.00</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Important note + totals -->
                            <div class="flex flex-wrap items-start justify-between gap-6 mt-4">
                                <div class="max-w-xs">
                                    <p class="text-[11px] text-default mb-1">Important Note:</p>
                                    <p class="text-sm text-gray-900 mb-0">Delivery dates are not guaranteed and Seller has no liability for damages that may be incurred due to any delay.</p>
                                </div>
                                <div class="w-full md:w-72 space-y-2 text-sm">
                                    <div class="flex items-center justify-between"><span class="text-default">Sub Total</span><span class="text-gray-900 font-medium">$620.00</span></div>
                                    <div class="flex items-center justify-between"><span class="text-default">Tax</span><span class="text-gray-900 font-medium">$30.00</span></div>
                                    <div class="flex items-center justify-between"><span class="text-default">Discount</span><span class="text-gray-900 font-medium">$8.00</span></div>
                                </div>
                            </div>

                            <!-- Total band -->
                            <div class="flex flex-wrap items-center justify-between gap-3 mt-4 px-3 py-3 bg-light rounded-md">
                                <p class="text-sm text-default mb-0">Total Items / Qty : <span class="text-gray-900 font-medium">3 / 3</span></p>
                                <div class="flex items-center gap-3">
                                    <p class="text-sm font-semibold text-gray-900 mb-0">Total</p>
                                    <p class="text-base font-bold text-gray-900 mb-0">$642.00</p>
                                </div>
                            </div>

                            <p class="text-sm text-default mt-4 pb-4 mb-6 border-b border-border-color">Total amount ( in words ) : <span class="text-gray-900 font-medium">Six Hundred Forty Two Dollars Only.</span></p>

                            <!-- Payment info + signature -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <p class="text-sm font-semibold text-title mb-2">Payment Info</p>
                                    <p class="text-[11px] text-default mb-0">Debit Card : <span class="text-gray-900">465 *************645</span></p>
                                    <p class="text-[11px] text-default mb-0">Amount : <span class="text-gray-900">$642.00</span></p>
                                </div>
                                <div class="md:text-end">
                                    <p class="text-sm text-default mb-2">For Dreamguys</p>
                                    <p class="font-['cursive'] italic text-lg text-gray-900">James Paulo</p>
                                </div>
                            </div>

                            <!-- T&C -->
                            <div class="pt-4 border-t border-border-color mb-4">
                                <p class="text-sm font-semibold text-title mb-2">Terms &amp; Conditions :</p>
                                <p class="text-[11px] text-default mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>
                                <p class="text-[11px] text-default mb-0">2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>
                            </div>
                            <p class="text-sm text-default text-center pt-4 border-t border-border-color mb-0">Thanks for your Business</p>
                        </div>
                    </div>

                    <!-- General Invoice 3 -->
                    <div id="tpl-3" class="hidden" role="tabpanel" aria-labelledby="tpl-tab-3">
                        <div class="p-6 lg:p-8">
                            <!-- Bordered invoice block -->
                            <div class="border border-border-color rounded-md overflow-hidden">
                                <!-- Title bar -->
                                <div class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-border-color">
                                    <p class="text-base font-bold text-title mb-0">TAX INVOICE</p>
                                    <p class="text-sm text-default mb-0">Original For Recipient</p>
                                </div>

                                <!-- Header grid -->
                                <div class="grid grid-cols-1 md:grid-cols-10 border-b border-border-color">
                                    <div class="md:col-span-4 md:row-span-2 p-4 border-b md:border-b-0 md:border-e border-border-color">
                                        <div class="mb-2">
                                            <div class="invoice-logo block dark:hidden"> 
                                                <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10" alt="logo"></router-link>
                                            </div>
                                            <div class="invoice-logo-white hidden dark:block">
                                                <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10" alt="logo"></router-link>
                                            </div>
                                        </div>
                                        <p class="text-sm font-semibold text-title mb-2">Dreamguys</p>
                                        <div class="grid grid-cols-2 gap-2 mb-2">
                                            <div>
                                                <p class="text-[11px] text-default mb-1">GST IN :</p>
                                                <p class="text-sm text-gray-900 mb-0">22AABCU9603R1ZX</p>
                                            </div>
                                            <div>
                                                <p class="text-[11px] text-default mb-1">Mobile :</p>
                                                <p class="text-sm text-gray-900 mb-0">+91 98765 43210</p>
                                            </div>
                                        </div>
                                        <p class="text-[11px] text-default mb-1">Address :</p>
                                        <p class="text-sm text-gray-900 mb-0">782 Lincoln Avenue, Sacramento, California, 94203, USA.</p>
                                    </div>
                                    <div class="md:col-span-3 p-4 border-b md:border-e border-border-color">
                                        <p class="text-[11px] text-default mb-1">Invoice No</p>
                                        <p class="text-sm text-gray-900 font-medium mb-0">INV 00001</p>
                                    </div>
                                    <div class="md:col-span-3 p-4 border-b border-border-color">
                                        <p class="text-[11px] text-default mb-1">Date</p>
                                        <p class="text-sm text-gray-900 font-medium mb-0">05/09/2025</p>
                                    </div>
                                    <div class="md:col-span-3 p-4 border-b md:border-b-0 md:border-e border-border-color">
                                        <p class="text-sm font-semibold text-title mb-2">Invoice To :</p>
                                        <p class="text-sm font-semibold text-title mb-1">Michael Anderson</p>
                                        <p class="text-[11px] text-default mb-1">299 Star Trek Drive, Panama City,<br>Florida, 32405, USA.</p>
                                        <p class="text-[11px] text-default mb-0">Email : <span class="text-gray-900">michael@example.com</span></p>
                                        <p class="text-[11px] text-default mb-0">Phone : <span class="text-gray-900">+1 917 452 8093</span></p>
                                    </div>
                                    <div class="md:col-span-3 p-4">
                                        <p class="text-sm font-semibold text-title mb-2">Pay To :</p>
                                        <p class="text-sm font-semibold text-title mb-1">James Carter</p>
                                        <p class="text-[11px] text-default mb-1">1448 Maplewood Lane, Austin,<br>Texas, 73301, USA.</p>
                                        <p class="text-[11px] text-default mb-0">Email : <span class="text-gray-900">james@example.com</span></p>
                                        <p class="text-[11px] text-default mb-0">Phone : <span class="text-gray-900">+1 305 678 2345</span></p>
                                    </div>
                                </div>

                                <!-- Items table (grid cells) -->
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead><tr class="text-sm bg-light border-b border-border-color"><th class="text-left py-2 px-3 font-semibold text-gray-900 border-e border-border-color">#</th><th class="text-left py-2 px-3 font-semibold text-gray-900 border-e border-border-color">Item</th><th class="text-left py-2 px-3 font-semibold text-gray-900 border-e border-border-color">Qty</th><th class="text-left py-2 px-3 font-semibold text-gray-900 border-e border-border-color">Price</th><th class="text-left py-2 px-3 font-semibold text-gray-900 border-e border-border-color">Discount</th><th class="text-right py-2 px-3 font-semibold text-gray-900">Total</th></tr></thead>
                                        <tbody>
                                            <tr class="border-b border-border-color"><td class="py-3 px-3 text-sm text-default border-e border-border-color">1</td><td class="py-3 px-3 text-sm text-title font-semibold border-e border-border-color">Apple iPhone 15</td><td class="py-3 px-3 text-sm text-default border-e border-border-color">1</td><td class="py-3 px-3 text-sm text-gray-900 border-e border-border-color">$400.00</td><td class="py-3 px-3 text-sm text-gray-900 border-e border-border-color">$5.00</td><td class="py-3 px-3 text-sm text-gray-900 text-right">$395.00</td></tr>
                                            <tr class="border-b border-border-color"><td class="py-3 px-3 text-sm text-default border-e border-border-color">2</td><td class="py-3 px-3 text-sm text-title font-semibold border-e border-border-color">Dell XPS 13 9310</td><td class="py-3 px-3 text-sm text-default border-e border-border-color">1</td><td class="py-3 px-3 text-sm text-gray-900 border-e border-border-color">$180.00</td><td class="py-3 px-3 text-sm text-gray-900 border-e border-border-color">$2.00</td><td class="py-3 px-3 text-sm text-gray-900 text-right">$178.00</td></tr>
                                            <tr class="border-b border-border-color"><td class="py-3 px-3 text-sm text-default border-e border-border-color">4</td><td class="py-3 px-3 text-sm text-title font-semibold border-e border-border-color">Bose QuietComfort 45</td><td class="py-3 px-3 text-sm text-default border-e border-border-color">1</td><td class="py-3 px-3 text-sm text-gray-900 border-e border-border-color">$50.00</td><td class="py-3 px-3 text-sm text-gray-900 border-e border-border-color">$1.00</td><td class="py-3 px-3 text-sm text-gray-900 text-right">$49.00</td></tr>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- Totals rows -->
                                <div class="flex flex-wrap items-center justify-between gap-3 px-3 py-2.5 border-b border-border-color text-sm">
                                    <span class="text-default">Total Items / Qty : <span class="text-gray-900 font-medium">3 / 3</span></span>
                                    <span class="flex items-center gap-10"><span class="text-gray-900 font-medium">Sub Total</span><span class="text-gray-900 font-medium">$620.00</span></span>
                                </div>
                                <div class="flex items-center justify-end gap-10 px-3 py-2.5 border-b border-border-color text-sm"><span class="text-default">Tax</span><span class="text-gray-900 font-medium">$30.00</span></div>
                                <div class="flex items-center justify-end gap-10 px-3 py-2.5 border-b border-border-color text-sm"><span class="text-default">Discount</span><span class="text-gray-900 font-medium">$8.00</span></div>
                                <div class="flex items-center justify-end gap-10 px-3 py-3 border-b border-border-color"><span class="text-sm font-semibold text-gray-900">Total</span><span class="text-base font-bold text-gray-900">$642.00</span></div>
                                <div class="px-3 py-3 text-center">
                                    <p class="text-sm text-default mb-0">Total amount ( in words ) : <span class="text-gray-900 font-medium">Six Hundred Forty Two Dollars Only.</span></p>
                                </div>
                            </div>

                            <!-- Bank / signature / notes / terms block -->
                            <div class="border border-border-color rounded-md overflow-hidden mt-6">
                                <div class="grid grid-cols-1 md:grid-cols-3 border-b border-border-color">
                                    <div class="md:col-span-2 p-4 border-b md:border-b-0 md:border-e border-border-color">
                                        <p class="text-sm font-semibold text-title mb-2">Bank Details</p>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                                            <p class="text-[11px] text-default mb-0">Bank : <span class="text-gray-900">YES Bank</span></p>
                                            <p class="text-[11px] text-default mb-0">IFSC : <span class="text-gray-900">YESBBIN4567</span></p>
                                            <p class="text-[11px] text-default mb-0">Account : <span class="text-gray-900">6677889944551</span></p>
                                            <p class="text-[11px] text-default mb-0">BRANCH : <span class="text-gray-900">RS Puram</span></p>
                                        </div>
                                    </div>
                                    <div class="p-4 flex flex-col items-center justify-center text-center">
                                        <p class="text-sm text-default mb-2">For Dreamguys</p>
                                        <p class="font-['cursive'] italic text-lg text-gray-900 mb-0">James Paulo</p>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3">
                                    <div class="p-4 border-b md:border-b-0 md:border-e border-border-color">
                                        <p class="text-[11px] text-default mb-1">Notes:</p>
                                        <p class="text-sm text-gray-900 mb-0">Thanks for your Business</p>
                                    </div>
                                    <div class="md:col-span-2 p-4">
                                        <p class="text-sm font-semibold text-title mb-2">Terms &amp; Conditions :</p>
                                        <p class="text-[11px] text-default mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>
                                        <p class="text-[11px] text-default mb-0">2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- General Invoice 4 -->
                    <div id="tpl-4" class="hidden" role="tabpanel" aria-labelledby="tpl-tab-4">
                        <div class="p-6 lg:p-8">
                            <!-- Header band -->
                            <div class="flex flex-wrap items-center justify-between gap-3 bg-light rounded-md px-5 py-4 mb-6">
                                <div>
                                    <div class="invoice-logo block dark:hidden"> 
                                        <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10" alt="logo"></router-link>
                                    </div>
                                    <div class="invoice-logo-white hidden dark:block">
                                        <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10" alt="logo"></router-link>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <h3 class="text-xl font-bold text-title mb-1">TAX INVOICE</h3>
                                    <p class="text-sm text-default mb-0">Original For Recipient</p>
                                </div>
                            </div>

                            <!-- Company info + invoice meta -->
                            <div class="flex flex-wrap items-start justify-between gap-6 pb-6 mb-6 border-b border-border-color">
                                <div>
                                    <p class="text-sm font-semibold text-title mb-3">Dreamguys</p>
                                    <div class="grid grid-cols-2 gap-x-10 gap-y-2 mb-2">
                                        <div>
                                            <p class="text-[11px] text-default mb-1">GST IN :</p>
                                            <p class="text-sm text-gray-900 mb-0">22AABCU9603R1ZX</p>
                                        </div>
                                        <div>
                                            <p class="text-[11px] text-default mb-1">Mobile :</p>
                                            <p class="text-sm text-gray-900 mb-0">+91 98765 43210</p>
                                        </div>
                                    </div>
                                    <p class="text-[11px] text-default mb-1">Address :</p>
                                    <p class="text-sm text-gray-900 mb-0">782 Lincoln Avenue, Sacramento, California, 94203, USA.</p>
                                </div>
                                <div class="text-end">
                                    <p class="text-[11px] text-default mb-1">Date:</p>
                                    <p class="text-sm text-gray-900 font-medium mb-2">05/09/2025</p>
                                    <p class="text-[11px] text-default mb-1">Invoice No:</p>
                                    <p class="text-sm text-gray-900 font-medium mb-0">INV 00001</p>
                                </div>
                            </div>

                            <!-- Invoice To / Pay To -->
                            <div class="flex flex-wrap items-start justify-between gap-6 mb-6">
                                <div>
                                    <p class="text-sm font-semibold text-title mb-2">Invoice To :</p>
                                    <p class="text-sm font-semibold text-title mb-1">Michael Anderson</p>
                                    <p class="text-[11px] text-default mb-1">299 Star Trek Drive, Panama City,<br>Florida, 32405, USA.</p>
                                    <p class="text-[11px] text-default mb-0">Email : <span class="text-gray-900">michael@example.com</span></p>
                                    <p class="text-[11px] text-default mb-0">Phone : <span class="text-gray-900">+1 917 452 8093</span></p>
                                </div>
                                <div class="text-end">
                                    <p class="text-sm font-semibold text-title mb-2">Pay To :</p>
                                    <p class="text-sm font-semibold text-title mb-1">James Carter</p>
                                    <p class="text-[11px] text-default mb-1">1448 Maplewood Lane, Austin,<br>Texas, 73301, USA.</p>
                                    <p class="text-[11px] text-default mb-0">Email : <span class="text-gray-900">james@example.com</span></p>
                                    <p class="text-[11px] text-default mb-0">Phone : <span class="text-gray-900">+1 305 678 2345</span></p>
                                </div>
                            </div>

                            <!-- Items table -->
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm">
                                    <thead><tr class="text-sm bg-light border-b border-border-color"><th class="text-left py-2 px-2 font-semibold text-gray-900">#</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Item</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Qty</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Price</th><th class="text-left py-2 px-2 font-semibold text-gray-900">Discount</th><th class="text-right py-2 px-2 font-semibold text-gray-900">Total</th></tr></thead>
                                    <tbody>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-title font-semibold">Apple iPhone 15</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$400.00</td><td class="py-3 px-2 text-sm text-gray-900">$5.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$395.00</td></tr>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">2</td><td class="py-3 px-2 text-sm text-title font-semibold">Dell XPS 13 9310</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$180.00</td><td class="py-3 px-2 text-sm text-gray-900">$2.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$178.00</td></tr>
                                        <tr class="border-b border-border-color"><td class="py-3 px-2 text-sm text-default">4</td><td class="py-3 px-2 text-sm text-title font-semibold">Bose QuietComfort 45</td><td class="py-3 px-2 text-sm text-default">1</td><td class="py-3 px-2 text-sm text-gray-900">$50.00</td><td class="py-3 px-2 text-sm text-gray-900">$1.00</td><td class="py-3 px-2 text-sm text-gray-900 text-right">$49.00</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Important note + totals -->
                            <div class="flex flex-wrap items-start justify-between gap-6 mt-4">
                                <div class="max-w-xs">
                                    <p class="text-[11px] text-default mb-1">Important Note:</p>
                                    <p class="text-sm text-gray-900 mb-0">Delivery dates are not guaranteed and Seller has no liability for damages that may be incurred due to any delay.</p>
                                </div>
                                <div class="w-full md:w-72 space-y-2 text-sm">
                                    <div class="flex items-center justify-between"><span class="text-default">Sub Total</span><span class="text-gray-900 font-medium">$620.00</span></div>
                                    <div class="flex items-center justify-between"><span class="text-default">Tax</span><span class="text-gray-900 font-medium">$30.00</span></div>
                                    <div class="flex items-center justify-between"><span class="text-default">Discount</span><span class="text-gray-900 font-medium">$8.00</span></div>
                                </div>
                            </div>

                            <!-- Total band -->
                            <div class="flex flex-wrap items-center justify-between gap-3 mt-4 px-3 py-3 border border-border-color rounded-md">
                                <p class="text-sm text-default mb-0">Total Items / Qty : <span class="text-gray-900 font-medium">3 / 3</span></p>
                                <div class="flex items-center gap-3">
                                    <p class="text-sm font-semibold text-gray-900 mb-0">Total</p>
                                    <p class="text-base font-bold text-gray-900 mb-0">$642.00</p>
                                </div>
                            </div>

                            <p class="text-sm text-default mt-4 pb-4 mb-6 border-b border-border-color">Total amount ( in words ) : <span class="text-gray-900 font-medium">Six Hundred Forty Two Dollars Only.</span></p>

                            <!-- Payment info + signature -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <p class="text-sm font-semibold text-title mb-2">Payment Info</p>
                                    <p class="text-[11px] text-default mb-0">Debit Card : <span class="text-gray-900">465 *************645</span></p>
                                    <p class="text-[11px] text-default mb-0">Amount : <span class="text-gray-900">$642.00</span></p>
                                </div>
                                <div class="md:text-end">
                                    <p class="text-sm text-default mb-2">For Dreamguys</p>
                                    <p class="font-['cursive'] italic text-lg text-gray-900">James Paulo</p>
                                </div>
                            </div>

                            <!-- T&C -->
                            <div class="pt-4 border-t border-border-color mb-4">
                                <p class="text-sm font-semibold text-title mb-2">Terms &amp; Conditions :</p>
                                <p class="text-[11px] text-default mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>
                                <p class="text-[11px] text-default mb-0">2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>
                            </div>
                            <p class="text-sm text-default text-center pt-4 border-t border-border-color mb-0">Thanks for your Business</p>
                        </div>
                    </div>

                    <!-- General Invoice 5 (dark) -->
                    <div id="tpl-5" class="hidden" role="tabpanel" aria-labelledby="tpl-tab-5">
                        <div class="p-3 lg:p-4">
                            <div class="bg-dark rounded-md p-6 lg:p-8">
                                <!-- Header band -->
                                <div class="flex flex-wrap items-center justify-between gap-3 bg-white/10 rounded-md px-5 py-4 mb-6">
                                    <div>
                                        <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10" alt="logo"></router-link>
                                    </div>
                                    <div class="text-end">
                                        <h3 class="text-xl font-bold text-white mb-1">TAX INVOICE</h3>
                                        <p class="text-sm text-white/60 dark:text-dark/60 mb-0">Original For Recipient</p>
                                    </div>
                                </div>

                                <!-- Company info + invoice meta -->
                                <div class="flex flex-wrap items-start justify-between gap-6 pb-6 mb-6 border-b border-white/10">
                                    <div>
                                        <p class="text-sm font-semibold text-white mb-3">Dreamguys</p>
                                        <div class="grid grid-cols-2 gap-x-10 gap-y-2 mb-2">
                                            <div>
                                                <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">GST IN :</p>
                                                <p class="text-sm text-white mb-0">22AABCU9603R1ZX</p>
                                            </div>
                                            <div>
                                                <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">Mobile :</p>
                                                <p class="text-sm text-white mb-0">+91 98765 43210</p>
                                            </div>
                                        </div>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">Address :</p>
                                        <p class="text-sm text-white mb-0">782 Lincoln Avenue, Sacramento, California, 94203, USA.</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">Date:</p>
                                        <p class="text-sm text-white font-medium mb-2">05/09/2025</p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">Invoice No:</p>
                                        <p class="text-sm text-white font-medium mb-0">INV 00001</p>
                                    </div>
                                </div>

                                <!-- Invoice To / Pay To -->
                                <div class="flex flex-wrap items-start justify-between gap-6 mb-6">
                                    <div>
                                        <p class="text-sm font-semibold text-white mb-2">Invoice To :</p>
                                        <p class="text-sm font-semibold text-white mb-1">Michael Anderson</p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">299 Star Trek Drive, Panama City,<br>Florida, 32405, USA.</p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-0">Email : <span class="text-white">michael@example.com</span></p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-0">Phone : <span class="text-white">+1 917 452 8093</span></p>
                                    </div>
                                    <div class="text-end">
                                        <p class="text-sm font-semibold text-white mb-2">Pay To :</p>
                                        <p class="text-sm font-semibold text-white mb-1">James Carter</p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">1448 Maplewood Lane, Austin,<br>Texas, 73301, USA.</p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-0">Email : <span class="text-white">james@example.com</span></p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-0">Phone : <span class="text-white">+1 305 678 2345</span></p>
                                    </div>
                                </div>

                                <!-- Items table -->
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm">
                                        <thead><tr class="text-sm bg-white/10 border-b border-white/10"><th class="text-left py-2 px-2 font-semibold text-white">#</th><th class="text-left py-2 px-2 font-semibold text-white">Item</th><th class="text-left py-2 px-2 font-semibold text-white">Qty</th><th class="text-left py-2 px-2 font-semibold text-white">Price</th><th class="text-left py-2 px-2 font-semibold text-white">Discount</th><th class="text-right py-2 px-2 font-semibold text-white">Total</th></tr></thead>
                                        <tbody>
                                            <tr class="border-b border-white/10"><td class="py-3 px-2 text-sm text-white/60 dark:text-dark/60">1</td><td class="py-3 px-2 text-sm text-white font-semibold">Apple iPhone 15</td><td class="py-3 px-2 text-sm text-white/60 dark:text-dark/60">1</td><td class="py-3 px-2 text-sm text-white">$400.00</td><td class="py-3 px-2 text-sm text-white">$5.00</td><td class="py-3 px-2 text-sm text-white text-right">$395.00</td></tr>
                                            <tr class="border-b border-white/10"><td class="py-3 px-2 text-sm text-white/60 dark:text-dark/60">2</td><td class="py-3 px-2 text-sm text-white font-semibold">Dell XPS 13 9310</td><td class="py-3 px-2 text-sm text-white/60 dark:text-dark/60">1</td><td class="py-3 px-2 text-sm text-white">$180.00</td><td class="py-3 px-2 text-sm text-white">$2.00</td><td class="py-3 px-2 text-sm text-white text-right">$178.00</td></tr>
                                            <tr class="border-b border-white/10"><td class="py-3 px-2 text-sm text-white/60 dark:text-dark/60">4</td><td class="py-3 px-2 text-sm text-white font-semibold">Bose QuietComfort 45</td><td class="py-3 px-2 text-sm text-white/60 dark:text-dark/60">1</td><td class="py-3 px-2 text-sm text-white">$50.00</td><td class="py-3 px-2 text-sm text-white">$1.00</td><td class="py-3 px-2 text-sm text-white text-right">$49.00</td></tr>
                                        </tbody>
                                    </table>
                                </div>

                                <!-- Important note + totals -->
                                <div class="flex flex-wrap items-start justify-between gap-6 mt-4">
                                    <div class="max-w-xs">
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">Important Note:</p>
                                        <p class="text-sm text-white mb-0">Delivery dates are not guaranteed and Seller has no liability for damages that may be incurred due to any delay.</p>
                                    </div>
                                    <div class="w-full md:w-72 space-y-2 text-sm">
                                        <div class="flex items-center justify-between"><span class="text-white/60 dark:text-dark/60">Sub Total</span><span class="text-white font-medium">$620.00</span></div>
                                        <div class="flex items-center justify-between"><span class="text-white/60 dark:text-dark/60">Tax</span><span class="text-white font-medium">$30.00</span></div>
                                        <div class="flex items-center justify-between"><span class="text-white/60 dark:text-dark/60">Discount</span><span class="text-white font-medium">$8.00</span></div>
                                    </div>
                                </div>

                                <!-- Total band -->
                                <div class="flex flex-wrap items-center justify-between gap-3 mt-4 px-3 py-3 border border-white/10 bg-white/5 rounded-md">
                                    <p class="text-sm text-white/60 dark:text-dark/60 mb-0">Total Items / Qty : <span class="text-white font-medium">3 / 3</span></p>
                                    <div class="flex items-center gap-3">
                                        <p class="text-sm font-semibold text-white mb-0">Total</p>
                                        <p class="text-base font-bold text-white mb-0">$642.00</p>
                                    </div>
                                </div>

                                <p class="text-sm text-white/60 dark:text-dark/60 mt-4 pb-4 mb-6 border-b border-white/10">Total amount ( in words ) : <span class="text-white font-medium">Six Hundred Forty Two Dollars Only.</span></p>

                                <!-- Payment info + signature -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <p class="text-sm font-semibold text-white mb-2">Payment Info</p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-0">Debit Card : <span class="text-white">465 *************645</span></p>
                                        <p class="text-[11px] text-white/60 dark:text-dark/60 mb-0">Amount : <span class="text-white">$642.00</span></p>
                                    </div>
                                    <div class="md:text-end">
                                        <p class="text-sm text-white/60 dark:text-dark/60 mb-2">For Dreamguys</p>
                                        <p class="font-['cursive'] italic text-lg text-white">James Paulo</p>
                                    </div>
                                </div>

                                <!-- T&C -->
                                <div class="pt-4 border-t border-white/10 mb-4">
                                    <p class="text-sm font-semibold text-white mb-2">Terms &amp; Conditions :</p>
                                    <p class="text-[11px] text-white/60 dark:text-dark/60 mb-1">1. Goods Once sold cannot be taken back or exchanged.</p>
                                    <p class="text-[11px] text-white/60 dark:text-dark/60 mb-0">2. We are not the manufactures, company will stand for warrenty as per their terms and conditions.</p>
                                </div>
                                <p class="text-sm text-white/60 dark:text-dark/60 text-center pt-4 border-t border-white/10 mb-0">Thanks for your Business</p>
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
