function indexOf(arr, item) {
  //先能力检测
  if (Array.prototype.indexOf) {
    return arr.indexOf(item);
  } else {
    for (var i in arr) {
      if (arr[i] === item) {
        return i;
      }
    }
  }
  return -1;
}

indexOf([1,2,3,4], 3);
