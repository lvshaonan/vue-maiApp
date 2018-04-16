<template>
  <transition name="slider">
    <div class="personal">
      <header :class="{writeBg: isTabShow}" ref="header">
        <div class="left" @click="back"></div>
        <div class="right"></div>
        <div class="center">{{title}}</div>
      </header>
      <div class="tab-top" v-show="isTabShow">
        <div class="tab-item" :class="{active: isActive == 1}" @click="tab(1)">
          <span>动态</span>
        </div>
        <div class="tab-item" :class="{active: isActive == 2}" @click="tab(2)">
          <span>资源单</span>
        </div>
        <div class="tab-item" :class="{active: isActive == 3}" @click="tab(3)">
          <span>采购单</span>
        </div>
      </div>
      <Minirefresh id="personalMinirefresh"
                        ref="personalMinirefresh"
                        :options="options"
                        @sendPosition="position"
                        @pullingDown="onPullingDown"
                        @pullingUp="onPullingUp">
        <div slot="content">
          <div class="me-content-wrapper">
            <div class="user-data">
              <div class="avatar"></div>
              <h3>昵称<i></i></h3>
              <h5>公司名称或个性签名</h5>
            </div>
            <div class="msg-wrapper" ref="msgWrapper">
              <div class="tab" :class="{position: false}">
                <div class="tab-item" :class="{active: isActive == 1}" @click="tab(1)">
                  <span>动态</span>
                </div>
                <div class="tab-item" :class="{active: isActive == 2}" @click="tab(2)">
                  <span>资源单</span>
                </div>
                <div class="tab-item" :class="{active: isActive == 3}" @click="tab(3)">
                  <span>采购单</span>
                </div>
              </div>
              <div class="tab-content" v-show="isActive == 1">
                <router-link to="/dynamic" tag="div"><DynamicPanel/></router-link>
                <router-link to="/dynamic" tag="div"><DynamicPanel/></router-link>
                <router-link to="/dynamic" tag="div"><DynamicPanel/></router-link>
              </div>
              <div class="tab-content" v-show="isActive == 2">
                资源单
              </div>
              <div class="tab-content" v-show="isActive == 3">
                采购单
              </div>
            </div>
          </div>
        </div>
      </Minirefresh>
    </div>
  </transition>
