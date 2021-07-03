package views

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func InitRouter(r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "Home.html", nil)
	})
	r.GET("/history", func(c *gin.Context) {
		c.HTML(http.StatusOK,"history/h/index.html",nil)
	})
}
