const headerEl = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    headerEl.classList.add("header-scrolled");
  } else {
    headerEl.classList.remove("header-scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "../images/gasstation1.jpg",
    "../images/gasstation2.jpg",
    "../images/gasstation3.jpg",
  ];
  let current = 0;
  const mainDiv = document.querySelector(".index-main");

  function changeBackground() {
    mainDiv.style.setProperty("--bg-image", `url(${images[current]})`);
    current = (current + 1) % images.length;
  }
  changeBackground();
  setInterval(changeBackground, 7000);
});

document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Working Hard",
    "Achieving Excellence",
    "Committed to Quality",
    "Innovating Daily",
  ];
  let currentWordIndex = 0;
  const textElement = document.querySelector(".index-main-link h2");
  function changeText() {
    textElement.classList.remove("animate-text");
    void textElement.offsetWidth;
    textElement.classList.add("animate-text");
    textElement.textContent = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }
  changeText();
  setInterval(changeText, 7000);
});
