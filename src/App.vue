<template>
  <div id="app">
    <m-header></m-header>
    <home></home>
    <m-footer></m-footer>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Home from './components/home/home.vue'
  import MHeader from './components/header/header.vue'
  import MFooter from './components/footer/footer.vue'
  export default {
    components: {
      Home,
      MHeader,
      MFooter
    }
  }
</script>

<style>

</style>
