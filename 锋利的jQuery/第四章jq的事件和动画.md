### 4.1 jQuery中的事件

#### 4.1.1 加载DOM

1. $(document).ready() (替代window.onload)
> DOM加载完就可以被执行
+ 可多次使用，函数会被追加

2. $(window).load() （不单单window，el.load()方法会在元素的onload事件中绑定一个处理函数）
> 页面中所有元素（包括关联文件）完全加载才执行
+ onload事件只能保存对**一个**函数的引用

#### 4.1.2 事件绑定
