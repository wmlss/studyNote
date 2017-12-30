function bisection(arr){
  if(arr.length<=1){return arr;}
  var mid=Math.floor(arr.length/2);
  var pivot=arr.splice(mid, 1)[0];
  var left=[];
  var right=[];

  for(var i=0;i<arr.length;i++){
      if(arr[i]<=pivot){
          left.push(arr[i]);
      }
      else{
          right.push(arr[i]);
      }
  }
  print(quickSort(left).concat([pivot],quickSort(right)));
}

for(let i=0; i<3; i++) {
  setTimeout(()=> {
    console.log(i++);
  }, 1000)
}
