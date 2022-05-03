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
            name: "故障原因",
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
              { value: 28, name: "宿舍网口损坏" },
              { value: 182, name: "断网或连不上网" },
              { value: 277, name: "信号不好" },
              { value: 14, name: "设备故障（手机、电脑、路由器）" },
              { value: 274, name: "网速卡顿" },
              { value: 40, name: "频繁登录" },
              { value: 5, name: "未被校园网覆盖" }, ],
          },
          {
            name: "解决方法",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              formatter: "{b|{b}:}\n{per|{d}%}  ",
              color: '#000',
              backgroundColor: "#fff",
              borderColor: "rgba(255,255,255,0.3)",
              borderRadius: 4,
              borderWidth: 1,
              padding: 4,
              interval: 0,  //让所有标签全部显示
              rich: {
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  lineHeight:28,
                },
                per: {
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: 14,
                  lineHeight: 14,
                },
              } 
              
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
                padding: 6,
              },
              label: {
                show: true,
                padding: 8,
                rich: {
                  b: {
                    fontSize: 20,
                    lineHeight:40,
                  },
                  per: {
                    fontSize: 20,
                    lineHeight: 20,
                  },
              } 
              },
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 2,
            },
            data: [
              { value: 222, name: "自己解决" },
              { value: 55, name: "求助同学或社交媒体" },
              { value: 38, name: "报修" },
              { value: 39, name: "其它" },
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