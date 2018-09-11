function isEven(num){
  return num % 2 == 0;
}

var tenIsEven = isEven(10);
var elevenIsEven = isEven(11);

console.log("Ten is even: " + tenIsEven);
console.log("Eleven is even: " + elevenIsEven);