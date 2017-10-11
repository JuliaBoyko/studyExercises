var isEven = function(number) {
  if (number < 0) number *= -1;

  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}

alert(isEven(50));
alert(isEven(75));
alert(isEven(-1));
