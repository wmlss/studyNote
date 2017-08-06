1. 记住js没有重载
```
var m= 1, j = k = 0;
function add(n) {
    return n = n+1;
　 }
y = add(m); //4
function add(n) {
    return n = n + 3;
}
z = add(m); //4
//都出输出4的原因是：1.js没有重载
//2.js的函数声明式创建函数会让解析器先读取函数生命，
//由于没有重载故第二个声明的函数才是add()的真实函数
```
2. 函数中的变量
  + 用var定义则会变成局部变量，函数退出后该变量被销毁
  + 省略var就会创建一个全局变量
```
(function() {
      var a = b = 5;
  })();
console.log(b);//5，全局变量
console.log(a);//报错，局部变量会被销毁
```
