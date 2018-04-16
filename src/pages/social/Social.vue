<template>
  <div class="social">
      <header>
        <div class="tab">
          <div :class="{tab_item: true, active: isFound}" @click="tab(0)">发现</div>
          <div :class="{tab_item: true, active: isMine}" @click="tab(1)">我的</div>
        </div>
      </header>
      <div class="social-content">
          <swiper :options="swiperOptions" ref="mySwiper">
            <swiper-slide>
                <minirefresh id="socialMinirefresh"
                        ref="socialMinirefresh"
                        :options="minirefreshOptions"
                        @pullingDown="onPullingDown"
                        @pullingUp="onPullingUp">
                <div slot="content">
                    <div class="msg-wrapper">
                      <router-link to="/dynamic" tag="div"><DynamicPanel/></router-link>
                      <router-link to="/dynamic" tag="div"><DynamicPanel/></router-link>
                      <router-link to="/dynamic" tag="div"><DynamicPanel/></router-link>
                    </div>
                </div>
            </minirefresh>
            </swiper-slide>
            <swiper-slide>
              <div class="slider2">
                敬请期待！
              </div>
            </swiper-slide>
        </swiper>
      </div>
  </div>
</template>
<script>
import MiniRefresh from '../../components/minirefresh.vue';
import BSlider from '../../components/BSlider';
import MsgImgSlider from '../../components/msgImgSlider';
import DynamicPanel from "../../components/dynamicPanel";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data(){
    return{
      index: 0,
      socialMinirefresh: null,
      requestDelayTime: 1500,
      isFound: true,
      isMine: false,
      currentPageIndex: 0,
      comments: [1],
      minirefreshOptions: {
          container: '#socialMinirefresh',
          down: {
            isAuto: false
          },
          up: {
            isLock: true,
            isAuto: false,
            loadFull: {
                isEnable: false
            }
          }
      },
      swiperOptions: {
        initialSlide: 0,
        notNextTick: true, 
        onSlideChangeEnd: swiper => { 
          this.page = swiper.realIndex+1; 
          this.index = swiper.realIndex; 
        }
      }
    }
  },
  computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  },
  methods: {
    onPullingDown() {
        setTimeout(() => {
          this.$refs.socialMinirefresh.endDownLoading(true)
        }, this.requestDelayTime)
    },
    onPullingUp() {
        setTimeout(() => {
          this.$refs.socialMinirefresh.endUpLoading(true)
        }, this.requestDelayTime)
    },
    tab(n){
      if(n){
        this.swiper.slideTo(1);
        this.index = 1;
        this.isMine = true;
        this.isFound = false;
      }else{
        this.swiper.slideTo(0);
        this.index = 0;
        this.isMine = false;
        this.isFound = true;
      }
    },
    getIndex(val) {
      this.currentPageIndex = val;
    }
  },
  watch: {
    currentPageIndex(){
      if(this.currentPageIndex){
        this.isMine = true;
        this.isFound = false;
      }else{
        this.isMine = false;
        this.isFound = true;
      }
    },
    index(){
      if(this.index){
        this.isMine = true;
        this.isFound = false;
      }else{
        this.isMine = false;
        this.isFound = true;
      }
    }
  },
  components: {
    minirefresh: MiniRefresh,
    'slider': BSlider,
    MsgImgSlider,
    swiper,
    swiperSlide,
    DynamicPanel
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/styles/mixin.scss";
  .swiper-container{
    height: 100%;
    .slider2{
      height: 100%;
      box-sizing: border-box;
      text-align: center;
      font-size: rem(26);
      padding-top: rem(160);
    }
  }
  .social{
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
      height: rem(88);
      background: #ffffff;
      // border-bottom: 1px solid #ccc;
      @include border-1px('b', #ccc);
      box-sizing: border-box;
      text-align: center;
      line-height: rem(88);
      font-size: rem(28);
      .tab{
        width: 36%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        .tab_item{
          flex: 1;
          box-sizing: border-box;
          border-bottom: 4px solid transparent;
          &.active{
            border-color: #FED853;
          }
        }
      }
    }
    .social-content{
      flex: 1;
      background: #E9E9E9;
      padding-top: rem(20);
      box-sizing: border-box;
      .msg-wrapper{
        background: #E9E9E9;
          .msg-item{
              width: 100%;
              padding: 0 rem(20);
              margin-bottom: rem(20);
              box-sizing: border-box;
              background: #fff;
              .msg-header{
                  height: rem(104);
                  display: flex;
                  align-items: center;
                  .avatar{
                      width: rem(80);
                      height: rem(80);
                      border-radius: 50%;
                      background: skyblue;
                      margin-right: rem(14);
                  }
                  .user-msg{
                      h5{
                          font-size: rem(26);
                          height: rem(28);
                          line-height: rem(28);
                          vertical-align: top;
                          i{
                              display: inline-block;
                              width: rem(26);
                              height: rem(26);
                              background: url('../../assets/icon/v3.png') no-repeat;
                              background-size: rem(26) rem(26);
                              margin-left: rem(6);
                          }
                      }
                      span{
                          font-size: rem(22);
                          color: #ccc;
                      }
                  }
              }
              .msg-img{
                  height: rem(220);
              }
              .msg-describe{
                  margin: rem(12) 0 rem(18) 0;
                  max-height: rem(108);
                  overflow: hidden;
                  .msg-describe-text{
                      line-height: rem(36);
                      font-size: rem(28);
                      font-weight: 400;
                  }
              }
              .msg-comments{
                  max-height: rem(80);
                  p{
                      line-height: rem(40);
                      font-size: rem(24);
                  }
              }
              .msg-operation{
                  height: rem(88);
                  // border-top: 1px solid #ccc;
                  @include border-1px('t', #ccc);
                  box-sizing: border-box;
                  display: flex;
                  justify-content: flex-end;
                  span{
                      width: rem(90);
                      height: 100%;
                      font-size: rem(22);
                      line-height: rem(88);
                      i{
                          display: inline-block;
                          width: rem(36);
                          height: rem(36);
                          background: url('../../assets/icon/start.png');
                          background-size: rem(36) rem(36);
                          vertical-align: middle;
                          margin-right: rem(10);
                      }
                  }
              }
          }
      }
    }
  }
</style>


