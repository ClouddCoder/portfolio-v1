let currentKnownScrollPosition = 0;
let lastKnownScrollPosition = 0;
const header = document.querySelector("header");
const body = document.querySelector("body");

// Hides header on scroll down and shows on scroll up.
document.addEventListener("scroll", () => {
  currentKnownScrollPosition = window.scrollY;

  if (currentKnownScrollPosition > lastKnownScrollPosition) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastKnownScrollPosition = currentKnownScrollPosition;
});

window.onresize = function () {
  if (window.innerWidth > 991) {
    body.classList.remove("blur");
  }
};

// Scroll animation.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // intersectionRatio works better than isIntersecting, it avoids toggling the class multiple times.
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
