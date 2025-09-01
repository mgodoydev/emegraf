// Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});
