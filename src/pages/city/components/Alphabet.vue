<template>
    <div>
       <div class="list">
           <div class="item">A</div>
           <div class="item">A</div>
           <div class="item">A</div>
           <div class="item">A</div>
           <div class="item">A</div>
           <div class="item">A</div>
           <div class="item">A</div>
           <div class="item">A</div>
       </div>
    </div>
    
</template>
<script>
    export default {
        name: 'CityAlphabet',
       
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl';
    .list
        display : flex
        flex-direction : column
        justify-content : center
        position : absolute
        top : 1.58rem
        right : 0
        bottom : 0
        width : .4rem
        .item 
            line-height : .4rem
            text-align : center
            color : $bgColor

</style>
