<template>
  <div class="row">
    <div class="col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li> <router-link to="/history/category">分类索引</router-link> </li>
        <li><router-link to="/stoneAge">石器时代</router-link></li>
        <li><router-link to="/riseOfCivilization">文明的兴起</router-link></li>
        <li><router-link to="/middleAges">中世纪</router-link></li>
        <li><router-link to="/modernTimes">近代</router-link></li>
        <li><router-link to="/twentiethCentury">二十世纪</router-link></li>
      </ul>
    </div>
    <div class="col-md-10 col-md-offset-2 main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "history"
}
</script>

<style scoped>

</style>