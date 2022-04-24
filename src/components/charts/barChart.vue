<template>
  <!-- 准备具有宽高的容器 -->
  <div style="width: 100%; height: 100%" ref="chart"></div>
</template>

<script>
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
      this.chart = Echarts.init(this.$refs.chart);
      //3.配置数据
      let option = {
        title: {
          text: "",

          subtext: "kbps",
        },

        tooltip: {
          trigger: "axis",
        },

        legend: {
          data: ["带宽", "吞吐量"],
        },

        toolbox: {
          show: true,

          feature: {
            dataView: { show: true, readOnly: true },

            magicType: { show: true, type: ["line", "bar"] },

            restore: { show: true },

          },
        },

        calculable: true,

        xAxis: [
          {
            type: "category",

            // prettier-ignore

            data: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22','24'],
          },
        ],

        yAxis: [
          {
            type: "value",
          },
        ],

        series: [
          {
            name: "带宽",

            type: "bar",

            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
            ],

            markPoint: {
              data: [
                { type: "max", name: "Max" },

                { type: "min", name: "Min" },
              ],
            },

            markLine: {
              data: [{ type: "average", name: "Avg" }],
            },
          },

          {
            name: "吞吐量",

            type: "bar",

            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
            ],

            markPoint: {
              data: [
                { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },

                { name: "Min", value: 2.3, xAxis: 11, yAxis: 3 },
              ],
            },

            markLine: {
              data: [{ type: "average", name: "平均值" }],
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