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
          trigger: "item",
          formatter: "{b}: {d}%",
        },
        legend: {
          // orient: "horizon",
          left: "center",
          // top:"center",
        },
        
        series: [
          {
            name: "人数",
            type: "pie",
            radius: "50%",
            // startAngle = 30,
            data: [
              { value: 196, name: "手机" },
              { value: 386, name: "电脑" },
              { value: 233, name: "平板电脑" },
              { value: 3, name: "其他" },
            ],
            itemStyle: {
              // borderRadius: 10,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 2,
            },
            labelLine: {
              show: false,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
          },
        ],
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
  },
};
</script>