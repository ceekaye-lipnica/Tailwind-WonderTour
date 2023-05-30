const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
	mobileNav.classList.toggle("open");
    header.classList.toggle("open");
});


const circle = document.querySelector(".circle-toggle__menu");
const circleNav = document.querySelector(".mobile-contact");
circle.addEventListener("click", () => {
    circle.classList.toggle("open");
    circleNav.classList.toggle("open");
});


const links = document.querySelectorAll(".drop-item h4");
links.forEach((baba) => {
	baba.addEventListener("click", () => {
		baba.nextElementSibling.classList.toggle("open");
		baba.querySelector("i").classList.toggle("open");
	});
});