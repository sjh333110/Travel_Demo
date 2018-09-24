<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img  class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                    autoPlay: true
                },
            }
        },
        computed: {
            showSwiper () {
                return this.list.length;
            }
        }
    }    
</script>

<style lang="stylus" scoped>
     .swiper-wrap >>> .swiper-pagination-bullet-active
            background : #ffffff !important
    .swiper-wrap
        overflow : hidden
        width : 100%
        height : 0
        padding-bottom : 30.6%
        background : #eee
        .swiper-img
            width : 100%
</style>
