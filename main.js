//change background-color when scrolled
const navbar = document.querySelector(".nav");
const navMenus = document.getElementById("navMenu");
window.onscroll = () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
        navMenus.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        navMenus.classList.remove("scrolled");
    }
};

//multiple text typing animation
var typed = new Typed(".typing", {
    strings: ["Mobile Developer", "Web Developer"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true,
});

//Menu show hidden
const navMenu = document.getElementById("navMenu"),
    navOpen = document.getElementById("navOpen"),
    navClose = document.getElementById("navClose"),
    navLink = document.querySelectorAll(".navLink");

if (navOpen) {
    navOpen.addEventListener("click", () => {
        navMenu.classList.add("navShow");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("navShow");
    });
}

navLink.forEach((n) =>
    n.addEventListener("click", () => navMenu.classList.remove("navShow"))
);

//Tab Index navigation in 'About Page'
const tabLink = document.querySelectorAll(".tab-links");
const contents = document.querySelectorAll(".contents");

tabLink.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabLink.forEach((tab) => {
            tab.classList.remove("active-tab");
        });
        tab.classList.add("active-tab");
        contents.forEach((content) => {
            content.classList.remove("active-content");
        });
        contents[index].classList.add("active-content");
    });
});

//skill accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//Swiper navigation project
let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

// Show scroll up
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll-up");
    else scrollUp.classList.remove("show-scroll-up");
}

window.addEventListener("scroll", scrollUp);
