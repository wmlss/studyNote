function getValue (keyName) {
  var cookie = document.cookie;
  if (!cookie) {
    return '';
  }
  var arr = cookie.split(';');
  for (var i in arr) {
    var pattern = /(\w+)=(\w+)/;
    var res = arr[i].match(pattern);
    console.log(res);
    var key = res[1];
    if (key.trim() == keyName.trim()) {
      return res[2];
    }
  }
  return '';
}
getValue('age');
