<template>
	<main>

		<div class="p-3 lg:py-6 lg:px-0">

			<div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
				<h1 class="text-gray-900 text-xl font-bold mb-0">Form Pickers</h1>
			</div>

			<!-- Start Grid -->
			<div class="grid grid-cols-1">
				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 mb-6">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h2 class="text-gray-900 text-lg font-bold mb-0">Flatpickr - Datepicker</h2>
						<button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
						</button> 
					</div>
					<div class="preview-content grid grid-cols-12 gap-5" :class="{ hidden: showCode(0) }">
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="basic" class="block text-sm font-medium mb-2 text-dark">Basic</label>
							<input id="basic" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="flatpickr" data-date-format="d M, Y" placeholder="">
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="date-time" class="block text-sm font-medium mb-2 text-dark">DateTime</label>
							<input id="date-time" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="flatpickr" data-date-format="d.m.y" data-enable-time placeholder="">
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="human-friendly-dates" class="block text-sm font-medium mb-2 text-dark">Human-Friendly Dates</label>
							<input id="human-friendly-dates" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="flatpickr" data-altFormat="F j, Y" placeholder="">
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="min-date" class="block text-sm font-medium mb-2 text-dark">MinDate and MaxDate</label>
							<input id="min-date" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="flatpickr" data-date-format="d M, Y" data-minDate="25 12, 2026" data-maxDate="29 12,2026" placeholder="">
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="default-date" class="block text-sm font-medium mb-2 text-dark">Default Date</label>
							<a-date-picker v-model="valueFour" class="form-input block w-full bg-light border-border-color rounded-lg focus:border-primary disabled:opacity-50 disabled:pointer-events-none" placeholder="dd/mm/yyyy" />
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="multiple-dates" class="block text-sm font-medium mb-2 text-dark">Selecting Multiple Dates</label>
							<input id="multiple-dates" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="flatpickr" data-date-format="d M, Y" data-multiple-date="true" placeholder="">
						</div> 
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="range" class="block text-sm font-medium mb-2 text-dark">Range</label>
							<input id="range" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" placeholder="">
						</div> 
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="inline" class="block text-sm font-medium mb-2 text-dark">Inline</label>
							<input id="inline" type="text" class="hidden" data-provider="flatpickr" data-date-format="d M, Y" data-default-date="today" data-inline-date="true">
						</div> 
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="week-numbers" class="block text-sm font-medium mb-2 text-dark">Week Numbers</label>
							<input id="week-numbers" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="flatpickr" data-date-format="d M, Y" data-week-number placeholder="">
						</div> 
					</div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="grid grid-cols-1 lg:grid-cols-2 gap-6"&gt;
&lt;div&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Single Select&lt;/label&gt;
	&lt;select class="select2 form-input block w-full bg-white border-border-color rounded-lg focus:border-primary disabled:opacity-50 disabled:pointer-events-none"&gt;
		&lt;option&gt;Select&lt;/option&gt;
		&lt;optgroup label="Alaskan/Hawaiian Time Zone"&gt;
			&lt;option value="AK"&gt;Alaska&lt;/option&gt;
			&lt;option value="HI"&gt;Hawaii&lt;/option&gt;
		&lt;/optgroup&gt;
		&lt;optgroup label="Pacific Time Zone"&gt;
			&lt;option value="CA"&gt;California&lt;/option&gt;
			&lt;option value="NV"&gt;Nevada&lt;/option&gt;
			&lt;option value="OR"&gt;Oregon&lt;/option&gt; 
		&lt;/optgroup&gt;
		&lt;optgroup label="Mountain Time Zone"&gt;
			&lt;option value="AZ"&gt;Arizona&lt;/option&gt;
			&lt;option value="CO"&gt;Colorado&lt;/option&gt;
			&lt;option value="ID"&gt;Idaho&lt;/option&gt; 
		&lt;/optgroup&gt; 
	&lt;/select&gt; 
&lt;/div&gt; 
&lt;div&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Custom select with tags&lt;/label&gt;
	&lt;select class="select2 select2-multiple form-input block w-full bg-white border-border-color rounded-lg focus:border-primary disabled:opacity-50 disabled:pointer-events-none" multiple="multiple" data-placeholder="Choose ..."&gt;
		&lt;optgroup label="Alaskan/Hawaiian Time Zone"&gt;
			&lt;option value="AK"&gt;Alaska&lt;/option&gt;
			&lt;option value="HI"&gt;Hawaii&lt;/option&gt;
		&lt;/optgroup&gt;
		&lt;optgroup label="Pacific Time Zone"&gt;
			&lt;option value="CA"&gt;California&lt;/option&gt;
			&lt;option value="NV"&gt;Nevada&lt;/option&gt; 
		&lt;/optgroup&gt;
		&lt;optgroup label="Mountain Time Zone"&gt;
			&lt;option value="AZ"&gt;Arizona&lt;/option&gt;
			&lt;option value="CO"&gt;Colorado&lt;/option&gt;
			&lt;option value="ID"&gt;Idaho&lt;/option&gt;
			&lt;option value="MT"&gt;Montana&lt;/option&gt; 
		&lt;/optgroup&gt;
		&lt;optgroup label="Central Time Zone"&gt;
			&lt;option value="AL"&gt;Alabama&lt;/option&gt;
			&lt;option value="AR"&gt;Arkansas&lt;/option&gt;
			&lt;option value="IL"&gt;Illinois&lt;/option&gt;
			&lt;option value="IA"&gt;Iowa&lt;/option&gt; 
		&lt;/optgroup&gt;
		&lt;optgroup label="Eastern Time Zone"&gt;
			&lt;option value="CT"&gt;Connecticut&lt;/option&gt;
			&lt;option value="DE"&gt;Delaware&lt;/option&gt;
			&lt;option value="FL"&gt;Florida&lt;/option&gt;
			&lt;option value="GA"&gt;Georgia&lt;/option&gt;
			&lt;option value="IN"&gt;Indiana&lt;/option&gt;
			&lt;option value="ME"&gt;Maine&lt;/option&gt; 
		&lt;/optgroup&gt;
	&lt;/select&gt; 
