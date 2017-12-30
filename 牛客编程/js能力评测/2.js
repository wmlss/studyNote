function sum(arr) {
  if (Array.prototype.reduce) {
    return arr.reduce(function(sum, val, index, arr) {
      return sum + val;
    }, 0);
  } else {
    var sum = 0;
    for (var i in arr) {
      sum += arr[i];
    }
    return sum;
  }
}
sum([1,2,3,4])
