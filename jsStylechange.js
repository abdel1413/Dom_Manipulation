// Using Js to manipulate the style of an element through
//the element’s style property
let para = document.getElementById("para");
para.style.color = "green";
let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function () {
  let none = document.getElementById("none");
  if (none.style.display === "none") {
    none.style.display = "block";
    none.style["font-style"] = "italic";
    none.style["font-weight"] = "bold";
    btn.innerHTML = "Close it!";
  } else {
    none.style.display = "none";
    btn.innerHTML = "click here to see it!";
  }
});

//note: for the syle properties which have hiphen btw them, we
// access them using like the way we access arrays using index
// but here we pass a string not a number

/**
 * p > a {…} applies the given styles
 *  to all <a> tags that are direct children of <p> tags.
 *  p a {…} applies to all <a> tags inside <p> tags,
 * whether they are direct or indirect children.
 */
