import Vue from 'vue'
import App from './App.vue'
import router from './router'

/*
router.beforeEach((to, from, next) => {
  console.log('from/to', from, to)
})
*/

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)

})
