//DOM has "appendChild" which append child at the end of other children
//if there is any.
//it has also "insertBefore"  which two params: 1st param is the
// node to insert and the 2nd param is the node in front of which
// the 1st param is going be.

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // -> [p,p,p]
document.body.insertBefore(paragraphs[2], paragraphs[1]);
//three is removed from its current position
//and placed before two

// we have also replaceChild(firstparam, secondparam)
// firstparam is node that will replace the second param
document.body.replaceChild(paragraphs[2], paragraphs[0]);
//p[0] is removed  and p[1] is placed at its position

//NOTE SINCE IT IS NOT POSSIBLE TO HAVE TWO SAME NODES IN DOM
// REPLACECHILD and insertBefore will just
//remove a node from its current position and place it to
//the new posistion.

function ReplaceImage() {
  let images = document.body.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];

    if (image.alt) {
      let text = document.createTextNode(image.alt);

      image.parentNode.replaceChild(text, image);
    }
  }
}
//note: we looped start from the end becz the returned node list
//  is live (get updated) as the document change so if we start looping
//from the front, removing the first image will cause the list
//to loose its first element so the seconde time the loop
//repeat where i = 1, i will stop bcz the length of the collection is
//now also 1

//we can use a solid collection of node as opposed to the live one
//we can convert the collection to the real array by calling
//Array.from method
let collection = { 0: "zero", 1: "one", 2: "two", length: 3 };
console.log(collection);
let array = Array.from(collection);
console.log(array);
//['zero', 'one', 'two']

console.log(array.map((c) => c.toUpperCase()));
// (3)[("ZERO", "ONE", "TWO")];

//note the collection should always start with 0;

// create a node using document.createElement()mthd
//create a containt using document.createTextNode() mthd

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != "string") {
      node.appendChild(child);
    } else {
      node.appendChild(document.createTextNode(child));
    }
  }
  return node;
}

document
  .getElementById("quote")
  .appendChild(
    elt(
      "footer",
      "-",
      elt("strong", "Karl Popper"),
      ", Preface to the second edition of ",
      elt("em", "The open society and its ennemies"),
      ", 1960"
    )
  );
