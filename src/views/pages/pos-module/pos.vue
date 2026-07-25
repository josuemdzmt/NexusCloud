<template>
    <main ref="container" class="mx-4 my-4 p-5 bg-white rounded-lg border border-border-color">
        <div class="grid grid-cols-12 gap-6" id="pos-product-grid">

            <!-- Left Side -->
            <div class="col-span-12 lg:col-span-8">

                <!-- Start Categories -->
                <div class="border-b border-border-color mb-5 pb-5">
                    <h1 class="text-lg font-bold text-title mb-3">Categories</h1>

                    <!-- Start Tab -->
                    <div class="flex items-center gap-2 overflow-x-auto pb-0.5">
                        <button class="category-filter shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-primary bg-white text-gray-900 text-sm font-medium cursor-pointer hover:border-primary hover:text-primary transition active" data-category="all">
                            <span class="bg-light size-7 rounded-full border border-border-color flex items-center justify-center"> <i class="ph-duotone ph-squares-four text-sm"></i> </span>
                            <span>All Categories</span>
                        </button>

                        <button class="category-filter shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-border-color bg-white text-gray-900 text-sm font-medium cursor-pointer hover:border-primary hover:text-primary transition" data-category="headphones">
                            <span class="bg-light size-7 rounded-full border border-border-color flex items-center justify-center"> <i class="ph-duotone ph-headphones text-purple text-sm"></i> </span>
                            <span>Headphones</span>
                        </button>

                        <button class="category-filter shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-border-color bg-white text-gray-900 text-sm font-medium cursor-pointer hover:border-primary hover:text-primary transition" data-category="footwear">
                            <span class="bg-light size-7 rounded-full border border-border-color flex items-center justify-center"> <i class="ph-duotone ph-sneaker text-orange text-sm"></i> </span>
                            <span>Footwear</span>
                        </button>

                        <button class="category-filter shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-border-color bg-white text-gray-900 text-sm font-medium cursor-pointer hover:border-primary hover:text-primary transition" data-category="smartphones">
                            <span class="bg-light size-7 rounded-full border border-border-color flex items-center justify-center"><i class="ph-duotone ph-device-mobile text-pink text-sm"></i> </span>
                            <span>Smartphones</span>
                        </button>

                        <button class="category-filter shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-border-color bg-white text-gray-900 text-sm font-medium cursor-pointer hover:border-primary hover:text-primary transition" data-category="watches">
                            <span class="bg-light size-7 rounded-full border border-border-color flex items-center justify-center"><i class="ph-duotone ph-watch text-info text-sm"></i> </span>
                            <span>Watches</span>
                        </button>

                        <button class="category-filter shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-border-color bg-white text-gray-900 text-sm font-medium cursor-pointer hover:border-primary hover:text-primary transition" data-category="computers">
                            <span class="bg-light size-7 rounded-full border border-border-color flex items-center justify-center"><i class="ph-duotone ph-laptop text-primary text-sm"></i> </span>
                            <span>Computers</span>
                        </button>

                        <button class="category-filter shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-border-color bg-white text-gray-900 text-sm font-medium cursor-pointer hover:border-primary hover:text-primary transition" data-category="appliances">
                            <span class="bg-light size-7 rounded-full border border-border-color flex items-center justify-center"><i class="ph-duotone ph-storefront text-success text-sm"></i> </span>
                            <span>Appliances</span>
                        </button>

                        <button class="category-filter shrink-0 inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full border border-border-color bg-white text-gray-900 text-sm font-medium cursor-pointer hover:border-primary hover:text-primary transition" data-category="lighting">
                            <span class="bg-light size-7 rounded-full border border-border-color flex items-center justify-center"><i class="ph-duotone ph-lightbulb text-yellow text-sm"></i> </span>
                            <span>Lighting</span>
                        </button>
                    </div>
                </div>

                <!-- Start Products -->
                <div class="overflow-y-auto max-h-[calc(100vh-284px)] scrollbar-hide">
                    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
                        <h2 class="text-lg font-bold text-title mb-0">Products</h2>
                        <div class="relative w-64 search-input">
                            <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
                            <input type="text" class="w-full px-3 pe-8 py-2 h-8 text-[12px]! border border-border-color rounded-lg bg-white focus:outline-none focus:ring-0 placeholder:text-sm" placeholder="Search">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <!-- MacBook Pro -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4 selected">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-1.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-info bg-info-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Computers</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">MacBook Pro</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$1800</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- IPhone 14 -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-2.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-pink bg-pink-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Smartphones</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">IPhone 14</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$800</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Nike Angelo Red -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-3.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-orange bg-orange-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Footwear</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Nike Angelo Red</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$300</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Airpod 2 -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-4.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-purple bg-purple-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Headphones</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Airpod 2</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$150</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Adidas IX Blue -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-5.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-orange bg-orange-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Footwear</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Adidas IX Blue</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$280</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- IdeaPad Slim 5 -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-6.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-info bg-info-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Computers</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">IdeaPad Slim 5</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$1200</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Beats Pro -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-7.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-purple bg-purple-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Headphones</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Beats Pro</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$450</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Tablet 1.02 -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-8.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-pink bg-pink-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Smartphones</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Tablet 1.02</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$600</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Yoga Book 9i -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-9.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-info bg-info-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Computers</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Yoga Book 9i</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$1000</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Fossil Pair Of 3 In 1 -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-10.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-warning bg-warning-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Watches</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Fossil Pair 3 In 1</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$300</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Iphone 11 -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4 selected">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-11.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-pink bg-pink-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Smartphones</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Iphone 11</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$600</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Nike Neo Green -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-12.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-orange bg-orange-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Footwear</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Nike Neo Green</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$320</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Titan Classic -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-13.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-warning bg-warning-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Watches</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Titan Classic</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$150</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Office Shoes -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4 selected">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-14.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-orange bg-orange-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Footwear</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Office Shoes</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$400</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- IdeaPad Slim 3i -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-15.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-info bg-info-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Computers</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">IdeaPad Slim 3i</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$1200</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Rolex Tribute V3 -->
                        <div class="col-span-1">
                            <div class="pos-product-card bg-white border border-border-color rounded-lg p-4">
                                <div class="bg-light p-4 rounded-lg flex items-center justify-center">
                                    <img src="@/assets/img/product/product-16.png" alt="product" class="img-fluid">
                                </div>
                                <div class="pt-5">
                                    <span class="inline-block text-[9px] sm:text-[10px] text-warning bg-warning-transparent px-1 sm:px-1.5 py-0.5 rounded mb-0.5 sm:mb-1">Watches</span>
                                    <h2 class="text-base font-bold text-title mt-1 mb-4">Rolex Tribute V3</h2>
                                    <div class="flex items-center justify-between gap-1">
                                        <span class="text-sm font-medium text-primary">$200</span>
                                        <div class="flex items-center gap-1 text-default">
                                            <i class="ph ph-minus-circle qty-btn qty-minus text-sm cursor-pointer hover:text-danger transition"></i>
                                            <span class="qty-value text-sm font-medium text-gray-900 min-w-4 text-center">0</span>
                                            <i class="ph ph-plus-circle qty-btn qty-plus text-sm cursor-pointer hover:text-success transition"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Products -->
            </div>

            <!-- Right Side -->
            <div class="col-span-12 lg:col-span-4">
                <div class="ml-0 lg:ml-3 lg:pl-5 pl-0 border-0 lg:border-l border-border-color overflow-y-auto h-full lg:max-h-[calc(100vh-170px)] scrollbar-hide">
                    <!-- Order List -->
                    <div class="flex items-center justify-between p-4 rounded-lg bg-light mb-6">
                        <div>
                            <p class="text-base font-bold text-title mb-1">Order List</p>
                            <p class="text-sm text-default mb-0">Id : #ORD0020</p>
                        </div>
                        <button class="size-8 rounded-md border border-border-color flex items-center justify-center bg-white text-gray-900 hover:bg-danger hover:text-white cursor-pointer transition">
                            <i class="ph ph-trash text-sm sm:text-base"></i>
                        </button>
                    </div>
                    <!-- Customer Information -->
                    <div class="mb-5 pb-5 border-b border-border-color">
                        <h2 class="text-lg font-bold text-title mb-4">Customer Information</h2>
                        <div class="mb-3">
                            <div class="flex items-center justify-between mb-1">
                                <label class="text-sm text-gray-900 font-semibold">Customer <span class="text-danger">*</span></label>
                                <a href="#" class="text-sm font-medium text-danger inline-flex items-center gap-1">
                                    <i class="ph ph-plus text-sm"></i> <span class="hidden sm:inline">Add New</span>
                                </a>
                            </div>
                            <select class="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>Alexander Kenn</option>
                                <option>Gabriella White</option>
                                <option>Christopher Rey</option>
                                <option>Penelope Ton</option>
                            </select>
                        </div>
                        <div class="mb-0">
                            <div class="flex items-center justify-between mb-1">
                                <label class="text-sm text-gray-900 font-semibold">Product <span class="text-danger">*</span></label>
                            </div>
                            <select class="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>Apple MacBook Pro 14</option>
                                <option>HP Laptop 15s</option>
                                <option>Dell Inspiron 15</option>
                                <option>Asus Vivobook 14</option>
                            </select>
                        </div>
                    </div>
                    <!-- Product Added -->
                    <div class="mb-5 pb-5 border-b border-border-color">
                        <div class="flex items-center justify-between gap-3 mb-4">
                            <h2 class="text-lg font-bold text-title inline-flex items-center gap-1 mb-0">
                                Product Added
                                <span class="inline-flex items-center justify-center size-4 bg-success text-white text-[9px] sm:text-[10px] font-medium rounded-full">4</span>
                            </h2>
                            <a href="#" class="text-sm font-medium text-danger inline-flex items-center gap-1">
                                <i class="ph ph-x text-sm"></i> <span>Clear All</span>
                            </a>
                        </div>

                        <!-- Cart Empty State -->
                        <div id="cart-empty-state" class="hidden text-center p-6 rounded-lg bg-white border border-border-color mb-4">
                            <i class="ph-duotone ph-shopping-cart text-3xl text-default mb-2 inline-block"></i>
                            <p class="text-sm font-semibold text-title mb-1">No Products Selected</p>
                            <p class="text-sm text-default mb-0">Scan or select products to get started</p>
                        </div>

                        <div class="space-y-3 mb-4">
                            <div class="pos-product-card-1 flex items-center justify-between flex-wrap gap-3 p-3 rounded-lg bg-white border border-border-color">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="size-14 rounded-md bg-light p-2 flex items-center justify-center overflow-hidden">
                                        <img src="@/assets/img/product/product-3.png" alt="Nike Angelo Red" class="w-10 h-10 object-contain">
                                    </div>
                                    <div class="min-w-0">
                                        <span class="inline-flex items-center justify-center px-2 py-1 text-[10px] font-medium text-primary bg-primary-transparent rounded-md mb-1">PRO0014</span>
                                        <h3 class="text-sm font-semibold text-title truncate">Nike Angelo Red</h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-medium text-success">$300</span>
                                    <div class="inline-flex items-center gap-2 rounded-lg border border-border-color bg-white px-2 py-1">
                                        <button class="cursor-pointer text-sm text-default qty-btn qty-minus"><i class="ph ph-minus-circle"></i></button>
                                        <span class="qty-value text-sm font-semibold">01</span>
                                        <button class="cursor-pointer text-sm text-default qty-btn qty-plus"><i class="ph ph-plus-circle"></i></button>
                                    </div>
                                    <button class="cursor-pointer size-9 rounded-lg border border-border-color bg-white text-default hover:bg-danger hover:text-white transition">
                                        <i class="ph ph-trash text-sm"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="pos-product-card-1 flex items-center justify-between flex-wrap gap-3 p-3 rounded-lg bg-white border border-border-color">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="size-14 rounded-md bg-light p-2 flex items-center justify-center overflow-hidden">
                                        <img src="@/assets/img/product/product-5.png" alt="Adidas IX Blue" class="w-10 h-10 object-contain">
                                    </div>
                                    <div class="min-w-0">
                                        <span class="inline-flex items-center justify-center px-2 py-1 text-[10px] font-medium text-primary bg-primary-transparent rounded-md mb-1">PRO0016</span>
                                        <h3 class="text-sm font-semibold text-title truncate">Adidas IX Blue</h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-medium text-success">$280</span>
                                    <div class="inline-flex items-center gap-2 rounded-lg border border-border-color bg-light px-2 py-1">
                                        <button class="cursor-pointer text-sm text-default qty-btn qty-minus"><i class="ph ph-minus-circle"></i></button>
                                        <span class="qty-value text-sm font-medium text-gray-900">01</span>
                                        <button class="cursor-pointer text-sm text-default qty-btn qty-plus"><i class="ph ph-plus-circle"></i></button>
                                    </div>
                                    <button class="cursor-pointer size-8 rounded-lg border border-border-color bg-white text-default hover:bg-danger hover:text-white transition">
                                        <i class="ph ph-trash text-sm"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="pos-product-card-1 flex items-center justify-between flex-wrap gap-3 p-3 rounded-lg bg-white border border-border-color">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="size-14 rounded-md bg-light p-2 flex items-center justify-center overflow-hidden">
                                        <img src="@/assets/img/product/product-12.png" alt="Nike Neo Green" class="w-10 h-10 object-contain">
                                    </div>
                                    <div class="min-w-0">
                                        <span class="inline-flex items-center justify-center px-2 py-1 text-[10px] font-medium text-primary bg-primary-transparent rounded-md mb-1">PRO0023</span>
                                        <h3 class="text-sm font-semibold text-title truncate">Nike Neo Green</h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-medium text-success">$320</span>
                                    <div class="inline-flex items-center gap-2 rounded-lg border border-border-color bg-light px-2 py-1">
                                        <button class="cursor-pointer text-sm text-default qty-btn qty-minus"><i class="ph ph-minus-circle"></i></button>
                                        <span class="qty-value text-sm font-medium text-gray-900">01</span>
                                        <button class="cursor-pointer text-sm text-default qty-btn qty-plus"><i class="ph ph-plus-circle"></i></button>
                                    </div>
                                    <button class="cursor-pointer size-8 rounded-lg border border-border-color bg-white text-default hover:bg-danger hover:text-white transition">
                                        <i class="ph ph-trash text-sm"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="pos-product-card-1 flex items-center justify-between flex-wrap gap-3 p-3 rounded-lg bg-white border border-border-color">
                                <div class="flex items-center gap-3 min-w-0 flex-wrap">
                                    <div class="size-14 rounded-md bg-light p-2 flex items-center justify-center overflow-hidden">
                                        <img src="@/assets/img/product/product-14.png" alt="Office Shoes" class="w-10 h-10 object-contain">
                                    </div>
                                    <div class="min-w-0">
                                        <span class="inline-flex items-center justify-center px-2 py-1 text-[10px] font-medium text-primary bg-primary-transparent rounded-md mb-1">PRO0025</span>
                                        <h3 class="text-sm font-semibold text-title truncate">Office Shoes</h3>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="text-sm font-medium text-success">$400</span>
                                    <div class="inline-flex items-center gap-2 rounded-lg border border-border-color bg-light px-2 py-1">
                                        <button class="cursor-pointer text-sm text-default qty-btn qty-minus"><i class="ph ph-minus-circle"></i></button>
                                        <span class="qty-value text-sm font-medium text-gray-900">01</span>
                                        <button class="cursor-pointer text-sm text-default qty-btn qty-plus"><i class="ph ph-plus-circle"></i></button>
                                    </div>
                                    <button class="cursor-pointer size-8 rounded-lg border border-border-color bg-white text-default hover:bg-danger hover:text-white transition">
                                        <i class="ph ph-trash text-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-3 gap-1 sm:gap-2 mb-0 gap-4">
                            <div class="lg:col-span-1 md:col-span-1 col-span-3">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">
                                    Order Tax
                                    <span class="text-danger">*</span>
                                </label>
                                <select class="w-full px-1.5 sm:px-2 py-1.5 sm:py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Select</option>
                                    <option>9%</option>
                                    <option>12%</option>
                                    <option>18%</option>
                                </select>
                            </div>
                            <div class="lg:col-span-1 md:col-span-1 col-span-3">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">
                                    Shipping
                                    <span class="text-danger">*</span>
                                </label>
                                <select class="w-full px-1.5 sm:px-2 py-1.5 sm:py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>0</option>
                                    <option>5</option>
                                    <option>10</option>
                                    <option>20</option>
                                </select>
                            </div>
                            <div class="lg:col-span-1 md:col-span-1 col-span-3">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">
                                    Discount(%)
                                    <span class="text-danger">*</span>
                                </label>
                                <select class="w-full px-1.5 sm:px-2 py-1.5 sm:py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>0</option>
                                    <option>10%</option>
                                    <option>20%</option>
                                    <option>30%</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- Sub Total -->
                    <div class="bg-light rounded-lg p-5 mb-5">
                        <p class="flex items-center justify-between text-default text-sm mb-2"> Sub Total <span class="text-sm font-semibold">$1300.00</span></p>
                        <p class="flex items-center justify-between text-default text-sm mb-2"> Tax <span class="text-sm font-semibold">$65.00</span></p>
                        <p class="flex items-center justify-between text-default text-sm mb-2"> Shipping <span class="text-sm font-semibold">$40.00</span></p>
                        <p class="flex items-center justify-between text-danger text-sm mb-4"> Discount <span class="text-sm font-semibold">$130.00</span></p>
                        <p class="flex items-center justify-between text-gray-900 font-semibold text-sm mb-0"> Grand Total <span class="text-sm font-semibold">$1275.00</span></p>
                    </div>
                    <!-- Order Notes -->
                    <div>
                        <h2 class="text-lg font-bold text-title mb-3">Payment Method</h2>
                        <div class="grid grid-cols-3 gap-1 sm:gap-2 mb-2 sm:mb-3">
                            <button class="px-1.5 sm:px-2 py-2 sm:py-3 rounded-md border border-border-color text-gray-900 flex flex-col items-center gap-0.5 cursor-pointer hover:border-primary transition">
                                <i class="ph-duotone ph-money text-base sm:text-lg text-default"></i>
                                <span class="text-[10px] sm:text-sm font-medium">Cash</span>
                            </button>
                            <button class="px-1.5 sm:px-2 py-2 sm:py-3 rounded-md border border-border-color text-gray-900 flex flex-col items-center gap-0.5 cursor-pointer hover:border-primary transition">
                                <i class="ph-duotone ph-credit-card text-base sm:text-lg text-default"></i>
                                <span class="text-[10px] sm:text-sm">Debit Card</span>
                            </button>
                            <button class="px-1.5 sm:px-2 py-2 sm:py-3 rounded-md border border-border-color text-gray-900 flex flex-col items-center gap-0.5 cursor-pointer hover:border-primary transition">
                                <i class="ph-duotone ph-qr-code text-base sm:text-lg text-default"></i>
                                <span class="text-[10px] sm:text-sm">Scan</span>
                            </button>
                        </div>
                        <div class="bg-dark text-white text-center py-2 sm:py-3 rounded-md mb-2 sm:mb-2">
                            <span class="text-sm sm:text-sm font-semibold">Grand Total : $0.00</span>
                        </div>
                        <div class="grid grid-cols-3 gap-1 sm:gap-2">
                            <button class="py-2 sm:py-2.5 rounded-md bg-info text-white text-[10px] sm:text-sm font-medium inline-flex items-center justify-center gap-1 cursor-pointer hover:bg-info-600 transition">
                                <i class="ph-duotone ph-pause-circle text-sm sm:text-base"></i>
                                <span class="hidden sm:inline">Hold</span>
                            </button>
                            <button class="py-2 sm:py-2.5 rounded-md bg-danger text-white text-[10px] sm:text-sm font-medium inline-flex items-center justify-center gap-1 cursor-pointer hover:bg-danger-600 transition">
                                <i class="ph-duotone ph-x-circle text-sm sm:text-base"></i>
                                <span class="hidden sm:inline">Void</span>
                            </button>
                            <button class="py-2 sm:py-2.5 rounded-md bg-success text-white text-[10px] sm:text-sm font-medium inline-flex items-center justify-center gap-1 cursor-pointer hover:bg-success-600 transition">
                                <i class="ph-duotone ph-credit-card text-sm sm:text-base"></i>
                                <span class="hidden sm:inline">Payment</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- End Grid -->

    </main>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { all_routes } from '@/router/all_routes';

