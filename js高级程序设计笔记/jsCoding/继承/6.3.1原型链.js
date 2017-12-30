function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function() {
  return this.property;
}
function SubType() {
  this.subProperty = false;
}
//子类型先通过原型链继承了超类型，再向子类型的原型添加方法，否则添加的方法会失效
SubType.prototype = new SuperType();  //改写子类型的原型实现
SubType.prototype.getSubValue = function() {
  return this.property;
}
var instance = new SubType();
instance.getSuperValue(); //true
Function instanceof Object;
//缺点1.超类型的实例属性会变成子类型的原型属性
//缺点2.创建子类型实例时，不可向超类型的构造函数传递参数
