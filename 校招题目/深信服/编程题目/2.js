var str = '';

// var str = read();
var arr = str.split(',');
var max =  65535;
var min = 1;
var res = true;
var sum = 0;

for (var i in arr) {
  if (arr[i].search('-') != -1) {
      var pattern = /\d+/g;
    var items = arr[i].match(pattern);
    if (parseFloat(items[0]) > parseFloat(items[1])) {
      res = false;
      break;
    }
    if (parseFloat(items[0]) < min || parseFloat(items[1]) > max) {
      res = false;
      break;
    }
    sum = sum + parseFloat(items[1]) - parseFloat(items[0]) + 1;
  } else {
    var num = parseFloat(arr[i]);
    if (num > max || num < min) {
      res = false;
      break;
    }
    sum++;
  }
}

if (sum > 1024) {
  res = false;
}
console.log(res);
