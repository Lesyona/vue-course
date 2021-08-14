<template>
    <div class="diagram">
        <DoughnutChart
            v-if="loaded"
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
            loaded: false,
            chartData: null,
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
        chartState() {
            console.log(this.chartDataState);
            return this.chartDataState;
        }
    },
    mounted() {
        console.log('mounted');

        this.chartData = {
            labels: ['Red'],
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
        }
    },
    watch: {
        chartState() {
            let i = 0;
            for (let data in this.chartDataState) {
                this.chartData.labels[i] = data;
                this.chartData.datasets[0].data[i] = this.chartDataState[data];
                i++;
            }

            this.loaded = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.diagram {
    max-width: 300px;
}
</style>


