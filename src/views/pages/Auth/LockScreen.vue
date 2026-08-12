<template>
	<div class="bg-light min-h-screen flex items-center justify-center p-4">
		<div class="bg-white border border-border-color rounded-md shadow-sm w-full max-w-md sm:p-8 p-5">
			<div class="text-center mb-6">
				<div class="flex items-center justify-center gap-2 mb-4">
					<img src="@/assets/img/logo-small.svg" class="h-10 w-10" alt="">
					<span class="text-2xl font-semibold text-title leading-none">NexusCloud</span>
				</div>
				<img src="@/assets/img/avatar/avatar-01.jpg" class="size-16 rounded-full mx-auto mb-3 border border-border-color" alt="user avatar">
				<h1 class="text-xl font-bold text-title mb-1">{{ strName }}</h1>
				<p class="text-sm text-default mb-0">{{ strEmail }}</p>
			</div>
			<form class="space-y-4" @submit.prevent="submitForm">
				<div v-if="strError" class="text-sm text-danger bg-danger/10 border border-danger/20 rounded-md px-3 py-2">{{ strError }}</div>
				<div>
					<label class="text-sm font-semibold text-gray-900 mb-1 block">Contraseña</label>
					<div class="relative">
						<input id="hs-toggle-password4" v-model="strPassword" :type="showPassword ? 'text' : 'password'" required autocomplete="current-password" class="form-input form-input-icon w-full px-3 py-2.5 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:border-border-color focus:ring-0 h-10" placeholder="************">
						<span class="absolute start-0 top-2 ms-3"><i class="icon icon-lock"></i></span>
						<button type="button" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer rounded-e-md focus:outline-hidden" @click="toggleShow">
							<i :class="showPassword ? 'icon icon-eye' : 'icon icon-eye-off'"></i>
						</button>
					</div>
				</div>
				<button type="submit" :disabled="bolLoading || !strEmail" class="w-full bg-dark text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary-hover cursor-pointer disabled:opacity-60">
					{{ bolLoading ? 'Desbloqueando…' : 'Desbloquear' }}
				</button>
				<p class="text-center text-sm text-default mb-0">¿No eres tú? <router-link :to="all_routes.login" class="text-primary hover:underline" @click="clearExpiredUser">Iniciar sesión con otra cuenta</router-link></p>
			</form>
		</div>
	</div>
</template>

<script>
import { all_routes } from '@/router/all_routes';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthService from '@/services/auth/AuthService';
import { clearExpiredUser, getExpiredUser } from '@/services/auth/authSession';
import { formatError } from '@/utils/errorUtils';
import { handleResetIdleTimer } from '@/services/auth/idleSession';

export default {
	setup() {
		const router = useRouter();
		const showPassword = ref(false);
		const bolLoading = ref(false);
		const strError = ref('');
		const strPassword = ref('');
		const strEmail = ref('');
		const strName = ref('Usuario');

		onMounted(() => {
			const objExpired = getExpiredUser();
			if (objExpired?.email) {
				strEmail.value = objExpired.email;
				strName.value = objExpired.name || objExpired.email;
			} else {
				router.replace(all_routes.login);
			}
		});

		const submitForm = async () => {
			strError.value = '';
			bolLoading.value = true;
			try {
				await AuthService.login({
					email: strEmail.value.trim(),
					password: strPassword.value
				});
				clearExpiredUser();
				handleResetIdleTimer();
				await router.replace(all_routes.customers);
			} catch (objErr) {
				strError.value = formatError(objErr) || 'No se pudo desbloquear la sesión.';
			} finally {
				bolLoading.value = false;
			}
		};

		const toggleShow = () => {
			showPassword.value = !showPassword.value;
		};

		return {
			showPassword,
			bolLoading,
			strError,
			strPassword,
			strEmail,
			strName,
			submitForm,
			toggleShow,
			clearExpiredUser,
			all_routes
		};
	}
};
</script>
