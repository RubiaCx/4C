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
          trigger: "item",
          formatter: "{b}: {d}%",
        },
        // toolbox: {
        //   show: true,

        //   feature: {
        //     dataView: { show: true, readOnly: true },
        //     restore: { show: true },
        //   },
        // },
        // legend: {
        //       show: true,
        //       // // top: "bottom",
        //       orient: "vertical",
        //       left: 20,
        //     },
        series: [
          {
            name: "人数",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 5,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 1,
            },

            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 28, name: "宿舍网口损坏" },
              { value: 182, name: "断网/连不上网" },
              { value: 277, name: "信号不好" },
              { value: 274, name: "网速卡顿" },
              { value: 14, name: "设备故障（手机/电脑/路由器）" },
              { value: 40, name: "频繁登录" },
              { value: 7, name: "其它原因" },
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
