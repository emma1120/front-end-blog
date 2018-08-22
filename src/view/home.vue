<template>
    <div>
       <!--关于的新的特效展示-->
       <header-group></header-group>
       <footer-group></footer-group>
    </div>
</template>

<script>
import HeaderGroup from '@/components/header'
import FooterGroup from '@/components/footer'
export default {
  name: 'homePage',
  components: {
    HeaderGroup,
    FooterGroup
  },
  data () {
    return {

    }
  }

}
</script >

<style  scoped>
</style>
