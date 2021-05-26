

---

# CSS 基础
层叠样式表（Cascading Style Sheet，简称：CSS）是为网页添加样式的代码。本节将介绍 CSS 的基础知识，并解答类似问题：怎样将文本设置为黑色或红色？怎样将内容显示在屏幕的特定位置？怎样用背景图片或颜色来装饰网页？

## CSS 究竟什么来头？
和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。举例来说，要选择一个 HTML 页面里所有的段落元素，然后将其中的文本改成红色，可以这样写 CSS：
```
p {
  color: red;
}
```
### “CSS 规则集”详解
上诉整个结构称为 规则集（通常简称“规则”），各部分释义如下：
- 选择器（Selector）HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素（在这个例子中就是 p 元素）。要给不同元素添加样式只需要更改选择器就行了。
- 声明（Declaration）一个单独的规则，如 `color: red;` 用来指定添加样式元素的属性。
- 属性（Properties）改变 HTML 元素样式的途径。（本例中 color 就是 `<p>` 元素的属性。）CSS 中，由编写人员决定修改哪个属性以改变规则。
- 属性的值（Property value）在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值（我们除了 `red` 之外还有很多属性值可以用于 `color` ）。

### 多元素选择
也可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。例如：
```
p, li, h1 {
  color: red;
}
```
### 不同类型的选择器
选择器有许多不同的类型。上面只介绍了元素选择器，用来选择 HTML 文档中给定的元素。但是选择操作可以更加具体。下面是一些常用的选择器类型：
|选择器名称|选择的内容|示例|
|---|---|---|
|元素选择器（也称作标签或类型选择器）|所有指定(该)类型的 HTML 元素|p 选择`<p>`|
|ID选择器|具有特定ID的元素(单一HTML页面中,每个ID只对应一个元素,一个元素只对应一个ID)|#my-id 选择`<p id="m-id">` 或`<a id="m-id">` |
|类选择器|具有特定类的元素(单一页面中,一个类可以有多个实例)|.my-class 选择 `<p class="my-class">`和 `<a class="my-class">`|
|属性选择器|拥有特定属性的元素|img[src] 选择 `<img src="myimage.png">` 而不是 `<img>`|
|伪(Pseudo)类选择器|特定状态下的特定元素(比如鼠标指针悬停)|a:hover 仅在鼠标指针悬停在链接上时选择`<a>`|

选择器的种类远不止于此,更多信息请参阅 [选择器](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)

### 字体和文本
> 译注：再一次说明，中文字体文件较大，不适合直接用于 Web Font。

在探索了一些 CSS 基础后，我们来把更多规则和信息添加至 style.css 中，从而让示例更美观。首先，让字体和文本变得更漂亮。
1.第一步，找到之前 [Google Font 输出的地址](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#%E5%AD%97%E4%BD%93)。并以 `<link>`元素的形式添加进 index.html 文档头（ <head> 和 </head> 之间的任意位置）。代码如下：
```
<link href="https://fonts.font.im/css?family=Open+Sans" rel="stylesheet" type="text/css"> 
```
以上代码为当前网页下载 Open Sans 字体，从而使自定义 CSS 中可以对 HTML 元素应用这个字体。
2. 接下来，删除 `style.css` 文件中已有的规则。虽然测试是成功的了，但是红字看起来并不太舒服。
3. 将下列代码添加到相应的位置，用你在 `Google Fonts` 找到的字体替代 `font-family` 中的占位行。（ `font-family` 意味着你想要你的文本使用的字体。）这条规则首先为整个页面设定了一个全局字体和字号（因为 `<html>` 是整个页面的父元素，而且它所有的子元素都会继承相同的 `font-size` 和 `font-family`）：

```
html {
  /* px 表示 “像素（pixels）”: 基础字号为 10 像素 */
  font-size: 10px;
  /* Google fonts 输出的 CSS */
  font-family: 'Open Sans', sans-serif;
}
```
4. 接下来为文档体内的元素（`<h1>`、`<li>` 和 `<p>`）设置字号。将标题居中显示，并为正文设置行高和字间距，从而提高页面的可读性。
```
h1 {
    font-size: 60px;
    text-align: center;
}

p, li {
    font-size: 16px;
    /* line-height 后而可以跟不同的参数，如果是数字，就是当前字体大小乘上数字 */
    line-height: 2;
    letter-spacing: 1px;
}
```
## 一切皆盒子
编写 CSS 时你会发现，你的工作好像是围绕着一个一个盒子展开的——设置尺寸、颜色、位置，等等。页面里大部分 HTML 元素都可以被看作若干层叠的盒子。
并不意外，CSS 布局主要就是基于盒模型的。每个占据页面空间的块都有这样的属性：
- `padding`:  即内边距，围绕着内容（比如段落）的空间。
- `border`：即边框，紧接着内边距的线。
- `margin`：即外边距，围绕元素外部的空间。

这里还使用了：
- width ：元素的宽度
- background-color ：元素内容和内边距底下的颜色
- color ：元素内容（通常是文本）的颜色
- text-shadow ：为元素内的文本设置阴影
- display ：设置元素的显示模式（暂略）

开始在页面中添加更多 CSS 吧！大胆将这些新规则都添加到页面的底部，而不要纠结改变属性值会带来什么结果。

### 更改页面颜色
```
html {
  background-color: #00539F;
}
```
## 文档体格式设置
```
body {
  width: 600px;
  margin: 0 auto;
  background-color: #FF9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```
现在是 `<body>` 元素。以上条声明，我们来逐条查看：
- `width: 600px;` —— 强制页面永远保持 600 像素宽。
- `margin: 0 auto;` —— 为 `margin` 或 `padding` 等属性设置两个值时，第一个值代表元素的上方和下方（在这个例子中设置为 0），而第二个值代表左边和右边（在这里，auto 是一个特殊的值，意思是水平方向上左右对称）。你也可以使用一个，三个或四个值，参考 [这里](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin#%E5%8F%96%E5%80%BC) 。
