[返回](https://github.com/1211ciel/ciel/blob/main/web/README.md)

---
# JavaScript基础
JavaScript 是一门编程语言，可为网站添加交互功能（例如：游戏、动态样式、动画以及在按下按钮或收到表单数据时做出的响应等）。本文介绍了 JavaScript 的精彩之处和主要用途。
## JavaScript 到底是什么？
JavaScript（缩写：JS）是一门完备的 动态编程语言。当应用于 HTML 文档时，可为网站提供动态交互特性。由布兰登·艾克（ Brendan Eich，Mozilla 项目、Mozilla 基金会和 Mozilla 公司的联合创始人）发明。

JavaScript 的应用场合极其广泛，简单到幻灯片、照片库、浮动布局和响应按钮点击，复杂到游戏、2D/3D 动画、大型数据库驱动程序等等。

JavaScript 相当简洁，却非常灵活。开发者们基于 JavaScript 核心编写了大量实用工具，可以使 开发工作事半功倍。其中包括：
- 浏览器应用程序接口（API）—— 浏览器内置的 API 提供了丰富的功能，比如：动态创建 HTML 和设置 CSS 样式、从用户的摄像头采集处理视频流、生成3D 图像与音频样本等等。
- 第三方 API —— 让开发者可以在自己的站点中整合其它内容提供者（Twitter、Facebook 等）提供的功能。
- 第三方框架和库 —— 用来快速构建网站和应用。

本节是一篇 JavaScript 简介，因此这个阶段不会对 JavaScript 语言和上述工具做过多的介绍。之后可以到 [JavaScript 学习区](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript) 和 MDN 的其它地方学习更多细节。

## “Hello World!”示例
读到这里你一定很激动，诚然 —— JavaScript 是最振奋人心的 Web 技术之一，而且在娴熟驾驭之后，你的网站在功能和创新力上将达到一个新的维度。

然而，JavaScript 比 HTML 和 CSS 学习起来更加复杂一点，所以必须一步一个脚印地学习。首先，来看看如何在页面中添加一些基本的 JavaScript 脚本来建造一个 “Hello world!” 示例 ([一切始于 Hello World](https://zh.wikipedia.org/wiki/Hello_World)).

1. 首先，打开你的测试站点，创建一个名为 scripts 的文件夹。然后在其中创建一个名为 main.js 的文件。
2. 下一步，在 index.html 文件`</body>` 标签前的新行添加以下代码。
```
<script src="scripts/main.js" defer></script>
```
3. 与 CSS 的 <link> 元素类似，它将 JavaScript 引入页面以作用于 HTML（以及 CSS 等页面上所有内容）
4. 现在将以下代码添加到 main.js 文件中：
```
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
```
> 我们将 `<script>` 放在HTML文件的底部附近的原因是浏览器会按照代码在文件中的顺序加载 HTML。如果先加载的 JavaScript 期望修改其下方的 HTML，那么它可能由于 HTML 尚未被加载而失效。因此，将 JavaScript 代码放在 HTML页面的底部附近通常是最好的策略。

## JavaScript 快速入门
我们来学习一些 JavaScript 的核心特性，从而更好地理解它的运行机制。学习这些知识很有意义，因为这些原理普遍适用于所有编程语言，掌握好它们，可以做到融会贯通。
### 变量（Variable）
变量 (en-US) 是存储值的容器。要声明一个变量，先输入关键字 let 或 var，然后输入合适的名称：
```
let myVariable;
myVariable = '李雷';

let myVariable = '李雷';
```

注意变量可以有不同的 [数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures) ：

### 运算符 
### 条件语句
### 函数（Function）
### 事件
事件能为网页添加真实的交互能力。它可以捕捉浏览器操作并运行一些代码做为响应。最简单的事件是 点击事件，鼠标的点击操作会触发该事件。 可尝试将下面的代码输入到控制台，然后点击页面的任意位置：
```
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
```
将事件与元素绑定有许多方法。在这里选用了 `<html>` 元素，把一个匿名函数（就是没有命名的函数，这里的匿名函数包含单击鼠标时要运行的代码）赋值给了 html 的 onclick 属性。

请注意：
```
document.querySelector('html').onclick = function() {};
```
等价于
```
let myHTML = document.querySelector('html');
myHTML.onclick = function() {};
```
只是前者更简洁。

## 完善示例网页
现在你已经具备了一些 JavaScript 基础，下面来为示例网页添加一些更酷的特性。
### 添加一个图像切换器
这里将用新的 DOM API 为网页添加另一张图片，并用 JavaScript 使图片在点击时进行切换。
```
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === 'images/golang.png') {
        myImage.setAttribute('src', 'images/web.jpg')
    } else {
        myImage.setAttribute('src', 'images/golang.png')
    }
}
```

### 添加个性化欢迎信息
下面来添加另一段代码，在用户初次进入站点时将网页的标题改成一段个性化欢迎信息（即在标题中添加用户的名字）。名字信息会由 [Web Storage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API) 保存下来，即使用户关闭页面之后再重新打开，仍可得到之前的信息。还会添加一个选项，可以根据需要改变用户名字以更新欢迎信息。

1. 打开 index.html， 在 <script> 标签前添加以下代码，将在页面底部显示一个“切换用户”字样的按钮：
```
<button>切换用户</button>
```

2. 将以下 JavaScript 代码原封不动添加到 main.js 文件底部，将获取新按钮和标题的引用，并保存至变量中：
```
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
```
3. 然后添加以下函数来设置个性化欢迎信息。（函数暂时不起作用，稍后修复）

```
function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}
```
该函数首先调用了 prompt() 函数， 与 alert() 类似会弹出一个对话框。但是这里需要用户输入数据，并在确定后将数据存储在 myName 变量里。接下来将调用 localStorage API ，它可以将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字。
   
4. 接下来，添加以下的 if ... else 块。我们可以称之为初始化代码，因为它在页面初次读取时进行构造工作：
```
    if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
```
