<template>
    <div class="bg-light min-h-screen flex items-center justify-center p-4">

        <!-- Start Email Verification -->
        <div class="bg-white border border-border-color rounded-md shadow-sm w-full max-w-md sm:p-8 p-5">
            <div class="text-center mb-6">
                <div class="invoice-logo block dark:hidden"> 
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <div class="invoice-logo-white hidden dark:block">
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <h1 class="text-xl font-bold text-title mb-1">Verify Your Email</h1>
                <p class="text-sm text-default mb-0">Enter the 6-digit code sent to your email</p>
            </div>
            <form class="space-y-4" @submit.prevent="submitForm">
                <div class="grid grid-cols-6 gap-2">
                    <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                    <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                    <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                    <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                    <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0">
                    <input type="text" maxlength="1" class="aspect-square text-center text-lg border border-border-color rounded-md bg-white focus:outline-none focus:border-primary focus:ring-0"> </div>
                <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Verify Code</button>
                <p class="text-center text-sm text-default mb-0">Didn't receive a code? <a href="#" class="text-primary hover:underline">Resend</a></p>
            </form>
        </div> 
        <!-- End Email Verification -->

    </div>
</template>


<script>
import { all_routes } from '@/router/all_routes';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const submitForm = () => {
            router.push("/reset-password");
        };

        return {
            submitForm,
            all_routes,
        };
    },
}
</script>
