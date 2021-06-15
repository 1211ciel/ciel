<template>
  <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <a href="" class="navbar-brand" title="hello">Ciel's note</a>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/program/community">Program</router-link>
          </li>
          <li>
            <router-link to="/web">Web</router-link>
          </li>
          <li>
            <router-link to="/english">English</router-link>
          </li>

          <li>
            <router-link to="/financial">Financial</router-link>
          </li>
          <li>
            <router-link to="/history/category">History</router-link>
          </li>
          <li>
            <router-link to="/life">Life</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>
<style>
@import "style/docs.css";
@import "style/bootstrap.css";
@import "style/dashboard.css";
@import "style/navbar-fixed-top.css";
@import "style/blog.css";
</style>

