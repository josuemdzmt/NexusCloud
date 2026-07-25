<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">     
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div>
                    <div class="flex items-center gap-2 text-sm text-default mb-1">
                        <router-link :to="all_routes.products" class="hover:text-primary">Products</router-link> 
                        <i class="ph ph-caret-right text-[10px]"></i> <span>Add New</span>
                    </div>
                    <h1 class="text-gray-900 text-xl font-bold mb-0">Add Product</h1>
                </div>
                <div class="flex items-center gap-2">
                    <router-link :to="all_routes.products" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer">Cancel</router-link>
                    <button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Product</button>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 lg:col-span-8 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Basic Information</h2>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="col-span-2">
                                <label class="text-sm font-semibold text-gray-900 mb-1 block">Product Name
                                    <span class="text-danger">*</span>
                                </label>
                                    <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">SKU 
                                <span
                                        class="text-danger">*</span>
                                    </label>
                                    <input type="text"
                                    class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Barcode</label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Category</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 focus:border-border-color active:border-border-color">
                                    <option>Laptop</option>
                                    <option>Smartphone</option>
                                </select>
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Brand</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Apple</option>
                                    <option>Dell</option>
                                </select>
                            </div>
                            <div class="col-span-2"><label class="text-sm text-gray-900 mb-1 block">Description</label>
                                <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Pricing &amp; Stock</h2>
                        <div class="grid grid-cols-3 gap-3">
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Selling Price</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Cost Price</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Quantity</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Unit</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>Pieces</option>
                                    <option>Kilogram</option>
                                </select>
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Reorder Level</label>
                                <input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div><label class="text-sm font-semibold text-gray-900 mb-1 block">Tax Rate</label>
                                <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                    <option>18% GST</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 space-y-3">
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Product Image</h2>
                        <div class="relative border-2 border-dashed border-border-color rounded-md p-6 text-center cursor-pointer hover:border-primary">
                            <i class="ph-duotone ph-cloud-arrow-up text-3xl text-default"></i>
                            <p class="text-sm text-default mt-2 mb-0">Click or drag to upload</p>
                            <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer">     
                        </div>
                    </div>
                    <div class="bg-white border border-border-color rounded-md p-4">
                        <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Status</h2>
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
            all_routes, 
            all_routes            
        };
    },
}
</script>
