<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Cards</h1>
            </div>
        
            <!-- Start grid -->  
            <div class="grid grid-cols-12 gap-6">
                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h2 class="text-gray-900 text-lg font-bold mb-0">With Subtitle</h2>
                        <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-white border border-border-color rounded-lg" :class="{ hidden: showCode(0) }">
                        <div class="mb-4">
                            <h3 class="text-gray-900 text-lg font-bold mb-1">Card Title</h3>
                            <p>Card Sub Title</p>
                        </div> 
                        <div class="mb-4">
                            <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                        </div> 
                        <p>Lush green terraces cascade along misty hills, creating a peaceful place landscape</p>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(0) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color rounded-lg"&gt;
        &lt;div class="mb-4"&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p&gt;Card Sub Title&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt; 
        &lt;p&gt;Lush green terraces cascade along misty hills, creating a peaceful place landscape&lt;/p&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h4 class="text-gray-900 text-lg font-bold mb-0">With Button </h4>
                        <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-white border border-border-color rounded-lg" :class="{ hidden: showCode(1) }">
                        <div class="mb-4">
                            <h5>Card Title</h5> 
                        </div> 
                        <div class="mb-4">
                            <img class="rounded-lg" src="@/assets/img/card/card-02.jpg" alt="card">
                        </div> 
                        <p class="mb-4">Lush green terraces cascade along misty hills </p>
                        <a href="#" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer inline-flex bg-light border border-border-color text-dark text-center hover:bg-light-900 hover:text-dark"><i class="icon icon-shopping-bag"></i>Add to cart</a>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(1) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color rounded-lg"&gt;
        &lt;div class="mb-4"&gt;
            &lt;h5&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-02.jpg" alt="card"&gt;
        &lt;/div&gt; 
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills&lt;/p&gt; 
        &lt;a href="#" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer inline-flex bg-light border border-border-color text-dark text-center hover:bg-light-900 hover:text-dark"&gt;
            &lt;i class="icon icon-shopping-bag"&gt;&lt;/i&gt;
            Add to cart
        &lt;/a&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>With Links</h5>
                        <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-white border border-border-color rounded-lg" :class="{ hidden: showCode(2) }">
                        <div class="mb-4">
                            <h5>Card Title</h5> 
                        </div> 
                        <div class="mb-4">
                            <img class="rounded-lg" src="@/assets/img/card/card-03.jpg" alt="card">
                        </div> 
                        <p class="mb-4">Lush green terraces cascade along misty hills </p>
                        <a href="#" class="inline-fle text-info underline text-center hover:text-primary">View More</a>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(2) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color rounded-lg"&gt;
        &lt;div class="mb-4"&gt;
            &lt;h5&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-03.jpg" alt="card"&gt;
        &lt;/div&gt; 
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills&lt;/p&gt; 
        &lt;a href="#" class="inline-flex text-info underline text-center hover:bg-light-900 hover:text-dark"&gt;
            View More
        &lt;/a&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center justify-between flex-wrap border-b gap-3 border-border-color">
                        <h5>Horizontal Right Align Content</h5>
                        <button type="button" @click="toggleCode(3)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(3) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content" :class="{ hidden: showCode(3) }">
                        <div class="p-5 bg-white border border-border-color rounded-lg md:flex block gap-4"> 
                            <div class="md:max-w-[180px]">
                                <img class="size-full rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                            </div>  
                            <div>
                                <h5 class="mb-1">Card Title</h5>
                                <p class="mb-4">Card Sub Title</p>
                                <p class="mb-4">Lush green terraces cascade along misty hills</p>
                                <p>Updated 2 days ago</p>
                            </div>
                        </div>
                    </div> 
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(3) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 bg-white border border-border-color rounded-lg md:flex block gap-4"&gt;
        &lt;div class="md:max-w-[180px]"&gt;
            &lt;img class="size-full rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt; 
        &lt;div&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p class="mb-4"&gt;Card Sub Title&lt;/p&gt;
            &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills&lt;/p&gt;
            &lt;p&gt;Updated 2 days ago&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Horizontal Left Align Content</h5>
                        <button type="button" @click="toggleCode(4)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(4) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content" :class="{ hidden: showCode(4) }">
                        <div class="p-5 bg-white border border-border-color rounded-lg md:flex block gap-4">
                            <div>
                                <h5 class="mb-1">Card Title</h5>
                                <p class="mb-4">Card Sub Title</p>
                                <p class="mb-4">Lush green terraces cascade along misty hills</p>
                                <p>Updated 2 days ago</p>
                            </div> 
                            <div class="md:max-w-[180px]">
                                <img class="size-full rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                            </div>   
                        </div>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(4) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 bg-white border border-border-color rounded-lg md:flex block gap-4"&gt;
        &lt;div&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p class="mb-4"&gt;Card Sub Title&lt;/p&gt;
            &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills&lt;/p&gt;
            &lt;p&gt;Updated 2 days ago&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="md:max-w-[180px]"&gt;
            &lt;img class="size-full rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Left Align</h5>
                        <button type="button" @click="toggleCode(5)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(5) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-white border border-border-color rounded-lg" :class="{ hidden: showCode(5) }">
                        <div class="mb-4">
                            <h5 class="mb-1">Card Title</h5> 
                        </div> 
                        <div class="mb-4">
                            <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                        </div> 
                        <p>Lush green terraces cascade along misty hills </p>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(5) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color rounded-lg"&gt;
        &lt;div class="mb-4"&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt; 
        &lt;p&gt;Lush green terraces cascade along misty hills&lt;/p&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Centre Align</h5>
                        <button type="button" @click="toggleCode(6)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(6) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-white border border-border-color rounded-lg" :class="{ hidden: showCode(6) }">
                        <div class="mb-4 text-center">
                            <h5>Card Title</h5> 
                        </div> 
                        <div class="mb-4 flex justify-center items-center">
                            <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                        </div> 
                        <p class="text-center">Lush green terraces cascade along misty hills </p>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(6) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color rounded-lg"&gt;
        &lt;div class="mb-4 text-center"&gt;
            &lt;h5&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4 flex justify-center items-center"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt; 
        &lt;p class="text-center"&gt;Lush green terraces cascade along misty hills&lt;/p&gt;
    &lt;/div&gt;
    </code>
    </pre>
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Right Align</h5>
                        <button type="button" @click="toggleCode(7)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(7) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-white border border-border-color rounded-lg" :class="{ hidden: showCode(7) }">
                        <div class="mb-4 text-end">
                            <h5>Card Title</h5> 
                        </div> 
                        <div class="mb-4 flex justify-end items-end">
                            <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                        </div> 
                        <p class="text-end">Lush green terraces cascade along misty hills </p>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(7) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color rounded-lg"&gt;
        &lt;div class="mb-4 text-end"&gt;
            &lt;h5&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4 flex justify-end items-end"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt; 
        &lt;p class="text-end"&gt;Lush green terraces cascade along misty hills&lt;/p&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->



                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>With Header</h5>
                        <button type="button" @click="toggleCode(8)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(8) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(8) }">
                        <div class="px-5 py-4 bg-light border-b border-border-color">
                            <h5>Card Title</h5> 
                        </div>
                        <div class="p-5"> 
                            <p>Lush green terraces cascade along misty hills, forming gentle layers that follow the curves of the land and create a calm and quite place.</p>
                        </div>  
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(8) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="border border-border-color rounded-lg overflow-hidden"&gt;
        &lt;div class="px-5 py-4 bg-light border-b border-border-color"&gt;
            &lt;h5&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt; 
        &lt;div class="p-5"&gt;
            &lt;p&gt;Lush green terraces cascade along misty hills, forming gentle layers that follow the curves of the land and create a calm and quite place.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>With Footer</h5>
                        <button type="button" @click="toggleCode(9)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(9) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(9) }"> 
                        <div class="p-5"> 
                            <p>Lush green terraces cascade along misty hills, forming gentle layers that follow the curves of the land and create a calm and quite place.</p>
                        </div>  
                        <div class="px-5 py-4 bg-light border-t border-border-color">
                            <h5>Card Title</h5> 
                        </div>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(9) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="border border-border-color rounded-lg overflow-hidden"&gt;
        &lt;div class="p-5"&gt;
            &lt;p&gt;Lush green terraces cascade along misty hills, forming gentle layers that follow the curves of the land and create a calm and quite place.&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="px-5 py-4 bg-light border-t border-border-color"&gt;
            &lt;h5&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Header & Footer</h5>
                        <button type="button" @click="toggleCode(10)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(10) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(10) }">
                        <div class="px-5 py-4 bg-light border-b border-border-color">
                            <h5>Card Title</h5> 
                        </div>
                        <div class="p-5"> 
                            <p>Lush green terraces cascade along misty hills. </p>
                        </div> 
                        <div class="px-5 py-4 bg-light border-t border-border-color">
                            <h5>Card Title</h5> 
                        </div> 
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(10) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="border border-border-color rounded-lg overflow-hidden"&gt;
        &lt;div class="px-5 py-4 bg-light border-b border-border-color"&gt;
            &lt;h5&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt; 
        &lt;div class="p-5"&gt;
            &lt;p&gt;Lush green terraces cascade along misty hills.&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="px-5 py-4 bg-light border-t border-border-color"&gt;
            &lt;h5&gt;Card Title&lt;/h5&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Primary Color</h5>
                        <button type="button" @click="toggleCode(11)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(11) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-primary border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(11) }"> 
                        <p class="mb-4 text-white">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <a class="underline text-white" href="#">View More</a> 
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(11) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 bg-primary border border-border-color rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4 text-white"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;a href="#" class="underline text-white"&gt;View More&lt;/a&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Light Color</h5>
                        <button type="button" @click="toggleCode(12)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(12) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(12) }"> 
                        <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <a class="underline text-dark hover:text-primary" href="#">View More</a>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(12) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 bg-light border border-border-color rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;a href="#" class="underline text-dark"&gt;View More&lt;/a&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Dark Color</h5>
                        <button type="button" @click="toggleCode(13)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(13) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-dark border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(13) }"> 
                        <p class="mb-4 text-white ">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <a class="underline text-white hover:text-primary" href="#">View More</a> 
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(13) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 bg-dark border border-border-color rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4 text-white"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;a href="#" class="underline text-white"&gt;View More&lt;/a&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Border</h5>
                        <button type="button" @click="toggleCode(14)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(14) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content p-5 bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(14) }"> 
                        <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <a class="underline text-dark hover:text-primary" href="#">View More</a>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(14) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 bg-light border border-border-color rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;a href="#" class="underline text-dark"&gt;View More&lt;/a&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Dotted Border</h5>
                        <button type="button" @click="toggleCode(15)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(15) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white p-5 border border-dashed border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(15) }"> 
                        <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <a class="underline text-dark hover:text-primary" href="#">View More</a>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(15) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-dashed border-border-color rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;a href="#" class="underline text-dark"&gt;View More&lt;/a&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Color Border</h5>
                        <button type="button" @click="toggleCode(16)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(16) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white p-5 border border-primary rounded-lg overflow-hidden" :class="{ hidden: showCode(16) }"> 
                        <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <a class="underline text-dark hover:text-primary" href="#">View More</a>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(16) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-primary rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;a href="#" class="underline text-dark"&gt;View More&lt;/a&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-6 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Left Border</h5>
                        <button type="button" @click="toggleCode(17)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark dark:hover:text-dark!">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(17) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white p-5 border border-border-color border-s-3 border-s-primary rounded-lg overflow-hidden" :class="{ hidden: showCode(17) }"> 
                        <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white border border-border-color text-dark  hover:bg-primary hover:text-white"><i class="icon icon-shopping-bag"></i>Add to cart</button>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(17) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color border-s-3 border-s-primary rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white border border-border-color text-dark text-center hover:bg-light-900 hover:text-dark"&gt;
            &lt;i class="icon icon-shopping-bag"&gt;&lt;/i&gt; Add to cart
        &lt;/button&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-6 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Right Border</h5>
                        <button type="button" @click="toggleCode(18)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(18) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white p-5 border border-border-color border-e-3 border-e-primary rounded-lg overflow-hidden" :class="{ hidden: showCode(18) }"> 
                        <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white border border-border-color text-dark  hover:bg-primary hover:text-white"><i class="icon icon-shopping-bag"></i>Add to cart</button>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(18) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color border-e-3 border-e-primary rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt;
        &lt;button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white border border-border-color text-dark text-center hover:bg-light-900 hover:text-dark"&gt;
            &lt;i class="icon icon-shopping-bag"&gt;&lt;/i&gt; Add to cart
        &lt;/button&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-6 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Bottom Border</h5>
                        <button type="button" @click="toggleCode(19)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(19) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white p-5 border border-border-color border-b-3 border-b-primary rounded-lg overflow-hidden" :class="{ hidden: showCode(19) }"> 
                        <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white border border-border-color text-dark  hover:bg-primary hover:text-white"><i class="icon icon-shopping-bag"></i>Add to cart</button>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(19) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color border-b-3 border-b-primary rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white border border-border-color text-dark text-center hover:bg-light-900 hover:text-dark"&gt;
            &lt;i class="icon icon-shopping-bag"&gt;&lt;/i&gt; Add to cart
        &lt;/button&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-6 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Top Border</h5>
                        <button type="button" @click="toggleCode(20)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(20) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white p-5 border border-border-color border-t-3 border-t-primary rounded-lg overflow-hidden" :class="{ hidden: showCode(20) }"> 
                        <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                        <button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white border border-border-color text-dark  hover:bg-primary-hover hover:text-white dark:text-dark dark:focus:text-dark dark:hover:text-dark!"><i class="icon icon-shopping-bag"></i>Add to cart</button>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(20) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="p-5 border border-border-color border-t-3 border-t-primary rounded-lg overflow-hidden"&gt;
        &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt; 
        &lt;button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-white border border-border-color text-dark text-center hover:bg-light-900 hover:text-dark"&gt;
            &lt;i class="icon icon-shopping-bag"&gt;&lt;/i&gt; Add to cart
        &lt;/button&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Glassmorphism</h5>
                        <button type="button" @click="toggleCode(21)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(21) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white rounded-lg relative overflow-hidden" :class="{ hidden: showCode(21) }">
                        <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                        <div class="absolute bottom-0 px-5 py-4 w-full backdrop-blur-[10px]">
                            <p class="text-white">Lush green terraces cascade along misty hills, creating a peaceful place</p>
                        </div>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(21) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="rounded-lg relative overflow-hidden"&gt;
        &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt; 
        &lt;div class="absolute bottom-0 px-5 py-4 w-full backdrop-blur-[10px]"&gt;
            &lt;p class="text-white"&gt;Lush green terraces cascade along misty hills, creating a peaceful place&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Tabs</h5>
                        <button type="button" @click="toggleCode(22)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(22) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white border border-border-color rounded-lg overflow-hidden" :class="{ hidden: showCode(22) }">
                        <div class="flex items-center gap-2 px-5 py-4 bg-light border-b border-border-color">
                            <a class="text-primary font-medium" href="#">Active</a>
                            <a class="text-dark font-medium" href="#">Link</a>
                            <a class="font-medium" href="#">Disabled</a>
                        </div>
                        <div class="p-5"> 
                            <p class="text-dark font-semibold mb-1">Card Title</p> 
                            <p class="text-[13px]">Lush green terraces cascade along misty hills, forming gentle layers that follow the curves of the land and create a calm and quite place.</p>
                        </div>  
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(22) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="border border-border-color rounded-lg overflow-hidden"&gt;
        &lt;div class="flex items-center gap-2 px-5 py-4 bg-light border-b border-border-color"&gt;
            &lt;a href="#" class="text-primary font-medium"&gt;Active&lt;/a&gt;
            &lt;a href="#" class="text-dark font-medium"&gt;Link&lt;/a&gt;
            &lt;a href="#" class="font-medium"&gt;Disabled&lt;/a&gt;
        &lt;/div&gt; 
        &lt;div class="p-5"&gt;
            &lt;p class="text-dark font-semibold mb-1"&gt;Card Title&lt;/p&gt;
            &lt;p class="text-[13px]"&gt;Lush green terraces cascade along misty hills, forming gentle layers that follow the curves of the land and create a calm and quite place.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card xl:col-span-4 sm:col-span-6 col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Image Overlay</h5>
                        <button type="button" @click="toggleCode(23)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(23) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content bg-white rounded-lg relative" :class="{ hidden: showCode(23) }">
                        <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card"> 
                        <div class="absolute bottom-0 px-5 py-4 w-full">
                            <p class="text-white">Lush green terraces cascade along misty hills, creating a peaceful place</p>
                        </div>
                    </div>
    <pre class="code  relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(23) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="rounded-lg relative"&gt;
        &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt; 
        &lt;div class="absolute bottom-0 px-5 py-4 w-full"&gt;
            &lt;p class="text-white"&gt;Lush green terraces cascade along misty hills, creating a peaceful place&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Card Group with Image</h5>
                        <button type="button" @click="toggleCode(24)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(24) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div>
                    <div class="preview-content bg-white" :class="{ hidden: showCode(24) }">
                        <div class="md:flex items-center block">
                            <div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none">
                                <div class="mb-4">
                                    <h5 class="mb-1">Card Title</h5>
                                    <p>Card Sub Title</p>
                                </div> 
                                <div class="mb-4">
                                    <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                                </div> 
                                <p>Lush green terraces cascade along misty hills, creating a peaceful place landscape</p>
                            </div>
                            <div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none">
                                <div class="mb-4">
                                    <h5 class="mb-1">Card Title</h5>
                                    <p>Card Sub Title</p>
                                </div> 
                                <div class="mb-4">
                                    <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                                </div> 
                                <p>Lush green terraces cascade along misty hills, creating a peaceful place landscape</p>
                            </div>
                            <div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none">
                                <div class="mb-4">
                                    <h5 class="mb-1">Card Title</h5>
                                    <p>Card Sub Title</p>
                                </div> 
                                <div class="mb-4">
                                    <img class="rounded-lg" src="@/assets/img/card/card-01.jpg" alt="card">
                                </div> 
                                <p>Lush green terraces cascade along misty hills, creating a peaceful place landscape</p>
                            </div>
                        </div> 
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(24) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="md:flex items-center block"&gt; 
        &lt;div class="p-5 border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none"&gt;
        &lt;div class="mb-4"&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p&gt;Card Sub Title&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt; 
            &lt;p&gt;Lush green terraces cascade along misty hills, creating a peaceful place landscape&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="p-5 border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none"&gt;
        &lt;div class="mb-4"&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p&gt;Card Sub Title&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt; 
            &lt;p&gt;Lush green terraces cascade along misty hills, creating a peaceful place landscape&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="p-5 border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none"&gt;
        &lt;div class="mb-4"&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p&gt;Card Sub Title&lt;/p&gt;
        &lt;/div&gt; 
        &lt;div class="mb-4"&gt;
            &lt;img class="rounded-lg" src="assets/img/card/card-01.jpg" alt="card"&gt;
        &lt;/div&gt; 
            &lt;p&gt;Lush green terraces cascade along misty hills, creating a peaceful place landscape&lt;/p&gt;
        &lt;/div&gt;  
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Card Group without Image</h5>
                        <button type="button" @click="toggleCode(25)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(25) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content" :class="{ hidden: showCode(25) }">
                        <div class="md:flex items-center block">
                            <div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none overflow-hidden">
                                <h5 class="mb-1">Card Title</h5> 
                                <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                                <a class="underline text-info hover:text-primary" href="#">View More</a>
                            </div>
                            <div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none overflow-hidden">
                                <h5 class="mb-1">Card Title</h5> 
                                <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                                <a class="underline text-info hover:text-primary" href="#">View More</a>
                            </div>
                            <div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none overflow-hidden">
                                <h5 class="mb-1">Card Title</h5> 
                                <p class="mb-4">Lush green terraces cascade along misty hills, creating a peaceful Place.</p>
                                <a class="underline text-info hover:text-primary" href="#">View More</a>
                            </div>
                        </div> 
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(25) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="md:flex items-center block"&gt; 
        &lt;div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none overflow-hidden"&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt;
            &lt;a href="#" class="underline text-info"&gt;View More&lt;/a&gt;
        &lt;/div&gt; 
        &lt;div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none overflow-hidden"&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt;
            &lt;a href="#" class="underline text-info"&gt;View More&lt;/a&gt;
        &lt;/div&gt; 
        &lt;div class="p-5 bg-white border border-border-color first:rounded-s-lg last:rounded-e-lg rounded-none overflow-hidden"&gt;
            &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
            &lt;p class="mb-4"&gt;Lush green terraces cascade along misty hills, creating a peaceful Place.&lt;/p&gt;
            &lt;a href="#" class="underline text-info"&gt;View More&lt;/a&gt;
        &lt;/div&gt; 
    &lt;/div&gt;
    </code>
    </pre> 
                </div> <!-- end card -->

                <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                    <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                        <h5>Streched Link</h5>
                        <button type="button" @click="toggleCode(26)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                            <i class="icon icon-eye"></i>
                            <span class="code-btn">{{ showCode(26) ? "Show Preview" : "Show Code" }}</span>
                        </button>
                    </div> 
                    <div class="preview-content" :class="{ hidden: showCode(26) }">
                        <div class="md:flex block gap-6">
                            <div class="preview-content bg-white border border-border-color rounded-lg overflow-hidden"> 
                                <img src="@/assets/img/card/card-01.jpg" alt="card">
                                <div class="p-5">
                                    <h5 class="mb-1">Card Title</h5>
                                    <p>Lush green terraces cascade along misty hills, creating a peaceful place landscape</p>
                                </div>  
                            </div>
                            <div class="preview-content bg-white border border-border-color rounded-lg overflow-hidden"> 
                                <img src="@/assets/img/card/card-01.jpg" alt="card">
                                <div class="p-5"> 
                                    <p class="mb-2.5">Lush green terraces cascade along misty hills, creating a peaceful place landscape</p>
                                    <button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-light font-semibold border border-border-color text-dark text-center hover:bg-primary-hover hover:text-white dark:hover:text-dark!">Go Somewhere <i class="icon icon-chevron-right"></i></button>
                                </div>  
                            </div>
                            <div class="preview-content bg-white border border-border-color rounded-lg overflow-hidden"> 
                                <img src="@/assets/img/card/card-01.jpg" alt="card">
                                <div class="p-5"> 
                                    <p class="mb-2.5">Lush green terraces cascade along misty hills, creating a peaceful place landscape</p>
                                    <a class="underline text-info hover:text-primary" href="#">View More</a>
                                </div>  
                            </div>
                        </div>
                    </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm  overflow-hidden" :class="{ hidden: !showCode(26) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[450px] mb-[-42px] mt-[-30px] overflow-auto p-4 pr-16">
    &lt;div class="md:flex block gap-6"&gt;
        &lt;div class="border border-border-color rounded-lg overflow-hidden"&gt;
            &lt;img src="assets/img/card/card-01.jpg" alt="card"&gt;
            &lt;div class="p-5"&gt;
                &lt;h5 class="mb-1"&gt;Card Title&lt;/h5&gt;
                &lt;p&gt; Lush green terraces cascade along misty hills, creating a peaceful place landscape &lt;/p&gt;
            &lt;/div&gt;	
        &lt;/div&gt;
        &lt;div class="border border-border-color rounded-lg overflow-hidden"&gt;
            &lt;img src="assets/img/card/card-01.jpg" alt="card"&gt;
            &lt;div class="p-5"&gt;
                &lt;p class="mb-2.5"&gt;Lush green terraces cascade along misty hills, creating a peaceful place landscape&lt;/p&gt;
                &lt;button type="button" class="btn-sm flex items-center justify-center gap-1.5 cursor-pointer bg-light font-semibold border border-border-color text-dark text-center hover:bg-light-900 hover:text-dark" &gt; Go Somewhere &lt;i class="icon icon-chevron-right"&gt;&lt;/i&gt; &lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="border border-border-color rounded-lg overflow-hidden"&gt;
            &lt;img src="assets/img/card/card-01.jpg" alt="card"&gt;
            &lt;div class="p-5"&gt;
                &lt;p class="mb-2.5"&gt; Lush green terraces cascade along misty hills, creating a peaceful place landscape &lt;/p&gt;
                &lt;a href="#" class="underline text-info"&gt;View More&lt;/a&gt;
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
