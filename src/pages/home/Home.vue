<template>
  <div class="home">
        <header :class="{header: true, showBg: searchInputShow}">
            <div class="header-left">
                <i></i>
                <p>类目</p>
            </div>
            <div class="header-right">
                <i></i>
                <p>通知</p>
            </div>
            <div class="header-center">
                <div class="title" v-show="!searchInputShow">Mai沥青</div>
                <div class="header-search-bar" v-show="searchInputShow">
                    <div class="search-input">
                        <i></i>
                        请输入您要搜索的关键字
                    </div>
                </div>
            </div>
        </header>
        <div class="scroll-wrapper">
            <minirefresh id="minirefresh"
                        ref="minirefresh"
                        :options="options"
                        @pullingDown="onPullingDown"
                        @sendPosition="position"
                        @pullingUp="onPullingUp">
                <div slot="content">
                    <div class="slider-wrapper">
                        <Slider :items="items"/>
                        <div class="search-bar-wrapper">
                            <div class="search-bar">
                                <i></i>
                                请输入您要搜索的关键字
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div class="nav-item">
                            <i></i>
                            <p>现货市场</p>
                        </div>
                        <div class="nav-item">
                            <i></i>
                            <p>资源单</p>
                        </div>
                        <div class="nav-item">
                            <i></i>
                            <p>采购单</p>
                        </div>
                        <div class="nav-item">
                            <i></i>
                            <p>物流</p>
                        </div>
                    </nav>
                    <div class="slider-banner">
                        <SliderBanner :items="sliderBanner"/>
                    </div>
                    <div class="msg-wrapper">
                        <div class="msg-item">
                            <div class="msg-header">
                                <div class="avatar"></div>
                                <div class="user-msg">
                                    <h5>用户名<i></i></h5>
                                    <span>3小时前</span>
                                </div>
                            </div>
                            <div class="msg-img">
                                <MsgImgSlider/>
                            </div>
                            <div class="msg-describe">
                                <p class="msg-describe-text">中海油70#</p>
                            </div>
                            <div class="msg-comments" v-show="comments.length">
                                <p>sacsackomasomcv</p>
                            </div>
                            <div class="msg-operation">
                                <span>
                                    <i></i>
                                    12
                                </span>
                                <span>
                                    <i></i>
                                    12
                                </span>
                                <span>
                                    <i></i>
                                    12
                                </span>
                            </div>
                        </div>
                        <div class="msg-item">
                            <div class="msg-header">
                                <div class="avatar"></div>
                                <div class="user-msg">
                                    <h5>用户名<i></i></h5>
                                    <span>3小时前</span>
                                </div>
                            </div>
                            <div class="msg-img">
                                <MsgImgSlider/>
                            </div>
                            <div class="msg-describe">
                                <p class="msg-describe-text">中海油70#</p>
                            </div>
                            <div class="msg-comments" v-show="comments.length">
                                <p>sacsackomasomcv</p>
                            </div>
                            <div class="msg-operation">
                                <span>
                                    <i></i>
                                    12
                                </span>
                                <span>
                                    <i></i>
                                    12
                                </span>
                                <span>
                                    <i></i>
                                    12
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </minirefresh>
        </div>
  </div>
