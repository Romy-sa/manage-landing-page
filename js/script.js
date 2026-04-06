const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    if(menu.ariaExpanded = "false") {
        menu.ariaExpanded = "true";
        menuBtnToggle();
    } else {
        menu.ariaExpanded = "false";
        menuBtnToggle();
    }
});

function menuBtnToggle() {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex"); 
    menuBtn.classList.toggle("open");
}