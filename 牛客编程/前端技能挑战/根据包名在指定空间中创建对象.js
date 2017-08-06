//题目描述 根据包名，在指定空间中创建对象
//输入描述 namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
//输出描述 {a: {test: 1, b: {c: {d: {}}}}} obj.hasOwnProperty(arr[i])
function namespace(oNamespace, sPackage) {
  var arr = sPackage.split('.');//获取属性名数组
  var curObj = oNamespace;//注意对象是引用类型
  for (var i in arr) {
    //判断当前对象有无对应属性
    if (curObj.hasOwnProperty(arr[i])) {
      //先判断对应属性是否为对象，不是则赋值为空对象
      if (!(curObj[arr[i]] instanceof Object)) {
        curObj[arr[i]] = {};
      }
    } else {
      //当前对象无对应属性，则将对应属性添加到对象中赋值为空
      curObj[arr[i]] = {};
    }
    //重新对当前属性赋值
    curObj = curObj[arr[i]];
  }
  return oNamespace;
}

var o = namespace({a: {test: 1, b: 2}}, 'a.b.c.d');
console.log(o);
//参考
// function namespace(oNamespace, sPackage) {
//     var arr = sPackage.split('.');
//     var curObj = oNamespace; //获取当前指向
//     for(let i in arr) {
//         if(curObj.hasOwnProperty(arr[i])) {  // 空间名在对象中
//             if(typeof curObj[arr[i]] !== "object") {    // 为原始值
//                 curObj[arr[i]] = {};    // 将此属性设为空对象           
//             }  
//         } else {    // 空间名不在对象中，建立此空间名属性，赋值为空
//             curObj[arr[i]] = {};
//         }
//          
//         curObj = oNamespace[arr[i]];    // 将指针指向下一个空间名属性。
//     }
//     return oNamespace;
// }
