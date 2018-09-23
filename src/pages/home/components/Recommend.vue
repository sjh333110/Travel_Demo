<template>
    <div>
       <div class="title">热销推荐</div>
       <ul>
           <li class="item border-bottom" 
           v-for="item in recommendList"
           :key="item.id">
               <div class="item-img-wrapper">
                   <img class="item-img" :src="item.imgUrl" alt="">
               </div>
               <div class="item-info">
                   <p class="item-title" v-text="item.title"></p>
                   <p class="item-desc" v-text="item.desc"></p>
                   <button class="item-button" @click="showInfo">查看详情</button>
               </div>
           </li>
       </ul>
    </div>
</template>
<script>
   export default {
       name: 'HomeRecommend',
       data () {
           return {
               recommendList: [
                   {
                       id: '0001',
                       imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                       title: '漂流勇进，烧烤露营',
                       desc: '轻松水上漂，任我乐逍遥',
                   },
                   {
                       id: '0002',
                       imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg',
                       title: '金海湖风景区',
                       desc: '轻松水上漂，任我乐逍遥',
                   },
                   {
                       id: '0003',
                       imgUrl: 'http://img1.qunarzz.com/sight/p0/1510/f1/f13797b008eed4d190.img.jpg_200x200_44f2cf08.jpg',
                       title: '呀路古热带植物园',
                       desc: '轻松水上漂，任我乐逍遥',
                   },
                   {
                       id: '0004',
                       imgUrl: 'http://img1.qunarzz.com/sight/p0/201311/12/3e2de7e7f2fa170fc8d65eac.jpg_200x200_015edb8c.jpg',
                       title: '八达岭野生动物园',
                       desc: '轻松水上漂，任我乐逍遥',
                   },
                   {
                       id: '0005',
                       imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/74/749086a3617afc8c.water.jpg_200x200_570c5ffb.jpg',
                       title: '富国海底世界',
                       desc: '轻松水上漂，任我乐逍遥',
                   },
                   {
                       id: '0006',
                       imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
                       title: '漂流勇进，烧烤露营',
                       desc: '轻松水上漂，任我乐逍遥',
                   },
               ]
           }
       },
       methods: {
           showInfo () {
               console.log('hhha')
           }
       }
   } 
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top : .1rem
        line-height : .8rem
        background : #eeeeee
        text-indent  : .2rem
    .item
        overflow : hidden
        display : flex
        height : 1.8rem
        .item-img
            height : 1.62rem
            width : 1.7rem
            padding : .1rem
        .item-info
            flex : 1
            padding : .1rem
            min-width : 0
            .item-title
                line-height : .54rem
                font-size : .32rem
                ellipsis()
            .item-desc
                line-height : .4rem
                color : #cccccc
                ellipsis()
            .item-button
                line-height : .44rem
                margin-top : .16rem
                background : #ff9300
                padding : 0 .2rem
                border-radius : .06rem
                color : #ffffff
</style>
