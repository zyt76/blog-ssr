<template>
  <div id="app">
    <z-header></z-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <z-tool></z-tool>
  </div>
</template>

<script>
import ZHeader from './components/ZHeader.vue'
import ZTool from './components/ZTool.vue'

export default {
  components: {
    ZHeader,
    ZTool
  }
}
</script>

<style lang="stylus">
</style>
