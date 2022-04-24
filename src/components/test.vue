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

        legend: {
          data: ["使用人数", "占用流量"],
        },

        radar: {
          // shape: 'circle',

          indicator: [
            { name: "MOOC", max: 6500 },

            { name: "知到", max: 16000 },

            { name: "腾讯会议", max: 30000 },

            { name: "腾讯课堂", max: 38000 },

            { name: "学堂在线", max: 52000 },

            { name: "钉钉", max: 25000 },
          ],
        },

        series: [
          {
            name: "Budget vs spending",

            type: "radar",

            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],

                name: "使用人数",

                label: {
                  show: true,

                  formatter: function (params) {
                    return params.value;
                  },
                },
              },

              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],

                name: "占用流量",

                label: {
                  show: true,

                  formatter: function (params) {
                    return params.value;
                  },
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