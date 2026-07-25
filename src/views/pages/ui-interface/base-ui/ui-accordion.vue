<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Accordion</h1>
            </div>
        
            <!-- Start grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h2 class="text-gray-900 text-lg font-bold mb-0">Default Accordion</h2>
                        <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(0) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-1">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-1" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-2">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-2" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-3">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-3" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt;
&lt;div class="hs-accordion active"&gt;

    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-1"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-1" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-2"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-2" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-3"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-3" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h3 class="text-gray-900 text-lg font-bold mb-0">Flush Accordions</h3>
                        <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white overflow-hidden" :class="{ hidden: showCode(1) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-b border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-4">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-4" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-b border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-5">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-5" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-b border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-6">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-6" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1">
<i class="icon icon-copy"></i>
<span>Copy</span>
</button>

<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt;
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-b border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-4"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;
            &lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;
        &lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;
            &lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;div id="acc-4" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-b border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-5"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;
            &lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;
        &lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;
            &lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;div id="acc-5" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-b border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-6"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;
            &lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;
        &lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;
            &lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;
        &lt;/span&gt;
    &lt;/button&gt;

    &lt;div id="acc-6" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h4 class="text-gray-900 text-lg font-bold mb-0">Bordered Accordions</h4>
                        <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white overflow-hidden" :class="{ hidden: showCode(2) }">
                        <div class="hs-accordion active  border border-border-color rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-7">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-7" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion  border border-border-color rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-8">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-8" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion  border border-border-color rounded-lg">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-9">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-9" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(2) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt;
&lt;div class="hs-accordion active border border-border-color rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-7"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-7" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 

&lt;div class="hs-accordion border border-border-color rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-8"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-8" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 

&lt;div class="hs-accordion border border-border-color rounded-lg"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-9"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-9" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Custom Icon Accordion</h5>
                        <button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white overflow-hidden" :class="{ hidden: showCode(3) }">
                        <div class="hs-accordion active  border border-border-color rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-10">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-plus"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-minus"></i></span>
                            </button>
                            <div id="acc-10" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion  border border-border-color rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-11">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-circle-plus"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-circle-minus"></i></span>
                            </button>
                            <div id="acc-11" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion  border border-border-color rounded-lg">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-12">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-square-plus"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-square-minus"></i></span>
                            </button>
                            <div id="acc-12" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(3) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt;
&lt;div class="hs-accordion active border border-border-color rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-10"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-plus"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-minus"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt;   
    &lt;div id="acc-10" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-border-color rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-11"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-circle-plus"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-circle-minus"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-11" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-border-color rounded-lg"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-12"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-square-plus"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-square-minus"&gt;&lt;/i&gt;&lt;/span&gt;  
    &lt;/button&gt; 
    &lt;div id="acc-12" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Always Open Accordions</h5>
                        <button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(4) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-13">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-13" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-14">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-14" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-15">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-15" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(4) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="border border-border-color rounded-lg overflow-hidden"&gt;
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-13" &gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;
        &lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;
        &lt;/span&gt;
    &lt;/button&gt;
    &lt;div id="acc-13" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-14"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-14" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-15"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-15" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Accordion Without Arrow</h5>
                        <button type="button" @click="toggleCode(5)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(5) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(5) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-16">
                                Accordion #1 
                            </button>
                            <div id="acc-16" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-17">
                                Accordion #2 
                            </button>
                            <div id="acc-17" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-18">
                                Accordion #3 
                            </button>
                            <div id="acc-18" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(5) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt; 
&lt;div class="hs-accordion active"&gt;
&lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-16"&gt;
    Accordion #1
&lt;/button&gt; 
    &lt;div id="acc-16" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
&lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-17"&gt;
    Accordion #2
&lt;/button&gt; 
    &lt;div id="acc-17" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
&lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-light hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-18"&gt;
    Accordion #3
&lt;/button&gt; 
    &lt;div id="acc-18" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Primary - Light Color</h5>
                        <button type="button" @click="toggleCode(6)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(6) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(6) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary-100 hs-accordion-active:text-primary hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-55">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-55" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary-100 hs-accordion-active:text-primary hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-56">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-56" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary-100 hs-accordion-active:text-primary hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-57">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-57" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(6) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt;
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary-100 hs-accordion-active:text-primary hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-55"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div id="acc-55" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary-100 hs-accordion-active:text-primary hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-56"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-56" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary-100 hs-accordion-active:text-primary hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-57"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-57" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Dark - Light Color</h5>
                        <button type="button" @click="toggleCode(7)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(7) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(7) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-gray-100 hs-accordion-active:text-dark hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-58">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-58" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-gray-100 hs-accordion-active:text-dark hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-59">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-59" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-gray-100 hs-accordion-active:text-dark hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-60">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-60" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(7) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt; 
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-gray-100 hs-accordion-active:text-dark hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-58"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-58" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-gray-100 hs-accordion-active:text-dark hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-59"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-59" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-gray-100 hs-accordion-active:text-dark hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-60"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-60" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Primary - Solid Color</h5>
                        <button type="button" @click="toggleCode(8)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(8) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(8) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-19">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-19" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-20">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-20" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-21">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-21" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(8) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt; 
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-19"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt;  
    &lt;div id="acc-19" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-20"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-20" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-primary hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-21"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-21" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Success - Solid Color</h5>
                        <button type="button" @click="toggleCode(9)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(9) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(9) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-success hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-22">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-22" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-success hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-23">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-23" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-success hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-24">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-24" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(9) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt; 
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-success hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-22"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;
        &lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-22" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-success hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-23"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-23" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-success hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-24"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-24" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Warning - Solid Color</h5>
                        <button type="button" @click="toggleCode(10)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(10) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(10) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-warning hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-25">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-25" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-warning hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-26">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-26" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-warning hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-27">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-27" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(10) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt;
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-warning hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-25"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-25" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-warning hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-26"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-26" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-warning hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-27"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-27" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Error - Solid Color</h5>
                        <button type="button" @click="toggleCode(11)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(11) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(11) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-danger hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-28">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-28" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-danger hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-29">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-29" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-danger hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-30">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-30" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(11) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt;
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-danger hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-28"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-28" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-danger hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-29"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-29" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-danger hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-30"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div id="acc-30" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Dark - Solid Color</h5>
                        <button type="button" @click="toggleCode(12)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(12) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(12) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-dark hs-accordion-active:text-white  hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-31">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-31" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-dark hs-accordion-active:text-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-32">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-32" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-dark hs-accordion-active:text-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-33">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-33" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(12) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt;
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-dark hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-31"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-31" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-dark hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none"aria-expanded="false"aria-controls="acc-32"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div id="acc-32" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-dark hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-33"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-33" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Info - Solid Color</h5>
                        <button type="button" @click="toggleCode(13)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(13) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(13) }">
                        <div class="hs-accordion active">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-info hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-y-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-34">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-34" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-info hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-35">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-35" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-info hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border-t border-b-0 border-x-0 border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-36">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-36" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(13) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group border border-border-color rounded-lg overflow-hidden"&gt; 
&lt;div class="hs-accordion active"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-info hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-34"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-34" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-info hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-35"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-35" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-info hs-accordion-active:text-white hs-accordion-active:dark:text-dark-white  hs-accordion-active:border-0 border border-border-color inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-36"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-36" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Primary - Colored Border</h5>
                        <button type="button" @click="toggleCode(14)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(14) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group overflow-hidden" :class="{ hidden: showCode(14) }">
                        <div class="hs-accordion active bg-white border border-primary rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-primary hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-37">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-37" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-primary rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-primary hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-38">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-38" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-primary rounded-lg">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-primary hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-39">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-39" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(14) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt; 
&lt;div class="hs-accordion active border border-primary rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-primary hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-37" &gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;div id="acc-37" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-primary rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-primary hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-38"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-38" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-primary rounded-lg"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-primary hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-39"&gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-39" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Success - Colored Border</h5>
                        <button type="button" @click="toggleCode(15)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(15) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group overflow-hidden" :class="{ hidden: showCode(15) }">
                        <div class="hs-accordion active bg-white border border-success rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-success hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-success inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-40">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-40" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-success rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-success hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-success inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-41">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-41" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-success rounded-lg">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-success hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-success inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-42">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-42" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(15) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt; 
&lt;div class="hs-accordion active border border-success rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-success hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-success inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-40"&gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-40" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-success rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-success hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-success inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-41"&gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-41" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-success rounded-lg"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-success hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-success inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-42" &gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-42" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
        &lt;p class="text-foreground"&gt;
        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Warning - Colored Border</h5>
                        <button type="button" @click="toggleCode(16)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(16) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group overflow-hidden" :class="{ hidden: showCode(16) }">
                        <div class="hs-accordion active bg-white border border-warning rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-warning hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-warning inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-43">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-43" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-warning rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-warning hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-warning inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-44">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-44" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-warning rounded-lg">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-warning hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-warning inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-45">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-45" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(16) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt; 
&lt;div class="hs-accordion active border border-warning rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-warning hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-warning inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-43" &gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-43" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-warning rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-warning hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-warning inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-44" &gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-44" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-warning rounded-lg"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-warning hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-warning inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-45" &gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-45" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Error - Colored Border</h5>
                        <button type="button" @click="toggleCode(17)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(17) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group overflow-hidden" :class="{ hidden: showCode(17) }">
                       <div class="hs-accordion active bg-white border border-danger rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-danger hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-danger inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-46">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-46" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-danger rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-danger hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-danger inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-47">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-47" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-danger rounded-lg">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-danger hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-danger inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-48">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-48" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(17) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt; 
&lt;div class="hs-accordion active border border-danger rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-danger hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-danger inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-46" &gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-46" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-danger rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-danger hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-danger inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-47" &gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-47" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-danger rounded-lg"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-danger hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-danger inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-48" &gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-48" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Dark - Colored Border</h5>
                        <button type="button" @click="toggleCode(18)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(18) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group overflow-hidden" :class="{ hidden: showCode(18) }">
                        <div class="hs-accordion active bg-white border border-dark rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-dark hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-dark inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-49">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-49" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-dark rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-dark hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-dark inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-50">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-50" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-dark rounded-lg">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-dark hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-dark inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-51">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-51" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(18) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt; 
&lt;div class="hs-accordion active border border-dark rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-dark hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-dark inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-49" &gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-49" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-dark rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-dark hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-dark inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-50" &gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-50" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-dark rounded-lg"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-dark hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-dark inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-51" &gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-51" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Info - Colored Border</h5>
                        <button type="button" @click="toggleCode(19)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(19) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content hs-accordion-group overflow-hidden" :class="{ hidden: showCode(19) }">
                        <div class="hs-accordion active bg-white border border-info rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-info hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-info inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-52">
                                Accordion #1
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-52" class="hs-accordion-content w-full overflow-hidden duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-info rounded-lg mb-2">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-info hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-info inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-53">
                                Accordion #2
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-53" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>

                        <div class=" hs-accordion bg-white border border-info rounded-lg">
                            <button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-info hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-info inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-54">
                                Accordion #3
                                <span class="hs-accordion-active:hidden block size-4 ms-auto"><i class="icon icon-chevron-down"></i></span>
                                <span class="hs-accordion-active:block hidden size-4 ms-auto"><i class="icon icon-chevron-up"></i></span>
                            </button>
                            <div id="acc-54" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region">
                                <div class="px-5 py-4"> 
                                    <p class="text-foreground">
                                        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(19) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[350px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="hs-accordion-group overflow-hidden"&gt; 
&lt;div class="hs-accordion active border border-info rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-info hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-info inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="true" aria-controls="acc-52" &gt;
        Accordion #1
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-52" class="hs-accordion-content w-full overflow-hidden duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-info rounded-lg mb-2"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-info hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-info inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-53" &gt;
        Accordion #2
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-53" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="hs-accordion border border-info rounded-lg"&gt;
    &lt;button class="hs-accordion-toggle py-4 px-5 hs-accordion-active:bg-white hs-accordion-active:text-info hs-accordion-active:rounded-t-lg hs-accordion-active:border-b border-0 border-info inline-flex items-center gap-x-3 w-full font-semibold text-start text-foreground disabled:pointer-events-none" aria-expanded="false" aria-controls="acc-54" &gt;
        Accordion #3
        &lt;span class="hs-accordion-active:hidden block size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-down"&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class="hs-accordion-active:block hidden size-4 ms-auto"&gt;&lt;i class="icon icon-chevron-up"&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/button&gt; 
    &lt;div id="acc-54" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region"&gt;
        &lt;div class="px-5 py-4"&gt;
            &lt;p class="text-foreground"&gt;
                It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            &lt;/p&gt;
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
