<template>
  <div id="app">
    <div class="main-wrap">
      <router-view/>
    </div>
    <footer-group></footer-group>
    
  </div>
</template>

<script>
import FooterGroup from '@/components/footer'
export default {
  name: 'App',
  components:{
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
  top:0;
  bottom:58px;
  left:0;
  right:0;
}
</style>
