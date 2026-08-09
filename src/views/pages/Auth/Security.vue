<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="mb-4">
                <h1 class="text-gray-900 text-xl font-bold mb-1">Configuración</h1>
                <p class="text-sm text-default mb-0">Administra tu perfil y la seguridad de tu cuenta.</p>
            </div>

            <div class="inline-flex items-center gap-2 border border-border-color rounded-md p-1 mb-4 bg-white flex-wrap">
                <router-link :to="all_routes.profile" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-user"></i> Perfil</router-link>
                <router-link :to="all_routes.accountSecurity" class="px-3 py-1.5 text-sm font-semibold rounded-md bg-dark text-white inline-flex items-center gap-2"><i class="ph-duotone ph-shield-check"></i> Seguridad</router-link>
            </div>

            <div class="bg-white border border-border-color rounded-md p-5 max-w-4xl">
                <div class="flex items-center justify-between gap-3">
                    <div>
                        <p class="text-sm font-semibold text-title mb-1">Cambiar contraseña</p>
                        <p class="text-sm text-default mb-0">Al guardar se cerrará tu sesión y deberás iniciar sesión de nuevo.</p>
                    </div>
                    <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" @click="handleOpenChangePassword">Cambiar</button>
                </div>
            </div>
        </div>
    </main>

    <ChangePasswordForm ref="changePasswordFormRef" />
</template>

<script>
import { all_routes } from '@/router/all_routes';
import ChangePasswordForm from '@/views/pages/Auth/ChangePasswordForm.vue';

export default {
  name: 'AuthSecurity',
  components: {
    ChangePasswordForm
  },
  data() {
    return {
      all_routes
    };
  },
  methods: {
    handleOpenChangePassword() {
      this.$refs.changePasswordFormRef?.handleOpen();
    }
  }
};
</script>
