const burgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".closeBtn");
const mobileNav = document.querySelector(".mobile-nav");




burgerBtn.addEventListener('click', () => {
    mobileNav.classList.add("display");
    burgerBtn.style.display = "none"
    closeBtn.style.display = "block"
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove("display");
    burgerBtn.style.display = "block"
    closeBtn.style.display = "none"
});

