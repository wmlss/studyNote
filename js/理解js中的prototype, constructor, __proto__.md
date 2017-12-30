> 作为小白一直都被这几个概念困扰，最近浏览了很多人的文章，再结合自己的想法把自己的理解写成此文（希望各位把有错的地方指出，谢谢！）

### 概念引入：
  + #### prototype（显式原型）
    1. 每个函数对象创建之后都有一个prototype属性 **(注意是函数对象不是每个对象)**
    2. prototype指向一个对象（原型对象），该对象包含这个函数对象的实例共享的属性和方法。
    3. prototype默认有属性：constructor，指向这个函数对象的本身（也有\_\_proto\_\_,因为每个对象都有\_\_proto\_\_）
    4. 特例：Object.prototype的\_\_proto\_\_是null
  + #### \_\_proto\_\_:（隐式原型）
    1. 每个对象都有一个\_\_proto\_\_属性(隐藏属性)，es5中获取此值的方法是：Object.getPrototypeOf(obj)
    2. \_\_proto\_\_属性指向创建该对象的函数的prototype（创建该对象的函数的原型对象）
    3. js的继承其实是由\_\_proto\_\_实现
  + #### constructor:
    1. 每个对象都有constructor属性，指向创建这个对象的构造函数
    2. prototype中的constructor属性指向prototype对象所在的函数对象

### 注意：
  1. 只有函数对象才有prototype属性
  2. 所有对象都有constructor属性和\_\_proto\_\_属性
  ```
  //所有对象都有constructor属性
  function person() { }
  console.log(person.constructor); //输出Function对象
  console.log(person.prototype.constructor) //输出person函数对象本身
  var arr = [1, 2];
  console.log(arr.constructor); //输出Array对象
  //所有对象都有__proto__属性
  function person() { }
  console.log(person.__proto__); //输出person的原型
  console.log(person.prototype.__proto__) //输出Object对象
  var arr = [1, 2];
  console.log(arr.__proto__); //输出Array对象的原型对象
  ```

### 代码和图解：
  ```
  function Person(name){
      this.name=name;
  }
  Person.prototype.sayName=function(){
      console.log(this.name);
  }

  var personOne=new Person("a");
  var personTwo=new Person("b");

  personOne.sayName(); // 输出  "a"
  personTwo.sayName(); //输出 "b"

  console.log(personOne.__proto__==Person.prototype); // true
  console.log(personTwo.__proto__==Person.prototype); // true

  console.log(personOne.constructor==Person); //true
  console.log(personTwo.constructor==Person); //true
  console.log(Person.prototype.constructor==Person); //true

  console.log(Person.constructor); //function Function(){}
  console.log(Person.__proto__.__proto__); // Object{}
  ```

![image.png](http://upload-images.jianshu.io/upload_images/2519416-4575c1afb58277d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
console.log(Function.__proto__);  //function () { [native code] }
console.log(Function.prototype.__proto__);  //Object.prototype
console.log(Function.constructor);  //function Function() { [native code] }
console.log(Object.__proto__);  //function () { [native code] }
console.log(Object.prototype.__proto__);  //null
console.log(Object.constructor);  //function () { [native code] }

console.log(Object.__proto__ === Function.prototype); //true
console.log(Function.__proto__ === Function.prototype); //true
console.log(Object.constructor === Function); //true
```

### 参考文章
  + [prototype, constructor, \_\_proto\_\_详解](https://segmentfault.com/a/1190000003017751)
  + [深入理解javascript原型和闭包（完结）](http://www.cnblogs.com/wangfupeng1988/p/3977924.html)
  + [js中\_\_proto\_\_和prototype的区别和关系？](https://www.zhihu.com/question/34183746/answer/59043879)
