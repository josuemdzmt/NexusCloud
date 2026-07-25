<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <div class="flex items-center gap-2">
                    <router-link :to="all_routes.purchases" class="text-gray-900 hover:text-primary flex items-center text-sm">
                        <i class="ph ph-arrow-left"></i>
                    </router-link>
                    <h1 class="text-gray-900 text-base font-bold mb-0">Edit Purchase</h1>
                </div>
                <div class="flex items-center gap-2">
                    <router-link :to="all_routes.purchaseDetails" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer rounded-md shadow-sm inline-flex items-center">
                        <i class="ph ph-eye mr-1"></i> Preview
                    </router-link>
                </div>
            </div>
            <div class="bg-white border border-border-color rounded-md p-5 shadow-sm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 pb-6 border-b border-border-color">
                    <div>
                        <h2 class="text-lg font-bold text-gray-900 mb-5">Company Details</h2>
                        <div class="mb-5">
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">Logo</label>
                            <div class="border border-dashed border-border-color rounded-md p-6 text-center cursor-pointer hover:bg-light relative h-28">
                                <i class="ph ph-image text-gray-400 text-2xl mb-2 block"></i>
                                <p class="text-sm text-gray-600">Drop Your Files or <span class="text-primary hover:underline font-medium">Browse</span></p>
                                <input type="file" class="opacity-0 w-full h-full absolute inset-0 cursor-pointer">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">From 
                                <span class="text-danger">*</span>
                            </label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600 dark:bg-gray-100" value="Dreams ERP" readonly>
                        </div>
                        <div class="mb-0">
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">To 
                                <span class="text-danger">*</span>
                            </label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option selected>Apex Computers</option>
                                <option>Beats Headphones</option>
                                <option>Dazzle Shoes</option>
                                <option>Best Accessories</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h2 class="text-lg font-bold text-gray-900 mb-5">Purchase Details</h2>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-2 block">Purchase ID 
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600 dark:bg-gray-100" value="POD0001" readonly>
                            </div>
                            <div>
                                <label class="text-sm font-semibold text-gray-900 mb-2 block">Reference 
                                    <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="INV0019">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">Date 
                                <span class="text-danger">*</span>
                            </label>
                            <a-date-picker v-model:value="purchaseDate" class="w-full" placeholder="dd/mm/yyyy" />
                        </div>
                        <div class="mb-4">
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">Payment Terms 
                                <span class="text-danger">*</span>
                            </label>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="Net 30">
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">Status 
                                <span class="text-danger">*</span>
                            </label>
                            <select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                                <option>Select</option>
                                <option>Paid</option>
                                <option selected>Pending</option>
                                <option>Partially Paid</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <h2 class="text-lg font-bold text-gray-900 mb-5">Items</h2>
                <div class="overflow-x-auto mb-4">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="text-sm font-bold text-gray-900 border-b border-border-color">
                                <th class="text-left py-3 px-2 text-sm font-semibold">Items</th>
                                <th class="text-left py-3 px-2 text-sm font-semibold">Quantity</th>
                                <th class="text-left py-3 px-2 text-sm font-semibold">Unit Price ($)</th>
                                <th class="text-left py-3 px-2 text-sm font-semibold">Discount ($)</th>
                                <th class="text-left py-3 px-2 text-sm font-semibold">Amount($)</th>
                                <th class="py-3 px-2"></th>
                            </tr>
                        </thead>
                        <tbody id="invoice-items">
                            <tr v-for="(item, index) in items" :key="item.id">
                                <td class="py-3 px-2 w-1/3">
                                    <input v-model="item.name" type="text" class="w-20 sm:w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                                </td>
                                <td class="py-3 px-2">
                                    <div class="flex items-center border border-border-color rounded-md w-max px-2 py-1 bg-white h-[38px]">
                                        <button type="button" class="text-gray-500 hover:text-gray-700 px-1 cursor-pointer" @click="toggleQty(item, 1)" >
                                            <i class="ph ph-plus pointer-events-none"></i>
                                        </button>
                                            <input v-model.number="item.qty" type="text" class="w-8 text-center text-sm border-none focus:outline-none focus:ring-0 p-0 bg-transparent" />
                                        <button type="button" class="text-gray-500 hover:text-gray-700 px-1 cursor-pointer" @click="toggleQty(item, -1)" >
                                            <i class="ph ph-minus pointer-events-none"></i>
                                        </button>
                                    </div>
                                </td>
                                <td class="py-3 px-2">
                                    <input v-model="item.price" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                                </td>
                                <td class="py-3 px-2">
                                    <input v-model="item.tax" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                                </td>
                                <td class="py-3 px-2">
                                    <input :value="amount(item)" type="text" readonly class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                                </td>
                                <td class="py-3 px-2 text-center">
                                    <button v-if="index > 0" type="button" class="delete-item-btn size-7 bg-danger-transparent text-danger hover:bg-danger hover:text-white rounded-md inline-flex justify-center items-center cursor-pointer transition-colors" @click="removeItem(item.id)" >
                                        <i class="ph ph-trash pointer-events-none"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <button type="button" id="add-item-btn" class="btn-sm bg-light border border-border-color text-gray-700 hover:bg-gray-100 cursor-pointer mb-8 rounded-md shadow-sm" @click="addItem">
                    <i class="ph ph-plus mr-1"></i> Add New
                </button>
                
                <div class="grid xl:grid-cols-12 grid-cols-1 gap-8">
                    <div class="xl:col-span-7 xxl:col-span-8">
                        <div class="mb-4">
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">Notes</label>
                            <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4">Payment processed successfully. For future invoices, contact billing@example.com</textarea>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-2 block">Terms &amp; Conditions</label>
                            <textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4"></textarea>
                        </div>
                    </div>
                    
                    <div class="space-y-4 xl:col-span-5 xxl:col-span-4">
                        <div class="flex items-center gap-4">  
                            <span class="text-sm font-semibold text-gray-900 w-1/1">Amount</span>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="40.50">
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="text-sm font-semibold text-gray-900 w-1/1">Tax (18%)</span>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="2.43">
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="text-sm font-semibold text-gray-900 w-1/1">Discount (10%)</span>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="24">
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="text-sm font-semibold text-gray-900 w-1/1">Shipping Charge</span>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="45">
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="text-sm font-semibold text-gray-900 w-1/1">Total Amount ($)</span>
                            <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600 dark:bg-gray-100" value="78.21" readonly>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end items-center gap-2 mt-5 pt-5 border-t border-border-color">
                    <router-link :to="all_routes.purchases" class="btn-sm bg-light border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-dark hover:border-dark hover:text-white cursor-pointer">Cancel</router-link>
                    <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">Save Changes</button>
                </div>

            </div>
        </div>
    </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';

let nextId = 1

function createItem(qty = 0) {
  return {
    id: nextId++,
    name: '',
    qty,
    price: '',
    tax: '',
  }
}

export default {
    setup() {

        return {
            all_routes
        };
    },
    data() {
        return {
            purchaseDate: null,
            items: [createItem(0), createItem(1)],
        };
    },
    methods: {
        addItem() {
            this.items.push(createItem())
        },
        removeItem(id) {
            this.items = this.items.filter((item) => item.id !== id)
        },
        // "Toggle" the quantity up or down, never going below 0
        toggleQty(item, delta) {
            item.qty = Math.max(0, (parseInt(item.qty) || 0) + delta)
        },
        amount(item) {
            const price = parseFloat(item.price) || 0
            const tax = parseFloat(item.tax) || 0
            const total = item.qty * price * (1 + tax / 100)
            return total ? total.toFixed(2) : ''
        },
    }
}
</script>
