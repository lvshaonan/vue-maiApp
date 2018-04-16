<template>
  <div class="vuexdemo">
    <div>数量：{{count}}</div>
    <button @click="add">增加</button>
    <button @click="asyncAdd">延迟</button>
    <div @click="_getSingerList">获取</div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import {getSingerList} from '../api/singer'
export default {
  data(){
    return{
      
    }
  },
  mounted(){
    // setInterval(()=>{
    //   let i = this.count
    //   i++
    //   this.setCount(i)
    // }, 1000)
  },
  methods: {
    add(){
      this.setCount(20)
    },
    asyncAdd(){
      this.asyncCount(100)
      let arr = this.singer
      console.log(arr[0].Fsinger_name)
    },
    ...mapMutations({
      setCount: 'ADD',
      setSinger: 'SET_SINGER'
    }),
    ...mapActions({
      asyncCount: 'incrementAction'
    }),
    _getSingerList() {
      getSingerList().then((res) => {
        if (res.code === 0) {
          this.singers = res.data.list
          this.setSinger(this.singers)
        }
      })
    }
  },
  computed: {
    // count(){
    //   return this.$store.state.count
    // }
    ...mapGetters(['count', 'singer'])
  }
}
</script>
<style lang="scss" scoped>
@import "../common/styles/mixin.scss";
  .vuexdemo{
    font-size: rem(80);
  }
</style>


