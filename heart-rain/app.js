function heartRain() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heart.innerHTML = "💙";
  document.body.appendChild(heart);
  setTimeout(function () {
    heart.remove();
  }, 5000);
}
setInterval(heartRain, 300);
