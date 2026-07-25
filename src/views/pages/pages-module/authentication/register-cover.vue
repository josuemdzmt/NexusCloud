<template>
    <div class="min-h-screen bg-cover bg-center flex items-center justify-center p-4" style="background-image: linear-gradient(135deg, rgba(15,118,110,0.9), rgba(5,150,105,0.9))">
	
        <!-- Start Register -->
        <div class="bg-white border border-border-color rounded-md shadow-lg w-full max-w-md sm:p-8 p-5">
            <div class="text-center mb-6">
                <div class="invoice-logo block dark:hidden"> 
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <div class="invoice-logo-white hidden dark:block">
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <h1 class="text-xl font-bold text-title mb-1">Create Account</h1>
            </div>
            <form class="space-y-4" @submit.prevent="submitForm">
                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">First Name</label>
                        <input type="text" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                    <div>
                        <label class="text-sm font-semibold text-gray-900 mb-1 block">Last Name</label>
                        <input type="text" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                    </div>
                </div>
                <div>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Email</label>
                    <input type="email" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                </div>
                <div>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Password</label>
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
                <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Create Account</button>
                <p class="text-center text-sm text-default mb-0">Already have account? <router-link :to="all_routes.loginCover" class="text-primary hover:underline">Sign in</router-link></p>
            </form>
        </div> 
        <!-- End Register -->

    </div>
</template>

<script>
import { ref } from 'vue';
import { all_routes } from '@/router/all_routes';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const showPassword = ref(false);

        const submitForm = () => {
            router.push("/login-cover");
        };

        const toggleShow = () => {
            showPassword.value = !showPassword.value;
        };

        return {
            submitForm,
            all_routes,
            showPassword,
            toggleShow,
        };
    },
}
</script>
