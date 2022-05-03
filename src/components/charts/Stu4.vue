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
      let option = (option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          // max : 100,// 设置最大值是多少
          splitNumber: 5, // 设置分几段显示
          axisLabel: {
            show: true,
            interval: "auto",
            // formatter: '{value} %'  // 给每个数值添加%
          },
          show: true,
        },
        yAxis: {
          type: "category",
          data: ["本科生", "硕士研究生", "博士研究生"],
        },
        series: [
          {
            name: "心态良好",
            type: "bar",
            stack: "total",
            emphasis: {
              focus: "series",
              label: {
                show: true,
              },
            },

            data: [123, 292, 57],
          },
          {
            name: "焦虑",
            type: "bar",
            stack: "total",

            emphasis: {
              focus: "series",
              label: {
                show: true,
              },
            },
            data: [104, 85, 12],
          },
          {
            name: "不安",
            type: "bar",
            stack: "total",
            // label: {
            //   show: true,
            //   formatter: '{c}%'
            // },
            emphasis: {
              focus: "series",
              label: {
                show: true,
              },
            },
            data: [62, 78, 13],
          },
          {
            name: "烦闷",
            type: "bar",
            stack: "total",

            emphasis: {
              focus: "series",
              label: {
                show: true,
              },
            },
            data: [99, 123, 12],
          },
          {
            name: "其他",
            type: "bar",
            stack: "total",

            emphasis: {
              focus: "series",
              label: {
                show: true,
              },
            },
            data: [4, 4, 1],
          },
        ],
      });
      // 传入数据
      this.chart.setOption(option);
    },
  },
};
</script>