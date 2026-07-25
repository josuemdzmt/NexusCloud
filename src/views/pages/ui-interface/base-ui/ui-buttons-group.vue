<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Buttons Group</h1>
            </div>
        
            <!-- Start grid -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 items-baseline">
                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h2 class="text-gray-900 text-lg font-bold mb-0">Basic</h2>
                        <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content inline-flex" :class="{ hidden: showCode(0) }">
                        <button type="button" class="btn inline-flex text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white dark:hover:text-white!">
                            Button
                        </button>
                        <button type="button" class="btn inline-flex text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white dark:hover:text-white!">
                            Button
                        </button>
                        <button type="button" class="btn inline-flex text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white dark:hover:text-white!">
                            Button
                        </button>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
    &lt;button type="button" class="btn inline-flex text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white"&gt;
        Button
    &lt;/button&gt;
    &lt;button type="button" class="btn inline-flex text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white"&gt;
        Button
    &lt;/button&gt;
    &lt;button type="button" class="btn inline-flex text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white"&gt;
        Button
    &lt;/button&gt;
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card --> 

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h3 class="text-gray-900 text-lg font-bold mb-0">Icons Only</h3>
                        <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content inline-flex" :class="{ hidden: showCode(1) }">
                        <button type="button" class="btn inline-flex items-center justify-center text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white dark:hover:text-white!">
                            <i class="icon icon-chevron-left"></i>
                        </button> 
                        <button type="button" class="btn inline-flex items-center justify-center text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white dark:hover:text-white!">
                            <i class="icon icon-chevron-right"></i>
                        </button>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
    &lt;button type="button" class="btn inline-flex items-center justify-center text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white"&gt;
        &lt;i class="icon icon-chevron-left"&gt;&lt;/i&gt;
    &lt;/button&gt; 
    &lt;button type="button" class="btn inline-flex items-center justify-center text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark hover:bg-dark hover:text-white"&gt;
        &lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt;
    &lt;/button&gt;
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->  

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h4 class="text-gray-900 text-lg font-bold mb-0">With Count</h4>
                        <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content inline-flex" :class="{ hidden: showCode(2) }">
                        <button type="button" class="btn inline-flex items-center justify-center text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-gray-900">
                            <i class="icon icon-file me-1"></i> Invoices
                        </button>
                        <button type="button" class="btn text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-gray-900">
                            10
                        </button>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(2) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt;
    &lt;button type="button" class="btn inline-flex items-center justify-center text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-gray-900"&gt;
        &lt;i class="icon icon-file me-1"&gt;&lt;/i&gt; Invoices
    &lt;/button&gt;
    &lt;/button&gt;
    &lt;button type="button" class="btn text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-gray-900"&gt;
        10
    &lt;/button&gt;
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->  

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>With Dropdown</h5>
                        <button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content inline-flex" :class="{ hidden: showCode(3) }"> 
                        <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                            <div class="inline-flex">
                                <button type="button" class="btn inline-flex items-center justify-center text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark">
                                    Save Changes
                                </button> 
                                <button type="button" class="hs-dropdown-toggle cursor-pointer py-1.75 px-2 inline-flex items-center gap-x-2 text-sm font-normal first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-gray-800 focus:outline-hidden focus:white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <i class="icon-chevron-down"></i>
                                </button>
                            </div>  
                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-lg mt-2 z-1" role="menu" aria-orientation="vertical">
                                <div class="p-2 space-y-1">
                                    <a class="flex items-center px-4 py-1.75 rounded-lg text-gray-900 hover:text-primary hover:bg-light focus:outline-hidden focus:bg-white" href="#">
                                        Action
                                    </a>
                                    <a class="flex items-center px-4 py-1.75 rounded-lg text-sm text-gray-900 hover:text-primary hover:bg-light focus:outline-hidden focus:bg-white" href="#">
                                        Another Action
                                    </a>
                                    <a class="flex items-center px-4 py-1.75 rounded-lg text-sm text-gray-900 hover:text-primary hover:bg-light focus:outline-hidden focus:bg-white" href="#">
                                        Other Action
                                    </a>
                                    <a class="flex items-center px-4 py-1.75 rounded-lg text-sm text-gray-900 hover:text-primary hover:bg-light focus:outline-hidden focus:bg-white" href="#">
                                        Seperate Action
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(3) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16"> 
&lt;div class="inline-flex"&gt; 
    &lt;div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex"&gt;
        &lt;div class="inline-flex"&gt;
            &lt;button type="button" class="btn inline-flex items-center justify-center text-sm font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-dark"&gt;
                Save Changes
            &lt;/button&gt; 
            &lt;button type="button" class="hs-dropdown-toggle cursor-pointer py-1.75 px-2 inline-flex items-center gap-x-2 text-sm font-normal first:rounded-s-lg last:rounded-e-lg rounded-none border border-border-color bg-light text-gray-800 focus:outline-hidden focus:white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"&gt;
                &lt;i class="icon-chevron-down"&gt;&lt;/i&gt;
            &lt;/button&gt;
        &lt;/div&gt;  
        &lt;div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-lg mt-2 z-1" role="menu" aria-orientation="vertical"&gt;
            &lt;div class="p-2 space-y-1"&gt;
                &lt;a class="flex items-center px-4 py-1.75 rounded-lg text-gray-900 hover:text-primary hover:bg-light focus:outline-hidden focus:bg-white" href="#"&gt;
                    Action
                &lt;/a&gt;
                &lt;a class="flex items-center px-4 py-1.75 rounded-lg text-sm text-gray-900 hover:text-primary hover:bg-light focus:outline-hidden focus:bg-white" href="#"&gt;
                    Another Action
                &lt;/a&gt;
                &lt;a class="flex items-center px-4 py-1.75 rounded-lg text-sm text-gray-900 hover:text-primary hover:bg-light focus:outline-hidden focus:bg-white" href="#"&gt;
                    Other Action
                &lt;/a&gt;
                &lt;a class="flex items-center px-4 py-1.75 rounded-lg text-sm text-gray-900 hover:text-primary hover:bg-light focus:outline-hidden focus:bg-white" href="#"&gt;
                    Seperate Action
                &lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

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
