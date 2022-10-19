// Using Js to manipulate the style of an element through
//the element’s style property
let para = document.getElementById("para");
console.log(para.style.color);
para.style.color = "green";
let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function () {
  console.log("llisstenddd");
  let none = document.getElementById("none");

  if (none.style.display === "none") {
    none.style.display = "block";
  } else {
    none.style.display = "none";
  }
});
