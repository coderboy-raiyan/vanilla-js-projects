let btn = document.querySelector(".btn");
let container = document.querySelector("#container");

btn.addEventListener("click", function () {
  let notif = document.createElement("div");
  notif.innerHTML = "You clicked me";
  container.appendChild(notif);

  setTimeout(function () {
    notif.remove();
  }, 3000);
});
