<template>
  <div class="container">
    <header class="page-header">
      <h1>English <small>study english</small></h1>
    </header>
    <main class="row">
      <div class="col-sm-6">
        <h2>duolinguo</h2>
        <table class="table table-hover">
          <thead>
          <tr>
            <td>Date</td>
            <td>Score</td>
            <td>Countdown</td>
            <td>desc</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in nodeList" :class="item.cls">
            <td v-text="item.date"></td>
            <td v-text="item.score"></td>
            <td v-text="item.countDown"></td>
            <td v-text="item.desc"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      nodeList: [
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---", cls: "active"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---", cls: "warning"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---", cls: "info"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
        {date: "2021/6/13", score: 630, countDown: 850, desc: "---"},
      ]
    }
  }
}
</script>

<style scoped>

</style>