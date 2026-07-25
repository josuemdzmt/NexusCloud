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
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Product <span class="text-danger">*</span></label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select</option>
							<option>Apple iPhone 15</option>
							<option>Dell XPS 13 9310</option>
							<option>Bose QuietComfort 45</option>
							<option>Sony WH-1000XM5</option>
							<option>Samsung Galaxy S23 Ultra</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Warehouse <span class="text-danger">*</span></label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select</option>
							<option>Smart Stock Hub</option>
							<option>Flow Grid Storage</option>
							<option>Prime Storage Solutions</option>
							<option>Global Supply Depot</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Quantity</label>
						<input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-inventory-modal">Cancel</button>
					<button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Add Inventory</button>
				</div>
			</div>
		</div>
	</div> 

    <!-- Edit Inventory Modal -->
	<div id="edit-inventory-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">Edit Inventory</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#edit-inventory-modal">
						<i class="ph ph-x text-sm"></i>
					</button>
				</div>
				<div class="p-4 grid grid-cols-2 gap-3">
					<div class="col-span-2">
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Product 
							<span class="text-danger">*</span>
						</label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select</option>
							<option selected>Apple iPhone 15</option>
							<option>Dell XPS 13 9310</option>
							<option>Bose QuietComfort 45</option>
							<option>Sony WH-1000XM5</option>
							<option>Samsung Galaxy S23 Ultra</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Warehouse <span class="text-danger">*</span></label>
						<select class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
							<option>Select</option>
							<option>Smart Stock Hub</option>
							<option selected>Flow Grid Storage</option>
							<option>Prime Storage Solutions</option>
							<option>Global Supply Depot</option>
						</select>
					</div>
					<div>
						<label class="text-sm font-semibold text-gray-900 mb-1 block">Quantity</label>
						<input type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" value="2">
					</div>
				</div>
				<div class="flex justify-end items-center gap-2 p-4 border-t border-border-color">
					<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#edit-inventory-modal">Cancel</button>
					<button type="button" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover cursor-pointer">Save Changes</button>
				</div>
			</div>
		</div>
	</div> 

    <!-- History Inventory Modal -->
	<div id="history-inventory-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class=" bg-white border shadow-sm rounded-md border-border-color w-full">
				<div class="flex justify-between items-center p-4 border-b border-border-color">
					<h2 class="text-base font-bold text-title">History</h2>
					<button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" data-hs-overlay="#history-inventory-modal">
						<i class="ph ph-x text-sm"></i>
					</button>
				</div>
				<div class="p-4">
                    <div class="bg-light rounded-md p-5 mb-4 flex items-center justify-between gap-3 flex-wrap"> 
                        <h3 class="text-sm font-semibold flex flex-col gap-1"> Apple iPhone 15 
                            <span class="text-sm text-default font-normal"> PR00014</span>
                        </h3>
                        <div class="flex items-center justify-end gap-3">
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-download"></i> Download PDF</button>
                            <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-light cursor-pointer"><i class="ph-duotone ph-printer"></i> Print</button>
                        </div>
                    </div>
                    <!-- Start Table -->
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="text-sm text-default border-b border-border-color">
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Date</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Unit</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Purchase Price</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Stock After</th>
                                    <th class="text-left py-2 px-2 font-semibold text-gray-900">Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">12 Sep 2025, 06:40 PM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">+5</td>
                                    <td class="py-2.5 px-2 text-sm text-default">17</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Transfer</td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">10 Sep 2025, 08:00 AM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">-4</td>
                                    <td class="py-2.5 px-2 text-sm text-default">12</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Sale</td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">01 Sep 2025, 07:10 PM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">+3</td>
                                    <td class="py-2.5 px-2 text-sm text-default">34</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Sale</td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">28 Aug 2025, 10:00 AM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Pack</td>
                                    <td class="py-2.5 px-2 text-sm text-default">-8</td>
                                    <td class="py-2.5 px-2 text-sm text-default">10</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Damage</td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">20 Aug 2025, 12:20 PM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">+9</td>
                                    <td class="py-2.5 px-2 text-sm text-default">20</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Transfer</td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">04 Aug 2025, 04:10 PM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">+15</td>
                                    <td class="py-2.5 px-2 text-sm text-default">25</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Sale</td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">25 Jul 2025, 11:30 AM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">-10</td>
                                    <td class="py-2.5 px-2 text-sm text-default">30</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Sale</td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">16 Jul 2025, 05:00 PM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">+6</td>
                                    <td class="py-2.5 px-2 text-sm text-default">18</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Transfer</td>
                                </tr>
                                <tr class="border-b border-border-color">
                                    <td class="py-2.5 px-2 text-sm text-default">05 Jul 2025, 09:20 AM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">-3</td>
                                    <td class="py-2.5 px-2 text-sm text-default">28</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Sale</td>
                                </tr>
                                <tr>
                                    <td class="py-2.5 px-2 text-sm text-default">23 Jun 2025, 10:50 AM</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Piece</td>
                                    <td class="py-2.5 px-2 text-sm text-default">+2</td>
                                    <td class="py-2.5 px-2 text-sm text-default">16</td>
                                    <td class="py-2.5 px-2 text-sm text-default">Damage</td>
                                </tr>
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
                        <div class="flex items-center gap-1">
                            <button class="size-7 rounded-md text-sm bg-dark text-white flex items-center justify-center">1</button>
                            <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">2</button>
                            <button class="size-7 rounded-md text-sm text-gray-900 hover:bg-light flex items-center justify-center">3</button>
                            <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light ml-1"><i class="ph ph-caret-left text-sm"></i></button>
                            <button class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light"><i class="ph ph-caret-right text-sm"></i></button>
                        </div>
                    </div>
                    <!-- End Table -->
                    
				</div>
			</div>
		</div>
	</div>

    <!-- Delete Modal -->
	<div id="delete-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-sm sm:w-full m-3 max-w-[300px]! mx-auto pointer-events-auto min-h-screen flex items-center justify-center">
			<div class="flex flex-col bg-white border shadow-sm rounded-md border-border-color p-6">
				<div class="bg-danger-transparent size-10 rounded-lg flex items-center justify-center mx-auto"> <i class="icon-trash-2 text-danger text-[20px]!"></i> </div>
				<div class="my-5 text-center">
					<p class="text-base font-bold text-title mb-1">Delete Confirmation</p>
					<p class="mb-0 text-sm">Are you sure, do you want to delete ?</p>
				</div>
				<div class="flex justify-between items-center gap-2 flex-col">
					<button type="button" class="btn-sm w-full bg-danger text-white border border-danger hover:bg-danger-hover cursor-pointer">Yes, Delete</button>
					<button type="button" class="btn-sm w-full bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#delete-modal">Cancel</button>
				</div>
			</div>
		</div>
	</div> 
</template>