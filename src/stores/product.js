import config from "@/utils/config";
import { appAxiosclient } from "@/utils/systemaxios";
import { defineStore } from "pinia";

export const useProductStore = defineStore('products', {
    state: () => ({
        rowData: [],
        dataLimit: config.defaultDataLimit || 10,
        is_loading: false,
        products: [],
        product: null,
        router: null,
        swal: null,
        errors: [],
        pagination: {
            currentPage: 1,
            lastPage: 0,
            totalCount: 0
        },
        editFormData: {
            category_id: '',
            brand_id: '',
            supplier_id: '',
            name: '',
            original_price: 0,
            sell_price: 0,
            stock: 1,
            description: null,
            code: '',
            file: null,
            _method: 'PUT'
        }
    }),
    getters: {
        getTotalCount: (state) => state.pagination.totalCount,
    },
    actions: {
        async getAllProducts() {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.get('/allProducts');
                // console.log(data);
                this.rowData = data.data;
                this.products = data.data;
                this.pagination.totalCount = data.metaData.count;

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
        async getProducts(page = 1, limit = this.dataLimit, search = '', filterFormData = '') {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.get('/products', 
                    {
                        params: {
                            page: page,
                            perpage: limit,
                            search: search,
                            category_id: filterFormData.category_id,
                            brand_id: filterFormData.brand_id,
                        }
                    });
                // console.log(data);
                this.rowData = data.data.data;
                this.products = data.data.data;
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
        async storeProduct(formData) {
            this.is_loading = true;
            try {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
                const { data } = await appAxiosclient.post('/products', formData, config);
                // console.log(data);
                this.swal({
                    icon: 'success',
                    title: 'Data Stored Successfully!',
                })
                this.is_loading = false;
                this.router.push({ name: 'product.index' });
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
        async getProduct(product_id) {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.get(`/products/${product_id}`);
                console.log(data);
                this.product = data.data
                this.editFormData.category_id = data.data.product_category_id;
                this.editFormData.brand_id = data.data.product_brand_id;
                this.editFormData.supplier_id = data.data.product_supplier_id;
                this.editFormData.name = data.data.product_name;
                this.editFormData.original_price = data.data.product_original_price;
                this.editFormData.sell_price = data.data.product_sell_price;
                this.editFormData.stock = data.data.product_stock;
                this.editFormData.description = data.data.product_description;
                this.editFormData.code = data.data.product_code;
                this.editFormData.file = data.data.product_file;
                
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
        async updateProduct(formData, product_id) {
            this.is_loading = true;
            try {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                }
                const { data } = await appAxiosclient.post(`/products/${product_id}`, formData, config);
                // console.log(data);
                this.swal({
                    icon: 'success',
                    title: 'Data Updated Successfully!',
                })
                this.getProducts(this.pagination.currentPage, this.dataLimit)
                this.is_loading = false;
                this.router.push({ name: 'product.index' });
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
        async deleteProduct(product_id, callback) {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.delete(`/products/${product_id}`);
                // console.log(data);
                callback('success')
                this.swal({
                    icon: 'success',
                    title: 'Data Deleted Successfully!',
                })
                this.is_loading = false;
            } catch (error) {
                this.errors = error.response.data;
                this.swal({
                    icon: 'error',
                    title: 'Somethings Went Wrong!',
                    text: this.errors.message
                })
                callback('error')
                this.is_loading = false;
            }
        },
        async statusChange(product_id) {
            this.is_loading = true;
            try {
                const { data } = await appAxiosclient.get(`/productStatus/${product_id}`);
                console.log(data);
                this.swal({
                    icon: 'success',
                    title: 'Status Changed Successfully!',
                })
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
        
    }

})