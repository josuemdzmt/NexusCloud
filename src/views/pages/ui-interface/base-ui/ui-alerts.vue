<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Alerts</h1>
            </div>
        
            <!-- start grid -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 items-baseline">
                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h2 class="text-gray-900 text-lg font-bold mb-0">Basic Alerts</h2>
                        <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content border-dashed border-primary border px-4.5 py-5 rounded-md" :class="{ hidden: showCode(0) }">
                        <div role="alert" class="p-4 font-medium bg-primary rounded-lg text-white mb-3">This is a simple alert</div>
                        <div role="alert" class="p-4 font-medium bg-dark rounded-lg text-white mb-3">This is a simple alert</div>
                        <div role="alert" class="p-4 font-medium bg-warning rounded-lg text-white mb-3">This is a simple alert</div>
                        <div role="alert" class="p-4 font-medium bg-info rounded-lg text-white mb-3">This is a simple alert</div>
                        <div role="alert" class="p-4 font-medium bg-success rounded-lg text-white mb-3">This is a simple alert</div>
                        <div role="alert" class="p-4 font-medium bg-danger rounded-lg text-white">This is a simple alert</div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1">
<i class="icon icon-copy"></i>
<span>Copy</span>
</button>

<code class="language-html block w-full max-h-[450px] mb-[-21px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="border-dashed border-primary border px-4.5 py-5 rounded-md"&gt;

&lt;div role="alert" class="p-4 font-medium bg-primary rounded-lg text-white mb-3"&gt;
    This is a simple alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-dark rounded-lg text-white mb-3"&gt;
    This is a simple alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-warning rounded-lg text-white mb-3"&gt;
    This is a simple alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-info rounded-lg text-white mb-3"&gt;
    This is a simple alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-success rounded-lg text-white mb-3"&gt;
    This is a simple alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-danger rounded-lg text-white"&gt;
    This is a simple alert
&lt;/div&gt;

&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h3 class="text-gray-900 text-lg font-bold mb-0">Ghost Alerts</h3>
                        <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content border-dashed border-primary border px-4.5 py-5 rounded-md" :class="{ hidden: showCode(1) }">
                        <div role="alert" class="p-4 font-medium bg-primary-transparent rounded-lg text-primary mb-3">This is a simple primary alert</div>
                        <div role="alert" class="p-4 font-medium bg-gray-transparent rounded-lg text-dark mb-3">This is a simple light alert</div>
                        <div role="alert" class="p-4 font-medium bg-warning-transparent rounded-lg text-warning mb-3">This is a simple warning alert</div>
                        <div role="alert" class="p-4 font-medium bg-info-transparent rounded-lg text-info mb-3">This is a simple info alert</div>
                        <div role="alert" class="p-4 font-medium bg-success-transparent rounded-lg text-success mb-3">This is a simple success alert</div>
                        <div role="alert" class="p-4 font-medium bg-danger-transparent rounded-lg text-danger">This is a simple error  alert</div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1">
<i class="icon icon-copy"></i>
<span>Copy</span>
</button>

<code class="language-html block w-full max-h-[450px] mb-[-21px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="border-dashed border-primary border px-4.5 py-5 rounded-md"&gt;

&lt;div role="alert" class="p-4 font-medium bg-primary-transparent rounded-lg text-primary mb-3"&gt;
    This is a simple primary alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-gray-transparent rounded-lg text-dark mb-3"&gt;
    This is a simple light alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-warning-transparent rounded-lg text-warning mb-3"&gt;
    This is a simple warning alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-info-transparent rounded-lg text-info mb-3"&gt;
    This is a simple info alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-success-transparent rounded-lg text-success mb-3"&gt;
    This is a simple success alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium bg-danger-transparent rounded-lg text-danger"&gt;
    This is a simple error alert
&lt;/div&gt;

