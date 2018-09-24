<template>
    <div>
       <div class="title">周末去哪儿</div>
       <ul>
           <li class="item border-bottom" 
           v-for="item in list"
           :key="item.id">
               <div class="item-img-wrapper">
                   <img class="item-img" :src="item.imgUrl" alt="">
               </div>
               <div class="item-info">
                   <p class="item-title" v-text="item.title"></p>
                   <p class="item-desc" v-text="item.desc"></p>
               </div>
           </li>
       </ul>
    </div>
</template>
<script>
   export default {
       name: 'HomeWeekend',
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
    .item-img-wrapper
        overflow : hidden
        height : 0
        padding-bottom : 33.09%
    // .item-img
    //     width ： 100%
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

</style>
