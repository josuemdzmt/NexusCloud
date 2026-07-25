<template>
    <!-- Add Modal -->
	<div id="add-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hidden size-full fixed top-0 start-0 z-80 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
		<div class="min-h-screen flex items-center justify-center p-4">
			<div class="max-w-[420px] w-full mx-auto">
				<div class="bg-white rounded-md pointer-events-auto p-5">
					<div class="flex items-center justify-between mb-5">
						<h2 class="text-base font-bold text-gray-900 mb-0">Add Ticket</h2>
						<button type="button" class="size-8 inline-flex justify-center items-center rounded-md border border-border-color bg-white text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-modal" aria-label="Close">
							<i class="ph ph-x"></i>
						</button>
					</div>
					<form @submit.prevent="submitForm" class="space-y-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Ticket ID <span class="text-danger">*</span></label>
                                <input type="text" value="TKT0001" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600 dark:bg-gray-100" readonly>
                            </div>
                            <div>
                                <label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Customer Name <span class="text-danger">*</span></label>
                                <input type="text" class="w-full px-3 py-2 text-xs border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                            </div>
                            <div>
                                <label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Created On <span class="text-danger">*</span></label>
                                <div class="relative">
                                    <a-date-picker v-model="valueOne" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 pr-10" placeholder="dd/mm/yyyy" />
                                    <i class="ph ph-calendar-blank absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>
                            <div>
                                <label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Last Updated <span class="text-danger">*</span></label>
                                <div class="relative">
                                    <a-date-picker v-model="valueTwo" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 pr-10" placeholder="dd/mm/yyyy" />
                                    <i class="ph ph-calendar-blank absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                </div>
                            </div>
							<div>
								<label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Priority <span class="text-danger">*</span></label>
								<select class="w-full px-3 py-2 text-xs border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
									<option>Select</option>
									<option>Low</option>
									<option>Medium</option>
									<option>High</option>
								</select>
							</div>
							<div>
								<label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Status <span class="text-danger">*</span></label>
								<select class="w-full px-3 py-2 text-xs border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
									<option>Select</option>
									<option>Open</option>
									<option>Resolved</option>
									<option>Pending</option>
								</select>
							</div>
                        </div>
                        <div>
                            <label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Assigned To <span class="text-danger">*</span></label>
                            <input type="text" class="w-full px-3 py-2 text-xs border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                        <div>
                            <label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Subject <span class="text-danger">*</span></label>
                            <input type="text" class="w-full px-3 py-2 text-xs border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
						<div>
							<label class="text-xs font-semibold text-gray-900 mb-1 inline-block">Message</label>
							<textarea class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" rows="4"></textarea>
						</div>
						<div class="flex items-center justify-between gap-3 mt-5">
							<button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" data-hs-overlay="#add-modal">Cancel</button>
							<button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer">Create New</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
const valueOne = ref();
const valueTwo = ref();


export default {
    data() {
        return {
            valueOne,
            valueTwo,
        }
    },
    setup() {
        const submitForm = () => {
            router.push("/support/tickets");
        };

        return {
            submitForm,
        };
    },
}
</script>
