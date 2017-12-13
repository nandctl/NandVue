import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Logout from '../components/Logout'


import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(Router);


import auth from '../auth/index.js'

//Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

//auth.checkAuth();
export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/Logout',
      name: 'Logout',
      component: Logout
    },
    {
     path : '/Home',
     name: 'Home',
     component: Home
    }




  ]
})
