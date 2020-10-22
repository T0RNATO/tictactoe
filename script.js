var current = "o";
var i = 0;
var divs = document.getElementsByTagName("div");
function clicked(me) {
  if(!me.innerText) {
    me.innerText = current;
    if (current == "o") {
      current = "x";
      document.getElementById("t").innerText = "It is x's turn";
    }
    else {
      current = "o";
      document.getElementById("t").innerText = "It is o's turn";
    }
  }
}
function resetall() {
  for (var i = 0; i < 64; i++) {
    divs[i].innerText = "";
  }
}
