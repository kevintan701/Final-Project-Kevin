// JavaScript for Kevin's Final Project - THE.LAB.701 website

// Function to toggle the theme
function applyTheme() {
    const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';

    document.body.classList.toggle('dark-theme', isDarkTheme);

    // Helper function to change image source if the element exists
    const updateImageSource = (element, darkSrc, lightSrc) => {
        if (element) {
            element.src = isDarkTheme ? darkSrc : lightSrc;
        }
    };

    // Set the source for your images based on the theme
    updateImageSource(logoWordMarkHome, 'medias/Logo_Word_Mark_white.png', 'medias/Logo_Word_Mark.png');
    updateImageSource(logoWordMarkMenu, 'medias/Logo_Word_Mark_white.png', 'medias/Logo_Word_Mark.png');
    updateImageSource(logoWordMarkMemory, 'medias/Logo_Word_Mark_white.png', 'medias/Logo_Word_Mark.png');
    updateImageSource(logoWordMarkAbout, 'medias/Logo_Word_Mark_white.png', 'medias/Logo_Word_Mark.png');
    updateImageSource(logoMarkHome, 'medias/Lab_Logo_white.svg', 'medias/Lab_Logo.svg');
    updateImageSource(logoMarkAbout, 'medias/Lab_Logo_white.svg', 'medias/Lab_Logo.svg');
}

// Function to toggle the theme and store user preference
function toggleTheme() {
    const isDarkTheme = !document.body.classList.contains('dark-theme');
    localStorage.setItem('isDarkTheme', isDarkTheme);
    applyTheme();
}

document.addEventListener('DOMContentLoaded', applyTheme);


// Select the logo elements
const logoWordMarkHome = document.querySelector("#logo-word-mark-home");
const logoMarkHome = document.querySelector("#logo-mark-home");
const logoWordMarkMenu = document.querySelector("#logo-word-mark-menu");
const logoWordMarkMemory = document.querySelector("#logo-word-mark-memory");
const logoWordMarkAbout = document.querySelector("#logo-word-mark-about");
const logoMarkAbout = document.querySelector("#logo-mark-about");

// Event listener for toggling theme on logo click
if (logoWordMarkHome) {
    logoWordMarkHome.addEventListener("click", toggleTheme);
}


if (logoWordMarkMenu) {
    logoWordMarkMenu.addEventListener("click", toggleTheme);
}

if (logoWordMarkMemory) {
    logoWordMarkMemory.addEventListener("click", toggleTheme);
}

if (logoWordMarkAbout) {
    logoWordMarkAbout.addEventListener("click", toggleTheme);
}

if (logoMarkHome) {
    logoMarkHome.addEventListener("click", toggleTheme);
}

if (logoMarkAbout) {
    logoMarkAbout.addEventListener("click", toggleTheme);
}
// JavaScript to handle hover and focus events for image source switching and video popup display

// Function to change image source
function changeImageSource(element, newSrc) {
    const originalSrc = element.src;
    element.addEventListener('mouseover', () => {
        element.src = newSrc;
    });
    element.addEventListener('mouseout', () => {
        element.src = originalSrc;
    });
    element.addEventListener('focus', () => {
        element.src = newSrc;
    });
    element.addEventListener('blur', () => {
        element.src = originalSrc;
    });
}

// Implement the change on each memory image
changeImageSource(document.getElementById('memory-1'), 'medias/memory-1-1.JPG');
changeImageSource(document.getElementById('memory-2'), 'medias/memory-2-1.JPG');
changeImageSource(document.getElementById('memory-3'), 'medias/memory-3-1.JPG');
changeImageSource(document.getElementById('memory-4'), 'medias/memory-4-2.JPG');
changeImageSource(document.getElementById('memory-5'), 'medias/memory-5-2.JPG');
changeImageSource(document.getElementById('memory-6'), 'medias/memory-6-1.JPG');

// Function to create and display a video player overlay with accessible close button
function setupVideoPopup(id, videoSrc) {
    const imgElement = document.getElementById(id);
    imgElement.addEventListener('click', () => {
        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            position: fixed;
            top: 10%;
            left: 15%;
            width: 70%;
            height: 70%;
            background-color: rgba(0, 0, 0, 0.85);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
        `;
        videoContainer.innerHTML = `
            <div style="position: relative; width: 100%; height: 100%;">
                <video src="${videoSrc}" width="100%" height="100%" controls autoplay style="border-radius: 10px;"></video>
                <button aria-label="Close video" onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 10px; right: 10px; font-size: 16px; color: white; background-color: #ff0000; border: none; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer;" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">&times;</button>
            </div>
        `;
        document.body.appendChild(videoContainer);
        // Automatically focus the close button when the video is displayed
        const closeButton = videoContainer.querySelector('button');
        closeButton.focus();
        closeButton.onfocus = () => closeButton.style.outline = '2px solid cyan';
        closeButton.onblur = () => closeButton.style.outline = 'none';
    });
}

// Implement video popups for each image
setupVideoPopup('memory-1', 'medias/video-1.mp4');
setupVideoPopup('memory-2', 'medias/video-1.mp4');
setupVideoPopup('memory-3', 'medias/video-1.mp4');
setupVideoPopup('memory-4', 'medias/video-1.mp4');
setupVideoPopup('memory-5', 'medias/video-1.mp4');
setupVideoPopup('memory-6', 'medias/video-1.mp4');




// Select all logo elements for hover and focus effects
const logoItems = document.querySelectorAll("#logo-word-mark-home, #logo-word-mark-menu, #logo-word-mark-memory, #logo-word-mark-about, #logo-mark-home, #logo-mark-about");
logoItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("item-hover");
    });
    item.addEventListener("mouseleave", () => {
        item.classList.remove("item-hover");
    });
    item.addEventListener("focus", () => {
        item.classList.add("item-hover");
    });
    item.addEventListener("blur", () => {
        item.classList.remove("item-hover");
    });
});




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
if (closeMenuBtn) {
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


