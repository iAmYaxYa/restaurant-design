const navbarLinks = document.querySelector(".navbar .links");
const toggleMenuBtn = document.querySelector(".navbar .toggle-menu");
const toggleMenuIcon = document.querySelector(".navbar .toggle-menu i");
const navbarLinkItems = document.querySelectorAll(".navbar .links li a");
const navbar = document.querySelector(".navbar");

// FUNCTION TOGGLE LINKS
const toggleLinks = () => {
  navbarLinks.classList.toggle("show");
  toggleMenuIcon.classList.toggle("fa-xmark");
};

// TOGGLE MENU BTN EVENT CLICK
toggleMenuBtn.addEventListener("click", toggleLinks);

// NAVBAR LINK ITEMS EVENT CLICK
navbarLinkItems.forEach((link) => {
  link.addEventListener("click", toggleLinks);
});

// WINDOW SCROLL
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("active-bg");
    return;
  }
  navbar.classList.remove("active-bg");
});
