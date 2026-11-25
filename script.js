
// Function to switch between pages
function showPage(pageId) {

    // Hide all pages
    $(".page").removeClass("active");

    // Show selected page
    $("#" + pageId).addClass("active");

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// jQuery document ready
$(document).ready(function () {

    // Show home page by default
    showPage("home");

    // Navigation hover effect
    $(".navbar ul li a").hover(
        function () {
            $(this).css("color", "#38bdf8");
        },
        function () {
            $(this).css("color", "white");
        }
    );

    // Home card hover effect
    $(".home-card").hover(
        function () {
            $(this).css("transform", "translateY(-5px)");
            $(this).css("transition", "0.3s");
        },
        function () {
            $(this).css("transform", "translateY(0)");
        }
    );

});
