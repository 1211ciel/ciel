<template>
  <div>
    <div class="page-header">
      <h1>Git <small>常用功能</small></h1>
    </div>
    <div class="row">
      <div class="col-sm-6 blog-main">
        <div class="blog-post">
          <h2 class="blog-post-title" id="常用命令">常用命令</h2>
          <p class="blog-post-meta"> June 13,6 2021 By ciel</p>
          <h3 id="撤销add">撤销add</h3>
          <pre><code>git reset --mixed这样文件退出暂存区，但是修改保留</code></pre>
          <h3 id="删除分支">删除分支</h3>
          <pre><code>
// delete branch locally
git branch -D localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
            </code> </pre>
          <h3 id="配置">配置</h3>
          <ul>
            <li>查看系统配置 <code>config git config --system --list</code></li>
            <li>查看当前用户配置 <code>查看当前用户（global）配置 git config --global --list</code></li>
            <li>查看当前仓库配置信息 <code> git config --local --list</code></li>
            <li>修改远程提交仓库<code>git config remote.origin.url https://github.com/1211ciel/web-study.git</code></li>
          </ul>
        </div>
      </div>
      <div class="col-sm-3 ">
<!--        <div class="sidebar-module sidebar-module-inset">-->
<!--          <h4>About</h4>-->
<!--          <p>这是关于</p>-->
<!--        </div>-->
        <div class="sidebar-module">
          <h4>导航</h4>
          <ol class="list-unstyled">
            <li><a href="#常用命令">常用命令</a></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "git"
}
</script>

<style scoped>

</style>