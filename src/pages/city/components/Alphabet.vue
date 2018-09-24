<template>
    <div>
       <div class="list">
           <div class="item"
                v-for="(item, key) in cities"
                :key="key">
                {{key}}
        </div>
       </div>
    </div>
    
</template>
<script>
    export default {
        props: {
            cities: Object
        },
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
            line-height : .37rem
            text-align : center
            color : $bgColor

</style>
