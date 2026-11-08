const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// ハンバーガークリック
hamburger.addEventListener("click", (e) => {
    menu.classList.toggle("open");
    e.stopPropagation();
});

// メニュー内クリック時は閉じない
menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

// メニュー外クリックで閉じる
document.addEventListener("click", () => {
    menu.classList.remove("open");
});


// スクロールアニメーション
const fadeElems = document.querySelectorAll('.fadein');

const fadeInOnScroll = () => {
  fadeElems.forEach(elem => {
    const rect = elem.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      elem.classList.add('show');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
