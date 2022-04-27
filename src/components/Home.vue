<template>
  <el-row class="page" :style="background">
    <!-- 侧边栏 -->
    <el-col :span="isCollapse ? 1 : 3" class="pageside">
      <div class='glass'></div>
      <el-row class="menu">
        <el-menu
          default-active="/Info/Web"
          class="el-menu-vertical-demo"
          router
          :unique-opened="true"
          :collapse="isCollapse"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item @click="toggleCollapse">
            <i class="el-icon-s-unfold"></i>
            <!-- <span slot="title"></span> -->
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
      </el-row>
    </el-col>

    <!-- 主栏 -->
    <el-col :span="isCollapse ? 23 : 21" class="pagebody">
      <div class="title">
        线上教学质量数据可视化
        <div class='title-bg'></div>
        </div>
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
      activeIndex: "/Info/Web",
      isCollapse: false,
      background: {
      	// 背景图片地址
        backgroundImage: 'url(' + require('../../static/theme/bg.png') + ')',
        // 背景图片是否重复
        backgroundRepeat: 'no-repeat',
        // 背景图片大小
        backgroundSize: 'cover',
        // 背景颜色
        // backgroundColor: '#000',
        // 背景图片位置
        backgroundPosition: 'center top'
      },
      // head: {
      // 	// 背景图片地址
      //   backgroundImage: 'url(' + require('../../static/theme/head.gif') + ')',
      //   // 背景图片是否重复
      //   backgroundRepeat: 'no-repeat',
      //   // 背景图片大小
      //   backgroundSize: '80vw',
      //   // 背景颜色
      //   backgroundColor: '#000',
      //   // 背景图片位置
      //   backgroundPosition: 'center top'
      // }
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
  background-color:#001748;
  /* background-color:#c03321;#88231e */
}
.pageside {
  height:100vh;
  // height: 95vh;
  // background-color: white;
 background: linear-gradient(to right, #00093A, #08144D);
  // background-color: #00093A;
  // margin-top:2.5vh;
  border-radius: 8px;
  // background-color: rgba(255,255,255,.1);
  // backdrop-filter: blur(4px);
  // box-shadow: 0 0 4px #fff;
  .menu {
    z-index: 10;
    // display: flex;
    // align-items: center; /*侧轴上居中*/
    // justify-content: center;
    margin-top: 30px;
    // margin-left: 10px;
    // background-color: aqua;
  }
}
.pagebody {
  height: 100%;
  padding-left:1vw;
  .title {
    // background-color: pink;
    // position: absolute;
    height: 10vh;
    // left: 15vw;
    margin-left: 1vw;
    text-align: center;
    line-height: 10vh;
    font-size: 4vmin; /* 自适应 */
    color: white;
    background: url("../../static/theme/head.gif") no-repeat 50% 45%;
    background-size: 100%;
  }
  .body {
    width: 100%;
    height: 100%;
  }
}
.el-menu {
  background-color: transparent !important;
}
.el-menu-item {
  background-color: transparent !important; //你要修改的颜色
}
</style>