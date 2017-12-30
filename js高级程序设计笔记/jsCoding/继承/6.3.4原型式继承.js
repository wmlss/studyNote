//原型式继承，object(o)实现继承，并直接返回子类型实例
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
//es5新增Object.create(proto[, propertiesObjects])规范了原型式继承,
//proto: 创建新对象的原型
//propertiesObjects： 包含一个或多个属性描述符的 js 对象。
// 可选。该参数对象是一组属性与值，该对象的属性名称将是新创建的对象的属性名称，
// 值是属性描述符（这些属性描述符的结构与Object.defineProperties()的第二个参数一样）。
// 注意：该参数对象不能是 undefined，另外只有该对象中自身拥有的可枚举的属性才有效，
// 也就是说该对象的原型链上属性是无效的。
