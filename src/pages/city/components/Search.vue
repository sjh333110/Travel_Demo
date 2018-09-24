<template>
    <div>
        <div class="search">
            <input v-model="keyWord" class="search-input" type="text" placeholder="请输入城市名称或拼音">
        </div>
        <div class="search-content" v-show="keyWord" ref="search">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoDate">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
    
    
</template>
<script>
    import betterScroll from 'better-scroll';
    export default {
        name: 'CitySearvch',
        props: {
            cities: Object
        },
        data () {
            return {
                keyWord: '',
                list: [],
                timer: null
            }
        },
        computed: {
            hasNoDate () {
                return !this.list.length;
            }
        },
        watch: {
            keyWord () {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyWord) {
                    this.list = [];
                    return false;
                }
                this.timer = setTimeout( () => {
                    const result = [];
                    for(let i in this.cities) {
                        this.cities[i].forEach(value => {
                            if(value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result;
                },100)
            }
        },
        mounted () {
            this.scroll = new betterScroll(this.$refs.search)
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .search
        height : .72rem
        padding : 0 .1rem
        background : $bgColor
        .search-input
            box-sizing : border-box
            width : 100%
            height : .62rem
            padding : 0 .2rem
            line-height : .62rem
            text-align : center
            border-radius : .06rem
            color : #666666
    .search-content
        z-index : 1
        overflow : hidden
        position : absolute
        top : 1.58rem
        left : 0
        right : 0
        bottom : 0
        background : #eeeeee
        .search-item
            line-height : .62rem
            padding-left : .2rem
            background : #ffffff
            color : #333333
</style>
