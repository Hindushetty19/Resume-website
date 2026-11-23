
// Function to navigate between pages

function showPage(pageId) {

    // Hide all pages
    $(".page").removeClass("active");

    // Show selected page
    $("#" + pageId).addClass("active");

    // Scroll to top
    window.scrollTo(0, 0);
}


// jQuery document ready function

$(document).ready(function() {

    // Display home page by default
    showPage("home");

    // Navigation hover effect
    $("nav a").hover(

        function() {
            $(this).css("color", "#60a5fa");
        },

        function() {
            $(this).css("color", "white");
        }

    );

});
