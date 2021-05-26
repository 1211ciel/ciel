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

