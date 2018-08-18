<template>
    <div class="blog-page">
           <div class="blog-card">
               <h6 class="blog-card-title">vue-study</h6>
               <p class="blog-card-content">记录记录记录记录记录记录记录记录.........</p>
               <div class="blog-card-footer">
                   <i class="iconfont icon-heart"></i>
                   <i class="iconfont icon-message"></i>
               </div>
           </div>
    </div>
</template>

<script>
export default {
    name: 'homePage',
    data () {
        return {
            blogList: []
            
        }
    },

}

</script >

<style  lang='stylus' scoped>
  .blog-page{
      background:#dedede;
      position:relative;
      height 100%;
      width:100%;
      .blog-card{
          width:100%;
          height:auto;
          padding:0 10px;
          background :#fff;
          border-bottom: 1px solid #ccc;
          margin-bottom:10px;
          .blog-card-title{
              margin:0;
              font-size:16px;

          }
          .blog-card-content{
            margin:0;
            padding:5px 0;
          }
      }
  }

</style>