let currentKnownScrollPosition = 0;
let lastKnownScrollPosition = 0;
const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  currentKnownScrollPosition = window.scrollY;

  if (currentKnownScrollPosition > lastKnownScrollPosition) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastKnownScrollPosition = currentKnownScrollPosition;
});
