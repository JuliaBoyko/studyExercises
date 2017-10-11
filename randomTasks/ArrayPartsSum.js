var arr = [1, 2, 3, 4, 5];

var getSums = function(arr) {
  return arr.reduce(function(prev, curr) {
    if (prev.length != 0) {
      curr += prev[prev.length - 1];
    }
    prev.push(curr);
    return prev;
  }, []);
}

console.log(getSums(arr));
console.log(getSums([-2, -1, 0, 1]));
//getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
