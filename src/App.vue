<template>
  <div id="app">
      <TimerContainer tit="JSSS' Timer"/>
  </div>
</template>

<script>
import TimerContainer from './components/TimerContainer.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
	  TimerContainer
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
