
function average(inputArray){
var sum = 0;
var length = inputArray.length;
var avg = 0;
  for(var i= 0; i < inputArray.length; i++){
       sum += inputArray[i];
  }
  avg = sum/length;
  console.log("average of "+avg)

return;
}
var test=[1,2,3,4];
average(test);