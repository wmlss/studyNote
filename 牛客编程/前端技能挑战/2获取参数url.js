// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组

//注意这里最后返回的是url参数名为key的数组

var url = 'http://www.nowcoder.com?key=ab&key=2&key=-3a&test=4#hehe'
function getVal(sUrl, sKey) {
  // var pattern = /(\w+)=([^=&#]*)/ig;
  var pattern = /\??(\w+)=([^=&#]+)&?/g;//这样更好可以匹配负数
  var params = {};
  var t = '';
  sUrl.replace(pattern, function(a, key, val) {
    t = params[key];
    if (params[key] !== void 0) {
      params[key] = [].concat(t, val);
    } else {
      //避免key只有一个值却返回数组
      params[key] = val;
    }
  });
  if (sKey !== void 0) {
   return params[sKey] || '';
  } else {
   return params;
  }
}

console.log(getVal(url));
//别人的参考 来源：牛客网
// 链接：https://www.nowcoder.com/questionTerminal/a3ded747e3884a3c86d09d88d1652e10


function getUrlParam(sUrl,sKey){
    var result = {};
    sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
        if(result[k] !== void 0){
            var t = result[k];
            result[k] = [].concat(t,v);
        }else{
            result[k] = v;
        }
    });
    if(sKey === void 0){
        return result;
    }else{
        return result[sKey] || '';
    }
}
