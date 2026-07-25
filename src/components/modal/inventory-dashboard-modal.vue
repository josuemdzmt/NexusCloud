<template>
    <!-- Add Inventory Modal -->
	<div id="add-inventory-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto  min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">Add Inventory</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#add-inventory-modal"><i class="ph ph-x text-sm"></i></button>
				</div>
				<div class="p-4 grid grid-cols-2 gap-3">
					<div class="col-span-2">
						<label class="text-xs font-semibold text-gray-900 mb-1 block">Product <span class="text-danger">*</span></label>
						<select class="w-full px-3 py-2 text-xs border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select</option>
							<option>Apple iPhone 15</option>
							<option>Dell XPS 13 9310</option>
							<option>Bose QuietComfort 45</option>
							<option>Sony WH-1000XM5</option>
							<option>Samsung Galaxy S23 Ultra</option>
						</select>
					</div>
					<div>
						<label class="text-xs font-semibold text-gray-900 mb-1 block">Warehouse <span class="text-danger">*</span></label>
						<select class="w-full px-3 py-2 text-xs border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select</option>
							<option>Smart Stock Hub</option>
							<option>Flow Grid Storage</option>
							<option>Prime Storage Solutions</option>
							<option>Global Supply Depot</option>
						</select>
					</div>
					<div>
						<label class="text-xs font-semibold text-gray-900 mb-1 block">Quantity</label>
						<input type="number" class="w-full px-3 py-2 text-xs border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-inventory-modal">Cancel</button>
					<button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Add Inventory</button>
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
    data() {
        return {
            selected: null,
            selectedOne: null,
            Product: [
                { value: 'Select', label: 'Select' },
                { value: 'Apple iPhone 15', label: 'Apple iPhone 15' },
                { value: 'Dell XPS 13 9310', label: 'Dell XPS 13 9310' },
                { value: 'Bose QuietComfort 45', label: 'Bose QuietComfort 45' },
                { value: 'Sony WH-1000XM5', label: 'Sony WH-1000XM5' },
                { value: 'Samsung Galaxy S23 Ultra', label: 'Samsung Galaxy S23 Ultra' },
            ],
            Warehouse: [
                { value: 'Select', label: 'Select' },
                { value: 'Smart Stock Hub', label: 'Smart Stock Hub' },
                { value: 'Flow Grid Storage', label: 'Flow Grid Storage' },
                { value: 'Prime Storage Solutions', label: 'Prime Storage Solutions' },
                { value: 'Global Supply Depot', label: 'Global Supply Depot' },
            ],
        };
    }
}
</script>
