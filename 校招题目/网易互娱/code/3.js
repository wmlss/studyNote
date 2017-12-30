var num = 4;
var str = 'abcd';
var last = str[0];
var sortStr = str.substr(1, str.length-1);
var res = [];
var ff = sortStr[0];
var fother = sortStr.substr(1, str.length-1);
getRes(ff, fother);
function getRes(f, other) {
  if (other.length == 1) {
    var arr = [];
    arr[0] = other[0]+f;
    arr[1] = f+other[0];
    console.log(arr[0]+last);
    console.log(arr[1]+last);
    return arr;
  }
  var newF = f + other[0];
  var newOther = other.substr(1, str.length-1);
  var arr = getRes(newF, newOther);
  var newArr = [f[str.length-1]+arr[0], f[str.length-1]+arr[1]];
  console.log(f+arr[0]+last);
  console.log(f+arr[1]+last);
  return newArr;
}
