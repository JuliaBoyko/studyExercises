var add = function(a, b) {
  return a + b;
};

var obj = {
  value: 1
};

obj.double = function() {
  var that = this;
  var help = function() {
    that.value = add(that.value, that.value);
  };
  help();
};

obj.double();
document.writeln(obj.value);
