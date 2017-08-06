### this [本文的参考](http://www.cnblogs.com/wangfupeng1988/p/3988422.html)
> this引用的是函数据以执行的环境对象,注意es6的箭头函数中的this和function定义的this是有区别的，下面说的一般只适合function定义的this

+ **重点:** 函数中this到底取何值，是函数真正被调用时决定的，而不是定义时决定。this的取值时执行环境的一部分，每一次调用函数，都有可能产生不同的执行环境
下面用几个例子来阐述：

1. 构造函数(构造函数应大写字母开头)
  构造函数就是用来new对象的函数，严格来说所有函数都可以new对象，但有些函数的定义就是为了new一个对象。
  1.1. 如果函数作为构造函数使用，那么其中的this就代表它即将new出来的对象
```
function Foo() {
  this.name = 'a';
  console.log(this);
}
var f = new Foo(); //Foo {name: 'a'}
console.log(f.name); //a
```
  1.2. 上面仅限于new Foo()情况，即函数作为构造函数的情况。如果直接调用Foo(), 而不是new Foo(), 情况就大不一样
```
function Foo() {
  this.name = 'a';
  console.log(this);
}
Foo(); //Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
```
  因为函数是再window环境下直接调用而不是new一个对象。

2. 函数作为对象的一个属性
  2.1. 如果函数作为对象的一个属性，并在作为对象的一个属性被调用时，函数中this就指向该对象
```
var obj = {
  name: 'a',
  fn: function() {
    console.log(this);
  }
}
obj.fn(); //Object {name: "a", fn: function}
```
  2.2. 如果fn不是作为obj的一个属性被调用
```
//代码中fn函数被赋值到另一个变量中，并没有作为obj的一个属性调用
var obj = {
  name: 'a',
  fn: function() {
    console.log(this);
    console.log(this.x);
  }
}
var f = obj.fn;
f(); //Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
//同时name为undefined，因为window中没定义name
```

3. 函数作为call或者apply调用
  当函数被call和apply调用时，this的值就时传入的对象的值，详细怎么用可以自行查资料

4. 全局和调用普通函数
  4.1. 在全局环境下，this永远是window(浏览器情况下)，
  console.log(this == window); //window
  4.2. 普通函数在调用时，this也是window
```
var x = 10;
var fn = function() {
  console.log(this); //window
  console.log(this.x); //10
}
fn();
```
  **要注意的情况：**
```
var obj = {
  x: 10,
  fn: function() {
    function f() {
      console.log(this);
    }
    f();
  }
}
obj.fn();// window
```
  + 虽然f在函数内部定义但它是作为一个普通函数调用，this指向window
