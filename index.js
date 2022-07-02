const navBtnElement = document.querySelector("#nav-btn");
const navBtn2Element = document.querySelector("#nav-btn2");
const mobileViewElement = document.querySelector("#mobile-nav");

navBtnElement.addEventListener('click', () => {
  showNav();
});
navBtn2Element.addEventListener("click", () => {
  closeNav();
});

function showNav(){
  mobileViewElement.classList.add("mobile-show");
}
function closeNav() {
  mobileViewElement.classList.remove("mobile-show");
}