import { appAxiosclient } from "@/utils/systemaxios";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore('dashboards', {
    state: () => ({
        rowData: [],
        // months: [],
        // sales: [],
        // expense: [],
        // revenue: [],
        // salary: [],
        dashboardInfo: [],
        // notifications: [],
        // notification: null,
        // unreadNotifications: [],
        is_loading: false,
        router: null,
        swal: null,
        errors: [],

    }),

    getters: {
        // getNotificationsCount: (state) => state.notifications.length,
        // getUnreadNotificationsCount: (state) => state.unreadNotifications.length
    },

    actions: {
        async getDashboardInfo() {
            try {
                this.is_loading = true;
                const { data } = await appAxiosclient.get('/dashboard');
                    this.rowData = data;
                    this.dashboardInfo = data.data;
                    // this.dashboardInfo.stats.map((item) => {
                    //     this.months.push(item.month);
                    //     this.sales.push(item.sales);
                    //     this.expense.push(item.expense);
                    //     this.salary.push(item.salary);
                    //     let revenueAmount = parseFloat(item.sales) - (parseFloat(item.expense) + parseFloat(item.salary));
                    //     this.revenue.push(revenueAmount);
                    // });
                this.is_loading = false;
            } catch (error) {
                this.is_loading = false;
                this.errors = error.response ? error.response.data : error.message;
                console.error('API Error:', error);
                this.swal({
                    icon: 'error',
                    title: 'Something Went Wrong!',
                    text: this.errors.message || 'Failed to fetch dashboard data.',
                });
            }
        },
        

        // async getAllNotifications() {
        //     this.is_loading = true;
        //     try {
        //         const { data } = await appAxiosclient.get('/getAllNotifications');
        //         console.log(data);
        //         this.rowData = data;
        //         this.notifications = data.data
        //         this.is_loading = false;
        //     } catch (error) {
        //         this.is_loading = false;
        //         this.errors = error.response.data;
        //         this.swal({
        //             icon: 'error',
        //             title: 'Somethings Went Wrong!',
        //             text: this.errors.message,
        //         })
        //     }
        // },
        // async getUnreadNotifications() {
        //     this.is_loading = true;
        //     try {
        //         const { data } = await appAxiosclient.get('/getUnreadNotifications');
        //         // console.log(data);
        //         this.rowData = data;
        //         this.unreadNotifications = data.data
        //         this.is_loading = false;
        //     } catch (error) {
        //         this.is_loading = false;
        //         this.errors = error.response.data;
        //         this.swal({
        //             icon: 'error',
        //             title: 'Somethings Went Wrong!',
        //             text: this.errors.message,
        //         })
        //     }
        // },
        // async markAsReadAll() {
        //     this.is_loading = true;
        //     try {
        //         const { data } = await appAxiosclient.get('/markAsReadAll');
        //         // console.log(data);
        //         this.rowData = data;
        //         this.notifications = data.data;
        //         this.getUnreadNotifications();
        //         this.is_loading = false;
        //     } catch (error) {
        //         this.is_loading = false;
        //         this.errors = error.response.data;
        //         this.swal({
        //             icon: 'error',
        //             title: 'Somethings Went Wrong!',
        //             text: this.errors.message,
        //         })
        //     }
        // },
        // async markNotificationAsRead(notificationId) {
        //     this.is_loading = true;
        //     try {
        //         const { data } = await appAxiosclient.get(`/markAsRead/${notificationId}`);
        //         this.notification = data;
        //         this.getUnreadNotifications();
        //         this.is_Loading = false
        //     } catch (error) {
        //         this.is_Loading = false;
        //         this.errors = error.response.data;
        //         this.swal({
        //             icon: 'error',
        //             title: 'Somethings Went Wrong!',
        //             text: this.errors.message
        //         })
        //     }
        // }
    }
});
