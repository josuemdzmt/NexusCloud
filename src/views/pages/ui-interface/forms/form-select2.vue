<template>
			<main>

                <div class="p-3 lg:py-6 lg:px-0">

                    <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                        <h1 class="text-gray-900 text-xl font-bold mb-0">Form Select</h1>
                    </div>

					<!-- Start Grid -->
					<div class="grid grid-cols-1 gap-6">
						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h2 class="text-gray-900 text-lg font-bold mb-0">Choices</h2>
								<button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> <!-- end col -->

							<div class="preview-content grid grid-cols-12 gap-5" :class="{ hidden: showCode(0) }">
								<div class="col-span-12 sm:col-span-6">
									<label for="choices-single-no-sorting" class="block text-sm font-medium mb-2 text-dark">Default</label>
									<vue3-select
										v-model="selected"
										:options="Default"
										:isClearable="false"
										placeholder="Select"
									/>
								</div>  
								<div class="col-span-12 sm:col-span-6">
									<label for="choices-single-no-search" class="block text-sm font-medium mb-2 text-dark">Options added</label>
									<vue3-select
										v-model="selectedOne"
										:options="OptionsAdded"
										:isClearable="false"
										placeholder="Select"
									/>
								</div>  
								<div class="col-span-12 sm:col-span-6">
									<label for="choices-multiple-remove-button" class="block text-sm font-medium mb-2 text-dark">Multiple Select</label>
									<vue3-select
										v-model="selectedTwo"
										:options="MultipleOptions"
										:is-multi="true"
										:isClearable="false"
										placeholder="Select"
									/>
								</div> 
								<div class="col-span-12 sm:col-span-6">
									<label for="choices-multiple-remove-button" class="block text-sm font-medium mb-2 text-dark">Multiple Select With Remove</label>
									<vue3-select
										v-model="selectedThree"
										:options="MultipleOptions"
										:is-multi="true"
										:isClearable="false"
										placeholder="Select"
									/>
								</div>  
								<div class="col-span-12 sm:col-span-6">
									<label for="choices-text-remove-button" class="block text-sm font-medium mb-2 text-dark">Text Inputs With Remove</label>
									<vue3-tags-input
										class="input-tags form-control"
										placeholder=""
										type="text"
										data-role="tagsinput"
										name="Label"
										value="Tag1"
										:tags="tagsOne"
									/>
								</div> 
								<div class="col-span-12 sm:col-span-6">
									<label for="choices-text-unique-values" class="block text-sm font-medium mb-2 text-dark">Text Inputs Add </label>
									<vue3-tags-input
										class="input-tags form-control"
										placeholder=""
										type="text"
										data-role="tagsinput"
										name="Label"
										value="Tag2"
										:tags="tagsTwo"
									/>
								</div>  
							</div> <!-- end col -->

	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div class="preview-content grid grid-cols-1 lg:grid-cols-2 gap-6"&gt;
		&lt;div class="mb-4"&gt;
			&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Default&lt;/label&gt;
			&lt;select class="form-input block w-full bg-white border-border-color rounded-lg focus:border-primary disabled:opacity-50 disabled:pointer-events-none" id="choices-single-no-sorting" name="choices-single-no-sorting" data-choices data-choices-sorting-false&gt;
				&lt;option value="Madrid"&gt;Madrid&lt;/option&gt;
				&lt;option value="Toronto"&gt;Toronto&lt;/option&gt;
				&lt;option value="Vancouver"&gt;Vancouver&lt;/option&gt;
				&lt;option value="London"&gt;London&lt;/option&gt;
				&lt;option value="Manchester"&gt;Manchester&lt;/option&gt;
				&lt;option value="Liverpool"&gt;Liverpool&lt;/option&gt;
				&lt;option value="Paris"&gt;Paris&lt;/option&gt;
				&lt;option value="Malaga"&gt;Malaga&lt;/option&gt;
				&lt;option value="Washington" disabled&gt;Washington&lt;/option&gt;
				&lt;option value="Lyon"&gt;Lyon&lt;/option&gt;
				&lt;option value="Marseille"&gt;Marseille&lt;/option&gt;
				&lt;option value="Hamburg"&gt;Hamburg&lt;/option&gt;
				&lt;option value="Munich"&gt;Munich&lt;/option&gt;
				&lt;option value="Barcelona"&gt;Barcelona&lt;/option&gt;
				&lt;option value="Berlin"&gt;Berlin&lt;/option&gt;
				&lt;option value="Montreal"&gt;Montreal&lt;/option&gt;
				&lt;option value="New York"&gt;New York&lt;/option&gt;
				&lt;option value="Michigan"&gt;Michigan&lt;/option&gt;
			&lt;/select&gt; 
		&lt;/div&gt;  
		&lt;div class="mb-4"&gt;
			&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Options added&lt;/label&gt;
			&lt;select class="form-input block w-full bg-white border-border-color rounded-lg focus:border-primary disabled:opacity-50 disabled:pointer-events-none" id="choices-single-no-search" name="choices-single-no-search" data-choices data-choices-search-false data-choices-removeItem&gt;
				&lt;option value="Zero"&gt;Zero&lt;/option&gt;
				&lt;option value="One"&gt;One&lt;/option&gt;
				&lt;option value="Two"&gt;Two&lt;/option&gt;
				&lt;option value="Three"&gt;Three&lt;/option&gt;
				&lt;option value="Four"&gt;Four&lt;/option&gt;
				&lt;option value="Five"&gt;Five&lt;/option&gt;
				&lt;option value="Six"&gt;Six&lt;/option&gt;
			&lt;/select&gt;
		&lt;/div&gt;  
		&lt;div class="mb-4"&gt;
			&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Multiple Select&lt;/label&gt;
			&lt;select class="form-control" id="choices-multiple-default" data-choices name="choices-multiple-default" multiple&gt;
				&lt;option value="Choice 1" selected&gt;Choice 1&lt;/option&gt;
				&lt;option value="Choice 2"&gt;Choice 2&lt;/option&gt;
				&lt;option value="Choice 3"&gt;Choice 3&lt;/option&gt;
				&lt;option value="Choice 4"&gt;Choice 4&lt;/option&gt;
			&lt;/select&gt;
		&lt;/div&gt; 
		&lt;div class="mb-4"&gt;
			&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Multiple Select With Remove&lt;/label&gt;
			&lt;select class="form-control" id="choices-multiple-remove-button" data-choices data-choices-removeItem name="choices-multiple-remove-button" multiple&gt;
				&lt;option value="Choice 1" selected&gt;Choice 1&lt;/option&gt;
				&lt;option value="Choice 2"&gt;Choice 2&lt;/option&gt;
				&lt;option value="Choice 3"&gt;Choice 3&lt;/option&gt;
				&lt;option value="Choice 4"&gt;Choice 4&lt;/option&gt;
			&lt;/select&gt;
		&lt;/div&gt;  
		&lt;div class="mb-4"&gt;
			&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Text Inputs With Remove&lt;/label&gt;
			&lt;input class="form-control" id="choices-text-remove-button" data-choices data-choices-limit="3" data-choices-removeItem type="text" value="Task-1"&gt;
		&lt;/div&gt; 
		&lt;div class="mb-4"&gt;
			&lt;label class="block text-sm font-medium mb-2 text-dark"&gt;Text Inputs Add &lt;/label&gt;
			&lt;input class="form-control" id="choices-text-unique-values" data-choices data-choices-text-unique-true type="text" value="Project-A, Project-B"&gt;
		&lt;/div&gt;  
	&lt;/div&gt;
	</code>
	</pre>
						</div>    
						
					</div> 
					<!-- End grid -->  
                </div>
            </main>  
