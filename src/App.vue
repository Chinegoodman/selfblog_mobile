<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
  </div>
</template>
<script>
  import {checkdevice} from './usefuljs/checkdevice';
  import {remset} from './usefuljs/remset';
  export default {
    beforeCreate() {
      checkdevice();
      remset(375);
    }
  }
</script>

<style lang="less">
@import "./assets/reset.css";
@import "./assets/common.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html{
  width: 100%;
  height: 100%;
}
body{
  background: @bgcolor;
  width: 100%;
  height: 100%;
}
</style>
