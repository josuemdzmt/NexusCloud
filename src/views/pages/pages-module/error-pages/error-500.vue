<template>
    <div class="bg-light min-h-screen flex items-center justify-center p-4">
    
        <!-- Start Content -->
        <div class="text-center"> 
            <i class="ph-duotone ph-x-circle text-9xl text-danger mb-4"></i>
            <h1 class="text-9xl font-bold text-title mb-2">500</h1>
            <h2 class="text-xl font-semibold text-title mb-2">Server Error</h2>
            <p class="text-sm text-default mb-6">Something went wrong on our end. Please try again later.</p> 
            <router-link :to="all_routes.hrmDashboard" class="inline-flex items-center gap-2 bg-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">
                <i class="ph ph-house"></i> Back to Home
            </router-link> 
        </div> 
        <!-- End Content -->
        
    </div>
</template>

<script>
import { all_routes } from '@/router/all_routes';
export default {
    setup() {

        return {
            all_routes
        }
    }
}
</script>