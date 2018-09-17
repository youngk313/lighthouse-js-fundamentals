//this function will find all of the denominations of currency needed
//for the change
function change_check(num){
  var num_hold = num;
  var denoms = Array(9);
  for(var i = 0; i < 9; i++){
    denoms[i] = 0;
  }
  //checks to see how many twenty and ten dollar bills are needed
  if(num_hold % 1000 != num_hold){
    var tens = Math.floor(num/1000);
    if(tens % 2 == 0){
      denoms[0] = tens / 2;
    }else{
      while(tens > 1){
      tens -= 2;
      denoms[0] += 1;
    }
    denoms[1] = 1;
    }
    num_hold = num_hold - denoms[0] * 2000 - denoms[1] * 1000;
  }
  //checks to see how many five dollar bills are needed
  if(num_hold % 500 != num_hold){
    denoms[2] = Math.floor(num_hold / 500)
    num_hold = num_hold - denoms[2] * 500;
  }

  //checks to see how many twoonies and loonies are needed
  if(num_hold % 100 != num_hold){
    var ones = Math.floor(num_hold / 100);
    if(ones % 2 == 0){
      denoms[3] = ones / 2;
    }else{
      while(ones > 1){
      ones -= 2;
      denoms[3] += 1;
      }
      denoms[4] = 1;
    }
    num_hold = num_hold - denoms[3] * 200 - denoms[4] * 100;
  }
  //checks to see how many quarters are needed
  if(num_hold % 25 != num_hold){
    denoms[5] = Math.floor(num_hold / 25)
    num_hold = num_hold - denoms[5] * 25;
  }
  //checks to see how many dimes are needed
  if(num_hold % 10 != num_hold){
    denoms[6] = Math.floor(num_hold / 10)
    num_hold = num_hold - denoms[6] * 10;
  }
  //checks to see how many nickels are needed
  if(num_hold % 5 != num_hold){
    denoms[7] = Math.floor(num_hold / 5)
    num_hold = num_hold - denoms[7] * 5;
  }
  denoms[8] = num_hold;
  return denoms;
}



var calculateChange = function(total, cash){
  var change = cash - total;
  var currency = change_check(change);
  var final_change = Object();
  if(currency[0] > 0){
    final_change.twentyDollar = currency[0];
  }
  if(currency[1] > 0){
    final_change.tenDollar = currency[1];
  }
  if(currency[2] > 0){
     final_change.fiveDollar = currency[2];
  }
  if(currency[3] > 0){
    final_change.twoDollar = currency[3];
  }
  if(currency[4] > 0){
    final_change.oneDollar = currency[4];
  }
  if(currency[5] > 0){
    final_change.quarter = currency[5];
  }
  if(currency[6] > 0){
    final_change.dime = currency[6];
  }
  if(currency[7] > 0){
    final_change.nickel = currency[7];
  }
  if(currency[8] > 0){
    final_change.penny = currency[8];
  }
  return final_change;
}

console.log(calculateChange(501,1000));
