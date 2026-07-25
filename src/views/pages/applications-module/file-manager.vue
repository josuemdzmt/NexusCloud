<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl max-lg:text-lg font-bold mb-0">File Manager</h1>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-12 gap-3 w-full">

                <!-- Sidebar -->
                <div class="xl:col-span-3">
                    <div class="bg-white border border-border-color rounded-md p-4 mb-3">
                        <div class="flex items-center gap-2 pb-4 border-b border-border-color mb-4">
                            <img src="@/assets/img/avatar/avatar-03.jpg" class="size-10 rounded-full border border-border-color shrink-0" alt="user">
                            <div class="min-w-0">
                                <p class="text-sm font-semibold text-title truncate mb-0">James Hong</p>
                                <p class="text-[11px] text-default truncate mb-0">james@example.com</p>
                            </div>
                        </div>
                        <button type="button" class="btn w-full bg-primary text-white border border-primary inline-flex items-center justify-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer mb-4" data-hs-overlay="#file-upload-modal">
                            <i class="ph-duotone ph-plus-circle"></i> Create Event
                        </button>
                        <div class="space-y-1">
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md bg-light-500 text-primary text-sm font-semibold border border-border-color"><i class="ph-duotone ph-folders"></i> All Folder / Files</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-cloud"></i> Drive</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-cube"></i> Dropbox</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-share-network"></i> Shared with Me</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-file-text"></i> Document</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-clock-counter-clockwise"></i> Recent File</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-star"></i> Important</a>
                            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-md text-default text-sm hover:bg-light"><i class="ph-duotone ph-image"></i> Media</a>
                        </div>
                    </div>

                    <!-- Upgrade card -->
                    <div class="bg-white border border-border-color rounded-md p-4 text-center">
                        <div class="size-32 mx-auto mb-3 rounded-md bg-gradient-to-br from-info-transparent to-purple-transparent flex items-center justify-center">
                            <i class="ph-duotone ph-rocket-launch text-info text-6xl"></i>
                        </div>
                        <p class="text-sm font-semibold text-title mb-1">Upgrade To PRO</p>
                        <p class="text-[11px] text-default mb-0">Unlock Pro for faster transfers, stronger security, and unlimited storage.</p>
                    </div>
                </div>

                <div class="xl:col-span-9 space-y-3">

                    <!-- Quick Access -->
                    <div>
                        <h2 class="text-sm font-semibold text-title mb-3">Quick Access</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div class="bg-white border border-border-color rounded-md p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <div class="flex items-center gap-2">
                                        <i class="ph-fill ph-cube text-info text-2xl"></i>
                                        <p class="text-sm font-semibold text-title mb-0">Dropbox</p>
                                    </div>
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-eye"></i> Preview
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-copy"></i> Duplicate
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-arrows-out-cardinal"></i> Move
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-user-plus"></i> Invite
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-danger focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-trash"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-1 bg-light-500 rounded-full overflow-hidden mb-3">
                                    <div class="h-full bg-danger rounded-full" style="width: 9.3%"></div>
                                </div>
                                <div class="flex items-center justify-between text-[11px]">
                                    <span class="text-default">1454 Files</span><span class="text-default">28GB / 300GB</span>
                                </div>
                            </div>

                            <div class="bg-white border border-border-color rounded-md p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <div class="flex items-center gap-2">
                                                <i class="ph-fill ph-google-logo text-success text-2xl"></i>
                                        <p class="text-sm font-semibold text-title mb-0">Google Drive</p>
                                    </div>
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-eye"></i> Preview
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-copy"></i> Duplicate
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-arrows-out-cardinal"></i> Move
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-user-plus"></i> Invite
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-danger focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-trash"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-1 bg-light-500 rounded-full overflow-hidden mb-3">
                                    <div class="h-full bg-pink rounded-full" style="width: 37%"></div>
                                </div>
                                <div class="flex items-center justify-between text-[11px]">
                                    <p class="text-default">200 Files</p>
                                    <p class="text-default">24GB / 65GB</p>
                                </div>
                            </div>

                            <div class="bg-white border border-border-color rounded-md p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <div class="flex items-center gap-2">
                                        <i class="ph-fill ph-cloud text-default text-2xl"></i>
                                        <p class="text-sm font-semibold text-title mb-0">Cloud Storage</p>
                                    </div>
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-eye"></i> Preview
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-copy"></i> Duplicate
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-arrows-out-cardinal"></i> Move
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-user-plus"></i> Invite
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-danger focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="ph ph-trash"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="h-1 bg-light-500 rounded-full overflow-hidden mb-3">
                                    <div class="h-full bg-dark rounded-full" style="width: 90%"></div>
                                </div>
                                <div class="flex items-center justify-between text-[11px]">
                                    <span class="text-default">144 Files</span><span class="text-default">54GB / 60GB</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Recent Files -->
                    <div>
                        <h2 class="text-sm font-semibold text-title mb-3">Recent Files</h2>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <div class="bg-white border border-border-color rounded-md p-4">
                                <div class="flex items-start justify-between mb-3">
                                    <div class="size-10 rounded bg-info-transparent flex items-center justify-center">
                                        <i class="ph-fill ph-file-doc text-info text-2xl"></i>
                                    </div>
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-sm font-semibold text-title mb-1">Final Change.doc</p>
                                <div class="flex items-center gap-2 text-[11px] text-default">
                                    <span>26 Jul 2025</span><span>8MB</span>
                                </div>
                            </div>

                            <div class="bg-white border border-border-color rounded-md p-4">
                                <div class="flex items-start justify-between mb-3">
                                    <div class="size-10 rounded bg-danger-transparent flex items-center justify-center">
                                        <i class="ph-fill ph-file-pdf text-danger text-2xl"></i>
                                    </div>
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-sm font-semibold text-title mb-1">Marklist_final.pdf</p>
                                <div class="flex items-center gap-2 text-[11px] text-default">
                                    <span>25 Jul 2025</span><span>6MB</span>
                                </div>
                            </div>

                            <div class="bg-white border border-border-color rounded-md p-4">
                                <div class="flex items-start justify-between mb-3">
                                    <div class="size-10 rounded bg-success-transparent flex items-center justify-center">
                                        <i class="ph-fill ph-image text-success text-2xl"></i>
                                    </div>
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-sm font-semibold text-title mb-1">Nature_tree.png</p>
                                <div class="flex items-center gap-2 text-[11px] text-default">
                                    <span>24Jul 2025</span><span>8MB</span>
                                </div>
                            </div>

                            <div class="bg-white border border-border-color rounded-md p-4">
                                <div class="flex items-start justify-between mb-3">
                                    <div class="size-10 rounded bg-warning-transparent flex items-center justify-center">
                                        <i class="ph-fill ph-folder text-warning text-2xl"></i>
                                    </div>
                                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            <i class="icon-ellipsis-vertical font-normal"></i>
                                        </button>
                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                            <div class="p-2 space-y-1">
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-pencil-line"></i> Edit
                                                </a>
                                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                    <i class="icon-trash-2"></i> Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <p class="text-sm font-semibold text-title mb-1">Group Photos IV</p>
                                <div class="flex items-center gap-2 text-[11px] text-default">
                                    <p>23 Jul 2025</p>
                                    <p>10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Files -->
                    <div class="bg-white border border-border-color rounded-md p-4 pb-1.5">
                        <div class="flex items-center justify-between mb-3">
                            <p class="text-sm font-semibold text-title mb-0">Files</p>
                            <a href="#" class="btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-1 hover:bg-primary hover:text-white">View All</a>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="text-sm text-default border-b border-border-color">
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Name</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Size</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Type</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Modified</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900">Share</th>
                                        <th class="text-left py-2 px-2 font-semibold text-gray-900"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-border-color last:border-0">
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-2">
                                                <i class="ph-fill ph-file-doc text-info"></i>
                                                <span class="text-sm font-semibold text-title">Secret</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default">7.6 MB</td>
                                        <td class="py-2.5 px-2 text-sm text-default">Doc</td>
                                        <td class="py-2.5 px-2 text-sm text-default">17 Jun 2025, 09:00 AM</td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center -space-x-2">
                                                <img src="@/assets/img/avatar/avatar-03.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                                <img src="@/assets/img/avatar/avatar-05.jpg" class="size-6 rounded-full border-2 border-white" alt="user"><span class="size-6 rounded-full bg-dark text-white text-[9px] flex items-center justify-center border-2 border-white">+5</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-1">
                                                <button type="button" class="size-7 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon"><i class="ph ph-star"></i></button>
                                                <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                    <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                        <i class="icon-ellipsis-vertical font-normal"></i>
                                                    </button>
                                                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                        <div class="p-2 space-y-1">
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-pencil-line"></i> Edit
                                                            </a>
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-trash-2"></i> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color last:border-0">
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-2">
                                                <i class="ph-fill ph-file-pdf text-danger"></i>
                                                <span class="text-sm font-semibold text-title">Sophie Headrick</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default">7.4 MB</td>
                                        <td class="py-2.5 px-2 text-sm text-default">PDF</td>
                                        <td class="py-2.5 px-2 text-sm text-default">10 Jun 2025, 10:30 AM</td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center -space-x-2">
                                                <img src="@/assets/img/avatar/avatar-04.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                                <img src="@/assets/img/avatar/avatar-06.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-1">
                                                <button type="button" class="size-7 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon"><i class="ph ph-star"></i></button>
                                                <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                    <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                        <i class="icon-ellipsis-vertical font-normal"></i>
                                                    </button>
                                                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                        <div class="p-2 space-y-1">
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-pencil-line"></i> Edit
                                                            </a>
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-trash-2"></i> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color last:border-0">
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-2">
                                                <i class="ph-fill ph-image text-success"></i>
                                                <span class="text-sm font-semibold text-title">Gallery</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default">6.1 MB</td>
                                        <td class="py-2.5 px-2 text-sm text-default">Image</td>
                                        <td class="py-2.5 px-2 text-sm text-default">22 May 2025, 01:15 PM</td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center -space-x-2">
                                                <img src="@/assets/img/avatar/avatar-05.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                                <img src="@/assets/img/avatar/avatar-07.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                                <img src="@/assets/img/avatar/avatar-08.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-1">
                                                <button type="button" class="size-7 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon"><i class="ph ph-star"></i></button>
                                                <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                    <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                        <i class="icon-ellipsis-vertical font-normal"></i>
                                                    </button>
                                                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                        <div class="p-2 space-y-1">
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-pencil-line"></i> Edit
                                                            </a>
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-trash-2"></i> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color last:border-0">
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-2">
                                                <i class="ph-fill ph-folder text-warning"></i>
                                                <span class="text-sm font-semibold text-title">Doris crowley</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default">5.2 MB</td>
                                        <td class="py-2.5 px-2 text-sm text-default">Folder</td>
                                        <td class="py-2.5 px-2 text-sm text-default">15 May 2025, 11:30 AM</td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center -space-x-2">
                                                <img src="@/assets/img/avatar/avatar-06.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-1">
                                                <button type="button" class="size-7 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon"><i class="ph ph-star"></i></button>
                                                <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                    <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                        <i class="icon-ellipsis-vertical font-normal"></i>
                                                    </button>
                                                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                        <div class="p-2 space-y-1">
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-pencil-line"></i> Edit
                                                            </a>
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-trash-2"></i> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-border-color last:border-0">
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-2">
                                                <i class="ph-fill ph-file-text text-success"></i>
                                                <span class="text-sm font-semibold text-title">Cheat_codez</span>
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2 text-sm text-default">8 MB</td>
                                        <td class="py-2.5 px-2 text-sm text-default">Xml</td>
                                        <td class="py-2.5 px-2 text-sm text-default">30 Apr 2025, 12:20 PM</td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center -space-x-2">
                                                <img src="@/assets/img/avatar/avatar-07.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                                <img src="@/assets/img/avatar/avatar-09.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                                <img src="@/assets/img/avatar/avatar-10.jpg" class="size-6 rounded-full border-2 border-white" alt="user">
                                            </div>
                                        </td>
                                        <td class="py-2.5 px-2">
                                            <div class="flex items-center gap-1">
                                                <button type="button" class="size-7 rounded inline-flex items-center justify-center text-default hover:bg-light cursor-pointer fav-icon"><i class="ph ph-star"></i></button>
                                                <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                                                    <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                        <i class="icon-ellipsis-vertical font-normal"></i>
                                                    </button>
                                                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                                                        <div class="p-2 space-y-1">
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-pencil-line"></i> Edit
                                                            </a>
                                                            <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-danger hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                                                <i class="icon-trash-2"></i> Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </main>

    <file-manager-modal></file-manager-modal>
</template>

<script>
export default {
    data() {
        return {

        };
    },
}
</script>
