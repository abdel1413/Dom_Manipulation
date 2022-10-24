function getBoundingRect() {
  let container = document.getElementById("container");

  const rect = container.getBoundingClientRect();

  document.getElementById("demo").innerHTML =
    "Left: " +
    rect.left.toFixed() +
    " Top: " +
    rect.top.toFixed() +
    "Height: " +
    rect.height +
    " Width: " +
    rect.width;

  " X: " + rect.x + " Y: " + rect.y;
}
