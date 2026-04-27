const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav");
const menuClose = document.querySelector(".menu-close");

menuToggle.addEventListener("click", function() {
    menu.classList.add("show");
});
menuClose.addEventListener("click", function() {
    menu.classList.remove("show");
});