<template>
  <div class="page" :style="background">
    <!-- 侧边栏 -->
    <div class="page-head">
      <div class='icon'><img src="../assets/logo.png" alt="LOGO"></img></div>
      <div class="title">线上教学质量数据可视化</div>
      <div class="menu">
        <el-menu
          default-active="/Info/Sum"
          router
          mode="horizontal"
          class="el-menu-demo" 
          :unique-opened="true"
          :collapse="isCollapse"
          text-color="#fff"
          active-text-color="#7de9e7"
        >
        <el-menu-item index="/Info/Sum">
            <i class="el-icon-s-home"></i>
            <span slot="title">总体概述</span>
          </el-menu-item>
          <el-menu-item index="/Info/Web">
            <i class="el-icon-s-data"></i>
            <span slot="title">网络概况</span>
          </el-menu-item>
          <el-menu-item index="/Info/Plat">
            <i class="el-icon-s-platform"></i>
            <span slot="title">教学平台分析</span>
          </el-menu-item>
          <el-menu-item index="/Info/Bug">
            <i class="el-icon-loading"></i>
            <span slot="title">故障分析</span>
          </el-menu-item>
          <el-menu-item index="/Info/Stu">
            <i class="el-icon-s-custom"></i>
            <span slot="title">学生信息</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>

    <div class="page-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/Info/Sum",
      isCollapse: false,
      // background: {
      //   // 背景图片地址
      //   backgroundImage: "url(" + require("../../static/theme/bg.png") + ")",
      //   // 背景图片是否重复
      //   backgroundRepeat: "no-repeat",
      //   // 背景图片大小
      //   backgroundSize: "cover",
      //   // 背景图片位置
      //   backgroundPosition: "center top",
      // },
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
  // padding-left: 5px;
  overflow: hidden;
  background-image: linear-gradient(145deg,#020818,#060c36,#191b7c,#203888,#191b7c,#060c36);
  background-size: 400%;
  animation: bganimation 15s infinite;
  }
  @keyframes bganimation {
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
}
.page-head {
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.3);
  // background-color: #001748;
  border-radius: 0 0 20px 20px;
}
.icon {
  // background-color:#c03321;
  float: left;
  width: 10vh;
  height: 10vh;
  img {
    width: 10vh;
    height: 10vh;
  }
}
.title {
  // background-color:#c03321;
  padding-left: 1vw;
  font-size: 4vmin; /* 自适应 */
  line-height: 10vh;
  color: white;
  font-weight: bold;
  font-style: italic;
  height: 100%;
  width: 30vw;
  float: left;
}
.menu {
  // background-color:#88231e;
  height: 10vh;
  width: 50vw;
  float: right;
}
.el-menu-demo {
  float: right;
  border: none;
}
.page-body {
  height: 90vh;
  width: 100vw;
}
.el-menu {
  background-color: transparent !important;
  margin-right: 1vw;
}
.el-menu-item {
  background-color: transparent !important; //你要修改的颜色
  padding-left: 1vw;
  padding-right: 1vw;
  height: 10vh;
  line-height: 10vh;
  font-size: 2vmin;
  border-bottom: none ;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none ;
}
.el-menu.el-menu--horizontal{
  border-bottom: transparent !important;
}
</style>