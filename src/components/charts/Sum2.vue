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
          
        },
        yAxis: {
          type: "category",
          data: ["本科生", "硕士研究生", "博士研究生"],
        },
        series: [
          {
            name: "理学",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [112, 6, 5],
          },
          {
            name: "工学",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [84, 88, 29],
          },
          {
            name: "商学",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [22, 173, 17],
          },
          {
            name: "文学",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [51, 63, 15],
          },
          {
            name: "其它",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [2, 129, 15],
          }
        ],
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
  },
};
</script>