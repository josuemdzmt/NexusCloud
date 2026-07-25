<template>
    <div class="bg-light min-h-screen flex items-center justify-center p-4">

        <!-- Start Forgot Password -->
        <div class="bg-white border border-border-color rounded-md shadow-sm w-full max-w-md sm:p-8 p-5">
            <div class="text-center mb-6">
                <div class="invoice-logo block dark:hidden"> 
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <div class="invoice-logo-white hidden dark:block">
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <h1 class="text-xl font-bold text-title mb-1">Forgot Password?</h1>
                <p class="text-sm text-default mb-0">Enter your email to receive a reset link</p>
            </div>
            <form class="space-y-4" @submit.prevent="submitForm">
                <div>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Email Address</label>
                    <input type="email" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="you@example.com">
                </div>
                <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Send Reset Link</button>
                <p class="text-center text-sm text-default mb-0"><router-link :to="all_routes.login" class="text-primary hover:underline">← Back to Sign In</router-link></p>
            </form>
        </div> 
        <!-- End Forgot Password -->

    </div>
</template>


<script>
import { all_routes } from '@/router/all_routes';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const submitForm = () => {
            router.push("/email-verification");
        };

        return {
            submitForm,
            all_routes,
        };
    },
}
</script>
