function average(intAverage){
  var x = intAverage[0];

  for(var i= 0; i < intAverage.length; i++){
       x += intAverage[i];
       return x;
  }
  console.log("average of " + (x/intAverage.length));
}
