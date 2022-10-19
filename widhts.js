let widths = document.getElementsByTagName("p");
console.log(widths);

console.log("offsetwidth", widths[0].offsetWidth);
console.log("offset heigh", widths[0].offsetHeight);
console.log("cliendWidth", widths[0].clientWidth);
console.log("clientHeight", widths[0].clientHeight);

//NOTE: offsetwidth and offsetHeight  give the size of
// the element including "border and padding"
//while clientWidth and clientHeight giv only the space or size not
// including border and padding.

//the best way to get precise "size and position" of an element
//is to use getBoundingClientRect method
//it returns size and position and an "DOMRect object" with eight properties such as:
//top, bottom, left, right,pageXoffset, pageYoffset, width and height

function time(name, action) {
  let startTime = Date.now();
  action();
  console.log(name, " took", Date.now() - startTime, "ms");
}

time("naive", () => {
  let target = document.getElementById("one");
  console.log(target);
  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode("X"));
  }
}); //naive  took 371 ms

time("clever", function () {
  let target = document.getElementById("two");
  console.log("target1", target);
  target.appendChild(document.createTextNode("YYYYY"));
  console.log("targeAppend", target);
  console.log("target offset", target.offsetWidth / 5);
  console.log("target offset/5", target.offsetWidth / 5);
  let total = Math.ceil(2000 / (target.offsetWidth / 5));
  console.log("tot", total);
  target.firstChild.nodeValue = "Y".repeat(total);
  console.log("tag firstnode", target.firstChild.nodeValue);
});
// clever  took 7 ms
