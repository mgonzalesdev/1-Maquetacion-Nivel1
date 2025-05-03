const btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", function () {
    updateMenu();
});

let menu = document.getElementById('navbarSupportedContent');
menu.addEventListener("click", function () {
    let visible = btnMenu.getAttribute('aria-expanded');
    if (visible == "true") {
        updateMenu();
        btnMenu.click();
    }
});

function updateMenu() {
    let visible = btnMenu.getAttribute('aria-expanded');
    let logo = document.getElementById("logo");
    let header = document.getElementById("header");
    let btnLogin = document.getElementById("btn-login");

    if (visible == "true") {
        logo.setAttribute("src", "img/logo-bookmark-white.svg");
        header.classList.add("menu-movil");
        btnLogin.classList.remove("btn-danger");
        btnLogin.classList.add("btn-outline-light");

    } else {
        logo.setAttribute("src", "img/logo-bookmark.svg");
        btnLogin.classList.remove("btn-outline-light");
        btnLogin.classList.add("btn-danger");
        header.classList.remove('menu-movil');
    }
}


