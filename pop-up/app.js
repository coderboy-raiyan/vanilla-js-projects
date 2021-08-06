let open = document.querySelector("#open");
let close = document.querySelector("#close");
let popupMain = document.querySelector(".popup-container");

open.addEventListener("click", () => {
  popupMain.classList.add("active");
});
close.addEventListener("click", () => {
  popupMain.classList.remove("active");
});
