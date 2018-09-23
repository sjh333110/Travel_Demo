<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
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
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true,
                },
                swiperList: [
                    {
                        id: '0001',
                        imgUrl: '//img1.qunarzz.com/vc/4e/c2/9a/61222b895136533c133ee9e8bc.jpg'
                    },
                    {
                        id: '0002',
                        imgUrl:'//img1.qunarzz.com/vc/1f/ba/ac/13c3552a1cb338991301f9b0ad.jpg'
                    }
                ]
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
