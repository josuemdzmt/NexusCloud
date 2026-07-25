<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Clipboard</h1>
            </div>

            <!-- Start grid -->
            <div class="grid grid-cols-1 gap-6" ref="clipboardRoot">
                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h2 class="text-gray-900 text-lg font-bold mb-0">Copy from input</h2>
                        <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>  
                    <div class="preview-content clipboard" :class="{ hidden: showCode(0) }">
                        <form class="form-horizontal">
                            <input type="text" id="input-copy" class="mb-4 w-full form-input block bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none form-input  block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" value="http://www.admin-dashboard.com"> 
                            <div class="flex flex-wrap align-items-center gap-2">
                                <a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#input-copy"><i class="icon icon-clipboard me-1"></i> Copy from Input</a>
                                <a class="btn inline-flex items-center bg-dark border border-dark text-white text-center hover:bg-black hover:border-black hover:text-white dark:bg-gray-100 dark:border-gray-100" href="javascript:void(0);" data-clipboard-action="cut" data-clipboard-target="#input-copy"><i class="icon icon-scissors me-1"></i> Cut from Input</a>
                            </div>
                        </form>
                    </div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="clipboard"&gt;
&lt;form class="form-horizontal"&gt;
    &lt;input type="text" id="input-copy" class="mb-4 w-full form-input block bg-light border-border-color rounded-lg focus:border-primary disabled:opacity-50 disabled:pointer-events-none" value="http://www.admin-dashboard.com"&gt; 
    &lt;div class="flex flex-wrap align-items-center gap-2"&gt;
        &lt;a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#input-copy"&gt;&lt;i class="icon icon-clipboard me-1"&gt;&lt;/i&gt; Copy from Input&lt;/a&gt;
        &lt;a class="btn inline-flex items-center bg-dark border border-dark text-white text-center hover:bg-black hover:border-black hover:text-white dark:bg-gray-100 dark:border-gray-100" href="javascript:void(0);" data-clipboard-action="cut" data-clipboard-target="#input-copy"&gt;&lt;i class="icon icon-scissors me-1"&gt;&lt;/i&gt; Cut from Input&lt;/a&gt;
    &lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;  
</code>
</pre>
                </div> <!-- end card -->
            
                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h3 class="text-gray-900 text-lg font-bold mb-0">Copy from input</h3>
                        <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:ring-0 focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark focus:outline-none focus:border-border-color">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>  
                    <div class="preview-content clipboard" :class="{ hidden: showCode(1) }">
                        <form class="form-horizontal">
                            <input type="text" id="input-copy2" class="mb-4 w-full form-input block bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none form-input  block w-full bg-light border-border-color rounded-lg focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color" value="http://www.admin-dashboard.com"> 
                            <div class="flex flex-wrap align-items-center gap-2">
                                <a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#input-copy2"><i class="icon icon-clipboard me-1"></i> Copy from Input</a>
                                <a class="btn inline-flex items-center bg-dark border border-dark text-white text-center hover:bg-black hover:border-black hover:text-white dark:bg-gray-100 dark:border-gray-100" href="javascript:void(0);" data-clipboard-action="cut" data-clipboard-target="#input-copy2"><i class="icon icon-scissors me-1"></i> Cut from Input</a>
                            </div>
                        </form>
                    </div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="clipboard"&gt;
&lt;form class="form-horizontal"&gt;
    &lt;input type="text" id="input-copy" class="mb-4 w-full form-input block bg-light border-border-color rounded-lg focus:border-primary disabled:opacity-50 disabled:pointer-events-none" value="http://www.admin-dashboard.com"&gt; 
    &lt;div class="flex flex-wrap align-items-center gap-2"&gt;
        &lt;a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#input-copy"&gt;&lt;i class="icon icon-clipboard me-1"&gt;&lt;/i&gt; Copy from Input&lt;/a&gt;
        &lt;a class="btn inline-flex items-center bg-dark border border-dark text-white text-center hover:bg-black hover:border-black hover:text-white" href="javascript:void(0);" data-clipboard-action="cut" data-clipboard-target="#input-copy"&gt;&lt;i class="icon icon-scissors me-1"&gt;&lt;/i&gt; Cut from Input&lt;/a&gt;
    &lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;  
</code>
</pre>

                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h4 class="text-gray-900 text-lg font-bold mb-0">Copy from Text Area</h4>
                        <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:ring-0 focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark focus:outline-none focus:border-border-color">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>  
                    <div class="preview-content clipboard" :class="{ hidden: showCode(2) }">
                        <form class="form-horizontal">
                            <textarea id="textarea-copy" class="mb-4 py-2.5 px-2.5 sm:py-2.5 sm:px-2.5 block w-full bg-white border-border-color rounded-lg sm:text-sm text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</textarea>
                            <div class="flex flex-wrap align-items-center gap-2">
                                <a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#textarea-copy"><i class="icon icon-clipboard me-1"></i> Copy from Input</a>
                                <a class="btn inline-flex items-center bg-dark border border-dark text-white text-center hover:bg-black hover:border-black dark:bg-gray-100 dark:border-gray-100 hover:text-white" href="javascript:void(0);" data-clipboard-action="cut" data-clipboard-target="#textarea-copy"><i class="icon icon-scissors me-1"></i> Cut from Input</a>
                            </div>
                        </form>
                    </div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(2) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="clipboard"&gt;
