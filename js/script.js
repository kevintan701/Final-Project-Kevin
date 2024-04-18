// JavaScript for Kevin's Final Project - THE.LAB.701 website

// Function to toggle the theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');

    // Set the source for your images based on the theme
    logoWordMarkHome.src = isDarkTheme ? 'medias/Logo_Word_Mark_white.png' : 'medias/Logo_Word_Mark.png';
    logoMarkHome.src = isDarkTheme ? 'medias/Lab_Logo_white.svg' : 'medias/Lab_Logo.svg';

}
// Select the logo elements
const logoWordMarkHome = document.querySelector("#logo-word-mark-home");
const logoMarkHome = document.querySelector("#logo-mark-home");

// Event listener for toggling theme on logo click
if (logoWordMarkHome) {
    logoWordMarkHome.addEventListener("click", toggleTheme);
}

if (logoMarkHome) {
    logoMarkHome.addEventListener("click", toggleTheme);
}

const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const gotoMenuBtn = document.querySelector("#navigation-arrow-menu");
const gotoExploreBtn = document.querySelector("#navigation-arrow-explore");
const gotoAboutBtn = document.querySelector("#navigation-arrow-about");
const gotoMemoryArrowLeft = document.querySelector("#left-arrow-memories");
const gotoAboutArrowRight = document.querySelector("#right-arrow-about");
const gotoMenuArrowLeft = document.querySelector("#left-arrow-menu");
const gotoMemoryArrowRight = document.querySelector("#right-arrow-memories");


// Toggle mobile menu and blur content on hamburger button click
hamburgerBtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
    document.querySelector('#maincontent').classList.toggle('content-blur');
    document.querySelector('#hamburger-btn').classList.toggle('content-blur');
    document.querySelector('#logo-mark-about').classList.toggle('content-blur');
});


// Close mobile menu on close button click
if (closeMenuBtn){
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
}

// Go to menu page on arrow click
if (gotoMenuBtn) {
    gotoMenuBtn.addEventListener("click", () => window.location.href = "menu.html");
}


// Go to explore page on arrow click
if (gotoExploreBtn) {
    gotoExploreBtn.addEventListener("click", () => window.location.href = "memory.html");
}

// Go to about page on arrow click
if (gotoAboutBtn) {
    gotoAboutBtn.addEventListener("click", () => window.location.href = "about.html");
}

// Go to memories page on arrow click
if (gotoMemoryArrowLeft) {
    gotoMemoryArrowLeft.addEventListener("click", () => window.location.href = "memory.html");
}


// Go to about page on arrow click
if (gotoAboutArrowRight) {
    gotoAboutArrowRight.addEventListener("click", () => window.location.href = "about.html");
}

// Go to menu page on arrow click
if (gotoMenuArrowLeft) {
    gotoMenuArrowLeft.addEventListener("click", () => window.location.href = "menu.html");
}


// Go to memories page on arrow click
if (gotoMemoryArrowRight) {
gotoMemoryArrowRight.addEventListener("click", () => window.location.href = "memory.html");
}
