[go](https://github.com/1211ciel/ciel/blob/main/golang/README.md)
```
Windows 下编译 Mac 和 Linux 64位可执行程序

- go env 查看go配置
```
SET CGO_ENABLED=0
SET GOOS=darwin
SET GOARCH=amd64
go build main.go

SET CGO_ENABLED=0
SET GOOS=linux
SET GOARCH=amd64
go build main.go

SET CGO_ENABLED=0
SET GOOS=windows
SET GOARCH=amd64
go build main.go
```
Mac 下编译 Linux 和 Windows 64位可执行程序
```
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go
```
Linux 下编译 Mac 和 Windows 64位可执行程序
```
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go
```
```
