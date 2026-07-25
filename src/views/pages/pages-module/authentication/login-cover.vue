<template>
    <div class="min-h-screen bg-cover bg-center flex items-center justify-center p-4" style="background-image: linear-gradient(135deg, rgba(15,118,110,0.9), rgba(5,150,105,0.9))">
        <!-- Start Login -->
        <div class="bg-white border border-border-color rounded-md shadow-lg w-full max-w-md sm:p-8 p-5">
            <div class="text-center mb-6">
                <div class="invoice-logo block dark:hidden"> 
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <div class="invoice-logo-white hidden dark:block">
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <h1 class="text-xl font-bold text-title mb-1">Welcome Back!</h1>
                <p class="text-sm text-default mb-0">Sign in to your Dreams ERP account</p>
            </div>
            <form class="space-y-4" @submit.prevent="submitForm">
                <div>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Email Address</label>
                    <input type="email" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div>
                    <div class="flex justify-between mb-1">
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Password</label>
                        <router-link :to="all_routes.forgotPasswordCover" class="text-sm text-primary hover:underline">Forgot Password?</router-link>
                    </div>
                    <div class="relative">
						<input id="hs-toggle-password3" :type="showPassword ? 'text' : 'password'" class="form-input form-input-icon w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0 h-10" placeholder="************" value="">
						<span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
						<button type="button" data-hs-toggle-password="{ &quot;target&quot;: &quot;#hs-toggle-password3&quot; }" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden focus:text-blue-600" @click="toggleShow">
							<i
								:class="{
								'icon icon-eye': showPassword,
								'icon icon-eye-off': !showPassword,
								}"
							></i>
						</button> 
					</div>
                </div>
                <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Sign In</button>
                <p class="text-center text-sm text-default mb-0">Don't have account? <router-link :to="all_routes.registerCover" class="text-primary hover:underline">Sign up</router-link></p>
            </form>
        </div> 
        <!-- End Login -->
    </div>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const showPassword = ref(false);

        const submitForm = () => {
            router.push("/dashboard/hrm-dashboard");
        };

        const toggleShow = () => {
            showPassword.value = !showPassword.value;
        };

        return {
            showPassword,
            submitForm,
            toggleShow,
            all_routes,
        };
    },
}
</script>