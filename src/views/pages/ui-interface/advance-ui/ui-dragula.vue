<template>
			<main>
                <div class="p-3 lg:py-6 lg:px-0">
                    <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                        <h1 class="text-gray-900 text-xl font-bold mb-0">Dragula</h1>
                    </div>

                    <!-- Start grid -->
                    <div class="grid grid-cols-1 gap-6">
                        <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h2 class="text-gray-900 text-lg font-bold mb-0"> Simple Drag and Drop Example</h2>
                                <button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>
                            <draggable v-model="simpleItems" item-key="id" class="preview-content grid grid-cols-1 xl:grid-cols-3 gap-6" :class="{ hidden: showCode(0) }" ghost-class="drag-ghost">
                                <template #item="{ element }">
                                    <div class="p-5 rounded-lg text-white cursor-move" :class="element.bg">
                                        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <p>Someone famous in <em>Source Title</em></p>
                                    </div>
                                </template>
                            </draggable>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[400px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;draggable v-model="simpleItems" item-key="id" class="preview-content grid grid-cols-1 xl:grid-cols-3 gap-6"&gt;
        &lt;template #item="{ element }"&gt;
            &lt;div class="p-5 rounded-lg text-white" :class="element.bg"&gt;
                &lt;p class="mb-4"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
                &lt;p&gt;Someone famous in &lt;em&gt;Source Title&lt;/em&gt;&lt;/p&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/draggable&gt;
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h3 class="text-gray-900 text-lg font-bold mb-0">Move stuff between containers</h3>
                                <button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>
                            <div class="preview-content grid grid-cols-1 xl:grid-cols-2 gap-6" :class="{ hidden: showCode(1) }">
                                <div class="col-span-1 p-5 bg-light rounded-lg">
                                    <h4 class="text-gray-900 text-lg font-bold mb-0">Part 1</h4>
                                    <draggable v-model="companyListLeft" item-key="id" group="company-list" class="flex flex-col gap-4 mt-8" ghost-class="drag-ghost">
                                        <template #item="{ element }">
                                            <div class="flex sm:flex-row flex-col items-start gap-3 p-4 border border-border-color rounded-lg bg-white cursor-move">
                                                <img :src="element.avatar" class="size-10 rounded-full border border-border-color" alt="user-image">
                                                <div>
                                                    <h5 class="text-[16px] mb-1">{{ element.name }}</h5>
                                                    <p class="text-xs mb-3">{{ element.role }}</p>
                                                    <em class="text-xs">Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.</em>
                                                </div>
                                            </div>
                                        </template>
                                    </draggable>
                                </div>
                                <div class="col-span-1 p-5 bg-light rounded-lg">
                                    <h5>Part 2</h5>
                                    <draggable v-model="companyListRight" item-key="id" group="company-list" class="flex flex-col gap-4 mt-8" ghost-class="drag-ghost">
                                        <template #item="{ element }">
                                            <div class="flex sm:flex-row flex-col items-start gap-3 p-4 border border-border-color rounded-lg bg-white cursor-move">
                                                <img :src="element.avatar" class="size-10 rounded-full border border-border-color" alt="user-image">
                                                <div>
                                                    <h5 class="text-[16px] mb-1">{{ element.name }}</h5>
                                                    <p class="text-xs mb-3">{{ element.role }}</p>
                                                    <em class="text-xs">Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.</em>
                                                </div>
                                            </div>
                                        </template>
                                    </draggable>
                                </div>
                            </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[400px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div class="preview-content grid grid-cols-1 xl:grid-cols-2 gap-6"&gt;
        &lt;div class="col-span-1 p-5 bg-light rounded-lg"&gt;
            &lt;h5&gt;Part 1&lt;/h5&gt;
            &lt;draggable v-model="companyListLeft" item-key="id" group="company-list" class="flex flex-col gap-4 mt-8"&gt;
                &lt;template #item="{ element }"&gt;
                    &lt;div class="flex sm:flex-row flex-col items-start gap-3 p-4 border border-border-color rounded-lg bg-white"&gt;
                        &lt;img :src="element.avatar" class="size-10 rounded-full border border-border-color" alt="user-image"&gt;
                        &lt;div&gt;
                            &lt;h5 class="text-[16px] mb-1"&gt;&#123;&#123; element.name &#125;&#125;&lt;/h5&gt;
                            &lt;p class="text-xs mb-3"&gt;&#123;&#123; element.role &#125;&#125;&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;
        &lt;div class="col-span-1 p-5 bg-light rounded-lg"&gt;
            &lt;h5&gt;Part 2&lt;/h5&gt;
            &lt;draggable v-model="companyListRight" item-key="id" group="company-list" class="flex flex-col gap-4 mt-8"&gt;
                &lt;template #item="{ element }"&gt;
                    &lt;div class="flex sm:flex-row flex-col items-start gap-3 p-4 border border-border-color rounded-lg bg-white"&gt;
                        &lt;img :src="element.avatar" class="size-10 rounded-full border border-border-color" alt="user-image"&gt;
                        &lt;div&gt;
                            &lt;h5 class="text-[16px] mb-1"&gt;&#123;&#123; element.name &#125;&#125;&lt;/h5&gt;
                            &lt;p class="text-xs mb-3"&gt;&#123;&#123; element.role &#125;&#125;&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    </code>
    </pre>
                        </div> <!-- end card -->

                        <div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
                            <div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
                                <h5>Move stuff between containers using handle</h5>
                                <button type="button" @click="toggleCode(2)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-xs border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
                                    <i class="icon icon-eye"></i>
                                    <span class="code-btn">{{ showCode(2) ? "Show Preview" : "Show Code" }}</span>
                                </button>
                            </div>
                            <div class="preview-content grid grid-cols-1 xl:grid-cols-2 gap-6" :class="{ hidden: showCode(2) }">
                                <div class="col-span-1 p-5 bg-light rounded-lg">
                                    <h5>Part 1</h5>
                                    <draggable v-model="handleListLeft" item-key="id" group="handle-dragula" handle=".dragula-handle" class="flex flex-col gap-4 mt-8" ghost-class="drag-ghost">
                                        <template #item="{ element }">
                                            <div class="flex items-center justify-between p-4 border border-border-color rounded-lg bg-white">
                                                <div class="flex flex-wrap items-center gap-2">
                                                    <img :src="element.avatar" class="size-10 rounded-full border border-border-color" alt="user-image">
                                                    <div>
                                                        <h5 class="text-[16px]">{{ element.name }}</h5>
                                                        <p class="text-xs">{{ element.role }}</p>
                                                    </div>
                                                </div>
                                                <i class="icon icon-move cursor-move dragula-handle"></i>
                                            </div>
                                        </template>
                                    </draggable>
                                </div>
                                <div class="col-span-1 p-5 bg-light rounded-lg">
                                    <h5>Part 2</h5>
                                    <draggable v-model="handleListRight" item-key="id" group="handle-dragula" handle=".dragula-handle" class="flex flex-col gap-4 mt-8" ghost-class="drag-ghost">
                                        <template #item="{ element }">
                                            <div class="flex items-center justify-between p-4 border border-border-color rounded-lg bg-white">
                                                <div class="flex flex-wrap items-center gap-2">
                                                    <img :src="element.avatar" class="size-10 rounded-full border border-border-color" alt="user-image">
                                                    <div>
                                                        <h5 class="text-[16px]">{{ element.name }}</h5>
                                                        <p class="text-xs">{{ element.role }}</p>
                                                    </div>
                                                </div>
                                                <i class="icon icon-move cursor-move dragula-handle"></i>
                                            </div>
                                        </template>
                                    </draggable>
                                </div>
                            </div>
    <pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(2) }">
    <button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
    <code class="language-html block w-full max-h-[400px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
    &lt;div class="preview-content grid grid-cols-1 xl:grid-cols-2 gap-6"&gt;
        &lt;div class="col-span-1 p-5 bg-light rounded-lg"&gt;
            &lt;h5&gt;Part 1&lt;/h5&gt;
            &lt;draggable v-model="handleListLeft" item-key="id" group="handle-dragula" handle=".dragula-handle" class="flex flex-col gap-4 mt-8"&gt;
                &lt;template #item="{ element }"&gt;
                    &lt;div class="flex items-center justify-between p-4 border border-border-color rounded-lg bg-white"&gt;
                        &lt;div class="flex items-center gap-2"&gt;
                            &lt;img :src="element.avatar" class="size-10 rounded-full border border-border-color" alt="user-image"&gt;
                            &lt;div&gt;
                                &lt;h5 class="text-[16px]"&gt;&#123;&#123; element.name &#125;&#125;&lt;/h5&gt;
                                &lt;p class="text-xs"&gt;&#123;&#123; element.role &#125;&#125;&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                        &lt;i class="icon icon-move cursor-move dragula-handle"&gt;&lt;/i&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;
        &lt;div class="col-span-1 p-5 bg-light rounded-lg"&gt;
            &lt;h5&gt;Part 2&lt;/h5&gt;
            &lt;draggable v-model="handleListRight" item-key="id" group="handle-dragula" handle=".dragula-handle" class="flex flex-col gap-4 mt-8"&gt;
                &lt;template #item="{ element }"&gt;
                    &lt;div class="flex items-center justify-between p-4 border border-border-color rounded-lg bg-white"&gt;
                        &lt;div class="flex items-center gap-2"&gt;
                            &lt;img :src="element.avatar" class="size-10 rounded-full border border-border-color" alt="user-image"&gt;
                            &lt;div&gt;
                                &lt;h5 class="text-[16px]"&gt;&#123;&#123; element.name &#125;&#125;&lt;/h5&gt;
                                &lt;p class="text-xs"&gt;&#123;&#123; element.role &#125;&#125;&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                        &lt;i class="icon icon-move cursor-move dragula-handle"&gt;&lt;/i&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
            &lt;/draggable&gt;
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
import VueDraggableNext from "vuedraggable";
const draggable = VueDraggableNext.default || VueDraggableNext;
import avatar01 from "@/assets/img/avatar/avatar-01.jpg";
import avatar02 from "@/assets/img/avatar/avatar-02.jpg";
import avatar03 from "@/assets/img/avatar/avatar-03.jpg";
import avatar04 from "@/assets/img/avatar/avatar-04.jpg";
import avatar05 from "@/assets/img/avatar/avatar-05.jpg";
import avatar06 from "@/assets/img/avatar/avatar-06.jpg";
import avatar07 from "@/assets/img/avatar/avatar-07.jpg";
import avatar08 from "@/assets/img/avatar/avatar-08.jpg";
import avatar09 from "@/assets/img/avatar/avatar-09.jpg";
import avatar10 from "@/assets/img/avatar/avatar-10.jpg";
import avatar12 from "@/assets/img/avatar/avatar-12.jpg";
import avatar13 from "@/assets/img/avatar/avatar-13.jpg";

export default {
    components: {
        draggable,
    },
    data() {
        return {
            showCodeState: {},
            simpleItems: [
                { id: 1, bg: "bg-primary" },
                { id: 2, bg: "bg-success" },
                { id: 3, bg: "bg-warning" },
                { id: 4, bg: "bg-danger" },
                { id: 5, bg: "bg-info" },
                { id: 6, bg: "bg-dark" },
            ],
            companyListLeft: [
                { id: 1, name: "Luoise K. Bond", role: "Founder & CEO", avatar: avatar01 },
                { id: 2, name: "James M. Short", role: "Software Engineer", avatar: avatar02 },
                { id: 3, name: "Susan J. Sander", role: "Web Designer", avatar: avatar03 },
            ],
            companyListRight: [
                { id: 4, name: "Dennis N. Cloutier", role: "Web Developer", avatar: avatar04 },
                { id: 5, name: "Gabriel J. Snyder", role: "Business Analyst", avatar: avatar05 },
                { id: 6, name: "Louie C. Mason", role: "Human Resources", avatar: avatar06 },
            ],
            handleListLeft: [
                { id: 1, name: "Luoise K. Bond", role: "Founder & CEO", avatar: avatar07 },
                { id: 2, name: "Dennis N. Cloutier", role: "Software Engineer", avatar: avatar08 },
                { id: 3, name: "Susan J. Sander", role: "Web Designer", avatar: avatar09 },
            ],
            handleListRight: [
                { id: 4, name: "Gabriel J. Snyder", role: "Web Developer", avatar: avatar10 },
                { id: 5, name: "James M. Short", role: "Business Analyst", avatar: avatar12 },
                { id: 6, name: "Louie C. Mason", role: "Human Resources", avatar: avatar13 },
            ],
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
