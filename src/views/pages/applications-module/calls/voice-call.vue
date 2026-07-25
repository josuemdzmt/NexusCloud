<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Voice Call</h1>
                <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer"><i class="ph ph-plus"></i> Add New</button>
            </div>

            <div class="bg-white border border-border-color rounded-md p-4 h-[calc(100vh-200px)]">   
                <!-- Caller bar -->
                <div class="flex items-center justify-between gap-3 mb-4">
                    <div class="flex items-center gap-2 min-w-0">
                        <img src="@/assets/img/avatar/avatar-04.jpg" class="size-10 rounded-full border border-border-color shrink-0" alt="user">
                        <div class="min-w-0">
                            <p class="text-sm font-semibold text-title truncate mb-0">Edward Lietz</p>
                            <p class="text-[11px] text-default mb-0">+22 555 345 11</p>
                        </div>
                    </div>
                    <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900  focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"> <i class="icon-ellipsis-vertical font-normal"></i></button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1" role="menu" aria-orientation="vertical" tabindex="-1">
                            <div class="p-2 space-y-1">
                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    <i class="icon-plus"></i> Add Participant 
                                </a>
                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    <i class="icon-octagon-pause"></i> Hold Call
                                </a>
                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    <i class="icon-calendar-sync"></i> Transfer Call
                                </a>
                                <a class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-900 hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white" href="#">
                                    <i class="icon-phone-off"></i> End Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Voice call canvas -->
                <div class="relative rounded-md overflow-hidden  bg-light flex items-center justify-center h-[calc(100vh-364px)]">
                    <!-- Caller avatar centered -->
                    <div class="size-40 sm:size-48 rounded-full bg-white border-2 border-white shadow-lg overflow-hidden">
                        <img src="@/assets/img/avatar/avatar-04.jpg" class="size-full object-cover" alt="user">
                    </div>

                    <!-- Timer below avatar -->
                    <span class="absolute left-1/2 -translate-x-1/2 bottom-3 bg-white border border-border-color text-gray-900 text-sm font-medium px-3 py-1 rounded-md shadow-sm">01:45</span>

                    <!-- Self thumbnail bottom-right -->
                    <div class="absolute bottom-3 right-3 size-10 sm:size-16 rounded-md overflow-hidden border-2 border-white shadow-md">
                        <img src="@/assets/img/avatar/avatar-05.jpg" class="size-full object-cover" alt="user">
                    </div>
                </div>

                <!-- Control bar -->
                <div class="border-t border-border-color pt-4 mt-4 flex items-center justify-center gap-3">
                    <button type="button" class="size-7 sm:size-10 rounded-full bg-light text-gray-900 inline-flex items-center justify-center hover:bg-light-hover cursor-pointer" aria-label="Mute"><i class="ph-duotone ph-microphone"></i></button>
                    <button type="button" class="size-7 sm:size-10 rounded-full bg-light text-gray-900 inline-flex items-center justify-center hover:bg-light-hover cursor-pointer" aria-label="Video"><i class="ph-duotone ph-video-camera"></i></button>
                    <button type="button" class="size-7 sm:size-10 rounded-full bg-light text-gray-900 inline-flex items-center justify-center hover:bg-light-hover cursor-pointer" aria-label="Chat"><i class="ph-duotone ph-chat-circle"></i></button>
                    <button type="button" class="size-8 sm:size-11 rounded-full bg-danger text-white inline-flex items-center justify-center hover:bg-danger-hover cursor-pointer" aria-label="End call"><i class="ph-fill ph-phone-slash"></i></button>
                    <button type="button" class="size-7 sm:size-10 rounded-full bg-light text-gray-900 inline-flex items-center justify-center hover:bg-light-hover cursor-pointer" aria-label="Volume"><i class="ph-duotone ph-speaker-high"></i></button>
                    <button type="button" class="size-7 sm:size-10 rounded-full bg-light text-gray-900 inline-flex items-center justify-center hover:bg-light-hover cursor-pointer" aria-label="Emoji"><i class="ph-duotone ph-smiley"></i></button>
                    <button type="button" class="size-7 sm:size-10 rounded-full bg-light text-gray-900 inline-flex items-center justify-center hover:bg-light-hover cursor-pointer" aria-label="Screen share"><i class="ph-duotone ph-monitor-arrow-up"></i></button>
                </div>
            </div>

        </div>

    </main>
</template>

<script>
import { all_routes } from '@/router/all_routes';

export default {
    setup() {
        return { all_routes };
    },
}
</script>
