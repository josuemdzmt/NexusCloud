<template>
    <div class="bg-light min-h-screen">

        <!-- Start Forgot Password Illustration -->
        <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div class="bg-linear-to-br from-primary to-success flex items-center justify-center p-8 hidden lg:flex"> 
                <div class="text-center text-white"><i class="ph-duotone ph-key text-8xl mb-4"></i>
                    <h1 class="text-2xl font-bold mb-2 text-white">Recover Access</h1>
                    <p class="text-sm opacity-90 text-white">We'll help you get back into your account.</p>
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
                        <h2 class="text-xl font-bold text-title mb-1">Forgot Password?</h2>
                        <p class="text-sm text-default mb-0">Enter your email for reset link</p>
                    </div>
                    <form class="space-y-4" @submit.prevent="submitForm">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Email</label>
                            <input type="email" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                        </div>
                        <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Send Reset Link</button>
                        <p class="text-center text-sm text-default mb-0"><router-link :to="all_routes.loginIllustration" class="text-primary hover:underline">← Back to Sign In</router-link></p>
                    </form>
                </div>
            </div>
        </div> 
        <!-- End Forgot Password Illustration -->

    </div>
</template>


<script>
import { all_routes } from '@/router/all_routes';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const submitForm = () => {
            router.push("/email-verification-illustration");
        };

        return {
            submitForm,
            all_routes,
        };
    },
}
</script>
