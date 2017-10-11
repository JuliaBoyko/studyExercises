var arr = [1, 2, 3, 4];
var start = 0;

var sum = arr.reduce(function(arg1, arg2) {
  return arg1 + arg2;
}, start);

alert("sum = " + sum);
