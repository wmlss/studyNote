// var str = readline();
var str="(()())";
var record = [1];
var res = 0;
var totalNum = 0;
for (var i=0; i<str.length-1; i++) {
	if (str[i] == str[i+1] && str[i] == '(') {
		record[record.length-1]++;
	} else {
		if (record[record.length-1] != 1) {
			record.push(1);
		}
	}
}
for (var i in record) {
	totalNum += record[i] * 2;
}
if (totalNum > str.length) {
	record[record.length-1] = 0;
}
for (var i in record) {
	if (record[i] != 0) {
		var num = record[i];
		var partRes = 1;
		for (var j=1; j<=num; j++) {
			partRes = partRes*j;
		}
		res += partRes;
	}
}
console.log(res);
// print(res);
