<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg" alt="">
            <div class="banner-info">
                <div class="banner-tittle">
                    北京欢乐谷(AAAA景区)
                </div>
                <div class="banner-num">
                    <span class="iconfont banner-icon">&#xe692;</span>16
                </div>
            </div>
        </div>
        <common-gallary 
            :imgs="imgs" 
            v-show="showGallary"
            @close="handleGallaryClose"
        >
        </common-gallary>
    </div>
    
</template>
<script>
    import CommonGallary from 'common/gallary/Gallary'
    export default {
        name: 'DetailBanner',
        components: {
            CommonGallary
        },
        data () {
            return {
                showGallary: false,
                imgs: ['http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg',
                    'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png']
            }
        },
        methods: {
            handleBannerClick () {
                this.showGallary = true;
            },
            handleGallaryClose () {
                this.showGallary = false;
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .banner
        position : relative
        overflow : hidden
        height : 0
        padding-bottom : 55%
        .banner-img
            width : 100%
        .banner-info
            display : flex
            position : absolute
            left : 0
            right : 0
            bottom : 0
            color : #ffffff
            line-height : .6rem
            background-image : linear-gradient(top,rgba(0, 0, 0, 0),
             rgba(0, 0, 0, 0.8))
            .banner-tittle
                flex : 1
                font-size : .32rem
                padding : 0 .2rem
            .banner-num
                height : .32rem
                line-height : .32rem
                margin-top : .14rem
                padding : 0 .4rem
                border-radius : .2rem
                background : rgba(0, 0, 0, 0.8)
                font-size : .24rem
                .banner-icon
                    font-size : .254rem
</style>
