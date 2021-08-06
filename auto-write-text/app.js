let text = "Subcribe My channel";

let index = 0;

function write() {
  document.body.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length - 1) {
    index = 0;
  }
}
setInterval(write, 100);
