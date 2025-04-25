<script setup>
//Import All Libraries
import { useAuthStore } from '@/stores/auth';
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router';

//All Instance or Object
const authStore = useAuthStore();
const router = useRouter();
const swal = inject('$swal');
//All Variables
const loginForm = reactive({
    email: null,
    password: null
});

const schema = reactive({
    email: 'required|email',
    password: 'required|min:4|max:20',
});

//All Method or Function
const login = () => {
    authStore.login(loginForm, (status) => {
        if(status == 'success') {
            swal({
                icon: 'success',
                timer: 1000,
                title: authStore.message
            });
            router.push({name: 'dashboard'});
        } else {
            swal({
                icon: 'error',
                timer: 1000,
                title: authStore.message
            });
            router.push({name: 'login'});
        }
    })
}

//All Hooks, Computed, Watcher

</script>

<template>
    <div class="auth-page d-flex align-items-center min-vh-100">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-xxl-3 col-lg-4 col-md-5">
                    <div class="d-flex flex-column h-100 py-5 px-4">
                        <div class="text-center text-muted mb-2">
                            <div class="pb-3">
                                <a href="index.html">
                                    <span class="logo-lg">
                                        <img src="../../assets/images/logo-sm.svg" alt="" height="24"> <span
                                            class="">Vuesy</span>
                                    </span>
                                </a>
                                <p class="text-muted font-size-15 w-75 mx-auto mt-3 mb-0">
                                    User Experience & Interface Design Strategy Saas Solution
                                </p>
                            </div>
                        </div>

                        <div class="my-auto">
                            <div class="p-3 text-center">
                                <img src="../../assets/images/auth-img.png" alt="" class="img-fluid">
                            </div>
                        </div>

                    </div>
                </div>
                <!-- end col -->

                <div class="col-xxl-9 col-lg-8 col-md-7">
                    <div class="auth-bg bg-light py-md-5 p-4 d-flex">
                        <div class="bg-overlay-gradient"></div>
                        <div class="row justify-content-center g-0 align-items-center w-100">
                            <div class="col-xl-4 col-lg-8">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="px-3 py-3">
                                            <div class="text-center">
                                                <h5 class="mb-0">Welcome !</h5>
                                                <p class="text-muted mt-2">Sign in to continue to Vuesy.</p>
                                            </div>
                                            <vee-form :validation-schema="schema" @submit="login" class="mt-4 pt-2">
                                                <div class="form-floating form-floating-custom mb-3">
                                                    <vee-field type="email" class="form-control" id="input-username"
                                                        placeholder="Enter Email" name="email" v-model="loginForm.email"/>
                                                    <label for="input-username">Email</label>
                                                    <div class="form-floating-icon">
                                                        <i class="uil uil-users-alt"></i>
                                                    </div>
                                                    <ErrorMessage class="text-danger" name="email" />
                                                </div>
                                                <div
                                                    class="form-floating form-floating-custom mb-3 auth-pass-inputgroup">
                                                    <vee-field type="password" class="form-control" id="password-input"
                                                        placeholder="Enter Password" name="password" v-model="loginForm.password"/>
                                                    <label for="password-input">Password</label>
                                                    <div class="form-floating-icon">
                                                        <i class="uil uil-padlock"></i>
                                                    </div>
                                                    <ErrorMessage class="text-danger" name="password" />
                                                </div>
                                                <div class="form-check form-check-primary font-size-16 py-1">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="remember-check" name="remember" value="true"/>
                                                    <div class="float-end">
                                                        <a href=""
                                                            class="text-muted text-decoration-underline font-size-14">
                                                            Forgot your password?
                                                        </a>
                                                    </div>
                                                    <label class="form-check-label font-size-14" for="remember-check">
                                                        Remember me
                                                    </label>
                                                </div>

                                                <div class="mt-3">
                                                    <button class="btn btn-primary w-100" type="submit">Log In</button>
                                                </div>

                                                <!-- <div class="mt-4 text-center">
                                                    <div class="signin-other-title">
                                                        <h5 class="font-size-15 mb-4 text-muted fw-medium">
                                                            - Or you can join with -
                                                        </h5>
                                                    </div>

                                                    <div class="d-flex gap-2">
                                                        <button type="button"
                                                            class="btn btn-primary-subtle waves-effect waves-light w-100">
                                                            <i class="bx bxl-facebook font-size-16 align-middle"></i>
                                                        </button>
                                                        <button type="button"
                                                            class="btn btn-info-subtle waves-effect waves-light w-100">
                                                            <i class="bx bxl-linkedin font-size-16 align-middle"></i>
                                                        </button>
                                                        <button type="button"
                                                            class="btn btn-danger-subtle waves-effect waves-light w-100">
                                                            <i class="bx bxl-google font-size-16 align-middle"></i>
                                                        </button>
                                                    </div>
                                                </div> -->

                                                <!-- <div class="mt-4 pt-3 text-center">
                                                    <p class="text-muted mb-0">
                                                        Don't have an account?
                                                        <a href="auth-signup-cover.html"
                                                            class="fw-semibold text-decoration-underline">
                                                            Signup Now
                                                        </a>
                                                    </p>
                                                </div> -->
                                            </vee-form>
                                            <!-- end form -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container fluid -->
    </div>
    <!-- end authentication section -->
</template>

<style>
@media (min-width: 1200px) {

    body[data-layout=horizontal] .container-fluid,
    body[data-layout=horizontal] .navbar-header {
        max-width: 100%;
    }
}
</style>