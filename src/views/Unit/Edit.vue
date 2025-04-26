<script setup>
//Import All Libraries
import { useUnitStore } from '@/stores/unit';
import _ from 'lodash';
import { ErrorMessage } from 'vee-validate';
import { inject, onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

//All Instance or Object
const unitStore = useUnitStore();
const router = useRouter();
const swal = inject('$swal');
const route = useRoute();

unitStore.router = router;
unitStore.swal = swal;
//All Variables
// const imageSrc = ref(null);

const schema = reactive({
    name: 'required',
    short_name: 'required',
})

//All Method or Function
const UpdateUnit = () => {
    unitStore.updateUnit(unitStore.editFormData, route.params.id)
}

//All Hooks, Computed, Watcher
onMounted(() => {
    unitStore.getUnit(route.params.id)
})
</script>

<template>
    <div class="unit-content">
        <div class="container-fluid">
            <!-- unit Title -->
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-primary">Unit Edit</h5>
                                <router-link :to="{ name: 'unit.vue' }" class="btn btn-success text-bold"><i
                                        class="fas fa-arrow-left"></i> Unit List</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Table -->
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <vee-form :validation-schema="schema" @submit="UpdateUnit">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label for="name">Unit Name</label>
                                            <vee-field type="text" v-model="unitStore.editFormData.name" class="form-control" placeholder="Enter Unit Name"
                                                name="name" />
                                            <ErrorMessage class="text-danger" name="name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label for="code">Unit Short Name</label>
                                            <vee-field type="text" v-model="unitStore.editFormData.short_name" class="form-control" placeholder="Enter Unit Short Name"
                                                name="code" />
                                            <ErrorMessage class="text-danger" name="code" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="">
                                            <button type="submit" class="btn btn-secondary">Update</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </vee-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>