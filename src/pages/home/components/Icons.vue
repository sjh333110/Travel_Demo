<template>
    <div class="icons">
        <swiper>
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
                iconsList: [{
                        ids: '0001',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '热门景点热门景点热门景点热门景点热门景点'
                    },{
                        ids: '0002',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '热门城市'
                    },{
                        ids: '0003',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '自然风光'
                    },{
                        ids: '0004',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '哈哈哈哈'
                    },{
                        ids: '0005',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '哦哦哦哦'
                    },{
                        ids: '0006',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '极限冲浪'
                    },{
                        ids: '00007',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '异域风情'
                    },{
                        ids: '00008',
                        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2022630467,3755517063&fm=58',
                        dec: '极限挑战'
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

