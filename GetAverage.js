function average(intAverage){
  var x = intAverage[0];

  for(var i= 1; i < intAverage.length; i++){
       x = x+intAverage[i];
       return x;
  }
  var mean = (x/intAverage.length);
  console.log("average of " + mean);
}
