<template lang="html">
    <section>
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="(item, index) in items" :key="index">
                <div class="msg-img-item">
                    <img :src="item.src" alt="">
                </div>
            </swiper-slide>
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
                slidesPerView: 3.2,
                spaceBetween: 30,
                freeMode: true
            }
          }
        },
        items: {
          type: Array,
          default(){
            return [
              {href: '', src: require('../assets/slider_banner.jpg')},
              {href: '', src: require('../assets/slider_banner.jpg')}
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
    .msg-img-item{
        float: left;
        width: rem(218);
        height: rem(218);
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
