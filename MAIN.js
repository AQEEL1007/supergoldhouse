// Check if the element with class 'hamburger' exists before assigning the click event handler
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
    hamburger.onclick = function() {
        const navBar = document.querySelector(".nav-bar");
        if (navBar) {
            navBar.classList.toggle("active");
        }
    };
}

// Ensure that menuItems and currentLoc variables are defined
const currentLoc = location.href;
const menuItems = document.querySelectorAll("nav ul a");

// Check if menuItems is not empty before iterating over it
if (menuItems) {
    menuItems.forEach(menuItem => {
        if (menuItem.href === currentLoc) {
            menuItem.className = "active";
        }
    });
}

// Ensure that the element with ID 'gold-rate' and class 'shape' exists before calling the mover function
const goldRateShape = document.querySelector("#gold-rate .shape");
if (goldRateShape) {
    mover(goldRateShape, 0.7);
}

