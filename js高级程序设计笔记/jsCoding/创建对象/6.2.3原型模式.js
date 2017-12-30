function Person() {
}
Person.prototype.name = 'name';
Person.prototype.age = 25;
Person.prototype.sayName = function() {
  console.log(this.name);
}
//实现了属性和方法在实例的共享
