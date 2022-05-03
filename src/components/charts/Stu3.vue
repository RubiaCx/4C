<template>
  <!-- 准备具有宽高的容器 -->
  <div style="width: 100%; height: 100%" ref="chart"></div>
</template>

<script>
import theme from "../../../static/theme/t2.js";
let Echarts = require("echarts/lib/echarts"); //基础实例 注意不要使用import
require("echarts/lib/chart/bar"); //按需引入 bar = 柱状图

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
          formatter: "{b}",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        color: ['#15c6e4','#2a58df', '#fff',],
        legend: {
          data: ["本科生", "硕士研究生", "博士研究生"],
          orient: "vertical",
          left: 20,
        },
       
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "线上学习适应度", max: 80 },
            { name: "线上课堂专注度", max: 70 },
            { name: "自我约束能力", max: 60 },
            { name: "学习主动性", max: 70 },
            { name: "制定计划能力", max: 70 },
            { name: "完成计划能力", max: 70 },
            { name: "课后作业完成情况", max: 70 },
          ],
        },
        series: [
          {
            name: "‘很好’和‘好’在总体的占比",
            type: "radar",
            data: [
              {
                value: [51.66, 32.85, 33.38, 40.96, 35.92, 34.68, 49.44],
                name: "本科生",
                lineStyle: {
                    color: '#15c6e4',
                },
                 areaStyle: {
                    color: 'rgba(21, 198, 228, 1)',     
                }
              },
              {
                value: [71.17, 55.46, 54.8, 58.74, 57.65, 56.33, 66.16],
                name: "硕士研究生",
                lineStyle: {
                    color: '#2a58df',
                },
                 areaStyle: {
                    color: 'rgba(42, 88, 223, 0.3)',
                }
              },
              {
                value: [75.31, 64.2, 59.26, 67.9, 66.66, 64.19, 65.44],
                name: "博士研究生",
                label: {
                  show: true,
                  color: '#fff',
                  formatter: function (params) {
                    return params.value+'%';
                  },
                },
                lineStyle: {
                    color: '#fff',
                    type: 'dashed'
                },

              },
               
            ],
          },
        ],
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
  },
};
</script>