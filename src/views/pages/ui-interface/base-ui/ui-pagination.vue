<template>
	<main>
		<div class="p-3 lg:py-6 lg:px-0">
			<div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
				<h1 class="text-gray-900 text-xl font-bold mb-0">Pagination</h1>
			</div>
		
			<!-- Start grid -->
			<div class="grid grid-cols-12 gap-6 items-baseline">
				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h2 class="text-gray-900 text-lg font-bold mb-0">Default</h2>
						<button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 focus:bg-primary focus:border-primary focus:text-white text-gray-900">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex" :class="{ hidden: showCode(0) }">
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							Pre
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-white text-dark hover:bg-primary hover:text-white">
							01
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-white text-dark hover:bg-primary hover:text-white">
							02
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-white text-dark hover:bg-primary hover:text-white">
							03
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-white text-dark hover:bg-primary hover:text-white">
							Next
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	Pre
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
	Next
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h3 class="text-gray-900 text-lg font-bold mb-0">Default With Icons</h3>
						<button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 focus:bg-primary focus:border-primary focus:text-white text-gray-900">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex" :class="{ hidden: showCode(1) }">
						<a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							<i class="icon icon-chevron-left"></i>
						</a> 
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							01
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							02
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							03
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							<i class="icon icon-chevron-right"></i>
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	&lt;i class="icon icon-chevron-left"&gt;&lt;/i&gt;
&lt;/a&gt; 
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light border-l-0 text-dark hover:bg-primary hover:text-white"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light border-l-0 text-dark hover:bg-primary hover:text-white"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light border-l-0 text-dark hover:bg-primary hover:text-white"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	&lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h4 class="text-gray-900 text-lg font-bold mb-0">Default with Active</h4>
						<button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex" :class="{ hidden: showCode(2) }">
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							Pre
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-primary text-white hover:bg-primary hover:text-white">
							01
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							02
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							03
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							Next
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(2) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	Pre
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-primary text-white hover:bg-primary hover:text-white"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
	Next
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Default with Active Ghost</h5>
						<button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex" :class="{ hidden: showCode(3) }">
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none borde  border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							Pre
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary">
							01
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							02
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							03
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							Next
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(3) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	Pre
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	Next
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-4 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Left Align</h5>
						<button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex" :class="{ hidden: showCode(4) }">
						<a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							<i class="icon icon-chevron-left"></i>
						</a> 
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							01
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							02
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							03
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg border-l-0 rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							<i class="icon icon-chevron-right"></i>
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(4) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	&lt;i class="icon icon-chevron-left"&gt;&lt;/i&gt;
&lt;/a&gt; 
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	&lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-4 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Centre Align</h5>
						<button type="button" @click="toggleCode(5)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(5) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div>
					<div class="preview-content flex justify-center items-center" :class="{ hidden: showCode(5) }">
						<div class="inline-flex">
							<a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								<i class="icon icon-chevron-left"></i>
							</a> 
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								01
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								02
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								03
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg border-l-0 rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								<i class="icon icon-chevron-right"></i>
							</a>
						</div>
					</div>   
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(5) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="flex justify-center items-center"&gt;
&lt;div class="inline-flex"&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
		&lt;i class="icon icon-chevron-left"&gt;&lt;/i&gt;
	&lt;/a&gt; 
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
		01
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
		02
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-l-0 bg-light text-dark hover:bg-primary hover:text-white"&gt;
		03
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border-l-0 border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
		&lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt;
	&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-4 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Right Align</h5>
						<button type="button" @click="toggleCode(6)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 focus:bg-primary focus:border-primary focus:text-white text-gray-900">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(6) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content flex justify-end items-end" :class="{ hidden: showCode(6) }">
						<div class="inline-flex">
							<a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								<i class="icon icon-chevron-left"></i>
							</a> 
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border-l-0 border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								01
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border-l-0 border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								02
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border-l-0 border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								03
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg border-l-0 rounded-none border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
								<i class="icon icon-chevron-right"></i>
							</a>
						</div>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(6) }">
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="flex justify-end items-end"&gt;
&lt;div class="inline-flex"&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
		02
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-l-0 border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
		03
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg border-l-0 rounded-none border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
		&lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt;
	&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Custom Pagination</h5>
						<button type="button" @click="toggleCode(7)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 focus:bg-primary focus:border-primary focus:text-white text-gray-900">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(7) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex flex-wrap gap-1" :class="{ hidden: showCode(7) }">
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							<i class="icon icon-chevron-left me-1"></i> Pre
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-primary text-white hover:bg-primary hover:text-white">
							01
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							02
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							03
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							...
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							10
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							Next <i class="icon icon-chevron-right ms-1"></i>
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(7) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex gap-1"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	&lt;i class="icon icon-chevron-left me-1"&gt;&lt;/i&gt; Pre
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-primary text-white hover:bg-primary hover:text-white"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	...
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	10
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	Next &lt;i class="icon icon-chevron-right ms-1"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Soft Pagination</h5>
						<button type="button" @click="toggleCode(8)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 focus:bg-primary focus:border-primary focus:text-white text-gray-900">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(8) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex gap-1" :class="{ hidden: showCode(8) }">
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							<i class="icon icon-chevron-left"></i>
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary">
							01
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							02
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							03
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							...
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							10
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							<i class="icon icon-chevron-right"></i>
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(8) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex gap-1"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	&lt;i class="icon icon-chevron-left"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	...
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	10
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	&lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Pagination 1</h5>
						<button type="button" @click="toggleCode(9)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(9) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex flex-wrap gap-1" :class="{ hidden: showCode(9) }">
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							<i class="icon icon-chevron-left me-1"></i> Pre
						</a>
						<a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-primary text-white hover:bg-primary hover:text-white">
							01
						</a>
						<a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							02
						</a>
						<a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							03
						</a>
						<a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							...
						</a>
						<a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							10
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color bg-white text-dark hover:bg-primary hover:text-white">
							Next <i class="icon icon-chevron-right ms-1"></i>
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(9) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex gap-1"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	&lt;i class="icon icon-chevron-left me-1"&gt;&lt;/i&gt; Pre
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-primary text-white hover:bg-primary hover:text-white"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	...
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	10
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color bg-light text-dark hover:bg-primary hover:text-white"&gt;
	Next &lt;i class="icon icon-chevron-right ms-1"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Pagination 2</h5>
						<button type="button" @click="toggleCode(10)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(10) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex gap-1" :class="{ hidden: showCode(10) }">
						<a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							<i class="icon icon-chevron-left"></i>
						</a>
						<a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary">
							01
						</a>
						<a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							02
						</a>
						<a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							03
						</a>
						<a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							...
						</a>
						<a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							10
						</a>
						<a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
								<i class="icon icon-chevron-right"></i>
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(10) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex gap-1"&gt;
&lt;a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	&lt;i class="icon icon-chevron-left"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	...
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	10
&lt;/a&gt;
&lt;a href="#" class="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	&lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Pagination 3</h5>
						<button type="button" @click="toggleCode(11)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(11) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex" :class="{ hidden: showCode(11) }">
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-b-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							Pre
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-b-primary hover:border-b-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary">
							01
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-b-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							02
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-b-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							03
						</a>
						<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-b-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
							Next
						</a>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(11) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-b-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	Pre
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color border-b-primary hover:border-b-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary"&gt;
	01
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-b-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	02
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-b-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	03
&lt;/a&gt;
&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color hover:border-b-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
	Next
