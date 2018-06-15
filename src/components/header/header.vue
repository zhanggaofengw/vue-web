<template>
  <div>
    <div class="header clearFloat">
      <header class="text">

      </header>
      <div class="fr header-right">
        <router-link tag="a" to="" class="pr10">
          登录
        </router-link>
        <router-link tag="a" to="">
          注册
        </router-link>
        <!--<a href="http://zhanggaofeng.com/music" target="_blank">vue-music</a>-->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {

    },
    computed: {

    }
  }
</script>

<style>
  .text {
    float: left;
    height: 60px;
    line-height: 60px;
    padding-left: 60px;
    font-size: 16px;
  }

  .header {
    border-bottom: 1px solid #ccc;
  }

  .header-right {
    line-height: 60px;
    font-size: 12px;
    padding-right: 20px;
  }

  .header-right a {
    font-size: 14px;
  }

  /*@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {*/
  /*.text {*/
  /*background-image: linear-gradient(to right, #57faff, #35bdc1, #fb00ff, #b5242f, #fb00ff, #35bdc1, #57faff, #35bdc1, #fb00ff, #b5242f, #fb00ff, #35bdc1, #57faff);*/
  /*-webkit-background-clip: text;*/
  /*-webkit-background-size: 200% 100%;*/
  /*-webkit-text-fill-color: transparent;*/
  /*animation: bg 5s infinite linear*/
  /*}*/
  /*}*/

  /*@keyframes bg {*/
  /*0% {*/
  /*background-position: 0 0;*/
  /*}*/
  /*100% {*/
  /*background-position: -100% 0;*/
  /*}*/
  /*}*/
</style>
