var sum = function(a, b) {
  return a + b;
};
  
function sumArgs() {
  arguments.myReduce = [].reduce;
  return arguments.myReduce(sum, 0);
}

function sumArgsBind() {
  return [].reduce.bind(arguments, sum, 0)();
}

function sumArgsCall() {
  return [].reduce.call(arguments, sum, 0);
}

function sumArgsApply() {
  var arr = [sum, 0];
  return [].reduce.apply(arguments, arr);
}

function sumArgsNewEcma(...args) {
  return args.reduce(sum);
}

console.log(sumArgs(1, 2, 3));
console.log(sumArgsBind(1, 2, 3));
console.log(sumArgsCall(1, 2, 3));
console.log(sumArgsApply(1, 2, 3));
console.log(sumArgsNewEcma(1, 2, 3));




