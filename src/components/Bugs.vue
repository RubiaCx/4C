<template>
  <el-row :gutter="25" class="page">
    <!-- xs sm md lg xl五个尺寸的默认值均为24 -->
    <el-col :xs="24" :sm="24" :lg="16">
      <div class="grid-content">
        <div class="grid-content-L1">
          <!-- 四个角的边框效果 -->
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">网络故障情况</div>
          <!-- 内容 -->
          <div class="main"><chart5></chart5></div>
        </div>
        <el-row :gutter="25">
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="grid-content-L2">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <!-- 标题 -->
            <div class="title">报故障的人员情况</div>
            <!-- 内容 -->
            <div class="main"><chart4></chart4></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="grid-content-L3">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <!-- 标题 -->
            <div class="title">故障解决路径</div>
            <!-- 内容 -->
            <div class="main"><chart1></chart1></div>
          </div>
        </el-col>
        </el-row>
      </div>

    </el-col>
    <el-col :xs="24" :sm="24" :lg="8">
      <div class="grid-content">
        <div class="grid-content-M1">
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">网络卡顿情况反馈</div>
          <!-- 内容 -->
          <div class="main"><chart3></chart3></div>
        </div>
        <div class="grid-content-M2">
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">各时段的网速体验</div>
          <!-- 内容 -->
          <div class="main"><chart2></chart2></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Test from "./test.vue";
const chart1 = () => import("./charts/Bugs1");
const chart2 = () => import("./charts/Bugs2");
const chart3 = () => import("./charts/Bugs3");
const chart4 = () => import("./charts/Bugs4");
const chart5 = () => import("./charts/Bugs5");
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
  },
};
</script>

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
    border: 2px solid rgba(125, 233, 231, 1);
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
  background-color: rgba(125, 233, 231, 0.1);

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
    border-image: linear-gradient(to right, #001748, #7de9e7, #001748) 1 10;
  }
}
.grid-content-L2 {
  margin-top: 5vh;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(125, 233, 231, 0.1);

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
    border-image: linear-gradient(to right, #001748, #7de9e7, #001748) 1 10;
  }
}
.grid-content-L3 {
  margin-top: 5vh;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(125, 233, 231, 0.1);

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
    border-image: linear-gradient(to right, #001748, #7de9e7, #001748) 1 10;
  }
}
.grid-content-M1 {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(125, 233, 231, 0.1);

  .main {
    width: 100%;
    height: 40vh;
  }
  .title {
    width: 100%;
    height: 5vh;
    font-size: 20px;
    line-height: 5vh;
    color: white;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #001748, #7de9e7, #001748) 1 10;
  }
}
.grid-content-M2 {
  margin-top: 5vh;
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40vh;
  border-radius: 4px;
  background-color: rgba(125, 233, 231, 0.1);

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
    border-image: linear-gradient(to right, #001748, #7de9e7, #001748) 1 10;
  }
}
</style>
