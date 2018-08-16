<template>
   <footer>
       <div class="footer">
               <router-link to="/home" class="footer-item" >
                  <div><i class="footer-icon icon iconfont icon-home"></i></div>
                  <div><span>Home</span></div>
               </router-link>
               <router-link to="/blog"  class="footer-item">
                  <i class="footer-icon icon iconfont icon-HTML-fill"></i>
                  <span>博客</span>
               </router-link>
               <router-link to="/me"  class="footer-item" > 
                    <i class="footer-icon icon iconfont icon-user"></i>
                    <span>me</span>
               </router-link>             
       </div>
   </footer>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  .footer{
    position:fixed;
    z-index:2;
    bottom:0;
    right:0;
    left:0;
    display :flex;
    height:58px;
    border-top:1px solid #ccc;
    background :#fff;

    .footer-item{
      flex:1;
      display:flex;
      justify-content:center;
      align-items:center;
      text-decoration:none;
      color:#333;
      flex-direction:column;

       &.active{
         color:#f20717;
         font-weight:bold;

       }
      .footer-icon{
        width:20px;
        height:20px;
        display:block;
        
      }
    }
  }
  

</style>
