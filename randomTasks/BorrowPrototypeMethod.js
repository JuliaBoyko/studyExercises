function printArgs() {
  arguments.join = [].join; // одолжили метод (1)

  var argStr = arguments.join(':'); // (2)

  console.log( argStr ); // сработает и выведет 1:2:3
}

printArgs(1, 2, 3);

'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {width: w, height: h, title} = options;

console.log(title);  // Меню
console.log(w);      // 100
console.log(h);      // 200

var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// получить максимум из элементов arr
console.log( Math.max.apply(null, arr) ); // 5