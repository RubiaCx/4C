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
        toolbox: {
          show: true,

          feature: {
            dataView: { show: true, readOnly: true },
            restore: { show: true },
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              // borderRadius: 10,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 2,
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
            data: [
              { value: 2, name: "宿舍网口损坏" },
              { value: 17, name: "连不上网" },
              { value: 24, name: "网速卡顿" },
              { value: 3, name: "设备故障（手机、电脑、路由器）" },
              { value: 2, name: "施工挖断网线/断网" },
              { value: 4, name: "无法连接/不知道如何连接有线网络" },
              { value: 0, name: "其它故障" },
            ],
          },
          {
            name: "Access From",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              interval:0,  //让所有标签全部显示
              // rotate:-30, //让标签旋转一定的角度  
              formatter: "{b|{b}:}\n{per|{d}%}  ",
              backgroundColor: "#F6F8FC",
              borderColor: "#8C8D8E",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 2,
            },
            data: [
              { value: 16, name: "自己解决" },
              { value: 0, name: "网上百度解决" },
              { value: 9, name: "求助同学或社交媒体" },
              { value: 2, name: "报修" },
              { value: 0, name: "其它" },
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