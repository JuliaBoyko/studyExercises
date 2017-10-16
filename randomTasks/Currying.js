var f = function() {
  return [].slice.call(arguments).reduce(function(a, b) {
    return a + b;
  });
}

var newF = f.bind(null, 1);
console.log(newF(3, 4));
