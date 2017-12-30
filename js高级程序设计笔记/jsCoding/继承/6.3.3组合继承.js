function Super(name) {
  this.name = name;
  this.age = 25;
}
Super.prototype.sayName = function() {
  console.log(this.name);
}
//共享属性
//Super.prototype.age = 25;
function Sub(name, sex) {
  //调用超类型构造函数，继承属性
  // Super.call(this, name);
  this.sex = sex;
}
//改写子类型原型继承超类型，获得超类型方法
Sub.prototype = new Super();
Sub.prototype.sayAge = function() {
  console.log(this.age);
}

var instance1 = new Sub('sub1', 'girl');
instance1.sayName();  //sub1  实例属性
instance1.sayAge(); //25  父类型共享属性
var instance2 = new Sub('sub2', 'boy');
instance2.sayName();  //sub2
instance2.sayAge(); //25
