<template>
  <div class="container">
    <header class="page-header">
      <h1>Life <small>This's life</small></h1>
      <n-space style="margin-bottom: 12px;">
        <n-switch v-model:value="showRail"/>
        展示轨道
        <n-switch v-model:value="showBackground"/>
        展示背景
      </n-space>
      <n-anchor :show-rail="showRail" :show-background="showBackground">
        <n-anchor-link title="演示" href="#演示">
          <n-anchor-link title="基础用法" href="#basic"/>
          <n-anchor-link title="忽略间隔" href="#ignore-gap"/>
          <n-anchor-link title="固定" href="#affix"/>
          <n-anchor-link title="滚动到" href="#scrollto"/>
        </n-anchor-link>
        <n-anchor-link title="Props" href="#Props"/>
      </n-anchor>
    </header>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "index",
  setup() {
    return {
      showRail: ref(true),
      showBackground: ref(true)
    }
  }
}
</script>

<style scoped>

</style>