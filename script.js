// Display a welcome message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to the Mother Teresa Tribute Page!");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Show a message when the tribute button is clicked
const tributeButton = document.querySelector(".hero-button");

tributeButton.addEventListener("click", function () {
    console.log("Discover the inspiring life of Mother Teresa!");
});