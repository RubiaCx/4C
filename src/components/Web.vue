<template>
  <el-row :gutter="25" class="page">
    <!-- xs sm md lg xl五个尺寸的默认值均为24 -->
    <el-col :xs="24" :sm="24" :lg="6">
      <div class="grid-content">
        <div class="grid-content-L1">
          <!-- 四个角的边框效果 -->
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">网络故障原因</div>
          <!-- 内容 -->
          <div class="main"><pieChart></pieChart></div>
        </div>
        <div class="grid-content-L2">
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">学生</div>
          <!-- 内容 -->
          <div class="main"><radarChart></radarChart></div>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="18">
      <div class="grid-content">
        <div class="grid-content-M1">
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">网络</div>
          <!-- 内容 -->
          <div class="main"><barChart></barChart></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Test from "./test.vue";
const barChart = () => import("./charts/barChart");
const radarChart = () => import("./charts/radarChart");
const pieChart = () => import("./charts/pieChart");
const test = () => import("./test");
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    barChart,
    radarChart,
    pieChart,
    test,
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
    color: white;
    line-height: 5vh;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #001748, #1b7ef2, #001748) 1 10;
  }
}
.grid-content-M1 {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 85vh;
  border-radius: 4px;
  background-color: rgba(27, 126, 242, 0.1);

  .main {
    width: 100%;
    height: 80vh;
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