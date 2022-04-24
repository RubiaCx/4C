<template>
  <div class="com-contain">
    <div class="com-chart" ref="seller_ref"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: []
    }
  },
  mounted () {
    this.initChart()
    // this.getData()
    this.updateChart()
  },
  methods: {
    // 初始化chartInstance对象
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.seller_ref)
    },

    // 更新图表
    updateChart () {
      const option = {
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
       	  type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>

<style>
.com-contain {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.com-chart {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>

