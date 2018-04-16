<template>
  <section class="dynamic-panel">
    <div class="msg-header">
      <div class="avatar" @click.stop="toPersonalPage">
        <img :src="data.avatar" alt="">
      </div>
      <div class="user-msg">
          <h5>{{data.userName}}<i></i></h5>
          <span>{{data.time}}</span>
      </div>
    </div>
    <div class="msg-img" v-show="data.imgs.length">
      <MsgImgSlider :items="data.imgs"/>
    </div>
    <div class="msg-describe">
      <p class="msg-describe-text">{{data.describe}}</p>
    </div>
    <div class="msg-comments" v-show="data.comments.length">
      <p v-for="(item, index) in data.comments" :key="index">{{item}}</p>
    </div>
    <div class="msg-operation">
      <span>
          <i></i>{{data.collection}}
      </span>
      <span>
          <i></i>{{data.collection}}
      </span>
      <span>
          <i></i>{{data.collection}}
      </span>
    </div>
  </section>
</template>
<script>
import MsgImgSlider from "./msgImgSlider";
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          avatar: '',
          userName: '张三',
          time: '三小时前',
          describe: 'P标签是默认是自动换行的，质在于，我当时获取的数据是一长串的数字，浏览器应该是对数字和英文单词处理方式相近，不会截断。 ',
          comments: [],
          collection: 12,
          imgs: [
            {href: '', src: require('../assets/slider_banner.jpg')},
            {href: '', src: require('../assets/slider_banner.jpg')}
          ]
        };
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
    toPersonalPage(e) {
      this.$router.push("/personal");
    }
  },
  components: {
    MsgImgSlider
  }
};
</script>
<style lang="scss" scoped>
@import "../common/styles/mixin.scss";
.dynamic-panel {
  width: 100%;
  padding: 0 rem(20);
  margin-bottom: rem(20);
  box-sizing: border-box;
  background: #fff;
  .msg-header {
    height: rem(104);
    display: flex;
    align-items: center;
    .avatar {
      width: rem(80);
      height: rem(80);
      border-radius: 50%;
      background: skyblue;
      margin-right: rem(14);
    }
    .user-msg {
      display: flex;
      flex-direction: column;
      h5 {
        font-size: rem(26);
        height: rem(28);
        line-height: rem(28);
        vertical-align: top;
        margin-bottom: rem(8);
        i {
          display: inline-block;
          width: rem(26);
          height: rem(26);
          background: url("../assets/icon/v3.png") no-repeat;
          background-size: rem(26) rem(26);
          margin-left: rem(6);
        }
      }
      span {
        font-size: rem(20);
        color: #ccc;
      }
    }
  }
  .msg-img {
    height: rem(220);
  }
  .msg-describe {
    margin: rem(12) 0 rem(18) 0;
    max-height: rem(108);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    .msg-describe-text {
      line-height: rem(36);
      font-size: rem(28);
      font-weight: 400;
      word-wrap:break-word;
      
    }
  }
  .msg-comments {
    max-height: rem(80);
    p {
      line-height: rem(40);
      font-size: rem(24);
    }
  }
  .msg-operation {
    height: rem(88);
    // border-top: 1px solid #ccc;
    @include border-1px('t', #ccc);
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    span {
      width: rem(90);
      height: 100%;
      font-size: rem(22);
      line-height: rem(88);
      i {
        display: inline-block;
        width: rem(36);
        height: rem(36);
        background: url("../assets/icon/start.png");
        background-size: rem(36) rem(36) !important;
        vertical-align: middle;
        margin-right: rem(10);
      }
      &:nth-child(2){
        i{
          background: url("../assets/icon/comments.png");
        }
      }
      &:nth-child(3){
        i{
          background: url("../assets/icon/zan.png");
        }
      }
    }
  }
}
</style>


