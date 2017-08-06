## block inline inline-block对比

#### display:block

1. block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
2. **block元素可以设置width,height属性**。块级元素即使设置了宽度,仍然是独占一行。
3. block元素可以设置margin和padding属性。

#### display:inline

1. inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
2. inline元素**设置width,height属性无效**。
3. *inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；
但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。*

#### display:inline-block

1. 简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。
比如我们可以给一个link（a元素）inline-block属性值， **使其既具有block的宽度高度特性又具有inline的同行特性** 。

***

## 四个定位属性（[参考链接](http://blog.csdn.net/chen_zw/article/details/8741365)）
>在html中网页可以看成一个立体的空间，一个完整的页面是由很多个页面堆积形成的，如下图所示
>CSS中Position属性有四个可选值，它们分别是：static、absolute、fixed、relative。

1. position:static　无定位

+ 该属性值是所有元素定位的默认情况，在一般情况下，我们不需要特别的去声明它，但有时候遇到继承的情况，我们不愿意见到元素所继承的属性影响本身，从而**可以用position:static取消继承**，即还原元素定位的默认值。

2. position:absolute　绝对定位

+  会将对象**脱离正常的文档流**绝对定位而不考虑它周围内容的布局。假如其他具有不同 z-index 属性的对象已经占据了给定的位置，他们之间不会相互影响，而会在同一位置层叠。(**注意使用absoulte或fixed定位的话，必须指定 left、right、 top、 bottom 属性中的至少一个，否则left/right/top/bottom属性会使用它们的默认值 auto ，这将导致对象遵从正常的HTML布局规则**)在前一个对象之后立即被呈递，简单讲就是都变成relative，会占用文档空间，使用absoult定位的元素脱离文档流后，就只能根据祖先类元素(父类以上)进行定位，而这个**祖先类还必须是以postion非static方式定位的**， 举个例子，a元素使用absoulte定位，它会从父类开始找起，寻找以position非static方式定位的祖先类元素(注意，一定要是直系祖先才算哦~）

3.position:fixed　相对于窗口的固定定位

+ 元素的定位方式同absolute类似，但它的包含块是视区本身。在浏览器中，**元素在文档滚动时不会在浏览器视察中移动**。例如，它允许框架样式布局。在页式媒体如打印输出中，一个固定元素会出现于第一页的相同位置。**这一点可用于生成流动标题或脚注**。我们也见过相似的效果，但大都数效果不是通过CSS来实现了，而是应用了JS脚本。请特别注意，IE6不支持CSS中的position:fixed属性。

4.position:relative　相对定位

+ 所谓相对定位到底是什么意思呢，是基于哪里的相对呢？我们需要明确一个概念，相对定位是相对于元素默认的位置的定位。既然是相对的，我们就需要设置不同的值来声明定位在哪里，top、bottom、left、right四个数值配合，来明确元素的位置。**最重要的是它还占有文档空间，而且占据的文档空间不会随 top / right / left / bottom 等属性的偏移而发生变动** (注意：margin padding才能让元素所占文档空间改变。)
