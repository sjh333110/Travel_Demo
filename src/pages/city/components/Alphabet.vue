<template>
    <div>
       <div class="list">
           <div class="item"
                v-for="item in letters"
                :key="item"
                :ref="item"
                @touchstart="handleStart"
                @touchmove="handleMove"
                @touchend="handleEnd"
                @click="handleLetterClick">
                {{item}}
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
        data () {
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            }
        },
        updated () {
            this.startY = this.$refs['A'][0].offsetTop;
        },
        computed: {
            letters () {
                const letters = [];
                for (let item in this.cities) {
                    letters.push(item)
                }
                return letters;
            }
        },
        methods: {
           handleLetterClick (e) {
               this.$emit("change", e.target.innerText) 
           },
           handleStart () {
               this.touchStatus = true
           },
           handleMove (e) {
               if(this.touchStatus) {
                   if(this.timer) {
                       clearTimeout(this.timer)
                   }
                   this.timer = setTimeout(() => {
                        const touchY = e.touches[0].clientY - 79;
                        const index = Math.floor((touchY - this.startY)/18);
                        if(index >= 0 && index < this.letters.length) {
                            this.$emit("change", this.letters[index]);
                   }
                   },16)
                   
               }
           },
           handleEnd () {
               this.touchStatus = false
           }
        }
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
