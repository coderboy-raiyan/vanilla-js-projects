const track = document.querySelector(".track");
const myFakeImg = document.querySelector(".left-side-img img");
const mainImg = document.querySelector(".main-image");
myFakeImg.addEventListener("mousemove", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  myFakeImg.style.cursor = "zoom-in";
  mainImg.style.visibility = "visible";
  console.log(x, y);
  mainImg.style.transformOrigin = `${x}px ${y}px `;
  mainImg.style.transform = "scale(2)";
});

myFakeImg.addEventListener("mouseout", function () {
  mainImg.style.visibility = "hidden";
});
