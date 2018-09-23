<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div 
                    class="icon" 
                    v-for="item of page" 
                    :key="item.ids">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <span class="icon-dec" v-text="item.dec"></span>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name : 'HomeIcon',
        data () {
            return {
                swiperOption: {
                   loop: false,
                },
                iconsList: [{
                        ids: '0001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        dec: '景点门票'
                    },{
                        ids: '0002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        dec: '北京必游'
                    },{
                        ids: '0003',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
                        dec: '自然风光'
                    },{
                        ids: '0004',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                        dec: '文化古迹'
                    },{
                        ids: '0005',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                        dec: '动植物园'
                    },{
                        ids: '0006',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                        dec: '故宫'
                    },{
                        ids: '00007',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        dec: '一日游'
                    },{
                        ids: '00008',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                        dec: '泡温泉'
                    },{
                        ids: '00009',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '空中滑雪'
                    },{
                        ids: '000010',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '旅游城市'
                    }
                ]
            }
        },
        computed: {
            pages () {
                const pages = [];
                this.iconsList.forEach( (item, index) => {
                    const page = Math.floor(index / 8);
                    if(!pages[page]) {
                        pages[page] = [];
                    }
                    pages[page].push(item);
                })
                return pages;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height : 0
        padding-bottom : 50%
    .icon
        position : relative
        overflow : hidden
        float : left
        height : 0
        width : 25%
        padding-bottom : 25%
        .icon-img 
            position : absolute
            top : 0
            left : 0
            right : 0
            bottom : .44rem
            box-sizing : border-box
            padding : .1rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-dec
            position : absolute
            left : 0
            right : 0
            bottom : 0
            height : .44rem
            line-height : .44rem
            color : $darkTextColor
            text-align : center
            ellipsis()
</style>

