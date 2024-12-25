// Smooth scrolling for navigation links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
}
