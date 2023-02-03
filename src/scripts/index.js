let currentKnownScrollPosition = 0;
let lastKnownScrollPosition = 0;
const header = document.querySelector("header");

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

// Scroll animation.
const oberserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.35 },
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => oberserver.observe(el));
console.log(hiddenElements);
