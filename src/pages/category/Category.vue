<template>
    <transition name="slider">
        <div class="category">
            <header>
                <div class="back" @click="back"></div>
                <div class="right"></div>
                <div class="center">
                    类目
                </div>
            </header>
            <div class="category-content clearfix">
                <ul>
                    <li>沥青</li>
                    <li>沥青添加剂</li>
                    <li>沥青混合料</li>
                    <li>防水材料</li>
                    <li>设备/检测</li>
                </ul>
                <div class="category-details">
                    <div class="title">
                        沥青
                        <router-link class="more" to="/more" tag="div">
                            更多<i></i>
                        </router-link>
                    </div>
                    <div class="category-item-wrapper clearfix">
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                    </div>
                    <div class="title">
                        沥青
                        <router-link class="more" to="/more" tag="div">
                            更多<i></i>
                        </router-link>
                    </div>
                    <div class="category-item-wrapper clearfix">
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                    </div>
                    <div class="title">
                        沥青
                        <router-link class="more" to="/more" tag="div">
                            更多<i></i>
                        </router-link>
                    </div>
                    <div class="category-item-wrapper clearfix">
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                    </div>
                    <div class="title">
                        沥青
                        <router-link class="more" to="/more" tag="div">
                            更多<i></i>
                        </router-link>
                    </div>
                    <div class="category-item-wrapper clearfix">
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                    </div>
                    <div class="title">
                        沥青
                        <router-link class="more" to="/more" tag="div">
                            更多<i></i>
                        </router-link>
                    </div>
                    <div class="category-item-wrapper clearfix">
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                    </div>
                    <div class="title">
                        沥青
                        <router-link class="more" to="/more" tag="div">
                            更多<i></i>
                        </router-link>
                    </div>
                    <div class="category-item-wrapper clearfix">
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                        <div class="category-item">
                            海韵牌
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
@import "../../common/styles/mixin.scss";
.category {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e9e9e9;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  header {
    height: rem(88);
    background: #ffffff;
    // border-bottom: 1px solid #ccc;
    @include border-1px('b', #ccc);
    box-sizing: border-box;
    text-align: center;
    line-height: rem(88);
    font-size: rem(28);
    color: #ccc;
    .back,
    .right {
      width: rem(90);
      float: left;
      height: 100%;
    }
    .right {
      float: right;
    }
    .center {
      width: auto;
      margin: 0 rem(90);
    }
    .back {
      background: url(../../assets/icon/back.png) no-repeat center center;
      background-size: rem(18) rem(32);
    }
  }
  .category-content {
    text-align: center;
    font-size: rem(26);
    flex: 1;
    overflow: hidden;
    ul {
      float: left;
      width: 25%;
      background: #fafafa;
      li {
        height: rem(70);
        line-height: rem(70);
        // border-bottom: 1px solid #ccc;
        @include border-1px('b', #ccc);
      }
    }
    .category-details {
      float: right;
      width: 75%;
      height: 100%;
      overflow-y: scroll;
      padding-left: rem(20);
      box-sizing: border-box;
      .title {
        height: rem(70);
        line-height: rem(70);
        text-align: left;
        .more {
          float: right;
          width: rem(96);
          i {
            float: right;
            width: rem(40);
            height: rem(70);
            background: url("../../assets/icon/more_icon.png") no-repeat center
              center;
            background-size: rem(18) rem(32);
          }
        }
      }
      .category-item-wrapper {
        background: #fff;
        text-align: center;
        .category-item {
          float: left;
          box-sizing: border-box;
          width: 33.33%;
          height: rem(100);
          line-height: rem(100);
          // border-bottom: 1px solid #ccc;
          // border-right: 1px solid #ccc;
          @include border-1px('b', #ccc);
          @include border-1px('r', #ccc);
          &:nth-child(3n) {
            border-right: none;
          }
        }
      }
    }
  }
}
.slider-enter,
.slider-leave-to {
  transform: translate3d(100%, 0, 0);
}
.slider-enter-active,
.slider-leave-active {
  transition: all 0.2s;
}
</style>


