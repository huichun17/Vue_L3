import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SighUp from '../views/SighUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', //path網址 /首頁
      name: 'home',
      component: HomeView
    },
    {//about頁面
      path: '/about',//路徑變成about的時候
      name: 'about',//name就變成about內的元件
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/sigh-up',//主要看的是path
      name: 'SighUp',//寫元件名稱，暫時不影響
      //顯示的元件
      component: SighUp,
      children: [
        {
          path: 'by-google',//不用 + 前面 /
          neme: 'ByGoogle',
          // component: function(){ //mport還有這種方式
          //   return import('../views/AboutView.vue')
          // },
          component: () => import('../components/ByGoogle.vue') //=>=return ；只有一行code不用{}
        }, {
          path: 'by-facebook',//不用 + 前面 /
          neme: 'ByFb',
          component: () => import('../components/ByFb.vue')
        }

      ]
    }
  ]
})

export default router
