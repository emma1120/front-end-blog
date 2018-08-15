<template>
   <footer>
       <div class="footer">
               <router-link to="/home" class="footer-item" >
                  <i class="footer-icon home"></i>
                  <span>Home</span>
               </router-link>
               <router-link to="/blog"  class="footer-item">
                  <i class="footer-icon tc"></i>
                  <span>博客</span>
               </router-link>
               <router-link to="/me"  class="footer-item" > 
                    <i class="footer-icon me"></i>
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
    z-index:1;
    bottom:0;
    right:0;
    left:0;
    display :flex;
    height:58px;

    .footer-item{
      flex:1;
      display:flex;
      justify-content:center;
      align-items:center;
      text-decoration:none;
      color:#333;
      
       &.active{
         color:#f20717;
         font-weight:bold;

       }
      .footer-icon{
        width:20px;
        height:20px;
        
      }
    }
  }
  

</style>
