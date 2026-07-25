<template>
    <div class="bg-light min-h-screen flex items-center justify-center p-4">
    
        <!-- Start Signup -->
        <div class="bg-white border border-border-color rounded-md shadow-sm w-full max-w-md sm:p-8 p-5">
            <div class="text-center mb-6">
                <div class="invoice-logo block dark:hidden"> 
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <div class="invoice-logo-white hidden dark:block">
                    <router-link :to="all_routes.hrmDashboard"><img src="@/assets/img/logo-white.svg" class="h-10 mx-auto mb-4" alt="logo"></router-link>
                </div>
                <h1 class="text-xl font-bold text-title mb-1">Create Account</h1>
                <p class="text-sm text-default mb-0">Sign up to get started with Dreams ERP</p>
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
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Email Address</label>
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
                <div>
                    <label class="text-sm font-semibold text-gray-900 mb-1 block">Confirm Password</label>
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
                <div class="flex items-start gap-2">
                    <input type="checkbox" class="size-4 rounded border-border-color mt-0.5" id="terms">
                    <label for="terms" class="text-sm text-default">I agree to <a href="#" class="text-primary hover:underline">Terms of Service</a> and <a href="#" class="text-primary hover:underline">Privacy Policy</a></label>
                </div>
                <button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Create Account</button>
                <p class="text-center text-sm text-default mb-0">Already have an account? <router-link :to="all_routes.login" class="text-primary hover:underline">Sign in</router-link></p>
            </form>
        </div> 
        <!-- End Signup -->

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
            router.push("/");
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
