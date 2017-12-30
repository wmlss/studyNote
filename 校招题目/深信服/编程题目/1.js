var str = '9.999999999 bps';

// var str = readline();
var pattern = /\d+[\.]?\d*/;
var num = parseFloat(str.match(pattern)[0]);
console.log(num);
var flag = true;
if (str.search('K') != -1) {
  flag = false;
  let res = num * Math.pow(10, 3);
  console.log(res);
}

if (str.search('M') != -1) {
  flag = false;
  let res = num * Math.pow(10, 6);
  console.log(res);
}

if (str.search('G') != -1) {
  flag = false;
  let res = num * Math.pow(10, 9);
  console.log(res);
}

if (str.search('T') != -1) {
  flag = false;
  let res = num * Math.pow(10, 12);
  console.log(res);
}

if (flag) {
  console.log(num);
}
