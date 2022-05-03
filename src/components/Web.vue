<template>
  <el-row :gutter="25" class="page">
    <!-- xs sm md lg xl五个尺寸的默认值均为24 -->
    <el-col :xs="24" :sm="24" :lg="12">
      <div class="grid-content">
        <div class="grid-content-L1">
          <!-- 四个角的边框效果 -->
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">园区网络的体验</div>
          <!-- 内容 -->
          <div class="main"><chart3></chart3></div>
        </div>
        <el-col :xs="24" :sm="24" :lg="12">
        <div class="grid-content-L2">
          <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div>
          <!-- 标题 -->
          <div class="title">网络故障原因</div>
          <!-- 内容 -->
          <div class="main"><chart1></chart1></div>
        </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="12">
          <div class="grid-content-L2">
            <div class="border_corner border_corner_left_top"></div>
            <div class="border_corner border_corner_right_top"></div>
            <div class="border_corner border_corner_left_bottom"></div>
            <div class="border_corner border_corner_right_bottom"></div>
            <!-- 标题 -->
            <div class="title">使用网络种类</div>
            <!-- 内容 -->
            <div class="main"><chart4></chart4></div>
          </div>
        </el-col>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="12">
      <div class="grid-content">
        <div class="grid-content-M1">
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
const chart1 = () => import("./charts/Web1");
const chart2 = () => import("./charts/Bugs2");
const chart3 = () => import("./charts/Web3");
const chart4 = () => import("./charts/Web4");
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    chart2,
    chart3,
    chart1,
    chart4,
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
    color: white;
    line-height: 5vh;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #001748, #7de9e7, #001748) 1 10;
  }
}
.grid-content-M1 {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 85vh;
  border-radius: 4px;
  background-color: rgba(125, 233, 231, 0.1);

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
    border-image: linear-gradient(to right, #001748, #7de9e7, #001748) 1 10;
  }
}
</style>
