<template>
			<main>
                <div class="p-3 lg:py-6 lg:px-0">
                    <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                        <h1 class="text-gray-900 text-xl font-bold mb-0">Range Slider</h1>
                    </div>

                    <!-- Start grid -->
                    <div class="grid grid-cols-12 gap-6 items-baseline">
                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h2 class="text-gray-900 text-lg font-bold mb-0">Basic Range Slider</h2>
                                <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>
                            <div class="preview-content" :class="{ hidden: showCode(0) }">
                                <div class="rangeslider_basic"></div>
                            </div>  
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div class="rangeslider_basic"&gt;&lt;/div&gt;
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h3 class="text-gray-900 text-lg font-bold mb-0">Multi Elements Range</h3>
                                <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>
                            <div class="preview-content" :class="{ hidden: showCode(1) }">
                                <div id="rangeslider_multielement"></div>
                            </div> 
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div id="rangeslider_multielement"&gt;&lt;/div&gt;
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h4 class="text-gray-900 text-lg font-bold mb-0">Value Range Slider</h4>
                                <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content" :class="{ hidden: showCode(2) }">
                                <div id="nonlinear"></div>
                                <div class="flex justify-between mt-3">
                                    <div class="example-val" id="lower-value"></div>
                                    <div class="example-val" id="upper-value"></div>
                                </div>
                            </div> 
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(2) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div&gt;
        &lt;div id="nonlinear"&gt;&lt;/div&gt;
        &lt;div class="flex justify-between mt-3"&gt;
            &lt;div class="example-val" id="lower-value"&gt;&lt;/div&gt;
            &lt;div class="example-val" id="upper-value"&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt; 
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Color Scheme</h5>
                                <button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content" :class="{ hidden: showCode(3) }">
                                <div class="mb-4">
                                    <h6 class="mb-2 text-sm">Primary</h6>
                                    <div class="primary-range rangeslider_basic"></div> 
                                </div>

                                <div class="mb-4">
                                    <h6 class="mb-2 text-sm">Success</h6>
                                    <div class="success-range rangeslider_basic"></div> 
                                </div>

                                <div class="mb-4">
                                    <h6 class="mb-2 text-sm">Info</h6>
                                    <div class="info-range rangeslider_basic"></div> 
                                </div>

                                <div class="mb-4">
                                    <h6 class="mb-2 text-sm">Warning</h6>
                                    <div class="warning-range rangeslider_basic"></div> 
                                </div>

                                <div>
                                    <h6 class="mb-2 text-sm">Danger</h6>
                                    <div class="danger-range rangeslider_basic"></div> 
                                </div>

                            </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(3) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div&gt;
        &lt;div class="mb-4"&gt;
            &lt;h6 class="mb-2 text-sm"&gt;Primary&lt;/h6&gt;
            &lt;div class="primary-range" id="rangeslider_basic"&gt;&lt;/div&gt; 
        &lt;/div&gt;

        &lt;div class="mb-4"&gt;
            &lt;h6 class="mb-2 text-sm"&gt;Success&lt;/h6&gt;
            &lt;div class="success-range" id="rangeslider_basic"&gt;&lt;/div&gt; 
        &lt;/div&gt;

        &lt;div class="mb-4"&gt;
            &lt;h6 class="mb-2 text-sm"&gt;Info&lt;/h6&gt;
            &lt;div class="info-range" id="rangeslider_basic"&gt;&lt;/div&gt; 
        &lt;/div&gt;

        &lt;div class="mb-4"&gt;
            &lt;h6 class="mb-2 text-sm"&gt;Warning&lt;/h6&gt;
            &lt;div class="warning-range" id="rangeslider_basic"&gt;&lt;/div&gt; 
        &lt;/div&gt;

        &lt;div&gt;
            &lt;h6 class="mb-2 text-sm"&gt;Danger&lt;/h6&gt;
            &lt;div class="danger-range" id="rangeslider_basic"&gt;&lt;/div&gt; 
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Locking Sliders Together</h5>
                                <button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content" :class="{ hidden: showCode(4) }">
                                <div class="slider" id="slider1"></div>
                                <span class="example-val mt-1" id="slider1-span"></span> 
                                <div class="slider" id="slider2"></div>
                                <span class="example-val mt-1" id="slider2-span"></span> 
                                <button id="lockbutton" class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white mt-4">Lock</button>
                            </div> 
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(4) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div&gt;
        &lt;div class="slider" id="slider1"&gt;&lt;/div&gt;
        &lt;span class="example-val mt-1" id="slider1-span"&gt;&lt;/span&gt; 
        &lt;div class="slider" id="slider2"&gt;&lt;/div&gt;
        &lt;span class="example-val mt-1" id="slider2-span"&gt;&lt;/span&gt; 
        &lt;button id="lockbutton" class="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white mt-4"&gt;Lock&lt;/button&gt;
    &lt;/div&gt; 
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Tooltip</h5>
                                <button type="button" @click="toggleCode(5)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(5) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content" :class="{ hidden: showCode(5) }">
                                <div class="slider mt-13" id="slider-merging-tooltips"></div>
                            </div>  
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(5) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div class="slider mt-13" id="slider-merging-tooltips"&gt;&lt;/div&gt;  
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5 pb-10 mb-6">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Soft Limits</h5>
                                <button type="button" @click="toggleCode(6)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(6) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content" :class="{ hidden: showCode(6) }">
                                <div class="slider mb-2" id="soft"></div>
                            </div>   
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(6) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div class="slider mb-2" id="soft"&gt;&lt;/div&gt;   
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card lg:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Color Picker</h5>
                                <button type="button" @click="toggleCode(7)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(7) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content flex items-center justify-center gap-8" :class="{ hidden: showCode(7) }">
                                <div> 
                                    <div class="sliders" id="red"></div>
                                    <div class="sliders" id="green"></div>
                                    <div class="sliders" id="blue"></div>
                                </div> 
                                <div id="result"></div>
                            </div> 
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(7) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div class="flex items-center gap-8"&gt;
        &lt;div&gt; 
            &lt;div class="sliders" id="red"&gt;&lt;/div&gt;
            &lt;div class="sliders" id="green"&gt;&lt;/div&gt;
            &lt;div class="sliders" id="blue"&gt;&lt;/div&gt;
        &lt;/div&gt; 
        &lt;div id="result"&gt;&lt;/div&gt;
    &lt;/div&gt; 
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card lg:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Multi Range</h5>
                                <button type="button" @click="toggleCode(8)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(8) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>
                            <div class="preview-content" :class="{ hidden: showCode(8) }">
                                <div id="slider-vertical" class="mx-auto"></div>
                            </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(8) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div id="slider-vertical" class="mx-auto"&gt;&lt;/div&gt;
    </code>
    </pre>   
                        </div> <!-- end card -->

                        <div class="preview-card lg:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Vertical Range</h5>
                                <button type="button" @click="toggleCode(9)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(9) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content" :class="{ hidden: showCode(9) }"> 
                                <div id="slider-connect-upper" class="mx-auto"></div>
                            </div> 
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(9) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div id="slider-connect-upper" class="mx-auto"&gt;&lt;/div&gt;
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card lg:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Vertical Tooltip</h5>
                                <button type="button" @click="toggleCode(10)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(10) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content" :class="{ hidden: showCode(10) }"> 
                                <div id="slider-vertical-tooltip" class="mx-auto"></div>
                            </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(10) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div id="slider-vertical-tooltip" class="mx-auto"&gt;&lt;/div&gt;
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
