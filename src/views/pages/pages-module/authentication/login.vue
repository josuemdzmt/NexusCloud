<template>
    <!-- Start Signin -->
	<div class="bg-light min-h-screen flex items-center justify-center p-4">
		<div class="bg-white border border-border-color rounded-md shadow-sm w-full max-w-md sm:p-8 p-5">
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
					<input type="email" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="you@example.com">
				</div>
				<div>
					<div class="flex justify-between items-center mb-1">
					<label class="text-sm text-gray-900">Password</label><router-link :to="all_routes.forgotPassword" class="text-sm text-primary hover:underline">Forgot Password?</router-link></div>
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
				<div class="flex items-center gap-2">
					<input type="checkbox" class="size-4 rounded border-border-color" id="remember">
					<label for="remember" class="text-sm text-default">Remember me</label>
				</div>
				<button type="submit" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer">Sign In</button>
				<div class="text-center text-sm text-default">Or sign in with</div>
				<div class="grid grid-cols-2 gap-2">
					<button type="button" class="border border-border-color rounded-md py-2 text-sm text-gray-900 hover:bg-light cursor-pointer flex items-center justify-center gap-2"><i class="ph-fill ph-google-logo"></i> Google</button>
					<button type="button" class="border border-border-color rounded-md py-2 text-sm text-gray-900 hover:bg-light cursor-pointer flex items-center justify-center gap-2"><i class="ph-fill ph-apple-logo"></i> Apple</button>
				</div>
				<p class="text-center text-sm text-default mb-0">Don't have an account? <router-link :to="all_routes.register" class="text-primary hover:underline">Sign up</router-link></p>
			</form>
		</div> 
	</div>
    <!-- End Signin -->
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