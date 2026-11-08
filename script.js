const images = ["cake1.png", "cake2.png", "cake3.png", "cake4.png", "cake5.png"];
const container = document.querySelector(".cake-container");

let index = 0;

const timer = setInterval(() => {
  const img = document.createElement("img");
  img.src = images[index];
  img.className = "cake-img";

  container.appendChild(img);

  requestAnimationFrame(() => {
    img.classList.add("show");
  });

  const oldImgs = container.querySelectorAll(".cake-img");
  if (oldImgs.length > 1) {
    oldImgs[0].remove();
  }

  index++;

  // ★ ここが重要：5枚目を表示したら止める
  if (index === images.length) {
    clearInterval(timer);  // ← 切り替えを止める
  }

}, 400); // ← 切り替え速度は好きに調整してね


// ★ 5秒後にHPへ遷移
setTimeout(() => {
  window.location.href = "home.html";
}, 3000);
