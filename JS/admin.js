const adminMenuToggle = document.querySelector(".admin-menu-toggle");
const adminSidebar = document.querySelector(".admin-sidebar");
const adminOverlay = document.querySelector(".admin-sidebar-overlay");

// Open Sidebar

adminMenuToggle.addEventListener("click", function () {
  adminSidebar.classList.add("open");

  adminOverlay.classList.add("show");
});

// Close Sidebar

adminOverlay.addEventListener("click", function () {
  adminSidebar.classList.remove("open");

  adminOverlay.classList.remove("show");
});

// Close Sidebar after clicking a menu item

const adminSidebarLinks = document.querySelectorAll(".admin-sidebar li a");

adminSidebarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    adminSidebar.classList.remove("open");

    adminOverlay.classList.remove("show");
  });
});
