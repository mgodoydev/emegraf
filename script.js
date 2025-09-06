// Menú hamburguesa (mobile)
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu){
  menuToggle.addEventListener("click", () => {
    const isOpen = getComputedStyle(menu).display !== "none";
    menu.style.display = isOpen ? "none" : "block";
  });

  // Cerrar al elegir un enlace en mobile
  menu.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=> { 
      if (window.innerWidth <= 900) menu.style.display="none";
    });
  });
}
