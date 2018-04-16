<template>
  <transition name="slider">
    <div class="dynamic">
      <Header :options="headerOptions"/>
      <div class="dynamic-content-wrapper">
          <div class="dynamic-content">
              <div class="dynamic-header">
                <div class="avatar"></div>
                <div class="user-msg">
                    <h5>用户名<i></i></h5>
                    <span>3小时前</span>
                </div>
                <div class="share"></div>
            </div>
            <p class="describe">很长一段时间以来，有不少的人对食物相克的说法深信不疑的，甚至有的人把它当做科学常识来看待。我有一位同学他就是这个大军当中的一员，在他们家的厨房墙壁上非常醒目地贴着这样的两张表格，提示自己什么东西不能跟什么东西放在一块儿吃。所以，他们家每一顿饭做饭之前往往都是站在表格前仔细地端想这个东西到底能不能跟那个东西放在一块儿吃。</p>
            <div class="img-wrapper">
                <img src="https://m.360buyimg.com/n12/jfs/t15349/336/2453072094/173120/427a7a42/5aa248faN7d626b3a.jpg!q70.jpg" alt="">
                <img src="https://m.360buyimg.com/n12/jfs/t15349/336/2453072094/173120/427a7a42/5aa248faN7d626b3a.jpg!q70.jpg" alt="">
                <img src="https://m.360buyimg.com/n12/jfs/t15349/336/2453072094/173120/427a7a42/5aa248faN7d626b3a.jpg!q70.jpg" alt="">
            </div>
          </div>
      </div>
      <footer>
          <div class="zan">
              <i></i>赞
          </div>
          <div class="comments">
              <i></i>评论
          </div>
          <div class="collection" :class="{hasCollection: isCollection}" @click="collection">
              <i></i>收藏
          </div>
      </footer>
    </div>
  </transition>
</template>
<script>
import Header from "../../components/header";
export default {
  data() {
    return {
      isCollection: false,
      headerOptions: {
        isBackShow: true,
        title: "动态详情",
        clickHandle: () => {
          alert(4156156);
        },
        icon: "more",
        background: "#fff"
      }
    };
  },
  methods: {
    collection() {
      this.isCollection = !this.isCollection;
    }
  },
  watch: {},
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/styles/mixin.scss";
.dynamic {
  font-size: rem(26);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  .dynamic-content-wrapper {
    flex: 1;
    padding: 0 rem(20);
    box-sizing: border-box;
    background: #ffffff;
    overflow-y: scroll;
    .dynamic-content {
      .dynamic-header {
        height: rem(120);
        display: flex;
        align-items: center;
        // border-bottom: 1px solid #d2d2d2;
        @include border-1px('b', #d2d2d2);
        .avatar,
        .share {
          width: rem(80);
          height: rem(80);
          border-radius: 50%;
          background: skyblue;
          margin-right: rem(14);
        }
        .share {
          border-radius: 0;
          margin: 0;
          background: #ffffff url("../../assets/icon/share.png") no-repeat
            center center;
          background-size: rem(34) rem(34);
        }
        .user-msg {
          flex: 1;
          h5 {
            font-size: rem(26);
            height: rem(28);
            line-height: rem(28);
            vertical-align: top;
            margin-bottom: rem(14);
            i {
              display: inline-block;
              width: rem(26);
              height: rem(26);
              background: url("../../assets/icon/v3.png") no-repeat;
              background-size: rem(26) rem(26);
              margin-left: rem(6);
            }
          }
          span {
            font-size: rem(22);
            color: #ccc;
          }
        }
      }
      .describe {
        line-height: rem(34);
        padding: rem(18) 0;
        font-size: rem(24);
      }
      .img-wrapper {
        background: #eeeeee;
        img {
          width: 100%;
          margin-bottom: rem(20);
        }
      }
    }
  }
  footer {
    height: rem(90);
    // border-top: 1px solid #000;
    @include border-1px('t', #000);
    display: flex;
    background: #ffffff;
    .zan,
    .comments,
    .collection {
      flex: 1;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        display: inline-block;
        width: rem(36);
        height: rem(36);
        margin-right: rem(10);
        background-size: rem(36) rem(36) !important;
      }
    }
    .zan i {
      background: url("../../assets/icon/zan.png") no-repeat;
    }
    .comments i {
      background: url("../../assets/icon/comments.png") no-repeat;
    }
    .collection {
      background: #f54f21;
      color: #ffffff;
      i {
        background: url("../../assets/icon/nocollect.png") no-repeat;
      }
    }
    .hasCollection {
      background: #fff;
      color: #666666;
      i {
        background: url("../../assets/icon/collect.png") no-repeat;
      }
    }
    .comments {
      // border-left: 1px solid #d2d2d2;
      @include border-1px('l', #d2d2d2);
      // border-right: 1px solid #d2d2d2;
      @include border-1px('r', #d2d2d2);
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


