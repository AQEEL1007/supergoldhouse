// Ensure that the element with ID 'gold-rate' and class 'shape' exists before calling the mover function
const goldRateShape = document.querySelector("#gold-rate .shape");
if (goldRateShape) {
    mover(goldRateShape, 0.7);
}

