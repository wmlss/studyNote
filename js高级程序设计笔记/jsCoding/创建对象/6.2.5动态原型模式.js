function Person(name, age) {
  this.name = name;
  this.age = age;
  //动态之处：sayName()方法不存在时，会新增一个添加到原型
  if (typeof this.sayName != 'function') {
    Peron.prototype.sayName = function() {
      console.log(this.name);
    }
  }
}
