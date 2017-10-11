var arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
];
var result = arrays.reduce(function(current, next) {
  return current.concat(next);
});

console.log(result);

// → [1, 2, 3, 4, 5, 6]