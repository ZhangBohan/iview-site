<template>
  <div id="app">
  <Slider v-model="value" range></Slider>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import {Slider} from 'iview'
export default {
  name: 'app',
  components: {Slider},
  data () {
    return {
      value: [20, 50]
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
</style>
