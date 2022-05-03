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
          // formatter: '{b}内占比{d}%'
        },

        series: [
          {
            name: "使用腾讯会议的比例",
            type: "pie",
            radius: ["40%", "80%"],
            // startAngle = 30,
            
            data: [
              { value: 96.15, name: "材料科学与工程学院" },
              { value: 76, name: "电气与信息工程学院" },
              { value: 73.53, name: "法学院" },
              { value: 100, name: "工商管理学院" },
              { value: 100, name: "化学化工学院" },
              { value: 80, name: "环境科学与工程学院" },
              { value: 70.69, name: "机械与运载工程学院" },
              { value: 82.86, name: "建筑与规划学院" },
              { value: 82.35, name: "教育科学研究院" },
              { value: 69.68, name: "金融与统计学院" },
              { value: 82.35, name: "经济与贸易学院" },
              { value: 89.58, name: "马克思主义学院" } ,
              { value: 66.67, name: "岳麓书院" },
              { value: 100, name: "设计艺术学院" },
              { value: 78.57, name: "生物学院" },
              { value: 90.91, name: "数学学院" },
              { value: 100, name: "体育学院" },
              { value: 90, name: "外国语学院" },
              { value: 74.68, name: "物理与微电子科学学院" },
              { value: 88.24, name: "新闻与传播学院" },
              { value: 91.67, name: "信息科学与工程学院" },
              { value: 93.33, name: "公共管理学院" },
              { value: 100, name: "中国语言文学学院" },
              { value: 100, name: "半导体学院" },
            ],
            itemStyle: {
              borderRadius: 2,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 2,
            },
            labelLine: {
              show: false,
            },
            label:{ 
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
                fontSize: "30",
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
