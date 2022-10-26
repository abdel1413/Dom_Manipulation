function byTagName(node, tagName) {
  let found = [];
  tagName = tagName.toUpperCase();
  function explore(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];
      //   console.log("child", child);
      //   console.log("nodeType", child.nodeType);
      //   console.log("document elem", document.ELEMENT_NODE);
      //   console.log(child.nodeName);

      if (child.nodeType == document.ELEMENT_NODE) {
        if (child.nodeName === tagName) {
          found.push(child);
        }
        explore(child);
      }
    }
  }

  explore(node);

  return found;
}

console.log(byTagName(document.body, "h1"));
console.log(document.body);
console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span"));
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span"));
console.log(byTagName(para, "span").length);
// →
