function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("убийственный");
var blackRabbit = new Rabbit("чёрный");
console.log(blackRabbit.type);
// → чёрный

Rabbit.prototype.speak = function(line) {
  console.log("А " + this.type + " кролик говорит '" + line + "'");
};
blackRabbit.speak("Всем капец...");
// → А чёрный кролик говорит ' Всем капец...'

//перезагрузка
Rabbit.prototype.teeth = "мелкие";
console.log(killerRabbit.teeth);
// → мелкие
killerRabbit.teeth = "длинные, острые и окровавленные ";
console.log(killerRabbit.teeth);
// → длинные, острые и окровавленные
console.log(blackRabbit.teeth);
// → мелкие
console.log(Rabbit.prototype.teeth);
// → мелкие

console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true
