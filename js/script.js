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

document.addEventListener("DOMContentLoaded", function () {
  // Array of words to cycle through
  const words = [
    "Working Hard",
    "Achieving Excellence",
    "Committed to Quality",
    "Innovating Daily",
  ];

  let currentWordIndex = 0; // Start with the first word
  const textElement = document.querySelector(".index-main-link h2"); // Target the h2 element

  function changeText() {
    // Remove the animation class to reset the animation
    textElement.classList.remove("animate-text");

    // Trigger reflow to reset the animation
    void textElement.offsetWidth;

    // Add the animation class back
    textElement.classList.add("animate-text");

    // Set the new text from the array
    textElement.textContent = words[currentWordIndex];

    // Move to the next word
    currentWordIndex = (currentWordIndex + 1) % words.length; // Loops back to the first word after the last one
  }

  // Set initial text and start cycling every 3 seconds (3000ms)
  changeText();
  setInterval(changeText, 7000); // Change text every 3 seconds
});
