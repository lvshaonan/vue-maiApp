<template lang="html">
    <section>
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="item in items" :key="item.src">
              <router-link :to="{ path: item.href }">
                <img :src="item.src"/>
              </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
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
              autoplay: true,
              loop: true,
              pagination: {
                el: '.swiper-pagination'
              },
              notNextTick: true
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
@import "swiper/dist/css/swiper.css";
.swiper-container{
    font-size: 0;
    img{
        width: 100%;
    }
}
</style>
