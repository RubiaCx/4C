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
          // formatter: "{a} <br/>{b} : {c} ({d}%)",
        },

        legend: [
          {
            show: true,
            orient: "vertical",
            left: "left",
            data: ["电信", "联通", "教育网"],
          },
          {
            show: true,
            orient: "vertical",
            left: "right",
            data: ["天马", "德智", "望麓桥", "南校", "北校"],
          },
        ],
        series: [
          {
            name: "运营商总量（G）",
            type: "pie",
            // roseType: 'area',
            radius: [0, 60],
            center: ["30%", "50%"],
            data: [
              { value: 10, name: "电信" },
              { value: 5, name: "联通" },
              { value: 6, name: "教育网" },
            ],
            itemStyle: {
              // borderRadius: 10,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 2,
            },
            label:{ 
              show: false,
              // color:"#fff" ,
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
          {
            name: "区域结点总数（千个）",
            type: "pie",
            radius: [0, 60],
            center: ["70%", "50%"],
            data: [
              { value: 30, name: "天马" },
              { value: 2, name: "北校" },
              { value: 5, name: "南校" },
              { value: 3, name: "德智" },
              { value: 2, name: "望麓桥" },
            ],
            itemStyle: {
              // borderRadius: 10,
              borderColor: "rgba(255,255,255,0.3)",
              borderWidth: 2,
            },
            label:{ 
              show: false,
              // color:"#fff" ,
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