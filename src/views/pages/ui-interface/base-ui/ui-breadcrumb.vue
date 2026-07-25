<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Breadcrumb</h1>
            </div>
        
            <!-- Start grid -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 items-baseline">
                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h2 class="text-gray-900 text-lg font-bold mb-0">Default Breadcrumb</h2>
                        <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content" :class="{ hidden: showCode(0) }"> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li>  
                        </ol> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li> 
                            <li class="inline-flex items-center">
                                /
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Library
                            </li>
                        </ol>       
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                /
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Library
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                /
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Data
                            </li>
                        </ol> 
                    </div>    
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 overflow-hidden" :class="{ hidden: !showCode(0) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1">
<i class="icon icon-copy"></i>
<span>Copy</span>
</button>

<code class="language-html block w-full max-h-[300px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="preview-content"&gt;
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
&lt;/ol&gt;

&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;/&lt;/li&gt;
    &lt;li class="inline-flex items-center font-medium text-dark" aria-current="page"&gt;
        Library
    &lt;/li&gt;
&lt;/ol&gt;

&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;/&lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Library
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;/&lt;/li&gt;
    &lt;li class="inline-flex items-center font-medium text-dark" aria-current="page"&gt;
        Data
    &lt;/li&gt;
&lt;/ol&gt;
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h3 class="text-gray-900 text-lg font-bold mb-0">Arrow Style</h3>
                        <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content" :class="{ hidden: showCode(1) }"> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li>  
                        </ol> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li> 
                            <li class="inline-flex items-center">
                                <i class="icon icon-chevrons-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Library
                            </li>
                        </ol>       
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-chevrons-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Library
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-chevrons-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Data
                            </li>
                        </ol> 
                    </div> 
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 overflow-hidden" :class="{ hidden: !showCode(1) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1">
<i class="icon icon-copy"></i>
<span>Copy</span>
</button>

<code class="language-html block w-full max-h-[300px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="preview-content"&gt;
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
&lt;/ol&gt;

&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-chevrons-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center font-medium text-dark" aria-current="page"&gt;
        Library
    &lt;/li&gt;
&lt;/ol&gt;

&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-chevrons-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Library
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-chevrons-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center font-medium text-dark" aria-current="page"&gt;
        Data
    &lt;/li&gt;
&lt;/ol&gt;
&lt;/div&gt;
</code>
</pre>	
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h4 class="text-gray-900 text-lg font-bold mb-0">Pipe Style</h4>
                        <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content" :class="{ hidden: showCode(2) }"> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li>  
                        </ol> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li> 
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Library
                            </li>
                        </ol>       
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Library
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Data
                            </li>
                        </ol> 
                    </div>
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 overflow-hidden" :class="{ hidden: !showCode(2) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1">
<i class="icon icon-copy"></i>
<span>Copy</span>
</button>

<code class="language-html block w-full max-h-[300px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="preview-content"&gt;
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
&lt;/ol&gt;

&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center font-medium text-dark" aria-current="page"&gt;
        Library
    &lt;/li&gt;
&lt;/ol&gt;

&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Home
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-gray-600 hover:text-primary" href="#"&gt;
            Library
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center font-medium text-dark" aria-current="page"&gt;
        Data
    &lt;/li&gt;
&lt;/ol&gt;

&lt;/div&gt;
</code>
</pre>

    
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Breadcrumb with Icon</h5>
                        <button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content" :class="{ hidden: showCode(3) }"> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>  
                        </ol> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 mb-3">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li> 
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Library
                            </li>
                        </ol>       
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    Library
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Data
                            </li>
                        </ol> 
                    </div>   
<pre class="code relative mt-4 p-0! bg-dark text-gray-100   overflow-hidden" :class="{ hidden: !showCode(3) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[300px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2"&gt; 
&lt;li class="inline-flex items-center"&gt;
    &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
        &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
    &lt;/a&gt; 
&lt;/li&gt;
&lt;li class="inline-flex items-center"&gt;
    &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
&lt;/li&gt;
&lt;li class="inline-flex items-center"&gt;
    &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
        Library
    &lt;/a&gt;
&lt;/li&gt;
&lt;li class="inline-flex items-center"&gt;
    &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
&lt;/li&gt;
&lt;li class="inline-flex items-center  font-medium text-dark" aria-current="page"&gt;
    Data
&lt;/li&gt;
&lt;/ol&gt;
</code>
</pre>
        
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Colored Breadcrumb</h5>
                        <button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content" :class="{ hidden: showCode(4) }"> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-primary p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center  font-medium text-white" aria-current="page">
                                Application
                            </li>
                        </ol>  
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-info p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a>
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center  font-medium text-white" aria-current="page">
                                Application
                            </li>
                        </ol>  
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-dark p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center  font-medium text-white" aria-current="page">
                                Application
                            </li>
                        </ol>
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-warning p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center  font-medium text-white" aria-current="page">
                                Application
                            </li>
                        </ol>  
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-success p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center  font-medium text-white" aria-current="page">
                                Application
                            </li>
                        </ol>   
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-danger p-3 rounded-lg">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a>
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-white" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center text-white">
                                /
                            </li>
                            <li class="inline-flex items-center  font-medium text-white" aria-current="page">
                                Application
                            </li>
                        </ol> 
                    </div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100 overflow-hidden" :class="{ hidden: !showCode(4) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1">
<i class="icon icon-copy"></i>
<span>Copy</span>
</button>

<code class="language-html block w-full max-h-[300px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div class="preview-content"&gt;
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-primary p-3 rounded-lg mb-4"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-white" href="#"&gt;
            &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
        &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
        &lt;li class="inline-flex items-center"&gt;
            &lt;a class="flex items-center text-white" href="#"&gt;
            App Center
        &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
        &lt;li class="inline-flex items-center font-medium text-white" aria-current="page"&gt;
            Application
        &lt;/li&gt;
    &lt;/ol&gt;

    &lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-info p-3 rounded-lg mb-4"&gt;
        &lt;li class="inline-flex items-center"&gt;
            &lt;a class="flex items-center text-white" href="#"&gt;
                &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
            &lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
            &lt;li class="inline-flex items-center"&gt;
                &lt;a class="flex items-center text-white" href="#"&gt;
                    App Center
                &lt;/a&gt;
            &lt;/li&gt;
            &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
            &lt;li class="inline-flex items-center font-medium text-white" aria-current="page"&gt;
                Application
            &lt;/li&gt;
    &lt;/ol&gt;

    &lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-dark p-3 rounded-lg mb-4"&gt;
        &lt;li class="inline-flex items-center"&gt;
            &lt;a class="flex items-center text-white" href="#"&gt;
                &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
        &lt;li class="inline-flex items-center"&gt;
            &lt;a class="flex items-center text-white" href="#"&gt;
                App Center
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
        &lt;li class="inline-flex items-center font-medium text-white" aria-current="page"&gt;
            Application
        &lt;/li&gt;
    &lt;/ol&gt;

    &lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-warning p-3 rounded-lg mb-4"&gt;
        &lt;li class="inline-flex items-center"&gt;
            &lt;a class="flex items-center text-white" href="#"&gt;
                &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
        &lt;li class="inline-flex items-center"&gt;
            &lt;a class="flex items-center text-white" href="#"&gt;
                App Center
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
        &lt;li class="inline-flex items-center font-medium text-white" aria-current="page"&gt;
            Application
        &lt;/li&gt;
    &lt;/ol&gt;

    &lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-success p-3 rounded-lg mb-4"&gt;
        &lt;li class="inline-flex items-center"&gt;
            &lt;a class="flex items-center text-white" href="#"&gt;
                &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
        &lt;li class="inline-flex items-center"&gt;
            &lt;a class="flex items-center text-white" href="#"&gt;
                App Center
            &lt;/a&gt;
        &lt;/li&gt;
        &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
        &lt;li class="inline-flex items-center font-medium text-white" aria-current="page"&gt;
            Application
        &lt;/li&gt;
    &lt;/ol&gt;

    &lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 bg-danger p-3 rounded-lg"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-white" href="#"&gt;
                &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center text-white" href="#"&gt;
                App Center
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center text-white"&gt;/&lt;/li&gt;
    &lt;li class="inline-flex items-center font-medium text-white" aria-current="page"&gt;
        Application
    &lt;/li&gt;
&lt;/ol&gt;
&lt;/div&gt;
</code>
</pre>
                </div> <!-- end card -->

                <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Ghost Breadcrumb</h5>
                        <button type="button" @click="toggleCode(5)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(5) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content" :class="{ hidden: showCode(5) }"> 
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-primary bg-primary-transparent p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Application
                            </li>
                        </ol>  
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-info bg-info-transparent p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Application
                            </li>
                        </ol>  
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-dark bg-gray-transparent p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Application
                            </li>
                        </ol>
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-warning bg-warning-transparent p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Application
                            </li>
                        </ol>  
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-success bg-success-transparent p-3 rounded-lg mb-4">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Application
                            </li>
                        </ol>   
                        <ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-danger bg-danger-transparent p-3 rounded-lg">
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    <i class="icon icon-house me-2"></i> Home
                                </a> 
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center">
                                <a class="flex items-center  text-gray-600 hover:text-primary" href="#">
                                    App Center 
                                </a>
                            </li>
                            <li class="inline-flex items-center">
                                <i class="icon icon-arrow-right"></i>
                            </li>
                            <li class="inline-flex items-center  font-medium text-dark" aria-current="page">
                                Application
                            </li>
                        </ol> 
                    </div>  
<pre class="code relative mt-4 p-0! bg-dark text-gray-100   overflow-hidden" :class="{ hidden: !showCode(5) }">
<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
<code class="language-html block w-full max-h-[300px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
&lt;div&gt; 
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-primary bg-primary-transparent p-3 rounded-lg mb-4"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
        &lt;/a&gt; 
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            App Center 
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center  font-medium text-dark" aria-current="page"&gt;
        Application
    &lt;/li&gt;
&lt;/ol&gt;  
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-info bg-info-transparent p-3 rounded-lg mb-4"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
        &lt;/a&gt; 
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            App Center 
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center  font-medium text-dark" aria-current="page"&gt;
        Application
    &lt;/li&gt;
&lt;/ol&gt;  
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-dark bg-gray-transparent p-3 rounded-lg mb-4"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
        &lt;/a&gt; 
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            App Center 
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center  font-medium text-dark" aria-current="page"&gt;
        Application
    &lt;/li&gt;
&lt;/ol&gt;
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-warning bg-warning-transparent p-3 rounded-lg mb-4"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
        &lt;/a&gt; 
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            App Center 
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center  font-medium text-dark" aria-current="page"&gt;
        Application
    &lt;/li&gt;
&lt;/ol&gt;  
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-success bg-success-transparent p-3 rounded-lg mb-4"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
        &lt;/a&gt; 
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            App Center 
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center  font-medium text-dark" aria-current="page"&gt;
        Application
    &lt;/li&gt;
&lt;/ol&gt;   
&lt;ol class="flex flex-wrap items-center whitespace-nowrap gap-2 border border-danger bg-danger-transparent p-3 rounded-lg"&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            &lt;i class="icon icon-house me-2"&gt;&lt;/i&gt; Home
        &lt;/a&gt; 
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;a class="flex items-center  text-gray-600 hover:text-primary" href="#"&gt;
            App Center 
        &lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center"&gt;
        &lt;i class="icon icon-arrow-right"&gt;&lt;/i&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center  font-medium text-dark" aria-current="page"&gt;
        Application
    &lt;/li&gt;
&lt;/ol&gt; 
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
