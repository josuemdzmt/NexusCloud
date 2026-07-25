<template>
    <div class="bg-light min-h-screen flex items-center justify-center p-4">

        <div class="text-center max-w-lg comming-soon-pg"> <i class="ph-duotone ph-rocket-launch text-9xl text-primary mb-4"></i>
            <h1 class="text-4xl font-bold text-title mb-2">Coming Soon</h1>
            <p class="text-sm text-default mb-6">We're working hard to bring you something amazing. Stay tuned!</p>
            <div class="grid grid-cols-4 gap-3 mb-6">
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-2xl font-bold text-title mb-0 days">15</h2>
                    <p class="text-sm text-default mb-0">Days</p>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-2xl font-bold text-title mb-0 hours ">08</h2>
                    <p class="text-sm text-default mb-0">Hours</p>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-2xl font-bold text-title mb-0 minutes">42</h2>
                    <p class="text-sm text-default mb-0">Mins</p>
                </div>
                <div class="bg-white border border-border-color rounded-md p-4">
                    <h2 class="text-2xl font-bold text-title mb-0 seconds">18</h2>
                    <p class="text-sm text-default mb-0">Secs</p>
                </div>
            </div>
            <div class="flex gap-2 max-w-md mx-auto flex-wrap sm:flex-nowrap">
                <input type="email" class="flex-1 px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Your email">
                <button class="bg-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer w-full sm:w-auto">Notify Me</button>
            </div>
        </div>

    </div>
</template>