var pile = {
  elements: ["скорлупа", "кожура", "червяк"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log("задать высоту ", value);
  }
};

console.log(pile.height);
// → 3
pile.height = 100;
// →  задать высоту 100
var TextCell = function(){
	this.text = "hhh"
}
Object.defineProperty(TextCell.prototype, "heightProp", {
  get: function() { return this.text.length; },
  set: function(value) { console.log("check",value); this.text = "jj"; }
});

var cell = new TextCell("да\nну");
console.log(cell.heightProp);
// → 2
cell.heightProp = 100;
console.log(cell.heightProp);
// → 2
