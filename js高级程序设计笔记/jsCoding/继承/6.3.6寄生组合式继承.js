//组合继承缺点会调用两次超类型的构造函数
//子类型会包含超类型的所有实例属性，但我们调用子类型构造函数又会重写这些属性
//寄生组合式继承，相当于将子类型的prototype完整重写
function inheritPrototype(subType, superType) {
  //1.创建超类型的副本
  var prototype = Object.create(superType.prototype);
  //2.为副本添加constructor属性，弥补重写原型失去的默认的constructor
  prototype.constructor = subType;
  //3.将子类型的原型改为新建的副本
  subType.prototype = prototype;
}
function Super(name) {
  this.name = name;
  this.age = 25;
}
Super.prototype.sayName = function() {
  console.log(this.name);
}
function Sub(name, sex) {
  Super.call(this, name);
  this.sex = sex;
}
inheritPrototype(Sub, Super);
Sub.prototype.sayAge = function() {
    console.log(this.age);
}
var instance = new Sub('son', 'boy');
instance.sayName();
//只调用了一次超类型的构造函数，避免了不必要的调用
//原型链保持不变，能正常使用instanceof和isPrototypeOf()
//最理想的继承范式之一（寄生组合式继承）
