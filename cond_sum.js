var conditionalSum = function(values, condition){
  var cond = condition.toLowerCase();
  var sum = 0;
  if(cond == "even"){
    for(var i = 0; i < values.length; i++){
      if(values[i] % 2 == 0){
        sum = sum + values[i];
      }
    }
  } else if(cond == "odd"){
      for(var i = 0; i < values.length; i++){
        if(values[i] % 2 != 0){
          sum = sum + values[i];
      }
    }
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));