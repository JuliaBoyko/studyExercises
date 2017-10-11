var i = 0;
var fizzBuzz = document.getElementById("FizzBuzz");

while (i <= 100) {
  i++;

  var span = document.createElement("span");
  if (i % 5 == 0 && i % 3 == 0) {
    span.innerHTML = "<br>FizzBuzz";
    fizzBuzz.appendChild(span);
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    span.innerHTML = "<br>Fizz";
    fizzBuzz.appendChild(span);
    console.log("Fizz");
  } else if (i % 5 == 0 && i % 3 != 0) {
    span.innerHTML = "<br>Buzz";
    fizzBuzz.appendChild(span);
    console.log("Buzz");
  } else {
    span.innerHTML = "<br>" + i;
    fizzBuzz.appendChild(span);
    console.log(i);
  }
}
