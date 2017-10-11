var arrayToList = function() {
  var arr = arguments[0];
  if (arr.length == 0) return null;
  return {
    value: arr[0],
    rest: arrayToList(arr.slice(1))
  };
}

var listToArray = function() {
  var obj = arguments[0];
  var arr = [];
  arr.push(obj.value);
  while (obj.rest != null) {
    obj = obj.rest;
    arr.push(obj.value);
  }
  return arr;
}

var prepend = function(value, rest) {
  var obj = {
    value: value,
    rest: rest
  };
  return obj;
}

var nth = function(list, target) {
  if (target == 0) {
    return list.value;
  } else {
    return nth(list.rest, target - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
