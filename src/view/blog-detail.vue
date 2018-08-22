<template>
    <div class="blog-detail-page">
        <h5 class="title">标题</h5>
        <p class="content">1111</p>
        <div class="foot-tip">
            <div class="foot-tip-item left">
              <i class="iconfont icon-heart"></i>
              <i class="iconfont icon-message"></i>
            </div>
            <div class="foot-tip-item right">
                <span>评论</span>
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
  methods: {

  }

}

</script >

<style  lang='stylus' scoped>
.blog-detail-page{
    padding:2%;
    .title{
       font-size:16px;
       margin:0;
    }
    .content{
        font-size:14px
    }
   
    .foot-tip{
        position:fixed;
        left:0;
        right:0;
        bottom:0;
        height:58px;
        border-top :1px solid #ccc;
        display:flex;
        padding:0 2%;
        .foot-tip-item{
            flex:1;
            color:#666;
            line-height 56px;
            &.left i{
                font-size:20px;
                margin-right:5px;
            }
            &.right{
                font-size:12px;
                text-align:right;
                
            }
        }
    }
}
</style>
