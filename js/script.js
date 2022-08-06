const burgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".closeBtn");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body")


burgerBtn.addEventListener('click', () => {
    mobileNav.classList.add("display");
    burgerBtn.style.display = "none"
    closeBtn.style.display = "block"
    body.style.overflow = "hidden";
    
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove("display");
    burgerBtn.style.display = "block"
    closeBtn.style.display = "none"
    body.style.overflow = "auto";
});

