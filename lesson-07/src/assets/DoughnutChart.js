import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    chartData: Object,
    options: Object,
  },
  methods: {
    update() {
      this.$data._chart.update()
    }
  },
  mounted () {
    console.log(this.chartData)
    this.renderChart(this.chartData, this.options)
  }
}