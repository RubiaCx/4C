<template>
  <el-row class="page">
    <!-- 侧边栏 -->
    <el-col :span="isCollapse ? 2 : 3" class="pageside">
      <!-- <el-row class="collapsBtn">
        <el-button
          plain
          icon="el-icon-menu"
          @click="toggleCollapse"
          circle
        ></el-button>
      </el-row> -->
      <el-row class="menu">
        <el-menu
          default-active="/Home/Overall"
          class="el-menu-vertical-demo"
          router
          :unique-opened="true"
          :collapse="isCollapse"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item @click="toggleCollapse">
            <i class="el-icon-menu"></i>
            <!-- <span slot="title"></span> -->
          </el-menu-item>
          <el-menu-item index="/Home/Overall">
            <i class="el-icon-house"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-data"></i>
            <span slot="title">详细信息</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-row>
    </el-col>

    <!-- 主栏 -->
    <el-col :span="isCollapse ? 22 : 21" class="pagebody">
      <div class="title">线上教学质量数据可视化</div>
      <div class="body">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/Home/Overall",
      isCollapse: true,
    };
  },
  methods: {
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  mounted() {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped" lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.page {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color:black; */
  /* background-color:#c03321;#88231e */
}
.pageside {
  height: 100%;
  background-color: #242424;
  .menu {
    // display: flex;
    // align-items: center; /*侧轴上居中*/
    // justify-content: center;
    margin-top: 20px;
    margin-left: 10px;
  }
}
.pagebody {
  // background-color: #88231e;
  height: 100%;
  padding-left:1vw;
  .title {
    // background-color: pink;
    // position: absolute;
    height: 10vh;
    // left: 15vw;
     margin-left: 1vw;
    line-height: 10vh;
    font-family: SiYuanSerif;
    font-size: 3vmin; /* 自适应 */
  }
  .body {
    width: 100%;
    height: 100%;
   
    // position: absolute;
    // top: 10vh;
    // left: 13vw;
    background-color: pink;
  }
}
.el-menu {
  background-color: transparent !important;
}
.el-menu-item {
  background-color: transparent !important; //你要修改的颜色
}
</style>