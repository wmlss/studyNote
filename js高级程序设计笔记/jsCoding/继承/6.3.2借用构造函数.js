function Super(name) {
  this.name = name;
  this.age = 18;
}

function Sub(name) {
  //子类型可以向超类型的构造函数传递参数
  Super.call(this, name);
}
var instance = new Sub('son');
instance.name;
//缺点无法函数复用
