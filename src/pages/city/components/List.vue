<template>
    <div class="list" ref="wrapper">
        <div>
                 <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">
                       {{this.city}}
                   </div>
               </div>
           </div>
       </div>
       <div>
           <div class="title border-topbottom">热门城市</div>
           <div class="button-list">
               <div class="button-wrapper" 
                    v-for="item in hot"
                    :key="item.id"
                    @click="handleCityClick(item.name)">
                   <div class="button">
                       {{item.name}}
                   </div>
               </div>
           </div>
       </div>
       <div class="area" 
            v-for="(item, key) in cities"
            :key="key"    
            :ref="key">
           <div class="title border-topbottom">{{key}}</div>
           <div class="item-list" v-for="innerItem in item" :key="innerItem.id"
           @click="handleCityClick(innerItem.name)">
               <div class="item border-bottom">
                   {{innerItem.name}}
               </div>
           </div>
        </div>
    </div>
</div>    
</template>
<script>
    import betterScroll from 'better-scroll'
    import {mapState} from 'vuex'
    export default {
        name: 'CityList',
        props: {
            hot: Array,
            cities: Object,
            letter: String
        },
        methods: {
            handleCityClick (city) {
                this.$store.dispatch("cityChange", city);
                this.$router.push('./');
            }
        },
        mounted () {
            this.scroll = new betterScroll(this.$refs.wrapper)
        },
        watch: {
           letter () {
               if(this.letter){
                   const element = this.$refs[this.letter][0];
                   this.scroll.scrollToElement(element)
               }
           }
        },
        computed : {
            ...mapState(['city'])
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .border-topbottom
        &:before
            border-color : #ccc
        &:after
            border-color : #ccc
    .border-bottom
        &:before
            border-color : #ccc
    .list
        overflow : hidden
        position : absolute
        top : 1.58rem
        left : 0
        right : 0
        bottom : 0
        .title
            line-height : .54rem
            background : #eeeeee
            padding-left : .2rem
            color : #666666
            font-size : .26rem
        .button-list
            overflow : hidden
            padding : .1rem .6rem .1rem .1rem
            .button-wrapper
                width : 33.33%
                float : left 
                .button
                    margin : .1rem
                    padding : .1rem 0
                    text-align : center
                    border : .02rem solid #cccccc
                    border-radius : .06rem
        .item-list
            .item
                line-height .76rem
                padding-left : .2rem
</style>