&lt;form class="form-horizontal"&gt;
    &lt;textarea id="textarea-copy" class="mb-4 py-2.5 px-2.5 sm:py-2.5 sm:px-2.5 block w-full bg-light border-border-color rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows="3"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit...&lt;/textarea&gt;
    &lt;div class="flex flex-wrap align-items-center gap-2"&gt;
        &lt;a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#textarea-copy"&gt;&lt;i class="icon icon-clipboard me-1"&gt;&lt;/i&gt; Copy from Input&lt;/a&gt;
        &lt;a class="btn inline-flex items-center bg-dark border border-dark text-white text-center hover:bg-black hover:border-black hover:text-white" href="javascript:void(0);" data-clipboard-action="cut" data-clipboard-target="#textarea-copy"&gt;&lt;i class="icon icon-scissors me-1"&gt;&lt;/i&gt; Cut from Input&lt;/a&gt;
    &lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;  
</code>
</pre>

                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Copy Text from Paragraph</h5>
                        <button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>  
                    <div class="preview-content clipboard" :class="{ hidden: showCode(3) }">
                        <form class="form-horizontal">
                            <p class="mb-1">Here is your OTP <span id="paragraph-copy1">22991</span>.</p>
                            <p class="mb-4">Please do not share it to anyone</p> 
                            <div class="flex flex-wrap align-items-center gap-2">
                                <a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#paragraph-copy1"><i class="icon icon-clipboard me-1"></i> Copy from Input</a> 
                            </div>
                        </form>
                    </div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(3) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="clipboard"&gt;
&lt;form class="form-horizontal"&gt;
    &lt;p class="mb-1"&gt;Here is your OTP &lt;span id="paragraph-copy1"&gt;22991&lt;/span&gt;.&lt;/p&gt;
    &lt;p class="mb-4"&gt;Please do not share it to anyone&lt;/p&gt; 
    &lt;div class="flex flex-wrap align-items-center gap-2"&gt;
        &lt;a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#paragraph-copy1"&gt;&lt;i class="icon icon-clipboard me-1"&gt;&lt;/i&gt; Copy from Input&lt;/a&gt; 
    &lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;  
</code>
</pre>

                </div> <!-- end card -->   

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Copy Hidden Text (Advanced)</h5>
                        <button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>  
                    <div class="preview-content clipboard" :class="{ hidden: showCode(4) }">
                        <form class="form-horizontal">
                            <p class="mb-4">Link -&gt; <span id="advanced-paragraph">http://www.example.com/example</span></p>
                            <div class="flex flex-wrap align-items-center gap-2">
                                <a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#advanced-paragraph"><i class="icon icon-clipboard me-1"></i> Copy from Input</a>
                                <a class="btn inline-flex items-center bg-warning border border-warning text-white text-center hover:bg-warning-900 hover:border-warning-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-text="2291"><i class="icon icon-clipboard me-1"></i> Copy Hidden Code</a>
                            </div>
                        </form>
                    </div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(4) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="clipboard"&gt;
&lt;form class="form-horizontal"&gt;
    &lt;p class="mb-4"&gt;Link -&gt; &lt;span id="advanced-paragraph"&gt;http://www.example.com/example&lt;/span&gt;&lt;/p&gt;
    &lt;div class="flex flex-wrap align-items-center gap-2"&gt;
        &lt;a class="btn inline-flex items-center bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:border-primary-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-target="#advanced-paragraph"&gt;&lt;i class="icon icon-clipboard me-1"&gt;&lt;/i&gt; Copy from Input&lt;/a&gt;
        &lt;a class="btn inline-flex items-center bg-warning border border-warning text-white text-center hover:bg-warning-900 hover:border-warning-900 hover:text-white" href="javascript:void(0);" data-clipboard-action="copy" data-clipboard-text="2291"&gt;&lt;i class="icon icon-clipboard me-1"&gt;&lt;/i&gt; Copy Hidden Code&lt;/a&gt;
    &lt;/div&gt;
&lt;/form&gt;
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
    mounted() {
        this.$refs.clipboardRoot.addEventListener('click', this.handleClipboardClick);
    },
    beforeUnmount() {
        this.$refs.clipboardRoot.removeEventListener('click', this.handleClipboardClick);
    },
    methods: {
        showCode(index) {
            return !!this.showCodeState[index];
        },
        toggleCode(index) {
            this.showCodeState[index] = !this.showCodeState[index];
        },
        async handleClipboardClick(event) {
            const btn = event.target.closest('[data-clipboard-action]');
            if (!btn) return;

            const action = btn.getAttribute('data-clipboard-action'); // "copy" | "cut"
            const targetSelector = btn.getAttribute('data-clipboard-target');
            const rawText = btn.getAttribute('data-clipboard-text'); // for hidden/static text

            let value = '';
            let el = null;

            if (rawText !== null) {
                // Hidden text case, e.g. data-clipboard-text="2291"
                value = rawText;
            } else if (targetSelector) {
                el = document.querySelector(targetSelector);
                if (!el) return;

                value = ('value' in el) ? el.value : el.textContent;
            }

            try {
                await navigator.clipboard.writeText(value);
                this.showCopiedFeedback(btn);
            } catch (err) {
                console.error('Clipboard write failed:', err);
            }

            // Only clear the field when it's an actual cut of an input/textarea
            if (action === 'cut' && el && 'value' in el) {
                el.value = '';
            }
        },
        showCopiedFeedback(btn) {
            const span = btn.querySelector('span');
            if (!span) return;
            const original = span.textContent;
            span.textContent = 'Copied!';
            setTimeout(() => {
                span.textContent = original;
            }, 1500);
        },
    },
};
</script>
