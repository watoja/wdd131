document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // show menu on large screens greater than 700
    function checkScreenSize() {
        if (window.innerWidth >= 700) {
            navMenu.classList.add("show");
        } else {
            navMenu.classList.remove("show");
        }
    }

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
