function GreaterThanY(inputArray,y) {

var greaterThan = [];

  for(var i=0 ; i < inputArray.length; i++){
    
    if(inputArray[i] > y){
    
      greaterThan.push(inputArray[i]);
    }
  }
   return greaterThan
}