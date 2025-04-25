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
    // dashboardStore.getUnreadNotifications();
})
</script>

<template>
    <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item noti-icon" id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="bx bx-bell icon-sm"></i>
            <!-- <span class="noti-dot bg-danger rounded-pill">{{ dashboardStore.getUnreadNotificationsCount }}</span> -->
        </button>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-notifications-dropdown">
            <!-- <div class="p-3">
                <div class="row align-items-center">
                    <div class="col">
                        <h5 class="m-0 font-size-15"> Notifications </h5>
                    </div>
                    <div class="col-auto">
                        <a href="javascript:void(0);" @click.prevent="dashboardStore.markAsReadAll()" class="small"> Mark all as read</a>
                    </div>
                </div>
            </div> -->
            <div data-simplebar style="max-height: 250px;">
                <h6 class="dropdown-header bg-light">New</h6>
                <!-- <template v-for="(notification, index) in dashboardStore.unreadNotifications" :key="notification.id">
                    <a href="" class="text-reset notification-item">
                        <div class="d-flex border-bottom align-items-start">
                            <div class="flex-shrink-0">
                                <img src="../assets/images/users/avatar-3.jpg" class="me-3 rounded-circle avatar-sm"
                                    alt="user-pic">
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="mb-1">{{ new Date(notification.created_at).toLocaleString() }}</h6>
                                <div class="text-muted">
                                    <p class="mb-1 font-size-13">{{ notification.data.details['subject'] }} 
                                        <span class="badge badge-soft-success text-success" v-if="notification.read_at">Review</span>
                                        <span class="badge badge-soft-danger text-danger" v-else>
                                            <a href="" @click.prevent="dashboardStore.markNotificationAsRead(notification.id)">{{ 'Unread' }}</a>
                                        </span>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </a>
                </template> -->
                
                <!-- <a href="" class="text-reset notification-item">
                    <div class="d-flex border-bottom align-items-start">
                        <div class="flex-shrink-0">
                            <div class="avatar-sm me-3">
                                <span class="avatar-title bg-primary rounded-circle font-size-16">
                                    <i class="uil-shopping-basket"></i>
                                </span>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="mb-1">New order has been placed</h6>
                            <div class="text-muted">
                                <p class="mb-1 font-size-13">Open the order confirmation or shipment confirmation.</p>
                                <p class="mb-0 font-size-10 text-uppercase fw-bold"><i
                                        class="mdi mdi-clock-outline"></i> 5 hours ago</p>
                            </div>
                        </div>
                    </div>
                </a> -->
                <!-- <h6 class="dropdown-header bg-light">Earlier</h6>
                <a href="" class="text-reset notification-item">
                    <div class="d-flex border-bottom align-items-start">
                        <div class="flex-shrink-0">
                            <div class="avatar-sm me-3">
                                <span class="avatar-title bg-success-subtle text-success rounded-circle font-size-16">
                                    <i class="uil-truck"></i>
                                </span>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="mb-1">Your item is shipped</h6>
                            <div class="text-muted">
                                <p class="mb-1 font-size-13">Here is somthing that you might light like to know.</p>
                                <p class="mb-0 font-size-10 text-uppercase fw-bold"><i
                                        class="mdi mdi-clock-outline"></i> 1 day ago</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="" class="text-reset notification-item">
                    <div class="d-flex border-bottom align-items-start">
                        <div class="flex-shrink-0">
                            <img src="../assets/images/users/avatar-4.jpg" class="me-3 rounded-circle avatar-sm"
                                alt="user-pic">
                        </div>
                        <div class="flex-grow-1">
                            <h6 class="mb-1">Salena Layfield</h6>
                            <div class="text-muted">
                                <p class="mb-1 font-size-13">Yay ! Everything worked!</p>
                                <p class="mb-0 font-size-10 text-uppercase fw-bold"><i
                                        class="mdi mdi-clock-outline"></i> 3 days ago</p>
                            </div>
                        </div>
                    </div>
                </a> -->
            </div>
            <!-- <div class="p-2 border-top d-grid">
                <router-link :to="{ name: 'notification.index' }" class="btn btn-sm btn-link font-size-14 btn-block text-center">
                    <i class="uil-arrow-circle-right me-1"></i> <span>View All Notifications..</span>
                </router-link>
            </div> -->
        </div>
    </div>
</template>