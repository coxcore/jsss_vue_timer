<template>
  <div id="app">
      <J3STimer tit="JSSS' Timer"/>
  </div>
</template>

<script>
import J3STimer from './components/J3STimer.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
      J3STimer
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
}
    div {
        box-sizing: border-box;
    }
</style>
