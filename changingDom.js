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
// REPLACECHILD and insertBefore or inserAfter will just
//remove a node from its current position and place it to
//the new posistion.

function ReplaceImage() {
  let images = document.body.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    console.log(image);
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      console.log(text);
      image.parentNode.replaceChild(text, image);
    }
  }
}
//note: we looped start from the end becz the returned node list
// get updated as the document change so if we start looping
//from the front, removing the first image will cause the list
//to loose its first element so the seconde time the loop
//repeat where i = 1, i will stop bcz the length of the collection is
//now also 1
