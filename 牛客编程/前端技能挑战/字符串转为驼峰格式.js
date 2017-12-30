//[question link](https://www.nowcoder.com/practice/2ded24e34ec34325a62d42d0c8479bae?tpId=2&tqId=10861&tPage=1&rp=1&ru=%2Fta%2Ffront-end&qru=%2Fta%2Ffront-end%2Fquestion-ranking)
function cssStyle2DomStyle(str) {
  var pattern = /([^-]\w+[^-])+/g;
  var arr =  str.match(pattern);
  var result = '';
  for (var i in arr) {
    var part = arr[i].toLowerCase();
    if (i>0) {
      part = part.replace(part[0], part[0].toUpperCase());
    }
    result += part;
  }
  return result;
}
console.log(cssStyle2DomStyle('font-size'));
