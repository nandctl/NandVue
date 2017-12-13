<template>
  <div id="app">
    <h1>{{ msg }}</h1>


    <div class="routing" v-if="this.$route.path !== '/'">
      <router-link to="Login">Login</router-link>
      <router-link :to="{ path: 'Home', query: { test: 'Nand' }}">QueryString Example</router-link>
      <router-link to="Logout">LogOut</router-link>
    </div>

    <router-view></router-view>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to MHP World.........'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
