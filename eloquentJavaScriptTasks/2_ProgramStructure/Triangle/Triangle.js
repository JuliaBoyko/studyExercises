var str = "#";
var div = document.getElementById("triangle");

while (str.length <= 7) {
  var span = document.createElement('span');
  span.innerHTML = "<br>" + str;
  div.appendChild(span);

  console.log(str);
  str += "#";
}