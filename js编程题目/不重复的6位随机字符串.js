function randomStr() {
  var str = Math.random().toString(36).substring(2, 8);
  if (window.record == undefined) {
    window.record = [];
    window.record.push(str);
  } else {
    if (window.record.indexOf(str) == -1) {
      window.record.push(str);
      return str;
    } else {
      return randomStr();
    }
  }
}
