var obj = {here: {is: "an"}, object: 2};

var deepEqual = function(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  } else {
    if (typeof obj1 == 'object' && typeof obj2 == 'object') {
      var result = true;
      for (var name in obj1) {
        result = result && deepEqual(obj1[name], obj2[name]);
      }
      return result;
    } else return false;
  }
}

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true