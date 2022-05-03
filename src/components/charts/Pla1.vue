<template>
  <!-- 准备具有宽高的容器 -->
  <div style="width: 100%; height: 100%" ref="chart"></div>
</template>

<script>
import theme from '../../../static/theme/t2.js';
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
      this.chart = Echarts.init(this.$refs.chart, theme );
      //3.配置数据
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['超星学习通', '雨课堂', '中国大学MOOC', '智慧树', '腾讯会议', '腾讯课堂', '钉钉直播', 'QQ群直播', '企业微信直播', 'bilibili直播', '其它']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [

          {
            name: "本科生",
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [53, 103, 100, 14, 230, 82, 1,29,1,65,8]
          },
          {
            name: "硕士研究生",
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [45, 86, 119, 8, 355, 61, 10,9,6,159,36]
          },
          {
            name: "博士研究生",
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [4, 6, 13, 1, 65, 9, 3,2,1,36,6]
          },

        ]
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
  },
};
</script>
