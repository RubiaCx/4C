<template>
  <el-row :gutter="25" class="page">
    <!-- xs sm md lg xl五个尺寸的默认值均为24 -->
    <el-col :xs="24" :sm="24" :lg="14">
      <div class="grid-content">
        <div class="grid-content-L1">
          <!-- 四个角的边框效果 -->
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">网络偏好</div>
          <!-- 内容 -->
          <div class="main"><chart1></chart1></div>
        </div>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="grid-content-L2">
            <!-- 四个角的边框效果 -->
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <!-- 标题 -->
            <div class="title">设备偏好</div>
            <!-- 内容 -->
            <div class="main"><chart2></chart2></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="grid-content">
            <div class="grid-content-L3">
              <div class="border_corner border_corner_left_top"></div>
              <div class="border_corner border_corner_right_top"></div>
              <div class="border_corner border_corner_left_bottom"></div>
              <div class="border_corner border_corner_right_bottom"></div>
              <div class="title">校园网反馈词云图</div>
              <div class="main">
                <wordcloud style="height:100%;width:100%;"
                  :data="defaultWords"
                  nameKey="name"
                  valueKey="value"
                  :color="myColors"
                  :showTooltip="false"
                  :wordClick="wordClickHandler">
                </wordcloud>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </el-col>
    <!-- 
    <el-col :xs="24" :sm="24" :lg="8">
      
    </el-col> -->
    <el-col :xs="24" :sm="24" :lg="10">
      <div class="grid-content">
         <div class="grid-content-R1">
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">学习态度分析</div>
          <!-- 内容 -->
          <div class="main"><pieChart></pieChart></div>
        </div>
        <div class="grid-content-R2">
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">心理状况分析</div>
          <!-- 内容 -->
          <div class="main"><pieChart></pieChart></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import wordcloud from "vue-wordcloud";
const chart1 = () => import("./charts/Stu1");
const chart2 = () => import("./charts/Stu2");
const barChart = () => import("./charts/barChart");
const radarChart = () => import("./charts/radarChart");
const pieChart = () => import("./charts/pieChart");
export default {
  data() {
    return {
      myColors: [
        "#fff",
        "#2276fc",
        "#5fd5ec",
        "#ffcf5f",
        "#4346d3",
        "#f2d643",
        "#ee6f7c",
      ],
      spiral: "rectangular",
      defaultWords: [
        {
          name: "快一点",
          value: 10,
        },
        {
          name: "改善延迟",
          value: 9,
        },
        {
          name: "便宜",
          value: 8,
        },
        {
          name: "不要经常重连",
          value: 7,
        },
        {
          name: "取消收费",
          value: 7,
        },
        {
          name: "wifi稳定点",
          value: 6,
        },
        {
          name: "断网",
          value: 6,
        },
        {
          name: "宿舍信号差",
          value: 6,
        },
      ],
    };
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log("wordClickHandler", name, value, vm);
    },
  },
  components: {
    chart1,
    chart2,
    barChart,
    radarChart,
    pieChart,
    wordcloud,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 62.5%;
}
.page {
  padding: 2vmin;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  /* min-height: 60vh; */
}
.el-col {
  height: 85vh;
  text-align: center;
}
.grid-content {
  height: 100%;
  border-radius: 4px;
  position: relative;
  width: 100%;
  .border_corner {
    z-index: 2500;
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0);
    border: 2px solid rgba(27, 126, 242, 1);
  }
  .border_corner_left_top {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 4px;
  }
  .border_corner_right_top {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 4px;
  }
  .border_corner_left_bottom {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
    border-bottom-left-radius: 4px;
  }
  .border_corner_right_bottom {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
    border-bottom-right-radius: 4px;
  }
}
.grid-content-L1 {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(27, 126, 242, 0.1);

  .main {
    width: 100%;
    height: 35vh;
  }
  .title {
    width: 100%;
    height: 5vh;
    font-size: 20px;
    line-height: 5vh;
    font-size: 20px;
    color: white;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #001748, #1b7ef2, #001748) 1 10;
  }
}
.grid-content-L2 {
  margin-top: 5vh;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(27, 126, 242, 0.1);

  .main {
    width: 100%;
    height: 35vh;
  }
  .title {
    width: 100%;
    height: 5vh;
    font-size: 20px;
    line-height: 5vh;
    font-size: 20px;
    color: white;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #001748, #1b7ef2, #001748) 1 10;
  }
}
.grid-content-L3 {
  margin-top: 5vh;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(27, 126, 242, 0.1);

  .main {
    width: 100%;
    height: 35vh;
  }
  .title {
    width: 100%;
    height: 5vh;
    font-size: 20px;
    line-height: 5vh;
    font-size: 20px;
    color: white;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #001748, #1b7ef2, #001748) 1 10;
  }
}
.grid-content-R1 {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(27, 126, 242, 0.1);

  .main {
    width: 100%;
    height: 35vh;
  }
  .title {
    width: 100%;
    height: 5vh;
    font-size: 20px;
    color: white;
    line-height: 5vh;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #001748, #1b7ef2, #001748) 1 10;
  }
}
.grid-content-R2 {
  margin-top: 5vh;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(27, 126, 242, 0.1);

  .main {
    width: 100%;
    height: 35vh;
  }
  .title {
    width: 100%;
    height: 5vh;
    font-size: 20px;
    line-height: 5vh;
    color: white;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #001748, #1b7ef2, #001748) 1 10;
  }
}
</style>