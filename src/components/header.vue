<template>
  <header>
   <div class="header">
        <i class="iconfont " :class="isBack? 'icon-arrowleft' : ''" @click="goBack"></i>
        <span>Emma's blog</span>
        <i class="iconfont icon-customerservice  roate"></i>
   </div>
  </header>
</template>

<script>

export default {
  props: {
    isBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    }
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
  display:flex;
  top:0;
  left:0;
  right:0;

  span{
    flex:1;
    text-align :center;
  }

}
</style>
