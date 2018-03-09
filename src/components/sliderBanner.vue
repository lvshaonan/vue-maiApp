<template lang="html">
    <section>
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.number">
                <div class="slider-banner-item">
                    <h4>{{item.title}}</h4>
                    <div class="details">
                        <div class="detail-left">
                            <span>发布者</span>
                            <span>{{item.user}}</span>
                        </div>
                        <div class="detail-right">
                            <span>浏览量</span>
                            <span>{{item.number}}</span>
                        </div>
                    </div>
                    <img class="slider-banner-img" :src="item.imgSrc" alt="">
                </div>
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
      props: {
        options: {
          type: Object,
          default(){
            return{
                slidesPerView: 2.1,
                spaceBetween: 30,
                freeMode: true
            }
          }
        },
        items: {
          type: Array,
          default(){
            return [
              {href: '', src: ''}
            ]
          }
        }
      },
      data(){
        return{
        }
      },
      components: {
        swiper,
        swiperSlide
      }
    }
</script>

<style lang="scss">
@import "../common/styles/mixin.scss";
@import "swiper/dist/css/swiper.css";
    .slider-banner-item{
        float: left;
        width: rem(350);
        height: rem(320);
        padding: rem(20);
        border: 1px solid #ccc;
        box-sizing: border-box;
        background: #ffffff;
        // margin-right: rem(20);
        h4{
            line-height: rem(26);
            font-size: rem(26);
        }
        .details{
            width: 100%;
            font-size: rem(20);
            height: rem(20);
            line-height: rem(20);
            display: flex;
            margin: rem(18) 0;
            .detail-left{
                flex: 2;
            }
            .detail-right{
                flex: 1;
            }
        }
        .slider-banner-img{
            width: rem(312);
            height: rem(198);
            display: block;
        }
    }
</style>
