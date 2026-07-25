<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Collapse</h1>
            </div>
        
            <!-- Start grid -->
            <div class="grid grid-cols-12 gap-6 items-baseline"> 
                <div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h2 class="text-gray-900 text-lg font-bold mb-0">Collapse</h2>
                        <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content" :class="{ hidden: showCode(0) }"> 
                        <div class="flex flex-wrap items-center gap-2">
                            <a href="javascript:void(0)" class="btn bg-primary text-white rounded-lg" data-collapse-btn @click="isOpenLink = !isOpenLink">
                                Link with click
                            </a> 
                            <button type="button" class="btn bg-primary text-white rounded-lg" data-collapse-btn @click="isOpenLink = !isOpenLink">
                                Button with click
                            </button>
                        </div>
                        <div class="overflow-hidden transition-all duration-300 max-h-0" data-collapse-box :class="isOpenLink ? 'w-full' : 'w-0'" :style="{ maxHeight: isOpenLink ? '155px' : '0px' }">
                            <div class="p-4 mt-4 bg-light rounded-lg border border-border-color">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div&gt; 
&lt;div class="flex flex-wrap items-center gap-2"&gt;
    &lt;a href="javascript:void(0)" class="btn bg-primary text-white rounded-lg" data-collapse-btn&gt;
        Link with click
    &lt;/a&gt; 
    &lt;button type="button" class="btn bg-primary text-white rounded-lg" data-collapse-btn&gt;
        Button with click
    &lt;/button&gt;
&lt;/div&gt; 
&lt;div class="overflow-hidden transition-all duration-300 max-h-0" data-collapse-box&gt;
    &lt;div class="p-4 mt-4 bg-light rounded-lg border border-border-color"&gt;
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt; 
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h3 class="text-gray-900 text-lg font-bold mb-0">Collapse Horizontal</h3>
                        <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content overflow-auto" :class="{ hidden: showCode(1) }">
                        <button type="button" class="btn bg-primary text-white rounded-lg" data-collapse-btn @click="isOpen = !isOpen">
                            Toggle with collapse
                        </button> 
                        <div class="overflow-hidden transition-all duration-300 w-0" data-collapse-box :class="isOpen ? 'w-full' : 'w-0'" :style="{ maxHeight: isOpen ? '155px' : '0px' }">
                            <div class="p-4 mt-4 bg-light rounded-lg border border-border-color min-w-[350px] w-full!">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div&gt;
&lt;button type="button" class="btn bg-primary text-white rounded-lg" data-collapse-btn&gt;
    Toggle with collapse
&lt;/button&gt; 
&lt;div class="overflow-hidden transition-all duration-300 w-0" data-collapse-box&gt;
    &lt;div class="p-4 mt-4 bg-light rounded-lg border border-border-color w-[350px]"&gt;
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h4 class="text-gray-900 text-lg font-bold mb-0">Multiple Targets</h4>
                        <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content" :class="{ hidden: showCode(2) }"> 
                        <div class="flex flex-wrap items-center gap-2">
                            <button class="btn bg-primary text-white rounded-lg" @click="isOpenFirst = !isOpenFirst">
                                Toggle first element
                            </button>
                            <button class="btn bg-primary text-white rounded-lg" @click="isOpenSecond = !isOpenSecond">
                                Toggle second element
                            </button>
                            <button class="btn bg-primary text-white rounded-lg" @click="toggleBoth">
                                Toggle both elements
                            </button>
                        </div>

                        <div class="lg:flex gap-3 block mt-2">
                            <div id="collapseOne" class="overflow-hidden transition-all duration-300"
                                :style="{ maxHeight: isOpenFirst ? '155px' : '0px' }">
                                <div class="p-4 mt-4 mb-1 bg-light rounded-lg border border-border-color">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>

                            <div id="collapseTwo" class="overflow-hidden transition-all duration-300"
                                :style="{ maxHeight: isOpenSecond ? '155px' : '0px' }">
                                <div class="p-4 mt-4 mb-1 bg-light rounded-lg border border-border-color">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </div>
                    </div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(2) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div&gt; 
&lt;div class="flex flex-wrap items-center gap-2"&gt;
    &lt;button class="btn bg-primary text-white rounded-lg" data-collapse-target="#collapseOne"&gt;
        Toggle first element
    &lt;/button&gt; 
    &lt;button class="btn bg-primary text-white rounded-lg" data-collapse-target="#collapseTwo"&gt;
        Toggle second element
    &lt;/button&gt; 
    &lt;button class="btn bg-primary text-white rounded-lg" data-collapse-target="#collapseOne,#collapseTwo"&gt;
        Toggle both elements
    &lt;/button&gt;
&lt;/div&gt; 
&lt;div class="lg:flex gap-3 block"&gt; 
    &lt;div id="collapseOne" class="overflow-hidden transition-all duration-300 max-h-0"&gt;
        &lt;div class="p-4 mt-4 mb-1 bg-light rounded-lg border border-border-color"&gt;
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        &lt;/div&gt;
    &lt;/div&gt; 
    &lt;div id="collapseTwo" class="overflow-hidden transition-all duration-300 max-h-0"&gt;
        &lt;div class="p-4 mt-4 mb-1 bg-light rounded-lg border border-border-color"&gt;
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
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
            isOpen: false,
            isOpenLink: false,
            isOpenFirst: false,
            isOpenSecond: false,
            isOpenBoth: false,
        };
    },
    methods: {
        showCode(index) {
            return !!this.showCodeState[index];
        },
        toggleCode(index) {
            this.showCodeState[index] = !this.showCodeState[index];
        },
        toggleBoth() {
            const next = !(this.isOpenFirst && this.isOpenSecond);
            this.isOpenFirst = next;
            this.isOpenSecond = next;
        },
    },
};
</script>
