//your JS code here. If required.
 
function addColors(e) {
  squares.forEach((square) => {
    square.style.backgroundColor = square === e.target ? "#E6E6FA" : "#6F4E37";
  });
}
 
function resetColors() {
  squares.forEach((square) => {
    square.style.backgroundColor = "#E6E6FA";
  });
}
 
const squares = document.querySelectorAll(".square");
 
squares.forEach((e) => {
  e.addEventListener("mouseover", addColors);
  e.addEventListener("mousedown", resetColors);
  e.addEventListener("mouseout", resetColors);
});