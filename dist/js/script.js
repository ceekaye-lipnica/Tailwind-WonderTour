/* TOGGLE */
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".mobile-nav");
const circle = document.querySelector(".circle-toggle__menu");
const circleNav = document.querySelector(".mobile-contact");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
	toggleMenu.classList.toggle("open");
	mobileNav.classList.toggle("open");
	header.classList.toggle("open");

	circle.classList.remove("open");
	circleNav.classList.remove("open");
});

/* CIRCLE TOGGLE */
circle.addEventListener("click", () => {
	circle.classList.toggle("open");
	circleNav.classList.toggle("open");

	toggleMenu.classList.remove("open");
	mobileNav.classList.remove("open");
});

/* LINKS */
const links = document.querySelectorAll(".drop-item h4");
links.forEach((baba) => {
	baba.addEventListener("click", () => {
		baba.nextElementSibling.classList.toggle("open");
		baba.querySelector("i").classList.toggle("open");
	});
});

/* HORIZON TAB */
const horizonNav = document.querySelectorAll(".horizon-tab__link");
const horizonContent = document.querySelectorAll(".horizon-tab-content");

horizonNav.forEach((horizon) => {
	horizon.addEventListener("click", () => {
		removeActiveStar();
		horizon.classList.add("active");
		const activeContent = document.querySelector(`#${horizon.id}-content`);
		removeActiveContent();
		activeContent.classList.add("active");
	});
});

function removeActiveStar() {
	horizonNav.forEach((horizon) => {
		horizon.classList.remove("active");
	});
}

function removeActiveContent() {
	horizonContent.forEach((horizon) => {
		horizon.classList.remove("active");
	});
}

// Get the button
let mybutton = document.getElementById("roll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 600) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
