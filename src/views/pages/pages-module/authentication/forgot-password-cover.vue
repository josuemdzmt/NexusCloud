<template>
    <div class="min-h-screen bg-cover bg-center flex items-center justify-center p-4" style="background-image: linear-gradient(135deg, rgba(15,118,110,0.9), rgba(5,150,105,0.9))">
	
        <!-- Start Forgot Password -->
        <div class="bg-white border border-border-color rounded-md shadow-lg w-full max-w-md sm:p-8 p-5">
            <div class="text-center mb-6">
                <div class="invoice-logo block dark:hidden"> 
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <div class="invoice-logo-white hidden dark:block">
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <h1 class="text-xl font-bold text-title mb-1">Forgot Password?</h1>
                <p class="text-sm text-default mb-0">Enter email for reset link</p>
            </div>
            <form class="space-y-4" @submit.prevent="submitForm">
                <div>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Email</label>
                    <input type="email" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Send Reset Link</button>
                <p class="text-center text-sm text-default mb-0"><router-link :to="all_routes.loginCover" class="text-primary hover:underline">← Back to Sign In</router-link></p>
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
            router.push("/email-verification-cover");
        };

        return {
            submitForm,
            all_routes,
        };
    },
}
</script>
