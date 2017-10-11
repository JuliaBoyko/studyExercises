//["a1","a2"......."] -> [{ "0" : "a1"}, { "1" : "a2"}.....]

var arr = [5, 6, 7];
var newArr = [];

var newArr = arr.reduce(function(previousValue, currentValue, index, array) {
  console.log(previousValue, currentValue, index, array);
  return previousValue.concat(currentValue);
}, []);

console.log(typeof(newArr));
console.log(newArr);
