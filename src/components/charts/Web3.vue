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
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ['line', 'bar'] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },

        xAxis: [
          {
            type: "category",
            data: ["很不满意", "不满意", "一般", "满意", "很满意"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "人数",
            min: 0,
            max: 300,
            interval: 50,
            // axisLabel: {
            //   formatter: '{value} '
            // }
          },
        ],
        series: [
          {
            name: "学生人数",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 人";
              },
            },
            data: [97, 115, 280, 225, 93],
          },
        ],
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
  },
};
</script>
