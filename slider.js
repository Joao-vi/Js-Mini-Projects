const change = document.querySelectorAll(".img");
changeBackground(change[0]);
change.forEach((div) => {
  div.addEventListener("click", () => {
    clear();
    changeBackground(div);
  });
});
let prev;
function changeBackground(target) {
  target.className = "change";
}
function clear() {
  change.forEach((div) => {
    div.className = "";
  });
}
