function remove(arr, item) {
  if (Array.prototype.filter) {
    //filter will not alter origin array return new array
    return arr.filter(function(val, index, arr) {
      if (val === item) {
        return false;
      } else {
        return true;
      }
    })
  } else {
    var newArr = [];
    for (var i in arr) {
      if (arr[i] !== item) {
        //note: 1 != true will reutrn false
        arr.push(arr[i]);
      }
    }
    return newArr;
  }
}
