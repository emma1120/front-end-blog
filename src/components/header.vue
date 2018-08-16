<template>
  <header>
   <div class="header">
        <span>Emma's blog</span>
        <i class="iconfont icon-customerservice  roate"></i>
        <audio controls loop="loop">
           <source :src="mp3Src" type="audio/mpeg">
            您的浏览器不支持 audio 元素。
        </audio>
   </div>
  </header>
</template>

<script>
import mp3 from '@/assets/audio/list.mp3'
export default {
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
    this.audioPlay()
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.header{
  background: linear-gradient(135deg,#f41919,#bf2516);
  height: 40px;
  color:#fff;
  padding:10px;
  position:fixed;
  top:0;
  left:0;
  right:0;
  audio{
    width:0;
    height:0;
  }
  
}
</style>
