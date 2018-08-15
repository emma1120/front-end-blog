<template>
  <div id="app">
    <header-group></header-group>
    <div class="main-wrap">
      <router-view/>
    </div>
    <footer-group></footer-group>
    
  </div>
</template>

<script>
import HeaderGroup from '@/components/header'
import FooterGroup from '@/components/footer'
export default {
  name: 'App',
  components:{
      HeaderGroup,
      FooterGroup
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-wrap{
  position: absolute;
  top:40px;
  bottom:58px;
  left:0;
  right:0;
}
</style>
