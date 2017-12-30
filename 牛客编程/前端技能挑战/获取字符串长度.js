//[题目连接](https://www.nowcoder.com/practice/e436bbc408744b73b69a8925fac26efc?tpId=2&tqId=10858&rp=1&ru=/ta/front-end&qru=/ta/front-end/question-ranking)
function strLength(s, bUnicode255For1) {
  if (bUnicode255For1 === true) {
    return s.length;
  } else {
    var length = 0;
    for (var i in s) {
      if (s.charCodeAt(i) > 255) {
        length += 2;
      } else {
        length +=1;
      }
    }
    return length;
  }
}
strLength('hello world, 牛客', false);
