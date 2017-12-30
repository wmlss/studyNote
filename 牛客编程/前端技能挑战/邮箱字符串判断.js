//[题目链接](https://www.nowcoder.com/practice/c72b2b5472704d4a98597cb74b0257a7?tpId=2&tqId=10859&rp=1&ru=%2Fta%2Ffront-end&qru=%2Fta%2Ffront-end%2Fquestion-ranking&tPage=1)
function isAvailableEmail(sEmail) {
  var pattern = /^(\w)+(\.\w+)*@(\w)+(\.\w+)+$/;
  return pattern.test(sEmail);
}
console.log(isAvailableEmail('www.244964496@qq'));
