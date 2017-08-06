箭头函数函数看上去只是es6对匿名函数的简写，其实箭头函数和匿名函数有明显区别
 + 普通方式定义的函数可参考我之前整理的文章 [关于js中this](http://www.jianshu.com/p/7436f0422340)
 + 箭头函数中的this是词法作用域，即this和调用时的上下文无关
 + 箭头函数根本就没有绑定自己的 this，在箭头函数中调用 this 时，仅仅是简单的沿着作用域链向上寻找，找到最近的一个 this 拿来使用罢了（外层调用者）；
 + 因为箭头函数没有绑定this，所有call,apply的第一个参数(this的绑定)无效
来看看区别
```
//箭头语法
var obj = {
    name: 'ab',
    getName: function () {
        var fn = () => this.name; // this指向obj对象
        return fn();
    }
};
obj.getName();

//普通的方式
var obj = {
name: 'ab',
getName: function () {
    var fn = function() {return this.name} // this指向winodw对象
    return fn();
}
};
obj.getName();
```
