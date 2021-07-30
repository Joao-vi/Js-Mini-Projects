const prevCheker = document.querySelector(".prev");
const nextCheker = document.querySelector(".next");
const arrayBar = document.querySelectorAll(".check-bar");

let i = 0;

nextCheker.addEventListener("click", () => {
  if (i >= arrayBar.length) {
    return;
  } else {
    nextOne();
  }
  if (i >= arrayBar.length) {
    nextCheker.style.background = "rgb(146, 146, 146)";
    prevCheker.style.background = "#2d89d3";
  } else {
    nextCheker.style.background = "#2d89d3";
    prevCheker.style.background = "#2d89d3";
  }
});
function nextOne() {
  arrayBar[i].classList.add("complete");
  i++;
}

prevCheker.addEventListener("click", () => {
  if (i <= 0) {
    return;
  } else {
    prevOne();
  }
  if (i == 0) {
    prevCheker.style.background = "rgb(146, 146, 146)";
    nextCheker.style.background = "#2d89d3";
  } else {
    prevCheker.style.background = "#2d89d3";
    nextCheker.style.background = "#2d89d3";
  }
});

function prevOne() {
  arrayBar[i - 1].classList.remove("complete");
  i--;
}
