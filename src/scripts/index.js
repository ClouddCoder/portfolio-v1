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
const observer = new IntersectionObserver(
  // The entries is a list of the observed elements that have crossed the threshold.
  (entries) => {
    entries.forEach((entry) => {
      // intersectionRatio works better than isIntersecting, it avoids toggling the class multiple times.
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: [0.5, 1],
  },
);

// Declares what to observe, and observes its properties.
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
