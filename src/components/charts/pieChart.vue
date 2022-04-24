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
        tooltip: {
          trigger: "item",
        },
        toolbox: {
          show: true,

          feature: {
            dataView: { show: true, readOnly: true },
            restore: { show: true },
          },
        },
        legend: {
          top: "bottom",
        },

        series: [
          {
            name: "人数",

            type: "pie",

            radius: ["40%", "70%"],

            avoidLabelOverlap: false,

            itemStyle: {
              borderRadius: 10,

              borderColor: "#fff",

              borderWidth: 2,
            },

            label: {
              show: false,
              position: "center",
            },

            emphasis: {
              label: {
                show: true,

                fontSize: "40",

                fontWeight: "bold",
              },
            },

            labelLine: {
              show: false,
            },

            data: [
              { value: 1048, name: "网口损坏" },

              { value: 735, name: "断网/连不上网" },

              { value: 580, name: "网速卡顿" },

              { value: 484, name: "一部分网站不能访问网" },

              { value: 300, name: "其它原因" },
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