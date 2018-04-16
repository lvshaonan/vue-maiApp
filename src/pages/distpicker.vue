<template>
  <section class="data-picker">
    <div class="wrapper">
      <div class="operation">
        <span>取消</span>
        <i></i>
        <span>确定</span>
      </div>
      <div class="picker-content">
        <section>
          <minirefresh id="provinces"
                        ref="provinces"
                        :options="provincesOptions"
                        >
            <div slot="content">
              <ul>
                <li v-for="item in city" :key="item.id">{{item.name}}</li>
              </ul>
            </div>
          </minirefresh>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
import MiniRefresh from "../components/minirefresh";
import citys from "../api/city";
export default {
  data() {
    return {
      city: citys,
      provincesOptions: {
        container: "#provinces",
        down: {
          isLock: true,
          isAuto: false
        },
        up: {
          isLock: true,
          isAuto: false,
          loadFull: {
            isEnable: false
          },
          onScroll: () => {
            
          }
        }
      }
    };
  },
  mounted() {
    
  },
  components: {
    minirefresh: MiniRefresh
  }
};
</script>

<style lang="scss" scoped>
@import "../common/styles/mixin.scss";
.data-picker {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.6);
  font-size: rem(24);
  .wrapper {
    height: rem(500);
    width: 100%;
    background: #fff;
    bottom: 0;
    position: absolute;
    .operation {
      height: rem(80);
      line-height: rem(80);
      text-align: center;
      border-bottom: 1px solid #ccc;
      display: flex;
      box-sizing: border-box;
      span {
        width: rem(120);
      }
      i {
        flex: 1;
      }
    }
    .picker-content {
      height: rem(420);
      display: flex;
      position: relative;
      overflow: hidden;
      section {
        flex: 1;
        &:nth-child(2) {
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        li {
          height: rem(60);
          line-height: rem(60);
          text-align: center;
        }
      }
    }
  }
}
</style>


