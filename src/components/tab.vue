<template>
  <div class="tab">
      <router-link tag="div" to="/home" class="tab-item">
        <i class="tab-icon"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="div" to="/social" class="tab-item">
        <i class="tab-icon"></i>
        <span>圈子</span>
      </router-link>
      <div class="tab-item">
          <div class="add-btn"><i></i></div>
      </div>
      <router-link tag="div" to="/msg" class="tab-item">
        <i class="tab-icon"></i>
        <span>消息</span>
      </router-link>
      <router-link tag="div" to="/me" class="tab-item">
        <i class="tab-icon"></i>
        <span>我的</span>
      </router-link>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
    @import "../common/styles/mixin.scss";
    .tab{
        height: rem(88);
        border-top: 1px solid #ccc;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding-top: rem(8);
        .tab-item{
            flex: 1;
            font-size: rem(20);
            text-align: center; 
            .tab-icon{
                display: inline-block;
                width: rem(42);
                height: rem(42);
                margin-bottom: rem(6);
                background-position: center center;
            }
            &:nth-child(1){
                .tab-icon{
                    @include tabBg('../assets/icon/home.png', 43, 39);
                }
                &.router-link-active{
                    .tab-icon{
                        @include tabBg('../assets/icon/home_select.png', 43, 39);
                    }
                }
            }
            &:nth-child(2){
                .tab-icon{
                    width: rem(50);
                    @include tabBg('../assets/icon/quanzi.png', 50, 34);
                    background-position: center center;
                }
                &.router-link-active{
                    .tab-icon{
                        @include tabBg('../assets/icon/quanzi_select.png', 50, 34);
                        background-position: center center;
                    }
                }
            }
            &:nth-child(3){
                .add-btn{
                    display: inline-block;
                    width: rem(100);
                    height: rem(100);
                    border-radius: rem(50);
                    transform: translateY(-50%);
                    border: 1px solid #ccc;
                    background: #fff;
                    i{
                        display: inline-block;
                        width: rem(84);
                        height: rem(84);
                        border-radius: rem(50); 
                        border: rem(8) solid #fff;
                        background: #fed853 url('../assets/icon/add.png') no-repeat center center;
                        background-size: rem(36) rem(36);
                    }
                }
            }
            &:nth-child(4){
                .tab-icon{
                    @include tabBg('../assets/icon/msg.png', 42, 42);
                }
                &.router-link-active{
                    .tab-icon{
                        @include tabBg('../assets/icon/msg_select.png', 42, 42);
                    }
                }
            }
            &:nth-child(5){
                .tab-icon{
                    @include tabBg('../assets/icon/me.png', 38, 40);
                }
                &.router-link-active{
                    .tab-icon{
                        @include tabBg('../assets/icon/me_select.png', 38, 40);
                    }
                }
            }
            span{
                display: block;
            }
        }
    }
</style>


