//用函数封装特定接口创建对象
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  }
  return o;
}
//没解决对象识别问题，已经属性和方法不可共享
