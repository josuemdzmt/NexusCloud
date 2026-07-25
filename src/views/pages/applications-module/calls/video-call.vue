<template>
    <main>

        <div class="p-3 lg:py-6 lg:px-0">

            <!-- Header -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
                <h1 class="text-gray-900 text-xl font-bold mb-0">Video Call</h1>
                <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover hover:border-primary-hover cursor-pointer"><i class="ph ph-plus"></i> Add New</button>
            </div>

            <!-- Main video call wrapper -->
            <div class="bg-white border border-border-color rounded-md p-4 flex flex-col gap-4 sm:h-[calc(100vh-200px)]">

                <!-- Main speaker tile -->
                <div class="relative rounded-md overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 aspect-video flex items-center justify-center sm:h-[calc(100vh-364px)] h-full">
                    <!-- Background portrait placeholder (used avatar as illustrative full-bleed image) -->
                    <div class="absolute inset-0 bg-gradient-to-br from-warning-transparent via-orange-transparent to-warning-transparent"></div>
                    <div class="relative size-32 sm:size-40 rounded-full bg-gradient-to-br from-warning to-orange flex items-center justify-center text-white">
                        <i class="ph-duotone ph-user text-6xl sm:text-8xl"></i>
                    </div>
                    <!-- Top-left badges -->
                    <div class="absolute top-3 left-3 flex items-center gap-2">
                        <span class="bg-white text-gray-900 text-sm font-medium px-2 py-1 rounded-md shadow-sm">Rachael Thomas</span>
                        <span class="bg-white text-gray-900 text-sm font-medium px-2 py-1 rounded-md shadow-sm">01:45</span>
                    </div>
                    <!-- Top-right fullscreen -->
                    <button type="button" class="absolute top-3 right-3 size-8 rounded-md bg-white text-gray-900 inline-flex items-center justify-center shadow-sm hover:bg-light cursor-pointer"><i class="ph ph-arrows-out"></i></button>
                </div>

                <!-- Participant strip -->
                <div class="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-3">
                    <div class="relative lg:aspect-4/2 aspect-[4/3] rounded-md overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                        <i class="ph-duotone ph-user text-white text-5xl opacity-60"></i>
                        <span class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap">Ethan Cooper</span>
                    </div>
                    <div class="relative lg:aspect-4/2 aspect-[4/3] rounded-md overflow-hidden bg-gradient-to-br from-purple to-purple-hover flex items-center justify-center">
                        <i class="ph-duotone ph-user text-white text-5xl opacity-60"></i> 
                        <span class="absolute top-2 left-2 size-6 rounded-full bg-white/90 flex items-center justify-center"><i class="ph-fill ph-waveform text-purple"></i></span>
                        <span class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap">Sophia Carter</span>
                    </div>
                    <div class="relative lg:aspect-4/2 aspect-[4/3] rounded-md overflow-hidden bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                        <i class="ph-duotone ph-user text-white text-5xl opacity-60"></i>
                        <span class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap">Daniel Brooks</span>
                    </div>
                    <div class="relative lg:aspect-4/2 aspect-[4/3] rounded-md overflow-hidden bg-gradient-to-br from-pink to-pink-hover flex items-center justify-center">
                        <i class="ph-duotone ph-user text-white text-5xl opacity-60"></i>
                        <span class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap">Emily Hayes</span>
                    </div>
                    <div class="relative lg:aspect-4/2 aspect-[4/3] rounded-md overflow-hidden bg-gradient-to-br from-danger to-danger-hover flex items-center justify-center">
                        <i class="ph-duotone ph-user text-white text-5xl opacity-60"></i>
                        <span class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[11px] font-medium px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap">Olivia Bennett</span>
                    </div>
                </div>

                <!-- Control bar -->
                <div class="border-t border-border-color pt-4 flex items-center justify-center gap-3">
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
