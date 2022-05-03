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
      let option = (option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label:{
              color: 'rgba(0,0,0,1)',
              backgroundColor: 'rgba(255,255,255)',
            }
          },
        },
        legend: {
          data: [
            "HTTPS",
            "STUN",
            "SSL",
            "General_UDP",
            "bilibili",
            "HTTP",
            "智汇云",
            "Apple Store",
            "HTTP_Download",
            "Flash格式的流媒体",
          ],
        },
        toolbox: {
          feature: {
            restore: { show: true },
            saveAsImage: {show: true},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "HTTPS",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "STUN",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "SSL",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "General_UDP",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "bilibili",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "HTTP",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "智汇云",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Apple Store",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "HTTP_Download",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Flash格式的流媒体",
            type: "line",
            stack: "Total",
            areaStyle: {},
            label: {
              // 标号
              show: true,
              position: "top",
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });
      // 4.传入数据
      this.chart.setOption(option);
    },
  },
};
</script>