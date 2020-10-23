var current = "o";
var i = 0;
function clicked(me) {
  if(!me.innerText) {
    me.innerText = current;
    document.getElementById("t").innerText = "Current turn: " + current;
    if (current == "o") {
      current = "x";
    }
    else {
      current = "o";
    }
  }
}
function resetall() {
  for (var i = 0; i < 64; i++) {
    document.getElementsByTagName("div")[i].innerText = "";
  }
}
