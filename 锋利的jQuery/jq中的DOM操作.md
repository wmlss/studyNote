## 3.2 jQuery中的DOM操作

### 3.2.1 查找节点
1. 查找元素节点 $(选择器)
2. 查找属性节点 attr()

### 3.2.2 创建节点
1. 创建元素节点 $(html)
2. 创建文本节点 $('\<li\>雪梨\<\/li\>')
3. 创建属性节点 $('\<li attribute='***'\>雪梨\<\/li\>')

### 3.2.3 插入节点
1. append()
2. appendTo()
3. pepend()
4. pependTo()
5. after()
6. insertAfter()
7. before()
8. insertBefore()

### 3.2.4 删除节点
1. remove() 该节点以及后代所包含的节点都删除，返回一个指向已删除的节点的引用
2. detach() 与remove()区别：所绑定的事件、附加的数据会保留
3. empty() 仅清空所有后代元素

### 3.2.5 复制节点
1. clone(false/true) 复制后，新元素不具有任何行为，若像具有一样的行为应设为true

### 3.2.6 替换节点
1. replaceWith() 将匹配的所有元素都替换成指定的html或dom元素
2. replaceAll() 同上

### 3.2.7 包裹节点
1. wrap() 所有匹配的元素各个单独用其他标记包裹起来
2. wrapAll() 所有匹配的元素用一个元素包裹，不同wrap()
3. wrapInner() 每一个匹配的元素的子内容（包括文本节点）用其他结构化的标记包裹起来

### 3.2.8 属性操作
1. 获取和设置属性 attr()
2. 删除元素属性 removeAttr()

### 3.2.9 样式操作
1. 获取样式和设置样式 attr()
2. 追加样式 addClass()
3. 移除全部或指定样式 removeClass()
4. 切换样式 toggleClass()
5. 判断是否含有某样式 hasClass() 实际上是调用is()

### 3.2.10 设置和获取HTML、文本和值
1. html()
2. text()
3. val()

### 3.2.11 遍历节点
1. children() 取得匹配元素的子元素集合（仅子元素，不考虑其他后代元素）
2. next() 取得匹配元素**后面紧邻**的同辈元素。
3. prev() 取得匹配元素**前面紧邻**的同辈元素
4. siblings() 取得匹配元素的前后的所有同辈元素
5. el.closest('**') 从元素本身开始，逐级向上级元素匹配，返回最先匹配的祖先元素
6. parent() 获得集合中每个匹配元素的父级元素
7. parents() 获得集合中每个匹配元素的祖先元素

### 3.2.12 css-DOM操作
1. css('attr', 'val'\[, 'attr', 'val'\]);  类似attr()
2. offset() 获取元素在当前视窗的相对偏移
3. position() 获取元素相对最近的一个position样式属性设置为relative或者absolute祖父节点的相对偏移，与offset()一样，它返回的相对的对象也包括两个属性，即top和left。
4. scrollTop()和scrollLeft() 分别获取元素的滚动距离和距左侧的距离
