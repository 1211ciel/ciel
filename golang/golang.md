[home](https://github.com/1211ciel/ciel/blob/main/README.md)

## 资讯
- [ycombinator](https://news.ycombinator.com/) (gozero大佬推荐的,没事可以逛逛,风格简洁,可以学写一个😄)
- [golang技术栈](https://www.bookstack.cn/read/topgoer/efbecba7753baa7e.md),[golang技术栈2](http://www.topgoer.com/),[golang技术栈3](https://xie.infoq.cn/article/6dea371ed64d1d764a5d5a57b#%E6%8E%A8%E8%8D%90%E4%B9%A6%E7%B1%8D)
## 通知死循环退出
```
quitCh := make(chan struct{})
go func() {
    for {
        select {
        case <-quitCh:
            return
        // other cases to handle what you need to do
        }
    }
}()

// Once you're done
close(quitCh) // goroutine exits
```
