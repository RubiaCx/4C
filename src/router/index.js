import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      // name: "Home",
      redirect: "/Info/Web",
      base: "/vue/",
      // component: () => import("@/components/page/Home"),
      // meta: {
      //   keepAlive: false //true是保存缓存，false是不保存
      // }
    },
    {
      path: "/Info",
      component: () => import("@/components/Home"),
      meta: {
        keepAlive: false //true是保存缓存，false是不保存
      },
      children: [
        {
          path: "Web",
          component: () => import("@/components/Web"),
          meta: {
            keepAlive: false //true是保存缓存，false是不保存
          }
        },
        {
          path: "Stu",
          component: () => import("@/components/Student"),
          meta: {
            keepAlive: false //true是保存缓存，false是不保存
          }
        },
        {
          path: "Bug",
          component: () => import("@/components/Bugs"),
          meta: {
            keepAlive: false //true是保存缓存，false是不保存
          }
        },
        {
          path: "Plat",
          component: () => import("@/components/Platform"),
          meta: {
            keepAlive: false //true是保存缓存，false是不保存
          }
        }
      ]
    },
    {
      path: "/testpage",
      component: () => import("@/components/test"),
      meta: {
        keepAlive: false //true是保存缓存，false是不保存
      }
    }
  ]
})
