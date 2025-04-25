<script setup>
//Import All Libraries
import { useDashboardStore } from '@/stores/dashboard';
import { inject, onMounted } from 'vue';
import { useRouter } from 'vue-router';
//All Instance or Object
const dashboardStore = useDashboardStore();
const router = useRouter();
const swal = inject('$swal');

dashboardStore.router = router;
dashboardStore.swal = swal;
//All Variables

//All Method or Function

//All Hooks, Computed, Watcher
onMounted(() => {
    dashboardStore.getDashboardInfo();
})
</script>

<template>
    <div class="dash-content collapse" id="dashtoggle" style="">
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 sub-title">Welcome !</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item page-head">
                                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                            </li>
                            <li class="breadcrumb-item page-head active">Welcome !</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <!-- start dash info -->
        <div class="row">
            <div class="col-xl-12">
                <div class="card dash-header-box shadow-none border-0">
                    <div class="card-body p-0">
                        <div class="row row-cols-xxl-6 row-cols-md-3 row-cols-1 g-0">
                            <div class="col">
                                <div class="mt-md-0 py-3 px-4 mx-2">
                                    <p class="text-white-50 mb-2 text-truncate">Brand</p>
                                    <h3 class="text-white mb-0">{{ dashboardStore.dashboardInfo.brand_count }}</h3>
                                </div>
                            </div>
                            <!-- end col -->

                            <div class="col">
                                <div class="mt-3 mt-md-0 py-3 px-4 mx-2">
                                    <p class="text-white-50 mb-2 text-truncate">Category</p>
                                    <h3 class="text-white mb-0">{{ dashboardStore.dashboardInfo.category_count }}</h3>
                                </div>
                            </div>
                            <!-- end col -->

                            <div class="col">
                                <div class="mt-3 mt-md-0 py-3 px-4 mx-2">
                                    <p class="text-white-50 mb-2 text-truncate">Supplier</p>
                                    <h3 class="text-white mb-0">{{ dashboardStore.dashboardInfo.supplier_count }}</h3>
                                </div>
                            </div>
                            <!-- end col -->

                            <div class="col">
                                <div class="mt-3 mt-md-0 py-3 px-4 mx-2">
                                    <p class="text-white-50 mb-2 text-truncate">Customer</p>
                                    <h3 class="text-white mb-0">{{ dashboardStore.dashboardInfo.customer_count }}</h3>
                                </div>
                            </div>
                            <!-- end col -->

                            <div class="col">
                                <div class="mt-3 mt-lg-0 py-3 px-4 mx-2">
                                    <p class="text-white-50 mb-2 text-truncate">Product</p>
                                    <h3 class="text-white mb-0">{{ dashboardStore.dashboardInfo.product_count }}</h3>
                                </div>
                            </div>
                            <!-- end col -->

                            <div class="col">
                                <div class="mt-3 mt-lg-0 py-3 px-4 mx-2">
                                    <p class="text-white-50 mb-2 text-truncate">Sales</p>
                                    <h3 class="text-white mb-0">{{ dashboardStore.dashboardInfo.sales_count }}</h3>
                                </div>
                            </div>
                            <!-- end col -->

                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div>
        <!-- end dash info -->
    </div>
</div>

<!-- start dash troggle-icon -->
<div>
    <a class="dash-troggle-icon collapsed" id="dash-troggle-icon" data-bs-toggle="collapse" href="#dashtoggle"
        aria-expanded="false" aria-controls="dashtoggle">
        <i class="bx bx-up-arrow-alt"></i>
    </a>
</div>
<!-- end dash troggle-icon -->
</template>