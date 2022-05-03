<template>
  <!-- 准备具有宽高的容器 -->
  <div style="width: 100%; height: 100%" ref="chart"></div>
</template>

<script>
import theme from "../../../static/theme/t2.js";
let Echarts = require("echarts/lib/echarts"); //基础实例 注意不要使用import

export default {
  data() {
    return { chart: null };
  }, //图表实例
  mounted() {
    this.init(),
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
  },
  methods: {
    init() {
      //2.初始化
      this.chart = Echarts.init(this.$refs.chart, theme);
      //3.配置数据
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label:{
              color: 'rgba(0,0,0,1)',
              backgroundColor: 'rgba(255,255,255)',
            }
          },

        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: true },
        //     restore: { show: true },
        //     saveAsImage: { show: true },
        //   },
        // },
        legend: {
          data: ["综合得分", "第1位", "第2位", "第3位"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            // prettier-ignore
            data: ['无线校园网', '有线校园网', '非校园网'],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "使用人数",
            position: "right",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {},
            },
          },

          {
            type: "value",
            name: "Precipitation",
            position: "right",
            alignTicks: true,
            show: false,
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {},
            },
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "综合得分",
            position: "left",
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {},
            },
          },
        ],
        series: [
          {
            name: "第1位",
            type: "bar",
            data: [573, 108, 129],
          },
          {
            name: "第2位",
            type: "bar",
            yAxisIndex: 1,
            data: [66, 70, 98],
          },
          {
            name: "第3位",
            type: "bar",
            yAxisIndex: 1,
            data: [15, 89, 66],
          },
          {
            name: "综合得分",
            type: "line",
            yAxisIndex: 2,
            data: [2.3, 0.8, 0.68],
            color: '#f2d643',
            emphasis: { focus: 'series' },
            // areaStyle: {}, // 面积
          },
        ],
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
  },
};
</script>