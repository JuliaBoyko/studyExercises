function sumArgs() {
  arguments.myReduce = [].reduce;
  return arguments.myReduce(function(a, b) {
    return a + b;
  }, 0);
}

function sumArgsCall() {
  var sum = function(a, b) {
    return a + b;
  };
  return [].reduce.call(arguments, sum, 0);
}

function sumArgsApply() {
  var sum = function(a, b) {
    return a + b;
  };
  var arr = [sum, 0];
  return [].reduce.apply(arguments, arr);
}

function sumArgsNewEcma(...args) {
  return args.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sumArgs(1, 2, 3));
console.log(sumArgsCall(1, 2, 3));
console.log(sumArgsApply(1, 2, 3));
console.log(sumArgsNewEcma(1, 2, 3));
