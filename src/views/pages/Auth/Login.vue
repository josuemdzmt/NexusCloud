<template>
	<div class="bg-light min-h-screen flex flex-col items-center justify-center p-4">
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
					<label class="text-sm font-semibold text-gray-900 mb-1 block">Contraseña</label>
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
			<p class="text-[11px] text-default text-center mb-0 mt-6 pt-4 border-t border-border-color">Este sitio está protegido por reCAPTCHA y se aplican la
				<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Política de privacidad</a>
				y los <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Términos de servicio</a> de Google.</p>
		</div>
		<nx-app-version class="mt-4" />
	</div>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AuthService from '@/services/auth/AuthService';
import { handleLoadRecaptcha } from '@/services/auth/recaptcha';
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

		onMounted(() => {
			handleLoadRecaptcha().catch(() => {});
		});

		const submitForm = async () => {
			strError.value = '';
			bolLoading.value = true;
			try {
				await AuthService.login({
					email: objForm.email.trim(),
					password: objForm.password
				});
				handleResetIdleTimer();
				const strRedirect = typeof route.query.redirect === 'string' ? route.query.redirect : all_routes.customers;
				await router.replace(strRedirect || all_routes.customers);
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
