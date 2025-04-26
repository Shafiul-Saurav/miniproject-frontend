import config from "@/utils/config";
import { appAxiosclient } from "@/utils/systemaxios";
import { defineStore } from "pinia";

export const useUnitStore = defineStore('units', {
    state: () => ({
        rowData: [],
        dataLimit: config.defaultDataLimit || 10,
        units: [],
        unit: null,
        is_loading: false,
        errors: [],
        swal: null,
        router: null,
        pagination: {
            currentPage: 1,
            lastPage: 0,
            totalCount: 0,
        },
        editFormData: {
            name: null,
            short_name: null,
            _method: 'PUT'
        }
    }),

    getters: {
        getTotalCount: (state) => state.pagination.totalCount
    },

    actions: {
        async getAllUnits() {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.get('/allUnits');
                // console.log(data);
                this.rowData = data;
                this.units = data.data;
                this.pagination.totalCount = data.metaData.count
                this.is_loading = false;
            } catch (error) {
                this.is_loading = false;
                this.errors = error.response.data;
                this.swal({
                    icon: 'error',
                    title: 'Somethings Went Wrong!',
                    text: this.errors.message
                })
            }
        },
        async getUnits(page = 1, limit = this.dataLimit, search = '') {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.get('/units', 
                    {
                        params: {
                            page: page,
                            perpage: limit,
                            search: search
                        }
                    });
                // console.log(data);
                this.rowData = data.data;
                this.units = data.data.data;
                this.pagination.currentPage = data.data.current_page;
                this.pagination.lastPage = data.data.last_page;
                this.pagination.totalCount = data.data.total;
                this.is_loading = false;
            } catch (error) {
                this.is_loading = false;
                this.errors = error.response.data;
                this.swal({
                    icon: 'error',
                    title: 'Somethings Went Wrong!',
                    text: this.errors.message
                })
            }
        },
        async storeUnit(formData) {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.post('/units', formData);
                // console.log(data);
                this.units.unshift(data.data)
                this.swal({
                    icon: 'success',
                    title: data.message,
                    timer: 1000
                });

                this.is_loading = false;
            } catch (error) {
                this.is_loading = false;
                this.errors = error.response.data;
                this.swal({
                    icon: 'error',
                    title: 'Somethings Went Wrong!',
                    text: this.errors.message
                })
            }
        },
        async getUnit(unit_id) {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.get(`/units/${unit_id}`);
                console.log(data);
                this.unit = data.data;
                this.editFormData.name = data.data.name;
                this.editFormData.short_name = data.data.short_name;
                this.is_loading = false;
            } catch (error) {
                this.is_loading = false;
                this.errors = error.response.data;
                this.swal({
                    icon: 'error',
                    title: 'Somethings Went Wrong!',
                    text: this.errors.message
                })
            }
        },
        async updateUnit(formData, unit_id) {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.post(`/units/${unit_id}`, formData);
                console.log(data);
                this.swal({
                    icon: 'success',
                    title: data.message,
                    timer: 1000
                })

                this.is_loading = true;
                this.router.push({ name: 'unit.vue' });
            } catch (error) {
                this.is_loading = false;
                this.errors = error.response.data;
                this.swal({
                    icon: 'error',
                    title: 'Somethings Went Wrong!',
                    text: this.errors.message
                })
            }
        },
        async deleteUnit(unit_id, callback) {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.delete(`/units/${unit_id}`);
                callback('success');
                this.swal({
                    icon: 'success',
                    title: data.message,
                    timer: 1000
                })
                this.is_loading = false;
            } catch (error) {
                this.errors = error.response.data;
                this.swal({
                    icon: 'error',
                    title: 'Somethings Went Wrong!',
                    text: this.errors.message
                })
                callback('error');
                this.is_loading = false;
            }
        },    
        
    }
})