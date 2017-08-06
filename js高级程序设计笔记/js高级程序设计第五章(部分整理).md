### 引用类型
> 对象是某个特定的引用类型的实例

5.1 Object类型：大多数引用类型的值都是Object的实例
  + 对象属性可以通过点或者方括号访问
```
alert(person["name"]);
alert(person.name);
//属性中包含会导致语法错误的字符
//或者属性名使用关键字或者保留字，可以使用方括号表示法
alert(person["first name"]);
```
5.2 Array对象
  + Array instanceof Object //true
  + 数组每一项都可以保存任何数据类型，数组大小和长度可以动态调整

5.2.1 检测数组： Array.isArray()
  + instanceof Array: 页面存在多个框架，不同框架下有不同的全局环境则有不同版本的Array构造函数，一个框架的数组传递到另一个框架是此方法会失效
  + Array.isArray(): es6新增确定是否为数组能解决上面的问题

5.2.2 转换方法

5.2.3 栈方法：（先进后出）
  + Array.push()添加任意数据到数组尾部，并返回数组新长度
  + Array.pop()移除数组最后一项并返回这一项的值

5.2.4 队列方法：（先进先出）
  + Array.push()同上
  + Array.shit()移除第一项，并返回该项的值
  + Array.unshit()和push相反，在数组的前端添加任意数据，并返回数组新长度

5.2.5  重排序方法
  + reverse() 反转数组的顺序，返回排序后的数组
  + sort() 数组从小到大排序（升序排序），返回排序后的数组。此方法对数字字符串比较无效如'10'在'5'前,可以加入自定义比较函数
```
function compare(val1, val2) {
  if(val1 < val2) {
    return 1; //1则调换
  }else if(val1 > val2){
     return -1;
  }else {
    return 0;
  }
}
var arr = [0, 1, 2];
arr.sort(compare);  //[2,1,0]
```

5.2.6 操作方法
  + Array.concat(arr1, arr2[,arr3.....]);合并多个数组，将这些数组合并且返回合并的数组。
  + Array.slice(start[, end]);接受一个或两个参数，即返回项的开始和结束位置，返回按位置取得的数组(可以用负数即倒数第几个)
  + Array.splice(start, num, data)：返回从原数组删除的项，没有删除则为空数组
    - start: 开始位置
    - num: 删除数组内num项
    - data: 插入的数据
```
arr1.splice(0, 2); //删除前两项
arr1.splice(2, 0, 'red', 'green'); //从位置2开始插入'red'和'green'
arr1.splice(2, 1, 'red', 'green'); //删除当前位置2的项，后从位置2开始插入
```

5.2.7 位置方法(返回值在数组中的位置索引)
  + 下面两个方法都有2个参数要找的值和开始位置（可选）
    - indexof(val [, start]);默认从头开始，**向后找**
    - lastIndexOf(val [, start]);默认从尾部开始，**向前找**

5.2.8 迭代方法 //以下方法都不会改变原数组每一项的值
  + every(item, index, array)  对每一项运行指定函数，如果数组的每一项都返回true，则返回true否则false
  + some(item, index, array) 对每一项运行指定函数，数组中任一项执行函数后返回true，则返回true否则false
  + filter(item, index, array)  对每一项运行指定函数，返回该函数会返回true的项组成的数组
  + forEach(item, index, array)  对每一项运行指定函数，没有返回值
  + map(item, index, array)  对每一项运行指定函数，返回每次调用的结果组成的数组

5.2.9 缩小方法
  +  4个参数：前一个值，当前值，项的索引，该数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项
  - reduce(prev, cur, index, arr) 数组第一项开始从头到尾
  - reduceRight(prev, cur, index, arr) 数组最后一项开始到头部
```
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce((prev, cur, index, arr)=> {
  return prev + cur;
})
alert(sum);//15
```
5.3 Date类型

