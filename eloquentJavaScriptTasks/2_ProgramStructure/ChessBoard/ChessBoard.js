var chessBoard = document.getElementById("ChessBoard");
var n = 8;
var m = 8;

for (var i = 0; i < n; i++) {
  var span = document.createElement("span");
  var str = "";
  for (var j = 0; j < m; j++) {
    if (i % 2 == 0) {
      str += j % 2 == 0 ? "#" : "&nbsp";
    } else {
      str += j % 2 == 0 ? "&nbsp" : "#";
    }
  }
  span.innerHTML = "<br>" + str;
  chessBoard.appendChild(span);
}
