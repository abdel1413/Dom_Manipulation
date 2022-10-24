let b = document.getElementsByTagName("button")[0];
b.addEventListener(onclick, myFunction());

function myFunction() {
  window.scrollBy(100, 100);
  alert(
    "pageXOffset: " + window.pageXOffset + "pageYOffset: " + window.pageYOffset
  );
}
