<template>
    <main>
        <div class="p-3 lg:py-6 lg:px-0">
            <div class="mb-4">
                <h1 class="text-gray-900 text-xl font-bold mb-1">Configuración</h1>
                <p class="text-sm text-default mb-0">Administra tu perfil y la seguridad de tu cuenta.</p>
            </div>

            <div class="inline-flex items-center gap-2 border border-border-color rounded-md p-1 mb-4 bg-white flex-wrap">
                <router-link :to="all_routes.profile" class="px-3 py-1.5 text-sm font-semibold rounded-md bg-dark text-white inline-flex items-center gap-2"><i class="ph-duotone ph-user"></i> Perfil</router-link>
                <router-link :to="all_routes.accountSecurity" class="px-3 py-1.5 text-sm text-gray-900 hover:bg-light rounded-md inline-flex items-center gap-2"><i class="ph-duotone ph-shield-check"></i> Seguridad</router-link>
            </div>

            <div v-if="bSpinner && !objUser" class="bg-white border border-border-color rounded-md p-5 max-w-4xl text-sm text-default">Cargando...</div>

            <div v-else class="bg-white border border-border-color rounded-md p-5 max-w-4xl">
                <h2 class="text-lg font-bold text-gray-900 mb-4">Perfil</h2>
                <form class="space-y-5" @submit.prevent="handleSubmitProfile">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Nombre <span class="text-danger">*</span></label>
                            <input v-model="objForm.first_name" type="text" required maxlength="100" :disabled="bSavingProfile" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" 
                              :class="{ 'border-danger': objErrors.first_name }" placeholder="Nombre(s)">
                            <span v-if="objErrors.first_name" class="text-danger text-[11px] mt-1 block">{{ objErrors.first_name }}</span>
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Apellido paterno <span class="text-danger">*</span></label>
                            <input v-model="objForm.last_name" type="text" required maxlength="100" :disabled="bSavingProfile" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" 
                              :class="{ 'border-danger': objErrors.last_name }" placeholder="Apellido paterno">
                            <span v-if="objErrors.last_name" class="text-danger text-[11px] mt-1 block">{{ objErrors.last_name }}</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Apellido materno</label>
                            <input v-model="objForm.second_last_name" type="text" maxlength="100" :disabled="bSavingProfile" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Apellido materno">
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Teléfono</label>
                            <input v-model="objForm.phone" type="tel" maxlength="50" :disabled="bSavingProfile" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Teléfono">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Puesto</label>
                            <input v-model="objForm.job_title" type="text" maxlength="150" :disabled="bSavingProfile" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Puesto de trabajo">
                        </div>
                        <div>
                            <label class="text-sm font-semibold text-gray-900 mb-1 inline-block">Correo</label>
                            <input type="email" :value="objUser?.email || ''" disabled class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-light text-default cursor-not-allowed">
                        </div>
                    </div>
                    <div class="flex items-center justify-end gap-3 mt-5 pt-5 border-t border-border-color">
                        <button type="button" class="btn-sm bg-white border border-border-color text-gray-900 hover:bg-light cursor-pointer" :disabled="bSavingProfile" @click="handleCancelProfile">Cancelar</button>
                        <button type="submit" class="btn-sm bg-dark text-white border border-dark hover:bg-primary-hover hover:border-primary-hover cursor-pointer disabled:opacity-60" :disabled="bSavingProfile || !bCanSaveProfile">{{ bSavingProfile ? 'Guardando…' : 'Guardar cambios' }}</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import AuthService from '@/services/auth/AuthService';
import { setUser } from '@/services/auth/authSession';
import { all_routes } from '@/router/all_routes';
import { handleSuccess, handleError } from '@/utils/toastUtils';

function emptyProfileForm() {
  return {
    first_name: '',
    last_name: '',
    second_last_name: '',
    phone: '',
    job_title: ''
  };
}

export default {
  name: 'AuthProfile',
  data() {
    return {
      all_routes,
      bSpinner: false,
      bSavingProfile: false,
      objUser: null,
      objForm: emptyProfileForm(),
      objSnapshot: emptyProfileForm(),
      objErrors: {}
    };
  },
  computed: {
    bCanSaveProfile() {
      const obj = this.objForm;
      if (!(obj.first_name || '').trim() || !(obj.last_name || '').trim()) return false;
      return (
        (obj.first_name || '').trim() !== (this.objSnapshot.first_name || '') ||
        (obj.last_name || '').trim() !== (this.objSnapshot.last_name || '') ||
        (obj.second_last_name || '').trim() !== (this.objSnapshot.second_last_name || '') ||
        (obj.phone || '').trim() !== (this.objSnapshot.phone || '') ||
        (obj.job_title || '').trim() !== (this.objSnapshot.job_title || '')
      );
    }
  },
  mounted() {
    this.handleGetMe();
  },
  methods: {
    handleFieldError(objError, strField) {
      const objErrors = objError?.errors || objError?.response?.data?.errors || {};
      const mixed = objErrors[strField];
      if (Array.isArray(mixed)) return mixed[0] || '';
      return typeof mixed === 'string' ? mixed : '';
    },
    handleApplyProfile(objUser) {
      this.objUser = objUser || null;
      const objForm = {
        first_name: objUser?.firstName || objUser?.first_name || '',
        last_name: objUser?.lastName || objUser?.last_name || '',
        second_last_name: objUser?.secondLastName || objUser?.second_last_name || '',
        phone: objUser?.phone || '',
        job_title: objUser?.jobTitle || objUser?.job_title || ''
      };
      this.objForm = { ...objForm };
      this.objSnapshot = { ...objForm };
      this.objErrors = {};
    },
    handleGetMe() {
      this.bSpinner = true;
      AuthService.me()
        .then((objResponse) => {
          const objUser = objResponse?.data || objResponse;
          if (objUser?.id || objUser?.email) {
            this.handleApplyProfile(objUser);
            setUser(objUser);
          }
        })
        .catch((objError) => {
          handleError('No se pudo cargar el perfil', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCancelProfile() {
      this.objForm = { ...this.objSnapshot };
      this.objErrors = {};
    },
    handleSubmitProfile() {
      this.objErrors = {};
      const strFirst = (this.objForm.first_name || '').trim();
      const strLast = (this.objForm.last_name || '').trim();
      if (!strFirst) {
        this.objErrors.first_name = 'El nombre es obligatorio';
        return;
      }
      if (!strLast) {
        this.objErrors.last_name = 'El apellido paterno es obligatorio';
        return;
      }

      this.bSavingProfile = true;
      AuthService.updateProfile({
        first_name: strFirst,
        last_name: strLast,
        second_last_name: (this.objForm.second_last_name || '').trim() || null,
        phone: (this.objForm.phone || '').trim() || null,
        job_title: (this.objForm.job_title || '').trim() || null
      })
        .then((objUser) => {
          const objNormalized = objUser?.data || objUser;
          this.handleApplyProfile(objNormalized);
          handleSuccess('Perfil actualizado');
        })
        .catch((objError) => {
          this.objErrors = {
            first_name: this.handleFieldError(objError, 'first_name'),
            last_name: this.handleFieldError(objError, 'last_name')
          };
          handleError('No se pudo actualizar el perfil', objError);
        })
        .finally(() => {
          this.bSavingProfile = false;
        });
    }
  }
};
</script>
