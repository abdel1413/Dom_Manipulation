/**
 *
 * @param {*} node
 * @param {*} string
 * @returns
 *
 * Note: each DOM node object has a nodeType property,
 * which contains a code (number) that identifies the type of node
 *
 *  Elements have code 1, which
 *  defines as the constant property Node
 *
 * ELEMENT_NODE. Text nodes, representing a section
 *  of text in the document,
 *  get code 3 (Node.TEXT_NODE).
 *
 * Comments have code 8 (Node.COMMENT_NODE).
 */

function talkAbout(node, string) {
  if (node.nodeType === node.ELEMENT_NODE) {
    for (let child of node.childNode) {
      if (talkAbout(child, string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType === node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talkAbout(document.body, "book")); //true

let a = document.getElementsByTagName("a");
console.log(a);

//accessing the attributes
let ostrich = document.getElementById("ostrich");
console.log(ostrich);
// -> <img id="ostrich" src="./img/ostrich.png _files/images(11).png" alt="photo">
console.log(ostrich.src);
// -> http://127.0.0.1:5500/img/ostrich.png%20_files/images(11).png'
console.log(ostrich.alt); //-> 'photo'

//NOTE: The nodeValue property of a text
//node holds the string of text that it represents.
