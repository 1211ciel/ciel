package main

import (
	"github.com/1211ciel/ciel.git/views"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.LoadHTMLFiles("views/**/*")
	views.InitRouter(r)
	r.Run(":12011")
}
