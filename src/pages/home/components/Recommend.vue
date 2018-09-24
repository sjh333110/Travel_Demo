<template>
    <div>
       <div class="title">热销推荐</div>
       <ul>
           <router-link 
           tag="li"
           class="item border-bottom" 
           v-for="item in list"
           :key="item.id"
           :to="'/detail/' + item.id">
               <div class="item-img-wrapper">
                   <img class="item-img" :src="item.imgUrl" alt="">
               </div>
               <div class="item-info">
                   <p class="item-title" v-text="item.title"></p>
                   <p class="item-desc" v-text="item.desc"></p>
                   <button class="item-button" @click="showInfo">查看详情</button>
               </div>
           </router-link>
       </ul>
    </div>
</template>
<script>
   export default {
       name: 'HomeRecommend',
       props: {
           list: Array
       },
       data () {
           return {
               
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
