<template>
    <div class="diagram">
        <DoughnutChart
            :chart-data="chartData"
            :options="options"
        ></DoughnutChart>
    </div>
</template>

<script>
import DoughnutChart from "../assets/DoughnutChart.js";

export default {
    name: "Diagram",
    components: {
        DoughnutChart,
    },
    data(){
        return {
            chartData: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                }]
            },
            options: {
                responsive: true,
                legend: {
                    display: true,
                    position: 'right',
                },
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.diagram {
    max-width: 300px;
}
</style>