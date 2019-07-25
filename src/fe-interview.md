
前端面试题
===

> forked from [fe-interview](https://github.com/haizlin/fe-interview)

## HTML

1. 页面导入样式时，使用link和@import有什么区别？

98. 列举出你最常用的meta标签的写法和作用
> 1. `<meta charset="utf-8">`
> 2. `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`
> 3. `<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no,viewport-fit=cover">`
> 4. `<meta name="referrer" content="no-referrer-when-downgrade">` [Referrer Policy 介绍](https://imququ.com/post/referrer-policy.html)
> 5. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

99. HTML5的页面可见性（Page Visibility）有哪些应用场景？
> Page Visibility可以知道当前页面是否被用户激活，获取可见状态：`document.hidden`和`document.visiblityState`, 监听状态变化：`document.addEventListener('visiblitychange', handler, false)`
> 1. 视频 & 音频播放的场景，隐藏时可以暂停播放
> 2. 滚动预加载的情况
> 3. 减少不必要的网络通讯
> 4. 隐藏的页面不应算入pv
> 5. 网页动画
> 6. 手机上需要处理网页退出的逻辑, `pagehide` `beforeunload` `unload`
> 在浏览器不支持时，使用window的`blur`和`focus`可以部分模拟
> 
> 参考: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) 和 [Page Visibility API 教程](http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html)

100. HTML5怎么为输入框添加语音输入的功能呢？
> `<input type=”text” speech x-webkit-speech />` <input type=”text” speech x-webkit-speech />

## CSS

98. 移动端微信页面有哪些兼容性问题及解决方案是什么？
> 1. 检查userAgent是否微信，如果是，可以调用微信的sdk
> 2. 部分版本的微信不能使用Universal Link

99. 你对视网膜(Retina)分辨率有了解吗？有没有在实际中使用过？
> 1. css方面，@media (-webkit-min-device-pixel-ratio: 2)
> 2. js方面，主要是window.devicePixelRatio
> 3. 有些手机的devicePixelRatio是1.5，容易造成分割线有时是2px，有时是1px

100. 如何让大小不同的图片等比缩放不变形显示在固定大小的div里？写出来

```html
<div class="div1"></div>

<div class="div2">
  <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
</div>

<div class="div3">
  <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
</div>
```

```css
div{
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
/* 背景图 */
.div1{
  background: url(https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png) no-repeat center center;
  background-size: contain;
}
/* 单独元素 */
.div2 img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
/* flex */
.div3 {
  display: flex;
  align-items: center;
  jutify-content: center;
}
.div3 img{
  max-width: 100%;
  max-height: 100%;
  margin: auto; /* 这个和align-items & justify-content互相替代 */
}
```

## JS

98. 说说你理解的同步和异步的区别是什么？
> 同步：阻塞
> 异步：不阻塞，继续执行下一行，不保证上一行已经执行完 & 返回

99. 不用第三方库，说说纯js怎么实现读取和导出excel？
> 这题的信息太少，怎么叫“读取”，是把excel的内容提取出来？导出cls

100. 分别封装精确运算的加减乘除四个方法
> pending

## 软技能

98. 不查资料，你会手写正则吗？
> [JS正则表达式完整教程](https://juejin.im/post/5965943ff265da6c30653879)
> * 匹配16进制颜色值 `'#aafafa'.match(/^#([\d|a-f]{6}|[\d|a-f]{3})$/i)`
> * 匹配时间 `'23:59'.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/)`
> * 匹配日期 `'2017-06-10'.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/)`
> * window操作系统文件路径 `'F:\\study\\javascript\\regex\\regular expression.pdf'.match(/^\w:\\([^\\:*<>|"?\r\n/]+\\?)*[^\\:*<>|"?\r\n/]?$/i)`
>   * `F:\study\javascript\regex\regular expression.pdf`
>   * `F:\study\javascript\regex\`
>   * `F:\study\javascript`
>   * `F:\`
> * 匹配id `'<div id="container" class="main"></div>'.match(/id=".*?"/i)`
>   * 优化 `'<div id="container" class="main"></div>'.match(/id="[^"]*"/i)`
> pending...
> * `"[JS] Lesson_01.mp4".replace(/\b/g, '#');` => `"[#JS#] #Lesson_01#.#mp4#"`
> * 无法匹配任何东西的正则 `/.^/` `/$./`
> * 数字的千位分隔符表示法 `'100000000'.replace(/(?=\B(\d{3})+$)/g, ',')`
>   * 匹配最后一个逗号 `'100000000'.replace(/(?=\d{3}$)/, ',')`
>   * 匹配所有逗号 `'100000000'.replace(/(?=(\d{3})+$)/g, ',')`
>   * 匹配特殊案例 `'100000000'.replace(/(?!^)(?=(\d{3})+$)/g, ',')`
>   * 其它案例："12345678 123456789"替换成"12,345,678 123,456,789"，`"12345678 123456789".replace(/\B(?=(\d{3})+\b)/g, ',')`
> * 密码长度6-12位，由数字、小写字符和大写字母组成，但必须至少包括2种字符
>   * `'abc123'.match(/^[a-zA-Z0-9]{6,12}$/)`
>   * `'abc123'.match(/(?=.*[0-9])^[a-zA-Z0-9]{6,12}$/)`
>   * `'abc123'.match(/(?=.*[0-9])(?=.*[a-z])^[a-zA-Z0-9]{6,12}$/)`
>   * `'abc123'.match(/((?=.*[0-9])(?=.*[A-Z])|(?=.*[0-9])(?=.*[a-z])|(?=.*[A-Z])(?=.*[a-z]))^[a-zA-Z0-9]{6,12}$/)`
>   * 反向, 不能全部是数字 `'123455a'.match(/(?!^[0-9]*$)^[a-zA-Z0-9]{6,12}$/)`
>   * `'123455'.match(/(?!^[0-9]*$)(?!^[a-z]*$)(?!^[A-Z]*$)^[a-zA-Z0-9]{6,12}$/)`

99. 你有用过单例模式吗？主要运用场景有哪些？
> 参考[JavaScript单例模式](https://segmentfault.com/a/1190000012842251)
> 定义：确保一个类仅有一个实例，并提供一个访问它的全局访问点
> 1. 全局唯一遮罩层
> 2. sdk
> 3. 聊天窗口

```js
// simple
function Singleton1(name){
  this.name = name
}
Singleton1.getInstance = function(name){
  if(!this.instance){
    this.instance = new Singleton1(name)
  }
  return this.instance
}
const a1 = Singleton1.getInstance('a')
const b1 = Singleton1.getInstance('b')
console.log(1, a1 === b1, a1.name) // true

// closure
function Singleton2(name){
  this.name = name
}
Singleton2.getInstance = (function(){
  let instance = null
  return function(name){
    if(!instance){
      instance = new Singleton2(name)
    }
    return instance
  }
})()
const a2 = Singleton2.getInstance('a')
const b2 = Singleton2.getInstance('b')
console.log(2, a2 === b2, a2.name) // true

// new
const Singleton3 = (function(){
  let instance = null
  return function(name){
    if(instance){
      return instance
    }
    this.name = name
    instance = this
  }
})()
const a3 = new Singleton3('a')
const b3 = new Singleton3('b')
console.log(3, a3 === b3, a3.name, b3.name) // true

// new2, 拆分wrapper
const singletonWrapper = (function(Constructor){
  let instance = null
  return function(...args){
    if(!instance){
      // Constructor.apply(this, args) // 需要加上原型链
      instance = new Constructor(...args)
    }
    return instance
  }
})
const Singleton4 = singletonWrapper(Singleton2)
const a4 = new Singleton4('a')
const b4 = new Singleton4('b')
console.log(4, a4 === b4, a4, a4.name, a4.__proto__, a4.constructor === Singleton2)
```

100. 你有画过流程图吗？开始和判定分别用什么图形表示？
> 开始 -> 圆角矩形, 判定 -> 菱形

