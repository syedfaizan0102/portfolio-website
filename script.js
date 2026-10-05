// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});

// ================= MOBILE NAVBAR =================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

/* Toggle Menu */
hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/* Close Menu On Link Click */
navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});