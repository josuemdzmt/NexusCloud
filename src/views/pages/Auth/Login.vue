<template>
	<div class="bg-light min-h-screen flex items-center justify-center p-4">
		<div class="bg-white border border-border-color rounded-md shadow-sm w-full max-w-md sm:p-8 p-5">
			<div class="text-center mb-6">
				<div class="flex items-center justify-center gap-2 mb-4">
					<img src="@/assets/img/logo-small.svg" class="h-10 w-10" alt="">
					<span class="text-2xl font-semibold text-title leading-none">NexusCloud</span>
				</div>
				<h1 class="text-xl font-bold text-title mb-1">Bienvenido</h1>
				<p class="text-sm text-default mb-0">Inicia sesión en NexusCloud</p>
			</div>
			<form class="space-y-4" @submit.prevent="submitForm">
				<div v-if="strError" class="text-sm text-danger bg-danger/10 border border-danger/20 rounded-md px-3 py-2">{{ strError }}</div>
				<div>
					<label class="text-sm font-semibold text-gray-900 mb-1 block">Correo electrónico</label>
					<input v-model="objForm.email" type="email" required autocomplete="username" class="w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="tu@empresa.com">
				</div>
				<div>
					<div class="flex justify-between items-center mb-1">
						<label class="text-sm text-gray-900">Contraseña</label>
						<router-link :to="all_routes.forgotPassword" class="text-sm text-primary hover:underline">¿Olvidaste tu contraseña?</router-link>
					</div>
					<div class="relative">
						<input id="hs-toggle-password3" v-model="objForm.password" :type="showPassword ? 'text' : 'password'" required autocomplete="current-password" class="form-input form-input-icon w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0 h-10" placeholder="************">
						<span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
						<button type="button" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden" @click="toggleShow">
							<i :class="showPassword ? 'icon icon-eye' : 'icon icon-eye-off'"></i>
						</button>
					</div>
				</div>
				<button type="submit" :disabled="bolLoading" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer disabled:opacity-60">
					{{ bolLoading ? 'Ingresando…' : 'Iniciar sesión' }}
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AuthService from '@/services/auth/AuthService';
import { formatError } from '@/utils/errorUtils';
import { handleResetIdleTimer } from '@/services/auth/idleSession';

export default {
	setup() {
		const router = useRouter();
		const route = useRoute();
		const showPassword = ref(false);
		const bolLoading = ref(false);
		const strError = ref('');
		const objForm = reactive({ email: '', password: '' });

		const submitForm = async () => {
			strError.value = '';
			bolLoading.value = true;
			try {
				await AuthService.login({
					email: objForm.email.trim(),
					password: objForm.password
				});
				handleResetIdleTimer();
				const strRedirect = typeof route.query.redirect === 'string' ? route.query.redirect : all_routes.hrmDashboard;
				await router.replace(strRedirect || all_routes.hrmDashboard);
			} catch (objErr) {
				strError.value = formatError(objErr) || 'No se pudo iniciar sesión.';
			} finally {
				bolLoading.value = false;
			}
		};

		const toggleShow = () => {
			showPassword.value = !showPassword.value;
		};

		return { showPassword, bolLoading, strError, objForm, submitForm, toggleShow, all_routes };
	}
};
</script>