export default {
    setup() {

        const container = ref(null)
        const cleanupFns = []

        onMounted(() => {
            const categoryButtons = container.value.querySelectorAll('.category-filter')
            const productCards = container.value.querySelectorAll('.pos-product-card')

            // Category filter click handling
            categoryButtons.forEach(button => {
                const handler = function () {
                    const selectedCategory = this.getAttribute('data-category')

                    categoryButtons.forEach(btn => {
                        btn.classList.remove('active', 'border-primary')
                        btn.classList.add('border-border-color', 'bg-white', 'text-gray-900')
                    })
                    this.classList.remove('border-border-color', 'bg-white', 'text-gray-900')
                    this.classList.add('active', 'border-primary')

                    productCards.forEach(card => {
                        const cardWrapper = card.closest('.col-span-1')
                        if (!cardWrapper) return

                        if (selectedCategory === 'all') {
                            cardWrapper.style.display = 'block'
                        } else {
                            const categorySpan = card.querySelector('span[class*="bg-"][class*="-transparent"]')
                            if (categorySpan) {
                                const productCategory = categorySpan.textContent.toLowerCase()
                                const filterCategory = selectedCategory.toLowerCase()

                                cardWrapper.style.display =
                                    productCategory.includes(filterCategory) || filterCategory.includes(productCategory)
                                        ? 'block'
                                        : 'none'
                            }
                        }
                    })
                }

                button.addEventListener('click', handler)
                cleanupFns.push(() => button.removeEventListener('click', handler))
            })

            // Quantity Increase/Decrease (event delegation — covers both
            // .pos-product-card in the grid and .pos-product-card-1 in the cart)
            const qtyHandler = function (e) {
                const plusBtn = e.target.closest('.qty-plus')
                if (plusBtn) {
                    const qtyValue = plusBtn.parentElement.querySelector('.qty-value')
                    if (qtyValue) {
                        qtyValue.textContent = (parseInt(qtyValue.textContent) || 0) + 1
                    }
                    return
                }

                const minusBtn = e.target.closest('.qty-minus')
                if (minusBtn) {
                    const qtyValue = minusBtn.parentElement.querySelector('.qty-value')
                    if (qtyValue) {
                        qtyValue.textContent = Math.max(0, (parseInt(qtyValue.textContent) || 0) - 1)
                    }
                }
            }

            container.value.addEventListener('click', qtyHandler)
            cleanupFns.push(() => container.value.removeEventListener('click', qtyHandler))
        })

        onBeforeUnmount(() => {
            cleanupFns.forEach(fn => fn())
        })

        return {
            all_routes,
            container
        };
    },
}
</script>