var current = "o";
function clicked(me) {
  me.innerText = current;
  if (current == "o") {
    current = "x";
  }
  else {
    current = "o";
  }
}
