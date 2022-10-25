function count(selectors) {
  return document.querySelectorAll(selectors);
}

console.log("ps ", count("p"));
console.log("spans ", count("span"));
console.log("class animals ", count(".animal"));
console.log("animals inside of p ", count("p .animal"));
console.log("direct child of p ", count("p > .animal"));

/**
 * NOTE:
 * Unlike methods such as getElementsByTagName, the object
 * returned by querySelectorAll is not live. It won’t change
 *  when you change the document. It is still not a real array,
 *  so you still need to call Array.from if you want
 *  to treat it like one.
 */
