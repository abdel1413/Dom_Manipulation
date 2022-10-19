let para = document.getElementsByTagName("p");
for (let p of Array.from(para)) {
  if (p.getAttribute("data-classified") == "secrete") {
    p.remove();
  }
}

//Note: the best way to loop and manipulate the getElementByTagName()
//is to use Array.from()
