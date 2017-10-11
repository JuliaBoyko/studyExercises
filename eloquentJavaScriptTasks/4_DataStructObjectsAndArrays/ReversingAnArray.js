var reverseArray = function() {
  var newArr = [];
  var i = arguments[0].length;
  while (i != 0) {
    newArr.push(arguments[0][i - 1]);
    i--;
  }
  return newArr;
}

var reverseArrayInPlace = function() {
  arrayValue = [];
  var i = arguments[0].length;
  while (i != 0) {
    arrayValue.push(arguments[0][i - 1]);
    i--;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
