<template>
  <div class="goods">
      <header>
        <div class="left" @click="back">
            <i class="back"></i>
        </div>
        <div class="right">
            <i class="more"></i>
        </div>
        <div class="center">
            <div class="tab">
                <span class="tab-item" @click="tab(1)" :class="{active: isActive==1}">商品</span>
                <span class="tab-item" @click="tab(2)" :class="{active: isActive==2}">详情</span>
            </div>
            <i></i>
        </div>
      </header>
      <div class="goods-content">
          <swiper :options="swiperOptions" ref="mySwiper">
              <swiper-slide>
                  <div class="goods-wrapper">
                      <div class="goods-scroll">
                          <div class="goods-scroll-wrapper">
                              <div>
                                <div class="banner">
                                    <Slider :options="bannerSwiperOptions" :items="items"/>
                                </div>
                                <section>
                                    <div class="title">
                                        <div class="left">
                                            <h3>
                                                <i></i>中海沥青股份有限公司
                                            </h3>
                                            <h3>中海油70#</h3>
                                        </div>
                                        <div class="right">
                                            <i></i>分享
                                        </div>
                                    </div>
                                    <div class="price">¥<b>2345</b>.14</div>
                                </section>
                                <section class="nav">
                                    <div class="nav-item">
                                        <i></i>物流
                                    </div>
                                    <div class="nav-item">
                                        <i></i>金融
                                    </div>
                                    <div class="nav-item">
                                        <i></i>委托找货
                                    </div>
                                    <div class="nav-item">
                                        <i></i>加工
                                    </div>
                                </section>
                                <section>
                                    <ul class="goods-attribute">
                                        <li>
                                            <span>库存量</span>500吨
                                        </li>
                                        <li>
                                            <span>出库地址</span>华北地区-北京市
                                        </li>
                                        <li>
                                            <span>备货周期</span>5天
                                        </li>
                                        <li>
                                            <span>最小起订量</span>36吨
                                        </li>
                                    </ul>
                                </section>
                                <section>
                                    <div class="store-title">
                                        <div class="logo"></div>
                                        <div class="store-name">
                                            <h4>旗舰店</h4>
                                            <h5>店铺介绍</h5>
                                        </div>
                                    </div>
                                    <div class="store-num">
                                        <div class="store-num-item">
                                            <span>222</span>
                                            收藏人数
                                        </div>
                                        <div class="store-num-item">
                                            <span>3000吨</span>
                                            销售数量
                                        </div>
                                        <div class="store-num-item">
                                            <span>56</span>
                                            全部商品
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <span>
                                            <i></i>
                                            联系卖家客服
                                        </span>
                                        <span>
                                            <i></i>
                                            进入店铺
                                        </span>
                                    </div>
                                </section>
                                <section>
                                    <h2>为你推荐</h2>
                                    <div class="recommend-swiper">
                                        <swiper :options="bannerSwiperOptions">
                                            <swiper-slide>
                                                <ul class="recommend-swiper-item">
                                                    <li>
                                                        <img src="" alt="">
                                                        <h3>中海油</h3>
                                                        <p>出货地：华北地区</p>
                                                        <span>¥<b>2345</b>.14</span>
                                                    </li>
                                                    <li>
                                                        <img src="" alt="">
                                                        <h3>中海油</h3>
                                                        <p>出货地：华北地区</p>
                                                        <span>¥<b>2345</b>.14</span>
                                                    </li>
                                                    <li>
                                                        <img src="" alt="">
                                                        <h3>中海油</h3>
                                                        <p>出货地：华北地区</p>
                                                        <span>¥<b>2345</b>.14</span>
                                                    </li>
                                                </ul>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <ul class="recommend-swiper-item">
                                                    <li>
                                                        <img src="" alt="">
                                                        <h3>中海油</h3>
                                                        <p>出货地：西南地区</p>
                                                        <span>¥<b>2345</b>.14</span>
                                                    </li>
                                                    <li>
                                                        <img src="" alt="">
                                                        <h3>中海油</h3>
                                                        <p>出货地：西南地区</p>
                                                        <span>¥<b>2345</b>.14</span>
                                                    </li>
                                                    <li>
                                                        <img src="" alt="">
                                                        <h3>中海油</h3>
                                                        <p>出货地：西南地区</p>
                                                        <span>¥<b>2345</b>.14</span>
                                                    </li>
                                                </ul>
                                            </swiper-slide>
                                            <div class="swiper-pagination"  slot="pagination"></div>
                                        </swiper>
                                    </div>
                                </section>
                                <div class="to-detail" @click="toDetail">
                                    <span></span>
                                    查看图文详情
                                    <span></span>
                                </div>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Slider from '../../components/slider'
