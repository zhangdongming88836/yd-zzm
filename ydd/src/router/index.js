import Vue from 'vue'
import Router from 'vue-router'
import guide  from "../components/guide.vue"
import index from "../views/index.vue"
Vue.use(Router)

 const router= new Router({
  routes: [
      {path:"/",component:guide,},
      {path:"/index",name:index,component:index,
      meta:{
        keepAlive:false
      }
      },
      {path:"/aboutUs",
      component:()=>import(/*webpackChunkName:"aboutUs"*/ "../views/aboutUs.vue")},
      {path:"/user",
      component:()=>import(/*webpackChunkName:"user"*/ "../components/user.vue")},
      {path:"/find",
      component:()=>import(/*webpackChunkName:"find"*/ "../components/find.vue")},
      {path:"/signLn",
      component:()=>import(/*webpackChunkName:"signLn" */ "../components/signLn.vue")},
      {path:"/Search",name:"Search",
      component:()=>import(/*webpackChunkName:"Search" */ "../components/Search.vue"),
      meta:{
        keepAlive:true
      }
    },
    {path:"/details/:tid",name:"details",
     props:true,
     component:()=>import(/*webpackChunkName:"details" */ "../components/details.vue")}, 
     {path:"/cart1",
    component:()=>import(/*webpackChunkName:"cart1"*/ "../components/cart1.vue")},
    {path:"/cart",component:()=>import(/*webpackChunkName:"cart"*/ "../components/cart.vue"),
    meta:{
      keepAlive:false
    }
  },
  ]
})
router.afterEach((to, from) => {
  
 // window.scrollTo(0, 0)
});
export default router