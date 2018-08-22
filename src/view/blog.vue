<template>
    <div class="blog-page">
          <header-group></header-group>
           <div class="blog-card" v-for= "(item,index) in blogList" @click="handleDetail(item.id)">
               <h6 class="blog-card-title">{{item.title}}</h6>
               <p class="blog-card-content">{{item.content}}</p>
               <div class="blog-card-footer">
                   <i class="iconfont icon-heart"></i>
                   <i class="iconfont icon-message"></i>
               </div>
           </div>
          <div class="empty-box"></div>
          <footer-group></footer-group>
    </div>
</template>

<script>

import HeaderGroup from '@/components/header'
import FooterGroup from '@/components/footer'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'homePage',
  components: {
    HeaderGroup,
    FooterGroup
  },
  data () {
    return {
      blogList: []

    }
  },
  methods: {
    ...mapMutations(['SHOW_BACK']),
    handleDetail (id) {
      this.$router.push({
        name: 'blogDetailPage', params: {id: id}
      })
      this.SHOW_BACK(true)
    }
  },
  mounted () {
    this.blogList = [
      {
        id: 1,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      },
      {
        id: 2,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      },
      {
        id: 3,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      },
      {
        id: 4,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      },
      {
        id: 5,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      },
      {
        id: 6,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      }, {
        id: 7,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      }, {
        id: 8,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      }, {
        id: 9,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容。。。。。。。。。。。。。'

      }

    ]
  }

}

</script >

<style  lang='stylus' scoped>
  .blog-page-header{
        background: #f41919;
        height: 40px;
        color:#fff;
        padding:10px;
        position:fixed;
        top:0;
        left:0;
        right:0;
  }
  .blog-page{
      background:#dedede;
      position:relative;
      height 100%;
      width:100%;
      .blog-card{
          width:100%;
          height:auto;
          padding:10px 10px;
          background :#fff;
          border-bottom: 1px solid #ccc;
          margin-bottom:10px;
          .blog-card-title{
              margin:0;
              font-size:14px;

          }
          .blog-card-content{
            margin:0;
            padding:5px 0;
            font-size:12px;
          }
      }
      .empty-box{
          padding:20px 0;
      }
  }

</style>