</template>
<script>
import MiniRefresh from '../../components/minirefresh.vue';
import Slider from '../../components/slider';
import SliderBanner from '../../components/sliderBanner';
import MsgImgSlider from '../../components/msgImgSlider';
export default {
  data(){
      return{
        searchInputShow: false,
        minirefresh: null,
        maxDataSize: 30,
        requestDelayTime: 1500,
        scrollPosition: 0,
        options: {
            container: '#minirefresh',
            down: {
                isAuto: true
            },
            up: {
                isAuto: true,
                loadFull: {
                    isEnable: true
                },
                onScroll:()=>{
                    this.$refs.minirefresh.getPosition();
                }
            }
        },
        items: [
            {
                href: 'home',
                src: require('../../assets/banner.jpg')
            }
        ],
        comments: [1],
        sliderBanner: [
            {
                title: 'SK70#',
                user: 'lvshaonan',
                number: 20,
                imgSrc: require('../../assets/slider_banner.jpg')
            },
            {
                title: 'SK70#',
                user: 'lvshaonan',
                number: 3,
                imgSrc: require('../../assets/slider_banner.jpg')
            },
            {
                title: 'SK70#',
                user: 'lvshaonan',
                number: 45,
                imgSrc: require('../../assets/slider_banner.jpg')
            },
            {
                title: 'SK70#',
                user: 'lvshaonan',
                number: 67,
                imgSrc: require('../../assets/slider_banner.jpg')
            },
            {
                title: 'SK70#',
                user: 'lvshaonan',
                number: 87,
                imgSrc: require('../../assets/slider_banner.jpg')
            }
        ]
      }
  },
  components: {
        minirefresh: MiniRefresh,
        Slider,
        SliderBanner,
        MsgImgSlider
    },
  mounted() {
      var self = this;
  },
  methods: {
      onPullingDown() {
          setTimeout(() => {
            this.$refs.minirefresh.endDownLoading(true)
          }, this.requestDelayTime)
      },
      onPullingUp() {
          setTimeout(() => {
            this.$refs.minirefresh.endUpLoading(true)
          }, this.requestDelayTime)
      },
      position(val){
          this.scrollPosition = val;
      }
  },
  watch: {
      scrollPosition(){
          if(this.scrollPosition>300){
              this.searchInputShow = true;
          }else{
              this.searchInputShow = false;
          }
      }
  }
}
</script>
<style lang="scss" scoped>
    @import "../../common/styles/mixin.scss";
    .home{
        height: 100%;
        position: relative;
        font-size: rem(40);
        background: #e9e9e9;
        .showBg{
            background: #fdd752;
        }
        .header{
            height: rem(76);
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 999;
            .header-left, .header-right{
                height: 100%;
                width: rem(90);
                float: left;
                text-align: center;
                color: #fff;
                font-size: rem(20);
                i{
                    display: inline-block;
                    width: rem(32);
                    height: rem(36);
                    background: url('../../assets/icon/class.png') no-repeat center center;
                    margin: rem(6) 0 rem(4) 0;
                    background-size: rem(32) rem(25);
                }
            }
            .header-center{
                height: 100%;
                width: auto;
                margin: 0 rem(90);
                .title{
                    text-align: center;
                    font-size: rem(34);
                    color: #fff;
                    line-height: rem(76);
                }
                .header-search-bar{
                    height: 100%;
                    .search-input{
                        width: 90%;
                        height: rem(56);
                        line-height: rem(56);
                        background: #ffffff;
                        margin: rem(10) auto 0;
                        font-size: rem(26);
                        color: #ccc;
                        border-radius: rem(6);
                        i{
                            vertical-align: middle;
                            display: inline-block;
                            width: rem(34);
                            height: rem(34);
                            background: url('../../assets/icon/search.png') no-repeat center center;
                            background-size: rem(34) rem(34);
                            margin: 0 rem(12) 0 rem(12);
                        }
                    }
                }
            }
            .header-right{
                float: right;
                i{
                    background: url('../../assets/icon/notice.png') no-repeat center center;
                    background-size: rem(32) rem(36);
                }
                
            }
        }
        .slider-wrapper{
            position: relative;
            .search-bar-wrapper{
                height: rem(70);
                width: 100%;
                position: absolute;
                background: rgba(0,0,0,0.6);
                bottom: 0;
                z-index: 100;
                .search-bar{
                    font-size: rem(26);
                    color: #ccc;
                    line-height: rem(50);
                    width: 94%;
                    height: rem(50);
                    margin: rem(10) auto 0;
                    border-radius: rem(6);
                    background: #fff;
                    i{
                        vertical-align: middle;
                        display: inline-block;
                        width: rem(34);
                        height: rem(34);
                        background: url('../../assets/icon/search.png') no-repeat center center;
                        background-size: rem(34) rem(34);
                        margin: 0 rem(12) 0 rem(12);
                    }
                }
            }
        }
        nav{
            height: rem(160);
            background: #fff;
            display: flex;
            text-align: center;
            .nav-item{
                height: 100%;
                flex: 1;
                font-size: rem(24);
                color: #666;
                i{
                    display: inline-block;
                    width: rem(54);
                    height: rem(54);
                    margin: rem(34) 0 rem(8);
                }
                &:nth-child(1){
                    i{
                        background: url('../../assets/icon/xianhuo.png') no-repeat center center;
                        background-size: rem(44) rem(48);
                    }
                }
                &:nth-child(2){
                    i{
                        background: url('../../assets/icon/ziyuandan.png') no-repeat center center;
                        background-size: rem(44) rem(42);
                    }
                }
                &:nth-child(3){
                    i{
                        background: url('../../assets/icon/caigoudan.png') no-repeat center center;
                        background-size: rem(52) rem(42);
                    }
                }
                &:nth-child(4){
                    i{
                        background: url('../../assets/icon/wuliu.png') no-repeat center center;
                        background-size: rem(54) rem(42);
                    }
                }
            }
        }
        .slider-banner{
            height: rem(366);
            background: #e9e9e9;
            padding-top: rem(20);
            box-sizing: border-box;
        }
        .msg-wrapper{
            background: #e9e9e9;
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
                    border-top: 1px solid #ccc;
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
</style>


