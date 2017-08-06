1. css列表：<ul> <ol>中嵌套的下一级应该时<li>
  + <ul> 无序列表
  + <ol> 有序列表
  + <li>  定义列表项目（可用在ol或ul中）
```
<h3>无序列表</h3>
<ul>
  <li>a</li>
  <li>b</li>
</ul>
<h3>有序列表</h3>
<ol>
  <li>a</li>
  <li>b</li>
</ol>
<h3>相互嵌套</h3>
<ol>
  <li>a</li>
  <li>
    <ul>
      <li>b</li>
      <li>c</li>
    </ul>
  </li>
</ol>
```
2. background 属性 [w3c参考](http://www.w3school.com.cn/cssref/pr_background-repeat.asp)
  + background-color
  + background-repeat
  + background-image: url()
  + background-position: 规定背景图像的位置
  + background-size: 规定图片尺寸
    - length 设置高度和宽度：第一值高度，第二个宽度，只设置一个则第二个为auto
    - precentage  同上但用百分比
    - cover  背景图片扩展到足够大来完全覆盖背景区域
    - contain  图像扩展到最大尺寸，使其宽度高度完全适应内容区域
  + background-origin 背景图片定位区域（background-attachment 属性为 "fixed"，则该属性没有效果。）
    - padding-box 背景图相对于内边距框来定位
    - border-box  相对于边框盒定位
    - content-box 相对于内容框定位
  + background-attachment 背景图片固定或随页面其余部分滚动
    - scroll 随页面其余部分滚动
    - fixed背景图片固定不滚动
    - inherit 继承父元素
  + background-clip 背景图片绘制区域
    - border-box (背景扩展到边框盒)、padding-box、content-box

3. display: none和visibility: hidden
  + display: none; 隐藏**不保留空间**
  + visibility: hidden; 隐藏但**保留空间**
