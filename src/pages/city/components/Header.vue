<template>
    <div class="header">
        城市选择
        <router-link to="./">
            <div class="iconfont Header-icon">&#xe624;</div>
        </router-link>
        
    </div>
    
</template>
<script>
    export default {
        name: 'CityHeader'
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
        position : relative
        height : $headerHeight
        line-height : $headerHeight
        overflow : hidden
        text-align : center
        background : $bgColor
        color : #ffffff
        font-size : .32rem
        .Header-icon
            position : absolute
            top : 0
            left : 0
            width : .64rem
            text-align : center
            font-size : .4rem
            color : #ffffff
</style>
