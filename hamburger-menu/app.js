const hamberGur = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const menuItem = document.querySelectorAll(".menu-item");
console.log(menuItem);
hamberGur.addEventListener("click", function () {
  navbar.classList.toggle("change");
});

menuItem.forEach(function (item) {
  item.addEventListener("click", function () {
    navbar.classList.toggle("change");
  });
});
