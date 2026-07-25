<template>
			<main>
                <div class="p-3 lg:py-6 lg:px-0">
                    <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                        <h1 class="text-gray-900 text-xl font-bold mb-0">Lightbox</h1>
                    </div>

                    <!-- Start grid -->
                    <div class="grid grid-cols-12 gap-6">
                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h2 class="text-gray-900 text-lg font-bold mb-0">Single Image Lightbox</h2>
                                <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>  
                            <div class="preview-content flex grid grid-cols-1 sm:grid-cols-3 gap-4" :class="{ hidden: showCode(0) }"> 
                                <a href="#" class="image-popup" data-fancybox="gallery" v-for="(image, index) in galleryImages" :key="index" @click="show(index)">
                                    <img :src="getImageUrl(image.src)" alt="img" class="h-full rounded-md">
                                </a>
                                <!-- <a href="@/assets/img/card/card-02.jpg" class="image-popup" data-fancybox="gallery">
                                    <img src="@/assets/img/card/card-02.jpg" alt="img" class="h-full rounded-md">
                                </a>
                                <a href="@/assets/img/card/card-03.jpg" class="image-popup" data-fancybox="gallery">
                                    <img src="@/assets/img/card/card-03.jpg" alt="img" class="h-full rounded-md">
                                </a> -->
                            </div> 
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div class="flex gap-4"&gt; 
        &lt;a href="assets/img/card/card-01.jpg" class="image-popup"&gt;
            &lt;img src="@/assets/img/card/card-01.jpg" alt="image" class="h-full"&gt;
        &lt;/a&gt;
        &lt;a href="assets/img/card/card-02.jpg" class="image-popup"&gt;
            &lt;img src="@/assets/img/card/card-02.jpg" alt="image" class="h-full"&gt;
        &lt;/a&gt;
        &lt;a href="assets/img/card/card-03.jpg" class="image-popup"&gt;
            &lt;img src="@/assets/img/card/card-03.jpg" alt="image" class="h-full"&gt;
        &lt;/a&gt;
    &lt;/div&gt; 
    </code>
    </pre> 
                        </div> <!-- end card -->
    
                        <div class="preview-card col-span-12 bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h3 class="text-gray-900 text-lg font-bold mb-0">Image with Description</h3>
                                <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div> 
                            <div class="preview-content grid grid-cols-1 sm:grid-cols-3 gap-4" :class="{ hidden: showCode(1) }"> 
                                <a href="#" class="image-popup-desc" data-title="Title 01" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" data-fancybox="gallery" v-for="(imageOne, index) in galleryImagesOne" :key="index" @click="showOne(index)">
                                    <img :src="getImageUrl(imageOne.srcOne)" class="img-fluid rounded-md" alt="work-thumbnail">
                                </a>
                                <!-- <a href="@/assets/img/card/card-05.jpg" class="image-popup-desc" data-title="Title 02" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" data-fancybox="gallery">
                                    <img src="@/assets/img/card/card-05.jpg" class="img-fluid rounded-md" alt="work-thumbnail">
                                </a>
                                <a href="@/assets/img/card/card-06.jpg" class="image-popup-desc" data-title="Title 03" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit" data-fancybox="gallery">
                                    <img src="@/assets/img/card/card-06.jpg" class="img-fluid rounded-md" alt="work-thumbnail">
                                </a> -->
                            </div>  
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div class="flex gap-4"&gt; 
        &lt;a href="assets/img/card/card-04.jpg" class="image-popup-desc" data-title="Title 01" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"&gt;
            &lt;img src="@/assets/img/card/card-04.jpg" class="img-fluid" alt="work-thumbnail"&gt;
        &lt;/a&gt;
        &lt;a href="assets/img/card/card-05.jpg" class="image-popup-desc" data-title="Title 01" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"&gt;
            &lt;img src="@/assets/img/card/card-05.jpg" class="img-fluid" alt="work-thumbnail"&gt;
        &lt;/a&gt;
        &lt;a href="assets/img/card/card-06.jpg" class="image-popup-desc" data-title="Title 01" data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"&gt;
            &lt;img src="@/assets/img/card/card-06.jpg" class="img-fluid" alt="work-thumbnail"&gt;
        &lt;/a&gt;
    &lt;/div&gt;  
    </code>
    </pre>
                        </div> <!-- end card --> 

                    </div>
                    <!-- End grid -->  
				</div>
            </main>

    <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="galleryImages.map((image) => getImageUrl(image.src))"
        @hide="visible = false"
        @on-prev="handlePrev"
        @on-next="handleNext"
    />
    <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="galleryImagesOne.map((image) => getImageUrl(image.srcOne))"
        @hide="visible = false"
        @on-prev="handlePrev"
        @on-next="handleNext"
    />
</template>
<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
    components: {
        VueEasyLightbox,
    },
    data() {
        return {
            showCodeState: {},
            visible: false,
            index: 0,
            galleryImages: [{ src: "card-01.jpg" }, { src: "card-02.jpg" }, { src: "card-03.jpg" }],
            galleryImagesOne: [{ srcOne: "card-04.jpg" }, { srcOne: "card-05.jpg" }, { srcOne: "card-06.jpg" }],
        };
    },
    methods: {
        showCode(index) {
            return !!this.showCodeState[index];
        },
        toggleCode(index) {
            this.showCodeState[index] = !this.showCodeState[index];
        },
        show(index) {
            this.index = index;
            this.visible = true;
        },
        showOne(index) {
            this.index = index;
            this.visible = true;
        },
        handlePrev(oldIndex, newIndex) {
            console.log("when prev btn click or user swipe right ----");
            console.log("oldIndex of imgs:", oldIndex);
            console.log("newIndex of imgs:", newIndex);
        },
        handleNext(oldIndex, newIndex) {
            console.log("when next btn click or user swipe left ----");
            console.log("oldIndex of imgs:", oldIndex);
            console.log("newIndex of imgs:", newIndex);
        },
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/card/${imageName}`, import.meta.url).href;
        },
    },
};
</script>
