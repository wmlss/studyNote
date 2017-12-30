// [question Link](https://www.nowcoder.com/practice/777d0cd160de485cae0b1fd1dd973b44?tpId=2&tqId=10862&tPage=1&rp=1&ru=%2Fta%2Ffront-end&qru=%2Fta%2Ffront-end%2Fquestion-ranking)
function count(str) {
  var pattern = /\S/g;
  var obj = {};
  str.replace(pattern, function(key) {
    !obj[key] ? obj[key]=1 : obj[key]++;
  });
  return obj;
}
console.log(count('  h  el  lo wor  ld  '));
