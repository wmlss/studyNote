function Person(name, age) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function() {
    console.log(this.name);
  }
  return o;
}
//与工厂模式类似，用意：为js原生的构造函数(Array, String等)定义新方法
//例子：
function SpecialArray() {
  var values = new Array();
  values.push.apply(values, arguments);
  values.toPipededString = function() {
    return this.join("|");
  }
  return values;
}
var newArr = SpecialArray(1, 2, 3);
//寄生构造函数返回的对象和原生构造函数的实例的对象没有区别（只是改写或新增了方法属性）
//原型链时是一样的，故无法确定对象准确类型
