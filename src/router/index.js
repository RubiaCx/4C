import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      // name: "Home",
      redirect: "/Home/Overall",
      base: "/vue/",
      // component: () => import("@/components/page/Home"),
      // meta: {
      //   keepAlive: false //true是保存缓存，false是不保存
      // }
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("@/components/Home"),
      meta: {
        keepAlive: false //true是保存缓存，false是不保存
      },
      children: [
        {
          path: "Overall",
          component: () => import("@/components/Overall"),
          meta: {
            keepAlive: false //true是保存缓存，false是不保存
          }
        },
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
