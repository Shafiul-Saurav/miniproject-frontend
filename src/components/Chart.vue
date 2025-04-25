<script setup>
// Import All Libraries
import { Chart, registerables } from 'chart.js';
import { computed, ref } from 'vue';
import { BarChart, useBarChart } from 'vue-chart-3';

// All Instance or Object
const props = defineProps({
    title: String,
    labels: Array,
    data: Array,
});
Chart.register(...registerables);

// All Method or Function

// All Variables
const options = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: props.title,
        },
    },
});

// All Hooks, Computed, Watcher
const chartData = computed(() => ({
    labels: props.labels,
    datasets: [
        {
            data: props.data,
            backgroundColor: ['#A95EEA', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
    ],
}));

const { barChartProps, barChartRef } = useBarChart({ chartData });
</script>

<template>
    <div id="app" style="width: 500px">
        <BarChart v-bind="barChartProps" :options="options" />
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