5.4 RegExp类型： js通过RegExp类型来支持正则表达式
  + 创建方式：
    - var expression = /pattern/ attributes;  //直接量语法
    - var expression = new RegExp(pattern, attributes);
  + 参数
    - pattern: 一个字符串，指定了正则表达式的模式或者其他正则表达式
    - attributes： 一个可选字符串，包含(g, i, m)分别是全局匹配（找到所有匹配并非找到第一个就停止），执行大小写不敏感， 执行多行匹配（到达第一行末尾时仍会找下一行）
    + 抛出异常
      - SyntaxError ： pattern非合法的正则表达式，或者attributes有g, i, m之外的参数
      - TypeError ：   若pattern是RegExp对象，但没有省略attributes参数
    + 实例属性： 获取正则表达式各方面信息
      - global： boolean，表示是否设置g标志
      - ignpreCase :  boolean ， 是否设置i
      - multiline ： boolean 是否设置m
      - **lastIndex:** 整数，开始搜索下一个匹配项的字符位置，默认0开始（匹配一次后lastIndex会更新成上次匹配成功的地方）
      - source ： 返回**字面量形式**的字符串模板
```
var re1 = /\[bc\]at/i;
 alert(re1.source); //"\[bc\]at"
var re2 = new RegExp("\\[bc\\]at", "i");
alert(re2.source); //"\[bc\]at"
```
    + RegExp对象方法
      - RegExp.compile() 编译正则表达式
      - RegExp.exec() 检索字符串指定的值，返回找到的值，并确定其位置
      - RegExp.test() 检索字符串指定的值，返回true或者false

5.5 function类型：函数实际上是对象，函数名实际也是指向对象的指针，一个函数可能多个名字
  5.5.1 没有重载
  5.5.2 函数声明与函数表达式
    + 解析器会优先读取函数声明，并使其在执行任何代码前可用（可访问），二函数表达式则必须等到解析器执行到其所在代码，才会被真正解析执行
```
//正常运行
alert(get1(10));
function get1(num) {
  return num;
}
//产生错误
alert(get2(10));
var get2 = function(num) {
  return num;
}
```
  5.5.3 作为值的函数： 函数可以作为参数传递
    + 若访问函数的指针而不执行的话，必须去掉函数名后面的那对圆括号
  5.5.4 函数内部属性： this 和 arguments
    + arguments：主要用于保存函数参数，但还有个callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数
```
//arguments.callee可以减少递归时和函数名的耦合
function factorial(n) {
  if (n<=1) { return 1 }
  else { return num * arguments.callee(n-1) }
}
```
    + this： **引用的是函数据以执行的环境对象**
      + **函数中this到底取何值，是函数真正被调用是决定的，定义时决定不了**
    + caller: es6新的函数对象属性： 保存着调用当前很熟的函数引用
  5.5.5 函数属性和方法：函数是对象，故函数也有属性和方法。
    + 每个函数都有两个属性
      - length: 函数希望接收的命名参数个数
      - prototype：
    + 每个函数都包含两个非继承而来的方法： apply(), call()
      - 作用： 在特定作用域中调用函数
      - apply(obj, 参数数组)： 一个是在其中运行函数的作用域，另外一个是参数数组（可以是Array实例也可以是arguments对象）即需要传入的参数。
      - call(obj[, 参数1, 参数2...])： 大体同上区别是参数要直接传递给函数，即逐个列举出
      - function.bind(obj): es5新增，创建一个函数实例，其this会绑定到传给bind(obj)的object
```
//二者仅第二参数不同，
//此中this都为window，因为函数sum的执行环境是window
function sum(n1, n2) { return n1 + n2 }
//call
function callSum(n1, n2) {
  return sum.call(this, n1, n2)
}
//apply()
function applySum(n1, n2) {
  return sum.apply(this, arguments)
}
function applySum(n1, n2) {
  return sum.call(this, [n1, n2])
}
//bind()
window.color = 'red';
var o = {color: 'blue'};
function say() {console.log(this.o)}
var newSay = say().bind(o);
newSay(); //输出 blue 新的函数实例的执行环境(this)已经是传给bind的o
```
5.6 基本封装类型：每个包装类型都映射到对应的基本类型
  + 基本类型： undefined null boolean number string Symbol(new in es6)
  + 引用类型： object


### 待续