</template>
<script>
import DynamicPanel from "../../components/dynamicPanel";
import Minirefresh from "../../components/minirefresh.vue";
export default {
  data() {
    return {
      isActive: 1,
      isTabShow: false,
      isPosition: true,
      personalMinirefresh: null,
      scrollPosition: 0,
      title: "",
      offsetTop: 0,
      options: {
        container: "#personalMinirefresh",
        down: {
          isLock: true,
          isAuto: false
        },
        up: {
          isLock: true,
          isAuto: false,
          loadFull: {
            isEnable: false
          },
          onScroll: () => {
            this.$refs.personalMinirefresh.getPosition();
          }
        }
      }
    };
  },
  mounted() {
    this.offsetTop = this.$refs.msgWrapper.offsetTop - this.$refs.header.offsetHeight;
  },
  methods: {
    back() {
      this.$router.back();
    },
    tab(n) {
      this.isActive = n;
    },
    onPullingDown() {},
    onPullingUp() {},
    position(val) {
      this.scrollPosition = val;
    }
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition >= this.offsetTop) {
        this.isTabShow = true;
        this.title = "昵称";
      } else {
        this.isTabShow = false;
        this.title = "";
      }
    }
  },
  components: {
    DynamicPanel,
    Minirefresh
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/styles/mixin.scss";
.personal {
  font-size: rem(28);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e9e9e9;
  z-index: 9999;
  header {
    height: rem(88);
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 999;
    .left,
    .right {
      float: left;
      height: 100%;
      width: rem(90);
    }
    .left {
      background: url(../../assets/icon/back.png) no-repeat center center;
      background-size: rem(18) rem(32);
    }
    .right {
      float: right;
    }
    .center {
      height: 100%;
      margin: 0 rem(90);
      line-height: rem(88);
    }
    &.writeBg {
      background: #ffffff;
    }
  }
  .tab-top {
    position: absolute;
    background: #ffffff;
    display: flex;
    height: rem(88);
    // border-top: 1px solid #dfdfdf;
    @include border-1px('t', #dfdfdf);
    // border-bottom: 1px solid #a8a8a8;
    @include border-1px('b', #a8a8a8);
    width: 100%;
    z-index: 9999;
    top: rem(86);
    .tab-item {
      flex: 1;
      text-align: center;
      span {
        display: inline-block;
        margin: 0 auto;
        padding: 0 rem(20);
        height: rem(84);
        border-bottom: rem(4) solid transparent;
        line-height: rem(88);
      }
    }
    .active {
      span {
        border-color: #f8ce3a;
      }
    }
  }
  .me-content-wrapper {
    .user-data {
      padding-top: rem(50);
      height: rem(346);
      border-bottom: 4px solid #fed853;
      box-sizing: border-box;
      background: #fff;
      text-align: center;
      .avatar {
        display: inline-block;
        width: rem(100);
        height: rem(100);
        background: #f66;
        border-radius: 50%;
      }
      h3 {
        font-size: rem(32);
        font-weight: 400;
        margin: rem(20) 0 rem(16);
      }
      h5 {
        font-size: rem(24);
      }
    }
    .options-wrapper {
      height: rem(80);
      background: #f8ce3a;
      display: flex;
      line-height: rem(80);
      .option {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          display: inline-block;
          width: rem(36);
          height: rem(36);
          background-size: rem(36) rem(36) !important;
          margin-right: rem(10);
        }
        &:nth-child(1) {
          i {
            background: url("../../assets/icon/friends.png") no-repeat;
          }
        }
        &:nth-child(2) {
          i {
            background: url("../../assets/icon/start.png") no-repeat;
          }
        }
        &:nth-child(3) {
          i {
            background: url("../../assets/icon/danju.png") no-repeat;
          }
        }
      }
    }
    .received-offer,
    .all-order {
      height: rem(86);
      line-height: rem(86);
      // border-bottom: 1px solid #ccc;
      @include border-1px('b', #ccc);
      padding: 0 rem(20);
      box-sizing: border-box;
      background: #ffffff;
      i {
        float: left;
        width: rem(48);
        height: rem(48);
        margin: rem(18) rem(20) 0 0;
        background: url("../../assets/icon/offer.png");
        background-size: rem(48) rem(48);
      }
      b {
        float: right;
        width: rem(18);
        height: 100%;
        background: url("../../assets/icon/more_icon.png") no-repeat center
          center;
        background-size: rem(18) rem(32);
      }
    }
    .operation {
      height: rem(122);
      margin-bottom: rem(20);
      display: flex;
      justify-content: center;
      background: #ffffff;
      .operation-item {
        flex: 1;
        text-align: center;
        i {
          display: block;
          width: rem(38);
          height: rem(38);
          margin: rem(18) auto;
          background-size: rem(38) rem(38) !important;
        }
        &:nth-child(1) {
          i {
            background: url("../../assets/icon/confirm.png") no-repeat;
          }
        }
        &:nth-child(2) {
          i {
            background: url("../../assets/icon/pay.png") no-repeat;
          }
        }
        &:nth-child(3) {
          i {
            background: url("../../assets/icon/tack_goods.png") no-repeat;
          }
        }
        &:nth-child(4) {
          i {
            background: url("../../assets/icon/refund.png") no-repeat;
          }
        }
        &:nth-child(5) {
          i {
            background: url("../../assets/icon/paper.png") no-repeat;
          }
        }
      }
    }
    .msg-wrapper {
      .tab {
        background: #ffffff;
        display: flex;
        height: rem(88);
        // border-top: 1px solid #dfdfdf;
        @include border-1px('t', #dfdfdf);
        // border-bottom: 1px solid #a8a8a8;
        @include border-1px('b', #a8a8a8);
        width: 100%;
        .tab-item {
          flex: 1;
          text-align: center;
          span {
            display: inline-block;
            margin: 0 auto;
            padding: 0 rem(20);
            height: rem(84);
            border-bottom: rem(4) solid transparent;
            line-height: rem(88);
          }
        }
        .active {
          span {
            border-color: #f8ce3a;
          }
        }
      }
      .position {
        position: fixed !important;
        top: rem(0);
        z-index: 9999;
      }
      .tab-content {
        min-height: rem(450);
        background: #e9e9e9;
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





