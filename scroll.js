const elements = document.querySelectorAll("[data-animation]");
const scroll = document.querySelector(".overflow-y");
const screen = document.querySelector(".overflow-y");
scroll.addEventListener("scroll", animation);
let distancePage;
let distanceDiv;
let heightDisplay = screen.offsetHeight;

function animation() {
  console.log(elements[0].getBoundingClientRect().top);
  elements.forEach((el) => {
    if (el.getBoundingClientRect().top < heightDisplay * 1.15) {
      el.classList.add("animation");
    } else if (el.getBoundingClientRect().top > heightDisplay * 1.17) {
      el.classList.remove("animation");
    }
  });
}
