<template>
  <transition name="slider">
    <div class="resources-list">
      <Header :options="headerOptions"/>
      <div class="resources-list-wrapper">
        <div class="search-box">
          <i></i>
          <input type="text" placeholder="请输入您要搜索的关键字"/>
        </div>
        <div class="operation">
          <div>综合</div>
          <div>时间</div>
          <div @click="showCityPicker">所在地</div>
        </div>
        <div class="list-wrapper">
          <div class="list-scroll-wrapper">
            <div>
              <router-link tag="div" to="/resources">
                <div class="list-item">
                  <img src="" alt="">
                  <section>
                    <h4>公司名称</h4>
                    <h4>所在地<span>华北-北京</span></h4>
                    <p>一般情况，两个相邻的块级框，它们之间的垂直方向的外边距会发生叠加。 如果这两个相邻的块框不属于同一个BFC就不会叠加！ </p>
                  </section>
                </div>
              </router-link>
              <div class="list-item">
                <img src="" alt="">
                <section>
                  <h4>公司名称</h4>
                  <h4>所在地<span>华北-北京</span></h4>
                  <p>一般情况，两个相邻的块级框，它们之间的垂直方向的外边距会发生叠加。 如果这两个相邻的块框不属于同一个BFC就不会叠加！ </p>
                </section>
              </div>
              <div class="list-item">
                <img src="" alt="">
                <section>
                  <h4>公司名称</h4>
                  <h4>所在地<span>华北-北京</span></h4>
                  <p>一般情况，两个相邻的块级框，它们之间的垂直方向的外边距会发生叠加。 如果这两个相邻的块框不属于同一个BFC就不会叠加！ </p>
                </section>
              </div>
              <div class="list-item">
                <img src="" alt="">
                <section>
                  <h4>公司名称</h4>
                  <h4>所在地<span>华北-北京</span></h4>
                  <p>一般情况，两个相邻的块级框，它们之间的垂直方向的外边距会发生叠加。 如果这两个相邻的块框不属于同一个BFC就不会叠加！ </p>
                </section>
              </div>
              <div class="list-item">
                <img src="" alt="">
                <section>
                  <h4>公司名称</h4>
                  <h4>所在地<span>华北-北京</span></h4>
                  <p>一般情况，两个相邻的块级框，它们之间的垂直方向的外边距会发生叠加。 如果这两个相邻的块框不属于同一个BFC就不会叠加！ </p>
                </section>
              </div>
              <div class="list-item">
                <img src="" alt="">
                <section>
                  <h4>公司名称</h4>
                  <h4>所在地<span>华北-北京</span></h4>
                  <p>一般情况，两个相邻的块级框，它们之间的垂直方向的外边距会发生叠加。 如果这两个相邻的块框不属于同一个BFC就不会叠加！ </p>
                </section>
              </div>
              <div class="list-item">
                <img src="" alt="">
                <section>
                  <h4>公司名称</h4>
                  <h4>所在地<span>华北-北京</span></h4>
                  <p>一般情况，两个相邻的块级框，它们之间的垂直方向的外边距会发生叠加。 如果这两个相邻的块框不属于同一个BFC就不会叠加！ </p>
                </section>
              </div>
              <div class="list-item">
                <img src="" alt="">
                <section>
                  <h4>公司名称</h4>
                  <h4>所在地<span>华北-北京</span></h4>
                  <p>一般情况，两个相邻的块级框，它们之间的垂直方向的外边距会发生叠加。 如果这两个相邻的块框不属于同一个BFC就不会叠加！ </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Header from "../../components/header";
import { provinceList, cityList, areaList } from "../../common/js/data/area";

const cityData = provinceList;
cityData.forEach(province => {
  province.children = cityList[province.value];
  province.children.forEach(city => {
    city.children = areaList[city.value];
  });
});
export default {
  mounted() {
    this.cityPicker = this.$createCascadePicker({
      title: "请选择区域",
      data: cityData,
    }); 
  },
  data() {
    return {
      isCollection: false,
      headerOptions: {
        isBackShow: true,
        title: "资源单",
        clickHandle: () => {
          alert(4156156);
        },
        icon: "more",
        background: "#fff"
      }
    };
  },
  methods: {
    showCityPicker() {
      this.cityPicker.show();
      let dom = this.cityPicker.$el.querySelector('.cube-picker-panel');
      setTimeout(()=>{
        
      }, 0)
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
.resources-list {
  font-size: rem(26);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  .resources-list-wrapper {
    flex: 1;
    box-sizing: border-box;
    background: #ffffff;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    .search-box,
    .operation {
      height: rem(80);
      // border-bottom: 1px solid #ccc;
      @include border-1px('b', #ccc);
      box-sizing: border-box;
      padding: rem(12) rem(20);
      position: relative;
      i {
        display: block;
        position: absolute;
        width: rem(32);
        height: rem(32);
        background: url(../../assets/icon/search.png);
        background-size: rem(32) rem(32);
        left: rem(200);
        top: rem(22);
      }
      input {
        outline: none;
        width: 100%;
        height: 100%;
        background: #e9e9e9;
        text-indent: rem(228);
        font-size: rem(22);
      }
    }
    .operation {
      padding: 0;
      display: flex;
      div {
        flex: 1;
        text-align: center;
        line-height: rem(80);
      }
    }
    .list-wrapper {
      flex: 1;
      position: relative;
      .list-scroll-wrapper {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        overflow-y: scroll;
        .list-item {
          height: rem(220);
          padding: rem(20);
          // border-bottom: 1px solid #ccc;
          @include border-1px('b', #ccc);
          display: flex;
          box-sizing: border-box;
          img {
            display: block;
            width: rem(180);
            height: rem(180);
          }
          section {
            flex: 1;
            padding-left: rem(30);
            h4 {
              line-height: rem(38);
              font-size: rem(26);
              span {
                margin-left: rem(16);
              }
            }
            p {
              font-size: rem(24);
              line-height: rem(34);
              margin-top: rem(30);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
.cube-picker-panel{
  background: #f00 !important;
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


