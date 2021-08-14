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
import {mapGetters} from "vuex";

export default {
    name: "Diagram",
    components: {
        DoughnutChart,
    },
    data(){
        return {
            chartData: {
                labels: [],
                datasets: [{
                    label: 'My First Dataset',
                    data: [],
                    backgroundColor: [
                        'red',
                        'blue',
                        'yellow',
                        'green',
                        'violet'
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
    computed: {
        ...mapGetters({
            chartDataState: 'getChartData',
        }),
    },
    created() {
        console.log('created');

        let i = 0;
        for (let data in this.chartDataState) {
            this.chartData.labels[i] = data;
            this.chartData.datasets[0].data[i] = this.chartDataState[data];
            i++;
        }

        //console.log(this.chartData);
    },
}
</script>

<style lang="scss" scoped>
.diagram {
    max-width: 300px;
}
</style>


