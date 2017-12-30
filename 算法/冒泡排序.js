
//一般的冒泡排序
function sort(arr) {
  var l = arr.length;
  for (var i=0; i<l; i++) {
    for (var j=0; j<l-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

//改良的冒泡排序
function sort(arr) {
  var l = arr.length;
  var flag = true;  //设立标志，标记表示是否内循坏是否有交换
  for (var i=0; i<l && flag; i++) {
    flag = false; //初始为false
    for(var j=0; j<l-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        flag = true;  //表示有交换，即仍未排序完
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
var arr = [12, 3, 44, 34, 25, 324, 6, 32, 523, 45, 23, 453, 2];
sort(arr);
