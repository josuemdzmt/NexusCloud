<template>
			<main>

                <div class="p-3 lg:py-6 lg:px-0">
                    <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                        <h1 class="text-gray-900 text-xl font-bold mb-0">Chart Apex</h1>
                    </div>

					<!-- Start grid -->
					<div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 pb-0">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h2 class="text-gray-900 text-lg font-bold mb-0">Apex Simple</h2>
								<button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div id="s-line" class="chart-set preview-content" :class="{ hidden: showCode(0) }">
								<apexchart
									type="line"
									height="350"
									:options="sLine.chartOptions"
									:series="sLine.series"
									>
								</apexchart>
							</div>
	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm dark:bg-white dark:text-gray-500 overflow-hidden" :class="{ hidden: !showCode(0) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1 dark:bg-gray-100 dark:bg-gray-100"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div id="s-line" class="chart-set"&gt;&lt;/div&gt;
	</code>
	</pre>
						</div> <!-- end card --> 

						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 pb-0">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h3 class="text-gray-900 text-lg font-bold mb-0">Area Chart</h3>
								<button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div id="s-line-area" class="chart-set preview-content" :class="{ hidden: showCode(1) }">
								<apexchart
									type="area"
									height="350"
									:options="sLineArea.chartOptions"
									:series="sLineArea.series"
									>
								</apexchart>
							</div>
	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1 dark:bg-gray-100"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div id="s-line-area" class="chart-set"&gt;&lt;/div&gt;
	</code>
	</pre>
						</div> <!-- end card --> 

						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 pb-0">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h4 class="text-gray-900 text-lg font-bold mb-0">Column Chart</h4>
								<button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div id="s-col" class="chart-set preview-content" :class="{ hidden: showCode(2) }">
								<apexchart
									type="bar"
									height="290"
									:options="sCol.chartOptions"
									:series="sCol.series"
									>
								</apexchart>
							</div>
	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(2) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1 dark:bg-gray-100"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div id="s-col" class="chart-set"&gt;&lt;/div&gt;
	</code>
	</pre>
						</div> <!-- end card --> 

						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 pb-0">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h5>Column Stacked Chart</h5>
								<button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div id="s-col-stacked" class="chart-set preview-content" :class="{ hidden: showCode(3) }">
								<apexchart
									type="bar"
									height="290"
									:options="sColStacked.chartOptions"
									:series="sColStacked.series"
									>
								</apexchart>
							</div>
	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(3) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1 dark:bg-gray-100"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div id="s-col-stacked" class="chart-set"&gt;&lt;/div&gt;
	</code>
	</pre>

						</div> <!-- end card --> 

						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 pb-0">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h5>Bar Chart</h5>
								<button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div id="s-bar" class="chart-set preview-content" :class="{ hidden: showCode(4) }">
								<apexchart
									type="bar"
									height="350"
									:options="sBar.chartOptions"
									:series="sBar.series"
									>
								</apexchart>
							</div>
	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(4) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1 dark:bg-gray-100"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div id="s-bar" class="chart-set"&gt;&lt;/div&gt;
	</code>
	</pre>
						</div> <!-- end card --> 

						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 pb-0">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h5>Mixed Chart</h5>
								<button type="button" @click="toggleCode(5)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(5) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div id="mixed-chart" class="chart-set preview-content" :class="{ hidden: showCode(5) }">
								<apexchart
									type="line"
									height="350"
									:options="mixedChart.chartOptions"
									:series="mixedChart.series"
									>
								</apexchart>
							</div>
	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(5) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1 dark:bg-gray-100"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div id="mixed-chart" class="chart-set"&gt;&lt;/div&gt;
	</code>
	</pre>
						</div> <!-- end card --> 

						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h5>Donut Chart</h5>
								<button type="button" @click="toggleCode(6)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(6) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div id="donut-chart" class="chart-set preview-content" :class="{ hidden: showCode(6) }">
								<apexchart
									type="donut"
									height="330"
									:options="donutChart.chartOptions"
									:series="donutChart.series"
									>
								</apexchart>
							</div>
	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(6) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1 dark:bg-gray-100"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div id="donut-chart" class="chart-set"&gt;&lt;/div&gt;
	</code>
	</pre>
						</div> <!-- end card --> 

						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5 pb-0">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h5>Radial Chart</h5>
								<button type="button" @click="toggleCode(7)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(7) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div id="radial-chart" class="chart-set preview-content" :class="{ hidden: showCode(7) }">
								<apexchart
									type="radialBar"
									height="350"
									:options="radialChart.chartOptions"
									:series="radialChart.series"
									>
								</apexchart>
							</div>
	<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(7) }">
	<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1 dark:bg-gray-100"><i class="icon icon-copy"></i><span>Copy</span></button>
	<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
	&lt;div id="radial-chart" class="chart-set"&gt;&lt;/div&gt;
	</code>
	</pre>
						</div> <!-- end card -->  
						
					</div>
					<!-- End grid -->
				</div>
			</main>
</template>
<script>
import { sLine, sLineArea, sCol, sColStacked, sBar, mixedChart, donutChart, radialChart } from './data';

export default {
    data() {
        return {
            showCodeState: {},
			sLine: sLine,
			sLineArea: sLineArea,
			sCol: sCol,
			sColStacked: sColStacked,
			sBar: sBar,
			mixedChart: mixedChart,
			donutChart: donutChart,
			radialChart: radialChart,
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
