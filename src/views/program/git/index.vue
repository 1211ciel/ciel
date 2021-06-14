<template>
  <div>
    <div class="page-header">
      <h1>Git <small>常用功能</small></h1>
    </div>
    <div class="row">
      <div class="col-sm-8 ">
        <h2>常用命令</h2>
        <p>June 13,6 2021 By ciel</p>
        <dl>
          <dt>撤销add</dt>
          <dd>git reset --mixed这样文件退出暂存区，但是修改保留</dd>
          <dt>删除分支</dt>
          <dd><code>git branch -D localBranchName</code></dd>
          <dd><code>git push origin --delete remoteBranchName</code></dd>
          <dt>配置</dt>
          <dd>查看系统配置 <code>config git config --system --list</code></dd>
          <dd>查看当前用户配置 <code>查看当前用户（global）配置 git config --global --list</code></dd>
          <dd>查看当前仓库配置信息 <code> git config --local --list</code></dd>
          <dd>修改远程提交仓库<code>git config remote.origin.url https://github.com/1211ciel/web-study.git</code></dd>
        </dl>
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