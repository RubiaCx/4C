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
        series: [
          {
            label: {
              show: true,
              formatter: "{b}",
              normal: {
                color: "#000",
                textStyle: {
                  ellipsis: true, //圆角
                },
              },
            },
            itemStyle: {
              show: true,
              normal: {
                borderColor: "rgba(255,255,255,0.3)",
                borderWidth: 1,
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              label: {
                show: true,
                fontSize: "15",
                fontWeight: "bold",
              },
            },
            type: "treemap",
            data: [
              {
                name: "腾讯会议",
                value: 810,
              },
              {
                name: "bilibili直播",
                value: 260,
              },
              {
                name: "超星学习通",
                value: 102,
              },
              {
                name: "雨课堂",
                value: 195,
              },
              {
                name: "中国大学MOOC",
                value: 232,
              },
              {
                name: "智慧树",
                value: 23,
              },
              {
                name: "腾讯课堂",
                value: 152,
              },
              {
                name: "钉钉直播",
                value: 14,
              },
              {
                name: "QQ群直播",
                value: 40,
              },
              {
                name: "企业微信直播",
                value: 8,
              },
              {
                name: "其他",
                value: 50,
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