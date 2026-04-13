const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const email = document.getElementById("email");
const errMsg = document.getElementById("error-message");
const form = document.getElementById("form");


// Mobile nav menu toggle
menuBtn.addEventListener("click", () => {
    const isExpanded = menu.getAttribute("aria-expanded");
    if(menu.isExpanded == "false") {
        menuBtn.setAttribute("aria-expanded","true");
        menuBtnToggle();
    } else {
        menuBtn.setAttribute("aria-expanded","false");
        menuBtnToggle();
    }
});

//  Email submit event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
});

//  Show/hide menu in smaller screens
function menuBtnToggle() {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex"); 
    menuBtn.classList.toggle("open");
}

//  Check if email input is valid
function checkEmail() {
    let re = String(email.value)
    .toLowerCase()
    .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if(email.value == '') {
        errorMessage("Email can not be empty!");
    } else if (!re) {
        errorMessage("Please enter a vaild email!");
    } else {
        email.value = "";
        clearErrorMessage();
    }
}

//  Error Message 
function errorMessage(message) {
    errMsg.textContent = message;
    errMsg.classList.remove("hidden");
    errMsg.classList.add("block");
}

//  Clear error message
function clearErrorMessage() {
    errMsg.textContent = "";
    errMsg.classList.add("hidden");
    errMsg.classList.remove("block");
}