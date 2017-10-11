var sum = function() {
  var count = 0;
  var i = 0;
  while (i < arguments[0].length) {
    count += arguments[0][i];
    i++;
  }
  return count;
}

var range = function(start, end, step) {
  var arr = [];
  var startNew = start;
  var endNew = end;

  if (!step) step = 1;

  if (start > end && step < 0) {
    startNew = end;
    endNew = start;
  }
  while (startNew <= endNew) {
    if (start > end) {
      arr.push(endNew);
      endNew += step;
    } else {
      arr.push(startNew);
      startNew += step;
    }
  }
  return arr;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
