let mobileNav = document.querySelector(".mobile_nav_closed");
let menuBtn = document.querySelector(".hamburger_menu");

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle("mobile_nav")
});