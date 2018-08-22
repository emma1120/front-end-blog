<template>
    <div class="me-page-box">
         <header-group></header-group>
         <footer-group></footer-group>
         <a href="javascript:void(0)" class="btn-hover"><i class="icon iconfont icon-heart"></i></a>
         <div class="me-top">
             <img class="me-pic" :src="mePicture" alt="me" />
             <h6 class="name">{{info.name}}</h6>
             <h6 class="job">{{info.job}}</h6>
         </div>
         <div class="me-bottom">
            <div class="intro-tip">About me:</div>
            <ul class="intro-list">
                <li v-for="item in introList">{{item}}</li>
            </ul>
            <div class="link-box">
                 <a 　:href="link.zhihu"><i class="icon iconfont icon-zhihu-circle-fill"></i></a>
                 <a :href="link.weiBo"><i class="icon iconfont icon-weibo"></i></a>
                 <a :href="link.gitHub"><i class="icon iconfont icon-github-fill"></i></a>
            </div>
         </div>
    </div>
</template>

<script>
import mePic from '@/assets/me.jpg'
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
      mePicture: mePic,
      info: {
        name: 'Xiuzhi Liao',
        job: 'Front-end Developer'

      },
      introList: ['Master', 'Graduation Time: 2016-4', 'Graduation School: Hangzhou Dianzi University'],
      link: {
        zhihu: 'https://www.zhihu.com/people/emma-23-18',
        weiBo: 'https://weibo.com/u/1770004882',
        gitHub: 'https://github.com/emma1120'
      }
    }
  }

}
</script >

<style lang='stylus'  scoped >
  .me-page-box {
      position :relative;
      width:100%;
      height :100%;

      .btn-hover{
          position:absolute;
          top:6%;
          right:20%;
          text-decoration:none;
          width:40px;
          height :40px;
          line-height :40px;
          text-align:center;
          color:#666;
          border-radius:50%;
          transition:.5s;
          z-index:3
          i{
              font-size:22px;
              vertical-align :middle;
          }
          &:hover{
              box-shadow: 0 0 5px rgba(0,0,0,.2)
              background-color :#fff;
              color:#f90941;
          }

      }
      /*=========
       top部分
      ============*/
      .me-top{
            width:100%;
            height: 40%;
            display:flex;
            align-items :center;
            justify-content :center;
            flex-direction :column;
            //border-bottom:1px solid #CCC;
            .me-pic {
                width: 100px;
                height:100px;
                border-radius:48%;
                border:4px solid #fff;
                box-shadow:0px 3px 5px rgba(0,0,0,0.2)
            }
            .name{
                margin:10px 0;
                font-size:16px;
            }
            .job{
                margin:10px 0;
                font-size:14px;
            }
      }

      .me-bottom{
          width:100%;
          height:60%;
          background :#f5f5f5;
          display :flex;
          align-items:center;
          justify-content :center;
          flex-direction :column;
          .intro-tip{
             font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
          .intro-list{
              list-style :none;
              padding:0;
              margin:0 0 30px 0;
              li{
                  text-align:center;
                  line-height:36px;
              }
          }
      }
      .link-box{
          display :flex;
        justify-content :center;
          a{
            text-decoration:none;
            padding:5px 10px;
            color:#666;

            i{
                font-size:30px;
            }

            &:hover{

                color:#ef2534
            }
          }
      }
  }
</style>
