<template>
  <el-row :gutter="12" class="page">
    <!-- xs sm md lg xl五个尺寸的默认值均为24 -->
    <el-col :xs="24" :sm="24" :lg="7">
      <div class="grid-content grid-content-1">
        <barChart></barChart>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="10">
      <div class="grid-content grid-content-2">
        <radarChart></radarChart>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="7">
      <div class="grid-content grid-content-3">
        <pieChart></pieChart>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="6">
      <div class="grid-content grid-content-4">
        <test></test>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="10">
      <div class="grid-content grid-content-5"></div>
    </el-col>
    <el-col :xs="24" :sm="24" :lg="8">
      <div class="grid-content grid-content-6"></div>
    </el-col>
  </el-row>
</template>

<script>

const barChart = () => import("./charts/barChart");
const radarChart = () => import("./charts/radarChart")
const pieChart = () => import("./charts/pieChart")
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
  // background-color: rgb(247,238,173);
  /* min-height: 60vh; */
}
.el-col {
  height: 40vh;
  margin-bottom: 10px;
  text-align: center;
}
.grid-content {
  height: 100%;
  border-radius: 4px;
  min-height: 35vh;
  position: relative;
  background-color: white;
  // display: block;
  width: 100%;
}
.grid-content-1 {
}
.grid-content-2 {

}
.grid-content-3 {
  // background-color: brown;
}
.grid-content-4 {
  // display: block;
  // width: 100%;
  // text-align: center;
  // background-color: coral;
}
.grid-content-5 {
  // background-color: deepskyblue;
}
.grid-content-6 {
  // background-color: coral;
}
</style>