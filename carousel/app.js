const images = document.querySelector(".imgs");

const img = document.querySelectorAll(".imgs img");
console.log(img);

let i = 0;

function run() {
  i++;
  if (i > img.length - 1) {
    i = 0;
  }
  images.style.transform = `translateX(${-i * 1000}px)`;
}
setInterval(run, 4000);
