const btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", function () {    
    //document.getElementById("icon-menu").style.backgroundImage = "url('img/icon-close.svg')";
    //let visible = btnMenu.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
   
    let visible = btnMenu.getAttribute('aria-expanded');
    if (visible == "true") {
        document.getElementById("logo").setAttribute("src", "img/logo-bookmark-white.svg");
        document.getElementById("header").classList.add("menu-movil");
        document.getElementById("icon-menu").classList.add("bg-icon");
       
    } else {
        document.getElementById("logo").setAttribute("src", "img/logo-bookmark.svg");
        document.getElementById("header").classList.remove('menu-movil');
        document.getElementById("icon-menu").classList.remove("bg-icon");
    }

});


