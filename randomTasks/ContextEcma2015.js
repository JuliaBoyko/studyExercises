let add = (a, b) => a + b;

let obj = {
  value: 1
};

obj.double = function() {
  var help = () => {
    this.value = add(this.value, this.value);
  }
  help();
};

obj.double();
document.writeln(obj.value);
