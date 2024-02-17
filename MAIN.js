// Check if the element with class 'hamburger' exists before assigning the click event handler
const hamburger = document.querySelector(".hamburger");
if (hamburger) {
    hamburger.onclick = function() {
        const navBar = document.querySelector(".nav-bar");
        const mapContainer = document.querySelector(".map-container"); // Add this line to select the map container
        if (navBar) {
            navBar.classList.toggle("active");
            // Increase the z-index of the map container when the hamburger menu is active
            if (mapContainer) {
                mapContainer.style.zIndex = navBar.classList.contains("active") ? "-1" : "1";
            }
        }
    };
}


// Ensure that the element with ID 'gold-rate' and class 'shape' exists before calling the mover function
const goldRateShape = document.querySelector("#gold-rate .shape");
if (goldRateShape) {
    mover(goldRateShape, 0.7);
}

