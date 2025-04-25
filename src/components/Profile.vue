<script setup>
//Import All Libraries
import { useAuthStore } from '@/stores/auth';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

//All Instance
const authStore = useAuthStore();
const router = useRouter();
const swal = inject('$swal');

//All Variables
const username = authStore.getUserName || 'Admin';

//All Method or Function
const logout = () => {
    authStore.removeToken();
    authStore.removeUserName
    swal({
        icon: 'success',
        timer: 1000,
        title: 'Logout Successfully!'
    });

    router.push({name: 'login'});
}

//All Hooks, Computed, Watcher

</script>

<template>
    <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item user text-start d-flex align-items-center"
            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle header-profile-user" src="../assets/images/users/avatar-3.jpg" alt="Header Avatar">
            <span class="ms-2 d-none d-xl-inline-block user-item-desc">
                <span class="user-name">{{ username }} <i class="mdi mdi-chevron-down"></i></span>
            </span>
        </button>
        <div class="dropdown-menu dropdown-menu-end pt-0">
            <h6 class="dropdown-header">Welcome {{ username }}!</h6>
            <a class="dropdown-item" href="pages-profile.html"><i
                    class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"></i> <span
                    class="align-middle">Profile</span></a>
            <a class="dropdown-item" href="javascript:void(0)" @click.prevent="logout"><i
                    class="mdi mdi-logout text-muted font-size-16 align-middle me-1"></i> <span
                    class="align-middle">Logout</span></a>
        </div>
    </div>
</template>