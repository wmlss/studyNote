//适合在一些安全环境中（会禁用this和new）
//和寄生构造函数模式的区别：
//1.新建对象的实例方法不使用this，
//2.不使用new操作符调用原造函数
function Person(name, age) {
  var o = new Object();
  //可以在这里定义私有变量和函数

  //添加方法
  o.sayName = function() {
    //name只有在sayName方法中可以被调用，为私有变量
    console.log(name);
  }
  return o;
}
var o = new Person();
o instanceof Person;  //false
o instanceof Object;  //true
//和寄生构造函数模式类似，instanceof操作符同样无法准确确定对象类型
