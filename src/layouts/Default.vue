<script setup>
    //All libraries
    import NavbarView from '@/components/Navbar.vue';
</script>

<template>
    <div id="layout-wrapper">
        <NavbarView />

        <div class="hori-overlay"></div>

        <div class="main-content">
            <!-- Content here -->
            <router-view v-slot="{ Component, route }">
                <transition name="route" mode="out-in">
                    <div :key="route.name">
                        <component :is="Component" />
                    </div> 
                </transition>
            </router-view>
            <!-- End Page-content -->
        </div>
    </div>
</template>

<style>
    .route-enter-from {
        opacity: 0;
        transform: translateY(10px);
    }

    .route-enter-active, .route-leave-active{
        transition: all 0.2s ease-out;
    }

    .route-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }
</style>