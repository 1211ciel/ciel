[home](https://github.com/1211ciel/ciel/blob/main/README.md)

## 常用功能
撤销add的内容
```
git reset --mixed这样文件退出暂存区，但是修改保留
```
## 删除分支
```
// delete branch locally
git branch -D localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

## 查看配置 
- 查看系统config  git config --system --list
- 查看当前用户（global）配置 git config --global  --list
- 查看当前仓库配置信息  git config --local  --list![image](https://user-images.githubusercontent.com/50581436/119972865-520e0a80-bfe5-11eb-9b3f-cd2b809e81cc.png)

## 修改远程提交仓库
```
git config remote.origin.url https://github.com/1211ciel/web-study.git
```
