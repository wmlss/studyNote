//原型式继承，object(o)实现继承，并直接返回子类型实
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
//寄生式继承：与原型式继承密切相关，创建一个封装继承过程的函数，
//该函数在内部以某种方式来增强子类型并返回
function createAnother(original) {
  var clone = object(original);  //通过调用函数创建一个新对象，返回子类型实例
  //加强子类型实例
  clone.sayHi = function() {
    console.log('hi');
  }
  //返回实例
  return clone;
}
//缺点：无法实现函数复用
