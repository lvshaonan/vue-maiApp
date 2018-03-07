<template>
  <div id="app">
    <div class="page-wrapper">
      <router-view/>
    </div>
    <Tab/>
  </div>
</template>

<script>
import Tab from './components/tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style lang="scss" scoped>
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
    .page-wrapper{
      flex: 1;
    }
  }
</style>
