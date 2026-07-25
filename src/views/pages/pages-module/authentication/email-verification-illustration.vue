<template>
    <div class="bg-light min-h-screen">

        <!-- Start Email Verification Illustration -->
        <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div class="bg-gradient-to-br from-primary to-success flex items-center justify-center p-8 hidden lg:flex">
                <div class="text-center text-white"><i class="ph-duotone ph-shield-check text-8xl mb-4"></i>
                    <h1 class="text-2xl font-bold mb-2 text-white">Secure Verification</h1>
                    <p class="text-sm opacity-90 text-white">Verify your identity to continue.</p>
                </div>
            </div>
            <div class="flex items-center justify-center p-8">
                <div class="w-full max-w-md">
                    <div class="text-center mb-6">
                        <div class="invoice-logo block dark:hidden"> 
                            <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                        </div>
                        <div class="invoice-logo-white hidden dark:block">
                            <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                        </div>
                        <h2 class="text-xl font-bold text-title mb-1">Verify Your Email</h2>
                        <p class="text-sm text-default mb-0">Enter the 6-digit code</p>
                    </div>
                    <form class="space-y-4" @submit.prevent="submitForm">
                        <div class="grid grid-cols-6 gap-2">
                            <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                            <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                            <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                            <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                            <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                            <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                        </div>
                        <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Verify Code</button>
                        <p class="text-center text-sm text-default mb-0">Didn't receive a code? <router-link :to="all_routes.forgotPasswordIllustration" class="text-primary hover:underline">Resend</router-link></p>
                    </form>
                </div>
            </div>
        </div> 
        <!-- End Email Verification Illustration -->

    </div>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const submitForm = () => {
            router.push("/reset-password-illustration");
        };

        return {
            submitForm,
            all_routes,
        };
    },
}
</script>
