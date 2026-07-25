<template>
			<main>

                <div class="p-3 lg:py-6 lg:px-0">
					
                    <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                        <h1 class="text-gray-900 text-xl font-bold mb-0">Form Editors</h1>
                    </div>

					<!-- State grid -->
					<div class="grid grid-cols-1 gap-6">
						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h2 class="text-lg max-lg:text-[17px]">Quill Editor</h2>
								<button type="button" @click="toggleCode(0)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(0) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div>
							<div class="preview-content" :class="{ hidden: showCode(0) }">
								<div class="h-55!" id="snow-editor">
									<div class="editor pages-editor">
										<div class="editor three-line">
											<div class="editor-container">
												<div ref="editorRef" class="quill-editor">
													<h3><span class="ql-size-large">Hello World!</span></h3>
													<p><br></p>
													<h3>This is an simple editable area.</h3>
													<p><br></p>
													<ol>
														<li>
															Select a text to reveal the toolbar.
														</li>
														<li>
															Edit rich document on-the-fly, so elastic!
														</li>
													</ol>
													<p><br></p>
													<p>
														End of simple area
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>  
							</div>  
		<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(0) }">
		<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
		<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
		&lt;div class="h-50!" id="snow-editor"&gt;
			&lt;h3&gt;&lt;span class="ql-size-large"&gt;Hello World!&lt;/span&gt;&lt;/h3&gt;
			&lt;p&gt;&lt;br&gt;&lt;/p&gt;
			&lt;h3&gt;This is an simple editable area.&lt;/h3&gt;
			&lt;p&gt;&lt;br&gt;&lt;/p&gt;
			&lt;ol&gt;
				&lt;li&gt;Select a text to reveal the toolbar.&lt;/li&gt;
				&lt;li&gt;Edit rich document on-the-fly, so elastic!&lt;/li&gt;
			&lt;/ol&gt;
			&lt;p&gt;&lt;br&gt;&lt;/p&gt;
			&lt;p&gt;End of simple area&lt;/p&gt;
		&lt;/div&gt;  
		</code>
		</pre>
						</div> <!-- end col -->  

						<div class="preview-card bg-white/50 rounded-md border border-border-color p-5">
							<div class="pb-5 mb-5 flex items-center xxl:gap-0 gap-3 justify-between flex-wrap border-b border-border-color">
								<h2 class="text-lg max-lg:text-[17px]">Quill Bubble Editor</h2>
								<button type="button" @click="toggleCode(1)" data-toggle="code" class="flex items-center gap-2 border py-1.5 px-2.5 text-sm border-border-color font-semibold rounded-md bg-light-200 dark:bg-gray-100 focus:bg-primary focus:border-primary focus:text-white text-gray-900 dark:text-dark dark:focus:text-dark">
									<i class="icon icon-eye"></i>
									<span class="code-btn">{{ showCode(1) ? "Show Preview" : "Show Code" }}</span>
								</button>
							</div> 
							<div class="editor pages-editor">
								<div class="editor three-line">
									<div class="editor-container">
										<div ref="editorRefOne" class="quill-editor">
											<div id="bubble-editor" class="preview-content border border-border-color h-72! rounded-md" :class="{ hidden: showCode(1) }">
												<h3><span class="ql-size-large">Hello World!</span></h3>
												<p><br></p>
												<h3>This is an simple editable area.</h3>
												<p><br></p>
												<ol>
													<li>
														Select a text to reveal the toolbar.
													</li>
													<li>
														Edit rich document on-the-fly, so elastic!
													</li>
												</ol>
												<p><br></p>
												<p>
													End of simple area
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>  
		<pre class="code relative mt-4 p-0! bg-dark text-gray-100 text-sm overflow-hidden" :class="{ hidden: !showCode(1) }">
		<button type="button" data-copy class="sticky float-end top-3 right-3 z-10 bg-gray-800 text-white text-sm px-2.5 py-1.5 rounded-md hover:bg-gray-700 flex items-center gap-1"><i class="icon icon-copy"></i><span>Copy</span></button>
		<code class="language-html block w-full max-h-[250px] mb-[-42px] mt-[-10px]! overflow-auto p-4 pr-16">
		&lt;div id="bubble-editor" class="border border-border-color h-65! rounded-md"&gt;
			&lt;h3&gt;&lt;span class="ql-size-large"&gt;Hello World!&lt;/span&gt;&lt;/h3&gt;
			&lt;p&gt;&lt;br&gt;&lt;/p&gt;
			&lt;h3&gt;This is an simple editable area.&lt;/h3&gt;
			&lt;p&gt;&lt;br&gt;&lt;/p&gt;
			&lt;ol&gt;
				&lt;li&gt;Select a text to reveal the toolbar.&lt;/li&gt;
				&lt;li&gt;Edit rich document on-the-fly, so elastic!&lt;/li&gt;
			&lt;/ol&gt;
			&lt;p&gt;&lt;br&gt;&lt;/p&gt;
			&lt;p&gt; End of simple area &lt;/p&gt;
		&lt;/div&gt;
		</code>
		</pre>
						</div> <!-- end col -->
					</div> 
					<!-- End grid --> 
                </div>
            </main> 
</template>
<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
    data() {
        return {
            showCodeState: {},
			content: "",
        };
    },
	mounted() {
		this.initQuill();
	},
    methods: {
        showCode(index) {
            return !!this.showCodeState[index];
        },
        toggleCode(index) {
            this.showCodeState[index] = !this.showCodeState[index];
        },
		initQuill() {
			const quill = new Quill(this.$refs.editorRef, {
				theme: "snow",
				modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					["bold", "italic", "underline"],
					["image", "code-block"],
				],
				},
			});
			const quillone = new Quill(this.$refs.editorRefOne, {
				theme: "snow",
				modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					["bold", "italic", "underline"],
					["image", "code-block"],
				],
				},
			});

			quill.on("text-change", () => {
				this.content = quill.root.innerHTML;
			});
			quillone.on("text-change", () => {
				this.content = quillone.root.innerHTML;
			});
		},
    },
};
</script>
