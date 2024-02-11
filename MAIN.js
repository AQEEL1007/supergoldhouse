// Ensure that the element with ID 'gold-rate' and class 'shape' exists before calling the mover function
const goldRateShape = document.querySelector("#gold-rate .shape");
if (goldRateShape) {
    mover(goldRateShape, 0.7);
}

$(document).ready(function() {
    // Open and close nav
    $('#navbar-toggle').click(function(e) {
        e.preventDefault();
        $('nav ul').slideToggle();
        $(this).toggleClass('active');
    });

    // Toggle dropdown menus
    $('nav ul li').click(function(e) {
        if ($(this).children('.navbar-dropdown').length > 0) {
            e.preventDefault();
            $(this).children('.navbar-dropdown').slideToggle("slow");
        }
    });

    // Close dropdowns when clicking outside of nav
    $(document).click(function(e) {
        if (!$(e.target).closest('nav').length && !$(e.target).is('#navbar-toggle')) {
            $('nav ul').slideUp("slow");
            $('#navbar-toggle').removeClass('active');
            $('.navbar-dropdown').slideUp("slow");
        }
    });
});