&lt;/div&gt;  
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end col -->

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 mb-6">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h3 class="text-gray-900 text-lg font-bold mb-0">Flatpickr - Timepicker</h3>
						<button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
						</button> 
					</div>
					<div class="preview-content grid grid-cols-12 gap-5" :class="{ hidden: showCode(1) }">
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="timepicker" class="block text-sm font-medium mb-2 text-dark">Timepicker</label>
							<input id="timepicker" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-time-basic="true" placeholder="">
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="24-hour-time-picker" class="block text-sm font-medium mb-2 text-dark">24-hour Time Picker</label>
							<input id="24-hour-time-picker" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-time-hrs="true" placeholder="">
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="time-picker-w-limits" class="block text-sm font-medium mb-2 text-dark">Time Picker w/ Limits</label>
							<input id="time-picker-w-limits" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-min-time="13:00" data-max-time="16:00" placeholder="">
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="preloading-time" class="block text-sm font-medium mb-2 text-dark">Preloading Time</label>
							<input id="preloading-time" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-default-time="16:45" placeholder="">
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="inline2" class="block text-sm font-medium mb-2 text-dark">Inline</label>
							<input id="inline2" type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-time-inline="11:42" placeholder="12 : 00 PM">
						</div> 
					</div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="grid grid-cols-1 lg:grid-cols-3 gap-6"&gt;
&lt;div class="mb-4"&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Timepicker&lt;/label&gt;
	&lt;input type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-time-basic="true" placeholder=""&gt;
&lt;/div&gt;
&lt;div class="mb-4"&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;24-hour Time Picker&lt;/label&gt;
	&lt;input type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-time-hrs="true" placeholder=""&gt;
&lt;/div&gt;
&lt;div class="mb-4"&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Time Picker w/ Limits&lt;/label&gt;
	&lt;input type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-min-time="Min.Time" data-max-time="Max.Time" placeholder=""&gt;
&lt;/div&gt;
&lt;div class="mb-4"&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Preloading Time&lt;/label&gt;
	&lt;input type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-default-time="16:45" placeholder=""&gt;
&lt;/div&gt;
&lt;div class="mb-4"&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Inline&lt;/label&gt;
	&lt;input type="text" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" data-provider="timepickr" data-time-inline="11:42" placeholder="12 : 00 PM"&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end col -->


				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h3 class="text-gray-900 text-lg font-bold mb-0">Common Date & Time Components</h3>
						<button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
						</button> 
					</div>
					<div class="preview-content grid grid-cols-12 gap-5" :class="{ hidden: showCode(2) }">
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="timepicker" class="block text-sm font-medium mb-2 text-dark">Date Picker</label>
							<a-date-picker v-model="valueOne" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" placeholder="dd/mm/yyyy" />
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="24-hour-time-picker" class="block text-sm font-medium mb-2 text-dark">Time Picker</label>
							<a-time-picker v-model:value="valueTwo" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" />
						</div>
						<div class="md:col-span-6 xl:col-span-4 col-span-12">
							<label for="time-picker-w-limits" class="block text-sm font-medium mb-2 text-dark">Date Range Picker</label>
							<a-range-picker v-model:value="valueThree" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" />
						</div>
					</div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="grid grid-cols-1 lg:grid-cols-3 gap-6"&gt;
&lt;div class="mb-4"&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Date Picker&lt;/label&gt;
	&lt;a-date-picker v-model="valueOne" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" placeholder="dd/mm/yyyy"&gt;
&lt;/div&gt;
&lt;div class="mb-4"&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Time Picker&lt;/label&gt;
	&lt;a-time-picker v-model:value="valueTwo" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color"&gt;
&lt;/div&gt;
&lt;div class="mb-4"&gt;
	&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Range Picker&lt;/label&gt;
	&lt;a-range-picker v-model:value="valueThree" class="form-input block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color"&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end col -->

			</div> 
			<!-- End grid -->  
		</div>
	</main>
</template>
<script>
import { ref } from 'vue';
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();

export default {
    data() {
        return {
			valueOne,
			valueTwo,
			valueThree,
			valueFour,
            showCodeState: {},
        };
    },
    methods: {
        showCode(index) {
            return !!this.showCodeState[index];
        },
        toggleCode(index) {
            this.showCodeState[index] = !this.showCodeState[index];
        },
    },
};
</script>
