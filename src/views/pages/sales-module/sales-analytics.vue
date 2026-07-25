<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">Sales Analytics</h1>
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

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Total Sales</p>
                            <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-1">$152,000</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 12.5%</span>
                        </div>
                        <div class="size-9 rounded-md bg-success-transparent flex items-center justify-center"><i class="ph-duotone ph-trend-up text-success"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Total Orders</p>
                            <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-1">486</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 8.2%</span>
                        </div>
                        <div class="size-9 rounded-md bg-info-transparent flex items-center justify-center"><i class="ph-duotone ph-shopping-cart text-info"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Avg Order Value</p>
                            <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-1">$312</h2>
                            <span class="text-[10px] bg-success-transparent text-success px-1.5 py-0.5 rounded mt-1 inline-block">↗ 4.5%</span>
                        </div>
                        <div class="size-9 rounded-md bg-warning-transparent flex items-center justify-center"><i class="ph-duotone ph-currency-circle-dollar text-warning"></i></div>
                    </div>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm text-default mb-1">Conversion Rate</p>
                            <h2 class="text-lg max-lg:text-[17px] font-bold text-gray-900 mb-1">3.8%</h2>
                            <span class="text-[10px] bg-danger-transparent text-danger px-1.5 py-0.5 rounded mt-1 inline-block">↘ 1.2%</span>
                        </div>
                        <div class="size-9 rounded-md bg-purple-transparent flex items-center justify-center"><i class="ph-duotone ph-chart-line text-purple"></i></div>
                    </div>
                </div>
            </div>

            <div class="bg-white border border-border-color rounded-md p-4">
                <p class="text-sm font-semibold text-title mb-3">Top Selling Products</p>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm text-default border-b border-border-color">
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Product</th>
                                <th class="text-left py-2 px-2 font-semibold text-gray-900">Category</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Units Sold</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Revenue</th>
                                <th class="text-right py-2 px-2 font-semibold text-gray-900">Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">MacBook Pro 16"</td>
                                <td class="py-2.5 px-2 text-sm text-default">Laptop</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">125</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$312,500</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 18%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">iPhone 14 Pro</td>
                                <td class="py-2.5 px-2 text-sm text-default">Smartphone</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">98</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$107,702</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 12%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">AirPods Pro 2</td>
                                <td class="py-2.5 px-2 text-sm text-default">Headphones</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">340</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$84,660</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 25%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Dell Monitor 27"</td>
                                <td class="py-2.5 px-2 text-sm text-default">Monitor</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">68</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$30,600</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">↘ 4%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Nike Angelo Red</td>
                                <td class="py-2.5 px-2 text-sm text-default">Footwear</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">156</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$46,800</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 8%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Beats Studio Pro</td>
                                <td class="py-2.5 px-2 text-sm text-default">Headphones</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">112</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$39,088</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 15%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">iPad Pro 12.9"</td>
                                <td class="py-2.5 px-2 text-sm text-default">Tablet</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">42</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$46,158</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 6%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Adidas IX Blue</td>
                                <td class="py-2.5 px-2 text-sm text-default">Footwear</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">198</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$55,440</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 11%</span></td>
                            </tr>
                            <tr class="border-b border-border-color">
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Logitech Webcam</td>
                                <td class="py-2.5 px-2 text-sm text-default">Accessory</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">220</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$28,380</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded">↘ 2%</span></td>
                            </tr>
                            <tr>
                                <td class="py-2.5 px-2 text-sm font-semibold text-title">Rolex Tribute V3</td>
                                <td class="py-2.5 px-2 text-sm text-default">Watch</td>
                                <td class="py-2.5 px-2 text-sm text-default text-right">18</td>
                                <td class="py-2.5 px-2 text-sm text-gray-900 text-right">$3,600</td>
                                <td class="py-2.5 px-2 text-right"><span class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded">↗ 3%</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border-color">
                    <div class="flex items-center gap-2">
                        <span class="text-sm text-default">Showing</span>
                        <select class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28">
                            <option>10 / Pages</option>
                            <option>25 / Pages</option>
                            <option>50 / Pages</option>
                            <option>100 / Pages</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-1">
                        <button class="size-7 rounded-md text-sm bg-dark text-white flex items-center justify-center cursor-pointer">1</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center cursor-pointer">2</button>
                        <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center cursor-pointer">3</button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center cursor-pointer text-default hover:bg-light ml-1"><i class="ph ph-caret-left text-sm"></i></button>
                        <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center cursor-pointer text-default hover:bg-light"><i class="ph ph-caret-right text-sm"></i></button>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>