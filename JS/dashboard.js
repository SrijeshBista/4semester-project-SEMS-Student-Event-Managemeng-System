const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay");
const menuLinks = document.querySelectorAll(".sidebar a");

// Open sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Close when clicking overlay
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// Close after clicking any sidebar link (mobile)
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        }
    });
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }
});