const toggleBtn = document.getElementById("toggle");

toggleBtn.addEventListener("click", function (e) {
  document.body.classList.toggle("body-dark", e.target.checked);
});
