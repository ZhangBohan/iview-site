import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index,
      meta: {
        title: '首页'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('router to:', to)
  document.title = to.meta.title
  next()
})

export default router
