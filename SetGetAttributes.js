let para = document.getElementsByTagName("p");
for (let p of Array.from(para)) {
  if (p.getAttribute("data-classified") == "secrete") {
    p.remove();
  }
}
