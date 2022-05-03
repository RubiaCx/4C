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
        toolbox: {
          show: true,

          feature: {
            dataView: { show: true, readOnly: true },
            restore: { show: true },
          },
        },
        legend: {
          data: ["网络体验不佳的人数"],
          orient: "vertical",
          left: 20,
        },
        label:{ color:"#fff" },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "8：00~11：40", max: 340 },
            { name: "11：40~14：30", max: 340 },
            { name: "14：30~17：40", max: 340 },
            { name: "17：40~19：00", max: 340 },
            { name: "19：00~21：35", max: 340 },
            { name: "21：35~1：00", max: 340 },
            { name: "1：00~8：00", max: 340 },
          ],
        },
        series: [
          {
            name: "网络体验不佳的人数",
            type: "radar",

            data: [
              {
                value: [260, 129, 272, 124, 312, 189, 53, 283],
                // name: "Allocated Budget",
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value;
                  },
                },
                lineStyle: {
                    color: 'rgba(124, 211, 235, 1)',
                },
                 areaStyle: {
                    color: 'rgba(124, 211, 235, 1)',
                }
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