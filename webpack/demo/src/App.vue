<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <router-link class="navbar-brand" v-bind:to="'/'">Home</router-link>

      <router-link class="navbar-brand" v-bind:to="'/contact'">Contact</router-link>
    </nav>
  
    <router-view></router-view>

  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'
import PostsExample from './components/Posts'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PostsExample,
    Contact
  }
}
</script>

<style>

  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

</style>