&lt;/a&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

				<div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
					<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
						<h5>Pagination 4</h5>
						<button type="button" @click="toggleCode(12)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
							<i class="icon icon-eye"></i>
							<span class="code-btn">{{ showCode(12) ? "Show Preview" : "Show Code" }}</span>
						</button>
					</div> 
					<div class="preview-content inline-flex flex-wrap gap-1" :class="{ hidden: showCode(12) }">
						<div>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
								<i class="icon icon-chevrons-left"></i>
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
								<i class="icon icon-chevron-left"></i>
							</a>
						</div>
						<div class="flex">
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-border-color bg-white text-dark  hover:text-primary">
								01
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-s-0 border-border-color bg-white text-primary hover:text-primary">
								02
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-s-0 border-border-color bg-white text-dark hover:text-primary">
								03
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-s-0 border-border-color bg-white text-dark  hover:text-primary">
								04
							</a>
						</div>   
						<div>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
								<i class="icon icon-chevron-right"></i>
							</a>
							<a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color hover:border-primary bg-white text-dark hover:bg-primary-50 hover:text-primary">
								<i class="icon icon-chevrons-right"></i>
							</a> 
						</div>
					</div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(12) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex gap-1"&gt;
&lt;div&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
		&lt;i class="icon icon-chevrons-left"&gt;&lt;/i&gt;
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
		&lt;i class="icon icon-chevron-left"&gt;&lt;/i&gt;
	&lt;/a&gt;
&lt;/div&gt;
&lt;div class="flex"&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-border-color bg-light text-dark hover:text-primary"&gt;
		01
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-s-0 border-border-color bg-light text-primary hover:text-primary"&gt;
		02
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-s-0 border-border-color bg-light text-dark hover:text-primary"&gt;
		03
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-s-0 border-border-color bg-light text-dark hover:text-primary"&gt;
		04
	&lt;/a&gt;
&lt;/div&gt;   
&lt;div&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
		&lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt;
	&lt;/a&gt;
	&lt;a href="#" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"&gt;
		&lt;i class="icon icon-chevrons-right"&gt;&lt;/i&gt;
	&lt;/a&gt; 
&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
				</div> <!-- end card -->

			</div> <!-- end grid -->   
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