export default {
  data(){
      return{
          isActive: 1,
          index: 0,
          swiperOptions: {
            initialSlide: 0,
            notNextTick: true, 
            onSlideChangeEnd: swiper => { 
                this.page = swiper.realIndex+1; 
                this.index = swiper.realIndex; 
            }
         },
         bannerSwiperOptions: {
            autoPlay: true,
            loop: true,
            pagination : '.swiper-pagination'
         },
         items: [
            {
                href: '',
                src: require('../../assets/banner.jpg')
            }
        ]
      }
  },
  mounted() {
      let num = 456.78;
      console.log((num % 1).toFixed(2).substring(1))
  },
  computed: {
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }
  },
  methods: {
      tab(n){
          this.isActive = n;
          if(n == 1){
              this.swiper.slideTo(0);
          }else{
              this.swiper.slideTo(1);
          }
      },
      back(){
          this.$router.back();
      },
      toDetail(){
          this.swiper.slideTo(1);
      }
  },
  watch:{
    index(){
      if(this.index){
        this.isActive = 2;
      }else{
        this.isActive = 1;
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Slider
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/styles/mixin.scss";
@import "swiper/dist/css/swiper.css";
    .goods{
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
        header{
            height: rem(88);
            box-sizing: border-box;
            background: #fff;
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
                    background: url(../../assets/icon/back.png) no-repeat center center;
                    background-size: rem(18) rem(32);
                }
                .more{
                    background: url(../../assets/icon/more.png) no-repeat center center;
                    background-size: rem(50) rem(12);
                }
            }
            .right{
                float: right;
            }
            .center{
                margin: 0 rem(90);
                height: 100%;
                position: relative;
                .tab{
                    width: 60%;
                    margin: 0 auto;
                    height: 100%;
                    .tab-item{
                        height: 100%;
                        display: inline-block;
                        padding: 0 rem(20);
                        margin: 0 rem(30);
                        box-sizing: border-box;
                        border-bottom: 4px solid transparent;
                    }
                    .active{
                        border-color: #000000;
                    }
                }
                i{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: rem(88);
                    height: 100%;
                    background: url('../../assets/icon/danju.png') no-repeat center center;
                    background-size: rem(32) rem(34);
                } 
            }
        }
        .goods-content{
            flex: 1;
            .swiper-container{
                height: 100%;
                .goods-wrapper{
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    .goods-scroll{
                        flex: 1;
                        position: relative;
                        .goods-scroll-wrapper{
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            width: 100%;
                            overflow-y: scroll;
                        }
                        section:not(:nth-child(1)){
                            font-size: rem(24);
                            padding: rem(20);
                            box-sizing: border-box;
                            margin-bottom: rem(20);
                            background: #ffffff;
                            .title{
                                height: rem(80);
                                display: flex;
                                .left{
                                    flex: 8;
                                    // border-right: 1px solid #ccc;
                                    @include border-1px('r', #ccc);
                                    h3:nth-child(1){
                                        height: rem(34);
                                        margin-bottom: rem(15);
                                        font-size: rem(30);
                                        line-height: rem(34);
                                        i{
                                            float: left;
                                            width: rem(56);
                                            height: rem(34);
                                            background: url('../../assets/icon/ziying.png') no-repeat;
                                            background-size: rem(56) rem(32);
                                            margin-right: rem(10);
                                        }
                                    }
                                    h3:nth-child(2){
                                        height: rem(30);
                                        font-size: rem(28);
                                    }
                                }
                                .right{
                                    flex: 2;
                                    text-align: center;
                                    font-size: rem(20);
                                    i{
                                        display: block;
                                        width: rem(34);
                                        height: rem(34);
                                        margin: rem(6) auto rem(10);
                                        background: url('../../assets/icon/share.png') no-repeat;
                                        background-size: rem(34) rem(34);
                                    }

                                }
                            }
                            .price{
                                height: rem(100);
                                font-size: rem(22);
                                color: #fd3f04;
                                line-height: rem(100);
                                b{
                                    font-size: rem(40);
                                    margin-left: rem(6);
                                }
                            }
                            &.nav{
                                display: flex;
                                height: rem(120);
                                text-align: center;
                                padding-top: rem(20);
                                .nav-item{
                                    flex: 1;
                                    i{
                                        display: block;
                                        margin: 0 auto rem(10);
                                        width: rem(50);
                                        height: rem(43);
                                    }
                                    &:nth-child(1){
                                        i{
                                            background: url('../../assets/icon/wuliu1.png') no-repeat center top;
                                            background-size: rem(38) rem(33);
                                        }
                                    }
                                    &:nth-child(2){
                                        i{
                                            background: url('../../assets/icon/jinrong.png') no-repeat center top;
                                            background-size: rem(49) rem(34);
                                        }
                                    }
                                    &:nth-child(3){
                                        i{
                                            background: url('../../assets/icon/weituo.png') no-repeat center top;
                                            background-size: rem(44) rem(38);
                                        }
                                    }
                                    &:nth-child(4){
                                        i{
                                            background: url('../../assets/icon/jiagong.png') no-repeat center top;
                                            background-size: rem(43) rem(43);
                                        }
                                    }
                                }
                            }
                            .goods-attribute{
                                li{
                                    height: rem(54);
                                    line-height: rem(54);
                                    span{
                                        display: inline-block;
                                        width: rem(146);
                                        height: 100%;
                                    }
                                }
                            }
                            .store-title{
                                height: rem(54);
                                .logo{
                                    width: rem(146);
                                    height: 100%;
                                    // border: 1px solid #ccc;
                                    @include border-1px('', #ccc);
                                    box-sizing: border-box;
                                    float: left;
                                    margin-right: rem(20);
                                }
                                .store-name{
                                    height: 100%;
                                    h4{
                                        height: rem(30);
                                        font-size: rem(22);
                                    }
                                    h5{
                                        height: rem(24);
                                        font-size: rem(20);
                                        color: #666;
                                    }
                                }
                            }
                            .store-num{
                                height: rem(66);
                                display: flex;
                                margin: rem(30) 0 rem(20);
                                .store-num-item{
                                    flex: 1;
                                    color: #666;
                                    &:nth-child(2){
                                        // border-left: 1px solid #ccc;
                                        @include border-1px('l', #ccc);
                                        // border-right: 1px solid #ccc;
                                        @include border-1px('r', #ccc);
                                    }
                                    text-align: center;
                                    span{
                                        display: block;
                                        margin-top: rem(4);
                                        margin-bottom: rem(12);
                                        color: #000000;
                                    } 
                                }
                            }
                            .buttons{
                                height: rem(60);
                                span{
                                    width: rem(336);
                                    height: 100%;
                                    box-sizing: border-box;
                                    // border: 1px solid #ccc;
                                    @include border-1px('', #ccc);
                                    text-align: center;
                                    line-height: rem(60);
                                    border-radius: rem(4);
                                    i{
                                        display: inline-block;
                                        width: rem(30);
                                        height: rem(30);
                                        background-size: rem(30) rem(30);
                                        vertical-align: middle;
                                    }
                                    &:nth-child(1){
                                        float: left;
                                        i{
                                            background: url('../../assets/icon/kefu.png') no-repeat;
                                        }
                                    }
                                    &:nth-child(2){
                                        float: right;
                                        i{
                                            background: url('../../assets/icon/dianpu.png') no-repeat;
                                        }
                                    }
                                }
                            }
                            h2{
                                height: rem(50);
                                text-align: center;
                                line-height: rem(50);
                                font-size: rem(30);
                                color: #fd3f04;
                            }
                            .recommend-swiper{
                                .recommend-swiper-item{
                                    padding: rem(18);
                                    height: rem(396);
                                    box-sizing: border-box;
                                    display: flex;
                                    justify-content: space-between;
                                    font-size: rem(24);
                                    li{
                                        width: rem(200);
                                        height: 100%;
                                        img{
                                            display: block;
                                            width: rem(200);
                                            height: rem(200);
                                            // border: 1px solid #ccc;
                                            @include border-1px('', #ccc);
                                            box-sizing: border-box;
                                            margin-bottom: rem(12);
                                        }
                                        h3, p{
                                            height: rem(32);
                                            line-height: rem(32);
                                            overflow: hidden;
                                            text-overflow:ellipsis;
                                            white-space: nowrap;
                                        }
                                        span{
                                            display: block;
                                            font-size: rem(20);
                                            margin-top: rem(16);
                                            b{
                                                font-size: rem(26);
                                                margin-left: rem(4);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        section:nth-child(6){
                            margin-bottom: 0;
                        }
                        .to-detail{
                            height: rem(80);
                            line-height: rem(80);
                            text-align: center;
                            font-size: rem(28);
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            span{
                                height: 0;
                                flex: 0.3;
                                // border: 1px solid #999;
                                @include border-1px('', #999);
                            }
                        }
                    }
                    footer{
                        height: rem(90);
                        box-sizing: border-box;
                        // border-top: 1px solid #e9e9e9;
                        @include border-1px('t', #e9e9e9);
                        background: #ffffff;
                        display: flex;
                        text-align: center;
                        line-height: rem(90);
                        font-size: rem(24);
                        .service, .store, .collection{
                            line-height: rem(20);
                            flex: 1;
                            // border-right: 1px solid #e9e9e9;
                            @include border-1px('r', #e9e9e9);
                            i{
                                display: block;
                                width: rem(30);
                                height: rem(34);
                                margin: rem(14) auto rem(10);
                                background-size: rem(30) rem(34) !important;
                            } 
                        }
                        .service{
                            i{
                                background: url('../../assets/icon/server.png') no-repeat;
                            }
                        }
                        .store{
                            i{
                                background: url('../../assets/icon/store.png') no-repeat;
                            }
                        }
                        .collection{
                            i{
                                background: url('../../assets/icon/start.png') no-repeat;
                            }
                        }
                        :nth-child(4){
                            flex: 2.2;
                            // border-right: 1px solid #e9e9e9;
                            @include border-1px('r', #e9e9e9);
                            color: #fd3f04;
                        }
                        :nth-child(5){
                            flex: 2;
                            background: #fd3f04;
                            color: #ffffff;
                        }
                    }
                }
            }
        }
    }
</style>


