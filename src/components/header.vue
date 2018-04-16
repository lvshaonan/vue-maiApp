<template>
    <header v-bind:style="{background: options.background}">
        <div class="left">
            <i class="back" @click="back" v-if="options.isBackShow"></i>
        </div>
        <div class="right" @click="options.clickHandle">
            <i class="more" v-if="options.icon === 'more'"></i>
            <i class="set" v-if="options.icon === 'set'"></i>
        </div>
        <div class="center">{{options.title}}</div>
    </header>
</template>
<script>
export default {
    props:{
        options: {
            type: Object,
            default:{
                isBackShow: false,
                title: '',
                icon: '',
                clickHandle: null,
                background: '#fff'
            }
        }
    },
  data(){
      return{

      }
  },
  methods: {
      back(){
          this.$router.back();
      }
  },
  watch: {

  }
}
</script>
<style lang="scss" scoped>
@import "../common/styles/mixin.scss";
    header{
        height: rem(88);
        box-sizing: border-box;
        // background: #fff;
        // border-bottom: 1px solid #ccc;
        @include border-1px('b', #ccc);
        text-align: center;
        line-height: rem(88);
        font-size: rem(28);
        .left, .right{
            width: rem(90);
            height: 100%;
            float: left;
            i{
                display: block;
                width: 100%;
                height: 100%;
            }
            .back{
                background: url(../assets/icon/back.png) no-repeat center center;
                background-size: rem(18) rem(32);
            }
            .more{
                background: url(../assets/icon/more.png) no-repeat center center;
                background-size: rem(50) rem(12);
            }
            .set{
                background: url(../assets/icon/set.png) no-repeat center center;
                background-size: rem(34) rem(34);
            }
        }
        .right{
            float: right;
        }
        .center{
            margin: 0 rem(90);
            height: 100%;
        }
    }
</style>