</template>
<script>
import Vue3TagsInput from "vue3-tags-input";

export default {
	components: {
		Vue3TagsInput,
	},
    data() {
        return {
            showCodeState: {},
			selected: null,
			selectedOne: null,
			selectedTwo: ["Choice 1"],
			selectedThree: ["Choice 1", "Choice 2"],
			Default : [
				{ value: 'Madrid', label: 'Madrid' },
				{ value: 'Toronto', label: 'Toronto' },
				{ value: 'Vancouver', label: 'Vancouver' },
				{ value: 'London', label: 'London' },
				{ value: 'Manchester', label: 'Manchester' },
				{ value: 'Liverpool', label: 'Liverpool' },
				{ value: 'Paris', label: 'Paris' },
				{ value: 'Malaga', label: 'Malaga' },
				{ value: 'Washington', label: 'Washington' },
				{ value: 'Lyon', label: 'Lyon' },
				{ value: 'Marseille', label: 'Marseille' },
				{ value: 'Hamburg', label: 'Hamburg' },
				{ value: 'Munich', label: 'Munich' },
				{ value: 'Barcelona', label: 'Barcelona' },
				{ value: 'Berlin', label: 'Berlin' },
				{ value: 'Montreal', label: 'Montreal' },
				{ value: 'New York', label: 'New York' },
				{ value: 'Michigan', label: 'Michigan' },
			],
			OptionsAdded : [
				{ value: 'Zero', label: 'Zero' },
				{ value: 'One', label: 'One' },
				{ value: 'Two', label: 'Two' },
				{ value: 'Three', label: 'Three' },
				{ value: 'Four', label: 'Four' },
				{ value: 'Five', label: 'Five' },
				{ value: 'Six', label: 'Six' }
			],
			MultipleOptions: [
				{ value: 'Choice 1', label: 'Choice 1' },
				{ value: 'Choice 2', label: 'Choice 2' },
				{ value: 'Choice 3', label: 'Choice 3' },
				{ value: 'Choice 4', label: 'Choice 4' }
			],
			tagsOne: [ "Task 1" ],
			tagsTwo: [ "Project A", "Project B" ],
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
