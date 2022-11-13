const menubtn = document.querySelector(".menu-btn");
const closebtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
function toggleMenu() {
    menu.classList.toggle("menu-open");
}
menubtn.addEventListener("click", toggleMenu);
closebtn.addEventListener("click", toggleMenu);
