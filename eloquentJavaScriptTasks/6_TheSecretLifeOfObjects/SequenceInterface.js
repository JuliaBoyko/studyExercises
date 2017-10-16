function Seq() {
  return this.getSeqObj(arguments[0]);
}

Seq.prototype.getSeqObj = function(arr) {
  return arr.reduce(function(prev, curr, index) {
    prev[index] = curr;
    return prev;
  }, {});
};

function ArraySeq(arr) {
  return new Seq(arr);
}

function RangeSeq(start, end) {
  this.arr = this.createArray(start, end);
  return new Seq(this.arr);
}

RangeSeq.prototype.createArray = function(start, end) {
  var arr = [];
  while (start <= end) {
    arr.push(start);
    start++;
  }
  return arr;
};

function logFive() {
  for (var name in arguments[0]) {
    if (name == 5) break;
    console.log(arguments[0][name]);
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 110));
// → 100
// → 101
// → 102
// → 103
// → 104
