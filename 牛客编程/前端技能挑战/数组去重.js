//题目描述 为Array 对象添加一个去除重复项的方法
//输入 [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
//输出 [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']  注意{}不用去重

Array.prototype.uniq = function () {
  var arr = this;//获取当前数组
  var res = [];
  var flag = true; //用来加入第一个NaN
  //NaN!=NaN是true 且NaN是number类型
  for (var i=0; i<arr.length; i++) {
    //indexOf {} NaN 还有数组中不存在的 会返回-1
    if (res.indexOf(arr[i]) == -1) {
      //{} NaN 还有数组中不存在的 都会进入,题目不要求{}去重
      if (arr[i]!=arr[i] && typeof arr[i] == "number") {
        //NaN去重
        if (flag) {
          res.push(arr[i]);
          flag = false;
        }
      } else {
        res.push(arr[i]);
      }
    }
  }
  return res;
}

// 参考
// Array.prototype.uniq = function () {
//    var resArr = [];
//    var flag = true;
//      
//    for(var i=0;i<this.length;i++){
//        if(resArr.indexOf(this[i]) == -1){
//            if(this[i] != this[i]){   //排除 NaN
//               if(flag){
//                    resArr.push(this[i]);
//                    flag = false;
//               }
//            }else{
//                 resArr.push(this[i]);
//            }
//        }
//    }
//     return resArr;
// }

var a = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
console.log(a.uniq());
//console.log(a.indexOf(undefined));
