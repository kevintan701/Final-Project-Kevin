// JavaScript for Kevin's Final Project - THE.LAB.701 website

let cart = {};

document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    cartIcon.addEventListener('click', toggleCartDropdown);
    cartCount.addEventListener('click', toggleCartDropdown);

    loadCart();
    updateCartCount();
    updateCartDropdown();
});

function addToCart(product, price) {
    if (cart[product]) {
        cart[product].qty += 1;
    } else {
        cart[product] = { price: price, qty: 1 };
    }
    saveCart();
    updateCartCount();
    updateCartDropdown();
}

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart")) || {};
    updateCartDropdown();
}

function updateCartCount() {
    const count = Object.values(cart).reduce((acc, { qty }) => acc + qty, 0);
    document.getElementById('cart-count').textContent = count;
}

function toggleCartDropdown() {
    const cartDropdown = document.getElementById('cart-dropdown');
    const mainContent = document.querySelector('main');
    const footerContent = document.querySelector('footer');
    if (cartDropdown.style.display === 'block') {
        cartDropdown.style.display = 'none';
        mainContent.style.filter = ''; // Remove blur effect
        footerContent.style.filter = '';
    } else {
        cartDropdown.style.display = 'block';
        mainContent.style.filter = 'blur(4px)'; // Apply blur effect
        footerContent.style.filter = 'blur(4px)';
    }
}

function updateCartDropdown() {
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = ''; // Clear current list

    let total = 0;
    let taotalCups = 0;
    Object.entries(cart).forEach(([product, { qty, price }]) => {
        total += qty * price;
        taotalCups += qty;
        const itemElement = document.createElement('li');
        itemElement.textContent = `${product} - $${price} x ${qty}`;

        const addButton = document.createElement('button');
        addButton.className = "material-symbols-outlined";
        addButton.textContent = "add_circle";
        addButton.onclick = () => addToCart(product, price);

        const removeButton = document.createElement('button');
        removeButton.className = "material-symbols-outlined";
        removeButton.textContent = "do_not_disturb_on";
        removeButton.onclick = () => removeFromCart(product);

        itemElement.appendChild(addButton);
        itemElement.appendChild(removeButton);
        cartItemsList.appendChild(itemElement);
    });
    const cupElement = document.createElement('li');
    cupElement.textContent = `Total Cup: ${taotalCups}`;
    cupElement.style.justifyContent = 'center';

    const totalElement = document.createElement('li');
    totalElement.textContent = `Total: $${total}`;
    totalElement.style.justifyContent = 'center';

    cartItemsList.appendChild(cupElement);
    cartItemsList.appendChild(totalElement);

}

function removeFromCart(product) {
    if (cart[product]) {
        if (cart[product].qty > 1) {
            cart[product].qty--;
        } else {
            delete cart[product];
        }
        saveCart();
        updateCartCount();
        updateCartDropdown();
    }
}

function closeCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    const mainContent = document.querySelector('main');
    const footerContent = document.querySelector('footer');

    cartDropdown.style.display = 'none';
    mainContent.style.filter = ''; // Remove blur effect
    footerContent.style.filter = '';

}

function checkoutCart() {
    console.log('Proceeding to checkout...');
    // Implement checkout functionality or redirection to checkout page here
}


//hamburger menu function
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const mainContent = document.querySelector('main');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const logoAbout = document.getElementById('logo-mark-about'); // This might not exist on all pages

    const hamburgerBtn = document.getElementById("hamburger-btn");
    if (hamburgerBtn && header && mainContent && cartIcon && cartCount) {
        hamburgerBtn.addEventListener("click", () => {
            header.classList.toggle("show-mobile-menu");
            mainContent.classList.toggle('content-blur');
            cartIcon.classList.toggle('content-blur');
            cartCount.classList.toggle('content-blur');
            if (logoAbout) logoAbout.classList.toggle('content-blur'); // Only toggle if exists
            console.log("Hamburger menu toggled. Menu visible:", header.classList.contains("show-mobile-menu"));
        });
    }

    const closeMenuBtn = document.getElementById("close-menu-btn");
    if (closeMenuBtn && hamburgerBtn) {
        closeMenuBtn.addEventListener("click", () => {
            hamburgerBtn.click(); // Reuse the toggle functionality
        });
    }
});



// Navigation link setups
setupNavigation("#navigation-arrow-menu", "menu.html");
setupNavigation("#navigation-arrow-explore", "memory.html");
setupNavigation("#navigation-arrow-about", "about.html");
setupNavigation("#left-arrow-memories", "memory.html");
setupNavigation("#right-arrow-about", "about.html");
setupNavigation("#left-arrow-menu", "menu.html");
setupNavigation("#right-arrow-memories", "memory.html");

// Helper function to setup navigation redirection
function setupNavigation(selector, url) {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener("click", () => {
            window.location.href = url;
        });
    }
}


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
// const logoItems = document.querySelectorAll("#logo-word-mark-home, #logo-word-mark-menu, #logo-word-mark-memory, #logo-word-mark-about, #logo-mark-home, #logo-mark-about");
// logoItems.forEach((item) => {
//     item.addEventListener("mouseenter", () => {
//         item.classList.add("item-hover");
//     });
//     item.addEventListener("mouseleave", () => {
//         item.classList.remove("item-hover");
//     });
//     item.addEventListener("focus", () => {
//         item.classList.add("item-hover");
//     });
//     item.addEventListener("blur", () => {
//         item.classList.remove("item-hover");
//     });
// });







