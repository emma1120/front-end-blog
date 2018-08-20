<template>
  <div id="app">
    <div class="main-wrap">
      <router-view/>
    </div>
    <footer-group></footer-group>
     <!-- <audio controls loop="loop">
           <source :src="mp3Src" type="audio/mpeg">
            您的浏览器不支持 audio 元素。
    </audio> -->
  </div>
</template>

<script>
import mp3 from '@/assets/audio/list.mp3'

import FooterGroup from '@/components/footer'

export default {
  name: 'App',
  components:{
      FooterGroup
  },
  data() {
    return {
      mp3Src: mp3
    }
  },
  methods:{
    audioPlay(){
        let audio= document.querySelector('audio')
        audio.play()
    }
  },
  mounted(){
   
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
audio{
  background: transparent;
  z-index:-1;
  width:100%;
  height: 30px;
  position: relative;
}
</style>
