<script setup>
//Import All Libraries
import { useUnitStore } from '@/stores/unit';
import _ from 'lodash';
import { inject, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

//All Instance or Object
const unitStore = useUnitStore();
const router = useRouter();
const swal = inject('$swal');

unitStore.router = router;
unitStore.swal = swal;
//All Variables
const searchKeyword = ref('')
const formData = reactive({
    name: null,
    short_name: null,
})

const schema = reactive({
    name: 'required',
    short_name: 'required',
})

//All Method or Function
// const onFileChange = (e) => {
//     // console.log(e);
//     formData.file = e.target.files[0]
// }

const StoreUnit = async (values, { resetForm }) => {
    try {
        await unitStore.storeUnit(formData);

        Object.assign(formData, {
            name: null,
            short_name: null
        })

        // Clear the file input element
        // const fileInput = document.querySelector('#file');
        // if (fileInput) {
        //     fileInput.value = ''; // Reset the file input
        // }

        // Reset the validation state
        resetForm();

        await unitStore.getUnits(unitStore.pagination.currentunit, unitStore.dataLimit);
    } catch (error) {
        console.error(error);
    }
};

const DeleteUnit = (id, name) => {
    swal.fire({
        title: `Do you want to delete data: ${id, name}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            unitStore.deleteUnit(id, (status) => {
                if (status == 'success') {
                    unitStore.getUnits(unitStore.pagination.currentunit, unitStore.dataLimit)
                }
            })
        }
    });
}

//All Hooks, Computed, Watcher
onMounted(() => {
    unitStore.getUnits(unitStore.pagination.currentunit, unitStore.dataLimit);
})

watch(
    searchKeyword,
    _.debounce((current, previous) => {
        console.log(current);
        unitStore.getUnits(unitStore.pagination.currentunit, unitStore.dataLimit, current)
    }, 500)
)
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
                                <h5 class="text-primary">Unit List</h5>
                                <!-- <router-link :to="{ name: 'unit.create' }" class="btn btn-success text-bold"><i
                                        class="fas fa-plus-circle"></i> Create</router-link> -->
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
                            <vee-form :validation-schema="schema" @submit="StoreUnit">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label for="name">Unit Name</label>
                                            <vee-field type="text" v-model="formData.name" class="form-control" placeholder="Enter Unit Name"
                                                name="name" />
                                            <ErrorMessage class="text-danger" name="name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label for="code">Unit Short Name</label>
                                            <vee-field type="text" v-model="formData.short_name" class="form-control" placeholder="Enter Unit Short Name"
                                                name="code" />
                                            <ErrorMessage class="text-danger" name="code" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </vee-form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search Option -->
            <div class="row">
                <div class="col-md-12">
                    <div class="card p-3">
                        <div class="row">
                            <div class="col-md-8">
                                <h5 class="text-primary text-start">unit Count: {{ unitStore.getTotalCount }} </h5>
                            </div>
                            <div class="col-md-4">
                                <input type="search" v-model="searchKeyword" class="form-control" placeholder="Search...">
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
                            <table class="table table-striped-columns">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Short Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(unit, index) in unitStore.units" :key="unit.id">
                                        <th scope="row">{{ (unitStore.pagination.currentunit*unitStore.dataLimit) - unitStore.dataLimit+index+1 }}</th>
                                        <td>{{ unit.name }}</td>
                                        <td>{{ unit.short_name }}</td>
                                        <!-- <td>
                                            <template v-if="unit.file != null">
                                                <img :src="unit.file" alt="" class="img-fluid" style="width: 70px; height: 70px;">
                                            </template>
                                        </td> -->
                                        <!-- <td>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                id="statusChange" :checked="unit.is_active" @change.prevent="unitStore.changeStatus(unit.id)">
                                            </div>
                                        </td> -->
                                        <td>
                                            <router-link :to="{ name: 'unit.edit', params: { id: unit.id}}" class="btn text-info btn-sm"><i class="fas fa-pen"></i></router-link>
                                            <a href="javascript:void(0)" @click.prevent="DeleteUnit(unit.id, unit.name)" class="btn text-danger btn-sm"><i class="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-end m-3">
                            <v-pagination 
                            v-model="unitStore.pagination.currentunit"
                            :units="unitStore.pagination.lastunit"
                            :range-size="1"
                            active-color="#776acF"
                            @update:modelValue="unitStore.getUnits(unitStore.pagination.currentunit, unitStore.dataLimit)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>