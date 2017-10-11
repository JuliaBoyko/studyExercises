var countChar = function(str, symbol) {
  var count = 0;
  var i = 0;
  while (i < str.length) {
    if (str.charAt(i) == symbol)
      count++;
    i++;
  }
  return count;
};

alert(countChar("coBuntBb", "B"));
