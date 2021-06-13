<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <li>
            <router-link to="/program/community">社区,官网</router-link>
          </li>
          <li>
            <router-link to="/git">git</router-link>
          </li>
        </ul>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "go"
}
</script>

<style scoped>

</style>