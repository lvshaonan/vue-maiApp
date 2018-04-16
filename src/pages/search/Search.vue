<template>
    <transition name="slider">
        <div class="search">
            <header>
                <div class="left" @click="back"></div>
                <div class="right">
                    <div class="search-input">
                        <i></i>
                        <form ref="form">
                            <input type="text" placeholder="请输入您要搜索的关键字">
                        </form>
                    </div>
                </div>
            </header>
            <div class="search-content">
                <div class="title">
                    <span></span>
                    <span></span>
                    在这里可以搜索
                </div>
                <div class="item">
                    <span class="icon"></span>
                    <h4>现货市场</h4>
                </div>
                <div class="item">
                    <span class="icon"></span>
                    <h4>资源单</h4>
                </div>
                <div class="item">
                    <span class="icon"></span>
                    <h4>采购单</h4>
                </div>
                <div class="item">
                    <span class="icon"></span>
                    <h4>动态</h4>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  data(){
      return{

      }
  },
  mounted(){
    this.$refs.form.addEventListener('submit', function(e){
        
        return false;
    }, false);
  },
  methods: {
      back(){
          this.$router.back();
      }
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/styles/mixin.scss";
    .search{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        header{
            height: rem(88);
            box-sizing: border-box;
            border-bottom: 1px solid #ccc;
            text-align: center;
            line-height: rem(88);
            font-size: rem(28);
            display: flex;
            .left{
                width: rem(90);
                background: url(../../assets/icon/back.png) no-repeat center center;
                background-size: rem(18) rem(32);
            }
            .right{
                flex: 1;
                padding-right: rem(20);
                box-sizing: border-box;
                .search-input{
                    height: rem(60);
                    margin-top: rem(15);
                    border-radius: rem(4);
                    position: relative;
                    form{
                        width: 100%;
                        height: 100%;
                        input{
                            width: 100%;
                            height: 100%;
                            display: block;
                            background: #e9e9e9;
                            border: none;
                            outline: none;
                            text-indent: rem(60);
                            font-size: rem(22);
                        }
                    }
                    i{
                        position: absolute;
                        display: inline-block;
                        width: rem(60);
                        height: rem(60);
                        left: 0;
                        background: url(../../assets/icon/search.png) no-repeat center center;
                        background-size: rem(32) rem(32);
                    }
                }
            }
        }
        .search-content{
            flex: 1;
            .title{
                height: rem(160);
                line-height: rem(160);
                text-align: center;
                font-size: rem(28);
                position: relative;
                span{
                    position: absolute;
                    display: block;
                    width: rem(230);
                    border: 1px solid #ccc;
                    top: rem(80);
                    &:nth-child(2){
                        right: 0;
                    }
                }
            }
            .item{
                float: left;
                width: 33.33%;
                padding-top: rem(30);
                text-align: center;
                .icon{
                    display: inline-block;
                    width: rem(100);
                    height: rem(100);
                    border-radius: 50%;
                    background-size: rem(46) rem(46) !important;
                }
                &:nth-child(2){
                    .icon{
                        background: #ebebeb url(../../assets/icon/xianhuo.png) no-repeat center center;
                    }
                }
                &:nth-child(3){
                    .icon{
                        background: #ebebeb url(../../assets/icon/ziyuandan.png) no-repeat center center;
                    }
                }
                &:nth-child(4){
                    .icon{
                        background: #ebebeb url(../../assets/icon/caigoudan.png) no-repeat center center;
                    }
                }
                &:nth-child(5){
                    .icon{
                        background: #ebebeb url(../../assets/icon/quanzi.png) no-repeat center center;
                    }
                }
                h4{
                    height: rem(94);
                    line-height: rem(94);
                    font-size: rem(26);
                }
            }
        }
    }
    .slider-enter, .slider-leave-to{
        transform: translate3d(100%, 0, 0);
    }
    .slider-enter-active, .slider-leave-active{
        transition: all 0.2s;
    }
</style>