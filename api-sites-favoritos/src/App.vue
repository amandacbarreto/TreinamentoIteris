<template>
  <div id="app">
    <SitesFavoritos/>
  </div>
</template>

<script>
import SitesFavoritos from './components/SitesFavoritos.vue'

export default {
  name: 'App',
  components: {
    SitesFavoritos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
