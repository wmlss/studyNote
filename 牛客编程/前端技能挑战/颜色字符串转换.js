//[question link](https://www.nowcoder.com/practice/80b08802a833419f9c4ccc6e042c1cca?tpId=2&tqId=10860&tPage=1&rp=1&ru=/ta/front-end&qru=/ta/front-end/question-ranking)
function rgb2hex(sRGB) {
  var pattern = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  var arr = sRGB.match(pattern);
  var color = '#'
  if (!arr) {
    return sRGB;
  }

  for (var i=1; i<arr.length; i++) {
    var num = parseInt(arr[i]);
    if (num<=255 && num>=0) {
      color += (num<16 ? '0'+num.toString(16) : num.toString(16));
    } else {
      return sRGB;
    }
  }
  return color;
}
