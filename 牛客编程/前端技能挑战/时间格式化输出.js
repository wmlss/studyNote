//[题目连接](https://www.nowcoder.com/practice/a789783e7c984f10a0bf649f6d4e2d59?tpId=2&tqId=10857&rp=1&ru=/ta/front-end&qru=/ta/front-end/question-ranking)
function formatDate(date, str) {
  var obj = {
    yyyy: date.getFullYear(),
    yy: date.getYear().toString().slice(-2),
    MM: ('0' + (date.getMonth()+1)).slice(-2),
    M: (date.getMonth()+1).toString().slice(-2),
    dd: ('0' + date.getDate()).slice(-2),
    d: date.getDate().toString().slice(-2),
    HH: ('0' + date.getHours()).slice(-2),
    H: date.getHours().toString().slice(-2),
    hh: ('0' + parseInt(date.getHours())%12).slice(-2),
    h: ('' + parseInt(date.getHours())%12).slice(-2),
    mm: ('0' + date.getMinutes()).slice(-2),
    m: date.getMinutes(),
    ss: ('0' + date.getSeconds()).slice(-2),
    s: date.getMinutes(),
    w: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()],
  }

  var pattern = /([a-z]+)/ig;
  return str.replace(pattern, function(key) {
    return obj[key];
  });
}
console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'));
