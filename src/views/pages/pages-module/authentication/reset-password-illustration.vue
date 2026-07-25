<template>
    <div class="bg-light min-h-screen">

        <!-- Start Reset Password Illustration -->
        <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            <div class="bg-linear-to-br from-primary to-success flex items-center justify-center p-8 hidden lg:flex">
                <div class="text-center text-white"><i class="ph-duotone ph-lock-key text-8xl mb-4"></i>
                    <h1 class="text-2xl font-bold mb-2 text-white">Reset Your Password</h1>
                    <p class="text-sm opacity-90 text-white">Choose a strong, secure password.</p>
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
                        <h2 class="text-xl font-bold text-title mb-1">Reset Password</h2>
                    </div>
                    <form class="space-y-4" @submit.prevent="submitForm"> 
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">New Password</label>
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
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 block">Confirm New Password</label>
                            <div class="relative">
                                <input id="hs-toggle-password3" :type="showPasswordOne ? 'text' : 'password'" class="form-input form-input-icon w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0 h-10" placeholder="************" value="">
                                <span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
                                <button type="button" data-hs-toggle-password="{ &quot;target&quot;: &quot;#hs-toggle-password3&quot; }" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden focus:text-blue-600" @click="toggleShowOne">
                                    <i
                                        :class="{
                                            'icon icon-eye': showPasswordOne,
                                            'icon icon-eye-off': !showPasswordOne,
                                        }"
                                    ></i>
                                </button> 
                            </div>
                        </div>
                        <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Reset Password</button>
                        <p class="text-center text-sm text-default mb-0"><router-link :to="all_routes.loginIllustration" class="text-primary hover:underline">← Back to Sign In</router-link></p>
                    </form>
                </div>
            </div>
        </div> 
        <!-- End Reset Password Illustration -->

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
        const showPasswordOne = ref(false);

        const submitForm = () => {
            router.push("/login-illustration");
        };

        const toggleShow = () => {
            showPassword.value = !showPassword.value;
        };
        const toggleShowOne = () => {
            showPasswordOne.value = !showPasswordOne.value;
        };

        return {
            submitForm,
            all_routes,
            showPassword,
            showPasswordOne,
            toggleShow,
            toggleShowOne,
        };
    },
}
</script>
