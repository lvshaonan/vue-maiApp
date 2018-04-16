<template>
  <div class="resources">
      <Header :options="headerOptions"/>
      <div class="resources-content">
          <swiper :options="swiperOptions" ref="mySwiper">
              <swiper-slide>
                  <div class="resources-wrapper">
                      <div class="resources-scroll">
                          <div class="resources-scroll-wrapper">
                              <div>
                                <div class="banner">
                                    <Slider :options="bannerSwiperOptions" :items="items"/>
                                </div>
                                <section>
                                    <div class="title">
                                        <div class="left">
                                            <h3>
                                              公司名称
                                            </h3>
                                            <h3>所在地<span>华北地区</span></h3>
                                        </div>
                                        <div class="right">
                                            <i></i>分享
                                        </div>
                                    </div>
                                </section>
                                <section class="user">
                                  <div class="avatar">

                                  </div>
                                  <div class="user-msg">
                                    <h4>用户名<i></i></h4>
                                    <span>上传时间 3小时前</span>
                                  </div>
                                </section>
                                <section class="attribute">
                                  <span>分类</span>
                                  <span>沥青/混合料/添加剂</span>
                                  <span>查看次数</span>
                                  <span>100</span>
                                </section>
                                <section class="introduce">
                                  <h3>主营产品介绍</h3>
                                  <p>通过在浮动元素的末尾添加一个空元素,设置clear:both，after伪元素也是通过content**在元素后面生成了内容为一个点(或” “)的块级元素**； 
块级元素自然就能让行内元素下沉了，因为一般受影响的是行内元素~或者父元素高度塌陷</p>
                                </section>
                              </div>
                          </div>
                      </div>
                      <footer>
                          <div class="service"><i></i><span>客服</span></div>
                          <div class="store"><i></i><span>店铺</span></div>
                          <div class="collection"><i></i><span>收藏</span></div>
                          <div>加入进货单</div>
                          <div>立即购买</div>
                      </footer>
                  </div>
              </swiper-slide>
              <swiper-slide>
                  详情页
              </swiper-slide>
          </swiper>
      </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Slider from "../../components/slider";
import Header from "../../components/header";
export default {
  data() {
    return {
      isActive: 1,
      index: 0,
      swiperOptions: {
        initialSlide: 0,
        notNextTick: true,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      },
      bannerSwiperOptions: {
        autoPlay: true,
        loop: true,
        pagination: ".swiper-pagination"
      },
      items: [
        {
          href: "",
          src: require("../../assets/banner.jpg")
        }
      ],
      headerOptions: {
        isBackShow: true,
        icon: "more",
        title: "资源单详情",
        clickHandle: () => {
          alert(4564);
        }
      }
    };
  },
  mounted() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    tab(n) {
      this.isActive = n;
      if (n == 1) {
        this.swiper.slideTo(0);
      } else {
        this.swiper.slideTo(1);
      }
    },
    back() {
      this.$router.back();
    },
    toDetail() {
      this.swiper.slideTo(1);
    }
  },
  watch: {
    index() {
      if (this.index) {
        this.isActive = 2;
      } else {
        this.isActive = 1;
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Slider,
    Header
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/styles/mixin.scss";
@import "swiper/dist/css/swiper.css";
.resources {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #e9e9e9;
  display: flex;
  flex-direction: column;
  font-size: rem(24);
  header {
    height: rem(88);
    box-sizing: border-box;
    background: #fff;
    // border-bottom: 1px solid #ccc;
    @include border-1px('b', #ccc);
    text-align: center;
    line-height: rem(88);
    font-size: rem(28);
    .left,
    .right {
      width: rem(90);
      height: 100%;
      float: left;
      i {
        display: block;
        width: 100%;
        height: 100%;
      }
      .back {
        background: url(../../assets/icon/back.png) no-repeat center center;
        background-size: rem(18) rem(32);
      }
      .more {
        background: url(../../assets/icon/more.png) no-repeat center center;
        background-size: rem(50) rem(12);
      }
    }
    .right {
      float: right;
    }
    .center {
      margin: 0 rem(90);
      height: 100%;
      position: relative;
      .tab {
        width: 60%;
        margin: 0 auto;
        height: 100%;
        .tab-item {
          height: 100%;
          display: inline-block;
          padding: 0 rem(20);
          margin: 0 rem(30);
          box-sizing: border-box;
          border-bottom: 4px solid transparent;
        }
        .active {
          border-color: #000000;
        }
      }
      i {
        position: absolute;
        top: 0;
        right: 0;
        width: rem(88);
        height: 100%;
        background: url("../../assets/icon/danju.png") no-repeat center center;
        background-size: rem(32) rem(34);
      }
    }
  }
  .resources-content {
    flex: 1;
    .swiper-container {
      height: 100%;
      .resources-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        .resources-scroll {
          flex: 1;
          position: relative;
          .resources-scroll-wrapper {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            overflow-y: scroll;
          }
          section:not(:nth-child(1)) {
            font-size: rem(24);
            padding: rem(20);
            box-sizing: border-box;
            margin-bottom: rem(20);
            background: #ffffff;
            .title {
              height: rem(80);
              display: flex;
              .left {
                flex: 8;
                // border-right: 1px solid #ccc;
                @include border-1px('r', #ccc);
                h3:nth-child(1) {
                  height: rem(34);
                  margin-bottom: rem(15);
                  font-size: rem(30);
                  line-height: rem(34);
                  i {
                    float: left;
                    width: rem(56);
                    height: rem(34);
                    background: url("../../assets/icon/ziying.png") no-repeat;
                    background-size: rem(56) rem(32);
                    margin-right: rem(10);
                  }
                }
                h3:nth-child(2) {
                  height: rem(30);
                  font-size: rem(28);
                  span{
                    margin-left: rem(20);
                  }
                }
              }
              .right {
                flex: 2;
                text-align: center;
                font-size: rem(20);
                i {
                  display: block;
                  width: rem(34);
                  height: rem(34);
                  margin: rem(6) auto rem(10);
                  background: url("../../assets/icon/share.png") no-repeat;
                  background-size: rem(34) rem(34);
                }
              }
            }
          }
          .user {
            height: rem(120);
            // border-bottom: 1px solid #dcdcdc;
            @include border-1px('b', #dcdcdc);
            display: flex;
            align-items: center;
            margin-bottom: 0 !important;
            .avatar {
              width: rem(78);
              height: rem(78);
              background: #1d9ed6;
              border-radius: rem(6);
              margin-right: rem(14);
            }
            h4 {
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
          .attribute{
            height: rem(94);
            line-height: rem(54);
            span{
              float: left;
              margin-right: rem(36);
            }
          }
          .introduce{
            margin-bottom: 0 !important;
            h3{
              font-size: rem(30);
              font-weight: 400;
              line-height: rem(40);
              margin-bottom: rem(20);
            }
            p{
              line-height: rem(36);
              text-indent: rem(24);
            }
          }
        }
      }
    }
  }
}
</style>


