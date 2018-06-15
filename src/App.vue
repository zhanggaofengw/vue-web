<template>
  <div id="app">
    <m-header></m-header>
    <left-menu></left-menu>
    <m-footer></m-footer>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/header/header.vue'
  import MFooter from './components/footer/footer.vue'
  import LeftMenu from './components/left-menu/left-menu.vue'
  import {addOrUpdate} from './common/js/server'
  export default {
    data() {
      return {
        info: {}
      }
    },
    components: {
      MHeader,
      MFooter,
      LeftMenu
    },
    created() {
      this.info.cid = returnCitySN.cid
      this.info.ip = returnCitySN.cip
      let index = returnCitySN.cname.indexOf('省')
      this.info.cname = returnCitySN.cname.slice(index + 1)
      this.getLngAndLat(returnCitySN.cname)
    },
    methods: {
      getLngAndLat(str) {
        let myGeo = new AMap.Geocoder()
        let self = this
        //地理编码,返回地理编码结果
        myGeo.getLocation(str, function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            //地址解析成功
            let geocode = result.geocodes
            self.info.lng = geocode[0].location.getLng()
            self.info.lat = geocode[0].location.getLat()
            self.addOrUpdateVisit()
          }
          else {
            //地址解析失败
            //$pointBox.innerHTML = "查无此地址"
          }
        })
      },
      addOrUpdateVisit() {
        addOrUpdate('/visit/add', this.info, this).then((response) => {
          if (response) {

          }
        })
      }
    }
  }
</script>

<style>

</style>
