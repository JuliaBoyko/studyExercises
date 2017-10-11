var every = function(arr, checkFunction) {
  var result = true;
  for (var i = 0; i < arr.length; i++) {
    if (!checkFunction(arr[i])) {
      result = result && false;
    }
  }
  return result;
}

var some = function(arr, checkFunction) {
  for (var i = 0; i < arr.length; i++) {
    if (checkFunction(arr[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
