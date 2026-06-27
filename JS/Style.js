const hamMenu = document.querySelector(".ham-menu");
const offscreenMenu = document.querySelector(".off-screen-menu");
const closeMenu = document.querySelector(".close-menu");

hamMenu.addEventListener("click", () => {
    offscreenMenu.classList.add("active");
    hamMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    offscreenMenu.classList.remove("active");
    hamMenu.classList.remove("active");
});