&lt;/div&gt;
</code>
</pre> 
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h4 class="text-gray-900 text-lg font-bold mb-0">Outline Alerts</h4>
                        <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content border-dashed border-primary border px-4.5 py-5 rounded-md" :class="{ hidden: showCode(2) }">
                        <div role="alert" class="p-4 font-medium border border-primary rounded-lg text-primary mb-3">This is a simple primary alert</div>
                        <div role="alert" class="p-4 font-medium border border-border-color rounded-lg text-dark mb-3">This is a simple dark alert</div>
                        <div role="alert" class="p-4 font-medium border border-warning rounded-lg text-warning mb-3">This is a simple warning alert</div>
                        <div role="alert" class="p-4 font-medium border border-info rounded-lg text-info mb-3">This is a simple info alert</div>
                        <div role="alert" class="p-4 font-medium border border-success rounded-lg text-success mb-3">This is a simple success alert</div>
                        <div role="alert" class="p-4 font-medium border border-danger rounded-lg text-danger">This is a simple error  alert</div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(2) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[450px] mb-[-21px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="border-dashed border-primary border px-4.5 py-5 rounded-md"&gt;

&lt;div role="alert" class="p-4 font-medium border border-primary rounded-lg text-primary mb-3"&gt;
    This is a simple primary alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium border border-border-color rounded-lg text-dark mb-3"&gt;
    This is a simple dark alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium border border-warning rounded-lg text-warning mb-3"&gt;
    This is a simple warning alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium border border-info rounded-lg text-info mb-3"&gt;
    This is a simple info alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium border border-success rounded-lg text-success mb-3"&gt;
    This is a simple success alert
&lt;/div&gt;

&lt;div role="alert" class="p-4 font-medium border border-danger rounded-lg text-danger"&gt;
    This is a simple error  alert
&lt;/div&gt;

&lt;/div&gt;
</code>
</pre> 
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Alerts with Icons</h5>
                        <button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content border-dashed border-primary border px-4.5 py-5 rounded-md" :class="{ hidden: showCode(3) }">
                        <div role="alert" class="flex items-center p-4 font-medium bg-primary-transparent rounded-lg text-primary mb-3"><i class="icon icon-info me-1"></i>This is a primary alert</div>
                        <div role="alert" class="flex items-center p-4 font-medium bg-gray-transparent rounded-lg text-dark mb-3"><i class="icon icon-copy-check me-1"></i>This is a light alert</div>
                        <div role="alert" class="flex items-center p-4 font-medium bg-warning-transparent rounded-lg text-warning mb-3"><i class="icon icon-triangle-alert me-1"></i>This is a  warning alert</div>
                        <div role="alert" class="flex items-center p-4 font-medium bg-info-transparent rounded-lg text-info mb-3"><i class="icon icon-badge-info me-1"></i>This is a info alert</div>
                        <div role="alert" class="flex items-center p-4 font-medium bg-success-transparent rounded-lg text-success mb-3"><i class="icon icon-badge-check me-1"></i>This is a success alert</div>
                        <div role="alert" class="flex items-center p-4 font-medium bg-danger-transparent rounded-lg text-danger"><i class="icon icon-octagon-alert me-1"></i>This is a error alert</div>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(3) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[450px] mb-[-21px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="border-dashed border-primary border px-4.5 py-5 rounded-md"&gt;

&lt;div role="alert" class="flex items-center p-4 font-medium bg-primary-transparent rounded-lg text-primary mb-3"&gt;
    &lt;i class="icon icon-info me-1"&gt;&lt;/i&gt;This is a primary alert
&lt;/div&gt;

&lt;div role="alert" class="flex items-center p-4 font-medium bg-gray-transparent rounded-lg text-dark mb-3"&gt;
    &lt;i class="icon icon-copy-check me-1"&gt;&lt;/i&gt;This is a light alert
&lt;/div&gt;

&lt;div role="alert" class="flex items-center p-4 font-medium bg-warning-transparent rounded-lg text-warning mb-3"&gt;
    &lt;i class="icon icon-triangle-alert me-1"&gt;&lt;/i&gt;This is a  warning alert
&lt;/div&gt;

&lt;div role="alert" class="flex items-center p-4 font-medium bg-info-transparent rounded-lg text-info mb-3"&gt;
    &lt;i class="icon icon-badge-info me-1"&gt;&lt;/i&gt;This is a info alert
&lt;/div&gt;

&lt;div role="alert" class="flex items-center p-4 font-medium bg-success-transparent rounded-lg text-success mb-3"&gt;
    &lt;i class="icon icon-badge-check me-1"&gt;&lt;/i&gt;This is a success alert
&lt;/div&gt;

&lt;div role="alert" class="flex items-center p-4 font-medium bg-danger-transparent rounded-lg text-danger"&gt;
    &lt;i class="icon icon-octagon-alert me-1"&gt;&lt;/i&gt;This is a error alert
&lt;/div&gt;

&lt;/div&gt;
</code>
</pre> 
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Alert with List</h5>
                        <button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content p-4 bg-danger-transparent rounded-lg" :class="{ hidden: showCode(4) }">
                        <p class="text-danger flex items-center font-medium mb-2.5"><i class="icon icon-octagon-alert me-1"></i> There were 2 errors with your submission</p>
                        <ul>
                            <li class="text-danger">Your password must be at least 8 characters</li>
                            <li class="text-danger">Your password must include at least one special Character</li>
                        </ul>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(4) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[450px] mb-[-21px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="p-4 bg-danger-transparent rounded-lg"&gt;
&lt;p class="text-danger flex items-center font-medium mb-2.5"&gt;
    &lt;i class="icon icon-octagon-alert me-1"&gt;&lt;/i&gt;
    There were 2 errors with your submission
&lt;/p&gt; 
&lt;ul&gt;
    &lt;li class="text-danger"&gt;Your password must be at least 8 characters&lt;/li&gt;
    &lt;li class="text-danger"&gt;Your password must include at least one special Character&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
</code>
</pre> 
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Alert with Actions</h5>
                        <button type="button" @click="toggleCode(5)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(5) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content p-4 bg-success-transparent rounded-lg" :class="{ hidden: showCode(5) }">
                        <p class="text-success flex items-center font-medium mb-2.5"><i class="icon icon-octagon-alert me-1"></i> There were 2 success with your submission</p>
                        <ul>
                            <li class="text-success">Your password must be at least 8 characters</li>
                            <li class="text-success">Your password must include at least one special Character</li>
                        </ul>
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(5) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[450px] mb-[-21px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="p-4 bg-success-transparent rounded-lg"&gt;
&lt;p class="text-success flex items-center font-medium mb-2.5"&gt;
&lt;i class="icon icon-octagon-alert me-1"&gt;&lt;/i&gt;
    There were 2 success with your submission
&lt;/p&gt; 
&lt;ul&gt;
    &lt;li class="text-success"&gt;Your password must be at least 8 characters&lt;/li&gt;
    &lt;li class="text-success"&gt;Your password must include at least one special Character&lt;/li&gt;
&lt;/ul&gt;
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