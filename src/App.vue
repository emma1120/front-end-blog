<template>
  <div id="app">
    <header-group :is-back="isBack"></header-group>
    <div class="main-wrap">
      <router-view/>
    </div>
    <footer-group v-if="!isBack"></footer-group>

     <!-- <audio controls loop="loop">
           <source :src="mp3Src" type="audio/mpeg">
            您的浏览器不支持 audio 元素。
    </audio> -->
  </div>
</template>

<script>
import mp3 from '@/assets/audio/list.mp3'
import HeaderGroup from '@/components/header'
import FooterGroup from '@/components/footer'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    HeaderGroup,
    FooterGroup
  },
  data () {
    return {
      mp3Src: mp3
    }
  },
  computed: {
    ...mapState(['header']),
    isBack () {
      return this.header.back
    }

  },
  methods: {
    audioPlay () {
      let audio = document.querySelector('audio')
      audio.play()
    }
  },
  mounted () {

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
  right:0;
  left:0;
  bottom:58px;
}
audio{
  background: transparent;
  z-index:-1;
  width:100%;
  height: 30px;
  position: relative;
}
</style>
