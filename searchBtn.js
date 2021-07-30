const searchBtn = document.querySelector(".search-animation .fa-search");
const searchBar = document.querySelector(".search-bar");
// Events

searchBtn.addEventListener("click", expandSearchBar);

function expandSearchBar() {
  searchBar.classList.toggle("expand");
}
