function sum() {
  var arr = arguments;
  var sum = 0;
  for (var i in arr) {
    if (!isNaN(parseFloat(arr[i]))) {
      sum += parseFloat(arr[i]);
    }
  }
  return sum;
}
console.log(sum(0.1, 0.2));
//console.log(isNaN(parseFloat(null)));
