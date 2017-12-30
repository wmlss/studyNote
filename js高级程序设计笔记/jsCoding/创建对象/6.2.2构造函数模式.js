function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name);
  }
}
// 与工厂模式区别
// 1.没有显式创建对象（要用new操作符）
// 2.直接将属性和方法赋予this对象
// 3.无return
//4.可以将实例识别为特定类型
// 创建实例要用new操作符，这种方式调用构造函数经历了以下四步
// 1.创建一个新对象
// 2.将构造函数的作用域赋予新对象（因此this指向这个新对象）
// 3.执行构造函数的代码（为这个新对象添加属性）
// 4.返回新对象
//缺点：无法实现方法或属性共享
