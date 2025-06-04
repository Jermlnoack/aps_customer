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

  // Set initial image and begin slideshow
  changeBackground();
  setInterval(changeBackground, 7000);
});
