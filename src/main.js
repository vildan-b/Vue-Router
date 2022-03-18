import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from "./components/Home"
import User from "./components/user/User"
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import Header from './components/Header'

/* eslint-disable */
// eslint-disable-next-line
Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    
  { path : '', name: 'anasayfa', components : {
    default : Home,
    "header-top" :  Header
   }},
  { path : '/user' ,  name: 'kullanici', 
  components : { 
    default : User,
    "header-top" : Header },
  children: [
    {path: '', component : UserStart    },
    { path : ':id', component : UserDetail , beforeEnter : (to, from, next) => {
      console.log("route level control. with lifecyle")
      next();
    }}, // /user/12
    {path : ':id/edit' , component: UserEdit , name: "userEdit"}  // /user/12/edit
  ] },
  { path : "/redirect" , redirect : "/user"},
{path : "*", redirect :"/" }
];
const router = new VueRouter({
  routes,
  mode: 'history', // hash default
  scrollBehavior(to, from, savedPosition){
    if(to.hash){
      return {
        selector : to.hash
      }
    }
  }
});
router.beforeEach((to, from, next) => {
  console.log("control globally")
  next();


})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
