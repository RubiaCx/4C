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
      let option = (option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {d}%",
        },
        legend: {
          orient: "vertical",
          left: 20,
        },
        // toolbox: {
        //   show: true,

        //   feature: {
        //     dataView: { show: true, readOnly: true },
        //     restore: { show: true },
        //   },
        // },
        series: [
          {
            avoidLabelOverlap: false,
            name: "",
            type: "pie",
            radius: "50%",
            itemStyle: {
              // borderRadius: 10,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 2,
            },
            label:{ color:"#fff" },
            data: [
              { value: 456, name: "大部分时候上网流畅" },
              { value: 354, name: "大部分时候上网卡顿" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
          },
        ],
      });
      // 4.传入数据
      this.chart.setOption(option);
    },
  },
};
</script>