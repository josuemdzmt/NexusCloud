<template>
	<main>

		<div class="p-3 lg:py-6 lg:px-0">
			<div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
				<h1 class="text-gray-900 text-xl font-bold mb-0">Chart JS</h1>
			</div>

			<!-- Start grid -->
			<div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h2 class="text-gray-900 text-lg font-bold mb-0">Bar Chart</h2>
						<button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(0) }">
						<canvas id="chartBar1"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartBar1"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h3 class="text-gray-900 text-lg font-bold mb-0">Transparency</h3>
						<button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(1) }">
						<canvas id="chartBar2"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartBar2"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h4 class="text-gray-900 text-lg font-bold mb-0">Gradient Bar Chart</h4>
						<button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(2) }">
						<canvas id="chartBar3"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(2) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartBar3"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Horizontal Bar Chart</h5>
						<button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(3) }">
						<canvas id="chartBar4"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(3) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartBar4"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Horizontal Bar Chart Style2</h5>
						<button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(4) }">
						<canvas id="chartBar5"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(4) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartBar5"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->
				
				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Vertical Stacked Bar Chart</h5>
						<button type="button" @click="toggleCode(5)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(5) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(5) }">
						<canvas id="chartStacked1"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(5) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartStacked1"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Horizontal Stacked Bar Chart</h5>
						<button type="button" @click="toggleCode(6)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(6) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(6) }">
						<canvas id="chartStacked2"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(6) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartStacked2"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Line Chart</h5>
						<button type="button" @click="toggleCode(7)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(7) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(7) }">
						<canvas id="chartLine1"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(7) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartLine1"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Donut Chart</h5>
						<button type="button" @click="toggleCode(8)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(8) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(8) }">
						<canvas id="chartPie"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(8) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartPie"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Pie Chart</h5>
						<button type="button" @click="toggleCode(9)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(9) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(9) }">
						<canvas id="chartDonut"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(9) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartDonut"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Scatter Chart</h5>
						<button type="button" @click="toggleCode(10)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(10) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(10) }">
						<canvas id="chartRadar"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(10) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartRadar"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card --> 

				<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Area Line Chart</h5>
						<button type="button" @click="toggleCode(11)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(11) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content h-75" :class="{ hidden: showCode(11) }">
						<canvas id="chartLine"></canvas>
					</div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(11) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="h-75"&gt;
&lt;canvas id="chartLine"&gt;&lt;/canvas&gt;
&lt;/div&gt;
</code>
</pre>

				</div>  <!-- end card --> 

			</div> 
			<!-- End grid --> 
		</div>
	</main>
</template>
<script>
export default {
    data() {
        return {
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
